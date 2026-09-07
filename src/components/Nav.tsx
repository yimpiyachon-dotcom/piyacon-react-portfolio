import React, { useState } from 'react';

export function Nav({
  onHome,
  onProjects,
  onAbout,
  onStack,
  onContact,
  currentPage,
}: {
  onHome: () => void;
  onProjects: () => void;
  onAbout: () => void;
  onStack: () => void;
  onContact: () => void;
  currentPage: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Home', action: onHome, key: 'home' },
    { label: 'Projects', action: onProjects, key: 'projects' },
    { label: 'About', action: onAbout, key: 'about' },
    { label: 'Stack', action: onStack, key: 'stack' },
    { label: 'Contact', action: onContact, key: 'contact' },
  ];

  const isActive = (key: string) => currentPage === key || (key === 'home' && currentPage === 'case-study');

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 80,
        backdropFilter: 'blur(10px)',
        background: 'rgba(10, 11, 13, 0.78)',
        borderBottom: '1px solid rgba(36, 38, 43, 0.9)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '18px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <button
            onClick={onHome}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <div className="nav-dot" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: '#F5F5F4',
                }}
              >
                Piyachon Wanburi
              </div>
              <div
                className="nav-role-badge"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: '#5F6369',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginTop: 2,
                }}
              >
                Senior UX/UI Designer
              </div>
            </div>
          </button>

          <nav className="nav-desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={item.action}
                style={{
                  background: isActive(item.key) ? 'rgba(110,231,183,0.12)' : 'transparent',
                  border: isActive(item.key) ? '1px solid rgba(110,231,183,0.3)' : '1px solid transparent',
                  borderRadius: 999,
                  padding: '8px 14px',
                  color: isActive(item.key) ? '#6EE7B7' : '#9CA0A8',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-status-pill" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: '#6EE7B7',
                background: 'rgba(110,231,183,0.08)',
                border: '1px solid rgba(110,231,183,0.2)',
                borderRadius: 999,
                padding: '6px 10px',
              }}
            >
              Available for work
            </span>
          </div>

          <button
            className="nav-hamburger-btn"
            onClick={() => setMobileOpen((open) => !open)}
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              border: '1px solid #24262B',
              background: '#131417',
              color: '#F5F5F4',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        <div className={`nav-mobile-menu ${mobileOpen ? 'is-open' : ''}`} style={{ marginTop: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 8 }}>
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  item.action();
                  setMobileOpen(false);
                }}
                style={{
                  background: isActive(item.key) ? 'rgba(110,231,183,0.12)' : 'transparent',
                  border: '1px solid #24262B',
                  borderRadius: 10,
                  padding: '12px 14px',
                  color: isActive(item.key) ? '#6EE7B7' : '#9CA0A8',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
