import { useEffect, useRef, type CSSProperties } from 'react';
import { methodology, MOTION_COLORS, type MethodStep } from './data/motion';

/**
 * B2 · Methodology helix
 * A 3D double helix (Canvas 2D, no dependencies) coloured Understand → Define → Design → Validate,
 * with one card per step riding on the helix. Text content is real DOM (SEO / prerender friendly);
 * the canvas + floating cards are decorative (aria-hidden).
 *
 * Layout (see motion.css):
 *  ≥1024px  text left, helix right, cards alternate left/right of the helix
 *  640–1023 helix on top, text below
 *  <640     helix left, cards stacked on the right, text below (descriptions hidden)
 */

type RGB = [number, number, number];

interface MethodologyHelixProps {
  eyebrow?: string;
  title?: string;
  steps?: MethodStep[];
  /** Spin speed multiplier. */
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

const hexToRgb = (hex: string): RGB => {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h.slice(0, 6), 16);
  return Number.isNaN(n) ? [110, 231, 183] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const rgba = (c: RGB, a: number) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;

export default function MethodologyHelix({
  eyebrow = methodology.eyebrow,
  title = methodology.title,
  steps = methodology.steps,
  speed = 1,
  className,
  style,
}: MethodologyHelixProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!stage || !canvas || !ctx) return;

    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cols = steps.map((s) => hexToRgb(MOTION_COLORS[s.hue]));
    const N = cols.length;

    // Helix geometry
    const NP = 40, R = 0.5, STEP = 0.42, Y0 = -1.55, Y1 = 1.55, LEAN = -0.18, D = 4, SEG = 220;
    const rungs = steps.map((_, k) => Math.round(((k + 0.5) / N) * (NP - 1)));

    // Colour along the helix: one zone per step, softly blended at the borders
    const colorAt = (t: number): RGB => {
      let c = cols[0];
      for (let n = 0; n < N - 1; n++) {
        const edge = (n + 1) / N;
        let k = Math.max(0, Math.min(1, (t - (edge - 0.07)) / 0.14));
        k = k * k * (3 - 2 * k);
        if (k > 0) {
          const nx = cols[n + 1];
          c = [c[0] + (nx[0] - c[0]) * k, c[1] + (nx[1] - c[1]) * k, c[2] + (nx[2] - c[2]) * k];
        }
      }
      return c;
    };
    const soft = (c: RGB): RGB => [c[0] + (236 - c[0]) * 0.45, c[1] + (238 - c[1]) * 0.45, c[2] + (242 - c[2]) * 0.45];

    // Layout state (recomputed on resize)
    let W = 0, H = 0, dpr = 1, mode: 'side' | 'cards' = 'side';
    let CX = 0, CY = 0, SC = 100, labelOff = 0, labelX = 0, cardW = 0;

    const resize = () => {
      const r = stage.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      // Labels alternate either side of the helix when there is room for both
      // the labels and a full-height helix between them. Beside the text column
      // (desktop) that holds down to a 440px stage, since the stage height is set
      // by the text anyway. In the single-column layout a stage under 560px would
      // squeeze the helix to a thin strand in a tall empty box, so the labels
      // stack to its right instead and the helix gets the width.
      const besideText = window.matchMedia('(min-width: 1024px)').matches;
      mode = W < (besideText ? 440 : 560) ? 'cards' : 'side';
      stage.dataset.mode = mode;
      const labels = labelRefs.current.filter(Boolean) as HTMLDivElement[];
      if (mode === 'cards') {
        // The labels only need about 96px; everything else goes to the helix,
        // which sits against the left edge (its half-width is ~0.8 × SC) instead
        // of being pinned at a quarter of the stage.
        const LABEL_MIN = 96;
        SC = Math.min(H * 0.27, Math.max(W * 0.33, (W - LABEL_MIN - 46) / 1.6));
        CX = SC * 0.8 + 4; CY = H / 2;
        labelX = CX + SC * 0.8 + 12;
        cardW = Math.max(LABEL_MIN, W - labelX - 20);
        labels.forEach((el) => { el.style.width = `${cardW}px`; });
      } else {
        labels.forEach((el) => { el.style.width = ''; });
        const maxLabel = labels.reduce((m, el) => Math.max(m, el.offsetWidth), 150);
        CX = W / 2; CY = H / 2;
        labelOff = W / 2 - 16 - maxLabel;
        SC = Math.max(60, Math.min(H * 0.27, (labelOff - 10) / 0.77));
      }
      if (!raf) draw(0);
    };

