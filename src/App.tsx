import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./styles/global.css";
import { PROFILE_IMG, STORY_IMGS } from "./data/profile";
import { projects } from "./data/projects";
import { allProjects } from "./data/allProjects";
import { webProjects } from "./data/webProjects";
import { processSteps } from "./data/processSteps";
import { career } from "./data/career";
import { imageSizes } from "./data/imageSizes";

/**
 * Portfolio content (projects, KPIs, case-study steps) is authored as plain data
 * in ./data/ and its per-project shape varies by project, so the
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

/** srcset offering every generated variant alongside the original. */
const srcSetFor = (src?: string) => {
  const size = src && imageSizes[src];
  if (!size || size[2].length === 0) return undefined;
  const variants = size[2].map((w) => `${src.replace(/\.(\w+)$/, `-${w}w.$1`)} ${w}w`);
  return [...variants, `${src} ${size[0]}w`].join(", ");
};

/**
 * A walkthrough board wider than about 2:1 is a workflow map rather than a
 * screenshot; squeezed to phone width it becomes an unreadable strip, so it is
 * presented in a horizontally scrollable frame instead.
 */
const isWideShot = (src: string) => {
  const size = imageSizes[src];
  return !!size && size[0] / size[1] > 2.2;
};

/**
 * Frame styling for one walkthrough board.
 *
 * aspect-ratio reserves the box before the file arrives, so nothing below it
 * moves. The ratio is also published as a custom property: on wide screens the
 * stylesheet uses it to cap a portrait board's height, which otherwise reaches
 * 2,700px for a stacked mobile flow rendered across the content column.
 */
const shotFrameStyle = (src: string): React.CSSProperties => {
  const size = imageSizes[src];
  if (!size) return {};
  return {
    aspectRatio: `${size[0]} / ${size[1]}`,
    ["--shot-ratio" as string]: String(size[0] / size[1]),
  };
};

const highFetchPriority = { fetchpriority: "high" } as unknown as React.ImgHTMLAttributes<HTMLImageElement>;


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
                {...highFetchPriority}
                decoding="async"
                width={800}
                height={1066}
                src={PROFILE_IMG}
                srcSet={srcSetFor(PROFILE_IMG)}
                // The portrait is a fixed 344px at every viewport.
                sizes="344px"
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
                    fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
                    fontSize: 11,
                    color: "#6EE7B7",
                    fontWeight: 600,
                  }}
                >
                  Active in Bangkok
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
                  fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                      fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                      fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
                      fontSize: 12,
                      color: "#6EE7B7",
                      marginTop: 3,
                      marginBottom: 10,
                    }}
                  >
                    Senior UX/UI Designer
                  </div>
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["UX Research", "Product Design", "Usability Testing"].map((t) => (
                    <span
                      key={t}
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenAbout?.();
                      }}
                      className="tag-chip floating-interactive-chip"
                      style={{ fontSize: 10, background: "rgba(10,11,13,0.85)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BACK FACE: Designer DNA */}
            <div className="portrait-face portrait-back" style={{ pointerEvents: flipped ? "auto" : "none" }}>
              <div>
                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#6EE7B7", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    // DESIGNER DNA
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#828790" }}>Flip ↻</span>
                </div>

                {/* Headline */}
                <div style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 17, fontWeight: 700, color: "#F5F5F4", lineHeight: 1.25, marginBottom: 8 }}>
                  I Make Complex Things Feel Simple
                </div>

                {/* Bio */}
                <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.5, margin: "0 0 16px" }}>
                  5+ years designing digital experiences, from user research and information architecture to
                  wireframes, UI design, prototyping, and usability testing.
                </p>

                {/* Skill chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["UX Research", "UI Design", "Prototyping", "Design Systems"].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                    fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                    fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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

      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#F5F5F4", fontSize: 11, fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace" }}>
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
        fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
                background: "#1B1D21",
                border: "1px solid #24262B",
                padding: "2px 7px",
                borderRadius: 4,
                color: "#6EE7B7",
                fontWeight: 600,
              }}
            >
              Experience Designer
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
              fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
            <LineIcon name="mail" size={14} />
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
                fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
            <LineIcon name="mail" size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function KpiStrip() {
  const items = [
    { value: "5+ Years", label: "UX/UI Design Experience" },
    { value: "5 Core", label: "SaaS, IoT & Data Platforms" },
    { value: "29 Projects", label: "Web & Mobile Products" },
    { value: "End-to-End", label: "Research to Delivery" },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(190px, 100%), 1fr))",
        gap: 16,
        marginTop: 48,
        position: "relative",
        zIndex: 1,
      }}
    >
      {items.map((item, i) => (
        <div key={i} className="kpi-card">
          <span
            className="kpi-value"
            style={{
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
              fontWeight: 700,
              color: "#F5F5F4",
              letterSpacing: "-0.02em",
            }}
          >
            {item.value}
          </span>
          <span
            style={{
              fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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

function LazyImage({
  src,
  alt,
  frameStyle,
  style,
  onError,
  eager = false,
  // Measured, not guessed: the card is never the full viewport. At the 412px
  // profile Lighthouse emulates it renders 362px wide, so "100vw" was asking
  // for a 721px source and pulling the 800w file when 640w covers it.
  sizes = "(max-width: 700px) calc(100vw - 48px), (max-width: 940px) 720px, (max-width: 1200px) 520px, 380px",
}: {
  src?: string;
  alt?: string;
  frameStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  eager?: boolean;
  /** CSS width this image is rendered at, so the browser can pick a source. */
  sizes?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  // Intrinsic size lets the browser reserve the box before the bytes land,
  // which is what keeps this image from shifting the page as it loads.
  const [width, height] = (src && imageSizes[src]) || [];

  return (
    <div className={`img-frame${loaded ? " is-loaded" : ""}`} style={frameStyle}>
      <img
        width={width}
        height={height}
        // A cached image can finish before React attaches onLoad, so the ref
        // settles those cases instead of leaving the shimmer running forever.
        ref={(el) => {
          if (el?.complete) setLoaded(true);
        }}
        src={src}
        srcSet={srcSetFor(src)}
        sizes={sizes}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(eager ? highFetchPriority : {})}
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
        {/* Badges — the top pair share one row rather than being anchored to
            opposite corners independently. Anchored separately they had no way
            to know about each other, so a card with two long labels (Dr.
            Smoothlife) overlapped them by 6px at 11px type and 33px at 12px.
            marginLeft:auto keeps the second one right-aligned whether it sits
            beside the first or wraps below it. */}
        {project.badges && (project.badges[0] || project.badges[1]) && (
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              right: 14,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              // 6, not 8: three of the pairs needed 335px of a 334px row at
              // 412px and wrapped over a single pixel. Two back gets all of
              // them onto one line without the labels having to shrink again.
              gap: 6,
            }}
          >
            {project.badges[0] && <div className="metric-badge">{project.badges[0].label}</div>}
            {project.badges[1] && (
              <div className="metric-badge metric-badge-neutral" style={{ marginLeft: "auto" }}>
                {project.badges[1].label}
              </div>
            )}
          </div>
        )}
        {/* No third badge down here: it sat bottom-right, which is the same
            strip the hover CTA occupies, and on the narrower cards the two
            overlapped by up to 20px. The cover already carries two metrics and
            the rest are in the card body, so the badge was the one to drop. */}
        {/* Hover CTA */}
        <div
          className="cta-reveal"
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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
              fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
              fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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
          <span style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 12, color: "#6EE7B7" }}>
            {project.client}
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#828790" }}>
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
        gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
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
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
              fontSize: 12,
              color: "#828790",
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
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: 12 }}>
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
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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


/**
 * Fullscreen viewer for one walkthrough board.
 *
 * The boards are Figma exports running up to 3.9:1, so on a phone a whole board
 * only fits the content column at a size nobody can read. Hiding the remainder
 * behind a horizontal scroll made the reader believe the image was cut off, so
 * every board is now shown complete and the detail lives here on demand: the
 * viewer opens fitted to the screen and one tap switches to actual pixels,
 * panning in both directions.
 */
