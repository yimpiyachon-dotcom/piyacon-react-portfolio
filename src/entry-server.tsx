import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { ErrorBoundary } from './ErrorBoundary';

/** Renders one route to HTML. Used by the prerender step and the render check. */
export function render(pathname: string) {
  window.history.replaceState(null, '', pathname);
  return renderToString(
    React.createElement(ErrorBoundary, null, React.createElement(App)),
  );
}

export { routes, routeTitles } from './routes';
