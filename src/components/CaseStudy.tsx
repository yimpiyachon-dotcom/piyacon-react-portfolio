import React, { useEffect, useMemo, useState } from 'react';

export function KpiScoreboard({ kpis }: { kpis: { value: string; label: string; sub: string }[] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
      {kpis.map((item, index) => (
        <div
          key={item.label}
          className={visible ? 'kpi-animate' : ''}
          style={{
            background: '#131417',
            border: '1px solid #24262B',
            borderRadius: 12,
            padding: '18px 18px 16px',
            animationDelay: `${index * 80}ms`,
          }}
        >
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 30, fontWeight: 800, letterSpacing: '-0.04em', color: '#F5F5F4' }}>
            {item.value}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6EE7B7', marginTop: 8, marginBottom: 4, textTransform: 'uppercase' }}>
            {item.label}
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA0A8', lineHeight: 1.4 }}>{item.sub}</div>
        </div>
      ))}
    </div>
  );
}

export function BaselineStat({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
      {stats.map((st) => (
        <div key={st.label} style={{ background: '#17191E', border: '1px solid #24262B', borderRadius: 10, padding: '14px 16px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 26, fontWeight: 700, color: '#F5F5F4' }}>{st.value}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA0A8', marginTop: 4 }}>{st.label}</div>
        </div>
      ))}
    </div>
  );
}

export function CaseStudy({ project, onBack, onHome, onShowToast }: any) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tabs = useMemo(
    () => [
      { key: 'overview', label: 'Overview' },
      { key: 'challenge', label: 'Challenge' },
      { key: 'impact', label: 'Impact' },
      { key: 'learnings', label: 'Learnings' },
    ],
    [],
  );

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '30px 24px 120px' }}>
      <button
        onClick={onBack}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: '#5F6369',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginBottom: 18,
        }}
      >
        ← Back to projects
      </button>

      <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid #24262B', background: '#131417' }}>
        <div style={{ position: 'relative', aspectRatio: '16/8', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/1200x700/1a1b1f/6EE7B7?text=Case+Study+Visual';
            }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,11,13,0.18) 0%, rgba(10,11,13,0.9) 100%)' }} />
          <div style={{ position: 'absolute', inset: 'auto 24px 24px 24px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6EE7B7', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {project.client}
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, margin: '10px 0 6px', letterSpacing: '-0.04em', color: '#F5F5F4' }}>
              {project.title}
            </h1>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.stack.map((item: string) => (
                <span key={item} className="tag-chip">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: '28px 24px 32px' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  background: activeTab === tab.key ? '#6EE7B7' : '#1B1D21',
                  color: activeTab === tab.key ? '#0A0B0D' : '#9CA0A8',
                  border: '1px solid #24262B',
                  borderRadius: 999,
                  padding: '8px 14px',
                  cursor: 'pointer',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#D9DEE3', lineHeight: 1.7 }}>
                {project.hook}
              </p>

              <KpiScoreboard kpis={project.kpis} />

              <div style={{ background: '#17191E', border: '1px solid #24262B', borderRadius: 16, padding: '22px 20px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FCA5A5', marginBottom: 12 }}>
                  01 · The problem
                </div>
                <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA0A8', lineHeight: 1.7 }}>{project.problem}</p>
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <BaselineStat stats={project.baselineStats} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {project.solutions.map((sol: any, idx: number) => (
                  <div key={sol.title} style={{ display: 'flex', gap: 12, background: '#17191E', border: '1px solid #24262B', borderRadius: 12, padding: '18px 16px' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#6EE7B7', width: 26 }}>0{idx + 1}</span>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 700, color: '#F5F5F4', marginBottom: 6 }}>{sol.title}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA0A8', lineHeight: 1.6 }}>{sol.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ overflowX: 'auto', border: '1px solid #24262B', borderRadius: 12 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                  <thead>
                    <tr style={{ background: '#1B1D21' }}>
                      {['Metric', 'Before', 'After', 'Net Δ'].map((h) => (
                        <th key={h} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5F6369', padding: '12px 16px', textAlign: 'left', textTransform: 'uppercase' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.impactTable.map((row: any) => (
                      <tr key={row.metric} style={{ borderTop: '1px solid #24262B' }}>
                        <td style={{ padding: '12px 16px', fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA0A8' }}>{row.metric}</td>
                        <td style={{ padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#D1D5DB' }}>{row.before}</td>
                        <td style={{ padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#F5F5F4' }}>{row.after}</td>
                        <td style={{ padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#6EE7B7', fontWeight: 700 }}>{row.delta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {project.quote && (
                <blockquote style={{ margin: 0, background: '#17191E', borderLeft: '3px solid #6EE7B7', padding: '18px 20px', borderRadius: 10 }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#F5F5F4', lineHeight: 1.6, fontStyle: 'italic' }}>“{project.quote}”</div>
                  <div style={{ marginTop: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6EE7B7' }}>{project.quoteRole}</div>
                </blockquote>
              )}
            </div>
          )}

          {activeTab === 'learnings' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {project.learnings.map((item: string) => (
                <div key={item} style={{ background: '#17191E', border: '1px solid #24262B', borderRadius: 12, padding: '16px 18px', fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA0A8', lineHeight: 1.6 }}>
                  • {item}
                </div>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginTop: 28, paddingTop: 20, borderTop: '1px solid #24262B', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                onHome();
                onShowToast('Returned to homepage');
              }}
              style={{
                background: '#1B1D21',
                border: '1px solid #24262B',
                color: '#6EE7B7',
                borderRadius: 8,
                padding: '10px 18px',
                cursor: 'pointer',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
              }}
            >
              Back home
            </button>
            <button
              onClick={onBack}
              style={{
                background: '#6EE7B7',
                color: '#0A0B0D',
                border: 'none',
                borderRadius: 8,
                padding: '10px 20px',
                cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
              }}
            >
              Continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
