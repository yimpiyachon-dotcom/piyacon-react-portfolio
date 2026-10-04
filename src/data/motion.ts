// Content and colours for the methodology helix on the About page.
// The component reads everything from here, so copy edits never touch the canvas code.

type Hue = 'mint' | 'blue' | 'purple' | 'amber';

// The same four accents the About page's methodology cards used, one per step.
// Define stays on the site's #3B82F6 rather than the #60A5FA the design file
// shipped with, so the section introduces no new colour.
export const MOTION_COLORS: Record<Hue, string> = {
  mint: '#6EE7B7', // CI
  blue: '#3B82F6',
  purple: '#A78BFA',
  amber: '#FCD34D',
};

export interface MethodStep {
  id: string;
  label: string;
  title: string;
  desc: string;
  hue: Hue;
}

export const methodology = {
  eyebrow: 'Methodology',
  title: 'How I approach a design problem',
  steps: [
    {
      id: 'understand',
      label: 'Understand',
      title: 'Start with the people and the problem',
      desc: 'Talk to users, understand their context, and find out where things actually get difficult.',
      hue: 'mint',
    },
    {
      id: 'define',
      label: 'Define',
      title: 'Make sense of what we learned',
      desc: 'Turn research, business needs, and user problems into clear priorities and journeys.',
      hue: 'blue',
    },
    {
      id: 'design',
      label: 'Design',
      title: 'Explore, simplify, and iterate',
      desc: 'Explore different ideas, prototype early, and work closely with the team to shape the right solution.',
      hue: 'purple',
    },
    {
      id: 'validate',
      label: 'Validate',
      title: 'Test it before calling it done',
      desc: 'Put designs in front of real users, learn what works, and improve based on evidence.',
      hue: 'amber',
    },
  ] as MethodStep[],
};
