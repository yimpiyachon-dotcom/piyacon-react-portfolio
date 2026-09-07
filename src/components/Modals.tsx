import React from 'react';
import { PROFILE_IMG } from '../data/portfolioData';

export function Toast({ message, onClose }: { message: string | null; onClose: () => void }) {
  React.useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => onClose(), 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 92,
        right: 24,
        zIndex: 200,
        background: '#1B1D21',
        border: '1px solid rgba(110,231,183,0.4)',
        borderRadius: 10,
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
        animation: 'fadeInOverlay 200ms ease',
      }}
    >
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6EE7B7' }} />
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#F5F5F4', fontWeight: 500 }}>{message}</span>
    </div>
  );
}

export function ContactModal({ isOpen, onClose, onShowToast }: { isOpen: boolean; onClose: () => void; onShowToast: (message: string) => void }) {
  if (!isOpen) return null;

  const copy = (text: string, label: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    onShowToast(`Copied: ${label}`);
  };

  const contactItems = [
    { label: 'EMAIL', value: 'yimpiyachon@gmail.com', copyText: 'yimpiyachon@gmail.com', href: null },
    { label: 'PHONE', value: '094-498-9917', copyText: '094-498-9917', href: null },
    { label: 'LINKEDIN', value: 'piyachon-wanburi', copyText: 'https://www.linkedin.com/in/piyachon-wanburi-b207691ab/', href: 'https://www.linkedin.com/in/piyachon-wanburi-b207691ab/' },
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 11, 13, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#131417',
          border: '1px solid #24262B',
          borderRadius: 20,
          maxWidth: 480,
          width: '100%',
          padding: '36px 36px 40px',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.8)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            background: '#1B1D21',
            border: '1px solid #24262B',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9CA0A8',
            cursor: 'pointer',
            fontSize: 16,
          }}
        >
          ✕
        </button>

        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 800, color: '#F5F5F4', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
          Get in Touch
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA0A8', lineHeight: 1.55, margin: '0 0 24px' }}>
          Available for senior product design roles and complex enterprise systems.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {contactItems.map((item) => (
            <div key={item.label} style={{ background: '#1B1D21', border: '1px solid #24262B', borderRadius: 8, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#5F6369', textTransform: 'uppercase', marginBottom: 3 }}>{item.label}</div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#6EE7B7', textDecoration: 'none', display: 'block' }}>
                    {item.value} ↗
                  </a>
                ) : (
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#F5F5F4' }}>{item.value}</div>
                )}
              </div>
              <button onClick={() => copy(item.copyText, item.value)} style={{ background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.3)', color: '#6EE7B7', borderRadius: 6, padding: '5px 12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
                Copy
              </button>
            </div>
          ))}
        </div>

        <button onClick={onClose} style={{ marginTop: 24, width: '100%', padding: '12px', background: '#6EE7B7', color: '#0A0B0D', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, borderRadius: 8, border: 'none', cursor: 'pointer' }}>
          Close
        </button>
      </div>
    </div>
  );
}

