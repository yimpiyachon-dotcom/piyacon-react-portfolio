import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement Gathering",
    body: "Started by pinning down what the back-office actually had to control. Requirements arrived as a mix of hardware constraints, operational rules and administrative permissions, so the work was reconciling them into one coherent scope before any screen existed.",
    images: [
      "/img/process/area-22/01.webp",
      "/img/process/area-22/02.webp",
    ],
  },
  {
    step: "02",
    title: "Information Architecture",
    body: "Structured the IA around what an administrator manages rather than how the backend stores it. Gateways, users, companies, service jobs and monitoring views each carry different access rules, so the hierarchy had to make permission boundaries legible without forcing anyone to learn the data model.",
    images: [
      "/img/process/area-22/03.webp",
    ],
  },
  {
    step: "03",
    title: "Design System Foundation",
    body: "Built a token-driven component system sized for a dense administrative product — tables, forms, status indicators and state feedback. In a back-office where the same actions are repeated all day, one consistent set of patterns is what keeps each screen predictable.",
    images: [
      "/img/process/area-22/04.webp",
    ],
  },
  {
    step: "04",
    title: "Navigation & Shell Design",
    body: "Designed the persistent navigation shell that holds the whole product together. With this many management surfaces, the side navigation had to expose depth without becoming a wall of links, so it groups by responsibility rather than by feature count.",
    images: [
      "/img/process/area-22/05.webp",
    ],
  },
  {
    step: "05",
    title: "Authentication & Access Control",
    body: "Designed sign-in and the role-based access entry point. Getting the permission model visible at the door mattered: an administrative platform that hides what a role can do produces support requests, not security.",
    images: [
      "/img/process/area-22/06.webp",
    ],
  },
  {
    step: "06",
    title: "User & Company Management",
    body: "Built the management surfaces for user accounts, role assignment and multi-company structure. These screens are where a deployment grows from one site to many, so they were designed as core product rather than configuration afterthoughts.",
    images: [
      "/img/process/area-22/07.webp",
      "/img/process/area-22/09.webp",
    ],
  },
  {
    step: "07",
    title: "Operational Modules",
    body: "Designed the day-to-day operational tools — meeting room booking, technician job ticketing, and licence plate records. Each module reuses the same table, filter and detail patterns so one interaction model carries across the whole system.",
    images: [
      "/img/process/area-22/08.webp",
      "/img/process/area-22/10.webp",
      "/img/process/area-22/11.webp",
    ],
  },
  {
    step: "08",
    title: "CCTV & Live Monitoring",
    body: "Brought the building's camera views into the same shell as the management tools, organised by floor and location so monitoring is not a separate destination. The empty state — a floor with no camera attached yet — was designed explicitly rather than left as a blank frame.",
    images: [
      "/img/process/area-22/12.webp",
    ],
  },
  {
    step: "09",
    title: "Monitoring Dashboards",
    body: "Resolved the platform into its dashboard layer: electricity and water consumption, visitor and vehicle counts, meeting room usage, and technician job status, each as its own view inside the same shell with an export path out. The charts were built to stay honest about gaps and stale readings rather than smoothing them into a clean line.",
    images: [
      "/img/process/area-22/13.webp",
      "/img/process/area-22/14.webp",
      "/img/process/area-22/15.webp",
    ],
  },
];
