import { projects } from './data/projects';
import { webProjects } from './data/webProjects';

/**
 * Every page the site can serve, with the <title> it should ship in its HTML.
 *
 * The router sets document.title once React runs, which is too late for a
 * crawler reading the static file — so the prerender step stamps it in.
 */
const SITE = 'Piyachon Wanburi';

export const routeTitles: Record<string, string> = {
  '/': `${SITE} — Senior UX/UI Designer`,
  '/projects': `All Projects — ${SITE}`,
  '/about': `About — ${SITE}`,
  '/stack': `Stack — ${SITE}`,
  ...Object.fromEntries(
    [...projects, ...webProjects].map((p) => [`/case/${p.id}`, `${p.title} — ${SITE}`]),
  ),
};
