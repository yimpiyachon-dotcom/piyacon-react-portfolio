import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Design Thinking Framework",
    body: "Anchored the engagement in a double-diamond framing so stakeholders agreed on the problem space before any interface work. The client arrived asking for 'a better dashboard', but the real constraint was that field telemetry and satellite data were never reconciled into one decision surface.",
    images: [
      "/img/process/smart-forest/01.webp",
      "/img/process/smart-forest/02.webp",
      "/img/process/smart-forest/03.webp",
    ],
  },
  {
    step: "02",
    title: "Product Ecosystem Mapping",
    body: "Mapped how the platform sits between ARV's drone operations, PTTEP's carbon reporting obligations, and the field rangers who actually walk the plots. Defining these relationships early prevented the classic enterprise trap of designing for the buyer while ignoring the daily operator.",
    images: [
      "/img/process/smart-forest/04.webp",
    ],
  },
  {
    step: "03",
    title: "Competitive Product Analysis",
    body: "Audited existing GIS and carbon-monitoring products to find where each one broke down. The pattern was consistent: tools were excellent at one data type and hostile to the rest, forcing analysts to triangulate across windows. That gap defined our positioning.",
    images: [
      "/img/process/smart-forest/38.webp",
      "/img/process/smart-forest/39.webp",
      "/img/process/smart-forest/40.webp",
      "/img/process/smart-forest/41.webp",
    ],
  },
  {
    step: "04",
    title: "Personas & Journey Mapping",
    body: "Built three role-based personas — carbon auditor, GIS analyst, field ranger — each with a distinct tolerance for data density. The journey map exposed where a single ranger task required jumping across four disconnected tools, which became the primary redesign target.",
    images: [
      "/img/process/smart-forest/05.webp",
      "/img/process/smart-forest/06.webp",
    ],
  },
  {
    step: "05",
    title: "Core Problem Statement",
    body: "Distilled research into one falsifiable problem statement rather than a list of feature requests. Framing the challenge as fragmented telemetry preventing timely carbon verification gave the team a shared success criterion to design and test against.",
    images: [
      "/img/process/smart-forest/07.webp",
    ],
  },
  {
    step: "06",
    title: "Quantitative Survey & Validation",
    body: "Ran structured surveys with the operator group to size which pain points were widespread versus anecdotal. Survey wording went through several revisions — early drafts leaked assumptions that would have confirmed what we already believed instead of testing it. The final instrument produced the baseline numbers later used to measure the redesign.",
    images: [
      "/img/process/smart-forest/08.webp",
      "/img/process/smart-forest/09.webp",
      "/img/process/smart-forest/35.webp",
      "/img/process/smart-forest/36.webp",
      "/img/process/smart-forest/37.webp",
    ],
  },
  {
    step: "07",
    title: "Information Architecture",
    body: "Restructured the IA around decisions rather than data sources. Instead of mirroring the backend's satellite/drone/sensor split, screens were grouped by the question the user was answering, with progressive disclosure keeping dense GIS layers one level down.",
    images: [
      "/img/process/smart-forest/10.webp",
      "/img/process/smart-forest/11.webp",
    ],
  },
  {
    step: "08",
    title: "Wireframing & Hi-Fi Prototypes",
    body: "Moved from low-fidelity flows to hi-fi frames, pressure-testing how much telemetry a single viewport could carry before analysts lost the thread. Layer toggling and map density were the two interactions that went through the most iteration.",
    images: [
      "/img/process/smart-forest/12.webp",
      "/img/process/smart-forest/13.webp",
      "/img/process/smart-forest/14.webp",
    ],
  },
  {
    step: "09",
    title: "Design System & Token Architecture",
    body: "Engineered BaseBlocksUI as a tokenized component framework — semantic colour tokens, spacing scales, and a dedicated chart-primitives layer so GIS visualisations stayed legible across themes. This is what let 34 components be reused when the platform expanded to two new regions.",
    images: [
      "/img/process/smart-forest/15.webp",
      "/img/process/smart-forest/16.webp",
      "/img/process/smart-forest/17.webp",
      "/img/process/smart-forest/18.webp",
    ],
  },
  {
    step: "10",
    title: "Final UI Delivery",
    body: "Resolved the system into the production interface: a unified carbon-tracking command centre where satellite imagery, drone telemetry and field reports converge into one auditable view — spanning dashboard, map analysis, plot detail, reporting and admin surfaces. Every screen draws from the token architecture, so visual consistency held without per-screen intervention.",
    images: [
      "/img/process/smart-forest/19.webp",
      "/img/process/smart-forest/20.webp",
      "/img/process/smart-forest/21.webp",
      "/img/process/smart-forest/22.webp",
      "/img/process/smart-forest/23.webp",
      "/img/process/smart-forest/24.webp",
      "/img/process/smart-forest/25.webp",
      "/img/process/smart-forest/26.webp",
    ],
  },
  {
    step: "11",
    title: "Screen Flow & Interactive Prototype",
    body: "With the screens designed, the full flow was assembled and wired into a clickable prototype. Laying the multi-role navigation out end-to-end made structural problems visible that individual screens had hidden — two redundant states were cut here rather than carried into build.",
    images: [
      "/img/process/smart-forest/29.webp",
      "/img/process/smart-forest/28.webp",
    ],
  },
  {
    step: "12",
    title: "Design Spec & Developer Handoff",
    body: "Documented every component with edge-case states, token references and behavioural notes. The spec was written to remove interpretation gaps: no engineer should need to ask what happens when data is missing, stale, or out of range. This is what made the prototype buildable without a translation layer.",
    images: [
      "/img/process/smart-forest/27.webp",
    ],
  },
  {
    step: "13",
    title: "Usability Testing & Iteration",
    body: "Put the prototype in front of real operators and measured task completion rather than collecting opinions. Time-on-task and error rate separated genuine friction from simple unfamiliarity, and the findings drove a round of layout and labelling revisions back into the spec before engineering built against it.",
    images: [
      "/img/process/smart-forest/30.webp",
      "/img/process/smart-forest/31.webp",
      "/img/process/smart-forest/32.webp",
      "/img/process/smart-forest/33.webp",
      "/img/process/smart-forest/34.webp",
    ],
  },
  {
    step: "14",
    title: "Gathering Feedback & Synthesis",
    body: "Closed the loop by collecting structured feedback from operators and stakeholders after testing. Reading written responses alongside session findings separated one-off preferences from repeated signals — determining what shipped in this release and what was logged for the next.",
    images: [
      "/img/process/smart-forest/42.webp",
      "/img/process/smart-forest/43.webp",
      "/img/process/smart-forest/44.webp",
      "/img/process/smart-forest/46.webp",
    ],
  },
];
