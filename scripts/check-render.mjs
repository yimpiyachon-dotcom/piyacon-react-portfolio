#!/usr/bin/env node
/** Builds src/renderSmoke.tsx for the server and runs it against DOM stand-ins. */
import { execFileSync } from 'node:child_process';
import { rmSync } from 'node:fs';

const OUT = 'node_modules/.render-smoke';
execFileSync('npx', ['vite', 'build', '--ssr', 'src/renderSmoke.tsx', '--outDir', OUT, '--logLevel', 'error'], {
  stdio: ['ignore', 'ignore', 'inherit'],
});

// The components touch only these APIs while rendering.
let pathname = '/';
globalThis.window = {
  get location() {
    return { pathname };
  },
  history: { replaceState: (_state, _title, path) => { pathname = path; }, pushState: () => {} },
  addEventListener: () => {},
  removeEventListener: () => {},
  scrollTo: () => {},
  matchMedia: () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} }),
};
globalThis.document = {
  title: '',
  getElementById: () => null,
  addEventListener: () => {},
  removeEventListener: () => {},
  createElement: () => ({ style: {}, setAttribute() {}, click() {} }),
};

try {
  await import(`../${OUT}/renderSmoke.js`);
} finally {
  rmSync(OUT, { recursive: true, force: true });
}

if (globalThis.exitCode) process.exit(globalThis.exitCode);
