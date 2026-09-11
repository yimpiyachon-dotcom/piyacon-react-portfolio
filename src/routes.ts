import { projects } from './data/projects';
import { webProjects } from './data/webProjects';

/**
 * Every page the site can serve, with the metadata its static HTML should ship.
 *
 * The router sets document.title once React runs, which is too late for a
 * crawler reading the static file — and no crawler or link unfurler runs the
 * JS at all, so anything left at the template's default is what Google, LINE,
 * Facebook and Slack actually see. Before this map carried more than a title,
 * every one of the 29 case studies unfurled as the same generic card.
 */
const SITE = 'Piyachon Wanburi';

/** 1200x630 cards written by scripts/gen-og.mjs, one per case study. */
const OG_DIR = '/og';

type RouteMeta = {
  title: string;
  /** og:title and twitter:title — the headline of a shared link. */
  shareTitle: string;
  /** og:description and twitter:description. */
  description: string;
  /** Absolute-from-root path to the share card. */
  image: string;
};

const DEFAULT_IMAGE = '/og-cover.jpg?v=3';
const DEFAULT_DESC =
  '5+ years designing design systems, complex data models and enterprise token architectures.';

const caseRoutes = [...projects, ...webProjects].map((p) => [
  `/case/${p.id}`,
  {
    title: `${p.title} — ${SITE}`,
    shareTitle: `${p.title} — ${SITE}`,
    description: p.hook,
    image: `${OG_DIR}/${p.id}.jpg`,
  } satisfies RouteMeta,
]);

export const routes: Record<string, RouteMeta> = {
  '/': {
    title: `${SITE} — Senior UX/UI Designer`,
    shareTitle: `${SITE} — Senior UX/UI Designer`,
    description: DEFAULT_DESC,
    image: DEFAULT_IMAGE,
  },
  '/projects': {
    title: `All Projects — ${SITE}`,
    shareTitle: `29 Projects — ${SITE}`,
    description:
      'Case studies across ClimateTech GIS, Industrial IoT, Telehealth and enterprise platforms, plus 20 web and brand builds.',
    image: DEFAULT_IMAGE,
  },
  '/about': {
    title: `About — ${SITE}`,
    shareTitle: `About ${SITE} — Senior UX/UI Designer`,
    description:
      'Senior Product & UX/UI Designer in Bangkok. An architecture background applied to mission-critical dashboards: spatial hierarchy, durability and purposeful wayfinding.',
    image: DEFAULT_IMAGE,
  },
  '/stack': {
    title: `Stack — ${SITE}`,
    shareTitle: `Design Stack — ${SITE}`,
    description:
      'The tools, design-system practices and handoff workflow behind 29 shipped products.',
    image: DEFAULT_IMAGE,
  },
  ...Object.fromEntries(caseRoutes),
};

/** Kept as its own export: the render check and the sitemap only need paths. */
export const routeTitles: Record<string, string> = Object.fromEntries(
  Object.entries(routes).map(([path, meta]) => [path, meta.title]),
);