    // Pointer tilt
    const mouse = { x: 0, y: 0, inside: false };
    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      mouse.inside = true;
      if (!raf) draw(0);
    };
    const onLeave = () => { mouse.inside = false; };

    const sparks = Array.from({ length: 18 }, (_, i) => ({ s: i % 2, u: Math.random() * (NP - 1), v: 2.5 + Math.random() * 3.5 }));
    let time = 0, tx = 0, ty = 0;

    const draw = (dt: number) => {
      time += dt * speed;
      const k = reduceMq.matches ? 1 : Math.min(1, dt * 2.5);
      tx += ((mouse.inside ? mouse.y * 0.38 : 0) - tx) * k;
      ty += ((mouse.inside ? mouse.x * 0.7 : 0) - ty) * k;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const spin = time * 0.5, ks = Math.max(0.6, SC / 230);
      const cyy = Math.cos(ty), syy = Math.sin(ty), cxx = Math.cos(tx), sxx = Math.sin(tx), czz = Math.cos(LEAN), szz = Math.sin(LEAN);
      const proj = (x: number, y: number, z: number): [number, number, number, number] => {
        const x1 = x * cyy + z * syy, z1 = -x * syy + z * cyy;
        const y1 = y * cxx - z1 * sxx, z2 = y * sxx + z1 * cxx;
        const x2 = x1 * czz - y1 * szz, y2 = x1 * szz + y1 * czz;
        const p = D / (D + z2);
        return [CX + x2 * SC * p, CY + y2 * SC * p, z2, p];
      };
      const pt = (u: number, s: number) => {
        const y = Y0 + ((Y1 - Y0) * u) / (NP - 1), th = u * STEP + spin + (s ? Math.PI : 0);
        return proj(R * Math.cos(th), y, R * Math.sin(th));
      };
      const front = (z: number) => Math.max(0, Math.min(1, (0.65 - z) / 1.3));
      const colAt = (u: number, s: number) => { const c = colorAt(u / (NP - 1)); return s ? soft(c) : c; };

      // Backbones (depth-faded)
      const al = [0.12, 0.3, 0.6, 1], lw = [1.1, 1.6, 2.2, 2.8];
      ctx.lineCap = 'round';
      for (let s = 0; s < 2; s++) {
        let prev = pt(0, s);
        for (let j = 1; j <= SEG; j++) {
          const u = (j / SEG) * (NP - 1), cur = pt(u, s);
          const b = Math.min(3, Math.floor(front((prev[2] + cur[2]) / 2) * 4));
          ctx.strokeStyle = rgba(colAt(u, s), al[b] * (s ? 0.85 : 1));
          ctx.lineWidth = lw[b] * ks;
          ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(cur[0], cur[1]); ctx.stroke();
          prev = cur;
        }
      }

      // Rungs + nodes
      const nodes: { p: ReturnType<typeof pt>; s: number; u: number }[] = [];
      ctx.lineWidth = 1.4 * ks;
      for (let i = 0; i < NP; i++) {
        const a = pt(i, 0), b = pt(i, 1), f = front((a[2] + b[2]) / 2), a2 = 0.08 + 0.45 * f;
        ctx.strokeStyle = rgba(colAt(i, 0), a2);
        ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(a[0] + (b[0] - a[0]) * 0.46, a[1] + (b[1] - a[1]) * 0.46); ctx.stroke();
        ctx.strokeStyle = rgba(colAt(i, 1), a2 * 0.8);
        ctx.beginPath(); ctx.moveTo(a[0] + (b[0] - a[0]) * 0.54, a[1] + (b[1] - a[1]) * 0.54); ctx.lineTo(b[0], b[1]); ctx.stroke();
        nodes.push({ p: a, s: 0, u: i }, { p: b, s: 1, u: i });
      }
      nodes.sort((m, n) => n.p[2] - m.p[2]);
      for (const nd of nodes) {
        const f = front(nd.p[2]), c = colAt(nd.u, nd.s);
        ctx.shadowBlur = f > 0.72 ? 16 * ks : 0;
        ctx.shadowColor = rgba(c, 0.9);
        ctx.fillStyle = rgba(c, (nd.s ? 0.18 : 0.2) + 0.8 * f);
        ctx.beginPath(); ctx.arc(nd.p[0], nd.p[1], 3.4 * nd.p[3] * ks, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Sparks
      ctx.globalCompositeOperation = 'lighter';
      for (const sp of sparks) {
        sp.u += sp.v * dt * speed;
        if (sp.u > NP - 1) sp.u -= NP - 1;
        for (let t = 0; t < 6; t++) {
          const u = sp.u - t * 0.14;
          if (u < 0) break;
          const q = pt(u, sp.s), f = front(q[2]);
          ctx.fillStyle = rgba(colAt(u, 1), (1 - t / 6) * (0.3 + 0.7 * f));
          ctx.beginPath(); ctx.arc(q[0], q[1], (2.4 - t * 0.3) * q[3] * ks, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalCompositeOperation = 'source-over';

      // Step cards + leader lines
      const items: { k: number; el: HTMLDivElement; a: ReturnType<typeof pt>; f: number; side: number; lx: number; ly: number; h: number }[] = [];
      steps.forEach((_, kk) => {
        const el = labelRefs.current[kk];
        if (!el) return;
        const a = pt(rungs[kk], 0), f = front(a[2]);
        const side = mode === 'cards' ? 1 : kk % 2 === 0 ? -1 : 1;
        const lx = mode === 'cards' ? labelX : CX + side * labelOff;
        items.push({ k: kk, el, a, f, side, lx, ly: a[1], h: el.offsetHeight || 48 });
      });
      if (mode === 'cards' && items.length) {
        // keep stacked cards in order (01 → 0N) and never overlapping
        const GAP = 10;
        for (let i = 1; i < items.length; i++) {
          const prev = items[i - 1], cur = items[i], minY = prev.ly + prev.h / 2 + GAP + cur.h / 2;
          if (cur.ly < minY) cur.ly = minY;
        }
        const last = items[items.length - 1], maxY = H - last.h / 2 - 8, minTop = items[0].h / 2 + 8;
        if (last.ly > maxY) { const d = last.ly - maxY; items.forEach((it) => { it.ly -= d; }); }
        if (items[0].ly < minTop) { const d = minTop - items[0].ly; items.forEach((it) => { it.ly += d; }); }
      }
      for (const it of items) {
        const c = cols[it.k];
        ctx.strokeStyle = rgba(c, 0.15 + 0.6 * it.f); ctx.lineWidth = 1;
        ctx.setLineDash([3, 4]); ctx.beginPath(); ctx.moveTo(it.a[0], it.a[1]); ctx.lineTo(it.lx, it.ly); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = rgba(c, 0.5 + 0.5 * it.f); ctx.beginPath(); ctx.arc(it.lx, it.ly, 2.5, 0, Math.PI * 2); ctx.fill();
        it.el.style.transform = `translate(${(it.lx + it.side * 10).toFixed(1)}px, ${it.ly.toFixed(1)}px) translate(${it.side < 0 ? '-100%' : '0'}, -50%)`;
        it.el.style.opacity = (0.45 + 0.55 * it.f).toFixed(3);
      }
    };

    // Animation loop — paused off-screen and for reduced motion
    let raf = 0, last = 0, visible = true;
    const loop = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      draw(dt);
      raf = visible && !reduceMq.matches ? requestAnimationFrame(loop) : 0;
    };
    const start = () => { if (!raf && visible && !reduceMq.matches) { last = 0; raf = requestAnimationFrame(loop); } };

    const ro = new ResizeObserver(resize);
    ro.observe(stage);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); }, { rootMargin: '120px' });
    io.observe(stage);
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);
    const onMq = () => { if (reduceMq.matches) draw(0); else start(); };
    reduceMq.addEventListener('change', onMq);
    document.fonts?.ready.then(resize);
    resize();
    start();

    return () => {
      cancelAnimationFrame(raf); raf = 0;
      ro.disconnect(); io.disconnect();
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
      reduceMq.removeEventListener('change', onMq);
    };
  }, [steps, speed]);

  return (
    <section className={`mh ${className ?? ''}`} style={style} aria-labelledby="mh-title">
      <div className="mh__inner">
        <div className="mh__text">
          <p className="mh__eyebrow">{eyebrow}</p>
          <h2 id="mh-title" className="mh__title">{title}</h2>
          <ol className="mh__steps">
            {steps.map((s, k) => (
              <li key={s.id} className="mh__step" style={{ '--hue': MOTION_COLORS[s.hue] } as CSSProperties}>
                <div className="mh__step-head">
                  <span className="mh__step-num">{String(k + 1).padStart(2, '0')}</span>
                  <span className="mh__step-label">{s.label}</span>
                </div>
                <h3 className="mh__step-title">{s.title}</h3>
                <p className="mh__step-desc">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mh__stage" ref={stageRef} aria-hidden="true">
          <canvas ref={canvasRef} className="mh__canvas" />
          {steps.map((s, k) => (
            <div
              key={s.id}
              ref={(el: HTMLDivElement | null) => { labelRefs.current[k] = el; }}
              className="mh__label"
              style={{ '--hue': MOTION_COLORS[s.hue] } as CSSProperties}
            >
              <span className="mh__label-num">{String(k + 1).padStart(2, '0')}</span>
              <span className="mh__label-name">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
