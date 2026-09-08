/**
 * Design-process walkthroughs, one module per project in ./process.
 *
 * The map is assembled from the directory itself, so adding a walkthrough means
 * dropping in ./process/<project-id>.ts — there is no index to register it in
 * and therefore no way to add a file that silently never loads. The filename is
 * the project id; `npm run check` fails if it does not match a real project.
 */
export type ProcessStep = {
  step: string;
  title: string;
  body: string;
  images: string[];
};

const modules = import.meta.glob<{ steps: ProcessStep[] }>('./process/*.ts', { eager: true });

export const processSteps: Record<string, ProcessStep[]> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.replace(/^.*\/|\.ts$/g, ''), mod.steps]),
);
