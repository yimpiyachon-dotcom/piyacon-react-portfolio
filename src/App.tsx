import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { PROFILE_IMG } from "./data/portfolioData";

/**
 * Portfolio content (projects, KPIs, case-study steps) is authored as plain data
 * in ./data/portfolioData and its per-project shape varies by project, so the
 * fields every component relies on are typed and the rest stays open.
 */
type Project = {
  id: string;
  title: string;
  client?: string;
  image?: string;
  imageAlt?: string;
  [key: string]: any;
};
type Kpi = { value: string; label: string; sub?: string };
type Stat = { value?: string; label?: string; [key: string]: any };
type ShowToast = (message: string) => void;
type Handler = () => void;

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #0A0B0D;
    color: #F5F5F4;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .nav-dot {
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background-color: #6EE7B7;
    position: relative;
  }
  .nav-dot::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 9999px;
    background: rgba(110, 231, 183, 0.4);
    animation: navPulse 2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  }
  @keyframes navPulse {
    0% { transform: scale(0.9); opacity: 0.8; }
    50% { transform: scale(1.6); opacity: 0; }
    100% { transform: scale(0.9); opacity: 0; }
  }

  @keyframes typewriterBlink {
    0%, 45% { opacity: 1; }
    50%, 95% { opacity: 0; }
    100% { opacity: 1; }
  }
  .typewriter-cursor {
    display: inline-block;
    width: 3px;
    margin-left: 4px;
    background: #6EE7B7;
    animation: typewriterBlink 1s step-end infinite;
    vertical-align: -0.15em;
  }

  /* ── Responsive Nav ── */
  .nav-desktop-menu {
    display: flex;
  }
  .nav-hamburger-btn {
    display: none;
  }
  .nav-status-pill {
    display: flex;
  }
  @media (max-width: 860px) {
    .nav-desktop-menu {
      display: none;
    }
    .nav-hamburger-btn {
      display: flex;
    }
    .nav-status-pill {
      display: none;
    }
  }
  .nav-mobile-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 280ms ease;
    border-top: 1px solid transparent;
  }
  .nav-mobile-menu.is-open {
    max-height: 400px;
    border-top: 1px solid #24262B;
  }
  @media (max-width: 420px) {
    .nav-role-badge {
      display: none;
    }
  }

  .metric-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(10, 11, 13, 0.9);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(110, 231, 183, 0.25);
    color: #6EE7B7;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 9999px;
    letter-spacing: 0.02em;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }

  .metric-badge-neutral {
    background: rgba(19, 20, 23, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #E2E8F0;
  }

  /* Section header: title + "view all" action.
     The title has white-space: nowrap, so on narrow screens the action button
     gets squeezed and wraps mid-phrase — stack the two rows instead. */
  .section-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .section-head-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5F6369;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }
  .section-head-rule {
    flex: 1;
    height: 1px;
    background: #24262B;
  }
  .section-head-action {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    flex-shrink: 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: #6EE7B7;
    background: rgba(110, 231, 183, 0.06);
    border: 1px solid rgba(110, 231, 183, 0.3);
    border-radius: 9999px;
    /* 40px tall: a comfortable touch target, unlike the old bare text link. */
    padding: 10px 18px;
    cursor: pointer;
    letter-spacing: 0.04em;
    transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
  }
  .section-head-action:hover {
    background: rgba(110, 231, 183, 0.12);
    border-color: #6EE7B7;
  }
  .section-head-action:active {
    transform: scale(0.97);
  }
  .section-head-action .arrow {
    transition: transform 160ms ease;
  }
  .section-head-action:hover .arrow {
    transform: translateX(3px);
  }
  @media (max-width: 700px) {
    /* The rule line is decoration; dropping it buys the label the room it
       needs to stay on one row beside the button. */
    .section-head-rule {
      display: none;
    }
    .section-head-title {
      font-size: 10px;
      letter-spacing: 0.06em;
    }
    .section-head-action {
      font-size: 12px;
      padding: 9px 15px;
    }
  }

  /* ---- Loading: page transition ---- */
  @keyframes page-enter {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .page-enter {
    /* fill-mode "backwards", not "both": a lingering transform on the wrapper
       would become the containing block for the pages' position:fixed back
       buttons and pin them to the page instead of the viewport. */
    animation: page-enter 380ms cubic-bezier(0.22, 1, 0.36, 1) backwards;
  }
  .route-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    z-index: 300;
    background: linear-gradient(90deg, transparent, #6EE7B7 40%, #A7F3D0 60%, transparent);
    transform-origin: 0 50%;
    animation: route-progress 520ms ease-out forwards;
    box-shadow: 0 0 12px rgba(110, 231, 183, 0.6);
  }
  @keyframes route-progress {
    0%   { transform: scaleX(0); opacity: 1; }
    70%  { transform: scaleX(0.85); opacity: 1; }
    100% { transform: scaleX(1); opacity: 0; }
  }

  /* ---- Loading: image lazy-load skeleton ---- */
  .img-frame {
    position: relative;
    overflow: hidden;
    background: #14161A;
  }
  .img-frame::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(110, 231, 183, 0.09) 45%,
      rgba(255, 255, 255, 0) 70%
    );
    background-size: 220% 100%;
    animation: skeleton-sweep 1.25s ease-in-out infinite;
    pointer-events: none;
    transition: opacity 320ms ease;
  }
  .img-frame.is-loaded::after {
    opacity: 0;
    animation: none;
  }
  @keyframes skeleton-sweep {
    from { background-position: 160% 0; }
    to   { background-position: -60% 0; }
  }
  .img-frame > img {
    opacity: 0;
    transition: opacity 420ms ease, transform 420ms ease;
    transform: scale(1.02);
  }
  .img-frame.is-loaded > img {
    opacity: 1;
    transform: scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .page-enter,
    .route-progress,
    .img-frame::after,
    .img-frame > img {
      animation: none !important;
      transition: none !important;
    }
    .img-frame > img { opacity: 1; transform: none; }
  }

  /* Printing the resume.
     The old rule only flipped visibility, but the resume lives inside a fixed,
     height-capped, scrolling modal — so the printer got one clipped viewport
     (usually blank). Everything below unwinds that chrome and lets the resume
     flow as normal page content across as many sheets as it needs. */
  @media print {
    @page {
      size: A4;
      margin: 14mm;
    }
    html, body {
      background: #FFFFFF !important;
      height: auto !important;
      overflow: visible !important;
    }
    body * {
      visibility: hidden;
    }
    .print-hide {
      display: none !important;
    }
    #resume-print-area, #resume-print-area * {
      visibility: visible;
    }
    /* Unpin the modal: static flow, no height cap, no scroll container. */
    .cv-modal-overlay {
      position: static !important;
      display: block !important;
      padding: 0 !important;
      background: none !important;
      backdrop-filter: none !important;
    }
    .cv-modal-dialog {
      max-width: none !important;
      max-height: none !important;
      overflow: visible !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      background: #FFFFFF !important;
      display: block !important;
    }
    #resume-print-area {
      position: static !important;
      max-height: none !important;
      overflow: visible !important;
      padding: 0 !important;
      background: #FFFFFF !important;
    }
    /* Force legible ink: the on-screen palette is near-black on near-black. */
    #resume-print-area, #resume-print-area * {
      color: #111827 !important;
      background: transparent !important;
      box-shadow: none !important;
      border-color: #D1D5DB !important;
    }
    #resume-print-area img {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
    /* Keep a section from being split across a page break mid-heading. */
    #resume-print-area h1,
    #resume-print-area h2,
    #resume-print-area h3 {
      break-after: avoid;
    }
  }

  .tag-chip {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #9CA0A8;
    background: #1B1D21;
    border: 1px solid #24262B;
    padding: 3px 10px;
    border-radius: 6px;
    letter-spacing: 0.02em;
  }

  .stack-chip {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: #5F6369;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 2px 8px;
    border-radius: 4px;
  }

  .project-card {
    transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1), border-color 260ms ease, box-shadow 260ms ease;
  }
  .project-card:hover {
    transform: translateY(-4px);
    border-color: rgba(110, 231, 183, 0.35) !important;
    box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.6), 0 0 20px -6px rgba(110, 231, 183, 0.15);
  }
  .project-card img {
    transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .project-card:hover img {
    transform: scale(1.04);
  }

  .cta-reveal {
    opacity: 0;
    transform: translateY(6px);
    transition: all 220ms ease;
  }
  .project-card:hover .cta-reveal {
    opacity: 1;
    transform: translateY(0);
  }

  .before-after-row:hover {
    background: rgba(255, 255, 255, 0.03);
  }
  .before-after-row:hover .after-val {
    color: #6EE7B7 !important;
  }

  .portrait-container {
    perspective: 1200px;
  }
  .portrait-card-3d {
    transition: transform 180ms cubic-bezier(0.2, 0, 0.2, 1), box-shadow 260ms ease;
    transform-style: preserve-3d;
    will-change: transform;
  }
  .portrait-card-inner {
    transition: transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-style: preserve-3d;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .portrait-card-inner.is-flipped {
    transform: rotateY(180deg);
  }
  .portrait-face {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 24px;
    overflow: hidden;
    /* Children using translateZ() escape the face plane, so backface-visibility
       alone lets them bleed through mid/post-flip on iOS + Android Chrome.
       Toggling opacity at the halfway point hides the inactive face for good. */
    transition: opacity 1ms linear 275ms;
  }
  .portrait-card-inner:not(.is-flipped) .portrait-back,
  .portrait-card-inner.is-flipped .portrait-face:not(.portrait-back) {
    opacity: 0;
  }
  .portrait-back {
    transform: rotateY(180deg);
    background: radial-gradient(circle at 50% 0%, #1c2229 0%, #111317 100%);
    border: 1px solid rgba(110, 231, 183, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    box-shadow: inset 0 0 40px rgba(110, 231, 183, 0.05);
  }
  .glare-effect {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 24px;
    mix-blend-mode: screen;
    transition: opacity 250ms ease;
    z-index: 20;
  }
  .floating-interactive-chip {
    transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
    cursor: pointer;
    user-select: none;
  }
  .floating-interactive-chip:hover {
    transform: translateY(-2px) scale(1.05);
    background: rgba(110, 231, 183, 0.18) !important;
    border-color: rgba(110, 231, 183, 0.5) !important;
    color: #A7F3D0 !important;
  }
  @keyframes floatBubble {
    0% { transform: translateY(0) scale(0.8); opacity: 1; }
    100% { transform: translateY(-40px) scale(1.2); opacity: 0; }
  }
  .bubble-energy {
    position: absolute;
    animation: floatBubble 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    pointer-events: none;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    font-size: 13px;
    color: #6EE7B7;
    text-shadow: 0 2px 8px rgba(0,0,0,0.8);
    z-index: 35;
  }

  @keyframes kpiFadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .kpi-animate {
    animation: kpiFadeIn 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .modal-overlay {
    animation: fadeInOverlay 200ms ease forwards;
  }
  @keyframes fadeInOverlay {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #0A0B0D;
  }
  ::-webkit-scrollbar-thumb {
    background: #24262B;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #3A3E46;
  }
`;

function InteractivePortrait({ onOpenAbout, onSelectCv, onOpenContact }: {
  onOpenAbout?: Handler;
  onSelectCv?: Handler;
  onOpenContact?: Handler;
}) {
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

    // Calculate rotation (-14deg to +14deg)
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <div
        ref={cardRef}
        className="portrait-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          maxWidth: 360,
          aspectRatio: "3/4",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => setFlipped(!flipped)}
        title="Click to flip card & inspect Designer DNA"
      >
        <div
          className="portrait-card-3d"
          style={{
            width: "100%",
            height: "100%",
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            borderRadius: 24,
            boxShadow: tilt.glareOpacity > 0
              ? `0 28px 65px -10px rgba(0,0,0,0.85), 0 0 36px -4px rgba(110,231,183,0.3)`
              : "0 24px 60px -12px rgba(0,0,0,0.8), 0 0 24px -8px rgba(110,231,183,0.16)",
          }}
        >
          <div className={`portrait-card-inner ${flipped ? "is-flipped" : ""}`}>
            {/* FRONT FACE */}
            <div
              className="portrait-face"
              style={{
                border: "1px solid rgba(110, 231, 183, 0.4)",
                background: "#17191E",
                pointerEvents: flipped ? "none" : "auto",
              }}
            >
              <img
                fetchPriority="high"
                decoding="async"
                src={PROFILE_IMG}
                alt="Piyachon Wanburi (Yim) - Senior UX/UI Designer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop&auto=format";
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                  transform: `scale(1.06) translate(${tilt.rotateY * -0.6}px, ${tilt.rotateX * 0.6}px)`,
                  transition: "transform 140ms ease-out",
                }}
              />
              
              {/* Dynamic lighting & glare overlay */}
              <div
                className="glare-effect"
                style={{
                  opacity: tilt.glareOpacity,
                  background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(110, 231, 183, 0.45) 0%, rgba(255,255,255,0.12) 30%, transparent 65%)`,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,11,13,0.88) 0%, rgba(10,11,13,0.15) 52%, rgba(10,11,13,0.45) 100%)",
                }}
              />

              {/* Floating Live Status Pill (Top Left) */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(10, 11, 13, 0.88)",
                  backdropFilter: "blur(10px)",
                  padding: "6px 13px",
                  borderRadius: 9999,
                  border: "1px solid rgba(110, 231, 183, 0.35)",
                  transform: "translateZ(30px)",
                }}
              >
                <div className="nav-dot" />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#6EE7B7",
                    fontWeight: 600,
                  }}
                >
                  Active in Bangkok · 5+ Yrs
                </span>
              </div>

              {/* Interactive Flip Hint Button (Top Right) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(true);
                }}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "rgba(19, 20, 23, 0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: 100,
                  padding: "6px 12px",
                  color: "#E2E8F0",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  cursor: "pointer",
                  transform: "translateZ(32px)",
                  transition: "all 150ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#6EE7B7";
                  e.currentTarget.style.color = "#6EE7B7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.color = "#E2E8F0";
                }}
              >
                <span>DNA</span>
                <span style={{ fontSize: 13 }}>↻</span>
              </button>



              {/* Bottom bio info overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 18,
                  left: 18,
                  right: 18,
                  transform: "translateZ(24px)",
                }}
              >
                <div style={{ marginBottom: 2 }}>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#F5F5F4",
                      lineHeight: 1.1,
                    }}
                  >
                    Piyachon Wanburi
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: "#6EE7B7",
                      marginTop: 3,
                      marginBottom: 10,
                    }}
                  >
                    Senior UX/UI Designer · Bangkok
                  </div>
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAbout?.();
                    }}
                    className="tag-chip floating-interactive-chip"
                    style={{ fontSize: 10, background: "rgba(10,11,13,0.85)" }}
                  >
                    🔍 User Research
                  </span>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAbout?.();
                    }}
                    className="tag-chip floating-interactive-chip"
                    style={{ fontSize: 10, background: "rgba(10,11,13,0.85)" }}
                  >
                    🏛️ KMUTNB
                  </span>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAbout?.();
                    }}
                    className="tag-chip floating-interactive-chip"
                    style={{ fontSize: 10, background: "rgba(10,11,13,0.85)" }}
                  >
                    🧪 Usability Testing
                  </span>
                </div>
              </div>
            </div>

            {/* BACK FACE: Designer DNA */}
            <div className="portrait-face portrait-back" style={{ pointerEvents: flipped ? "auto" : "none" }}>
              <div>
                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#6EE7B7", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    // DESIGNER DNA
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369" }}>Flip ↻</span>
                </div>

                {/* Headline */}
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 700, color: "#F5F5F4", marginBottom: 8 }}>
                  5+ Years Crafting Systems
                </div>

                {/* Bio */}
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.5, margin: "0 0 16px" }}>
                  Product design alumnus from KMUTNB. Specializing in complex data models, progressive disclosure, and enterprise token architectures.
                </p>

                {/* Skill chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["Figma", "Design Tokens", "GIS Viz", "IoT Dashboards", "Maze", "GA4"].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        padding: "3px 8px",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid #24262B",
                        color: "#6EE7B7",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCv?.();
                  }}
                  style={{
                    flex: 1,
                    background: "#6EE7B7",
                    color: "#0A0B0D",
                    border: "none",
                    borderRadius: 8,
                    padding: "10px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Full CV
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenContact?.();
                  }}
                  style={{
                    flex: 1,
                    background: "transparent",
                    color: "#F5F5F4",
                    border: "1px solid #24262B",
                    borderRadius: 8,
                    padding: "10px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#F5F5F4", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
        <span>✨ Move cursor to tilt in 3D</span>
        <span>·</span>
        <button
          onClick={() => setFlipped(!flipped)}
          style={{ background: "none", border: "none", color: "#6EE7B7", cursor: "pointer", fontSize: 11, padding: 0, fontFamily: "inherit" }}
        >
          {flipped ? "Show Photo" : "Click to Flip DNA"}
        </button>
      </div>
    </div>
  );
}

const projects = [
  {
    id: "smart-forest",
    title: "Smart Forest Platform",
    client: "VARUNA CO., LTD. (ARV / PTTEP)",
    timeline: "1 yr 8 mo · Oct 2024 – Present",
    hook: "Fragmented satellite & drone field telemetry unified into one carbon-tracking GIS command center.",
    role: "Lead UX/UI Designer",
    platform: "Web Application (GIS)",
    industry: "ClimateTech / SaaS",
    stack: ["Figma", "Design Tokens", "GIS Data Viz", "BaseBlocksUI"],
    image: "/img/29658f48d987.webp",
    imageAlt: "Aerial forest canopy with GIS digital heatmaps and telemetry overlay",
    badges: [
      { label: "−58% Audit Time", positive: true },
      { label: "12-Screen System", positive: null },
      { label: "3-Role IA", positive: null },
    ],
    kpis: [
      { value: "−58%", label: "Field survey dependency", sub: "audit hours reduced per month" },
      { value: "+73%", label: "Task completion rate", sub: "compliance verification workflow" },
      { value: "94%", label: "Analyst adoption rate", sub: "post-launch active WAU" },
    ],
    problem:
      "Forest asset management and carbon auditing relied on fragmented data silos, uncalibrated drone surveys, and slow manual field spreadsheets. Environmental analysts struggled to cross-reference satellite indices with carbon-stock updates — delaying ecological response and compromising carbon-credit audit transparency.",
    baselineStats: [
      { value: "14 hrs", label: "avg. to compile a field carbon audit report" },
      { value: "67%", label: "analyst time spent on manual CSV data reconciliation" },
      { value: "9×", label: "disconnected regional data sources cross-checked" },
    ],
    solutions: [
      {
        title: "Integrated Geospatial Viewport",
        body: "Multi-layered map interface rendering canopy density, biomass changes, and deforestation alerts in real time — eliminating static satellite TIFF downloads.",
      },
      {
        title: "Carbon Analytics Command Center",
        body: "Dedicated KPI dashboard calculating predictive carbon sequestration and verification stages, enabling non-technical executives to make decisions without a GIS specialist.",
      },
      {
        title: "Predictive Ecological Risk Panels",
        body: "Early-warning anomaly detection flagging drought and illegal encroachment before escalation — transforming the tool from passive reporting to proactive intervention.",
      },
      {
        title: "Progressive Disclosure Reporting",
        body: "Adaptive UI system serving both 10-second executive summaries and granular spectral band analysis through seamless depth toggles.",
      },
    ],
    impactTable: [
      { metric: "Field-survey hours / month", before: "~112 hrs", after: "~47 hrs", delta: "−58%" },
      { metric: "Compliance workflow task completion", before: "41%", after: "73%", delta: "+78%" },
      { metric: "Time-to-insight for carbon report", before: "14 hrs", after: "3.5 hrs", delta: "−75%" },
      { metric: "Analyst CSAT score (confidence)", before: "2.8 / 5", after: "4.6 / 5", delta: "+64%" },
    ],
    quote: "I used to spend half my morning just pulling data from three separate portals. Now everything I need to audit a forest plot is on one screen.",
    quoteRole: "Senior Environmental Analyst, Varuna Tech",
    learnings: [
      "Coordinating IA across 1 PM + 2 UX/UI designers + GIS data scientists required establishing shared design tokens for map symbology and spatial layers.",
      "Engineered BaseBlocksUI 1.6 as a tokenized component framework, enabling 34 components to be seamlessly reused when expanding to 2 new international regions.",
      "Solved executive vs. analyst tension via progressive disclosure: high-level sequestration KPIs default on top, with deep GIS rasters available on 1-click drilldown.",
    ],
  },
  {
    id: "smart-watcher",
    title: "Smart Watcher Platform",
    client: "VARUNA CO., LTD. (ARV)",
    timeline: "11 mo · Oct 2024 – Present",
    hook: "Hundreds of unclassified CCTV & sensor feeds consolidated into an AI-triaged security operations center.",
    role: "Lead UX/UI Designer",
    platform: "Web Application · Mobile",
    industry: "IoT / Security Tech",
    stack: ["Figma", "Design Tokens", "Real-time Telemetry", "AI/ML UI"],
    image: "/img/554d49d59f04.webp",
    imageAlt: "Security monitoring control room screens with camera feeds",
    badges: [
      { label: "−71% Alert Fatigue", positive: true },
      { label: "+88% Response Rate", positive: true },
      { label: "4.8★ CSAT", positive: null },
    ],
    kpis: [
      { value: "−71%", label: "Operator alert fatigue", sub: "false-positive dismissals/shift" },
      { value: "+88%", label: "Critical incident response rate", sub: "vs. legacy manual surveillance" },
      { value: "1.8 min", label: "Triage turnaround time", sub: "from 9.4 min baseline" },
    ],
    problem:
      "Security operators across industrial facilities were overwhelmed by an average of 340 raw alerts per shift. Without AI prioritization, genuine perimeter breaches and thermal anomalies were buried under false triggers, causing severe operator burnout.",
    baselineStats: [
      { value: "340", label: "avg. raw alerts per operator per 8-hour shift" },
      { value: "9.4 min", label: "avg. time to classify & dispatch a critical incident" },
      { value: "83%", label: "of total alerts were non-actionable false positives" },
    ],
    solutions: [
      {
        title: "AI-Triage Alert Hierarchy",
        body: "Replaced raw alert cascades with a 3-tier severity model (Critical, Warning, Low). Inline AI bounding boxes and confidence scores highlight exact incident triggers.",
      },
      {
        title: "Dynamic Spatial Camera Grid",
        body: "Replaced static 16-up walls with context-aware camera routing that auto-promotes adjacent perimeter feeds when a sensor triggers.",
      },
      {
        title: "Chronological Incident Handoff",
        body: "One-click digital incident logging with synchronized timestamps and snapshot packaging, eliminating shift-handoff communication gaps.",
      },
      {
        title: "Mobile Field Responder Companion",
        body: "Lightweight companion view designed for security patrol officers, featuring push-only emergency alerts with 1-tap route guidance.",
      },
    ],
    impactTable: [
      { metric: "Actionable alerts per operator shift", before: "340", after: "~15", delta: "−96%" },
      { metric: "Time to classify critical incident", before: "9.4 min", after: "1.8 min", delta: "−81%" },
      { metric: "Critical incident response rate", before: "47%", after: "89%", delta: "+88%" },
      { metric: "Operator retention (6-month)", before: "61%", after: "84%", delta: "+38%" },
    ],
    quote: "Before this, I closed my shifts feeling exhausted with hundreds of alerts unchecked. Now, high-risk events pop right to the front.",
    quoteRole: "Senior Control Room Operator, SecureVision Team",
    learnings: [
      "In high-stress control rooms, color cannot be the sole visual cue: paired severity colors with pulsing geometry, distinct audio frequencies, and keyboard hotkeys.",
      "Separated alert data feeds from presentation components via WebSocket tokens, allowing backend engineers to connect live computer vision models seamlessly.",
    ],
  },
  {
    id: "area-22",
    title: "Area 22 IOT Management",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "7 mo · Aug 2023 – Feb 2024",
    hook: "Unified remote gateway configuration and live telemetry back-office managing 400+ industrial IoT nodes.",
    role: "Senior UX/UI Designer",
    platform: "Web Back Office",
    industry: "Industrial IoT / Admin SaaS",
    stack: ["Figma", "Design System", "Hardware Telemetry", "RBAC"],
    image: "/img/3543491536f9.webp",
    imageAlt: "Industrial IoT analytics dashboard with live telemetry and data charts",
    badges: [
      { label: "−62% Setup Time", positive: true },
      { label: "99.4% Node Uptime", positive: true },
      { label: "400+ Gateways", positive: null },
    ],
    kpis: [
      { value: "−62%", label: "Node provisioning time", sub: "batch hardware setup per technician" },
      { value: "99.4%", label: "Fleet connectivity health", sub: "zero-packet-loss threshold" },
      { value: "−85%", label: "Outage diagnostic time", sub: "from 3.2 hrs to 28 mins" },
    ],
    problem:
      "Facility technicians had to manually SSH into individual sensor gateways across disparate warehouse and plant sites. Disconnected firmware versioning led to 38% configuration errors, frequent packet drops, and costly on-site engineer dispatches.",
    baselineStats: [
      { value: "45 min", label: "avg. time to provision a single IoT gateway node" },
      { value: "38%", label: "node firmware mismatch rate across client facilities" },
      { value: "3.2 hrs", label: "mean time to locate and diagnose network hardware failure" },
    ],
    solutions: [
      {
        title: "Batch Provisioning Wizard",
        body: "Guided 3-step setup UI allowing technicians to configure and test up to 50 gateways simultaneously with automated ping verification.",
      },
      {
        title: "Network Topology Health Canvas",
        body: "Interactive node canvas displaying mesh connections, signal-to-noise ratios, and battery levels with quick-filtering by facility zone.",
      },
      {
        title: "Remote FOTA Deployment Queue",
        body: "Staged Over-The-Air firmware rollouts with instant rollback mechanisms, preventing device bricking during maintenance windows.",
      },
      {
        title: "Granular RBAC Administration",
        body: "Role-tailored permissions separating plant managers, third-party contractors, and senior system architects.",
      },
    ],
    impactTable: [
      { metric: "Gateway provisioning time", before: "45 min", after: "17 min", delta: "−62%" },
      { metric: "Firmware mismatch incident rate", before: "38%", after: "4%", delta: "−89%" },
      { metric: "Mean time to triage node dropouts", before: "3.2 hrs", after: "28 min", delta: "−85%" },
      { metric: "Field technician task CSAT", before: "3.1 / 5", after: "4.8 / 5", delta: "+55%" },
    ],
    quote: "Batch provisioning used to take our entire weekend. With Area 22, we deploy fifty gateways before lunch with zero script errors.",
    quoteRole: "Lead IoT Hardware Engineer, Happy Three Creation",
    learnings: [
      "Field technicians often wear protective gloves and view ruggedized tablets outdoors; UI required minimum 48px touch targets and high-contrast telemetry text.",
      "Constructed a reusable data table component capable of handling 5,000+ live rows with virtual scrolling and instant column filtering.",
    ],
  },
  {
    id: "kanna-app",
    title: "Kanna Application & CMS",
    client: "VARUNA CO., LTD. (ARV / PTTEP)",
    timeline: "1 yr 3 mo · June 2022 – Aug 2023",
    hook: "AI-driven agricultural field diagnostics paired with a geospatial back-office for 15,000+ smallholder farmers.",
    role: "UX/UI Designer",
    platform: "Mobile App + Web CMS",
    industry: "Smart Agriculture / AgriTech",
    stack: ["Figma", "User Research", "Offline UX", "Mobile Design"],
    image: "/img/0ab2d8607d79.webp",
    imageAlt: "Agricultural sensor technology and smartphone plant disease inspection",
    badges: [
      { label: "+91% Diagnostic Accuracy", positive: true },
      { label: "15k+ Farmers", positive: null },
      { label: "−40% Crop Loss", positive: true },
    ],
    kpis: [
      { value: "+91%", label: "Crop disease triage rate", sub: "via offline on-device camera ML" },
      { value: "−40%", label: "Post-harvest crop loss", sub: "following preventative spray guides" },
      { value: "4.7★", label: "Farmer app rating", sub: "15,000+ verified smallholder accounts" },
    ],
    problem:
      "Smallholder farmers faced severe seasonal crop losses from pests and fungus without immediate agronomist support. Meanwhile, Varuna’s agricultural coordinators lacked field data to coordinate regional drone-spraying operations and resource allocation.",
    baselineStats: [
      { value: "5–7 days", label: "avg. turnaround for agronomists to visit and diagnose field disease" },
      { value: "72 hrs", label: "time needed to coordinate emergency drone spray missions" },
      { value: "36%", label: "historical adherence to chemical prevention schedules" },
    ],
    solutions: [
      {
        title: "High-Sunlight Mobile Inspection Flow",
        body: "Designed ultra-high-contrast UI with large visual cards and voice prompts, tailored for non-tech-savvy farmers operating in direct sunlight.",
      },
      {
        title: "Offline-First Disease Scanner",
        body: "Instant on-device ML leaf photo analysis that delivers treatment recommendations even when disconnected from cellular coverage in remote fields.",
      },
      {
        title: "Agronomist GIS Back Office",
        body: "Geographic dashboard tracking regional outbreak clusters and scheduling drone flights to contain pest outbreaks before spreading.",
      },
      {
        title: "Localized Calendar & Spray Tracker",
        body: "Icon-driven weather warnings and countdown timelines reminding farmers when to irrigate and apply organic fertilizers.",
      },
    ],
    impactTable: [
      { metric: "Disease diagnosis turnaround", before: "5–7 days", after: "< 30 sec", delta: "−99%" },
      { metric: "Back-office drone mission dispatch", before: "72 hrs", after: "4 hrs", delta: "−94%" },
      { metric: "Preventative schedule adherence", before: "36%", after: "82%", delta: "+128%" },
      { metric: "Agronomist weekly case resolution", before: "14 cases", after: "68 cases", delta: "+385%" },
    ],
    quote: "Before Kanna, a leaf spot could ruin half our harvest before anyone inspected it. Now, taking a photo tells me what to do immediately.",
    quoteRole: "Participating Agricultural Lead, Suphanburi Demonstration Farm",
    learnings: [
      "Conducted extensive in-field contextual inquiries: discovered complex typography was unusable under harsh sunlight, leading to an icon-first visual grammar.",
      "Designed an offline local-storage sync queue that silently syncs disease photos once mobile signal is re-acquired.",
    ],
  },
  {
    id: "dr-smoothlife",
    title: "Dr. Smoothlife Platform",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "7 mo · Aug 2023 – Feb 2024",
    hook: "Integrated telehealth booking, digital prescription fulfillment, and doctor clinical workspace.",
    role: "Senior UX/UI Designer",
    platform: "Mobile App + Web Admin CMS",
    industry: "HealthTech / Telemedicine",
    stack: ["Figma", "Design Tokens", "Design System", "Telehealth UX"],
    image: "/img/d0cdd8d25c34.webp",
    imageAlt: "Doctor utilizing telemedicine workspace and digital consultation platform",
    badges: [
      { label: "+68% Consultation Comp", positive: true },
      { label: "−52% Prescription Drop", positive: true },
      { label: "3.2m Avg Connect", positive: null },
    ],
    kpis: [
      { value: "+68%", label: "Consultation completion", sub: "zero tech dropouts during calls" },
      { value: "−52%", label: "Pharmacy cart abandonment", sub: "via in-app 1-tap fulfillment" },
      { value: "3.2 min", label: "Patient-to-doctor connection", sub: "down from 14.8 min baseline" },
    ],
    problem:
      "Patients endured long virtual queue times, opaque symptom intake forms, and disconnected pharmacy handoffs that caused over 60% of digital prescriptions to go unfulfilled. Physicians were slowed down by fragmented desktop software.",
    baselineStats: [
      { value: "14.8 min", label: "avg. patient waiting time in virtual consultation queue" },
      { value: "51%", label: "intake form drop-off before connecting to a physician" },
      { value: "8.5 min", label: "physician time spent manually logging EHR notes post-call" },
    ],
    solutions: [
      {
        title: "90-Second Rapid Medical Intake",
        body: "Visual symptom picker and automated microphone/camera test ensuring patients are prepped and verified before the physician connects.",
      },
      {
        title: "Unified Clinical Workspace",
        body: "Split-screen doctor desktop UI featuring video consultation on the left and live EHR record + 1-click digital prescribing on the right.",
      },
      {
        title: "Direct-to-Door Prescription Pipeline",
        body: "Automated routing of digital prescriptions to the nearest certified pharmacy with real-time courier tracking in the patient app.",
      },
      {
        title: "Multi-Language Healthcare Portal",
        body: "Full Thai & English language parity with accessible font sizing compliant with WCAG AAA contrast standards.",
      },
    ],
    impactTable: [
      { metric: "Patient intake form completion", before: "51%", after: "89%", delta: "+74%" },
      { metric: "Pre-consultation queue wait time", before: "14.8 min", after: "3.2 min", delta: "−78%" },
      { metric: "Physician charting time per patient", before: "8.5 min", after: "2.1 min", delta: "−75%" },
      { metric: "Digital prescription fulfillment rate", before: "38%", after: "79%", delta: "+108%" },
    ],
    quote: "The split-screen clinical UI cut our consultation logging time by 75%. I can focus on listening to the patient instead of fighting EHR tabs.",
    quoteRole: "Consulting Medical Director, Smoothlife Clinic Network",
    learnings: [
      "Healthcare applications require strict error prevention: added double-confirmation modals with dosage sanity checks to prevent accidental medication over-prescribing.",
      "Created an animated connection-status indicator during video calls to reduce patient anxiety during momentary cellular jitter.",
    ],
  },
  {
    id: "th-health",
    title: "TH Health Platform",
    client: "Thonburi Health Group (THG)",
    timeline: "4 weeks · Feb 2024",
    hook: "Medical jargon replaced with symptom-first discovery — turning a confusing pharmacy catalogue into a guided health checkout.",
    role: "UX/UI Designer",
    platform: "Responsive E-Commerce Website",
    industry: "Healthcare / E-Commerce",
    stack: ["Figma", "Design Tokens", "IA Restructure", "Responsive Web"],
    image: "/img/e31230fbfd68.webp",
    imageAlt: "TH Health symptom-based health e-commerce platform on desktop",
    badges: [
      { label: "Symptom-First IA", positive: null },
      { label: "Multi-Gateway Checkout", positive: null },
      { label: "Mobile-First", positive: null },
    ],
    kpis: [
      { value: "↓ Friction", label: "Symptom-based discovery", sub: "products mapped to symptoms, not chemical names" },
      { value: "↑ Conversion", label: "Checkout completion", sub: "flexible multi-gateway payment options" },
      { value: "100%", label: "Responsive coverage", sub: "consistent desktop & mobile web experience" },
    ],
    problem:
      "Shopping for health products online is overwhelming when items are grouped by medical jargon or chemical ingredients. This navigation friction drove high cart abandonment. A rigid, limited payment infrastructure compounded the problem, creating distrust and frustration at the final checkout phase.",
    baselineStats: [
      { value: "Jargon-led", label: "catalogue grouped by chemical name, not symptom" },
      { value: "Rigid", label: "checkout limited to few payment methods" },
      { value: "Mobile-heavy", label: "most browsing happens on phones seeking quick relief" },
    ],
    solutions: [
      {
        title: "Symptom-Driven Navigation",
        body: "Restructured the Information Architecture to map products directly to common health symptoms, so users searching for relief find remedies without knowing drug names.",
      },
      {
        title: "Frictionless Multi-Gateway Checkout",
        body: "Redesigned the checkout funnel to support multiple flexible payment options, streamlining the transaction flow and cutting unnecessary input fields to minimise drop-off.",
      },
      {
        title: "Optimized E-Commerce Journey",
        body: "Refined the full user flow from landing page to order confirmation, delivering a cohesive, clean and distraction-free shopping experience.",
      },
      {
        title: "Responsive & Accessible Layouts",
        body: "Implemented a mobile-first responsive framework with attention to readability, accessibility compliance and tap-target optimisation across all viewports.",
      },
    ],
    impactTable: [
      { metric: "Product discovery model", before: "Chemical / brand name", after: "Symptom-based", delta: "Restructured" },
      { metric: "Payment options at checkout", before: "Limited gateways", after: "Multi-gateway", delta: "Expanded" },
      { metric: "Checkout input fields", before: "Long form", after: "Reduced set", delta: "Streamlined" },
      { metric: "Viewport support", before: "Desktop-led", after: "Mobile-first responsive", delta: "Full coverage" },
    ],
    quote: "Users don't search for a medicine name — they search for how they feel. Once the catalogue spoke that language, everything downstream got easier.",
    quoteRole: "Design rationale · TH Health",
    learnings: [
      "Users search by symptom, not by product name — IA that mirrors user vocabulary beats IA that mirrors internal catalogue structure.",
      "Checkout anxiety is a payment-flexibility problem as much as a form-length problem; both had to be solved together.",
      "In healthcare commerce, trust is built through clear product detail and transparent pricing before any visual polish matters.",
    ],
  },
  {
    id: "land-monitoring",
    title: "VLM Land Monitoring Platform",
    client: "VARUNA CO., LTD.",
    timeline: "4 months · Mar 2024 – Aug 2024",
    hook: "Dense satellite climate metrics — NDVI, carbon, hot spots — translated into one customizable geospatial dashboard.",
    role: "UX/UI Designer",
    platform: "Web Dashboard (Responsive Desktop)",
    industry: "ClimateTech / GIS",
    stack: ["Figma", "GIS Data Viz", "Design System", "Dashboard UX"],
    image: "/img/750fb6ce74a9.webp",
    imageAlt: "VLM satellite-based forest monitoring and environmental analytics dashboard",
    badges: [
      { label: "Geospatial Viz", positive: null },
      { label: "Modular Dashboard", positive: null },
      { label: "Real-Time Alerts", positive: null },
    ],
    kpis: [
      { value: "1 view", label: "Unified metric dashboard", sub: "vs. fragmented single-purpose GIS tools" },
      { value: "↓ Triangulation", label: "Cross-reference time", sub: "multiple metrics in one viewport" },
      { value: "Real-time", label: "Hot spot & carbon tracking", sub: "prompt incident response workflow" },
    ],
    problem:
      "Environmental data and satellite imagery are complex, non-linear and dense. Analysts struggled with fragmented tools that failed to correlate multiple metrics, delaying response to critical changes such as deforestation, hot spot outbreaks, or sudden drops in carbon storage capacity.",
    baselineStats: [
      { value: "Overload", label: "simultaneous data layers caused visual fatigue" },
      { value: "Rigid", label: "traditional GIS tools hard to toggle between layers" },
      { value: "Varied", label: "each org prioritises a different core metric" },
    ],
    solutions: [
      {
        title: "Intuitive Geospatial Visualization",
        body: "Built a clean, multi-layered interactive map interface that simplifies interpretation of dense satellite metrics like NDVI and carbon sequestration without sacrificing scientific precision.",
      },
      {
        title: "Customizable Modular Dashboards",
        body: "Designed a widget-based viewport letting users pin, rearrange and focus on the environmental indicators relevant to their role — auditors on sequestration, rangers on hot spots.",
      },
      {
        title: "Real-Time Alert & Tracking System",
        body: "Integrated an automated real-time data streaming layout highlighting immediate changes in forest conditions to support prompt risk mitigation.",
      },
      {
        title: "Frictionless Interaction Architecture",
        body: "Re-architected navigation for smooth one-click toggling between climate, terrain and satellite data layers.",
      },
    ],
    impactTable: [
      { metric: "Data layer interaction", before: "Rigid GIS toggling", after: "One-click layer switch", delta: "Simplified" },
      { metric: "Dashboard layout", before: "Fixed view", after: "User-customizable widgets", delta: "Modular" },
      { metric: "Metric correlation", before: "Multiple tools", after: "Single viewport", delta: "Consolidated" },
      { metric: "Change detection", before: "Manual review", after: "Real-time alerts", delta: "Automated" },
    ],
    quote: "Different organisations care about different numbers. The dashboard had to let a carbon auditor and a forest ranger both feel it was built for them.",
    quoteRole: "Design rationale · VLM Platform",
    learnings: [
      "Showing every satellite layer at once causes cognitive overload — progressive disclosure and user-controlled density were essential.",
      "Role-based metric prioritisation mattered more than a single 'optimal' default dashboard layout.",
      "Scientific precision and visual simplicity are not in conflict if the visual system encodes uncertainty honestly.",
    ],
  },
  {
    id: "all-about-you",
    title: "ALL ABOUT YOU Platform",
    client: "ALL ABOUT YOU CO., LTD.",
    timeline: "8 months · Mar 2021 – Jun 2022",
    hook: "Online and in-store loyalty finally speaking to each other — an omnichannel skincare CRM synced to ERP and retail POS.",
    role: "Lead UX/UI Designer",
    platform: "Responsive E-Commerce Website",
    industry: "Retail / Beauty E-Commerce",
    stack: ["Figma", "Design System", "CRM UX", "Branding"],
    image: "/img/db981951ef74.webp",
    imageAlt: "ALL ABOUT YOU omnichannel skincare e-commerce and CRM platform",
    badges: [
      { label: "Omnichannel CRM", positive: null },
      { label: "Branding Refresh", positive: null },
      { label: "O2O Loyalty", positive: null },
    ],
    kpis: [
      { value: "O2O", label: "Unified loyalty sync", sub: "points & coupons valid online and in-store" },
      { value: "↑ Engagement", label: "CRM participation", sub: "simplified points and coupon visibility" },
      { value: "Modernized", label: "Brand identity", sub: "premium, contemporary skincare positioning" },
    ],
    problem:
      "The original platform combined outdated branding with a fragmented experience. Offline and online journeys were disconnected — users could not sync membership tiers, track loyalty points, or redeem rewards flexibly between the website and physical retail branches, causing drop-offs and lost retention.",
    baselineStats: [
      { value: "Disconnected", label: "online and in-store rewards did not sync" },
      { value: "Outdated", label: "branding failed to signal premium skincare" },
      { value: "Low engagement", label: "loyalty dashboards hard to navigate" },
    ],
    solutions: [
      {
        title: "Branding Modernization",
        body: "Reimagined the visual design system with a clean, contemporary layout that elevates product discovery and matches the expectations of modern skincare consumers.",
      },
      {
        title: "Unified CRM Dashboard",
        body: "Designed an intuitive loyalty portal where users monitor membership tier status, track accumulated points and manage coupons in one clear view.",
      },
      {
        title: "Frictionless Omnichannel Flow",
        body: "Created an online-to-offline checkout architecture allowing unified coupon redemption and real-time points syncing with ERP and store POS systems.",
      },
      {
        title: "Optimized E-Commerce Journey",
        body: "Streamlined responsive cart and checkout flows to maximise conversion across desktop and mobile web.",
      },
    ],
    impactTable: [
      { metric: "Loyalty points sync", before: "Online only", after: "Online + in-store", delta: "Unified" },
      { metric: "Coupon redemption", before: "Channel-locked", after: "Cross-channel", delta: "Omnichannel" },
      { metric: "Loyalty dashboard", before: "Hard to navigate", after: "Single clear portal", delta: "Simplified" },
      { metric: "Visual identity", before: "Outdated", after: "Modern premium system", delta: "Rebranded" },
    ],
    quote: "Points earned online that can't be used in the shop aren't a reward — they're a broken promise. Fixing that was the whole project.",
    quoteRole: "Design rationale · ALL ABOUT YOU",
    learnings: [
      "Loyalty fragmentation between web and physical retail was the single biggest driver of churn — far more than checkout UX alone.",
      "Branding modernisation directly affected perceived trust in a category where product credibility is everything.",
      "Designing for ERP and POS integration meant the interface had to reflect real sync states, not assume instant consistency.",
    ],
  },
  {
    id: "embark-real-estate",
    title: "Embark Real Estate Platform",
    client: "Embark Real Estate",
    timeline: "4 weeks · May 2024",
    hook: "Location anxiety solved in-platform — property listings fused with a neighborhood intelligence map so buyers stop tab-hopping.",
    role: "UX/UI Designer",
    platform: "Responsive Web & Mobile Web",
    industry: "PropTech / Real Estate",
    stack: ["Figma", "Map UX", "Component Library", "Responsive Web"],
    image: "/img/4fc15c9dca65.webp",
    imageAlt: "Embark neighborhood-centric real estate brokerage platform",
    badges: [
      { label: "Neighborhood Map", positive: null },
      { label: "Progressive Disclosure", positive: null },
      { label: "Lead Gen UX", positive: null },
    ],
    kpis: [
      { value: "1 journey", label: "Discovery + neighborhood", sub: "eliminated cross-app tab fatigue" },
      { value: "↑ Confidence", label: "Informed decisions", sub: "address data turned into lifestyle context" },
      { value: "↑ Leads", label: "Broker contact points", sub: "contextual touchpoints across screen sizes" },
    ],
    problem:
      "Property hunters suffer from location anxiety. Standard platforms focus on structural specs — bedrooms, price, square footage — but isolate the listing from its neighborhood context. Users were forced across multiple tabs and map apps to research schools, supermarkets or transit, creating a fragmented and exhausting decision workflow.",
    baselineStats: [
      { value: "Tab fatigue", label: "listings cross-checked against external map apps" },
      { value: "Spec-only", label: "neighborhood lifestyle context missing" },
      { value: "Drop-off", label: "users left property context to contact brokers" },
    ],
    solutions: [
      {
        title: "\"Find the Neighborhood for You\"",
        body: "Designed an interactive map-driven discovery module overlaying real-time district amenities, transport links and lifestyle points of interest directly onto the property layout.",
      },
      {
        title: "Structured Information Architecture",
        body: "Re-engineered property detail sheets with clear visual hierarchy and progressive disclosure, presenting dense specs and media without overwhelming the user.",
      },
      {
        title: "Contextual Agent Communication",
        body: "Integrated low-friction contact actions inside the viewing experience, giving single-click access to verified brokers without leaving the listing.",
      },
      {
        title: "Responsive Layout Optimization",
        body: "Implemented a mobile-first framework so map interactions, filters and galleries scale fluidly from desktop down to smartphone.",
      },
    ],
    impactTable: [
      { metric: "Neighborhood research", before: "External map apps", after: "In-platform module", delta: "Consolidated" },
      { metric: "Property detail density", before: "Flat spec list", after: "Progressive disclosure", delta: "Restructured" },
      { metric: "Broker contact", before: "Separate flow", after: "Contextual in-listing", delta: "Inline" },
      { metric: "Mobile map interaction", before: "Desktop-led", after: "Mobile-first responsive", delta: "Optimized" },
    ],
    quote: "Buyers weren't choosing a floor plan — they were choosing a daily commute, a coffee shop, a school run. The map had to say that.",
    quoteRole: "Design rationale · Embark Real Estate",
    learnings: [
      "Lifestyle proximity factors influenced final decisions more heavily than structural specs did.",
      "Consolidating external research into the platform removed cognitive load that no amount of listing-page polish could fix.",
      "Communication touchpoints must live where the decision happens; moving users out of context reliably lost the lead.",
    ],
  },
];

const allProjects = {
  apps: projects.map((p) => ({
    title: p.title,
    category: p.platform,
    tags: p.stack.slice(0, 3),
    id: p.id,
    image: p.image,
    badges: p.badges,
    kpis: p.kpis,
    hook: p.hook,
    client: p.client,
    timeline: p.timeline,
  })),
  web: [
    {
      id: "contracable",
      title: "Contracable SaaS",
      client: "BEURDEV CO., LTD.",
      timeline: "Apr 2024 – Jul 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & B2B SaaS",
      tags: ["SaaS", "B2B", "Design Tokens", "Enterprise"],
      image: "/img/441ee598a9f9.webp",
      imageAlt: "Contract lifecycle management SaaS product marketing landing and tier pricing calculator",
      metric: "98/100 Lighthouse Perf",
      metricBadge: "+62% Free Trials",
      overview: "Contract lifecycle management platform landing page with enterprise pricing tier configurator, compliance calculator, and interactive product demo tours.",
      problem: "Legal-tech enterprise buyers found the previous landing page too abstract and lacked clear ROI proof to justify scheduling software enterprise demos.",
      baselineStats: [
        { value: "2.1%", label: "Free trial / sales demo request conversion" },
        { value: "64/100", label: "Legacy page performance score (slow load speeds)" },
        { value: "73%", label: "Visitors leaving before reaching pricing comparisons" }
      ],
      solutions: [
        { title: "Interactive Product Feature Playground", body: "Embedded clickable sandbox showing how automated NDA generation and redline tracking works in 3 clicks." },
        { title: "ROI & Legal Hours Saved Calculator", body: "Interactive slider allowing General Counsels to input team size and immediately calculate hours and dollar savings." },
        { title: "Ultra-Clean Tokenized Architecture", body: "Strict Tailwind-based typography and SVG vector illustration hierarchy achieving 98/100 Google Lighthouse rating." }
      ],
      impactTable: [
        { metric: "Enterprise demo requests", before: "24 / mo", after: "59 / mo", delta: "+145%" },
        { metric: "Lighthouse Performance Score", before: "64 / 100", after: "98 / 100", delta: "+53%" },
        { metric: "Pricing section scroll depth", before: "27%", after: "68%", delta: "+151%" }
      ],
      deliverables: ["B2B SaaS Landing Page", "Interactive ROI Calculator", "Responsive Component Tokens", "Design System Specs"]
    },
    {
      id: "aluminium-loop",
      title: "Aluminium Loop",
      client: "BEURDEV CO., LTD.",
      timeline: "Jun 2024 – Sep 2024",
      role: "Lead UX/UI Designer",
      category: "Web Design & Industrial",
      tags: ["Manufacturing", "Circular", "Corporate", "ESG"],
      image: "/img/78f5a36f6e23.webp",
      imageAlt: "Industrial aluminum recycling circular economy portal and carbon emissions tracker",
      metric: "−40% Bounce Rate",
      metricBadge: "+85% Spec Downloads",
      overview: "Sustainable manufacturing brand experience showcasing closed-loop aluminum recycling metrics, supply chain provenance, and carbon-reduction audit proof.",
      problem: "Global B2B procurement heads doubted circular sustainability claims without empirical smelting data and third-party ISO verification metrics.",
      baselineStats: [
        { value: "58%", label: "Initial visitor bounce rate on corporate sustainability page" },
        { value: "9%", label: "Procurement visitors downloading raw technical data sheets" },
        { value: "11 days", label: "Average inquiry-to-quote response turnaround" }
      ],
      solutions: [
        { title: "Verified ESG Metrics Telemetry", body: "Prominent live data strip visualizing cumulative metric tons of recycled scrap and avoided CO₂ emissions." },
        { title: "Interactive Closed-Loop Visualizer", body: "Step-by-step schematic detailing collection, shredding, green smelting, and remanufacturing specifications." },
        { title: "B2B Request for Quotation (RFQ) Fast-Track", body: "Direct spec upload drawer allowing buyers to submit alloy technical requirements in under 60 seconds." }
      ],
      impactTable: [
        { metric: "Corporate website bounce rate", before: "58%", after: "35%", delta: "−40%" },
        { metric: "Alloy specification downloads", before: "140 / mo", after: "260 / mo", delta: "+85%" },
        { metric: "Direct B2B procurement inquiries", before: "12 / mo", after: "34 / mo", delta: "+183%" }
      ],
      deliverables: ["Industrial Corporate Portal", "Circular Diagram Graphics", "RFQ Quick Form", "ESG Proof Architecture"]
    },
    {
      id: "beurdev-agency",
      title: "Beurdev Agency",
      client: "BEURDEV CO., LTD.",
      timeline: "Feb 2024 – Oct 2024",
      role: "Lead UX/UI Designer",
      category: "Web Design & Tech Agency",
      tags: ["Tech", "Agency", "Interactive", "Dark Mode"],
      image: "/img/d1ea62bff343.webp",
      imageAlt: "Digital engineering and software consultancy agency flagship showcase",
      metric: "2.4× Inbound Inquiries",
      metricBadge: "+120% Case Reads",
      overview: "Agency portfolio and digital engineering case study showcase featuring dark mode aesthetics, interactive case study filters, and tokenized layouts.",
      problem: "Previous agency website presented services generically without highlighting enterprise engineering depth or design system credentials.",
      baselineStats: [
        { value: "7 inbound", label: "Monthly qualified enterprise project inquiries" },
        { value: "45 sec", label: "Average page dwell time before visitor departure" },
        { value: "22%", label: "Case study completion reading rate" }
      ],
      solutions: [
        { title: "Impact-Driven Case Study Cards", body: "Replaced vague client logos with measurable before/after metrics prominently surfaced directly on the index grid." },
        { title: "Engineered Dark-Mode Aesthetic", body: "JetBrains Mono typography paired with high-contrast emerald highlights communicating technical mastery." },
        { title: "Direct Calendly Strategy Booking", body: "Eliminated back-and-forth email scheduling by embedding instant scoping consultation calendars." }
      ],
      impactTable: [
        { metric: "Monthly inbound client inquiries", before: "7 leads", after: "17 leads", delta: "+142%" },
        { metric: "Case study readership depth", before: "22%", after: "58%", delta: "+163%" },
        { metric: "Average session time on portfolio", before: "45 sec", after: "3.2 min", delta: "+326%" }
      ],
      deliverables: ["Agency Flagship Site", "Case Study Template Engine", "Interactive Capability Matrix", "Brand Guidelines"]
    },
    {
      id: "patc-institute",
      title: "PATC Institute",
      client: "BEURDEV CO., LTD.",
      timeline: "Apr 2024 – Jun 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Education",
      tags: ["Education", "Institute", "Courses", "Aviation"],
      image: "/img/4a8aa1992ceb.webp",
      imageAlt: "Professional aviation training academy course catalog and student enrollment portal",
      metric: "+76% Enrollment Rate",
      metricBadge: "−50% Call Center Queries",
      overview: "Professional aviation and aerospace training curriculum portal with live cohort availability calendars, syllabus downloads, and student registration.",
      problem: "Aspiring pilots and maintenance trainees found course requirements confusing, resulting in high call center volumes and abandoned registrations.",
      baselineStats: [
        { value: "340 calls", label: "Monthly repetitive student queries regarding course prerequisites" },
        { value: "12%", label: "Online cohort registration conversion from course view page" },
        { value: "6.5 min", label: "Time needed to discover upcoming class dates" }
      ],
      solutions: [
        { title: "Interactive Course Prerequisite Checker", body: "Step-by-step 30-second eligibility quiz verifying flight hours, age, and medical certificate requirements." },
        { title: "Live Cohort Availability Grid", body: "Real-time seat counter showing remaining spots per semester with instant waitlist capability." },
        { title: "1-Click PDF Syllabus Download", body: "Gated syllabus download capturing student lead contacts for automated nurture email follow-ups." }
      ],
      impactTable: [
        { metric: "Online cohort enrollment rate", before: "12%", after: "21%", delta: "+76%" },
        { metric: "Repetitive call center questions", before: "340 / mo", after: "168 / mo", delta: "−50%" },
        { metric: "Prospective student lead captures", before: "85 / mo", after: "240 / mo", delta: "+182%" }
      ],
      deliverables: ["Curriculum Directory UI", "Eligibility Checker Tool", "Student Portal Wireframes", "Mobile Responsive Layout"]
    },
    {
      id: "the-right-office",
      title: "The Right Office",
      client: "BEURDEV CO., LTD.",
      timeline: "May 2024 – Jul 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & PropTech",
      tags: ["PropTech", "Coworking", "Booking", "Flex Space"],
      image: "/img/74c05e525887.webp",
      imageAlt: "Flexible coworking space and private office suite on-demand booking portal",
      metric: "+62% Desk Bookings",
      metricBadge: "4.8★ Booking CSAT",
      overview: "Modern workspace leasing and meeting room reservation platform with instant availability filtering and flexible membership tier calculators.",
      problem: "Remote teams and startups struggled to compare physical layout amenities and view real-time meeting room availability without calling the front desk.",
      baselineStats: [
        { value: "48%", label: "Drop-off rate when booking conference rooms" },
        { value: "15 min", label: "Average phone confirmation time with concierge" },
        { value: "31%", label: "Unoccupied weekend hot desk capacity" }
      ],
      solutions: [
        { title: "Floor-Plan Visual Room Selector", body: "Interactive architectural floor layout displaying active room occupation, video conferencing hardware, and natural light ratings." },
        { title: "Instant QR Access Pass Integration", body: "Immediate digital pass issuance added directly to Apple Wallet & Google Wallet upon confirmation." },
        { title: "Flexible Team Credit Management", body: "Company billing dashboard allowing managers to assign workspace booking credits across departments seamlessly." }
      ],
      impactTable: [
        { metric: "Completed meeting room bookings", before: "210 / mo", after: "340 / mo", delta: "+62%" },
        { metric: "Desk check-in wait time at reception", before: "4.5 min", after: "15 sec", delta: "−94%" },
        { metric: "Weekend hot-desk utilization", before: "24%", after: "61%", delta: "+154%" }
      ],
      deliverables: ["Coworking Reservation App", "Interactive Floorplan Selector", "Wallet Pass UI", "Admin Management Console"]
    },
    {
      id: "max-solution",
      title: "Max Solution",
      client: "BEURDEV CO., LTD.",
      timeline: "Mar 2024 – May 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Enterprise",
      tags: ["Enterprise", "B2B", "Consulting", "IT Services"],
      image: "/img/661d950db877.webp",
      imageAlt: "Enterprise IT software solutions and digital transformation consulting website",
      metric: "4.9★ Stakeholder CSAT",
      metricBadge: "−38% Bounce Rate",
      overview: "Enterprise software consultation website built with accessible typography, interactive solutions matrix, and whitepaper download funnels.",
      problem: "Executive decision makers were confused by dense corporate service descriptions and couldn't find relevant enterprise client case references.",
      baselineStats: [
        { value: "54%", label: "Bounce rate on enterprise technology solutions page" },
        { value: "8 inquiries", label: "Monthly RFP contact submissions" },
        { value: "3.2 / 5", label: "Stakeholder perception score for technical credibility" }
      ],
      solutions: [
        { title: "Industry-Vertical Matrix Navigation", body: "Segmented solutions by industry (Banking, Retail, Logistics) with dedicated compliance certifications visible upfront." },
        { title: "Interactive System Architecture Schematics", body: "Clean visual diagrams illustrating cloud migration pathways and security hardening protocols." },
        { title: "Streamlined Enterprise RFP Workflow", body: "Guided 4-step proposal request form capturing technical scope, timeline, and compliance standards." }
      ],
      impactTable: [
        { metric: "Qualified RFP submissions", before: "8 / mo", after: "22 / mo", delta: "+175%" },
        { metric: "Enterprise whitepaper downloads", before: "45 / mo", after: "190 / mo", delta: "+322%" },
        { metric: "Stakeholder credibility score", before: "3.2 / 5", after: "4.9 / 5", delta: "+53%" }
      ],
      deliverables: ["Enterprise B2B Architecture", "Interactive System Diagrams", "Lead-Capture Funnels", "Corporate Brand Kit"]
    },
    {
      id: "orgenees-wellness",
      title: "Orgenees Orange Juice",
      client: "BEURDEV CO., LTD.",
      timeline: "Jun 2024 – Aug 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Food Manufacturing",
      tags: ["Manufacturing", "Wholesale", "OEM", "FMCG"],
      image: "/img/222c56aeeb4c.webp",
      imageAlt: "Orgeness fresh orange juice factory wholesale and OEM website",
      metric: "220–1000 ml Range",
      metricBadge: "GMP · HACCP · อย.",
      overview: "Site for a fresh orange juice factory selling wholesale and OEM contract production, built to convert resellers and own-brand clients rather than individual shoppers.",
      problem: "The business earns from wholesale volume and contract manufacturing, but a conventional product site speaks to single-bottle buyers — leaving reseller margins, minimum order terms and OEM capability invisible to the people who actually place large orders.",
      baselineStats: [
        { value: "Retail-framed", label: "Site spoke to individual buyers, not resellers" },
        { value: "Unstated", label: "Wholesale pricing and minimum order terms not published" },
        { value: "Hidden", label: "OEM own-brand production capability not surfaced" }
      ],
      solutions: [
        { title: "Wholesale Economics Made Explicit", body: "Published the reseller case directly — sizes from 220 ml to 1,000 ml, wholesale from ฿11.5 per bottle, free Bangkok delivery above 100 bottles, and nationwide shipping by temperature-controlled truck." },
        { title: "OEM Contract Production Track", body: "A dedicated section for own-brand manufacturing, positioned around low capital outlay and no storefront requirement, with LINE and phone consultation as the entry point." },
        { title: "Food-Safety Credibility Layer", body: "GMP, HACCP and Thai FDA certification surfaced alongside the residue-testing and sweetness-consistency process, since food-grade buyers screen on standards before taste." }
      ],
      impactTable: [
        { metric: "Audience the site addresses", before: "Retail buyers", after: "Wholesale and OEM clients", delta: "Repositioned" },
        { metric: "Wholesale terms visibility", before: "On request", after: "Published rates and minimums", delta: "Open" },
        { metric: "Certification disclosure", before: "Not shown", after: "GMP, HACCP, อย.", delta: "Surfaced" }
      ],
      deliverables: ["Wholesale Marketing Site", "Product Catalogue", "OEM Enquiry Flow", "Article & SEO Templates"]

    },
    {
      id: "billion-plus",
      title: "Billion Plus",
      client: "BEURDEV CO., LTD.",
      timeline: "Mar 2024 – May 2024",
      role: "Lead UX/UI Designer",
      category: "Web Design & Industrial Equipment",
      tags: ["Industrial", "Catalogue", "Rental", "B2B"],
      image: "/img/3310c7a49b83.webp",
      imageAlt: "Billion Plus industrial floor cleaning machine sales and rental website",
      metric: "5 Machine Categories",
      metricBadge: "Open Rental Pricing",
      overview: "Sales, rental and service site for industrial floor-cleaning machines, structured so facilities buyers can navigate by cleaning application rather than model number.",
      problem: "Buyers sourcing floor-cleaning equipment rarely know model names, and rental rates were locked behind enquiry forms — forcing a sales conversation before a prospect could tell whether the machine or the budget was even a fit.",
      baselineStats: [
        { value: "Model-led", label: "Catalogue organised by SKU rather than cleaning task" },
        { value: "Hidden", label: "Rental rates available only on request" },
        { value: "Mixed", label: "Sales, rental and service offers competing on one page" }
      ],
      solutions: [
        { title: "Application-Based Catalogue Structure", body: "Machines grouped into five classes — mini floor washer, single disc, high speed burnisher, walk-behind scrubber and ride-on scrubber — with a dropdown that filters by cleaning application instead of model number." },
        { title: "Published Rental Rate Tables", body: "Structured tables showing machine size, cleaning capacity in square metres and rate per rental period, putting the daily rate in the open rather than behind a contact form." },
        { title: "Industrial Client Credibility Layer", body: "Client logos from manufacturers including AGC, NHK, KYB, Sumitomo and NSK positioned to carry the proof a B2B facilities buyer looks for before enquiring." }
      ],
      impactTable: [
        { metric: "Catalogue navigation model", before: "By model number", after: "By cleaning application", delta: "Restructured" },
        { metric: "Rental pricing visibility", before: "Enquiry required", after: "Published tables", delta: "Open" },
        { metric: "Machine categories surfaced", before: "Flat product list", after: "5 grouped classes", delta: "Segmented" }
      ],
      deliverables: ["Wireframes", "Product Catalogue System", "Rental Rate Tables", "Responsive Marketing Site"]

    },
    {
      id: "unionchemical",
      title: "Unionchemical Industrial",
      client: "BEURDEV CO., LTD.",
      timeline: "May 2024 – Jul 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Industrial",
      tags: ["Industrial", "Corporate", "B2B", "Chemicals"],
      image: "/img/68958e8a7255.webp",
      imageAlt: "Industrial chemical raw material manufacturing directory and TDS download portal",
      metric: "+45% Product Spec Downloads",
      metricBadge: "−60% Inquiry Response Time",
      overview: "Chemical manufacturing product directory with technical data sheet (TDS/MSDS) quick downloads and batch RFQ cart system for factory engineers.",
      problem: "Factory chemical engineers couldn't easily locate specific polymer and solvent grades due to poor search indexing and inaccessible PDF safety sheets.",
      baselineStats: [
        { value: "6.2 min", label: "Time taken to find chemical specification sheets" },
        { value: "42%", label: "Users abandoning search before downloading MSDS files" },
        { value: "19 phone inquiries", label: "Daily repetitive requests for basic product datasheets" }
      ],
      solutions: [
        { title: "CAS Number & Chemical Formula Instant Search", body: "Engineered rapid search recognizing IUPAC nomenclature, commercial names, and CAS numbers." },
        { title: "1-Click Batch Technical Download", body: "Engineered multi-select drawer allowing engineers to bundle 10+ TDS and safety sheets into a single ZIP." },
        { title: "Bulk Container Volume Estimator", body: "Interactive container calculator estimating pallet and IBC tote shipping weights and volumes." }
      ],
      impactTable: [
        { metric: "Technical specification downloads", before: "420 / mo", after: "610 / mo", delta: "+45%" },
        { metric: "Search-to-spec discovery time", before: "6.2 min", after: "45 sec", delta: "−88%" },
        { metric: "Direct industrial RFQ conversions", before: "18 / mo", after: "46 / mo", delta: "+155%" }
      ],
      deliverables: ["B2B Chemical Directory", "CAS Index Search UI", "Technical Spec Drawer", "Responsive Corporate Portal"]
    },
    {
      id: "thaimanee-craft",
      title: "Thaimanee Craft",
      client: "BEURDEV CO., LTD.",
      timeline: "Feb 2024 – Apr 2024",
      role: "Lead UX/UI Designer",
      category: "Web Design & Manufacturing",
      tags: ["Manufacturing", "OEM", "Industrial", "Bilingual"],
      image: "/img/49976d5d8a0e.webp",
      imageAlt: "Thaimanee Craft plastic injection moulding and OEM manufacturing website",
      metric: "4 Product Categories",
      metricBadge: "ISO 9001:2015",
      overview: "Corporate site for a plastic injection moulding and mould-making manufacturer, built to present OEM capability and production capacity to industrial buyers in both Thai and English.",
      problem: "OEM manufacturing buyers evaluate suppliers on capability and capacity, not marketing copy — but the company had no way to show its machine inventory, tonnage range or product range to prospects before a factory visit.",
      baselineStats: [
        { value: "No catalogue", label: "Product capability not visible to prospective buyers" },
        { value: "Thai only", label: "No English entry point for overseas OEM enquiries" },
        { value: "Unstated", label: "Machine capacity and certification not published" }
      ],
      solutions: [
        { title: "Capability-Led Product Catalogue", body: "Work organised into four categories — moulds, plastic injection, assembly and screen printing — with real production photography so buyers can match their part against existing output." },
        { title: "Published Production Capacity", body: "Machine inventory stated explicitly: 26 CNC, W-CUT, EDM and milling machines, 47 injection machines, and a tonnage range from 35 to 1,200 tons, alongside ISO 9001:2015 certification." },
        { title: "Bilingual Corporate Structure", body: "Thai and English toggle across company history, vision, mission and objectives, giving overseas buyers a route into the same credibility material domestic clients see." }
      ],
      impactTable: [
        { metric: "Product capability visibility", before: "Not published", after: "4 categories with photography", delta: "Catalogued" },
        { metric: "Production capacity disclosure", before: "Unstated", after: "Machine count and tonnage published", delta: "Transparent" },
        { metric: "Language coverage", before: "Thai only", after: "Thai and English", delta: "Bilingual" }
      ],
      deliverables: ["Corporate Marketing Site", "Product Category System", "Bilingual TH/EN UI", "Capability & Certification Pages"]

    },
    {
      id: "supakit-amulet",
      title: "Supakit Amulet",
      client: "BEURDEV CO., LTD.",
      timeline: "Jan 2024 – Mar 2024",
      role: "UX/UI Designer",
      category: "Web Design & Manufacturing",
      tags: ["Manufacturing", "Portfolio", "Craft", "B2B"],
      image: "/img/75bbd0306862.webp",
      imageAlt: "Supakit amulet manufacturing workshop portfolio and commission enquiry website",
      metric: "3 Work Categories",
      metricBadge: "Direct Line Enquiry",
      overview: "Portfolio and commission site for an amulet manufacturing workshop, built to show casting capability and finished work quality to temples and commissioning clients.",
      problem: "Commissioning religious objects is a trust-heavy decision made largely on craftsmanship evidence, but the workshop had no way to show finished work, production process or scale to prospective clients before a phone call.",
      baselineStats: [
        { value: "No portfolio", label: "Finished work not viewable before enquiry" },
        { value: "Unseen", label: "Casting and finishing process not documented" },
        { value: "Phone only", label: "No structured route from interest to enquiry" }
      ],
      solutions: [
        { title: "Work Portfolio by Craft Type", body: "Output separated into coin pressing, three-dimensional casting and finished pieces, photographed against dark backgrounds so metal finish and relief detail read clearly." },
        { title: "Workshop Process Documentation", body: "Real photography of the casting floor, hand finishing and quality inspection, giving commissioning clients evidence of the production standard rather than claims about it." },
        { title: "Direct Enquiry Architecture", body: "Phone numbers and LINE contact persistent in the header and repeated at each section break, matching how this market actually opens a commission conversation." }
      ],
      impactTable: [
        { metric: "Finished work visibility", before: "Not published", after: "Categorised portfolio", delta: "Documented" },
        { metric: "Production process evidence", before: "None", after: "Workshop photography", delta: "Shown" },
        { metric: "Enquiry routes", before: "Phone only", after: "Phone, LINE and form", delta: "Expanded" }
      ],
      deliverables: ["Portfolio Site", "Work Category System", "Article & News Templates", "Contact & Location Pages"]

    },
    {
      id: "chaocom-thailand",
      title: "Chaocom Thailand",
      client: "BEURDEV CO., LTD.",
      timeline: "Mar 2024 – Jun 2024",
      role: "Lead UX/UI Designer",
      category: "Web Design & IT Rental",
      tags: ["B2B", "Rental", "Corporate IT", "Lead Gen"],
      image: "/img/10ab1770eadb.webp",
      imageAlt: "ChaoCom Thailand computer and notebook rental service website",
      metric: "Daily · Monthly · Yearly",
      metricBadge: "No Minimum Order",
      overview: "Lead-generation site for a computer and notebook rental service, built to convert corporate clients renting IT equipment for offices, training sessions, seminars and events.",
      problem: "Companies renting IT equipment weigh it against buying outright, but the rental case — no capital outlay, no depreciation, immediate replacement, tax deductibility — was never argued anywhere a prospect could find it before contacting sales.",
      baselineStats: [
        { value: "Unargued", label: "Rent-versus-buy case not made on site" },
        { value: "Unlisted", label: "Available machine models not shown to prospects" },
        { value: "Assumed", label: "Buyers expected a minimum order requirement" }
      ],
      solutions: [
        { title: "Rent-Versus-Buy Argument Structure", body: "Five reasons stated up front: zero capital risk, maintained hardware with instant replacement, no minimum rental quantity, advisory support, and rental treated as a 100% deductible expense." },
        { title: "Equipment Catalogue by Class", body: "Available machines shown by category — laptop, MacBook and desktop — with named models from Dell, Lenovo, HP, Acer and Apple so prospects can match specification before enquiring." },
        { title: "Structured Quotation Funnel", body: "A dedicated quotation form capturing company, equipment type, quantity, rental period and delivery location, replacing an open-ended contact form with a request sales can price directly." }
      ],
      impactTable: [
        { metric: "Rent-versus-buy positioning", before: "Not stated", after: "Five-reason argument", delta: "Argued" },
        { metric: "Equipment visibility", before: "Not listed", after: "3 classes, named models", delta: "Catalogued" },
        { metric: "Enquiry quality", before: "Open contact form", after: "Structured quotation request", delta: "Qualified" }
      ],
      deliverables: ["Lead Generation Site", "Equipment Catalogue", "Quotation Request Flow", "Service Terms Pages"]

    },
    {
      id: "thanada-construction",
      title: "Thanada Construction",
      client: "BEURDEV CO., LTD.",
      timeline: "Apr 2024 – Jul 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Construction",
      tags: ["Construction", "Residential", "Portfolio", "Lead Gen"],
      image: "/img/e56bec59cc1d.webp",
      imageAlt: "Thanada Construction residential design and build portfolio website",
      metric: "Design + Build",
      metricBadge: "Free Consultation",
      overview: "Portfolio and enquiry site for a residential design-and-build contractor, structured so homeowners can judge completed work before starting a build conversation.",
      problem: "Choosing a home builder is a high-commitment decision made largely on evidence of finished work, but the company had no way to show completed houses, service scope or team structure to homeowners weighing contractors.",
      baselineStats: [
        { value: "Unseen", label: "Completed houses not viewable before enquiry" },
        { value: "Unclear", label: "Design and construction scope not separated" },
        { value: "Unstated", label: "Team structure and capability not documented" }
      ],
      solutions: [
        { title: "Work Portfolio Split by Service", body: "Completed projects separated into design work and construction work, each with photography of finished houses so homeowners can assess style and quality against their own brief." },
        { title: "Organisational Capability Chart", body: "Team structure published across design, engineering and site management, showing homeowners the company has the disciplines a full design-and-build actually requires." },
        { title: "Editorial Content for Early-Stage Buyers", body: "Articles on choosing a contractor and planning a build, capturing homeowners researching months before they are ready to commission." }
      ],
      impactTable: [
        { metric: "Completed work visibility", before: "Not published", after: "Portfolio by service type", delta: "Documented" },
        { metric: "Service scope clarity", before: "Undifferentiated", after: "Design and build separated", delta: "Structured" },
        { metric: "Early-stage audience reach", before: "None", after: "Article and guide content", delta: "Added" }
      ],
      deliverables: ["Portfolio Site", "Service Category System", "Article Templates", "Contact & Enquiry Pages"]

    },
    {
      id: "happy-training",
      title: "Happy Training",
      client: "HAPPY THREE CREATION CO., LTD.",
      timeline: "Aug 2023 – Feb 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Training Institute",
      tags: ["Training", "Courses", "Lead Gen", "Corporate"],
      image: "/img/085390af373d.webp",
      imageAlt: "Happy Training corporate training institute course catalogue website",
      metric: "15 Course Groups",
      metricBadge: "Soft Skill + Hard Skill",
      overview: "Redesign of a corporate training institute site, restructuring an unnavigable list of course links into a browsable catalogue that HR buyers can filter and shortlist from.",
      problem: "The original site listed every course as a plain text link in one continuous column — over a hundred entries with no grouping, no imagery and no hierarchy — leaving HR buyers to scan the entire page to find anything relevant to their team.",
      baselineStats: [
        { value: "Flat list", label: "All courses presented as undifferentiated text links" },
        { value: "No grouping", label: "Courses not categorised by skill type or function" },
        { value: "No visual", label: "Course pages carried no imagery or scannable structure" }
      ],
      solutions: [
        { title: "Course Category Architecture", body: "Restructured the catalogue into fifteen course groups spanning leadership, sales and marketing, service, safety, digital and knowledge management, so HR buyers can navigate by the capability gap they are solving." },
        { title: "Visual Course Cards with Filtering", body: "Replaced text links with image-led cards and a category filter, making the catalogue scannable rather than something to be read line by line." },
        { title: "Trainer Credibility Layer", body: "Foregrounded the four delivery formats — group coaching, hard-skill workshop, training and workshop, training and activity — with photography of live sessions, since corporate buyers assess the trainer as much as the syllabus." }
      ],
      impactTable: [
        { metric: "Catalogue structure", before: "Single flat text list", after: "15 grouped categories", delta: "Restructured" },
        { metric: "Course presentation", before: "Text links only", after: "Image cards with filter", delta: "Scannable" },
        { metric: "Delivery format clarity", before: "Not stated", after: "4 formats surfaced", delta: "Defined" }
      ],
      deliverables: ["Site Redesign", "Course Catalogue System", "Category Filter UI", "Responsive Marketing Site"]

    },
    {
      id: "once-accounting",
      title: "Once Accounting",
      client: "BEURDEV CO., LTD.",
      timeline: "Apr 2024 – Jul 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Accounting Services",
      tags: ["Sale Page", "Paid Ads", "Lead Gen", "Accounting"],
      image: "/img/112eda399d4e.webp",
      imageAlt: "Once Accounting company registration service sale page for paid advertising",
      metric: "3 Pricing Tiers",
      metricBadge: "Built for Paid Ads",
      overview: "Single-page sale page for an accounting firm, built as a paid-advertising landing destination for company registration and monthly bookkeeping services.",
      problem: "Ad traffic arrives with one question — what does it cost and how long does it take — but a conventional corporate site buries pricing behind an enquiry form, losing the visitor before the firm ever gets a lead.",
      baselineStats: [
        { value: "No landing page", label: "Paid traffic sent to a general corporate site" },
        { value: "Price on request", label: "Service fees not stated up front" },
        { value: "Unclear", label: "Registration process and timeline not explained" }
      ],
      solutions: [
        { title: "Price-Led Offer Presentation", body: "Three registration packages published openly at ฿4,000, ฿2,000 and ฿1,900 with the inclusions listed against each, so an ad visitor can qualify themselves in seconds instead of filling a form to find out." },
        { title: "Four-Step Process Explainer", body: "The registration journey reduced to four numbered steps — form, document preparation, signing, receiving the completed set — anchored by a one-week completion promise." },
        { title: "Persistent Conversion Bar", body: "Phone number and LINE contact repeated after every content block, matching how a single-page ad funnel converts rather than relying on one footer form." }
      ],
      impactTable: [
        { metric: "Landing destination", before: "General corporate site", after: "Dedicated sale page", delta: "Purpose-built" },
        { metric: "Pricing visibility", before: "On request", after: "3 tiers published", delta: "Open" },
        { metric: "Contact touchpoints", before: "Footer form only", after: "Repeated after each block", delta: "Multiplied" }
      ],
      deliverables: ["Sale Page Design", "Pricing Comparison Blocks", "Process Explainer Graphics", "Logo & Brand Assets"]

    },
    {
      id: "endless-eco",
      title: "Endless Eco",
      client: "BEURDEV CO., LTD.",
      timeline: "May 2024 – Aug 2024",
      role: "Lead UX/UI Designer",
      category: "Web Design & Renewable Energy",
      tags: ["Solar", "Calculator", "Local SEO", "Lead Gen"],
      image: "/img/9df6a7ddadfa.webp",
      imageAlt: "Endless Eco solar rooftop installation website with savings calculator",
      metric: "Up to 70% Bill Cut",
      metricBadge: "Free Site Survey",
      overview: "Bilingual site for a solar rooftop installer in Chachoengsao, built around a savings calculator that turns an abstract investment into a number the visitor can act on.",
      problem: "Solar is a high-consideration purchase where the buyer's real question is financial, not technical — how much will I save and when do I break even — but installer sites lead with equipment specifications and hide the economics behind a quote request.",
      baselineStats: [
        { value: "Spec-led", label: "Installers present equipment before financial return" },
        { value: "Quote-gated", label: "Savings and payback only available on enquiry" },
        { value: "Unclear", label: "Permit and installation process not explained upfront" }
      ],
      solutions: [
        { title: "Interactive Savings Calculator", body: "Visitors enter their monthly bill and daytime usage share to get recommended system size, monthly savings, payback period and 25-year total — answering the financial question before any contact is required." },
        { title: "Four-Step Process Transparency", body: "The journey from free site survey through design, PEA permits and switch-on stated openly, including that Endless Eco handles all utility paperwork — the part homeowners most fear." },
        { title: "Bilingual Local-SEO Structure", body: "Thai and English served together throughout, with geographic targeting for Chachoengsao and the Eastern provinces, since solar buying is a local search behaviour." }
      ],
      impactTable: [
        { metric: "Financial answer", before: "Quote required", after: "Instant calculator", delta: "Self-serve" },
        { metric: "Process visibility", before: "Not explained", after: "4 steps published", delta: "Transparent" },
        { metric: "Language coverage", before: "Single language", after: "Thai and English", delta: "Bilingual" }
      ],
      deliverables: ["Marketing Site", "Savings Calculator UI", "Portfolio & Blog Templates", "Bilingual TH/EN System"]

    },
    {
      id: "cwnh-hospital",
      title: "CWNH Nursing Home",
      client: "BEURDEV CO., LTD.",
      timeline: "Jun 2024 – Sep 2024",
      role: "Lead UX/UI Designer",
      category: "Web Design & Elderly Care",
      tags: ["Elderly Care", "Healthcare", "Trust", "Lead Gen"],
      image: "/img/51a82624552f.webp",
      imageAlt: "Chaeng Watthana Nursing Home elderly care centre website",
      metric: "24-Hour Care",
      metricBadge: "From ฿19,000 / month",
      overview: "Site for a 24-hour elderly care home, designed for adult children choosing where to place a parent — a decision driven by trust in the people and the facility, not by feature lists.",
      problem: "Families choosing a nursing home are deciding who will care for their parent daily, often while feeling guilty about the decision. Care centre sites typically list services and stay silent on the two things that actually settle it: who the staff are and what the rooms genuinely look like.",
      baselineStats: [
        { value: "Unseen staff", label: "Care team not introduced to prospective families" },
        { value: "No facility view", label: "Rooms and equipment not shown honestly" },
        { value: "Price on request", label: "Monthly and daily rates not published" }
      ],
      solutions: [
        { title: "Care Team Introduction", body: "Named staff with photographs and credentials — doctor, nurses, caregivers — because families are entrusting a person, not a facility, and want to see who that person is before visiting." },
        { title: "Honest Facility Photography", body: "Real photographs of rooms, beds, medical equipment and daily activities rather than stock imagery, letting families assess conditions before committing to a site visit." },
        { title: "Published Care Rates", body: "Monthly and daily pricing stated openly from ฿19,000 per month and ฿1,000 per day, with the inclusions listed, so families can assess affordability without an uncomfortable enquiry call." }
      ],
      impactTable: [
        { metric: "Care team visibility", before: "Not introduced", after: "Named staff with photos", delta: "Personal" },
        { metric: "Facility transparency", before: "Not shown", after: "Real room photography", delta: "Honest" },
        { metric: "Pricing disclosure", before: "On request", after: "Monthly and daily published", delta: "Open" }
      ],
      deliverables: ["Marketing Site", "Service & Pricing Pages", "Team Profile Layouts", "Article Templates"]

    },
    {
      id: "pumacha-lifestyle",
      title: "Pumacha Website",
      client: "BEURDEV CO., LTD.",
      timeline: "Mar 2024 – May 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Garment Manufacturing",
      tags: ["Manufacturing", "OEM", "Garment", "B2B"],
      image: "/img/142b87fa6b04.webp",
      imageAlt: "Pumacha garment and bag OEM manufacturing website",
      metric: "One-Stop Service",
      metricBadge: "Oeko-Tex Certified",
      overview: "Site for a garment and bag OEM manufacturer producing premium promotional apparel, positioned to win corporate buyers sourcing production directly rather than through agents.",
      problem: "Corporate buyers sourcing promotional apparel usually reach factories through agents, paying a margin without knowing who actually produces their order — and factories that sell direct have no way to prove they are the manufacturer rather than another intermediary.",
      baselineStats: [
        { value: "Agent-mediated", label: "Buyers reaching factories through intermediaries" },
        { value: "Unproven", label: "No evidence distinguishing factory from trading agent" },
        { value: "Unstated", label: "Testing certification not surfaced to buyers" }
      ],
      solutions: [
        { title: "Direct-From-Factory Positioning", body: "The no-agent argument stated explicitly and backed with production floor photography — cutting, sewing and finishing lines — so buyers can see the operation rather than take the claim on trust." },
        { title: "Capability & Product Range Display", body: "Garment categories and a bag collection shown together, including work produced for recognised brands, demonstrating the range a one-stop supplier is expected to cover." },
        { title: "Certification as Buying Signal", body: "Oeko-Tex testing certification surfaced prominently, since it is the standard corporate buyers screen on when the order includes childrenswear." }
      ],
      impactTable: [
        { metric: "Supply chain positioning", before: "Reached via agents", after: "Direct factory contact", delta: "Disintermediated" },
        { metric: "Production capability evidence", before: "Claimed only", after: "Factory floor photography", delta: "Shown" },
        { metric: "Certification visibility", before: "Not stated", after: "Oeko-Tex surfaced", delta: "Published" }
      ],
      deliverables: ["Corporate Marketing Site", "Product Collection Layouts", "Capability Pages", "Contact & Enquiry Flow"]

    },
    {
      id: "clean-all-kleen",
      title: "Clean All Kleen",
      client: "BEURDEV CO., LTD.",
      timeline: "Apr 2024 – Jun 2024",
      role: "UX/UI Designer",
      category: "Web Design & Facility Services",
      tags: ["Facility Services", "B2B", "Sale Page", "Lead Gen"],
      image: "/img/b795be97cdda.webp",
      imageAlt: "Clean All Kleen commercial and industrial cleaning service sale page",
      metric: "3 Service Lines",
      metricBadge: "Industrial & Commercial",
      overview: "Single-page site for a commercial cleaning contractor covering big cleaning, industrial cleanroom work and drain de-greasing across factories, offices, malls and showrooms.",
      problem: "Commercial cleaning contracts are awarded on evidence that the contractor has handled comparable sites, but service companies typically describe what they offer in text without showing a single job they have completed.",
      baselineStats: [
        { value: "Undifferentiated", label: "Service lines not separated by site type" },
        { value: "No evidence", label: "Completed jobs not shown to prospective clients" },
        { value: "Unclear scope", label: "Facility types served not stated explicitly" }
      ],
      solutions: [
        { title: "Three-Service Structure", body: "Work divided into big cleaning, industrial cleanroom service and drain de-greasing, each with its own imagery so a facility manager can identify their requirement immediately rather than reading a paragraph." },
        { title: "Completed Work Evidence Grid", body: "A photo grid of real jobs — factory floors, ducting, upholstery, crews in protective equipment — giving procurement the comparable-site evidence that decides commercial cleaning contracts." },
        { title: "Scope Stated in the Hero", body: "The facility types served listed up front — homes, condos, offices, factories, restaurants, malls, showrooms — so a visitor knows within seconds whether the contractor covers their site." }
      ],
      impactTable: [
        { metric: "Service presentation", before: "Text description", after: "3 lines with imagery", delta: "Structured" },
        { metric: "Completed work evidence", before: "None shown", after: "Job photography grid", delta: "Documented" },
        { metric: "Coverage clarity", before: "Implied", after: "Facility types listed", delta: "Explicit" }
      ],
      deliverables: ["Sale Page Design", "Service Category Blocks", "Work Gallery Layout", "Contact & Map Section"]

    },
    {
      id: "zea-management",
      title: "Zea Management",
      client: "BEURDEV CO., LTD.",
      timeline: "Jul 2024 – Oct 2024",
      role: "Senior UX/UI Designer",
      category: "Web Design & Business Services",
      tags: ["Back Office", "Accounting", "B2B", "Corporate"],
      image: "/img/2b62be871cf9.webp",
      imageAlt: "Zea Corp back office and accounting outsourcing website",
      metric: "4 Service Lines",
      metricBadge: "Outsourced Back Office",
      overview: "Corporate site for a back-office outsourcing firm handling accounting, audit, tax and company registration for businesses that would rather not run those functions in-house.",
      problem: "Outsourcing your accounts means handing a stranger your financial records, so the decision runs on credibility — but service firms typically list what they do without evidencing why they can be trusted with it.",
      baselineStats: [
        { value: "Undifferentiated", label: "Service scope presented as a flat list" },
        { value: "Unproven", label: "Expertise claimed without supporting evidence" },
        { value: "Unclear", label: "Engagement process not explained to prospects" }
      ],
      solutions: [
        { title: "Three-Step Engagement Explainer", body: "The path to working together reduced to three steps — brief, Google Form, consultation — removing the ambiguity that stops businesses starting an outsourcing conversation." },
        { title: "Credibility Through Proof", body: "Client logos and a record of speaking engagements including tax advisory seminars, evidencing recognised expertise rather than asserting it." },
        { title: "Premium Dark Identity", body: "A black and gold visual system that signals professional financial services, distinguishing the firm from the generic templates common in the accounting category." }
      ],
      impactTable: [
        { metric: "Engagement process", before: "Not explained", after: "3 steps published", delta: "Clarified" },
        { metric: "Credibility evidence", before: "Claimed", after: "Clients and speaking record", delta: "Demonstrated" },
        { metric: "Category positioning", before: "Generic", after: "Premium dark identity", delta: "Differentiated" }
      ],
      deliverables: ["Corporate Marketing Site", "Service Pages", "Article Templates", "Contact & Enquiry Flow"]

    }
  ],
};

function Nav({
  onHome,
  onProjects,
  onAbout,
  onStack,
  onContact,
  currentPage,
}: {
  onHome: Handler;
  onProjects: Handler;
  onAbout: Handler;
  onStack: Handler;
  onContact: Handler;
  currentPage: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink = (label: string, active: boolean, onClick: Handler, extra?: React.ReactNode) => (
    <button
      onClick={() => {
        onClick();
        setMobileOpen(false);
      }}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        fontWeight: 500,
        color: active ? "#6EE7B7" : "#9CA0A8",
        background: active ? "rgba(110,231,183,0.1)" : "none",
        border: active ? "1px solid rgba(110,231,183,0.3)" : "1px solid transparent",
        borderRadius: 8,
        padding: "6px 12px",
        cursor: "pointer",
        transition: "all 150ms",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.color = "#F5F5F4";
          e.currentTarget.style.borderColor = "#24262B";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.color = "#9CA0A8";
          e.currentTarget.style.borderColor = "transparent";
        }
      }}
    >
      <span>{label}</span>
      {extra}
    </button>
  );

  const projectsBadge = (
    <span
      style={{
        fontSize: 10,
        background: "#1B1D21",
        border: "1px solid #24262B",
        color: "#6EE7B7",
        padding: "1px 6px",
        borderRadius: 10,
      }}
    >
      29
    </span>
  );

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        borderBottom: "1px solid #24262B",
        background: "rgba(10,11,13,0.92)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
          <button
            onClick={onHome}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 18,
              color: "#F5F5F4",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: 0,
              flexShrink: 0,
            }}
          >
            <span>Piyachon W.</span>
            <span
              className="nav-role-badge"
              style={{
                fontSize: 10,
                fontFamily: "'JetBrains Mono', monospace",
                background: "#1B1D21",
                border: "1px solid #24262B",
                padding: "2px 7px",
                borderRadius: 4,
                color: "#6EE7B7",
                fontWeight: 600,
              }}
            >
              Senior UX/UI
            </span>
          </button>
        </div>

        {/* Desktop Nav Menu: Home, Projects (29), About, Stack, Contact */}
        <div className="nav-desktop-menu" style={{ alignItems: "center", gap: 8 }}>
          {navLink("Home", currentPage === "home", onHome)}
          {navLink("Projects", currentPage === "projects", onProjects, projectsBadge)}
          {navLink("About", currentPage === "about", onAbout)}
          {navLink("Stack", currentPage === "stack", onStack)}

          <button
            onClick={onContact}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              background: "#6EE7B7",
              color: "#0A0B0D",
              border: "none",
              borderRadius: 8,
              padding: "7px 14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
              transition: "transform 150ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span>Contact</span>
            <span>✉</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="nav-hamburger-btn"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            background: mobileOpen ? "rgba(110,231,183,0.1)" : "none",
            border: mobileOpen ? "1px solid rgba(110,231,183,0.3)" : "1px solid #24262B",
            borderRadius: 8,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <div style={{ position: "relative", width: 16, height: 12 }}>
            <span
              style={{
                position: "absolute",
                left: 0,
                top: mobileOpen ? 5 : 0,
                width: 16,
                height: 2,
                background: mobileOpen ? "#6EE7B7" : "#F5F5F4",
                borderRadius: 2,
                transition: "all 200ms",
                transform: mobileOpen ? "rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 5,
                width: 16,
                height: 2,
                background: mobileOpen ? "#6EE7B7" : "#F5F5F4",
                borderRadius: 2,
                transition: "opacity 150ms",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 0,
                top: mobileOpen ? 5 : 10,
                width: 16,
                height: 2,
                background: mobileOpen ? "#6EE7B7" : "#F5F5F4",
                borderRadius: 2,
                transition: "all 200ms",
                transform: mobileOpen ? "rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`nav-mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div className="nav-dot" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#6EE7B7",
                fontWeight: 500,
              }}
            >
              Available for work
            </span>
          </div>

          <button
            onClick={() => {
              onHome();
              setMobileOpen(false);
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 500,
              color: currentPage === "home" ? "#6EE7B7" : "#F5F5F4",
              background: currentPage === "home" ? "rgba(110,231,183,0.1)" : "#131417",
              border: currentPage === "home" ? "1px solid rgba(110,231,183,0.3)" : "1px solid #24262B",
              borderRadius: 8,
              padding: "12px 14px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Home
          </button>

          <button
            onClick={() => {
              onProjects();
              setMobileOpen(false);
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 500,
              color: currentPage === "projects" ? "#6EE7B7" : "#F5F5F4",
              background: currentPage === "projects" ? "rgba(110,231,183,0.1)" : "#131417",
              border: currentPage === "projects" ? "1px solid rgba(110,231,183,0.3)" : "1px solid #24262B",
              borderRadius: 8,
              padding: "12px 14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <span>Projects</span>
            {projectsBadge}
          </button>

          <button
            onClick={() => {
              onAbout();
              setMobileOpen(false);
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 500,
              color: currentPage === "about" ? "#6EE7B7" : "#F5F5F4",
              background: currentPage === "about" ? "rgba(110,231,183,0.1)" : "#131417",
              border: currentPage === "about" ? "1px solid rgba(110,231,183,0.3)" : "1px solid #24262B",
              borderRadius: 8,
              padding: "12px 14px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            About
          </button>

          <button
            onClick={() => {
              onStack();
              setMobileOpen(false);
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 500,
              color: currentPage === "stack" ? "#6EE7B7" : "#F5F5F4",
              background: currentPage === "stack" ? "rgba(110,231,183,0.1)" : "#131417",
              border: currentPage === "stack" ? "1px solid rgba(110,231,183,0.3)" : "1px solid #24262B",
              borderRadius: 8,
              padding: "12px 14px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Stack
          </button>

          <button
            onClick={() => {
              onContact();
              setMobileOpen(false);
            }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              background: "#6EE7B7",
              color: "#0A0B0D",
              border: "none",
              borderRadius: 8,
              padding: "12px 14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              marginTop: 4,
            }}
          >
            <span>Contact</span>
            <span>✉</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function KpiStrip() {
  const items = [
    { value: "5+ Yrs", label: "Product UX experience", accent: "#6EE7B7", accentRgb: "110,231,183" },
    { value: "5 Core", label: "Data & IoT platforms", accent: "#3B82F6", accentRgb: "59,130,246" },
    { value: "−68%", label: "Avg. workflow friction reduction", accent: "#A78BFA", accentRgb: "167,139,250" },
    { value: "40+", label: "Delivered web & brand systems", accent: "#FCD34D", accentRgb: "252,211,77" },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: 16,
        marginTop: 48,
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#131417",
            border: "1px solid #24262B",
            borderRadius: 14,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Bottom glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -50,
              left: "50%",
              transform: "translateX(-50%)",
              width: 200,
              height: 160,
              background: `radial-gradient(circle, rgba(${item.accentRgb},0.25) 0%, transparent 70%)`,
              filter: "blur(10px)",
              pointerEvents: "none",
            }}
          />
          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 28,
              fontWeight: 700,
              color: "#F5F5F4",
              letterSpacing: "-0.02em",
            }}
          >
            {item.value}
          </span>
          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#9CA0A8",
              lineHeight: 1.4,
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Image that reserves its box, shimmers while the bitmap streams in, then
 * cross-fades it. The frame div carries the layout the surrounding markup used
 * to put on a plain wrapper, so call sites keep the same DOM depth.
 */
function LazyImage({
  src,
  alt,
  frameStyle,
  style,
  onError,
  eager = false,
}: {
  src?: string;
  alt?: string;
  frameStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`img-frame${loaded ? " is-loaded" : ""}`} style={frameStyle}>
      <img
        // A cached image can finish before React attaches onLoad, so the ref
        // settles those cases instead of leaving the shimmer running forever.
        ref={(el) => {
          if (el?.complete) setLoaded(true);
        }}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : undefined}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
        style={style}
      />
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: Handler }) {
  return (
    <div
      className="project-card"
      onClick={onClick}
      style={{
        background: "#131417",
        border: "1px solid #24262B",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image + badge overlay */}
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#1B1D21" }}>
        <LazyImage
          src={project.image}
          alt={project.imageAlt || project.title}
          frameStyle={{ position: "absolute", inset: 0 }}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/600x380/1a1b1f/6EE7B7?text=Platform+Case+Study";
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,11,13,0.2) 0%, rgba(10,11,13,0.75) 100%)",
          }}
        />
        {/* Badges */}
        {project.badges && project.badges[0] && (
          <div style={{ position: "absolute", top: 14, left: 14 }}>
            <div className="metric-badge">{project.badges[0].label}</div>
          </div>
        )}
        {project.badges && project.badges[1] && (
          <div style={{ position: "absolute", top: 14, right: 14 }}>
            <div className="metric-badge metric-badge-neutral">{project.badges[1].label}</div>
          </div>
        )}
        {project.badges && project.badges[2] && (
          <div style={{ position: "absolute", bottom: 14, right: 14 }}>
            <div className="metric-badge">{project.badges[2].label}</div>
          </div>
        )}
        {/* Hover CTA */}
        <div
          className="cta-reveal"
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#6EE7B7",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(10,11,13,0.9)",
            padding: "5px 12px",
            borderRadius: 6,
            border: "1px solid rgba(110,231,183,0.4)",
          }}
        >
          Read full case study & data →
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span className="tag-chip">{project.role}</span>
          <span className="tag-chip">{project.platform}</span>
          <span className="tag-chip">{project.industry}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#F5F5F4",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#9CA0A8",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {project.hook}
          </p>
        </div>

        {/* Stack chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 8 }}>
          {(project.stack || project.tags || []).map((s: string) => (
            <span key={s} className="stack-chip">
              {s}
            </span>
          ))}
        </div>

        {/* Divider + client */}
        <div
          style={{
            borderTop: "1px solid #24262B",
            paddingTop: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#6EE7B7" }}>
            {project.client}
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369" }}>
            {project.timeline}
          </span>
        </div>
      </div>
    </div>
  );
}

