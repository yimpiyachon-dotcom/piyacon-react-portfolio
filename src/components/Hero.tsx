import React, { useEffect, useRef, useState } from 'react';
import { PROFILE_IMG } from '../data/portfolioData';

export function TypewriterText() {
  const phrases = [
    'Senior Product Designer',
    'UX/UI Systems Thinker',
    'Data Product Specialist',
    'Designing for clarity at scale',
  ];

  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(() => {
      const nextText = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);

      setText(nextText);

      if (!deleting && nextText === current) {
        setTimeout(() => setDeleting(true), 1400);
      }

      if (deleting && nextText === '') {
        setDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
      }
    }, deleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return (
    <span>
      {text}
      <span className="typewriter-cursor" style={{ height: '0.9em' }} />
    </span>
  );
}

export function HeroBackground() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: '8% 10% auto',
          height: 420,
          background: 'radial-gradient(circle, rgba(110,231,183,0.12) 0%, rgba(110,231,183,0) 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '-8%',
          top: '8%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0) 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '5%',
          bottom: '-10%',
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110,231,183,0.1) 0%, rgba(110,231,183,0) 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}

export function KpiStrip() {
  const items = [
    { value: '5+', label: 'years in product design' },
    { value: '29', label: 'case studies built' },
    { value: '40+', label: 'web portals shipped' },
    { value: '15k+', label: 'farmers reached' },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 14,
        marginTop: 32,
      }}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className="kpi-animate"
          style={{
            background: 'rgba(19,20,23,0.72)',
            border: '1px solid #24262B',
            borderRadius: 14,
            padding: '18px 18px 14px',
            animationDelay: `${index * 80}ms`,
          }}
        >
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 800, color: '#F5F5F4', letterSpacing: '-0.04em' }}>
            {item.value}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#9CA0A8', marginTop: 6, letterSpacing: '0.04em' }}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function InteractivePortrait({ onShowToast, onOpenAbout, onSelectCv, onOpenContact }: any) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, glareOpacity: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || flipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 13;
    const rotateX = -((y - centerY) / centerY) * 13;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
      glareX: Math.round(glareX),
      glareY: Math.round(glareY),
      glareOpacity: 0.28,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, glareOpacity: 0 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div
        ref={cardRef}
        className="portrait-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ width: '100%', maxWidth: 360, aspectRatio: '3/4', position: 'relative', cursor: 'pointer' }}
        onClick={() => setFlipped(!flipped)}
        title="Click to flip card & inspect Designer DNA"
      >
        <div
          className="portrait-card-3d"
          style={{
            width: '100%',
            height: '100%',
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            borderRadius: 24,
            boxShadow:
              tilt.glareOpacity > 0
                ? '0 28px 65px -10px rgba(0,0,0,0.85), 0 0 36px -4px rgba(110,231,183,0.3)'
                : '0 24px 60px -12px rgba(0,0,0,0.8), 0 0 24px -8px rgba(110,231,183,0.16)',
          }}
        >
          <div className={`portrait-card-inner ${flipped ? 'is-flipped' : ''}`}>
            <div
              className="portrait-face"
              style={{ border: '1px solid rgba(110, 231, 183, 0.4)', background: '#17191E', pointerEvents: flipped ? 'none' : 'auto' }}
            >
              <img
                src={PROFILE_IMG}
                alt="Piyachon Wanburi (Yim) - Senior UX/UI Designer"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop&auto=format';
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  transform: `scale(1.06) translate(${tilt.rotateY * -0.6}px, ${tilt.rotateX * 0.6}px)`,
                  transition: 'transform 140ms ease-out',
                }}
              />

              <div
                className="glare-effect"
                style={{
                  opacity: tilt.glareOpacity,
                  background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(110, 231, 183, 0.45) 0%, rgba(255,255,255,0.12) 30%, transparent 65%)`,
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,11,13,0.88) 0%, rgba(10,11,13,0.15) 52%, rgba(10,11,13,0.45) 100%)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(10, 11, 13, 0.88)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 13px',
                  borderRadius: 9999,
                  border: '1px solid rgba(110, 231, 183, 0.35)',
                }}
              >
                <span className="nav-dot" style={{ width: 7, height: 7 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6EE7B7' }}>Open for work</span>
              </div>

              <div style={{ position: 'absolute', right: 16, bottom: 16, left: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['UX Research', 'AI Design', 'Enterprise SaaS'].map((chip) => (
                    <div
                      key={chip}
                      className="floating-interactive-chip"
                      style={{
                        background: 'rgba(19,20,23,0.9)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 999,
                        padding: '6px 10px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: '#F5F5F4',
                      }}
                    >
                      {chip}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="portrait-face portrait-back">
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', color: '#6EE7B7', textTransform: 'uppercase' }}>
                  Designer DNA
                </div>
                <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    ['Focus', 'Complex systems'],
                    ['Method', 'Research-led UI'],
                    ['Strength', 'Measurement + clarity'],
                    ['Style', 'Calm, precise, resilient'],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 8 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5F6369' }}>{label}</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#F5F5F4', fontWeight: 600 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenAbout();
                  }}
                  style={{
                    background: '#6EE7B7',
                    color: '#0A0B0D',
                    border: 'none',
                    borderRadius: 8,
                    padding: '10px 14px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Bio & Approach
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCv();
                  }}
                  style={{
                    background: 'transparent',
                    color: '#F5F5F4',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 8,
                    padding: '10px 14px',
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: 'pointer',
                  }}
                >
                  Download CV
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenContact();
                    onShowToast('Contact details ready to copy');
                  }}
                  style={{
                    background: 'transparent',
                    color: '#6EE7B7',
                    border: '1px solid rgba(110,231,183,0.35)',
                    borderRadius: 8,
                    padding: '10px 14px',
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: 'pointer',
                  }}
                >
                  Contact me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
