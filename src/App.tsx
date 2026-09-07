import React, { useMemo, useState } from 'react';
import '../src/styles/portfolio.css';
import { PROFILE_IMG, projects } from './data/portfolioData';
import { Nav } from './components/Nav';
import { ProjectCard } from './components/ProjectCard';
import { HeroBackground, InteractivePortrait, KpiStrip, TypewriterText } from './components/Hero';
import { CaseStudy } from './components/CaseStudy';
import { ContactModal, CvModal, PreviewModal, Toast } from './components/Modals';

function SectionDivider({ label, count }: { label: string; count: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, marginTop: 16 }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F6369', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: '#24262B' }} />
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6EE7B7', background: '#1B1D21', padding: '2px 8px', borderRadius: 4, border: '1px solid #24262B' }}>{count}</span>
    </div>
  );
}

function HomePage({ onSelect, onProjects, onAbout, onContact, onSelectCv, onShowToast }: any) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 120px', position: 'relative' }}>
      <HeroBackground />
      <section style={{ marginBottom: 96, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(110,231,183,0.06)', border: '1px solid rgba(110,231,183,0.2)', borderRadius: 100, padding: '6px 14px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#6EE7B7', letterSpacing: '0.04em', marginBottom: 24 }}>
              <span>● Available for work</span>
              <span style={{ color: '#5F6369' }}>/</span>
              <span style={{ color: '#F5F5F4' }}>Immediately Available</span>
            </div>

            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(58px, 7.5vw, 76px)', fontWeight: 800, color: '#F5F5F4', letterSpacing: '-0.04em', lineHeight: 1.02, margin: '0 0 24px' }}>
              Piyachon
              <br />
              <span style={{ color: '#6EE7B7' }}>Wanburi</span>
            </h1>

            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(22px, 2.6vw, 24px)', fontWeight: 700, color: '#F5F5F4', minHeight: '1.4em', marginBottom: 20 }}>
              <TypewriterText />
            </div>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(16px, 2.5vw, 18px)', color: '#9CA0A8', maxWidth: 580, lineHeight: 1.65, margin: 0 }}>
              Senior UX/UI product designer who ships measurable business outcomes, not just static mockups. Specialized in high-complexity data products — Industrial IoT command centers, carbon GIS analytics, and clinical healthcare systems.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <button onClick={onProjects} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, background: '#6EE7B7', color: '#0A0B0D', border: 'none', borderRadius: 8, padding: '12px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, transition: 'transform 150ms' }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}> <span>Explore All 29 Projects</span> <span>↓</span> </button>
              <button onClick={onAbout} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, background: '#131417', color: '#F5F5F4', border: '1px solid #24262B', borderRadius: 8, padding: '12px 20px', cursor: 'pointer' }}>Design Approach & Bio</button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InteractivePortrait onShowToast={onShowToast} onOpenAbout={onAbout} onSelectCv={onSelectCv} onOpenContact={onContact} />
          </div>
        </div>
        <KpiStrip />
      </section>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F6369', whiteSpace: 'nowrap' }}>Featured Web Applications & Platforms</span>
          <div style={{ flex: 1, height: 1, background: '#24262B' }} />
        </div>
        <button onClick={onProjects} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#6EE7B7', background: 'none', border: 'none', cursor: 'pointer', padding: 0, letterSpacing: '0.04em' }}>View all 29 projects →</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 28, marginBottom: 96 }}>
        {projects.map((p: any) => <ProjectCard key={p.id} project={p} onClick={() => onSelect(p.id)} />)}
      </div>

      <section style={{ background: 'linear-gradient(180deg, #0F1114 0%, #131417 100%)', border: '1px solid #24262B', borderRadius: 16, padding: '44px 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'center', marginBottom: 96, position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)`, backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse 90% 100% at 50% 50%, black 30%, transparent 90%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 100% at 50% 50%, black 30%, transparent 90%)' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', filter: 'blur(75px)', opacity: 0.4, mixBlendMode: 'screen' }}>
          <div className="aurora-orb" style={{ position: 'absolute', top: '-30%', left: '-8%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, #10B981 0%, rgba(16,185,129,0) 70%)', animation: 'float-emerald 20s ease-in-out infinite' }} />
          <div className="aurora-orb" style={{ position: 'absolute', bottom: '-35%', right: '-6%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, #3B82F6 0%, rgba(59,130,246,0) 70%)', animation: 'float-blue 24s ease-in-out infinite' }} />
          <div className="aurora-orb" style={{ position: 'absolute', top: '10%', left: '50%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, #D4E157 0%, rgba(212,225,87,0) 70%)', animation: 'float-lime 16s ease-in-out infinite' }} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,11,13,0.15) 0%, transparent 20%, transparent 80%, rgba(10,11,13,0.25) 100%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6EE7B7', marginBottom: 12 }}>Executive Leadership & Systems Thinking</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: '#F5F5F4', margin: '0 0 12px', letterSpacing: '-0.02em' }}>Research-grounded, systems-minded, impact-measured.</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#9CA0A8', lineHeight: 1.65, margin: 0 }}>I lead end-to-end design — from field research with farmers and facility technicians to scalable tokenized design systems in Figma. My core differentiator is translating dense domain logic into intuitive dashboards that non-technical stakeholders can operate with confidence.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 280, position: 'relative', zIndex: 1 }}>
          <button onClick={onSelectCv} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: '#0A0B0D', background: '#6EE7B7', padding: '12px 24px', borderRadius: 8, border: 'none', cursor: 'pointer', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 14px rgba(110,231,183,0.3)', transition: 'transform 150ms' }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}><span>📄</span> Download & View Full CV</button>
          <button onClick={onContact} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#F5F5F4', background: '#24262B', border: '1px solid #383B42', padding: '12px 24px', borderRadius: 8, cursor: 'pointer', textAlign: 'center', transition: 'all 150ms', boxShadow: '0 4px 14px rgba(0,0,0,0.35)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(110,231,183,0.5)'; e.currentTarget.style.color = '#6EE7B7'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#383B42'; e.currentTarget.style.color = '#F5F5F4'; }}>Get In Touch</button>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #24262B', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#5F6369' }}>© 2026 Piyachon Wanburi · Senior UX/UI Specialist · Bangkok</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <span style={{ color: '#5F6369', fontSize: 13 }}>094-498-9917</span>
          <span style={{ color: '#5F6369', fontSize: 13 }}>yimpiyachon@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}

