#!/usr/bin/env node
/** Builds src/renderSmoke.tsx for the server and runs it against DOM stand-ins. */
import { execFileSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import { installDomStubs } from './dom-stubs.mjs';

const OUT = 'node_modules/.render-smoke';
execFileSync('npx', ['vite', 'build', '--ssr', 'src/renderSmoke.tsx', '--outDir', OUT, '--logLevel', 'error'], {
  stdio: ['ignore', 'ignore', 'inherit'],
});

installDomStubs();

try {
  await import(`../${OUT}/renderSmoke.js`);
} finally {
  rmSync(OUT, { recursive: true, force: true });
}

if (globalThis.exitCode) process.exit(globalThis.exitCode);
