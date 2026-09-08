/**
 * Renders every route server-side and fails if one throws.
 *
 * Case-study content is filled in project by project, so a page routinely has
 * sections it does not carry yet. Type checking cannot see that — the data is
 * plain objects with optional fields — and an HTTP check only proves index.html
 * was served. This actually mounts each page. Run via scripts/check-render.mjs.
 */
import { render } from './entry-server';
import { projects } from './data/projects';
import { webProjects } from './data/webProjects';

const ids = [...projects, ...webProjects].map((p) => p.id);
const failures: string[] = [];
for (const id of [...ids, 'projects', 'about', 'stack', '']) {
  const path = ids.includes(id) ? `/case/${id}` : `/${id}`;
  try {
    const html = render(path);
    if (html.length < 500) failures.push(`${path} rendered only ${html.length} chars`);
  } catch (e) {
    failures.push(`${path} THREW: ${(e as Error).message}`);
  }
}
if (failures.length) {
  console.error('FAIL\n' + failures.map((f) => `  ${f}`).join('\n'));
  // Signalled to the runner rather than typed here: this module is bundled for
  // the browser's type environment, which has no Node globals.
  (globalThis as { exitCode?: number }).exitCode = 1;
} else {
  console.log(`PASS — ${ids.length + 4} routes rendered`);
}