function ProjectsPage({ onSelect, onBack, onSelectWebPreview, onContact }: any) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tagColors: Record<string, string> = {
    Healthcare: '#6EE7B7', ClimateTech: '#6EE7B7', IoT: '#6EE7B7', SaaS: '#A5B4FC', FinTech: '#A5B4FC', PropTech: '#A5B4FC', 'Real Estate': '#A5B4FC', Finance: '#A5B4FC', Mobile: '#FCD34D', CMS: '#FCD34D', Dashboard: '#FCD34D', Brand: '#F9A8D4', Lifestyle: '#F9A8D4', Cultural: '#F9A8D4', Craft: '#F9A8D4',
  };

  const getTagColor = (tag: string) => tagColors[tag] ?? '#9CA0A8';
  const filters = [
    { key: 'all', label: 'All Works (29)' },
    { key: 'apps', label: 'Web Applications & Platforms' },
    { key: 'web', label: 'Web & Brand Design (20)' },
  ];

  const allProjects = useMemo(() => ({ apps: projects, web: [] }), []);

  const filteredApps = useMemo(() => allProjects.apps.filter((p: any) => {
    const q = searchQuery.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.tags.some((t: string) => t.toLowerCase().includes(q));
  }), [searchQuery]);

  const filteredWeb: any[] = [];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px 120px', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '420px', background: 'radial-gradient(circle, rgba(110,231,183,0.16) 0%, rgba(110,231,183,0) 70%)', filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }} />
      <button onClick={onBack} style={{ position: 'fixed', bottom: 32, left: 32, zIndex: 50, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: '#131417', border: '1px solid #24262B', borderRadius: 100, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#9CA0A8', backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', transition: 'all 150ms' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(110,231,183,0.4)'; e.currentTarget.style.color = '#6EE7B7'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#24262B'; e.currentTarget.style.color = '#9CA0A8'; }} >← Back to Homepage</button>

      <div style={{ marginBottom: 44, position: 'relative', zIndex: 1 }}>
        <button onClick={onBack} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#5F6369', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20, display: 'inline-flex', alignItems: 'center', gap: 6, padding: 0 }}>← Home</button>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F6369', marginBottom: 12 }}>Curated Archive · 29 Total Works</div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(34px, 5.5vw, 54px)', fontWeight: 800, color: '#F5F5F4', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 16px' }}>My Remarkable <span style={{ color: '#6EE7B7' }}>Projects</span></h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#9CA0A8', lineHeight: 1.6, margin: 0, maxWidth: 620 }}>29 delivered projects spanning enterprise data platforms, ClimateTech GIS command centers, Industrial IoT back-offices, and high-conversion web brand experiences.</p>

        <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <button key={f.key} onClick={() => setFilter(f.key)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, letterSpacing: '0.04em', padding: '8px 16px', borderRadius: 100, border: '1px solid', cursor: 'pointer', transition: 'all 150ms', background: filter === f.key ? '#6EE7B7' : '#131417', borderColor: filter === f.key ? '#6EE7B7' : '#24262B', color: filter === f.key ? '#0A0B0D' : '#9CA0A8' }}>{f.label}</button>
            ))}
          </div>

          <input type="text" placeholder="Search by title, domain, tech..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ background: '#131417', border: '1px solid #24262B', borderRadius: 8, padding: '8px 14px', color: '#F5F5F4', fontFamily: "'Inter', sans-serif", fontSize: 13, outline: 'none', minWidth: 260 }} />
        </div>
      </div>

      {(filter === 'all' || filter === 'apps') && (
        <section style={{ marginBottom: 72 }}>
          <SectionDivider label="Web Applications & Platforms" count={filteredApps.length} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 24 }}>
            {filteredApps.map((p: any) => <ProjectCard key={p.id} project={p} onClick={() => onSelect(p.id)} />)}
          </div>
        </section>
      )}

      {(filter === 'all' || filter === 'web') && (
        <section style={{ marginBottom: 72 }}>
          <SectionDivider label="Web & Brand Design Projects" count={filteredWeb.length} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
            {filteredWeb.map((p: any, i: number) => (
              <div key={p.id || i} onClick={() => onSelectWebPreview(p)} className="project-card" style={{ background: '#131417', border: '1px solid #24262B', borderRadius: 14, overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#1B1D21' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x380/1a1b1f/6EE7B7?text=Web+Design+Showcase'; }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 35%, rgba(10,11,13,0.85) 100%)' }} />
                  {p.metric && <div style={{ position: 'absolute', top: 12, left: 12 }}><div className="metric-badge">{p.metric}</div></div>}
                  <div className="cta-reveal" style={{ position: 'absolute', bottom: 10, right: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6EE7B7', fontWeight: 600 }}>Inspect dossier →</div>
                </div>
                <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: '#F5F5F4', marginBottom: 3 }}>{p.title}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5F6369', textTransform: 'uppercase' }}>{p.category}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
                    {p.tags.map((t: string) => <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 8px', borderRadius: 100, border: `1px solid ${getTagColor(t)}30`, color: getTagColor(t), background: `${getTagColor(t)}10`, letterSpacing: '0.02em' }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div style={{ borderTop: '1px solid #24262B', paddingTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#5F6369' }}>{filteredApps.length + filteredWeb.length} of {allProjects.apps.length + allProjects.web.length} projects shown</span>
        <button onClick={onContact} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#F5F5F4', background: '#1B1D21', border: '1px solid #24262B', padding: '10px 18px', borderRadius: 8, cursor: 'pointer' }}>Contact Piyachon</button>
      </div>
    </div>
  );
}

function AboutPage({ onBack, onProjects, onContact, onSelectCv, onShowToast }: any) {
  return (
    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '110px 24px 120px', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '420px', background: 'radial-gradient(circle, rgba(110,231,183,0.16) 0%, rgba(110,231,183,0) 70%)', filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }} />
      <button onClick={onBack} style={{ position: 'fixed', bottom: 32, left: 32, zIndex: 50, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: '#131417', border: '1px solid #24262B', borderRadius: 100, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#9CA0A8', backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(110,231,183,0.4)'; e.currentTarget.style.color = '#6EE7B7'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#24262B'; e.currentTarget.style.color = '#9CA0A8'; }}>← Back to Homepage</button>

      <div style={{ marginBottom: 48, position: 'relative', zIndex: 1 }}>
        <button onClick={onBack} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#5F6369', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20, display: 'inline-flex', alignItems: 'center', gap: 6, padding: 0 }}>← Home</button>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6EE7B7', marginBottom: 12 }}>ABOUT ME · DESIGN PHILOSOPHY</div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 800, color: '#F5F5F4', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 20px' }}>Design grounded in research, <br /><span style={{ color: '#6EE7B7' }}>proven by business metrics.</span></h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#9CA0A8', lineHeight: 1.6, margin: 0, maxWidth: 720 }}>I am Piyachon Wanburi (Yim), a Senior Product & UX/UI Designer based in Bangkok with over 5 years of experience. I specialize in solving high-complexity interface challenges across ClimateTech GIS, Industrial IoT, Telehealth, and Scalable Enterprise Platforms.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36, alignItems: 'center', marginBottom: 64, background: '#131417', border: '1px solid #24262B', borderRadius: 20, padding: '36px 36px' }}>
        <div style={{ position: 'relative', maxWidth: 340, margin: '0 auto', width: '100%' }}>
          <img src={PROFILE_IMG} alt="Piyachon Wanburi" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop&auto=format'; }} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: 16, border: '1px solid rgba(110,231,183,0.3)', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, background: 'rgba(10,11,13,0.85)', backdropFilter: 'blur(8px)', padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: '#F5F5F4' }}>Piyachon Wanburi (Yim)</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6EE7B7' }}>Bangkok · KMUTNB Architecture Alum</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: '#F5F5F4', margin: 0 }}>Translating complex domain data into effortless human actions</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA0A8', lineHeight: 1.65, margin: 0 }}>Coming from a formal background in Architecture & Product Design at KMUTNB, I look at software interfaces like physical buildings: spatial hierarchy, foundational durability, and purposeful wayfinding. When designing mission-critical dashboards, operators and analysts don't need decorative elements—they need clarity, speed, and cognitive ease under pressure.</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA0A8', lineHeight: 1.65, margin: 0 }}>Over the past 5 years, I've designed across ARV (PTTEP Varuna), Beurdev, and Happy Three Creation, shipping GIS monitoring tools, remote hardware gateways, teleconsultation systems, and 40+ high-converting web applications.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
            <button onClick={onProjects} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: '#0A0B0D', background: '#6EE7B7', padding: '10px 18px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Explore 29 Projects →</button>
            <button onClick={onSelectCv} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#F5F5F4', background: '#1B1D21', border: '1px solid #24262B', padding: '10px 16px', borderRadius: 8, cursor: 'pointer' }}>📄 View Full CV</button>
            <button onClick={onContact} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6EE7B7', background: 'transparent', border: '1px solid rgba(110,231,183,0.3)', padding: '10px 16px', borderRadius: 8, cursor: 'pointer' }}>Get In Touch ✉</button>
          </div>
        </div>
      </div>

      <section style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5F6369', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>METHODOLOGY</div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: '#F5F5F4', margin: '0 0 24px' }}>How I Lead End-to-End Product Design</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
          {[
            { step: '01', phase: 'Discover', accent: '#6EE7B7', accentRgb: '110,231,183', title: 'Contextual Inquiry & Field Discovery', desc: 'Direct field interviews with operators, farmers, and analysts. Uncovering the exact points of cognitive friction and operational bottlenecks before sketching.' },
            { step: '02', phase: 'Structure', accent: '#3B82F6', accentRgb: '59,130,246', title: 'Information Architecture & Data Mapping', desc: 'Transforming dense schemas into prioritized user journeys with progressive disclosure.' },
            { step: '03', phase: 'Systemize', accent: '#A78BFA', accentRgb: '167,139,250', title: 'Design Systems & Token Architecture', desc: 'Building Figma components linked with semantic tokens and engineering variables for zero-debt developer handoffs.' },
            { step: '04', phase: 'Validate', accent: '#FCD34D', accentRgb: '252,211,77', title: 'Empirical Usability Testing', desc: 'Moderated task-completion tests with measurable KPI benchmarks ensuring real business outcomes.' },
          ].map((item, idx) => (
            <div key={idx} style={{ position: 'relative', overflow: 'hidden', background: '#131417', border: `1px solid rgba(${item.accentRgb},0.25)`, borderRadius: 14, padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 220 }}>
              <div aria-hidden="true" style={{ position: 'absolute', bottom: -60, left: '50%', transform: 'translateX(-50%)', width: 260, height: 200, background: `radial-gradient(circle, rgba(${item.accentRgb},0.28) 0%, transparent 70%)`, filter: 'blur(10px)', pointerEvents: 'none' }} />
              <span aria-hidden="true" style={{ position: 'absolute', bottom: -18, right: -6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 96, fontWeight: 800, color: `rgba(${item.accentRgb},0.08)`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{item.step}</span>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: item.accent }}>{item.phase}</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6, marginBottom: 2 }}><span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, color: item.accent, opacity: 0.7 }}>{item.step}</span></div>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: '#F5F5F4', margin: '0 0 8px' }}>{item.title}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA0A8', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5F6369', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>CAREER TRACK RECORD</div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: '#F5F5F4', margin: '0 0 24px' }}>Where I've Made An Impact</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { company: 'VARUNA CO., LTD. (ARV / PTTEP)', role: 'Middle UX/UI Designer', period: 'Oct 2024 – Present', desc: 'Leading UX/UI for Smart Forest carbon GIS analytics, Smart Watcher security SOC platform, and Forest of Tomorrow ecosystem.' },
            { company: 'BEURDEV CO., LTD.', role: 'Lead UX/UI Designer', period: 'Feb 2024 – Oct 2024', desc: 'Delivered 40+ digital marketing web portals, high-conversion real estate showcases, and TH Health appointment systems.' },
            { company: 'HAPPY THREE CREATION CO., LTD.', role: 'Senior UX/UI Designer', period: 'Aug 2023 – Feb 2024', desc: 'Designed Area 22 IoT gateway management back office (400+ nodes) and Dr. Smoothlife clinical telemedicine workspace.' },
          ].map((c, i) => (
            <div key={i} style={{ background: '#131417', border: '1px solid #24262B', borderRadius: 12, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ maxWidth: 640 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: '#F5F5F4' }}>{c.company}</span><span className="tag-chip">{c.role}</span></div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA0A8', margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#6EE7B7' }}>{c.period}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: '1px solid #24262B', paddingTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', gap: 12, marginLeft: 'auto' }}>
          <button onClick={onProjects} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: '#0A0B0D', background: '#6EE7B7', padding: '10px 20px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Explore 29 Projects ↓</button>
          <button onClick={onContact} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#F5F5F4', background: '#1B1D21', border: '1px solid #24262B', padding: '10px 18px', borderRadius: 8, cursor: 'pointer' }}>Contact Piyachon</button>
        </div>
      </div>
    </div>
  );
}

function StackPage({ onBack, onProjects, onContact }: any) {
  const LOGOS: Record<string, string> = {
    figma: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 57'%3E%3Cpath fill='%23F24E1E' d='M19 28.5a9.5 9.5 0 0 1 9.5-9.5h0a9.5 9.5 0 0 1 0 19h0A9.5 9.5 0 0 1 19 28.5z'/%3E%3Cpath fill='%23FF7262' d='M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z'/%3E%3Cpath fill='%231ABCFE' d='M19 0v19h9.5a9.5 9.5 0 0 0 0-19z'/%3E%3Cpath fill='%230ACF83' d='M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z'/%3E%3Cpath fill='%23A259FF' d='M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z'/%3E%3C/svg%3E",
    framer: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 21'%3E%3Cpath fill='%230055FF' d='M0 0h14v7H7zM0 7h7l7 7H0zM0 14h7v7z'/%3E%3C/svg%3E",
    adobe: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF0000' d='M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm6.23 0L24 22.624V1.376z'/%3E%3C/svg%3E",
    openai: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2310A37F' d='M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.5 14.15A4.485 4.485 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387 2.019-1.168a.076.076 0 0 1 .071 0l4.318 2.485a4.5 4.5 0 0 1-.676 8.123v-5.674a.786.786 0 0 0-.399-.379zm2.011-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.316-2.481a4.5 4.5 0 0 1 6.194 4.461zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z'/%3E%3C/svg%3E",
    anthropic: 'data:image/webp;base64,UklGRigCAABXRUJQVlA4IBwCAAAQCwCdASpAAEAAPnk2lkckoyIhLhSZyJAPCWUAEUt+24/uVxxzH+Z0Znzv7waMPz6M5X017Af8d/pX/EN64XFJuP8QGlAaN103H5pcR+o2wXoMi8dQnTkJQZxyeGoK4RgAAP78SgSeeN/pNVyYRfi+5gzkxcadpWNt1sVZA/NfYrKYn6vI8K/t5WwrQP35uS/EsC22i9aaHCUV+6G9ZzET5eD3719djRKxo43mEjSj6bUwrQlGeTHHJcD7relFynP1jCLxIR/fib001q06rZBk9LzG8MCtAQr8Z/Pl+NjViU+Jz/7yq/XqYfNbmvwFgGPVLW18a7Ul/oOV/9jtBpaQy4zV/kA/mxT3BsjkdLJeLdzCNkYiNl7aJ48PujeGhOqWbcVKYwv6U2MnZXE5pj9xNB8T5k9oinLzSFeafAN77amM8uydPWVd+n8E+qXFwkycbzXGUDdh6C+GWDcHMMFxZ21InEZAf3wV4B6WobXBi1oFl4NI6IwRZAwl5s3s3W3NPd5vLaM0lWrwUSTLei3r0SoBVN7WFLHvvDUmcdcBM/uCp0Mln/7Ws6hLL/+qYuZh7jAsbYPF91Y2+TSALnvCXE601rPcJwXS7v+aIS/m6dP8TUUH+aW9UHxyWOyTpZomv+PIVZSomvGH/1TPrgQ/OfBZ7+p4PcKMPkw95jhPuXIaF9Vm71MXoNOxg5T5fHrvR6YyVZPbcTAAAAA=',
    html: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23E34F26' d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z'/%3E%3C/svg%3E",
    tailwind: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2306B6D4' d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z'/%3E%3C/svg%3E",
    react: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%2361DAFB" d="M12 4.75C8.82 4.75 6.15 7.42 6.15 10.6c0 3.18 2.67 5.85 5.85 5.85 3.18 0 5.85-2.67 5.85-5.85 0-3.18-2.67-5.85-5.85-5.85zm0 1.5a4.35 4.35 0 0 1 4.35 4.35A4.35 4.35 0 0 1 12 15.05 4.35 4.35 0 0 1 7.65 10.7 4.35 4.35 0 0 1 12 6.25zm0 1.85c-1.17 0-2.12.95-2.12 2.12S10.83 12.34 12 12.34s2.12-.95 2.12-2.12S13.17 8.1 12 8.1zM12 0C6.08 0 1.25 4.83 1.25 10.75C1.25 16.67 6.08 21.5 12 21.5S22.75 16.67 22.75 10.75C22.75 4.83 17.92 0 12 0zm0 1.5c6.02 0 10.9 4.88 10.9 10.9S18.02 23.3 12 23.3 1.1 18.42 1.1 12.4 5.98 1.5 12 1.5z"/%3E%3C/svg%3E',
  };

  const stackCategories = [{ category: 'Product & UI/UX Design', desc: 'Daily tools used for system wireframing, high-fidelity prototypes, and design system governance.', items: [{ name: 'Figma', level: 'Expert / Daily', detail: 'Variables, Token Studio, Auto-Layout 5.0, Dev Mode, Component Variants', logo: LOGOS.figma }, { name: 'Framer', level: 'Advanced', detail: 'Interactive prototypes, custom React overrides, responsive landing engines', logo: LOGOS.framer }, { name: 'Adobe XD / AI / PS', level: 'Proficient', detail: 'Vector illustration, asset export, image retouching, legacy conversion', logo: LOGOS.adobe }] }, { category: 'Generative AI & Accelerated Workflow', desc: 'Leveraging AI to automate research synthesis, copy variations, and code bridging.', items: [{ name: 'ChatGPT', level: 'Daily Workflow', detail: 'User interview scripts, heuristic checklists, copy refinement, persona simulation', logo: LOGOS.openai }, { name: 'Claude', level: 'Daily Workflow', detail: 'Multimodal analysis, rapid feature scoping, code bridging, UX critique', logo: LOGOS.anthropic }, { name: 'HTML5 / CSS3', level: 'Basic', detail: 'Responsive layout structure and design token alignment', logo: LOGOS.html }, { name: 'React', level: 'Understanding', detail: 'State management intuition, props architecture, modular component thinking', logo: LOGOS.react }] }];

  return (
    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '110px 24px 120px', position: 'relative' }}>
      <button onClick={onBack} style={{ position: 'fixed', bottom: 32, left: 32, zIndex: 50, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: '#131417', border: '1px solid #24262B', borderRadius: 100, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#9CA0A8', backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>← Back to Homepage</button>
      <div style={{ marginBottom: 48, position: 'relative', zIndex: 1 }}>
        <button onClick={onBack} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#5F6369', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20, display: 'inline-flex', alignItems: 'center', gap: 6, padding: 0 }}>← Home</button>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6EE7B7', marginBottom: 12 }}>ENGINEERING & DESIGN CAPABILITIES</div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 800, color: '#F5F5F4', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 20px' }}>My Technical & <br /><span style={{ color: '#6EE7B7' }}>Design Stack</span></h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#9CA0A8', lineHeight: 1.6, margin: 0, maxWidth: 680 }}>A comprehensive breakdown of tools, frameworks, token architectures, and domain skillsets I employ daily to engineer zero-friction interfaces for high-scale enterprise platforms.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginBottom: 72 }}>
        {stackCategories.map((cat, idx) => (
          <div key={idx} style={{ background: '#131417', border: '1px solid #24262B', borderRadius: 16, padding: '28px 30px' }}>
            <div style={{ marginBottom: 20 }}><h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 700, color: '#F5F5F4', margin: '0 0 6px' }}>{cat.category}</h3><p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA0A8', margin: 0 }}>{cat.desc}</p></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
              {cat.items.map((it: any, itemIdx: number) => (
                <div key={itemIdx} style={{ background: '#17191E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      {it.logo && <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><img src={it.logo} alt={it.name} style={{ width: 18, height: 18, objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>}
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: '#F5F5F4' }}>{it.name}</span>
                    </div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6EE7B7', background: 'rgba(110,231,183,0.1)', padding: '2px 7px', borderRadius: 4, border: '1px solid rgba(110,231,183,0.25)', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{it.level}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA0A8', lineHeight: 1.5, margin: 0 }}>{it.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #24262B', paddingTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', gap: 12, marginLeft: 'auto' }}>
          <button onClick={onProjects} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: '#0A0B0D', background: '#6EE7B7', padding: '10px 20px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Explore 29 Projects ↓</button>
          <button onClick={onContact} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#F5F5F4', background: '#1B1D21', border: '1px solid #24262B', padding: '10px 18px', borderRadius: 8, cursor: 'pointer' }}>Contact Piyachon</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [page, setPage] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState<any>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedCaseStudy = useMemo(() => projects.find((p: any) => p.id === activeProject), [activeProject]);

  return (
    <div style={{ minHeight: '100vh', background: '#0A0B0D' }}>
      <Nav
        onHome={() => { setActiveProject(null); setPage('home'); }}
        onProjects={() => { setActiveProject(null); setPage('projects'); }}
        onAbout={() => { setActiveProject(null); setPage('about'); }}
        onStack={() => { setActiveProject(null); setPage('stack'); }}
        onContact={() => setContactModalOpen(true)}
        currentPage={activeProject ? 'case-study' : page}
      />

      {selectedCaseStudy ? (
        <CaseStudy project={selectedCaseStudy} onBack={() => { setActiveProject(null); setPage('projects'); }} onHome={() => { setActiveProject(null); setPage('home'); }} onShowToast={setToastMessage} />
      ) : page === 'projects' ? (
        <ProjectsPage onSelect={(id: string) => setActiveProject(id)} onBack={() => setPage('home')} onSelectWebPreview={(item: any) => setPreviewItem(item)} onContact={() => setContactModalOpen(true)} />
      ) : page === 'about' ? (
        <AboutPage onBack={() => setPage('home')} onProjects={() => setPage('projects')} onContact={() => setContactModalOpen(true)} onSelectCv={() => setCvModalOpen(true)} onShowToast={setToastMessage} />
      ) : page === 'stack' ? (
        <StackPage onBack={() => setPage('home')} onProjects={() => setPage('projects')} onContact={() => setContactModalOpen(true)} />
      ) : (
        <HomePage onSelect={(id: string) => setActiveProject(id)} onProjects={() => setPage('projects')} onAbout={() => setPage('about')} onContact={() => setContactModalOpen(true)} onSelectCv={() => setCvModalOpen(true)} onShowToast={setToastMessage} />
      )}

      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} onShowToast={setToastMessage} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} onShowToast={setToastMessage} />
      <PreviewModal project={previewItem} onClose={() => setPreviewItem(null)} onShowToast={setToastMessage} onNavigateToStudy={(id: string) => { setPreviewItem(null); setActiveProject(id); }} />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position: 'fixed', right: 32, bottom: 32, zIndex: 90, width: 44, height: 44, borderRadius: '50%', background: 'rgba(19,20,23,0.9)', border: '1px solid #24262B', backdropFilter: 'blur(12px)', color: '#9CA0A8', fontSize: 18, lineHeight: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>↑</button>
    </div>
  );
}
