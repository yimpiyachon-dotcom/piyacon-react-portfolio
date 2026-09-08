import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Design Thinking & Process Framing",
    body: "Framed the engagement around a security operations problem rather than a dashboard request. With hundreds of unclassified CCTV and sensor feeds arriving continuously, the design question was not how to display more, but how to decide what deserves an operator's attention first.",
    images: [
      "/img/7459d5a7e568.webp",
      "/img/bf51371915fe.webp",
    ],
  },
  {
    step: "02",
    title: "Product Ecosystem Mapping",
    body: "Mapped how the platform connects camera infrastructure, AI classification services, and the control-room operators acting on alerts. Making these dependencies explicit clarified where machine confidence ends and human judgement has to begin.",
    images: [
      "/img/9a92120beba1.webp",
    ],
  },
  {
    step: "03",
    title: "Personas & Operator Roles",
    body: "Defined the operator profiles who live in this system daily — monitoring staff scanning for anomalies versus supervisors auditing after the fact. Their differing tolerance for alert volume drove how aggressively the interface filters and escalates.",
    images: [
      "/img/54da30b22f49.webp",
    ],
  },
  {
    step: "04",
    title: "User Flow Architecture",
    body: "Structured the flows around the alert lifecycle: detection, triage, verification, resolution. Anchoring navigation to this sequence meant operators always knew what state an incident was in without reconstructing it from scattered screens.",
    images: [
      "/img/4bbb3563583b.webp",
    ],
  },
  {
    step: "05",
    title: "Design System & Token Architecture",
    body: "Built the component system on semantic tokens so severity, status, and confidence levels read consistently across every surface. In a security context this is functional, not cosmetic — colour carries meaning an operator has to parse in under a second.",
    images: [
      "/img/d407e1f6ae2f.webp",
      "/img/dfe87d45058e.webp",
      "/img/1079895376ab.webp",
    ],
  },
  {
    step: "06",
    title: "Telemetry Chart Primitives",
    body: "Extended the system with a dedicated chart layer for real-time sensor telemetry. These primitives had to stay legible at a glance while remaining honest about gaps, latency, and low-confidence readings rather than smoothing them away.",
    images: [
      "/img/c36e6e5098bc.webp",
    ],
  },
  {
    step: "07",
    title: "Wireframing",
    body: "Worked through layout density in low fidelity, testing how many concurrent feeds and alerts a single viewport could carry before triage speed degraded. Progressive disclosure kept secondary telemetry accessible without competing for foreground attention.",
    images: [
      "/img/51a18790395f.webp",
    ],
  },
  {
    step: "08",
    title: "UI Design",
    body: "Resolved wireframes into the production interface — an AI-triaged operations view where feeds, classifications and sensor state converge into one monitoring surface built for sustained use in a control room.",
    images: [
      "/img/7d76a5efdea5.webp",
    ],
  },
  {
    step: "09",
    title: "CRUD & Management Interfaces",
    body: "Designed the administrative layer: device registration, zone configuration, rule management and user permissions. These back-office screens are where deployments actually scale, so they were treated as first-class product surfaces rather than afterthoughts.",
    images: [
      "/img/11e145954c17.webp",
      "/img/9741fbe5afbd.webp",
      "/img/67f3c41222cb.webp",
      "/img/a2b082586390.webp",
      "/img/a9aebfb0ad16.webp",
    ],
  },
  {
    step: "10",
    title: "Design Spec & Developer Handoff",
    body: "Documented components with edge-case states, token references and behavioural notes — including what the interface does when a feed drops, a classification is uncertain, or telemetry goes stale. Failure states in a security system cannot be left to interpretation.",
    images: [
      "/img/485cdbef7775.webp",
    ],
  },
  {
    step: "11",
    title: "Screen Flow & Interactive Prototype",
    body: "Assembled the full screen flow and a clickable prototype so multi-role navigation could be walked end-to-end. Seeing alert triage as a continuous path exposed transitions that felt correct in isolation but broke the operator's momentum.",
    images: [
      "/img/b50ab4e4e8ed.webp",
      "/img/ee2d40140545.webp",
    ],
  },
  {
    step: "12",
    title: "Usability Testing",
    body: "Ran moderated task-completion sessions with operators against the prototype. Measuring time to triage and misclassification recovery — rather than collecting preferences — isolated the friction worth fixing before engineering built against the spec.",
    images: [
      "/img/15a198991954.webp",
    ],
  },
];
