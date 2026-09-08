import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement Gathering",
    body: "Started by pinning down what the back-office actually had to control. With 400+ industrial IoT nodes deployed across sites, requirements arrived as a mix of hardware constraints, operational rules and admin permissions — the work was reconciling them into a single coherent scope before any screen existed.",
    images: [
      "/img/df16c418f613.webp",
      "/img/fd4b8357caaa.webp",
    ],
  },
  {
    step: "02",
    title: "Information Architecture",
    body: "Structured the IA around what an administrator manages rather than how the backend stores it. Gateways, users, companies, tickets and live telemetry each carry different access rules, so the hierarchy had to make permission boundaries legible without forcing operators to learn the data model.",
    images: [
      "/img/d784c866aee1.webp",
    ],
  },
  {
    step: "03",
    title: "Design System Foundation",
    body: "Built a token-driven component system sized for a dense admin product — tables, forms, status indicators and state feedback. In a back-office where users repeat the same actions hundreds of times, consistency directly reduces error rate.",
    images: [
      "/img/6ab923093675.webp",
    ],
  },
  {
    step: "04",
    title: "Navigation & Shell Design",
    body: "Designed the persistent navigation shell that holds the whole product together. With this many management surfaces, the side navigation had to expose depth without becoming a wall of links — grouping by responsibility rather than by feature count.",
    images: [
      "/img/c508f607a93b.webp",
    ],
  },
  {
    step: "05",
    title: "Authentication & Access Control",
    body: "Designed sign-in and the RBAC entry point. Getting the permission model visible at the door mattered: an admin platform that hides what a role can do produces support tickets, not security.",
    images: [
      "/img/f6bf04544b6e.webp",
    ],
  },
  {
    step: "06",
    title: "User & Company Management",
    body: "Built the CRUD surfaces for user accounts, role assignment and multi-company structure. These screens are where a deployment scales from one site to many, so they were designed as core product rather than configuration afterthoughts.",
    images: [
      "/img/d28ccf0d2af7.webp",
      "/img/7b57aa940dce.webp",
    ],
  },
  {
    step: "07",
    title: "Operational Modules",
    body: "Designed the day-to-day operational tools — meeting room booking, job ticketing, and licence plate records. Each module reuses the same table, filter and detail patterns so operators carry one interaction model across the whole system.",
    images: [
      "/img/b4d0ea87e167.webp",
      "/img/218f19599ac3.webp",
      "/img/8fb0ec1d62f9.webp",
    ],
  },
  {
    step: "08",
    title: "CCTV & Live Monitoring",
    body: "Integrated live camera feeds into the same shell as the management tools, so monitoring is not a separate destination. Feed state — connected, degraded, offline — is surfaced explicitly rather than left to a blank frame.",
    images: [
      "/img/8001872e76a3.webp",
    ],
  },
  {
    step: "09",
    title: "Telemetry Dashboard",
    body: "Resolved the platform into its dashboard layer, where gateway health and sensor telemetry across all nodes converge into one view. The charts were built to stay honest about gaps and stale readings rather than smoothing them into a clean line.",
    images: [
      "/img/b0143b30ea6b.webp",
      "/img/7da3b11edaa4.webp",
      "/img/7793bb903d3f.webp",
    ],
  },
];
