import React from 'react';

export function ProjectCard({ project, onClick }: { project: any; onClick: () => void }) {
  return (
    <div
      className="project-card"
      onClick={onClick}
      style={{
        background: '#131417',
        border: '1px solid #24262B',
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#1B1D21' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/600x380/1a1b1f/6EE7B7?text=Project+Showcase';
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 38%, rgba(10,11,13,0.85) 100%)' }} />
        {(project.badges || []).slice(0, 2).map((badge: any, idx: number) => (
          <div key={`${project.id}-${idx}`} style={{ position: 'absolute', top: 12 + idx * 30, left: 12 }}>
            <div className={`metric-badge ${badge.positive === false ? 'metric-badge-neutral' : ''}`}>
              {badge.label}
            </div>
          </div>
        ))}

        <div
          className="cta-reveal"
          style={{
            position: 'absolute',
            bottom: 12,
            right: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: '#6EE7B7',
            fontWeight: 600,
          }}
        >
          Open case study →
        </div>
      </div>

      <div style={{ padding: '18px 18px 20px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#5F6369',
              marginBottom: 8,
            }}
          >
            {project.client}
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: '#F5F5F4',
              letterSpacing: '-0.02em',
              marginBottom: 8,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: '#9CA0A8',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {project.hook}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
          {project.tags.map((tag: string, idx: number) => (
            <span key={`${project.id}-${tag}-${idx}`} className="stack-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