function ShotLightbox({ shot, onClose }: { shot: { src: string; alt: string } | null; onClose: Handler }) {
  const [actualSize, setActualSize] = useState(false);

  useEffect(() => {
    if (!shot) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // The page behind must not scroll away under the viewer on touch.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [shot, onClose]);

  if (!shot) return null;

  const naturalWidth = imageSizes[shot.src]?.[0];

  return (
    <div
      className="shot-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        background: "rgba(10, 11, 13, 0.95)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "14px 16px",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 12,
            color: "#9CA0A8",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {shot.alt}
        </span>
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <button
            type="button"
            className="shot-lightbox-btn"
            onClick={(e) => {
              e.stopPropagation();
              setActualSize((v) => !v);
            }}
            aria-label={actualSize ? "Fit image to screen" : "View image at actual size"}
          >
            {actualSize ? "Fit" : "Zoom in"}
          </button>
          <button type="button" className="shot-lightbox-btn" onClick={onClose} aria-label="Close image viewer">
            ✕
          </button>
        </div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          flex: 1,
          minHeight: 0,
          overflow: actualSize ? "auto" : "hidden",
          display: "flex",
          alignItems: actualSize ? "flex-start" : "center",
          justifyContent: actualSize ? "flex-start" : "center",
          padding: actualSize ? 0 : "0 12px 16px",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* The full file, never the narrow variant: this view exists to show detail. */}
        <img
          src={shot.src}
          alt={shot.alt}
          onClick={() => setActualSize((v) => !v)}
          style={
            actualSize
              ? { width: naturalWidth, maxWidth: "none", height: "auto", display: "block", cursor: "zoom-out" }
              : {
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: 8,
                  cursor: "zoom-in",
                }
          }
        />
      </div>
    </div>
  );
}

function CaseStudy({ project, onBack, onHome }: {
  project: Project;
  onBack: Handler;
  onHome: Handler;
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const [zoomedShot, setZoomedShot] = useState<{ src: string; alt: string } | null>(null);
  const steps = processSteps[project.id] ?? [];
  // Both panels are rendered so the prerendered HTML carries the walkthrough
  // too; the inactive one is hidden rather than unmounted, which keeps its
  // text in the markup for crawlers while its lazy images stay unfetched.
  const showProcess = activeTab === "process" && steps.length > 0;

  // Web & brand entries are written up progressively, so a case study may not
  // carry every section yet. Reading through these defaults lets a partial
  // project render the parts it has instead of crashing on a missing array.
  const kpis = project.kpis ?? [];
  const baselineStats = project.baselineStats ?? [];
  const solutions = project.solutions ?? [];
  const impactTable = project.impactTable ?? [];
  const learnings = project.learnings ?? [];

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
          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 13,
            color: "#828790",
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
          onMouseLeave={(e) => (e.currentTarget.style.color = "#828790")}
        >
          ← All projects overview
        </button>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {[project.role, project.platform, project.industry]
            .filter(Boolean)
            .map((label: string) => (
              <span key={label} className="tag-chip">
                {label}
              </span>
            ))}
        </div>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
          // Above the fold and the largest thing on a case page, so it is this
          // page's Largest Contentful Paint element. Left lazy it was fetched at
          // low priority after layout and landed at 3.6 s; eager lets the preload
          // scanner pull it straight out of the prerendered markup.
          eager
          sizes="(max-width: 940px) calc(100vw - 50px), 890px"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/900x560/1a1b1f/6EE7B7?text=Hero+Platform+Mockup";
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Tab Navigation */}
      {steps.length > 0 && (
        <div
          className="case-tabs"
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
                fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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

      {steps.length > 0 && (
        <section hidden={!showProcess} style={{ marginBottom: 64, ...(showProcess ? null : { display: "none" }) }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
              fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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
                      fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                      fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                    fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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
                  {s.images.map((src, i) => {
                    const shotAlt = `${s.title} — visual ${i + 1}`;
                    return (
                      <div
                        key={i}
                        className={`process-shot${isWideShot(src) ? " is-wide" : ""}`}
                      >
                        <LazyImage
                          src={src}
                          alt={shotAlt}
                          frameStyle={shotFrameStyle(src)}
                          sizes="(max-width: 940px) calc(100vw - 50px), 890px"
                          style={{ width: "100%", display: "block" }}
                        />
                        {/* Covers the board so a tap anywhere opens it, and carries
                            the only visible affordance that enlarging is possible. */}
                        <button
                          type="button"
                          className="process-shot-open"
                          onClick={() => setZoomedShot({ src, alt: shotAlt })}
                          aria-label={`Enlarge ${shotAlt}`}
                        >
                          <span className="process-shot-pill" aria-hidden="true">
                            {isWideShot(src) ? "⤢ Wide board — tap to read" : "⤢ Enlarge"}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      <div hidden={showProcess} style={showProcess ? { display: "none" } : undefined}>

      {(kpis.length > 0 || project.hook) && (
        <>
{/* Executive Summary */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6EE7B7",
            marginBottom: 16,
          }}
        >
          Executive Summary & Impact
        </div>
        <KpiScoreboard kpis={kpis} />
        <p
          style={{
            fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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
        </>
      )}

      {project.problem && (
        <>
{/* 01 Problem */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#828790",
            marginBottom: 8,
          }}
        >
          01 / Discovery & Bottlenecks
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
            fontFamily: "'Inter', 'Inter Fallback', sans-serif",
            fontSize: 16,
            color: "#9CA0A8",
            lineHeight: 1.7,
            marginBottom: 28,
          }}
        >
          {project.problem}
        </p>
        <BaselineStat stats={baselineStats} />
      </section>

      <div style={{ width: "100%", height: 1, background: "#24262B", marginBottom: 64 }} />
        </>
      )}

      {solutions.length > 0 && (
        <>
{/* 02 Solutions */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#828790",
            marginBottom: 8,
          }}
        >
          02 / Architecture & UX System
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
          {solutions.map((s: any, i: number) => (
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
                  fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                    fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                    fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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
        </>
      )}

      {impactTable.length > 0 && (
        <>
{/* 03 Impact */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#828790",
            marginBottom: 8,
          }}
        >
          03 / Verification & Evidence
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                      fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#828790",
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
              {impactTable.map((row: any, i: number) => (
                <tr
                  key={i}
                  className="before-after-row"
                  style={{
                    borderBottom: i < impactTable.length - 1 ? "1px solid #24262B" : "none",
                    transition: "background 150ms",
                  }}
                >
                  <td
                    style={{
                      fontFamily: "'Inter', 'Inter Fallback', sans-serif",
                      fontSize: 14,
                      color: "#9CA0A8",
                      padding: "16px 20px",
                    }}
                  >
                    {row.metric}
                  </td>
                  <td
                    style={{
                      fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
                      fontSize: 14,
                      color: "#828790",
                      padding: "16px 20px",
                    }}
                  >
                    {row.before}
                  </td>
                  <td
                    className="after-val"
                    style={{
                      fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                      fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
        {project.quote && (
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
              fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
              fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
              fontSize: 12,
              color: "#6EE7B7",
              letterSpacing: "0.04em",
            }}
          >
            — {project.quoteRole}
          </span>
          </div>
        )}
      </section>

      <div style={{ width: "100%", height: 1, background: "#24262B", marginBottom: 64 }} />
        </>
      )}

      {learnings.length > 0 && (
        <>
{/* 04 Learnings */}
      <section style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#828790",
            marginBottom: 8,
          }}
        >
          04 / Retrospective & Seniority
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
          {learnings.map((l: any, i: number) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                  fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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

      </div>

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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 13,
            color: "#828790",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "color 150ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F4")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#828790")}
        >
          ← Back to all projects
        </button>

      </div>

      <ShotLightbox
        key={zoomedShot?.src ?? "none"}
        shot={zoomedShot}
        onClose={() => setZoomedShot(null)}
      />
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
        // Up past the section's own start, so the field reaches the page top
        // and passes under the nav rather than leaving a dark band below it.
        top: "calc(var(--page-pad-top, 0px) * -1)",
        left: "50%",
        width: "100vw",
        maxWidth: "100vw",
        transform: "translateX(-50%)",
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <style>{`
        /* Translate only, and each orb on its own layer.
           These are 500px+ elements under filter: blur(90px). Scaling one forces
           the blur to be re-rasterised every frame, which on a throttled CPU was
           the bulk of the main-thread work holding up first paint. Moving a
           layer that is already rasterised costs the compositor almost nothing,
           and at this blur radius the drift reads the same as the pulse did. */
        .aurora-orb { will-change: transform; }
        @keyframes float-emerald {
          0%, 100% { transform: translate3d(0px, 0px, 0); }
          33% { transform: translate3d(60px, -40px, 0); }
          66% { transform: translate3d(-30px, 45px, 0); }
        }
        @keyframes float-blue {
          0%, 100% { transform: translate3d(0px, 0px, 0); }
          33% { transform: translate3d(-50px, 60px, 0); }
          66% { transform: translate3d(40px, -30px, 0); }
        }
        @keyframes float-lime {
          0%, 100% { transform: translate3d(0px, 0px, 0); }
          50% { transform: translate3d(45px, 35px, 0); }
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
          // Reaches past the KPI row so the cards have grid to refract.
          maskImage: "radial-gradient(ellipse 70% 560px at 50% 300px, black 18%, transparent 88%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 560px at 50% 300px, black 18%, transparent 88%)",
          opacity: 0.85,
        }}
      />

      {/* The orbs are 480px circles placed by percentage, so on a narrow phone
          they reach well past the viewport and widen the page. Nothing above
          them clipped, so the wrapper does. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          filter: "blur(90px)",
          opacity: 0.55,
          mixBlendMode: "screen",
        }}
      >
        <div
          className="aurora-orb"
          style={{
            position: "absolute",
            top: "123px",
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
            top: "230px",
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
            top: "82px",
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

// Longest phrase first. The hero heading is the page's Largest Contentful Paint
// element, and a later, longer phrase typing in registers as a new, larger paint
// — which pushed LCP out to wherever the animation happened to be. Leading with
// the longest phrase means every later one fits inside a box already painted.
const TYPEWRITER_PHRASES = [
  "UX/UI Designer Crafting Experiences.",
  "From Insight to Experience.",
  "Hello Everyone! I'm Piyachon.",
];

function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  // Starts on the finished first phrase instead of typing up from nothing. This
  // is the hero's largest text, so growing it a character at a time meant
  // Largest Contentful Paint was not reached until the typing finished —
  // Lighthouse measured 4.2 s for text a reader could already see at 1.7 s. The
  // loop is unchanged from the first delete onward.
  const [text, setText] = useState(TYPEWRITER_PHRASES[0]);
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

/**
 * The design thinking model, played out as the section scrolls past: each of
 * the three phases gets the stage to itself, then the last frame assembles
 * them into the double diamond they belong to.
 *
 * Colours are the ones the About page's methodology cards already use, so a
 * visitor who reads both sees one palette rather than two: Discover keeps its
 * own mint, Design takes the accent from Systemize (creation, ideas) and
 * Deliver takes Validate's (testing, shipped reality).
 */
const DT_ICONS = {
  // Every icon is drawn to fill roughly 2-22 of the 24 box. Left at their
  // natural extents they inked about two thirds of it, so a 92px icon read as
  // a 60px one and the row looked underweight next to the headline.

  // Empathy: a person, and the thing you are actually there for.
  empathy: (
    <>
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21c0-4 3.1-6.4 7-6.4 1.2 0 2.4.2 3.4.7" />
      <path d="M18.2 14.3c1.1-1.2 2.8-.7 2.8.9 0 1.5-1.8 3.1-2.8 3.9-1-.8-2.8-2.4-2.8-3.9 0-1.6 1.7-2.1 2.8-.9z" />
    </>
  ),
  // Define: the point all that understanding narrows to.
  define: (
    <>
      <circle cx="10.5" cy="13.5" r="8" />
      <circle cx="10.5" cy="13.5" r="4.4" />
      <circle cx="10.5" cy="13.5" r="1.1" />
      <path d="M10.5 13.5 21 3" />
      <path d="M17 3h4v4" />
    </>
  ),
  // Ideate: the widest part of the second diamond.
  ideate: (
    <>
      <circle cx="12" cy="10" r="5.6" />
      <path d="M9.4 17.4h5.2M10.2 20.2h3.6" />
      <path d="M12 1.2v2.2M4.6 4.2l1.6 1.6M19.4 4.2l-1.6 1.6M2 11.2h2.2M19.8 11.2H22" />
    </>
  ),
  // Prototype: the idea, finally in a frame.
  prototype: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="2.5" />
      <path d="M2 8h20" />
      <rect x="5" y="11" width="7" height="7" rx="1" />
      <path d="M14.5 12h4.5M14.5 15h4.5M14.5 18h3" />
    </>
  ),
  // Test: the part that decides whether any of it was true.
  test: (
    <>
      <rect x="2.5" y="3" width="19" height="18" rx="2.5" />
      <path d="M8.5 3V1.8A1.2 1.2 0 0 1 9.7.6h4.6a1.2 1.2 0 0 1 1.2 1.2V3" />
      <path d="M6.5 9.8 8.4 11.7 11.8 8.3" />
      <path d="M14 10.2h4" />
      <path d="M6.5 16.3 8.4 18.2 11.8 14.8" />
      <path d="M14 16.7h4" />
    </>
  ),
};

const DT_PHASES = [
  {
    title: "Discover",
    line: "Start with understanding",
    accent: "#6EE7B7",
    shape: "hexagon" as const,
    steps: [
      { label: "Empathy", icon: DT_ICONS.empathy },
      { label: "Define", icon: DT_ICONS.define },
    ],
  },
  {
    title: "Design",
    line: "Turn insights into ideas",
    accent: "#A78BFA",
    shape: "triangle" as const,
    steps: [{ label: "Ideate", icon: DT_ICONS.ideate }],
  },
  {
    title: "Deliver",
    line: "Turn ideas into reality",
    accent: "#FCD34D",
    shape: "square" as const,
    steps: [
      { label: "Prototype", icon: DT_ICONS.prototype },
      { label: "Test", icon: DT_ICONS.test },
    ],
  },
];

function DtIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="dt-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* Stroke icons on the same 24 grid and the same weight as the ones in the
   design thinking model, so a button or a list row carries a drawing rather
   than a platform emoji: an emoji is a different shape, weight and colour on
   every device and never matches the rest of the page. */
const LINE_ICONS = {
  file: (
    <>
      <path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5z" />
      <path d="M14 2.5v5h5" />
      <path d="M8.5 13h7M8.5 17h7" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3.2 6.4 8.8 5.9 8.8-5.9" />
    </>
  ),
  cap: (
    <>
      <path d="M22 9 12 4.5 2 9l10 4.5z" />
      <path d="M6 11v4.4c0 1.4 2.7 2.4 6 2.4s6-1 6-2.4V11" />
    </>
  ),
  seal: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.6 8 21.5l4-2.2 4 2.2-1-7.9" />
    </>
  ),
};

function LineIcon({ name, size = 16 }: { name: keyof typeof LINE_ICONS; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {LINE_ICONS[name]}
    </svg>
  );
}

/**
 * Tells a visitor there is more below the fold.
 *
 * The hero ends on the KPI row and the next thing down is a sticky stage, so
 * without a cue the page looks like it stops there — the screen below the KPIs
 * is empty until you scroll into it.
 */
/* Drawn as SVG rather than as a bordered box: a clip-path cuts a border off
   with the rest of the box, so anything that is not a circle or a rectangle
   has no outline to speak of. non-scaling-stroke (set in CSS on the shape)
   keeps every one of them at a hairline however far the bank is scaled. */
const DT_ORBIT_SHAPES = {
  circle: <circle cx="50" cy="50" r="49" />,
  square: <rect x="1" y="1" width="98" height="98" rx="3" />,
  triangle: <polygon points="50,3 95,92 5,92" />,
  hexagon: <polygon points="50,2 92,26 92,74 50,98 8,74 8,26" />,
};

type DtShape = keyof typeof DT_ORBIT_SHAPES;

/**
 * A bank of overlapping outlines behind a frame's headline. The dark middle of
 * the stage was reading as a hole; the shapes give it structure at a weight
 * that stays behind the type, and they widen as the frame's window passes so
 * the backdrop is never the same twice. Each phase carries its own shape, so
 * the three of them are told apart by silhouette and not by colour alone.
 */
function DtOrbits({ shape }: { shape: DtShape }) {
  return (
    <span className={`dt-orbits dt-orbits-${shape}`} aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <svg className="dt-orbit" key={i} viewBox="0 0 100 100" style={{ ["--i" as string]: i }}>
          {DT_ORBIT_SHAPES[shape]}
        </svg>
      ))}
    </span>
  );
}

function ScrollCue() {
  return (
    <div className="scroll-cue" aria-hidden="true">
      <span className="scroll-cue-label">Scroll</span>
      <span className="scroll-cue-rail">
        <span className="scroll-cue-dot" />
      </span>
    </div>
  );
}

function DesignThinking() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A sequence that only makes sense once it has moved is no use to someone
    // who asked for less motion; they get every frame laid out at once, which
    // the stylesheet handles from the same media query.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      const p = travel <= 0 ? 1 : Math.min(1, Math.max(0, -r.top / travel));
      // Written straight to the node: routing this through React state would
      // re-render the whole section on every frame of every scroll.
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Each frame owns a window of the scroll. --from/--to fade it at the edges;
  // --span lets the stylesheet turn the section's global progress into a local
  // 0-to-1 for that window, which is what every entrance below is timed on.
  // 0.38 wide on a 0.27 step: the 0.11 of overlap is exactly how long a frame
  // takes to fade at the rate the stylesheet uses, so one hands over to the
  // next without a dark beat in between.
  //
  // The first frame opens at -0.12 rather than 0 so that it is already fully
  // opaque when the stage pins. Held at a partial opacity instead, its mint
  // eyebrow composited down to #316250 — 2.8:1 on the page background, which
  // axe reports as a contrast failure on page load. It still plays its
  // entrance: the layer is solid, the pieces inside it are what move.
  const WINDOW = 0.38;
  const win = (from: number) =>
    ({ "--from": from, "--to": from + WINDOW, "--span": 1 / WINDOW }) as React.CSSProperties;

  return (
    <section className="dt" ref={ref} aria-labelledby="dt-heading">
      <h2 id="dt-heading" className="dt-sr">
        How I work: the design thinking model
      </h2>

      <div className="dt-stage">
        {DT_PHASES.map((phase, i) => (
          <div
            className="dt-layer dt-phase"
            key={phase.title}
            style={{ ...win(i * 0.27 - 0.12), ["--accent" as string]: phase.accent }}
          >
            {/* A wash of the phase colour that swells behind the icons. It is
                the only thing on the frame that is not type, and it is what
                gives each phase its own temperature. */}
            <span className="dt-glow" aria-hidden="true" />
            <DtOrbits shape={phase.shape} />

            <p className="dt-eyebrow dt-rise" style={{ ["--delay" as string]: 0 }}>
              {String(i + 1).padStart(2, "0")} · {phase.title}
            </p>
            <p className="dt-line dt-rise" style={{ ["--delay" as string]: 0.06 }}>
              {phase.line}
            </p>
            <div className="dt-steps">
              {phase.steps.map((s, j) => (
                <React.Fragment key={s.label}>
                  {j > 0 && (
                    <span className="dt-join dt-rise" style={{ ["--delay" as string]: 0.16 }} aria-hidden="true">
                      <span className="dt-join-line" />
                    </span>
                  )}
                  <span className="dt-step dt-rise" style={{ ["--delay" as string]: 0.12 + j * 0.06 }}>
                    <span className="dt-ring">
                      <DtIcon>{s.icon}</DtIcon>
                    </span>
                    <span className="dt-step-label">{s.label}</span>
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}

        {/* The three of them, finally on one screen. */}
        <div className="dt-layer dt-all" style={{ ...win(0.69), ["--to" as string]: 2 }}>
          <DtOrbits shape="circle" />

          <p className="dt-all-title dt-rise" style={{ ["--delay" as string]: 0 }}>
            Design Thinking Model
          </p>

          <div className="dt-groups">
            {DT_PHASES.map((phase, i) => (
              <div
                className="dt-group dt-rise"
                key={phase.title}
                style={{ ["--accent" as string]: phase.accent, ["--delay" as string]: 0.1 + i * 0.07 }}
              >
                <div className="dt-group-icons">
                  {phase.steps.map((s) => (
                    <span className="dt-step" key={s.label}>
                      <span className="dt-ring">
                        <DtIcon>{s.icon}</DtIcon>
                      </span>
                      <span className="dt-step-label">{s.label}</span>
                    </span>
                  ))}
                </div>
                <span className="dt-group-bar" aria-hidden="true" />
                <p className="dt-group-title">{phase.title}</p>
                <p className="dt-group-line">{phase.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "120px 24px 120px",
        position: "relative",
        // Published so the hero background can reclaim this padding and run to
        // the top of the page instead of starting below it.
        ["--page-pad-top" as string]: "120px",
      }}
    >
      {/* Hero */}
      <section style={{ marginBottom: 96, position: "relative", zIndex: 1 }}>
        {/* Inside the section so its height tracks the hero grid *and* the KPI
            row: the cards frost what is painted behind them, so the field has
            to reach them. */}
        <HeroBackground />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
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
                fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
                fontSize: 12,
                color: "#6EE7B7",
                letterSpacing: "0.04em",
                marginBottom: 24,
              }}
            >
              <span>● Available for work</span>
              <span style={{ color: "#828790" }}>/</span>
              <span style={{ color: "#F5F5F4" }}>Ready to start</span>
            </div>

            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                fontFamily: "'Inter', 'Inter Fallback', sans-serif",
                fontSize: "clamp(16px, 2.5vw, 18px)",
                color: "#9CA0A8",
                maxWidth: 580,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Senior UX/UI Designer with 5+ years of experience designing digital products across SaaS, IoT, GIS,
              healthcare, and mobile. I&nbsp;like working on complex problems and turning them into experiences
              that feel simple and easy to use.
            </p>

            {/* Quick action buttons */}
            {/* One row at every width: the labels never wrap, and the type and
                the side padding give ground together as the screen narrows. */}
            <div className="hero-cta-row" style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap", alignItems: "stretch" }}>
              <button
                onClick={onProjects}
                className="hero-cta"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
                  fontWeight: 700,
                  background: "#6EE7B7",
                  color: "#0A0B0D",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                  transition: "transform 150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span>Explore my 29 projects</span>
                <span aria-hidden="true">↓</span>
              </button>
              <button
                onClick={onAbout}
                className="hero-cta"
                style={{
                  fontFamily: "'Inter', 'Inter Fallback', sans-serif",
                  fontWeight: 500,
                  background: "#131417",
                  color: "#F5F5F4",
                  border: "1px solid #24262B",
                  borderRadius: 8,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                About me <span aria-hidden="true">→</span>
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
        <ScrollCue />
      </section>

      <DesignThinking />

      {/* Featured Web Application Projects */}
      <div className="section-head" style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
          <h2 className="section-head-title">Featured Web Applications &amp; Platforms</h2>
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
          gridTemplateColumns: "repeat(auto-fill, minmax(min(360px, 100%), 1fr))",
          gap: 28,
          marginBottom: 96,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={() => onSelect(p.id)} />
        ))}
      </div>

      <ShotRails onSelect={onSelect} />

      {/* About Strip Banner */}
      <CareerMarquee />

      <CtaBanner onSelectCv={onSelectCv} />

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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 12,
            color: "#828790",
          }}
        >
          © 2026 Piyachon Wanburi · Senior UX/UI Specialist · Bangkok
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ color: "#828790", fontSize: 13 }}>094-498-9917</span>
          <span style={{ color: "#828790", fontSize: 13 }}>yimpiyachon@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}

/**
 * Closing call to action, sitting between the last content section and the
 * footer.
 *
 * The channels are one segmented strip rather than a scatter of links so the
 * row reads as a single control. Each cell is a real target: mail and phone
 * hand off to the device, LINE and LinkedIn open externally, and the resume
 * opens the same modal the rest of the page uses, so nothing here is a
 * decorative restatement of the contact modal.
 */
/**
 * The career record as an auto-scrolling rail of testimonial-style cards.
 *
 * The About page shows the same entries as a vertical list where the reader is
 * already committed to detail; here the point is to pass the whole record in
 * front of someone skimming the home page, so it moves on its own. The track
 * holds two copies of the list and travels exactly one copy's width, which is
 * what makes the loop seamless — the clone is hidden from assistive tech so the
 * record is not announced twice. Motion stops on hover and on keyboard focus,
 * and a reader who has asked for reduced motion gets a plain scrollable row.
 */
function CareerMarquee() {
  const card = (c: (typeof career)[number], i: number) => (
    <figure className="career-card" key={i}>
      <blockquote className="career-card-desc">{c.desc}</blockquote>
      <figcaption className="career-card-foot">
        <CompanyLogo src={c.logo} name={c.company} eager />
        <div style={{ minWidth: 0 }}>
          <span className="career-card-company">{c.company}</span>
          <span className="career-card-role">{c.role}</span>
          <span className="career-card-period">{c.period}</span>
        </div>
      </figcaption>
    </figure>
  );

  return (
    <section style={{ marginBottom: 96 }} aria-labelledby="career-heading">
      <div
        style={{
          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#828790",
          marginBottom: 12,
        }}
      >
        Career Track Record
      </div>
      <h2
        id="career-heading"
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
          fontSize: 26,
          fontWeight: 700,
          color: "#F5F5F4",
          margin: "0 0 28px",
          letterSpacing: "-0.02em",
        }}
      >
        Where I&rsquo;ve Made An Impact
      </h2>

      <div className="career-rail">
        <div className="career-track">
          {career.map(card)}
          <div className="career-clone" aria-hidden="true">
            {career.map(card)}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Every project's cover, framed as a browser window and drifting across two
 * rails. The homepage shows nine cards in full; this is how the other twenty
 * get seen without adding another screen of grid to scroll past.
 *
 * The address bar carries the project title rather than a domain: the data has
 * no URL field, and inventing one would put a hostname on screen that does not
 * exist.
 */
function ShotRails({ onSelect }: { onSelect: (id: string) => void }) {
  const all = useMemo(() => [...projects, ...webProjects], []);
  const rows = useMemo(() => {
    const half = Math.ceil(all.length / 2);
    return [all.slice(0, half), all.slice(half)];
  }, [all]);

  const card = (p: (typeof all)[number], key: string, cloned: boolean) => (
    <button
      key={key}
      type="button"
      className="shot-card"
      // The clone exists only to make the loop seamless; letting it take focus
      // would put every project in the tab order twice.
      tabIndex={cloned ? -1 : undefined}
      aria-hidden={cloned || undefined}
      onClick={() => onSelect(p.id)}
    >
      <span className="shot-chrome">
        <span className="shot-dots" aria-hidden="true">
          <span className="shot-dot" />
          <span className="shot-dot" />
          <span className="shot-dot" />
        </span>
        <span className="shot-url">{p.title}</span>
      </span>
      <img
        loading="lazy"
        decoding="async"
        src={p.image}
        srcSet={srcSetFor(p.image)}
        // Capped below the card's real width on purpose. A 3x phone asking for
        // its true 264px pulls the 800w tier, and 29 of those are 55 MB of
        // decoded bitmap held for a rail that is decoration — enough for iOS
        // to start evicting and re-decoding them, which is seen as covers
        // blanking out and the row stuttering. 213px keeps phones on the 640w
        // tier: 35 MB, and still 2.4x the pixels the box actually shows.
        sizes="(max-width: 700px) 213px, 306px"
        alt={`${p.title} — open the case study`}
      />
    </button>
  );

  return (
    <section style={{ marginBottom: 96 }} aria-labelledby="shots-heading">
      <div
        style={{
          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#828790",
          marginBottom: 12,
        }}
      >
        The Full Archive
      </div>
      <h2
        id="shots-heading"
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
          fontSize: 26,
          fontWeight: 700,
          color: "#F5F5F4",
          margin: "0 0 10px",
          letterSpacing: "-0.02em",
        }}
      >
        {all.length} projects, end to end.
      </h2>
      <p
        style={{
          fontFamily: "'Inter', 'Inter Fallback', sans-serif",
          fontSize: 15,
          color: "#9CA0A8",
          lineHeight: 1.6,
          margin: "0 0 28px",
          maxWidth: 620,
        }}
      >
        Enterprise platforms, GIS command centres and brand builds. Pick any
        cover to read how it was designed.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {rows.map((row, r) => (
          <div className="shot-rail" key={r}>
            <div className={r === 1 ? "shot-track shot-track-reverse" : "shot-track"}>
              {row.map((p) => card(p, p.id, false))}
              <span className="shot-clone">
                {row.map((p) => card(p, `${p.id}-clone`, true))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBanner({ onSelectCv }: { onSelectCv: Handler }) {
  const channels = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/piyachon-wanburi-b207691ab/",
      icon: (
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      ),
    },
    {
      label: "LINE",
      href: "https://line.me/ti/p/SHGZ_Lx9Jn",
      icon: (
        <path d="M24 10.31C24 4.94 18.62.57 12 .57S0 4.94 0 10.31c0 4.81 4.27 8.85 10.04 9.61.39.09.92.26 1.06.59.12.3.08.77.04 1.08l-.17 1.02c-.04.3-.24 1.19 1.05.65 1.29-.54 6.92-4.08 9.44-6.98C23.18 14.39 24 12.46 24 10.31zM7.7 13.51H5.32a.63.63 0 0 1-.63-.63V8.11a.63.63 0 0 1 1.26 0v4.14H7.7a.63.63 0 0 1 0 1.26zm2.47-.63a.63.63 0 0 1-1.26 0V8.11a.63.63 0 0 1 1.26 0v4.77zm5.74 0a.63.63 0 0 1-1.14.38l-2.44-3.32v2.94a.63.63 0 0 1-1.26 0V8.11a.63.63 0 0 1 1.13-.38l2.46 3.33V8.11a.63.63 0 0 1 1.25 0v4.77zm3.85-3.02a.63.63 0 0 1 0 1.26h-1.75v1.13h1.75a.63.63 0 0 1 0 1.26h-2.39a.63.63 0 0 1-.62-.63V8.11a.63.63 0 0 1 .62-.63h2.39a.63.63 0 0 1 0 1.26h-1.75v1.12h1.75z" />
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/CebrAa",
      icon: (
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
      ),
    },
    { label: "Mail", href: "mailto:yimpiyachon@gmail.com", stroke: true, icon: (<><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3 6.5 9 6 9-6" /></>) },
    {
      label: "Phone",
      href: "tel:+66944989917",
      stroke: true,
      icon: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      ),
    },
  ];

  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <p className="cta-live">
        <span className="cta-live-dot" aria-hidden="true" />
        Open for Middle / Senior Product Design roles
      </p>

      <h2 id="cta-heading" className="cta-heading">
        Let’s build high-impact <span className="cta-accent">platforms</span> together.
      </h2>

      <div className="cta-channels">
        {channels.map((c) => (
          <a
            key={c.label}
            className="cta-channel"
            href={c.href}
            {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <svg
              className="cta-channel-icon"
              viewBox="0 0 24 24"
              width="17"
              height="17"
              aria-hidden="true"
              focusable="false"
              fill={c.stroke ? "none" : "currentColor"}
              stroke={c.stroke ? "currentColor" : undefined}
              strokeWidth={c.stroke ? 1.7 : undefined}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {c.icon}
            </svg>
            {c.label}
          </a>
        ))}
        {/* The resume opens the existing modal, so it is a button, not a link. */}
        <button type="button" className="cta-channel" onClick={onSelectCv}>
          <svg
            className="cta-channel-icon"
            viewBox="0 0 24 24"
            width="17"
            height="17"
            aria-hidden="true"
            focusable="false"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z" />
            <path d="M14 2.5V8h5.5" />
            <path d="M8.5 13.5h7M8.5 17h4.5" />
          </svg>
          Resume
        </button>
      </div>
    </section>
  );
}

function SectionDivider({ label, count }: { label: string; count: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, marginTop: 16 }}>
      <h2
        style={{
          margin: 0,
          fontWeight: 400,
          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#828790",
        }}
      >
        {label}
      </h2>
      <div style={{ flex: 1, height: 1, background: "#24262B" }} />
      <span
        style={{
          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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

function ProjectsPage({ onSelect, onBack, onContact }: {
  onSelect: (id: string) => void;
  onBack: Handler;
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
          // Capped at the container so a 900px glow does not push the page
          // 240px wider than a phone screen and make every page scroll
          // sideways. It is a soft radial, so a narrower one just reads as a
          // smaller glow rather than as a clipped edge.
          width: "min(900px, 100%)",
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
          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 13,
            color: "#828790",
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#828790",
            marginBottom: 12,
          }}
        >
          Curated Archive · 29 Total Works
        </div>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
            fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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
                  fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              fontFamily: "'Inter', 'Inter Fallback', sans-serif",
              fontSize: 13,
              outline: "none",
              // A flat 260 is wider than a 280px screen once the gutters are
              // off, and an input keeps an intrinsic width besides.
              minWidth: "min(260px, 100%)",
            }}
          />
        </div>
      </div>

      {/* Web Applications & Platforms Section */}
      {(filter === "all" || filter === "apps") && (
        <section style={{ marginBottom: 72 }}>
          <SectionDivider label="Web Applications & Platforms" count={filteredApps.length} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(350px, 100%), 1fr))", gap: 24 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: 18 }}>
            {filteredWeb.map((p, i) => (
              <div
                key={p.id || i}
                onClick={() => onSelect(p.id)}
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
                      fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 16, fontWeight: 700, color: "#F5F5F4", marginBottom: 3 }}>
                      {p.title}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#828790", textTransform: "uppercase" }}>
                      {p.category}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
        <span style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 12, color: "#828790" }}>
          {filteredApps.length + filteredWeb.length} of {allProjects.apps.length + allProjects.web.length} projects shown
        </span>
        <button
          onClick={onContact}
          style={{
            fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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

/**
 * Company mark for the career list. Falls back to the initials tile when the
 * logo file is missing, so the row still reads correctly either way.
 */
function CompanyLogo({ src, name, eager = false }: { src?: string; name: string; eager?: boolean }) {
  const [failed, setFailed] = useState(!src);
  const initials = name
    .replace(/\s*(CO\.|LTD\.|\(.*\)).*/i, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div
      aria-hidden="true"
      style={{
        width: 44,
        height: 44,
        borderRadius: 10,
        flexShrink: 0,
        // Each mark ships with its own backdrop, so the tile only shows
        // through for the initials fallback.
        background: "#1B1D21",
        border: "1px solid #24262B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {failed ? (
        <span
          style={{
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 13,
            fontWeight: 700,
            color: "#6EE7B7",
          }}
        >
          {initials}
        </span>
      ) : (
        <img
          src={src}
          alt=""
          // A card in the moving rail can sit far outside the viewport at load
          // time, so lazy loading there shows an empty tile that only fills in
          // as the card drifts past. These marks total 23 KB across four files.
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          width={44}
          height={44}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      )}
    </div>
  );
}

/**
 * The About portrait, cycled like an Instagram story.
 *
 * Only the current frame is in the DOM: stacking all seven would have the page
 * download every candid shot on load, which is the opposite of the work that
 * took this site to a 97. The neighbouring frames are warmed with off-DOM
 * Image()s instead, so either arrow swaps instantly without costing the
 * initial paint.
 *
 * Index 0 is the professional portrait, so the prerendered HTML and the first
 * paint are byte-identical to what they were before the rotation existed.
 *
 * The name plate lives here rather than in AboutPage because the arrows sit
 * outside the 340px card, in the gutter the grid column was already wasting,
 * and everything that shares the index has to share one component.
 */
function StoryPortrait() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Someone who has asked the system to reduce motion should not be handed a
  // picture that changes under them; they get the portrait and the arrows,
  // with nothing moving unless they ask for it.
  const still =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const step = useCallback(
    (delta: number) => setIndex((i) => (i + delta + STORY_IMGS.length) % STORY_IMGS.length),
    [],
  );

  useEffect(() => {
    if (still || paused) return;
    const id = window.setTimeout(() => step(1), 4000);
    return () => window.clearTimeout(id);
  }, [index, paused, still, step]);

  // Warm both neighbours so neither arrow lands on a blank box on a slow line.
  useEffect(() => {
    for (const delta of [1, -1]) {
      const img = new Image();
      img.src = STORY_IMGS[(index + delta + STORY_IMGS.length) % STORY_IMGS.length];
    }
  }, [index]);

  const src = STORY_IMGS[index];

  // Styling lives in global.css rather than inline because the arrows change
  // position at narrow widths, and a media query cannot override inline style.
  const arrow = (delta: number, glyph: string, label: string, side: string) => (
    <button
      type="button"
      onClick={() => step(delta)}
      aria-label={label}
      className={`story-arrow story-arrow-${side}`}
    >
      {glyph}
    </button>
  );

  return (
    <div
      className="story-row"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {arrow(-1, "‹", "Previous photo", "prev")}

      <div className="story-card">
        <img
          key={index}
          className={still ? undefined : "story-frame"}
          // The first frame is the LCP element on /about, so it must not be
          // lazy and must be prioritised; Lighthouse fails both checks
          // otherwise. Later frames are only ever reached by the timer or an
          // arrow, long after load, so they stay lazy and unprioritised.
          {...(index === 0 ? highFetchPriority : null)}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          src={src}
          srcSet={srcSetFor(src)}
          // The card is capped at 340px but fills the column on a phone, where
          // .about-split drops to 20px of padding inside the page's 24px.
          // A flat "340px" overstated it by 20px and pulled a wider variant.
          sizes="(max-width: 700px) calc(100vw - 88px), 340px"
          alt="Piyachon Wanburi"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop&auto=format";
          }}
          style={{
            width: "100%",
            aspectRatio: "3/4",
            objectFit: "cover",
            objectPosition: "center 20%",
            display: "block",
          }}
        />

        {/* Progress rail — the story convention: one segment per frame, the
            active one filling over the same 4s the timer runs. */}
        <div style={{ position: "absolute", top: 10, left: 10, right: 10, display: "flex", gap: 4 }}>
          {STORY_IMGS.map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 2,
                borderRadius: 2,
                background: "rgba(245,245,244,0.25)",
                overflow: "hidden",
              }}
            >
              <div
                className={i === index && !paused && !still ? "story-progress" : undefined}
                style={{
                  height: "100%",
                  background: "#6EE7B7",
                  transformOrigin: "left",
                  transform: i < index || (i === index && (paused || still)) ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </div>
          ))}
        </div>

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
            pointerEvents: "none",
          }}
        >
          <div style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 14, fontWeight: 700, color: "#F5F5F4" }}>
            Piyachon Wanburi (Yim)
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#6EE7B7" }}>
            Bangkok · Architecture &amp; Product Design
          </div>
        </div>
      </div>

      {arrow(1, "›", "Next photo", "next")}
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
          // Capped at the container so a 900px glow does not push the page
          // 240px wider than a phone screen and make every page scroll
          // sideways. It is a soft radial, so a narrower one just reads as a
          // smaller glow rather than as a clipped edge.
          width: "min(900px, 100%)",
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
          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 13,
            color: "#828790",
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 800,
            color: "#F5F5F4",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            margin: "0 0 20px",
          }}
        >
          Making complex products <br />
          <span style={{ color: "#6EE7B7" }}>easier to understand and use.</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            maxWidth: 720,
          }}
        >
          {[
            "I'm Piyachon, a Senior UX/UI Designer based in Bangkok with 5+ years of experience designing digital products across SaaS, IoT, GIS, healthcare, and mobile.",
            "I enjoy working on complex problems — understanding the people, workflows, and information behind them, then turning them into experiences that feel simple and easy to use.",
          ].map((line) => (
            <p
              key={line}
              style={{
                fontFamily: "'Inter', 'Inter Fallback', sans-serif",
                fontSize: 16,
                color: "#9CA0A8",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Split Profile & Story */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          gap: 36,
          alignItems: "center",
          marginBottom: 64,
          background: "#131417",
          border: "1px solid #24262B",
          borderRadius: 20,
        }}
        className="about-split"
      >
        <StoryPortrait />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 22, fontWeight: 700, color: "#F5F5F4", margin: 0 }}>
            My background shapes how I design.
          </h2>
          <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.65, margin: 0 }}>
            Before UX/UI, I studied Architecture &amp; Product Design at KMUTNB. That background taught me to think about
            structure, space, hierarchy, and how people move through an environment.
          </p>
          <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.65, margin: 0 }}>
            I bring the same mindset into digital products — especially when working with complex systems, dashboards,
            and data-heavy interfaces.
          </p>
          <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.65, margin: 0 }}>
            Good design doesn't need to make things look complicated. It should make complicated things feel clear.
          </p>
          <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.65, margin: 0 }}>
            Over the past 5 years, I've worked across ARV (PTTEP Varuna), Beurdev, and Happy Three Creation, designing GIS
            monitoring tools, IoT systems, teleconsultation platforms, and web applications.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
            <button
              onClick={onSelectCv}
              style={{
                fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
                fontSize: 12,
                color: "#F5F5F4",
                background: "#1B1D21",
                border: "1px solid #24262B",
                padding: "10px 16px",
                borderRadius: 8,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <LineIcon name="file" />
              View Full CV
            </button>
            <button
              onClick={onContact}
              style={{
                fontFamily: "'Inter', 'Inter Fallback', sans-serif",
                fontSize: 13,
                color: "#6EE7B7",
                background: "transparent",
                border: "1px solid rgba(110,231,183,0.3)",
                padding: "10px 16px",
                borderRadius: 8,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Get In Touch
              <LineIcon name="mail" />
            </button>
          </div>
        </div>
      </div>

      {/* 4-Step Methodology */}
      <section style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#828790", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
          METHODOLOGY
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 26, fontWeight: 700, color: "#F5F5F4", margin: "0 0 24px" }}>
          How I approach a design problem
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: 16 }}>
          {[
            {
              step: "01",
              phase: "Understand",
              accent: "#6EE7B7",
              accentRgb: "110,231,183",
              title: "Start with the people and the problem",
              desc: "Talk to users, understand their context, and find out where things actually get difficult.",
            },
            {
              step: "02",
              phase: "Define",
              accent: "#3B82F6",
              accentRgb: "59,130,246",
              title: "Make sense of what we learned",
              desc: "Turn research, business needs, and user problems into clear priorities and journeys.",
            },
            {
              step: "03",
              phase: "Design",
              accent: "#A78BFA",
              accentRgb: "167,139,250",
              title: "Explore, simplify, and iterate",
              desc: "Explore different ideas, prototype early, and work closely with the team to shape the right solution.",
            },
            {
              step: "04",
              phase: "Validate",
              accent: "#FCD34D",
              accentRgb: "252,211,77",
              title: "Test it before calling it done",
              desc: "Put designs in front of real users, learn what works, and improve based on evidence.",
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
                  fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
                    fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                  {/* No opacity here: fading the accent to 70% composited the
                      blue phase down to #2f61b3 (3.05:1) and the purple to
                      #7b67b6 (3.9:1), which is what Lighthouse was failing.
                      At full strength they are 5.01:1 and 6.77:1. */}
                  <span style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 16, fontWeight: 700, color: item.accent }}>
                    {item.step}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 16, fontWeight: 700, color: "#F5F5F4", margin: "0 0 8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Highlights */}
      <section style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#828790", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
          CAREER TRACK RECORD
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 26, fontWeight: 700, color: "#F5F5F4", margin: "0 0 24px" }}>
          Where I've Made An Impact
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {career.map((c, i) => (
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
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", maxWidth: 640 }}>
                <CompanyLogo src={c.logo} name={c.company} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 16, fontWeight: 700, color: "#F5F5F4" }}>
                      {c.company}
                    </span>
                    <span className="tag-chip">{c.role}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 13, color: "#9CA0A8", margin: 0, lineHeight: 1.5 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 12, color: "#6EE7B7" }}>
                {c.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 26, fontWeight: 700, color: "#F5F5F4", margin: "0 0 24px" }}>
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
            <span style={{ color: "#6EE7B7", marginTop: 3, display: "flex" }}>
              <LineIcon name="cap" size={20} />
            </span>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 16, fontWeight: 700, color: "#F5F5F4", marginBottom: 4 }}>
                Bachelor of Architecture and Design, Product Design
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 12, color: "#9CA0A8", letterSpacing: "0.02em" }}>
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
              <span style={{ color: "#828790", marginTop: 3, display: "flex" }}>
                <LineIcon name="seal" size={18} />
              </span>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 15, fontWeight: 700, color: "#F5F5F4", marginBottom: 3 }}>
                  {cert.title}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 12, color: "#9CA0A8" }}>
                  {cert.school}, {cert.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner onSelectCv={onSelectCv} />

      {/* Footer — the same shape as the Stack page and the homepage:
          attribution left, one action right. The contact button that used to
          sit here is gone because the CTA above already carries every channel. */}
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 12,
            color: "#828790",
          }}
        >
          © 2026 Piyachon Wanburi · Senior UX/UI Specialist · Bangkok
        </span>
        <button
          onClick={onProjects}
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
      </footer>
    </div>
  );
}

function StackPage({ onBack, onProjects, onSelectCv }: { onBack: Handler; onProjects: Handler; onSelectCv: Handler }) {
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
          // Capped at the container so a 900px glow does not push the page
          // 240px wider than a phone screen and make every page scroll
          // sideways. It is a soft radial, so a narrower one just reads as a
          // smaller glow rather than as a clipped edge.
          width: "min(900px, 100%)",
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
          fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 13,
            color: "#828790",
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
            fontFamily: "'Inter', 'Inter Fallback', sans-serif",
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
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 20, fontWeight: 700, color: "#F5F5F4", margin: "0 0 6px" }}>
                {cat.category}
              </h2>
              <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 13, color: "#9CA0A8", margin: 0 }}>
                {cat.desc}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 14 }}>
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
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "space-between", alignItems: "flex-start" }}>
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
                      <span style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 14, fontWeight: 700, color: "#F5F5F4" }}>
                        {it.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
                  <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 12, color: "#9CA0A8", lineHeight: 1.5, margin: 0 }}>
                    {it.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CtaBanner onSelectCv={onSelectCv} />

      {/* Footer — same shape as the homepage: attribution left, action right.
          The contact button is gone because the CTA above now carries every
          channel, and repeating it here made the row read as two competing
          asks rather than one closing step. */}
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
            fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
            fontSize: 12,
            color: "#828790",
          }}
        >
          © 2026 Piyachon Wanburi · Senior UX/UI Specialist · Bangkok
        </span>
        <button
          onClick={onProjects}
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif",
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
      </footer>
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
      role="dialog"
      aria-modal="true"
      aria-label="Piyachon Wanburi resume"
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
            <span style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontWeight: 700, fontSize: 16, color: "#F5F5F4" }}>
              Piyachon Wanburi (Yim) — Resume 2026
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={handlePrint}
              style={{
                fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
              aria-label="Close resume"
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
                <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#6EE7B7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                  Senior UX/UI Designer
                </div>
                <h1 style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 28, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.03em" }}>
                  PIYACHON WANBURI <span style={{ color: "#6EE7B7", fontWeight: 700 }}>(Yim)</span>
                </h1>
                <div style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 14, color: "#9CA0A8" }}>
                  Thailand, Bangkok Base · 5+ Years Experience
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6, textAlign: "right" }}>
              <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 13, color: "#F5F5F4" }}>
                📞 094-498-9917
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 13, color: "#6EE7B7" }}>
                ✉️ yimpiyachon@gmail.com
              </div>
              <a
                href="https://www.yimpiyachon.com/"
                style={{
                  fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
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
            <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#828790", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              About Me
            </div>
            <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.65, margin: 0 }}>
              UX/UI Designer with 5+ years of experience designing SaaS platforms, Healthcare Systems, IoT Solutions, Real Estate Platforms, and Mobile Applications.
              Experienced in leading end-to-end product design processes from user research → information architecture → wireframing, prototyping → usability testing → to developer handoff.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#828790", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
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
                    <span style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 15, fontWeight: 700, color: "#F5F5F4" }}>
                      {exp.role} · <span style={{ color: "#6EE7B7" }}>{exp.company}</span>
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 12, color: "#828790" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 16 }}>
            <div style={{ background: "#17191E", border: "1px solid #24262B", borderRadius: 10, padding: "16px 20px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#6EE7B7", textTransform: "uppercase", marginBottom: 8 }}>
                Core UX Skills
              </div>
              <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.6, margin: 0 }}>
                UX Research · Information Architecture · User Flow · Wireframing · Prototyping · Design Systems · Usability Testing
              </p>
            </div>

            <div style={{ background: "#17191E", border: "1px solid #24262B", borderRadius: 10, padding: "16px 20px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#6EE7B7", textTransform: "uppercase", marginBottom: 8 }}>
                Design & AI Tools
              </div>
              <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 13, color: "#9CA0A8", lineHeight: 1.6, margin: 0 }}>
                Figma · Framer · Adobe CC (XD, Illustrator, Photoshop) · ChatGPT · Claude · Gemini · Figma Make
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ background: "#17191E", border: "1px solid #24262B", borderRadius: 10, padding: "16px 20px" }}>
            <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 11, color: "#828790", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
              Education & Certifications
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 14, fontWeight: 700, color: "#F5F5F4", marginBottom: 4 }}>
              Bachelor of Architecture and Design, Product Design
            </div>
            <div style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 13, color: "#9CA0A8", marginBottom: 10 }}>
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

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      onShowToast?.(`Copied: ${label}`);
    } catch {
      onShowToast?.(`Copy failed — ${label}: ${text}`);
    }
  };

  const contactItems: {
    label: string;
    value: string;
    copyText: string;
    copyLabel?: string;
    href: string | null;
  }[] = [
    { label: "EMAIL",    value: "yimpiyachon@gmail.com", copyText: "yimpiyachon@gmail.com", href: null },
    { label: "PHONE",    value: "094-498-9917",           copyText: "094-498-9917",           href: null },
    // The LINE row copies the ID rather than the URL: pasting an ID into LINE's
    // own search is how people actually add a contact there.
    { label: "LINE",     value: "yimpycc",                 copyText: "yimpycc",                copyLabel: "LINE ID", href: "https://line.me/ti/p/SHGZ_Lx9Jn" },
    { label: "LINKEDIN", value: "piyachon-wanburi",       copyText: "https://www.linkedin.com/in/piyachon-wanburi-b207691ab/", href: "https://www.linkedin.com/in/piyachon-wanburi-b207691ab/" },
    { label: "FACEBOOK", value: "Piyachon Wanburi",        copyText: "https://www.facebook.com/CebrAa", href: "https://www.facebook.com/CebrAa" },
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
    fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace",
    fontSize: 11,
    cursor: "pointer",
    flexShrink: 0,
    whiteSpace: "nowrap",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact details"
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
          aria-label="Close contact details"
          style={{
            position: "absolute", top: 24, right: 24,
            background: "#1B1D21", border: "1px solid #24262B",
            borderRadius: "50%", width: 36, height: 36,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#9CA0A8", cursor: "pointer", fontSize: 16,
          }}
        >✕</button>

        <h2 style={{ fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontSize: 26, fontWeight: 800, color: "#F5F5F4", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
          Get in Touch
        </h2>
        <p style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 14, color: "#9CA0A8", lineHeight: 1.55, margin: "0 0 24px" }}>
          Available for senior product design roles and complex enterprise systems.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {contactItems.map((item) => (
            <div key={item.label} style={fieldStyle}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 10, color: "#828790", textTransform: "uppercase", marginBottom: 3 }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 13, color: "#6EE7B7", textDecoration: "none", display: "block" }}>
                    {item.value} ↗
                  </a>
                ) : (
                  <div style={{ fontFamily: "'JetBrains Mono', 'JetBrains Fallback', monospace", fontSize: 13, color: "#F5F5F4" }}>
                    {item.value}
                  </div>
                )}
              </div>
              <button onClick={() => copy(item.copyText, item.copyLabel ?? item.value)} style={copyBtnStyle}>Copy</button>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: 24, width: "100%", padding: "12px",
            background: "#6EE7B7", color: "#0A0B0D",
            fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Fallback', sans-serif", fontWeight: 700, fontSize: 14,
            borderRadius: 8, border: "none", cursor: "pointer",
          }}
        >
          Close
        </button>
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
      <span style={{ fontFamily: "'Inter', 'Inter Fallback', sans-serif", fontSize: 13, color: "#F5F5F4", fontWeight: 500 }}>
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

// Every project gets its own case-study page and URL. CaseStudy renders only
// the sections a project actually has, so a write-up can be filled in over time
// without the page breaking in between.
const caseStudies = [...projects, ...webProjects];

const HOME_ROUTE: Route = { page: "home", projectId: null };
const STATIC_PAGES = ["projects", "about", "stack"] as const;

function parseRoute(pathname: string): Route {
  const caseMatch = pathname.match(/^\/case\/([^/]+)\/?$/);
  if (caseMatch) {
    const id = decodeURIComponent(caseMatch[1]);
    // An unknown id would render nothing, so treat it as a bad link and fall
    // back to the project index rather than a blank page.
    if (caseStudies.some((p) => p.id === id)) return { page: "case-study", projectId: id };
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
  // page-enter fades the view up from opacity 0. That is right for a route
  // change and wrong for the first load: the prerendered markup is already on
  // screen, but an element at opacity 0 is not a Largest Contentful Paint
  // candidate, so LCP was waiting on the fade instead of landing on the paint
  // that had already happened. Set only once the reader actually navigates.
  const [hasNavigated, setHasNavigated] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { page, projectId: activeProject } = route;

  const selectedCaseStudy = useMemo(() => {
    return caseStudies.find((p) => p.id === activeProject);
  }, [activeProject]);

  const navigate = useCallback((next: Route) => {
    const path = routeToPath(next);
    if (path !== window.location.pathname) window.history.pushState(null, "", path);
    setHasNavigated(true);
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
    const syncFromUrl = () => {
      setHasNavigated(true);
      setRoute(parseRoute(window.location.pathname));
    };
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
        <main className={hasNavigated ? "page-enter" : undefined}>
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
          onSelectCv={() => setCvModalOpen(true)}
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

      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Back to top */}
      <ScrollToTop />
    </div>
  );
}