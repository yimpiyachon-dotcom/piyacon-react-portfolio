import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Design Thinking & Process Framing",
    body: "Framed the engagement around a security operations problem rather than a dashboard request. With hundreds of unclassified CCTV and sensor feeds arriving continuously, the design question was not how to display more, but how to decide what deserves an operator's attention first.",
    images: [
      "/img/process/smart-watcher/01.webp",
      "/img/process/smart-watcher/02.webp",
    ],
  },
  {
    step: "02",
    title: "Product Ecosystem Mapping",
    body: "Mapped how the platform connects camera infrastructure, AI classification services, and the control-room operators acting on alerts. Making these dependencies explicit clarified where machine confidence ends and human judgement has to begin.",
    images: [
      "/img/process/smart-watcher/03.webp",
    ],
  },
  {
    step: "03",
    title: "Personas & Operator Roles",
    body: "Defined the operator profiles who live in this system daily — monitoring staff scanning for anomalies versus supervisors auditing after the fact. Their differing tolerance for alert volume drove how aggressively the interface filters and escalates.",
    images: [
      "/img/process/smart-watcher/04.webp",
    ],
  },
  {
    step: "04",
    title: "User Flow Architecture",
    body: "Structured the flows around the alert lifecycle: detection, triage, verification, resolution. Anchoring navigation to this sequence meant operators always knew what state an incident was in without reconstructing it from scattered screens.",
    images: [
      "/img/process/smart-watcher/05.webp",
    ],
  },
  {
    step: "05",
    title: "Design System & Token Architecture",
    body: "Built the component system on semantic tokens so severity, status, and confidence levels read consistently across every surface. In a security context this is functional, not cosmetic — colour carries meaning an operator has to parse in under a second.",
    images: [
      "/img/process/smart-watcher/06.webp",
      "/img/process/smart-watcher/07.webp",
      "/img/process/smart-watcher/08.webp",
    ],
  },
  {
    step: "06",
    title: "Telemetry Chart Primitives",
    body: "Extended the system with a dedicated chart layer for real-time sensor telemetry. These primitives had to stay legible at a glance while remaining honest about gaps, latency, and low-confidence readings rather than smoothing them away.",
    images: [
      "/img/process/smart-watcher/09.webp",
    ],
  },
  {
    step: "07",
    title: "Wireframing",
    body: "Worked through layout density in low fidelity, testing how many concurrent feeds and alerts a single viewport could carry before triage speed degraded. Progressive disclosure kept secondary telemetry accessible without competing for foreground attention.",
    images: [
      "/img/process/smart-watcher/10.webp",
    ],
  },
  {
    step: "08",
    title: "UI Design",
    body: "Resolved wireframes into the production interface — an AI-triaged operations view where feeds, classifications and sensor state converge into one monitoring surface built for sustained use in a control room.",
    images: [
      "/img/process/smart-watcher/11.webp",
    ],
  },
  {
    step: "09",
    title: "CRUD & Management Interfaces",
    body: "Designed the administrative layer: device registration, zone configuration, rule management and user permissions. These back-office screens are where deployments actually scale, so they were treated as first-class product surfaces rather than afterthoughts.",
    images: [
      "/img/process/smart-watcher/12.webp",
      "/img/process/smart-watcher/13.webp",
      "/img/process/smart-watcher/14.webp",
      "/img/process/smart-watcher/15.webp",
      "/img/process/smart-watcher/16.webp",
    ],
  },
  {
    step: "10",
    title: "Design Spec & Developer Handoff",
    body: "Documented components with edge-case states, token references and behavioural notes — including what the interface does when a feed drops, a classification is uncertain, or telemetry goes stale. Failure states in a security system cannot be left to interpretation.",
    images: [
      "/img/process/smart-watcher/17.webp",
    ],
  },
  {
    step: "11",
    title: "Screen Flow & Interactive Prototype",
    body: "Assembled the full screen flow and a clickable prototype so multi-role navigation could be walked end-to-end. Seeing alert triage as a continuous path exposed transitions that felt correct in isolation but broke the operator's momentum.",
    images: [
      "/img/process/smart-watcher/18.webp",
      "/img/process/smart-watcher/19.webp",
    ],
  },
  {
    step: "12",
    title: "Usability Testing",
    body: "Ran moderated task-completion sessions with operators against the prototype. Measuring time to triage and misclassification recovery — rather than collecting preferences — isolated the friction worth fixing before engineering built against the spec.",
    images: [
      "/img/process/smart-watcher/20.webp",
      "/img/process/smart-watcher/21.webp",
    ],
  },
  {
    step: "13",
    title: "Test Scripts & Measured Results",
    body: "Each task was written as a numbered script with an explicit objective before anyone was put in front of the prototype — QR-code sign-in, then the two report-entry flows for a Dry Evergreen forest sub-plot. Running them through Maze returned success rate, drop-off, misclick rate and time on task per script instead of impressions: script 1 came back at 100% success and 0% drop-off but a 17.4% misclick rate, which pointed at target sizing rather than comprehension. The open question at the end of each script is where the qualitative signal came from.",
    images: [
      "/img/process/smart-watcher/22.webp",
      "/img/process/smart-watcher/23.webp",
      "/img/process/smart-watcher/24.webp",
      "/img/process/smart-watcher/25.webp",
      "/img/process/smart-watcher/26.webp",
      "/img/process/smart-watcher/27.webp",
      "/img/process/smart-watcher/28.webp",
    ],
  },
  {
    step: "14",
    title: "Gathering Feedback & Synthesis",
    body: "Testing output and stakeholder comments were consolidated onto one board split into pain point, requirement and user feedback, with every proposed change tagged as a new feature or an improvement. Separating what users struggled with from what they asked for is what kept the backlog honest — a request only became scope when a pain point stood behind it.",
    images: [
      "/img/process/smart-watcher/29.webp",
    ],
  },
];
