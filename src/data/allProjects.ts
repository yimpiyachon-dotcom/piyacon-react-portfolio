import { projects } from './projects';
import { webProjects } from './webProjects';

// The Projects page reads both families through one shape. Counts shown in
// the UI are derived from these arrays, never written out by hand.
export const allProjects = {
  apps: projects.map((p) => ({
    title: p.title,
    category: p.platform,
    tags: p.stack.slice(0, 3),
    id: p.id,
    image: p.image,
    badges: p.badges,
    kpis: p.kpis,
    hook: p.hook,
    client: p.client,
    timeline: p.timeline,
  })),
  web: webProjects,
};
