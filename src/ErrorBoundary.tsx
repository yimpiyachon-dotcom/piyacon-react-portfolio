import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

/**
 * Keeps a render-time crash in any single section from blanking the whole
 * portfolio — visitors get a readable fallback with a way back instead of a
 * white page.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Portfolio render error:', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          background: '#0A0B0D',
          color: '#F5F5F4',
          fontFamily: "'Inter', system-ui, sans-serif",
          padding: 24,
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Something went wrong</h1>
        <p style={{ color: '#9CA0A8', fontSize: 14, margin: 0 }}>
          The page hit an unexpected error. Reloading usually fixes it.
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: '#6EE7B7',
            color: '#0A0B0D',
            border: 'none',
            borderRadius: 8,
            padding: '10px 22px',
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          Reload page
        </button>
      </div>
    );
  }
}