function KpiScoreboard({ kpis }: { kpis: Kpi[] }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 1,
        background: "#24262B",
        border: "1px solid #24262B",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {kpis.map((kpi, i) => (
        <div
          key={i}
          className={visible ? "kpi-animate" : ""}
          style={{
            background: "#131417",
            padding: "26px 24px",
            animationDelay: `${i * 120}ms`,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 38,
              fontWeight: 700,
              color: "#6EE7B7",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: 10,
            }}
          >
            {kpi.value}
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#F5F5F4",
              marginBottom: 4,
            }}
          >
            {kpi.label}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#5F6369",
              letterSpacing: "0.02em",
            }}
          >
            {kpi.sub}
          </div>
        </div>
      ))}
    </div>
  );
}

function BaselineStat({ stats }: { stats: Stat[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            background: "#131417",
            border: "1px solid #24262B",
            borderRadius: 10,
            padding: "18px 20px",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 28,
              fontWeight: 700,
              color: "#FCA5A5",
              marginBottom: 6,
              letterSpacing: "-0.02em",
            }}
          >
            {s.value}
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#9CA0A8",
              lineHeight: 1.4,
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

const processSteps = {
  "smart-forest": [
    {
      step: "01",
      title: "Design Thinking Framework",
      body: "Anchored the engagement in a double-diamond framing so stakeholders agreed on the problem space before any interface work. The client arrived asking for 'a better dashboard', but the real constraint was that field telemetry and satellite data were never reconciled into one decision surface.",
      images: [
        "/img/e64544e8d731.webp",
        "/img/d6229950001a.webp",
        "/img/af7201895501.webp",
      ],
    },
    {
      step: "02",
      title: "Product Ecosystem Mapping",
      body: "Mapped how the platform sits between ARV's drone operations, PTTEP's carbon reporting obligations, and the field rangers who actually walk the plots. Defining these relationships early prevented the classic enterprise trap of designing for the buyer while ignoring the daily operator.",
      images: [
        "/img/5b84aa187369.webp",
      ],
    },
    {
      step: "03",
      title: "Competitive Product Analysis",
      body: "Audited existing GIS and carbon-monitoring products to find where each one broke down. The pattern was consistent: tools were excellent at one data type and hostile to the rest, forcing analysts to triangulate across windows. That gap defined our positioning.",
      images: [
        "/img/fd064de035d7.webp",
        "/img/1fc13a0355c1.webp",
        "/img/ec52eb897bf2.webp",
        "/img/7b491fc5feae.webp",
      ],
    },
    {
      step: "04",
      title: "Personas & Journey Mapping",
      body: "Built three role-based personas — carbon auditor, GIS analyst, field ranger — each with a distinct tolerance for data density. The journey map exposed where a single ranger task required jumping across four disconnected tools, which became the primary redesign target.",
      images: [
        "/img/75a1e1cc9d0e.webp",
        "/img/20b60c5b2c68.webp",
      ],
    },
    {
      step: "05",
      title: "Core Problem Statement",
      body: "Distilled research into one falsifiable problem statement rather than a list of feature requests. Framing the challenge as fragmented telemetry preventing timely carbon verification gave the team a shared success criterion to design and test against.",
      images: [
        "/img/71150c6fb943.webp",
      ],
    },
    {
      step: "06",
      title: "Quantitative Survey & Validation",
      body: "Ran structured surveys with the operator group to size which pain points were widespread versus anecdotal. Survey wording went through several revisions — early drafts leaked assumptions that would have confirmed what we already believed instead of testing it. The final instrument produced the baseline numbers later used to measure the redesign.",
      images: [
        "/img/89a23b1c6f55.webp",
        "/img/450fe7105838.webp",
        "/img/713e5b9a1998.webp",
        "/img/76de419dd0e8.webp",
        "/img/203c03003ef7.webp",
      ],
    },
    {
      step: "07",
      title: "Information Architecture",
      body: "Restructured the IA around decisions rather than data sources. Instead of mirroring the backend's satellite/drone/sensor split, screens were grouped by the question the user was answering, with progressive disclosure keeping dense GIS layers one level down.",
      images: [
        "/img/1f9851799d1b.webp",
        "/img/254b4a0a553b.webp",
      ],
    },
    {
      step: "08",
      title: "Wireframing & Hi-Fi Prototypes",
      body: "Moved from low-fidelity flows to hi-fi frames, pressure-testing how much telemetry a single viewport could carry before analysts lost the thread. Layer toggling and map density were the two interactions that went through the most iteration.",
      images: [
        "/img/64cb2e0a37a8.webp",
        "/img/eeecaaf7aefb.webp",
        "/img/0c23da99f09e.webp",
      ],
    },
    {
      step: "09",
      title: "Design System & Token Architecture",
      body: "Engineered BaseBlocksUI as a tokenized component framework — semantic colour tokens, spacing scales, and a dedicated chart-primitives layer so GIS visualisations stayed legible across themes. This is what let 34 components be reused when the platform expanded to two new regions.",
      images: [
        "/img/cd4d11f314ac.webp",
        "/img/83482528aa7f.webp",
        "/img/c83c80528121.webp",
        "/img/c26fd3e089b9.webp",
      ],
    },
    {
      step: "10",
      title: "Final UI Delivery",
      body: "Resolved the system into the production interface: a unified carbon-tracking command centre where satellite imagery, drone telemetry and field reports converge into one auditable view — spanning dashboard, map analysis, plot detail, reporting and admin surfaces. Every screen draws from the token architecture, so visual consistency held without per-screen intervention.",
      images: [
        "/img/29ff7486b121.webp",
        "/img/8543d840cc61.webp",
        "/img/5700efd4b40b.webp",
        "/img/37f2d7178707.webp",
        "/img/e3a051b96bcf.webp",
        "/img/9ef45125d8a8.webp",
        "/img/7afb12494e48.webp",
        "/img/017012cea57b.webp",
      ],
    },
    {
      step: "11",
      title: "Screen Flow & Interactive Prototype",
      body: "With the screens designed, the full flow was assembled and wired into a clickable prototype. Laying the multi-role navigation out end-to-end made structural problems visible that individual screens had hidden — two redundant states were cut here rather than carried into build.",
      images: [
        "/img/8152b47b7af8.webp",
        "/img/40d58e4fd5ab.webp",
      ],
    },
    {
      step: "12",
      title: "Design Spec & Developer Handoff",
      body: "Documented every component with edge-case states, token references and behavioural notes. The spec was written to remove interpretation gaps: no engineer should need to ask what happens when data is missing, stale, or out of range. This is what made the prototype buildable without a translation layer.",
      images: [
        "/img/ec185830aa6b.webp",
      ],
    },
    {
      step: "13",
      title: "Usability Testing & Iteration",
      body: "Put the prototype in front of real operators and measured task completion rather than collecting opinions. Time-on-task and error rate separated genuine friction from simple unfamiliarity, and the findings drove a round of layout and labelling revisions back into the spec before engineering built against it.",
      images: [
        "/img/eab7eaf40650.webp",
        "/img/308bd5a80031.webp",
        "/img/7f752303a445.webp",
        "/img/9701c254b768.webp",
        "/img/b982444cd334.webp",
      ],
    },
    {
      step: "14",
      title: "Gathering Feedback & Synthesis",
      body: "Closed the loop by collecting structured feedback from operators and stakeholders after testing. Reading written responses alongside session findings separated one-off preferences from repeated signals — determining what shipped in this release and what was logged for the next.",
      images: [
        "/img/3976ef32d68a.webp",
        "/img/ab6258e58cce.webp",
        "/img/af00c95d2ec5.webp",
        "/img/af00c95d2ec5.webp",
        "/img/2f3920e302a4.webp",
      ],
    },
  ],
  "smart-watcher": [
    {
      step: "01",
      title: "Design Thinking & Process Framing",
      body: "Framed the engagement around a security operations problem rather than a dashboard request. With hundreds of unclassified CCTV and sensor feeds arriving continuously, the design question was not how to display more, but how to decide what deserves an operator's attention first.",
      images: [
        "/img/7459d5a7e568.webp",
        "/img/bf51371915fe.webp",
      ],
    },
    {
      step: "02",
      title: "Product Ecosystem Mapping",
      body: "Mapped how the platform connects camera infrastructure, AI classification services, and the control-room operators acting on alerts. Making these dependencies explicit clarified where machine confidence ends and human judgement has to begin.",
      images: [
        "/img/9a92120beba1.webp",
      ],
    },
    {
      step: "03",
      title: "Personas & Operator Roles",
      body: "Defined the operator profiles who live in this system daily — monitoring staff scanning for anomalies versus supervisors auditing after the fact. Their differing tolerance for alert volume drove how aggressively the interface filters and escalates.",
      images: [
        "/img/54da30b22f49.webp",
      ],
    },
    {
      step: "04",
      title: "User Flow Architecture",
      body: "Structured the flows around the alert lifecycle: detection, triage, verification, resolution. Anchoring navigation to this sequence meant operators always knew what state an incident was in without reconstructing it from scattered screens.",
      images: [
        "/img/4bbb3563583b.webp",
      ],
    },
    {
      step: "05",
      title: "Design System & Token Architecture",
      body: "Built the component system on semantic tokens so severity, status, and confidence levels read consistently across every surface. In a security context this is functional, not cosmetic — colour carries meaning an operator has to parse in under a second.",
      images: [
        "/img/d407e1f6ae2f.webp",
        "/img/dfe87d45058e.webp",
        "/img/1079895376ab.webp",
      ],
    },
    {
      step: "06",
      title: "Telemetry Chart Primitives",
      body: "Extended the system with a dedicated chart layer for real-time sensor telemetry. These primitives had to stay legible at a glance while remaining honest about gaps, latency, and low-confidence readings rather than smoothing them away.",
      images: [
        "/img/c36e6e5098bc.webp",
      ],
    },
    {
      step: "07",
      title: "Wireframing",
      body: "Worked through layout density in low fidelity, testing how many concurrent feeds and alerts a single viewport could carry before triage speed degraded. Progressive disclosure kept secondary telemetry accessible without competing for foreground attention.",
      images: [
        "/img/51a18790395f.webp",
      ],
    },
    {
      step: "08",
      title: "UI Design",
      body: "Resolved wireframes into the production interface — an AI-triaged operations view where feeds, classifications and sensor state converge into one monitoring surface built for sustained use in a control room.",
      images: [
        "/img/7d76a5efdea5.webp",
      ],
    },
    {
      step: "09",
      title: "CRUD & Management Interfaces",
      body: "Designed the administrative layer: device registration, zone configuration, rule management and user permissions. These back-office screens are where deployments actually scale, so they were treated as first-class product surfaces rather than afterthoughts.",
      images: [
        "/img/11e145954c17.webp",
        "/img/9741fbe5afbd.webp",
        "/img/67f3c41222cb.webp",
        "/img/a2b082586390.webp",
        "/img/a9aebfb0ad16.webp",
      ],
    },
    {
      step: "10",
      title: "Design Spec & Developer Handoff",
      body: "Documented components with edge-case states, token references and behavioural notes — including what the interface does when a feed drops, a classification is uncertain, or telemetry goes stale. Failure states in a security system cannot be left to interpretation.",
      images: [
        "/img/485cdbef7775.webp",
      ],
    },
    {
      step: "11",
      title: "Screen Flow & Interactive Prototype",
      body: "Assembled the full screen flow and a clickable prototype so multi-role navigation could be walked end-to-end. Seeing alert triage as a continuous path exposed transitions that felt correct in isolation but broke the operator's momentum.",
      images: [
        "/img/b50ab4e4e8ed.webp",
        "/img/ee2d40140545.webp",
      ],
    },
    {
      step: "12",
      title: "Usability Testing",
      body: "Ran moderated task-completion sessions with operators against the prototype. Measuring time to triage and misclassification recovery — rather than collecting preferences — isolated the friction worth fixing before engineering built against the spec.",
      images: [
        "/img/15a198991954.webp",
      ],
    },
  ],
  "area-22": [
    {
      step: "01",
      title: "Requirement Gathering",
      body: "Started by pinning down what the back-office actually had to control. With 400+ industrial IoT nodes deployed across sites, requirements arrived as a mix of hardware constraints, operational rules and admin permissions — the work was reconciling them into a single coherent scope before any screen existed.",
      images: [
        "/img/df16c418f613.webp",
        "/img/fd4b8357caaa.webp",
      ],
    },
    {
      step: "02",
      title: "Information Architecture",
      body: "Structured the IA around what an administrator manages rather than how the backend stores it. Gateways, users, companies, tickets and live telemetry each carry different access rules, so the hierarchy had to make permission boundaries legible without forcing operators to learn the data model.",
      images: [
        "/img/d784c866aee1.webp",
      ],
    },
    {
      step: "03",
      title: "Design System Foundation",
      body: "Built a token-driven component system sized for a dense admin product — tables, forms, status indicators and state feedback. In a back-office where users repeat the same actions hundreds of times, consistency directly reduces error rate.",
      images: [
        "/img/6ab923093675.webp",
      ],
    },
    {
      step: "04",
      title: "Navigation & Shell Design",
      body: "Designed the persistent navigation shell that holds the whole product together. With this many management surfaces, the side navigation had to expose depth without becoming a wall of links — grouping by responsibility rather than by feature count.",
      images: [
        "/img/c508f607a93b.webp",
      ],
    },
    {
      step: "05",
      title: "Authentication & Access Control",
      body: "Designed sign-in and the RBAC entry point. Getting the permission model visible at the door mattered: an admin platform that hides what a role can do produces support tickets, not security.",
      images: [
        "/img/f6bf04544b6e.webp",
      ],
    },
    {
      step: "06",
      title: "User & Company Management",
      body: "Built the CRUD surfaces for user accounts, role assignment and multi-company structure. These screens are where a deployment scales from one site to many, so they were designed as core product rather than configuration afterthoughts.",
      images: [
        "/img/d28ccf0d2af7.webp",
        "/img/7b57aa940dce.webp",
      ],
    },
    {
      step: "07",
      title: "Operational Modules",
      body: "Designed the day-to-day operational tools — meeting room booking, job ticketing, and licence plate records. Each module reuses the same table, filter and detail patterns so operators carry one interaction model across the whole system.",
      images: [
        "/img/b4d0ea87e167.webp",
        "/img/218f19599ac3.webp",
        "/img/8fb0ec1d62f9.webp",
      ],
    },
    {
      step: "08",
      title: "CCTV & Live Monitoring",
      body: "Integrated live camera feeds into the same shell as the management tools, so monitoring is not a separate destination. Feed state — connected, degraded, offline — is surfaced explicitly rather than left to a blank frame.",
      images: [
        "/img/8001872e76a3.webp",
      ],
    },
    {
      step: "09",
      title: "Telemetry Dashboard",
      body: "Resolved the platform into its dashboard layer, where gateway health and sensor telemetry across all nodes converge into one view. The charts were built to stay honest about gaps and stale readings rather than smoothing them into a clean line.",
      images: [
        "/img/b0143b30ea6b.webp",
        "/img/7da3b11edaa4.webp",
        "/img/7793bb903d3f.webp",
      ],
    },
  ],
  "kanna-app": [
    {
      step: "01",
      title: "UX Process Framing",
      body: "Set the process for a product whose users are smallholder farmers, not office workers — many on low-end devices, in the field, with intermittent connectivity. That constraint shaped every decision downstream: what could be assumed, what had to degrade gracefully, and how much a screen could ask of someone standing in a plot.",
      images: [
        "/img/9de6929de782.webp",
      ],
    },
    {
      step: "02",
      title: "Design System Foundation",
      body: "Built a token-driven system sized for mobile-first agricultural use — large touch targets, high contrast for outdoor daylight, and Thai typography that stays legible at small sizes. Consistency here directly reduced onboarding friction for first-time smartphone users.",
      images: [
        "/img/73e3a31326fc.webp",
      ],
    },
    {
      step: "03",
      title: "Onboarding, Homepage & Content",
      body: "Designed the welcome flow, homepage and news surfaces alongside their full state coverage — loading, 500 errors, unauthorised, no-internet, request timeout and coming-soon. For a field app, the offline and failure states are not edge cases; they are the everyday experience.",
      images: [
        "/img/39898510db1b.webp",
        "/img/e1f7b19c50ad.webp",
        "/img/dd8212b760be.webp",
      ],
    },
    {
      step: "04",
      title: "Farm Plot & Project Management",
      body: "Structured how farmers register plots, join projects and manage participation. Flows were designed for both directions — joining a project and leaving one — including the empty state where a farmer has no plots registered yet.",
      images: [
        "/img/50f4d93dcc66.webp",
        "/img/7ea7b94a0902.webp",
        "/img/e740bb35c7d5.webp",
        "/img/46c9bd524978.webp",
      ],
    },
    {
      step: "05",
      title: "Activity Tracking & Cultivation Records",
      body: "Designed the activity logging module where farmers record cultivation events over a season. Screen-flow diagrams and hand-sketched IA were used to compress a long, repetitive data-entry task into something completable on a phone between field rounds.",
      images: [
        "/img/a42899b7d00f.webp",
        "/img/353d7b0723a0.webp",
        "/img/50998c200d31.webp",
      ],
    },
    {
      step: "06",
      title: "Utility & Conversion Tools",
      body: "Added practical in-app tools including unit conversion for length and area measurements. Thai agricultural units sit alongside metric in daily use, so conversion was built into the product rather than left as something farmers work out separately.",
      images: [
        "/img/d7a7b54106a5.webp",
        "/img/d71c9b31361a.webp",
        "/img/e698f740f168.webp",
      ],
    },
    {
      step: "07",
      title: "Notifications & Account Management",
      body: "Designed alerting, profile and account surfaces that connect the mobile app to the geospatial back-office. Notifications had to be specific enough to act on without becoming noise a farmer learns to dismiss.",
      images: [
        "/img/b582ccd9f289.webp",
        "/img/47d2345ea0ca.webp",
        "/img/6e76036f0372.webp",
      ],
    },
    {
      step: "08",
      title: "Final UI & Launch",
      body: "Shipped to the App Store and Google Play — an AI-driven field diagnostics app paired with a geospatial CMS, serving 15,000+ smallholder farmers under the KANNA by Varuna brand.",
      images: [
        "/img/c70518826907.webp",
        "/img/520478b35168.webp",
      ],
    },
  ],
  "dr-smoothlife": [
    {
      step: "01",
      title: "Telemedicine User Flow Architecture",
      body: "Mapped the telehealth journey as parallel tracks — what the patient experiences above the line, what the system does below it. Scenario-based flows covered the branching realities of telemedicine: consultation with prescription dispensing, delivery-area coverage limits, and the fallback paths when a case cannot be handled remotely.",
      images: [
        "/img/cbb2e9901c98.webp",
        "/img/63477afa21d6.webp",
        "/img/e7f29eff3689.webp",
      ],
    },
    {
      step: "02",
      title: "Design System Foundation",
      body: "Built a token-driven system spanning mobile, tablet and desktop. In a healthcare product the system carries clinical weight — status, urgency and prescription state have to read identically whether a patient sees them on a phone or a doctor reads them on a workstation.",
      images: [
        "/img/309c04fe04e9.webp",
      ],
    },
    {
      step: "03",
      title: "Responsive Patient Experience",
      body: "Designed the patient-facing surfaces across desktop, tablet and mobile breakpoints rather than shrinking one layout into the others. Each viewport got a navigation model that fits how it is actually held and used.",
      images: [
        "/img/7686e6167464.webp",
        "/img/d77ddb8c7a31.webp",
      ],
    },
    {
      step: "04",
      title: "Telepharma & Telemed Journeys",
      body: "Detailed the two core service paths — remote consultation and digital prescription fulfilment — from doctor discovery through video consult to medication delivery. Laying both journeys out in full exposed where they diverge and where they can share components.",
      images: [
        "/img/573999861f34.webp",
        "/img/b12fa236114a.webp",
        "/img/d5df024500c9.webp",
      ],
    },
    {
      step: "05",
      title: "Logistics & Fulfilment Back-Office",
      body: "Designed the admin surfaces governing delivery: shipping fee rules, coverage zones and rate configuration. Prescription delivery is where telemedicine either works or quietly fails, so these operational tools were treated as core product.",
      images: [
        "/img/0f273f4608bd.webp",
        "/img/125a36fbbeab.webp",
      ],
    },
    {
      step: "06",
      title: "Order & Prescription Management",
      body: "Built the CMS workflows for order handling — review, status transitions, and itemised prescription detail. Screens were structured so an operator can reconstruct exactly what was prescribed, dispensed and shipped without leaving the record.",
      images: [
        "/img/e468522152cd.webp",
        "/img/65c7f86eba73.webp",
      ],
    },
    {
      step: "07",
      title: "Exception Handling & Cancellations",
      body: "Designed the cancellation and refund flows, including partial item cancellation within an order. In pharmacy fulfilment the exception path is frequent enough that leaving it undesigned would have pushed the work onto support staff.",
      images: [
        "/img/0cfb8c44e356.webp",
        "/img/5600db3e620c.webp",
      ],
    },
  ],
  "th-health": [
    {
      step: "01",
      title: "Screen Flow Architecture",
      body: "Laid the whole platform out as one connected flow before designing individual pages. Mapping browse, product detail, cart, checkout, account and order history in a single view showed how far a customer travels between finding a remedy and paying for it — and where that path could be shortened.",
      images: [
        "/img/fd64221933f3.webp",
      ],
    },
    {
      step: "02",
      title: "Core Marketing & Landing Pages",
      body: "Designed the homepage, promotions, article and about surfaces that carry the brand and drive acquisition. These pages had to establish credibility quickly: in health commerce a customer decides whether to trust the seller before they evaluate any product.",
      images: [
        "/img/37ac5191256f.webp",
      ],
    },
    {
      step: "03",
      title: "Product Discovery & Detail",
      body: "Built the catalogue browsing, filtering and product detail templates. Detail pages were structured so dosage, indication and pricing are readable without scrolling past marketing copy — the information a customer actually needs to decide comes first.",
      images: [
        "/img/979c29af40b1.webp",
      ],
    },
    {
      step: "04",
      title: "Health Packages & Content Pages",
      body: "Designed the health check-up package pages and long-form editorial content. Packages are comparison-heavy purchases, so pricing tables and inclusions were laid out to be scanned side-by-side rather than read sequentially.",
      images: [
        "/img/9a2046c709b6.webp",
      ],
    },
    {
      step: "05",
      title: "Account & Member Management",
      body: "Designed member registration, profile management and address book flows, including inline validation and success feedback. Reducing form friction here directly affects whether a first-time buyer completes their first order.",
      images: [
        "/img/f4a43beda2c0.webp",
        "/img/2f579c6f4c70.webp",
      ],
    },
    {
      step: "06",
      title: "Wishlist & Saved Products",
      body: "Built the saved-products surface so customers can hold items across sessions. For repeat medication and supplement purchases this doubles as a personal reorder list, not just a shopping convenience.",
      images: [
        "/img/c153191239da.webp",
      ],
    },
    {
      step: "07",
      title: "Checkout & Payment Confirmation",
      body: "Designed the bank transfer flow with slip upload, including the error state when a required file is missing. Thai e-commerce still runs heavily on transfer-and-confirm, so this path needed the same care usually reserved for card checkout.",
      images: [
        "/img/306c114fb44d.webp",
      ],
    },
    {
      step: "08",
      title: "Order History & Fulfilment Tracking",
      body: "Built order history with clear payment-status states and a full order summary covering items, delivery details and QR payment. Customers can reconstruct exactly what they ordered and where it stands without contacting support.",
      images: [
        "/img/3c1e43570c9d.webp",
      ],
    },
    {
      step: "09",
      title: "Kiosk & Mobile Touchpoint Design",
      body: "Resolved the patient-facing experience into two additional touchpoints: a kiosk format with a vertical scan-and-browse layout anchored to a LINE QR handoff, and a mobile-optimised product catalogue with a persistent bottom action bar. Both surfaces were designed for low-friction discovery — customers who arrive at a clinic or pharmacy kiosk have already decided to buy; the interface just needs to get out of the way.",
      images: [
        "/img/c27496b5d985.webp",
      ],
    },
  ],
  "land-monitoring": [
    {
      step: "01",
      title: "Brand & Landing Page Design",
      body: "Designed the VLM marketing surface that has to explain a geospatial carbon product to buyers who are not GIS specialists. Satellite imagery and 3D data-layer illustrations were used to make an abstract remote-sensing capability legible before a prospect ever sees the platform.",
      images: [
        "/img/3dde92b39270.webp",
      ],
    },
    {
      step: "02",
      title: "Authentication & Account Flows",
      body: "Built the full account lifecycle — register, email verification, log in, forgot password and profile — including the error and expired-link states. For a platform holding regulated carbon data, a clear account boundary is part of the product's credibility, not just plumbing.",
      images: [
        "/img/d4d03caac3b5.webp",
      ],
    },
    {
      step: "03",
      title: "Analytical Dashboard Design",
      body: "Designed the per-plot analysis view where biomass, carbon sequestration, NDVI, precipitation, solar radiation, temperature and elevation each get a dedicated read. Every metric needed its own chart treatment — a bar comparison, a time series, or a colour-ramped map — rather than forcing one visual language onto different data shapes.",
      images: [
        "/img/bcee5b6ef5ad.webp",
      ],
    },
    {
      step: "04",
      title: "Geospatial Layer System",
      body: "Built the full map-layer feature set: switching between biomass, NDVI, temperature, precipitation, hot spot and elevation overlays on one continuous map. The design problem was keeping the base map readable while a colour-ramped raster sits on top of it.",
      images: [
        "/img/7065d8ee9d23.webp",
      ],
    },
    {
      step: "05",
      title: "Project & Plot Management",
      body: "Designed the multi-project workspace where users filter between farms, inspect plot boundaries against high-resolution imagery, and read the area breakdown table alongside the map. The linked mini-map keeps regional context while the main view is zoomed into a single parcel.",
      images: [
        "/img/06faf1b6ffab.webp",
        "/img/7c5dd9518c5e.webp",
      ],
    },
    {
      step: "06",
      title: "Hot Spot Detection & Zoom Behaviour",
      body: "Specified marker clustering across six zoom levels so hot spot density stays interpretable from national view down to a single district. Without a defined clustering rule, fire and anomaly markers collapse into an unreadable mass at country scale.",
      images: [
        "/img/7b76b00d5486.webp",
        "/img/fc66130a776a.webp",
      ],
    },
    {
      step: "07",
      title: "Provincial Reporting & Summary Views",
      body: "Designed the choropleth reporting layer with province-level breakdowns and proportional summaries. These are the screens that get exported into carbon reporting, so the table and chart had to stay legible outside the interface.",
      images: [
        "/img/bf22b7b56636.webp",
      ],
    },
  ],
};

function CaseStudy({ project, onBack, onHome }: {
  project: Project;
  onBack: Handler;
  onHome: Handler;
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const steps = (processSteps as Record<string, { step: string; title: string; body: string; images: string[] }[]>)[project.id] || [];

  return (
    <div style={{ maxWidth: 940, margin: "0 auto", padding: "96px 24px 120px" }}>
      {/* Floating back button */}
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          bottom: 32,
          left: 32,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 18px",
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 100,
          cursor: "pointer",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: "#9CA0A8",
          transition: "all 150ms",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(110,231,183,0.4)";
          e.currentTarget.style.color = "#6EE7B7";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#24262B";
          e.currentTarget.style.color = "#9CA0A8";
        }}
      >
        ← Back to all projects
      </button>

      {/* Header */}
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={onHome}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#5F6369",
            background: "none",
            border: "none",
            cursor: "pointer",
            marginBottom: 24,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: 0,
            transition: "color 150ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#9CA0A8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#5F6369")}
        >
          ← All projects overview
        </button>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          <span className="tag-chip">{project.role}</span>
          <span className="tag-chip">{project.platform}</span>
          <span className="tag-chip">{project.industry}</span>
        </div>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(34px, 5.5vw, 52px)",
            fontWeight: 800,
            color: "#F5F5F4",
            letterSpacing: "-0.03em",
            margin: "0 0 14px",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h1>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            color: "#6EE7B7",
            letterSpacing: "0.02em",
          }}
        >
          {project.client} · {project.timeline}
        </div>
      </div>

      {/* Hero Mockup */}
      <div
        style={{
          borderRadius: 14,
          overflow: "hidden",
          marginTop: 24,
          marginBottom: 48,
          aspectRatio: "16/8",
          background: "#1B1D21",
          border: "1px solid #24262B",
        }}
      >
        <LazyImage
          src={project.image}
          alt={project.imageAlt || project.title}
          frameStyle={{ width: "100%", height: "100%" }}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/900x560/1a1b1f/6EE7B7?text=Hero+Platform+Mockup";
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Tab Navigation */}
      {steps.length > 0 && (
        <div
          style={{
            display: "inline-flex",
            gap: 4,
            padding: 4,
            marginBottom: 40,
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid #24262B",
            backdropFilter: "blur(12px)",
          }}
        >
          {[
            { key: "overview", label: "Overview & Impact" },
            { key: "process", label: "Design Process & Workflow" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: 600,
                padding: "9px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 180ms",
                background: activeTab === t.key ? "#6EE7B7" : "transparent",
                color: activeTab === t.key ? "#0A0B0D" : "#9CA0A8",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {activeTab === "process" && steps.length > 0 ? (
        <section style={{ marginBottom: 64 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6EE7B7",
              marginBottom: 8,
            }}
          >
            Design Process & Workflow
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 800,
              color: "#F5F5F4",
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            From Field Research to Shipped System
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "#9CA0A8",
              lineHeight: 1.65,
              margin: "0 0 40px",
              maxWidth: 720,
            }}
          >
            The end-to-end process behind this platform — how ambiguous stakeholder requests were
            reframed into a validated problem, then architected into a scalable, tokenized system.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {steps.map((s) => (
              <div key={s.step}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#6EE7B7",
                      background: "rgba(110,231,183,0.1)",
                      border: "1px solid rgba(110,231,183,0.3)",
                      borderRadius: 6,
                      padding: "3px 9px",
                      flexShrink: 0,
                    }}
                  >
                    Step {s.step}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 19,
                      fontWeight: 700,
                      color: "#F5F5F4",
                      margin: 0,
                    }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    color: "#9CA0A8",
                    lineHeight: 1.7,
                    margin: "0 0 20px",
                    maxWidth: 760,
                  }}
                >
                  {s.body}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {s.images.map((src, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px solid #24262B",
                        background: "#1B1D21",
                      }}
                    >
                      <LazyImage
                        src={src}
                        alt={`${s.title} — visual ${i + 1}`}
                        frameStyle={{ minHeight: 180 }}
                        style={{ width: "100%", display: "block" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
      <>

      {/* Executive Summary */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6EE7B7",
            marginBottom: 16,
          }}
        >
          Executive Summary & Quantified Impact
        </div>
        <KpiScoreboard kpis={project.kpis} />
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "#9CA0A8",
            marginTop: 20,
            lineHeight: 1.65,
          }}
        >
          {project.hook}
        </p>
      </section>

      <div style={{ width: "100%", height: 1, background: "#24262B", marginBottom: 64 }} />

      {/* 01 Problem */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#5F6369",
            marginBottom: 8,
          }}
        >
          01 / Discovery & Bottlenecks
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 30,
            fontWeight: 700,
            color: "#F5F5F4",
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          Problem & Baseline Metrics
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "#9CA0A8",
            lineHeight: 1.7,
            marginBottom: 28,
          }}
        >
          {project.problem}
        </p>
        <BaselineStat stats={project.baselineStats} />
      </section>

      <div style={{ width: "100%", height: 1, background: "#24262B", marginBottom: 64 }} />

      {/* 02 Solutions */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#5F6369",
            marginBottom: 8,
          }}
        >
          02 / Architecture & UX System
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 30,
            fontWeight: 700,
            color: "#F5F5F4",
            marginBottom: 28,
            letterSpacing: "-0.02em",
          }}
        >
          Strategic UX Solutions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {project.solutions.map((s: any, i: number) => (
            <div
              key={i}
              style={{
                background: "#131417",
                border: "1px solid #24262B",
                borderRadius: 12,
                padding: "22px 26px",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: "#6EE7B7",
                  fontWeight: 600,
                  minWidth: 28,
                  paddingTop: 2,
                }}
              >
                0{i + 1}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#F5F5F4",
                    marginBottom: 6,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "#9CA0A8",
                    lineHeight: 1.6,
                  }}
                >
                  {s.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ width: "100%", height: 1, background: "#24262B", marginBottom: 64 }} />

      {/* 03 Impact */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#5F6369",
            marginBottom: 8,
          }}
        >
          03 / Verification & Evidence
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 30,
            fontWeight: 700,
            color: "#F5F5F4",
            marginBottom: 28,
            letterSpacing: "-0.02em",
          }}
        >
          Impact & Empirical Validation
        </h2>

        {/* Before/After table */}
        <div
          style={{
            border: "1px solid #24262B",
            borderRadius: 12,
            overflowX: "auto",
            marginBottom: 32,
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
            <thead>
              <tr style={{ background: "#1B1D21" }}>
                {["Key Workflow / Metric", "Before Redesign", "Post Launch", "Net Improvement"].map((h) => (
                  <th
                    key={h}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#5F6369",
                      padding: "14px 20px",
                      textAlign: "left",
                      fontWeight: 500,
                      borderBottom: "1px solid #24262B",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {project.impactTable.map((row: any, i: number) => (
                <tr
                  key={i}
                  className="before-after-row"
                  style={{
                    borderBottom: i < project.impactTable.length - 1 ? "1px solid #24262B" : "none",
                    transition: "background 150ms",
                  }}
                >
                  <td
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "#9CA0A8",
                      padding: "16px 20px",
                    }}
                  >
                    {row.metric}
                  </td>
                  <td
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      color: "#5F6369",
                      padding: "16px 20px",
                    }}
                  >
                    {row.before}
                  </td>
                  <td
                    className="after-val"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      color: "#F5F5F4",
                      padding: "16px 20px",
                      transition: "color 150ms",
                    }}
                  >
                    {row.after}
                  </td>
                  <td
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      color: "#6EE7B7",
                      padding: "16px 20px",
                      fontWeight: 700,
                    }}
                  >
                    {row.delta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stakeholder Quote card */}
        <div
          style={{
            background: "#131417",
            border: "1px solid #24262B",
            borderLeft: "4px solid #6EE7B7",
            borderRadius: "0 12px 12px 0",
            padding: "24px 28px",
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 17,
              color: "#F5F5F4",
              lineHeight: 1.6,
              margin: "0 0 12px",
              fontStyle: "italic",
            }}
          >
            "{project.quote}"
          </p>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#6EE7B7",
              letterSpacing: "0.04em",
            }}
          >
            — {project.quoteRole}
          </span>
        </div>
      </section>

      <div style={{ width: "100%", height: 1, background: "#24262B", marginBottom: 64 }} />

      {/* 04 Learnings */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#5F6369",
            marginBottom: 8,
          }}
        >
          04 / Retrospective & Seniority
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 30,
            fontWeight: 700,
            color: "#F5F5F4",
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          Senior Learnings & Scalability
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {project.learnings.map((l: any, i: number) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: "#6EE7B7",
                  marginTop: 2,
                  flexShrink: 0,
                }}
              >
                →
              </span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: "#9CA0A8",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      </>
      )}

      {/* Footer Nav inside Case Study */}
      <div
        style={{
          borderTop: "1px solid #24262B",
          paddingTop: 40,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <button
          onClick={onBack}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#5F6369",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "color 150ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F4")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#5F6369")}
        >
          ← Back to all projects
        </button>

      </div>
    </div>
  );
}

function HeroBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: "100vw",
        maxWidth: "100vw",
        transform: "translateX(-50%)",
        height: "820px",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes float-emerald {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(60px, -40px) scale(1.15); }
          66% { transform: translate(-30px, 45px) scale(0.95); }
        }
        @keyframes float-blue {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-50px, 60px) scale(1.1); }
          66% { transform: translate(40px, -30px) scale(0.9); }
        }
        @keyframes float-lime {
          0%, 100% { transform: translate(0px, 0px) scale(0.95); }
          50% { transform: translate(45px, 35px) scale(1.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-orb { animation: none !important; }
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)",
          opacity: 0.85,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          filter: "blur(90px)",
          opacity: 0.55,
          mixBlendMode: "screen",
        }}
      >
        <div
          className="aurora-orb"
          style={{
            position: "absolute",
            top: "15%",
            left: "25%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #10B981 0%, rgba(16, 185, 129, 0) 70%)",
            animation: "float-emerald 18s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        <div
          className="aurora-orb"
          style={{
            position: "absolute",
            top: "28%",
            right: "22%",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #3B82F6 0%, rgba(59, 130, 246, 0) 70%)",
            animation: "float-blue 22s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        <div
          className="aurora-orb"
          style={{
            position: "absolute",
            top: "10%",
            left: "48%",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #D4E157 0%, rgba(212, 225, 87, 0) 70%)",
            animation: "float-lime 14s ease-in-out infinite",
            willChange: "transform",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(110, 231, 183, 0.12), transparent 80%)`,
          transition: "background 100ms ease-out",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "220px",
          background: "linear-gradient(to bottom, transparent 0%, #0A0B0D 100%)",
        }}
      />
    </div>
  );
}

const TYPEWRITER_PHRASES = [
  "Hello Everyone! I'm Piyachon.",
  "UX/UI Designer Crafting Experiences.",
  "From Insight to Experience.",
];

function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPEWRITER_PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 45);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 25);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % TYPEWRITER_PHRASES.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return (
    <span>
      {text}
      <span className="typewriter-cursor" style={{ height: "0.9em" }} />
    </span>
  );
}

function HomePage({ onSelect, onProjects, onAbout, onContact, onSelectCv }: {
  onSelect: (id: string) => void;
  onProjects: Handler;
  onAbout: Handler;
  onContact: Handler;
  onSelectCv: Handler;
}) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 120px", position: "relative" }}>
      <HeroBackground />
      {/* Hero */}
      <section style={{ marginBottom: 96, position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Hero Left: Text & Pitch */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(110,231,183,0.06)",
                border: "1px solid rgba(110,231,183,0.2)",
                borderRadius: 100,
                padding: "6px 14px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#6EE7B7",
                letterSpacing: "0.04em",
                marginBottom: 24,
              }}
            >
              <span>● Available for work</span>
              <span style={{ color: "#5F6369" }}>/</span>
              <span style={{ color: "#F5F5F4" }}>Immediately Available</span>
            </div>

            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(58px, 7.5vw, 76px)",
                fontWeight: 800,
                color: "#F5F5F4",
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                margin: "0 0 24px",
              }}
            >
              Piyachon
              <br />
              <span style={{ color: "#6EE7B7" }}>Wanburi</span>
            </h1>

            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(22px, 2.6vw, 24px)",
                fontWeight: 700,
                color: "#F5F5F4",
                minHeight: "1.4em",
                marginBottom: 20,
              }}
            >
              <TypewriterText />
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(16px, 2.5vw, 18px)",
                color: "#9CA0A8",
                maxWidth: 580,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Senior UX/UI product designer who ships measurable business outcomes, not just static mockups.
              Specialized in high-complexity data products — Industrial IoT command centers, carbon GIS analytics, and clinical healthcare systems.
            </p>

            {/* Quick action buttons */}
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button
                onClick={onProjects}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  background: "#6EE7B7",
                  color: "#0A0B0D",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "transform 150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span>Explore All 29 Projects</span>
                <span>↓</span>
              </button>
              <button
                onClick={onAbout}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  background: "#131417",
                  color: "#F5F5F4",
                  border: "1px solid #24262B",
                  borderRadius: 8,
                  padding: "12px 20px",
                  cursor: "pointer",
                }}
              >
                Design Approach & Bio
              </button>
            </div>
          </div>

          {/* Hero Right: Profile Portrait Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InteractivePortrait
              onOpenAbout={onAbout}
              onSelectCv={onSelectCv}
              onOpenContact={onContact}
            />
          </div>
        </div>

        <KpiStrip />
      </section>

      {/* Featured Web Application Projects */}
      <div className="section-head" style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
          <span className="section-head-title">Featured Web Applications & Platforms</span>
          <div className="section-head-rule" />
        </div>
        <button
          className="section-head-action"
          onClick={onProjects}
          aria-label="View all 29 projects"
        >
          View all
          <span className="arrow" aria-hidden="true">→</span>
        </button>
      </div>

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: 28,
          marginBottom: 96,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={() => onSelect(p.id)} />
        ))}
      </div>

      {/* About Strip Banner */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1114 0%, #131417 100%)",
          border: "1px solid #24262B",
          borderRadius: 16,
          padding: "44px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 40,
          alignItems: "center",
          marginBottom: 96,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern — same as hero */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 90% 100% at 50% 50%, black 30%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 100% at 50% 50%, black 30%, transparent 90%)",
          }}
        />

        {/* Aurora orbs — same palette & motion as hero */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, pointerEvents: "none", filter: "blur(75px)", opacity: 0.4, mixBlendMode: "screen" }}
        >
          <div
            className="aurora-orb"
            style={{
              position: "absolute", top: "-30%", left: "-8%", width: 380, height: 380, borderRadius: "50%",
              background: "radial-gradient(circle, #10B981 0%, rgba(16,185,129,0) 70%)",
              animation: "float-emerald 20s ease-in-out infinite",
            }}
          />
          <div
            className="aurora-orb"
            style={{
              position: "absolute", bottom: "-35%", right: "-6%", width: 360, height: 360, borderRadius: "50%",
              background: "radial-gradient(circle, #3B82F6 0%, rgba(59,130,246,0) 70%)",
              animation: "float-blue 24s ease-in-out infinite",
            }}
          />
          <div
            className="aurora-orb"
            style={{
              position: "absolute", top: "10%", left: "50%", width: 240, height: 240, borderRadius: "50%",
              background: "radial-gradient(circle, #D4E157 0%, rgba(212,225,87,0) 70%)",
              animation: "float-lime 16s ease-in-out infinite",
            }}
          />
        </div>

        {/* Soft vignette to keep edges clean */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(10,11,13,0.15) 0%, transparent 20%, transparent 80%, rgba(10,11,13,0.25) 100%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6EE7B7",
              marginBottom: 12,
            }}
          >
            Executive Leadership & Systems Thinking
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 26,
              fontWeight: 700,
              color: "#F5F5F4",
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            Research-grounded, systems-minded, impact-measured.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "#9CA0A8",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            I lead end-to-end design — from field research with farmers and facility technicians to scalable tokenized design systems in Figma.
            My core differentiator is translating dense domain logic (GIS, real-time IoT hardware telemetry, automated ML) into intuitive
            dashboards that non-technical stakeholders can operate with confidence.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 280, position: "relative", zIndex: 1 }}>
          <button
            onClick={onSelectCv}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#0A0B0D",
              background: "#6EE7B7",
              padding: "12px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: "0 4px 14px rgba(110,231,183,0.3)",
              transition: "transform 150ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span>📄</span> Download & View Full CV
          </button>
          <button
            onClick={onContact}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#F5F5F4",
              background: "#24262B",
              border: "1px solid #383B42",
              padding: "12px 24px",
              borderRadius: 8,
              cursor: "pointer",
              textAlign: "center",
              transition: "all 150ms",
              boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(110,231,183,0.5)";
              e.currentTarget.style.color = "#6EE7B7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#383B42";
              e.currentTarget.style.color = "#F5F5F4";
            }}
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #24262B",
          paddingTop: 32,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#5F6369",
          }}
        >
          © 2026 Piyachon Wanburi · Senior UX/UI Specialist · Bangkok
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ color: "#5F6369", fontSize: 13 }}>094-498-9917</span>
          <span style={{ color: "#5F6369", fontSize: 13 }}>yimpiyachon@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}

function SectionDivider({ label, count }: { label: string; count: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, marginTop: 16 }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#5F6369",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: "#24262B" }} />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#6EE7B7",
          background: "#1B1D21",
          padding: "2px 8px",
          borderRadius: 4,
          border: "1px solid #24262B",
        }}
      >
        {count}
      </span>
    </div>
  );
}

function ProjectsPage({ onSelect, onBack, onSelectWebPreview, onContact }: {
  onSelect: (id: string) => void;
  onBack: Handler;
  onSelectWebPreview: (project: Project) => void;
  onContact: Handler;
}) {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tagColors = {
    Healthcare: "#6EE7B7",
    ClimateTech: "#6EE7B7",
    IoT: "#6EE7B7",
    SaaS: "#A5B4FC",
    FinTech: "#A5B4FC",
    PropTech: "#A5B4FC",
    "Real Estate": "#A5B4FC",
    Finance: "#A5B4FC",
    Mobile: "#FCD34D",
    CMS: "#FCD34D",
    Dashboard: "#FCD34D",
    Brand: "#F9A8D4",
    Lifestyle: "#F9A8D4",
    Cultural: "#F9A8D4",
    Craft: "#F9A8D4",
  };
  const getTagColor = (tag: string) => (tagColors as Record<string, string>)[tag] ?? "#9CA0A8";

  // Counts come from the project data rather than being written into the label,
  // so adding a project cannot leave the chips claiming a stale total.
  const pad = (n: number) => String(n).padStart(2, "0");
  const filters = [
    { key: "all", label: `All Works (${allProjects.apps.length + allProjects.web.length})` },
    { key: "apps", label: `Web Applications & Platforms (${pad(allProjects.apps.length)})` },
    { key: "web", label: `Web & Brand Design (${pad(allProjects.web.length)})` },
  ];

  const filteredApps = useMemo(() => {
    return allProjects.apps.filter((p) => {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  const filteredWeb = useMemo(() => {
    return allProjects.web.filter((p) => {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px 120px", position: "relative" }}>
      {/* Header glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "420px",
          background: "radial-gradient(circle, rgba(110,231,183,0.16) 0%, rgba(110,231,183,0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Floating back button */}
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          bottom: 32,
          left: 32,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 18px",
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 100,
          cursor: "pointer",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: "#9CA0A8",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          transition: "all 150ms",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(110,231,183,0.4)";
          e.currentTarget.style.color = "#6EE7B7";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#24262B";
          e.currentTarget.style.color = "#9CA0A8";
        }}
      >
        ← Back to Homepage
      </button>

      {/* Header */}
      <div style={{ marginBottom: 44, position: "relative", zIndex: 1 }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#5F6369",
            background: "none",
            border: "none",
            cursor: "pointer",
            marginBottom: 20,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: 0,
          }}
        >
          ← Home
        </button>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#5F6369",
            marginBottom: 12,
          }}
        >
          Curated Archive · 29 Total Works
        </div>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(34px, 5.5vw, 54px)",
            fontWeight: 800,
            color: "#F5F5F4",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            margin: "0 0 16px",
          }}
        >
          My Remarkable <span style={{ color: "#6EE7B7" }}>Projects</span>
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "#9CA0A8",
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 620,
          }}
        >
          29 delivered projects spanning enterprise data platforms, ClimateTech GIS command centers, Industrial IoT back-offices, and high-conversion web brand experiences.
        </p>

        {/* Search and Filters Bar */}
        <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  padding: "8px 16px",
                  borderRadius: 100,
                  border: "1px solid",
                  cursor: "pointer",
                  transition: "all 150ms",
                  background: filter === f.key ? "#6EE7B7" : "#131417",
                  borderColor: filter === f.key ? "#6EE7B7" : "#24262B",
                  color: filter === f.key ? "#0A0B0D" : "#9CA0A8",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search by title, domain, tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: "#131417",
              border: "1px solid #24262B",
              borderRadius: 8,
              padding: "8px 14px",
              color: "#F5F5F4",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              outline: "none",
              minWidth: 260,
            }}
          />
        </div>
      </div>

      {/* Web Applications & Platforms Section */}
      {(filter === "all" || filter === "apps") && (
        <section style={{ marginBottom: 72 }}>
          <SectionDivider label="Web Applications & Platforms" count={filteredApps.length} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: 24 }}>
            {filteredApps.map((p) => {
              const fullProject = projects.find((item) => item.id === p.id);
              return (
                <ProjectCard
                  key={p.id}
                  project={fullProject || p}
                  onClick={() => p.id && onSelect(p.id)}
                />
              );
            })}
          </div>
        </section>
      )}

      {/* Web & Brand Design Section */}
      {(filter === "all" || filter === "web") && (
        <section style={{ marginBottom: 72 }}>
          <SectionDivider label="Web & Brand Design Projects" count={filteredWeb.length} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {filteredWeb.map((p, i) => (
              <div
                key={p.id || i}
                onClick={() => onSelectWebPreview(p)}
                className="project-card"
                style={{
                  background: "#131417",
                  border: "1px solid #24262B",
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#1B1D21" }}>
                  <LazyImage
                    src={p.image}
                    alt={p.title}
                    frameStyle={{ position: "absolute", inset: 0 }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x380/1a1b1f/6EE7B7?text=Web+Design+Showcase";
                    }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 35%, rgba(10,11,13,0.85) 100%)" }} />
                  
                  {p.metric && (
                    <div style={{ position: "absolute", top: 12, left: 12 }}>
                      <div className="metric-badge">{p.metric}</div>
                    </div>
                  )}

                  <div
                    className="cta-reveal"
                    style={{
                      position: "absolute",
                      bottom: 10,
                      right: 12,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: "#6EE7B7",
                      fontWeight: 600,
                    }}
                  >
                    Inspect dossier →
                  </div>
                </div>

                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#F5F5F4", marginBottom: 3 }}>
                      {p.title}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369", textTransform: "uppercase" }}>
                      {p.category}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          padding: "2px 8px",
                          borderRadius: 100,
                          border: `1px solid ${getTagColor(t)}30`,
                          color: getTagColor(t),
                          background: `${getTagColor(t)}10`,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Footer */}
      <div style={{ borderTop: "1px solid #24262B", paddingTop: 36, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#5F6369" }}>
          {filteredApps.length + filteredWeb.length} of {allProjects.apps.length + allProjects.web.length} projects shown
        </span>
        <button
          onClick={onContact}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#F5F5F4",
            background: "#1B1D21",
            border: "1px solid #24262B",
            padding: "10px 18px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Contact Piyachon
        </button>
      </div>
    </div>
  );
}

function AboutPage({ onBack, onProjects, onContact, onSelectCv }: {
  onBack: Handler;
  onProjects: Handler;
  onContact: Handler;
  onSelectCv: Handler;
}) {
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "110px 24px 120px", position: "relative" }}>
      {/* Header glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "420px",
          background: "radial-gradient(circle, rgba(110,231,183,0.16) 0%, rgba(110,231,183,0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Floating back button */}
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          bottom: 32,
          left: 32,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 18px",
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 100,
          cursor: "pointer",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: "#9CA0A8",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(110,231,183,0.4)";
          e.currentTarget.style.color = "#6EE7B7";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#24262B";
          e.currentTarget.style.color = "#9CA0A8";
        }}
      >
        ← Back to Homepage
      </button>

      {/* Header section */}
      <div style={{ marginBottom: 48, position: "relative", zIndex: 1 }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#5F6369",
            background: "none",
            border: "none",
            cursor: "pointer",
            marginBottom: 20,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: 0,
          }}
        >
          ← Home
        </button>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6EE7B7",
            marginBottom: 12,
          }}
        >
          ABOUT ME · DESIGN PHILOSOPHY
        </div>

        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 800,
            color: "#F5F5F4",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            margin: "0 0 20px",
          }}
        >
          Design grounded in research, <br />
          <span style={{ color: "#6EE7B7" }}>proven by business metrics.</span>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "#9CA0A8",
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 720,
          }}
        >
          I am Piyachon Wanburi (Yim), a Senior Product & UX/UI Designer based in Bangkok with over 5 years of experience.
          I specialize in solving high-complexity interface challenges across ClimateTech GIS, Industrial IoT, Telehealth, and Scalable Enterprise Platforms.
        </p>
      </div>

      {/* Split Profile & Story */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 36,
          alignItems: "center",
          marginBottom: 64,
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 20,
          padding: "36px 36px",
        }}
      >
        <div style={{ position: "relative", maxWidth: 340, margin: "0 auto", width: "100%" }}>
          <img
            loading="lazy"
            decoding="async"
            src={PROFILE_IMG}
            alt="Piyachon Wanburi"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop&auto=format";
            }}
            style={{
              width: "100%",
              aspectRatio: "3/4",
              objectFit: "cover",
              objectPosition: "center 20%",
              borderRadius: 16,
              border: "1px solid rgba(110,231,183,0.3)",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 14,
              left: 14,
              right: 14,
              background: "rgba(10,11,13,0.85)",
              backdropFilter: "blur(8px)",
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#F5F5F4" }}>
              Piyachon Wanburi (Yim)
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#6EE7B7" }}>
              Bangkok · KMUTNB Architecture Alum
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: "#F5F5F4", margin: 0 }}>
            Translating complex domain data into effortless human actions
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.65, margin: 0 }}>
            Coming from a formal background in Architecture & Product Design at KMUTNB, I look at software interfaces like physical buildings:
            spatial hierarchy, foundational durability, and purposeful wayfinding. When designing mission-critical dashboards,
            operators and analysts don't need decorative elements—they need clarity, speed, and cognitive ease under pressure.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.65, margin: 0 }}>
            Over the past 5 years, I've designed across ARV (PTTEP Varuna), Beurdev, and Happy Three Creation, shipping GIS monitoring tools,
            remote hardware gateways, teleconsultation systems, and 40+ high-converting web applications.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
            <button
              onClick={onProjects}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#0A0B0D",
                background: "#6EE7B7",
                padding: "10px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
              }}
            >
              Explore 29 Projects →
            </button>
            <button
              onClick={onSelectCv}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#F5F5F4",
                background: "#1B1D21",
                border: "1px solid #24262B",
                padding: "10px 16px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              📄 View Full CV
            </button>
            <button
              onClick={onContact}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#6EE7B7",
                background: "transparent",
                border: "1px solid rgba(110,231,183,0.3)",
                padding: "10px 16px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Get In Touch ✉
            </button>
          </div>
        </div>
      </div>

      {/* 4-Step Methodology */}
      <section style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
          METHODOLOGY
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: "#F5F5F4", margin: "0 0 24px" }}>
          How I Lead End-to-End Product Design
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16 }}>
          {[
            {
              step: "01",
              phase: "Discover",
              accent: "#6EE7B7",
              accentRgb: "110,231,183",
              title: "Contextual Inquiry & Field Discovery",
              desc: "Direct field interviews with operators, farmers, and analysts. Uncovering the exact points of cognitive friction and operational bottlenecks before sketching.",
            },
            {
              step: "02",
              phase: "Structure",
              accent: "#3B82F6",
              accentRgb: "59,130,246",
              title: "Information Architecture & Data Mapping",
              desc: "Transforming dense schemas (GIS coordinates, IoT sensor packets, EHR medical notes) into prioritized user journeys with progressive disclosure.",
            },
            {
              step: "03",
              phase: "Systemize",
              accent: "#A78BFA",
              accentRgb: "167,139,250",
              title: "Design Systems & Token Architecture",
              desc: "Building Figma components linked with semantic tokens and engineering variables (BaseBlocksUI) for zero-debt developer handoffs.",
            },
            {
              step: "04",
              phase: "Validate",
              accent: "#FCD34D",
              accentRgb: "252,211,77",
              title: "Empirical Usability Testing",
              desc: "Moderated task-completion tests with measurable KPI benchmarks (turnaround times, error rate reductions, CSAT) ensuring real business outcomes.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                overflow: "hidden",
                background: "#131417",
                border: `1px solid rgba(${item.accentRgb},0.25)`,
                borderRadius: 14,
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 220,
              }}
            >
              {/* Bottom glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: -60,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 260,
                  height: 200,
                  background: `radial-gradient(circle, rgba(${item.accentRgb},0.28) 0%, transparent 70%)`,
                  filter: "blur(10px)",
                  pointerEvents: "none",
                }}
              />
              {/* Ghost step number */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: -18,
                  right: -6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 96,
                  fontWeight: 800,
                  color: `rgba(${item.accentRgb},0.08)`,
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {item.step}
              </span>

              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: item.accent,
                  }}
                >
                  {item.phase}
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 6, marginBottom: 2 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, color: item.accent, opacity: 0.7 }}>
                    {item.step}
                  </span>
                </div>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#F5F5F4", margin: "0 0 8px" }}>
                  {item.title}
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Highlights */}
      <section style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
          CAREER TRACK RECORD
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: "#F5F5F4", margin: "0 0 24px" }}>
          Where I've Made An Impact
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              company: "VARUNA CO., LTD. (ARV / PTTEP)",
              role: "Middle UX/UI Designer",
              period: "Oct 2024 – Present",
              desc: "Leading UX/UI for Smart Forest carbon GIS analytics, Smart Watcher security SOC platform, and Forest of Tomorrow ecosystem.",
            },
            {
              company: "BEURDEV CO., LTD.",
              role: "Lead UX/UI Designer",
              period: "Feb 2024 – Oct 2024",
              desc: "Delivered 40+ digital marketing web portals, high-conversion real estate showcases, and TH Health appointment systems.",
            },
            {
              company: "HAPPY THREE CREATION CO., LTD.",
              role: "Senior UX/UI Designer",
              period: "Aug 2023 – Feb 2024",
              desc: "Designed Area 22 IoT gateway management back office (400+ nodes) and Dr. Smoothlife clinical telemedicine workspace.",
            },
            {
              company: "VARUNA CO., LTD. (ARV / PTTEP)",
              role: "UX/UI Designer",
              period: "June 2022 – Aug 2023",
              desc: "Designed Kanna agricultural diagnostic mobile app (15,000+ farmers) and VLM land management administrative tools.",
            },
            {
              company: "ALL ABOUT YOU CO., LTD.",
              role: "UX/UI Designer",
              period: "March 2021 – June 2022",
              desc: "Designed clean beauty e-commerce storefront, streamlining checkout and reducing shopping cart abandonment by 44%.",
            },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                background: "#131417",
                border: "1px solid #24262B",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div style={{ maxWidth: 640 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#F5F5F4" }}>
                    {c.company}
                  </span>
                  <span className="tag-chip">{c.role}</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", margin: 0, lineHeight: 1.5 }}>
                  {c.desc}
                </p>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#6EE7B7" }}>
                {c.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: "#F5F5F4", margin: "0 0 24px" }}>
          Education
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Degree */}
          <div
            style={{
              background: "#131417",
              border: "1px solid #24262B",
              borderRadius: 12,
              padding: "20px 24px",
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 20, lineHeight: 1, marginTop: 2 }}>🎓</span>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#F5F5F4", marginBottom: 4 }}>
                Bachelor of Architecture and Design, Product Design
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#9CA0A8", letterSpacing: "0.02em" }}>
                KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK (KMUTNB), 2016 – 2020
              </div>
            </div>
          </div>

          {/* Certificates */}
          {[
            { title: "Intro to Web Accessibility", school: "Skooldio", year: "2026" },
            { title: "Information Architecture", school: "Skooldio", year: "2026" },
            { title: "Usability Design and Psychology for Digital Products", school: "Skooldio", year: "2025" },
            { title: "Complete UX/UI Design", school: "BorntoDev", year: "2020" },
            { title: "UX/UI with Adobe XD", school: "BorntoDev", year: "2020" },
          ].map((cert, i) => (
            <div
              key={i}
              style={{
                background: "#131417",
                border: "1px solid #24262B",
                borderRadius: 12,
                padding: "16px 24px",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <span style={{ fontSize: 18, lineHeight: 1, marginTop: 2 }}>📜</span>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#F5F5F4", marginBottom: 3 }}>
                  {cert.title}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#9CA0A8" }}>
                  {cert.school}, {cert.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Action Footer */}
      <div
        style={{
          borderTop: "1px solid #24262B",
          paddingTop: 36,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginLeft: "auto" }}>
          <button
            onClick={onProjects}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#0A0B0D",
              background: "#6EE7B7",
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            Explore 29 Projects ↓
          </button>
          <button
            onClick={onContact}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#F5F5F4",
              background: "#1B1D21",
              border: "1px solid #24262B",
              padding: "10px 18px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Contact Piyachon
          </button>
        </div>
      </div>
    </div>
  );
}

function StackPage({ onBack, onProjects, onContact }: { onBack: Handler; onProjects: Handler; onContact: Handler }) {
  // SVG logos as data URIs – no external dependency
  const LOGOS = {
    figma: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 57'%3E%3Cpath fill='%23F24E1E' d='M19 28.5a9.5 9.5 0 0 1 9.5-9.5h0a9.5 9.5 0 0 1 0 19h0A9.5 9.5 0 0 1 19 28.5z'/%3E%3Cpath fill='%23FF7262' d='M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z'/%3E%3Cpath fill='%231ABCFE' d='M19 0v19h9.5a9.5 9.5 0 0 0 0-19z'/%3E%3Cpath fill='%230ACF83' d='M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z'/%3E%3Cpath fill='%23A259FF' d='M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z'/%3E%3C/svg%3E",
    framer: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 21'%3E%3Cpath fill='%230055FF' d='M0 0h14v7H7zM0 7h7l7 7H0zM0 14h7v7z'/%3E%3C/svg%3E",
    adobe: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF0000' d='M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm6.23 0L24 22.624V1.376z'/%3E%3C/svg%3E",
    storybook: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF4785' d='M16.71.243l-.12 2.71a.18.18 0 0 0 .29.15l1.06-.8.9.7a.18.18 0 0 0 .28-.16l-.1-2.65L21 0l.03 22.5H3L3 .1zM9.8 11.31c0 .47 2.58.47 2.58 0V3.9H9.8z'/%3E%3C/svg%3E",
    openai: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2310A37F' d='M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.5 14.15A4.485 4.485 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387 2.019-1.168a.076.076 0 0 1 .071 0l4.318 2.485a4.5 4.5 0 0 1-.676 8.123v-5.674a.786.786 0 0 0-.399-.379zm2.011-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.316-2.481a4.5 4.5 0 0 1 6.194 4.461zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z'/%3E%3C/svg%3E",
    anthropic: "/img/816fa115c591.webp",
    gemini: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%238E75B2' d='M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.304 14.304 0 0 0 12 12 14.304 14.304 0 0 0-12 12'/%3E%3C/svg%3E",
    figmai: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 57'%3E%3Cpath fill='%238B5CF6' d='M19 28.5a9.5 9.5 0 0 1 9.5-9.5h0a9.5 9.5 0 0 1 0 19h0A9.5 9.5 0 0 1 19 28.5z'/%3E%3Cpath fill='%23A78BFA' d='M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z'/%3E%3Cpath fill='%23C4B5FD' d='M19 0v19h9.5a9.5 9.5 0 0 0 0-19z'/%3E%3Cpath fill='%237C3AED' d='M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z'/%3E%3Cpath fill='%236D28D9' d='M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z'/%3E%3C/svg%3E",
    maze: "/img/cd06d564bde0.webp",
    ga: "/img/58785d16e9af.webp",
    hotjar: "/img/1c4b0bc76c9a.webp",
    notion: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFFFFF' d='M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z'/%3E%3C/svg%3E",
    html: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23E34F26' d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z'/%3E%3C/svg%3E",
    tailwind: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2306B6D4' d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z'/%3E%3C/svg%3E",
    react: "/img/47d2262146f0.webp",
    github: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFFFFF' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E",
    jira: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230052CC' d='M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.004-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.762a1.005 1.005 0 0 0-1.001-1.005zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24.018 12.49V1.005A1.005 1.005 0 0 0 23.013 0z'/%3E%3C/svg%3E",
    miro: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%23FFD02F'/%3E%3Ctext x='12' y='17' text-anchor='middle' font-size='13' font-weight='900' fill='%23050038' font-family='Arial'%3EM%3C/text%3E%3C/svg%3E",
  };

  const stackCategories = [
    {
      category: "Product & UI/UX Design",
      desc: "Daily tools used for system wireframing, high-fidelity prototypes, and design system governance.",
      items: [
        { name: "Figma", level: "Expert / Daily", detail: "Variables, Token Studio, Auto-Layout 5.0, Dev Mode, Component Variants", logo: LOGOS.figma },
        { name: "Framer", level: "Advanced", detail: "Interactive prototypes, custom React overrides, responsive landing engines", logo: LOGOS.framer },
        { name: "Adobe XD / AI / PS", level: "Proficient", detail: "Vector illustration, asset export, image retouching, legacy conversion", logo: LOGOS.adobe },      ],
    },
    {
      category: "Generative AI & Accelerated Workflow",
      desc: "Leveraging state-of-the-art AI to automate research synthesis, copy variations, and code bridging.",
      items: [
        { name: "ChatGPT", level: "Daily Workflow", detail: "User interview scripts, heuristic checklists, copy refinement, persona simulation", logo: LOGOS.openai },
        { name: "Claude", level: "Daily Workflow", detail: "Multimodal analysis, rapid feature scoping, code bridging, UX critique", logo: LOGOS.anthropic },
        { name: "Google Gemini", level: "Daily Workflow", detail: "Multimodal analysis of telemetry screenshots, rapid feature scoping", logo: LOGOS.gemini },
        { name: "Figma AI Plugins", level: "Integrated", detail: "Rapid prototype scaffolding, dummy data generation, token consistency check", logo: LOGOS.figmai },
      ],
    },
    {
      category: "UX Research, Analytics & Testing",
      desc: "Data-informed toolchains for behavioral tracking, user journey analytics, and usability validation.",
      items: [
        { name: "Maze", level: "Usability Testing", detail: "Unmoderated remote usability testing, task completion rates, mission click maps", logo: LOGOS.maze },
        { name: "Google Analytics", level: "Tracking State Analysis", detail: "User event tracking, conversion funnel diagnostics, retention & session analysis", logo: LOGOS.ga },
        { name: "Hotjar", level: "Tracking Behavior", detail: "Visual heatmaps, scroll depth behavior, session recordings, real-time user feedback", logo: LOGOS.hotjar },
        { name: "Notion", level: "Research Docs", detail: "Research synthesis, UX documentation, affinity mapping, project wikis", logo: LOGOS.notion },
      ],
    },
    {
      category: "Frontend Hand-off & Collaboration",
      desc: "Speaking the engineer's language to guarantee pixel-accurate, performance-driven implementation.",
      items: [
        { name: "HTML5 / CSS3", level: "Basic", detail: "Responsive layout structure, basic flex/grid layouts, utility-first token alignment", logo: LOGOS.html },
        { name: "Tailwind CSS", level: "Basic", detail: "Utility-first CSS framework, rapid responsive layout, design token alignment", logo: LOGOS.tailwind },
        { name: "React", level: "Understanding", detail: "State management intuition, props architecture, modular component thinking", logo: LOGOS.react },
        { name: "Miro", level: "Collaborative", detail: "Collaborative whiteboarding, affinity mapping, user journey diagrams, and design workshop facilitation", logo: LOGOS.miro },
        { name: "Git & GitHub", level: "Basics", detail: "Branching awareness, asset synchronizations, PR design QA reviews", logo: LOGOS.github },
        { name: "Jira & Linear", level: "Collaborative", detail: "Ticket-based sprint planning, design task tracking, cross-team visibility", logo: LOGOS.jira },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "110px 24px 120px", position: "relative" }}>
      {/* Header glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "420px",
          background: "radial-gradient(circle, rgba(110,231,183,0.16) 0%, rgba(110,231,183,0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Floating back button */}
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          bottom: 32,
          left: 32,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 18px",
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 100,
          cursor: "pointer",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: "#9CA0A8",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(110,231,183,0.4)";
          e.currentTarget.style.color = "#6EE7B7";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#24262B";
          e.currentTarget.style.color = "#9CA0A8";
        }}
      >
        ← Back to Homepage
      </button>

      {/* Header */}
      <div style={{ marginBottom: 48, position: "relative", zIndex: 1 }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#5F6369",
            background: "none",
            border: "none",
            cursor: "pointer",
            marginBottom: 20,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: 0,
          }}
        >
          ← Home
        </button>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6EE7B7",
            marginBottom: 12,
          }}
        >
          ENGINEERING & DESIGN CAPABILITIES
        </div>

        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 800,
            color: "#F5F5F4",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            margin: "0 0 20px",
          }}
        >
          My Technical & <br />
          <span style={{ color: "#6EE7B7" }}>Design Stack</span>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "#9CA0A8",
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 680,
          }}
        >
          A comprehensive breakdown of tools, frameworks, token architectures, and domain skillsets
          I employ daily to engineer zero-friction interfaces for high-scale enterprise platforms.
        </p>
      </div>

      {/* Stack Categories */}
      <div style={{ display: "flex", flexDirection: "column", gap: 36, marginBottom: 72 }}>
        {stackCategories.map((cat, idx) => (
          <div
            key={idx}
            style={{
              background: "#131417",
              border: "1px solid #24262B",
              borderRadius: 16,
              padding: "28px 30px",
            }}
          >
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 700, color: "#F5F5F4", margin: "0 0 6px" }}>
                {cat.category}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", margin: 0 }}>
                {cat.desc}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
              {cat.items.map((it, itemIdx) => (
                <div
                  key={itemIdx}
                  style={{
                    background: "#17191E",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 10,
                    padding: "16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      {it.logo && (
                        <div style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src={it.logo}
                            alt={it.name}
                            style={{ width: 18, height: 18, objectFit: "contain" }}
                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                          />
                        </div>
                      )}
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#F5F5F4" }}>
                        {it.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#6EE7B7",
                        background: "rgba(110,231,183,0.1)",
                        padding: "2px 7px",
                        borderRadius: 4,
                        border: "1px solid rgba(110,231,183,0.25)",
                        whiteSpace: "nowrap",
                        marginLeft: 8,
                        flexShrink: 0,
                      }}
                    >
                      {it.level}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9CA0A8", lineHeight: 1.5, margin: 0 }}>
                    {it.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Footer */}
      <div
        style={{
          borderTop: "1px solid #24262B",
          paddingTop: 36,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", gap: 12, marginLeft: "auto" }}>
          <button
            onClick={onProjects}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#0A0B0D",
              background: "#6EE7B7",
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            Explore 29 Projects ↓
          </button>
          <button
            onClick={onContact}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#F5F5F4",
              background: "#1B1D21",
              border: "1px solid #24262B",
              padding: "10px 18px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Contact Piyachon
          </button>
        </div>
      </div>
    </div>
  );
}

function CvModal({ isOpen, onClose }: { isOpen: boolean; onClose: Handler }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };


  return (
    <div
      className="modal-overlay cv-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10, 11, 13, 0.88)",
        backdropFilter: "blur(14px)",
        zIndex: 110,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 16px",
      }}
    >
      <div
        className="cv-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 20,
          maxWidth: 820,
          width: "100%",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          boxShadow: "0 28px 70px rgba(0,0,0,0.85)",
          overflow: "hidden",
        }}
      >
        {/* Top Action Bar */}
        <div
          className="print-hide"
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #24262B",
            background: "#17191E",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>📄</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, color: "#F5F5F4" }}>
              Piyachon Wanburi (Yim) — Resume 2026
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={handlePrint}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#0A0B0D",
                background: "#6EE7B7",
                border: "none",
                borderRadius: 6,
                padding: "6px 14px",
                cursor: "pointer",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>🖨️</span> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              style={{
                background: "#1B1D21",
                border: "1px solid #24262B",
                borderRadius: 6,
                padding: "6px 12px",
                color: "#9CA0A8",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div
          id="resume-print-area"
          style={{
            padding: "32px 36px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            color: "#F5F5F4",
          }}
        >
          {/* Header Summary */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: "1px solid #24262B",
              paddingBottom: 24,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <img
                loading="lazy"
                decoding="async"
                src={PROFILE_IMG}
                alt="Piyachon Wanburi"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&fit=crop&auto=format";
                }}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 12,
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  border: "1px solid rgba(110,231,183,0.4)",
                }}
              />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#6EE7B7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                  Senior UX/UI Designer
                </div>
                <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 28, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.03em" }}>
                  PIYACHON WANBURI <span style={{ color: "#6EE7B7", fontWeight: 700 }}>(Yim)</span>
                </h1>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9CA0A8" }}>
                  Thailand, Bangkok Base · 5+ Years Experience
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6, textAlign: "right" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#F5F5F4" }}>
                📞 094-498-9917
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#6EE7B7" }}>
                ✉️ yimpiyachon@gmail.com
              </div>
              <a
                href="https://www.yimpiyachon.com/"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "#9CA0A8",
                  textDecoration: "underline",
                }}
              >
                www.yimpiyachon.com
              </a>
            </div>
          </div>

          {/* About Statement */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              About Me
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.65, margin: 0 }}>
              UX/UI Designer with 5+ years of experience designing SaaS platforms, Healthcare Systems, IoT Solutions, Real Estate Platforms, and Mobile Applications.
              Experienced in leading end-to-end product design processes from user research → information architecture → wireframing, prototyping → usability testing → to developer handoff.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
              Professional Experience
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                {
                  role: "Middle UX/UI DESIGNER",
                  company: "AI and Robotics Ventures Company Limited (VARUNA CO., LTD.)",
                  period: "Oct 2024 – Present",
                  points: [
                    "Led UX/UI design for Smart Watch ecosystem",
                    "Designed Smart Forest monitoring platform",
                    "Developed Forest of Tomorrow platform",
                    "Created user flows, wireframes, and high-fidelity interactive prototypes",
                    "Collaborated closely with PMs and engineering teams",
                  ],
                },
                {
                  role: "Lead UX/UI DESIGNER",
                  company: "BEURDEV CO., LTD.",
                  period: "Feb 2024 – Oct 2024",
                  points: [
                    "Led UX/UI design for TH Healthy healthcare platform",
                    "Designed real estate web platform and high-converting landing pages",
                    "Delivered 40+ marketing websites and campaign pages",
                    "Established unified design standards and design tokens across client projects",
                  ],
                },
                {
                  role: "Senior UX/UI DESIGNER",
                  company: "HAPPY THREE CREATION CO., LTD.",
                  period: "Aug 2023 – Feb 2024",
                  points: [
                    "Designed Area 22 IoT device management back-office platform",
                    "Developed UX/UI for Smooth Life web & mobile app platform",
                    "Created online learning and reservation booking platform",
                    "Produced interactive prototypes for executive stakeholder validation",
                  ],
                },
                {
                  role: "UX/UI DESIGNER",
                  company: "AI and Robotics Ventures Company Limited (VARUNA CO., LTD.)",
                  period: "June 2022 – Aug 2023",
                  points: [
                    "Designed Kanna mobile application and administrative back-office system",
                    "Developed VLM area management platform",
                    "Conducted user research and iterative usability testing sessions",
                    "Worked closely with developers during implementation and QA",
                  ],
                },
                {
                  role: "UX/UI DESIGNER",
                  company: "ALL ABOUT YOU CO., LTD.",
                  period: "March 2021 – June 2022",
                  points: [
                    "Designed e-commerce website experience and responsive brand touchpoints",
                    "Improved user journeys and checkout conversion flows",
                    "Created responsive UI design components across web platforms",
                  ],
                },
              ].map((exp, idx) => (
                <div key={idx} style={{ background: "#17191E", border: "1px solid #24262B", borderRadius: 10, padding: "16px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#F5F5F4" }}>
                      {exp.role} · <span style={{ color: "#6EE7B7" }}>{exp.company}</span>
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#5F6369" }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "#9CA0A8", fontSize: 13, lineHeight: 1.6 }}>
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            <div style={{ background: "#17191E", border: "1px solid #24262B", borderRadius: 10, padding: "16px 20px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#6EE7B7", textTransform: "uppercase", marginBottom: 8 }}>
                Core UX Skills
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.6, margin: 0 }}>
                UX Research · Information Architecture · User Flow · Wireframing · Prototyping · Design Systems · Usability Testing
              </p>
            </div>

            <div style={{ background: "#17191E", border: "1px solid #24262B", borderRadius: 10, padding: "16px 20px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#6EE7B7", textTransform: "uppercase", marginBottom: 8 }}>
                Design & AI Tools
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.6, margin: 0 }}>
                Figma · Framer · Adobe CC (XD, Illustrator, Photoshop) · ChatGPT · Claude · Gemini · Figma Make
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ background: "#17191E", border: "1px solid #24262B", borderRadius: 10, padding: "16px 20px" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
              Education & Certifications
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#F5F5F4", marginBottom: 4 }}>
              Bachelor of Architecture and Design, Product Design
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", marginBottom: 10 }}>
              King Mongkut's University of Technology North Bangkok (KMUTNB) · 2016–2020
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span className="tag-chip">Complete UX/UI with Adobe XD, BorntoDev (2020)</span>
              <span className="tag-chip">Usability Design & Psychology for Digital Products, Skooldio</span>
              <span className="tag-chip">Information Architecture, Skooldio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactModal({ isOpen, onClose, onShowToast }: { isOpen: boolean; onClose: Handler; onShowToast?: ShowToast }) {
  if (!isOpen) return null;

  const copy = (text: string, label: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    onShowToast?.(`Copied: ${label}`);
  };

  const contactItems = [
    { label: "EMAIL",    value: "yimpiyachon@gmail.com", copyText: "yimpiyachon@gmail.com", href: null },
    { label: "PHONE",    value: "094-498-9917",           copyText: "094-498-9917",           href: null },
    { label: "LINKEDIN", value: "piyachon-wanburi",       copyText: "https://www.linkedin.com/in/piyachon-wanburi-b207691ab/", href: "https://www.linkedin.com/in/piyachon-wanburi-b207691ab/" },
  ];

  const fieldStyle = {
    background: "#1B1D21",
    border: "1px solid #24262B",
    borderRadius: 8,
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  };

  const copyBtnStyle = {
    background: "rgba(110,231,183,0.1)",
    border: "1px solid rgba(110,231,183,0.3)",
    color: "#6EE7B7",
    borderRadius: 6,
    padding: "5px 12px",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    cursor: "pointer",
    flexShrink: 0,
    whiteSpace: "nowrap",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10, 11, 13, 0.85)",
        backdropFilter: "blur(12px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 20,
          maxWidth: 480,
          width: "100%",
          padding: "36px 36px 40px",
          position: "relative",
          boxShadow: "0 24px 60px rgba(0,0,0,0.8)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 24, right: 24,
            background: "#1B1D21", border: "1px solid #24262B",
            borderRadius: "50%", width: 36, height: 36,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#9CA0A8", cursor: "pointer", fontSize: 16,
          }}
        >✕</button>

        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 800, color: "#F5F5F4", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
          Get in Touch
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.55, margin: "0 0 24px" }}>
          Available for senior product design roles and complex enterprise systems.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {contactItems.map((item) => (
            <div key={item.label} style={fieldStyle}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#5F6369", textTransform: "uppercase", marginBottom: 3 }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#6EE7B7", textDecoration: "none", display: "block" }}>
                    {item.value} ↗
                  </a>
                ) : (
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#F5F5F4" }}>
                    {item.value}
                  </div>
                )}
              </div>
              <button onClick={() => copy(item.copyText, item.value)} style={copyBtnStyle}>Copy</button>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: 24, width: "100%", padding: "12px",
            background: "#6EE7B7", color: "#0A0B0D",
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14,
            borderRadius: 8, border: "none", cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}


function PreviewModal({ project, onClose }: { project: Project | null; onClose: Handler }) {
  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10, 11, 13, 0.88)",
        backdropFilter: "blur(14px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 20,
          maxWidth: 820,
          width: "100%",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          boxShadow: "0 28px 70px rgba(0,0,0,0.85)",
          overflow: "hidden",
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            maxHeight: 340,
            overflow: "hidden",
            background: "#1B1D21",
            flexShrink: 0,
          }}
        >
          <LazyImage
            src={project.image}
            alt={project.imageAlt || project.title}
            frameStyle={{ position: "absolute", inset: 0 }}
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/820x460/1a1b1f/6EE7B7?text=Case+Study+Preview";
            }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(10,11,13,0.2) 0%, rgba(10,11,13,0.85) 100%)",
            }}
          />

          {/* Badges on hero */}
          <div style={{ position: "absolute", top: 16, left: 18, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <div className="metric-badge">{project.metric || "Verified Design System"}</div>
            {project.metricBadge && (
              <div className="metric-badge metric-badge-neutral">{project.metricBadge}</div>
            )}
          </div>

          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(10,11,13,0.85)",
              border: "1px solid #24262B",
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5F5F4",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <div style={{ position: "absolute", bottom: 18, left: 24, right: 24 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#6EE7B7",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              {project.client || "Client System"} · {project.timeline || "Delivered"}
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 800,
                color: "#F5F5F4",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content Details */}
        <div
          style={{
            padding: "24px 28px 32px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Metadata chips */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <span className="tag-chip">{project.role || "Lead UX/UI Designer"}</span>
              <span className="tag-chip">{project.category}</span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {project.tags.map((t: string) => (
                <span key={t} className="stack-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "#F5F5F4",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {project.overview}
          </p>

          {/* Problem & Baseline Stats */}
          {project.problem && (
            <div style={{ background: "#17191E", border: "1px solid #24262B", borderRadius: 12, padding: "20px 22px" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#FCA5A5",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                01 · The UX Problem & Friction
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.6, margin: "0 0 16px" }}>
                {project.problem}
              </p>

              {project.baselineStats && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
                  {project.baselineStats.map((st: any, i: number) => (
                    <div key={i} style={{ background: "#131417", border: "1px solid #24262B", borderRadius: 8, padding: "12px 14px" }}>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 700, color: "#FCA5A5", marginBottom: 2 }}>
                        {st.value}
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#5F6369", lineHeight: 1.4 }}>
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Strategic Solutions */}
          {project.solutions && (
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#6EE7B7",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                02 · Strategic UX Solutions
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {project.solutions.map((sol: any, i: number) => (
                  <div
                    key={i}
                    style={{
                      background: "#17191E",
                      border: "1px solid #24262B",
                      borderRadius: 10,
                      padding: "14px 18px",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#6EE7B7", fontWeight: 700, paddingTop: 2 }}>
                      0{i + 1}
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#F5F5F4", marginBottom: 4 }}>
                        {sol.title}
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.5 }}>
                        {sol.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Validation Table */}
          {project.impactTable && (
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#6EE7B7",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                03 · Quantified Impact & Delta
              </div>
              <div style={{ border: "1px solid #24262B", borderRadius: 10, overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 440 }}>
                  <thead>
                    <tr style={{ background: "#1B1D21" }}>
                      {["Metric", "Before", "After Launch", "Net Δ"].map((h) => (
                        <th
                          key={h}
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#5F6369",
                            padding: "10px 14px",
                            textAlign: "left",
                            fontWeight: 500,
                            borderBottom: "1px solid #24262B",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.impactTable.map((r: any, i: number) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: i < project.impactTable.length - 1 ? "1px solid #24262B" : "none",
                          background: "#131417",
                        }}
                      >
                        <td style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9CA0A8", padding: "12px 14px" }}>
                          {r.metric}
                        </td>
                        <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#5F6369", padding: "12px 14px" }}>
                          {r.before}
                        </td>
                        <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#F5F5F4", padding: "12px 14px" }}>
                          {r.after}
                        </td>
                        <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#6EE7B7", fontWeight: 700, padding: "12px 14px" }}>
                          {r.delta}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Deliverables */}
          {project.deliverables && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", borderTop: "1px solid #24262B", paddingTop: 16 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#5F6369", textTransform: "uppercase" }}>
                Deliverables:
              </span>
              {project.deliverables.map((d: any) => (
                <span key={d} className="tag-chip">
                  ✓ {d}
                </span>
              ))}
            </div>
          )}

          {/* Action Row */}
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", borderTop: "1px solid #24262B", paddingTop: 20, flexWrap: "wrap", gap: 12 }}>
            <button
              onClick={onClose}
              style={{
                background: "#6EE7B7",
                color: "#0A0B0D",
                padding: "8px 20px",
                borderRadius: 8,
                border: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toast({ message, onClose }: { message: string | null; onClose: Handler }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 92,
        right: 24,
        zIndex: 200,
        background: "#1B1D21",
        border: "1px solid rgba(110,231,183,0.4)",
        borderRadius: 10,
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
        animation: "fadeInOverlay 200ms ease",
      }}
    >
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6EE7B7" }} />
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#F5F5F4", fontWeight: 500 }}>
        {message}
      </span>
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        right: 32,
        bottom: 32,
        zIndex: 90,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgba(19,20,23,0.9)",
        border: "1px solid #24262B",
        backdropFilter: "blur(12px)",
        color: "#9CA0A8",
        fontSize: 18,
        lineHeight: 1,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 220ms ease, transform 220ms ease, color 150ms, border-color 150ms",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#6EE7B7";
        e.currentTarget.style.borderColor = "rgba(110,231,183,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#9CA0A8";
        e.currentTarget.style.borderColor = "#24262B";
      }}
    >
      ↑
    </button>
  );
}

/**
 * URL routing.
 *
 * The app is a single page with no routing library: routes are parsed from
 * location.pathname and pushed with the History API. That gives every view a
 * real, shareable URL, makes the browser back button work, and lets analytics
 * tell the pages apart. Vercel is configured (vercel.json) to serve index.html
 * for these paths so a direct visit or refresh does not 404.
 */
type Route = { page: "home" | "projects" | "about" | "stack" | "case-study"; projectId: string | null };

const HOME_ROUTE: Route = { page: "home", projectId: null };
const STATIC_PAGES = ["projects", "about", "stack"] as const;

function parseRoute(pathname: string): Route {
  const caseMatch = pathname.match(/^\/case\/([^/]+)\/?$/);
  if (caseMatch) {
    const id = decodeURIComponent(caseMatch[1]);
    // An unknown id would render nothing, so treat it as a bad link and fall
    // back to the project index rather than a blank page.
    if (projects.some((p) => p.id === id)) return { page: "case-study", projectId: id };
    return { page: "projects", projectId: null };
  }

  const segment = pathname.replace(/^\/+|\/+$/g, "");
  const staticPage = STATIC_PAGES.find((name) => name === segment);
  return staticPage ? { page: staticPage, projectId: null } : HOME_ROUTE;
}

function routeToPath(route: Route): string {
  if (route.page === "case-study" && route.projectId) return `/case/${route.projectId}`;
  return route.page === "home" ? "/" : `/${route.page}`;
}

const PAGE_TITLES: Record<Route["page"], string> = {
  home: "Piyachon Wanburi — Senior UX/UI Designer",
  projects: "All Projects — Piyachon Wanburi",
  about: "About — Piyachon Wanburi",
  stack: "Stack — Piyachon Wanburi",
  "case-study": "Case Study — Piyachon Wanburi",
};

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.pathname));
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { page, projectId: activeProject } = route;

  const selectedCaseStudy = useMemo(() => {
    return projects.find((p) => p.id === activeProject);
  }, [activeProject]);

  const navigate = useCallback((next: Route) => {
    const path = routeToPath(next);
    if (path !== window.location.pathname) window.history.pushState(null, "", path);
    setRoute(next);
  }, []);

  const goTo = useCallback(
    (name: Exclude<Route["page"], "case-study">) => () => navigate({ page: name, projectId: null }),
    [navigate],
  );

  const openCaseStudy = useCallback(
    (id: string) => navigate({ page: "case-study", projectId: id }),
    [navigate],
  );

  // The back/forward buttons change the URL without going through navigate(),
  // so mirror the browser's history state back into React here.
  useEffect(() => {
    const syncFromUrl = () => setRoute(parseRoute(window.location.pathname));
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  // A normalised path keeps a stray "/Projects/" or "/case/unknown" from
  // sitting in the address bar after it has already been resolved to a view.
  useEffect(() => {
    const canonical = routeToPath(route);
    if (window.location.pathname !== canonical) {
      window.history.replaceState(null, "", canonical);
    }
    document.title = selectedCaseStudy
      ? `${selectedCaseStudy.title} — Piyachon Wanburi`
      : PAGE_TITLES[route.page];
  }, [route, selectedCaseStudy]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeProject, page]);

  // One key per view. Remounting on change replays the enter animation and the
  // top progress bar, which is what makes navigation read as a page change.
  const routeKey = activeProject ? `case-study:${activeProject}` : page;

  return (
    <div style={{ minHeight: "100vh", background: "#0A0B0D" }}>
      {/* Embedded Global Styles */}
      <style>{customStyles}</style>

      {/* Navigation Header */}
      <Nav
        onHome={goTo("home")}
        onProjects={goTo("projects")}
        onAbout={goTo("about")}
        onStack={goTo("stack")}
        onContact={() => setContactModalOpen(true)}
        currentPage={page}
      />

      {/* Conditional View Rendering */}
      <div key={routeKey}>
        <div className="route-progress" aria-hidden="true" />
        <main className="page-enter">
      {selectedCaseStudy ? (
        <CaseStudy
          /* Keyed by project so switching case studies remounts with a fresh tab state. */
          key={selectedCaseStudy.id}
          project={selectedCaseStudy}
          onBack={goTo("projects")}
          onHome={goTo("home")}
        />
      ) : page === "projects" ? (
        <ProjectsPage
          onSelect={openCaseStudy}
          onBack={goTo("home")}
          onSelectWebPreview={(item) => setPreviewItem(item)}
          onContact={() => setContactModalOpen(true)}
        />
      ) : page === "about" ? (
        <AboutPage
          onBack={goTo("home")}
          onProjects={goTo("projects")}
          onContact={() => setContactModalOpen(true)}
          onSelectCv={() => setCvModalOpen(true)}
        />
      ) : page === "stack" ? (
        <StackPage
          onBack={goTo("home")}
          onProjects={goTo("projects")}
          onContact={() => setContactModalOpen(true)}
        />
      ) : (
        <HomePage
          onSelect={openCaseStudy}
          onProjects={goTo("projects")}
          onAbout={goTo("about")}
          onContact={() => setContactModalOpen(true)}
          onSelectCv={() => setCvModalOpen(true)}
        />
      )}
        </main>
      </div>

      {/* Interactive Overlays */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onShowToast={setToastMessage}
      />

      <PreviewModal project={previewItem} onClose={() => setPreviewItem(null)} />

      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Back to top */}
      <ScrollToTop />
    </div>
  );
}