export function CvModal({ isOpen, onClose, onShowToast }: { isOpen: boolean; onClose: () => void; onShowToast: (message: string) => void }) {
  if (!isOpen) return null;

  const handlePrint = () => window.print();

  const handleDownloadMarkdown = () => {
    const cvText = `# PIYACHON WANBURI (Yim)
UX/UI DESIGNER
Phone: 094-498-9917
Email: yimpiyachon@gmail.com
Location: Thailand, Bangkok Base
Portfolio: https://piyachonwanburi.framer.website/

## ABOUT ME
UX/UI Designer with 5+ years of experience designing SaaS platforms, Healthcare Systems, IoT Solutions, Real Estate Platforms, and Mobile Applications. Experienced in leading end-to-end product design processes from user research > information architecture > wireframing, prototyping > usability testing > to developer handoff.

## EXPERIENCE

### Middle UX/UI DESIGNER — AI and Robotics Ventures Company Limited (VARUNA CO., LTD.)
Oct 2024 – Present
- Led UX/UI design for Smart Watch ecosystem
- Designed Smart Forest monitoring platform
- Developed Forest of tomorrow platform
- Created user flows, wireframes and prototypes
- Collaborated closely with PMs and engineering teams

### Lead UX/UI DESIGNER — BEURDEV CO., LTD.
Feb 2024 – Oct 2024
- Led UX/UI design for TH Healthy healthcare platform
- Designed real estate web platform and high-converting landing pages
- Delivered 40+ marketing websites and campaign pages
- Established design standards and token libraries across projects

### Senior UX/UI DESIGNER — HAPPY THREE CREATION CO., LTD.
Aug 2023 – Feb 2024
- Designed Area 22 IoT device management platform
- Developed UX/UI for Smooth Life web & App
- Created online learning and booking platform
- Produced interactive prototypes for stakeholder validation

### UX/UI DESIGNER — AI and Robotics Ventures Company Limited (VARUNA CO., LTD.)
June 2022 – Aug 2023
- Designed Kanna mobile application and back-office system
- Developed VLM area management platform
- Conducted user research and usability testing
- Worked closely with developers during implementation

### UX/UI DESIGNER — ALL ABOUT YOU CO., LTD.
March 2021 – June 2022
- Designed e-commerce website experience
- Improved user journeys and conversion flows
- Created responsive UI across web platforms

## CORE SKILLS
- UX Research, Information Architecture, User Flow, Wireframing, Prototyping, Design Systems, Usability Testing
- Tools: Figma, Framer, Adobe CC (XD, AI, PS)
- AI Tooling: ChatGPT, Gemini, Claude, Figma Make

## EDUCATION
- Bachelor of Architecture and Design, Product Design — King Mongkut's University of Technology North Bangkok (KMUTNB), 2016–2020
- Complete UX/UI Design, BorntoDev (2020)
- Usability Design and Psychology for Digital Products, Skooldio
- Information Architecture, Skooldio
`;

    const blob = new Blob([cvText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Resume_Piyachon_Wanburi_2026.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Resume downloaded as Markdown file!');
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(10, 11, 13, 0.88)', backdropFilter: 'blur(14px)', zIndex: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 16px' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#131417', border: '1px solid #24262B', borderRadius: 20, maxWidth: 820, width: '100%', maxHeight: '92vh', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 28px 70px rgba(0,0,0,0.85)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #24262B', background: '#17191E', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18 }}>📄</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, color: '#F5F5F4' }}>Piyachon Wanburi (Yim) — Resume 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={handlePrint} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#0A0B0D', background: '#6EE7B7', border: 'none', borderRadius: 6, padding: '6px 14px', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}><span>🖨️</span> Print / Save PDF</button>
            <button onClick={handleDownloadMarkdown} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#9CA0A8', background: '#1B1D21', border: '1px solid #24262B', borderRadius: 6, padding: '6px 12px', cursor: 'pointer' }}>Download .MD</button>
            <button onClick={onClose} style={{ background: '#1B1D21', border: '1px solid #24262B', borderRadius: 6, padding: '6px 12px', color: '#9CA0A8', cursor: 'pointer', fontSize: 13 }}>✕</button>
          </div>
        </div>

        <div id="resume-print-area" style={{ padding: '32px 36px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 28, color: '#F5F5F4' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #24262B', paddingBottom: 24, flexWrap: 'wrap', gap: 20 }}>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <img src={PROFILE_IMG} alt="Piyachon Wanburi" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&fit=crop&auto=format'; }} style={{ width: 72, height: 72, borderRadius: 12, objectFit: 'cover', objectPosition: 'center 20%', border: '1px solid rgba(110,231,183,0.4)' }} />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6EE7B7', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Senior UX/UI Designer</div>
                <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 28, fontWeight: 800, margin: '0 0 4px', letterSpacing: '-0.03em' }}>PIYACHON WANBURI <span style={{ color: '#6EE7B7', fontWeight: 700 }}>(Yim)</span></h1>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA0A8' }}>Thailand, Bangkok Base · 5+ Years Experience</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'right' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#F5F5F4' }}>📞 094-498-9917</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#6EE7B7' }}>✉️ yimpiyachon@gmail.com</div>
              <a href="https://piyachonwanburi.framer.website/" target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#9CA0A8', textDecoration: 'underline' }}>piyachonwanburi.framer.website ↗</a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5F6369', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>About Me</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA0A8', lineHeight: 1.65, margin: 0 }}>UX/UI Designer with 5+ years of experience designing SaaS platforms, Healthcare Systems, IoT Solutions, Real Estate Platforms, and Mobile Applications. Experienced in leading end-to-end product design processes from user research → information architecture → wireframing, prototyping → usability testing → to developer handoff.</p>
          </div>

          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5F6369', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Professional Experience</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { role: 'Middle UX/UI DESIGNER', company: 'AI and Robotics Ventures Company Limited (VARUNA CO., LTD.)', period: 'Oct 2024 – Present', points: ['Led UX/UI design for Smart Watch ecosystem', 'Designed Smart Forest monitoring platform', 'Developed Forest of Tomorrow platform', 'Created user flows, wireframes, and high-fidelity interactive prototypes', 'Collaborated closely with PMs and engineering teams'] },
                { role: 'Lead UX/UI DESIGNER', company: 'BEURDEV CO., LTD.', period: 'Feb 2024 – Oct 2024', points: ['Led UX/UI design for TH Healthy healthcare platform', 'Designed real estate web platform and high-converting landing pages', 'Delivered 40+ marketing websites and campaign pages', 'Established unified design standards and design tokens across client projects'] },
                { role: 'Senior UX/UI DESIGNER', company: 'HAPPY THREE CREATION CO., LTD.', period: 'Aug 2023 – Feb 2024', points: ['Designed Area 22 IoT device management back-office platform', 'Developed UX/UI for Smooth Life web & mobile app platform', 'Created online learning and reservation booking platform', 'Produced interactive prototypes for executive stakeholder validation'] },
              ].map((exp, idx) => (
                <div key={idx} style={{ background: '#17191E', border: '1px solid #24262B', borderRadius: 10, padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: '#F5F5F4' }}>{exp.role} · <span style={{ color: '#6EE7B7' }}>{exp.company}</span></span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#5F6369' }}>{exp.period}</span>
                  </div>
                  <ul style={{ margin: '10px 0 0', paddingLeft: 18, color: '#9CA0A8', fontSize: 13, lineHeight: 1.6 }}>{exp.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PreviewModal({ project, onClose, onShowToast, onNavigateToStudy }: { project: any; onClose: () => void; onShowToast: (message: string) => void; onNavigateToStudy: (id: string) => void }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(10, 11, 13, 0.88)', backdropFilter: 'blur(14px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 16px' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#131417', border: '1px solid #24262B', borderRadius: 20, maxWidth: 820, width: '100%', maxHeight: '92vh', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 28px 70px rgba(0,0,0,0.85)', overflow: 'hidden' }}>
        <div style={{ position: 'relative', aspectRatio: '16/9', maxHeight: 340, overflow: 'hidden', background: '#1B1D21', flexShrink: 0 }}>
          <img src={project.image} alt={project.imageAlt || project.title} onError={(e) => { e.currentTarget.src = 'https://placehold.co/820x460/1a1b1f/6EE7B7?text=Case+Study+Preview'; }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,11,13,0.2) 0%, rgba(10,11,13,0.85) 100%)' }} />
          <div style={{ position: 'absolute', top: 16, left: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <div className="metric-badge">{project.metric || 'Verified Design System'}</div>
            {project.metricBadge && <div className="metric-badge metric-badge-neutral">{project.metricBadge}</div>}
          </div>
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(10,11,13,0.85)', border: '1px solid #24262B', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5F5F4', cursor: 'pointer' }}>✕</button>
          <div style={{ position: 'absolute', bottom: 18, left: 24, right: 24 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6EE7B7', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{project.client || 'Client System'} · {project.timeline || 'Delivered'}</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 800, color: '#F5F5F4', margin: 0, letterSpacing: '-0.02em' }}>{project.title}</h2>
          </div>
        </div>

        <div style={{ padding: '24px 28px 32px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <span className="tag-chip">{project.role || 'Lead UX/UI Designer'}</span>
              <span className="tag-chip">{project.category}</span>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {project.tags.map((t: string) => <span key={t} className="stack-chip">{t}</span>)}
            </div>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#F5F5F4', lineHeight: 1.6, margin: 0 }}>{project.overview}</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #24262B', paddingTop: 20, flexWrap: 'wrap', gap: 12 }}>
            <a href="https://piyachonwanburi.framer.website/" target="_blank" rel="noreferrer" style={{ background: '#1B1D21', border: '1px solid #24262B', color: '#6EE7B7', padding: '8px 18px', borderRadius: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>View on Live Framer Portfolio ↗</a>
            <button onClick={() => { onNavigateToStudy(project.id); onShowToast('Opening project case study'); }} style={{ background: '#6EE7B7', color: '#0A0B0D', padding: '8px 20px', borderRadius: 8, border: 'none', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Open Study</button>
          </div>
        </div>
      </div>
    </div>
  );
}
