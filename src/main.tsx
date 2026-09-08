import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { ErrorBoundary } from './ErrorBoundary';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found in index.html');

const app = (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    <Analytics />
  </React.StrictMode>
);

// The build prerenders each route, so in production there is already markup to
// adopt. createRoot stays as the path for a dev server, which serves an empty
// shell.
if (rootEl.hasChildNodes()) hydrateRoot(rootEl, app);
else createRoot(rootEl).render(app);
