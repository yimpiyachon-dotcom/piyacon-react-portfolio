import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Design Thinking Framework",
    body: "Anchored the engagement in a double-diamond framing so stakeholders agreed on the problem space before any interface work. The client arrived asking for 'a better dashboard', but the real constraint was that field telemetry and satellite data were never reconciled into one decision surface.",
    images: [
      "/img/e64544e8d731.webp",
      "/img/d6229950001a.webp",
      "/img/af7201895501.webp",
    ],
  },
  {
    step: "02",
    title: "Product Ecosystem Mapping",
    body: "Mapped how the platform sits between ARV's drone operations, PTTEP's carbon reporting obligations, and the field rangers who actually walk the plots. Defining these relationships early prevented the classic enterprise trap of designing for the buyer while ignoring the daily operator.",
    images: [
      "/img/5b84aa187369.webp",
    ],
  },
  {
    step: "03",
    title: "Competitive Product Analysis",
    body: "Audited existing GIS and carbon-monitoring products to find where each one broke down. The pattern was consistent: tools were excellent at one data type and hostile to the rest, forcing analysts to triangulate across windows. That gap defined our positioning.",
    images: [
      "/img/fd064de035d7.webp",
      "/img/1fc13a0355c1.webp",
      "/img/ec52eb897bf2.webp",
      "/img/7b491fc5feae.webp",
    ],
  },
  {
    step: "04",
    title: "Personas & Journey Mapping",
    body: "Built three role-based personas — carbon auditor, GIS analyst, field ranger — each with a distinct tolerance for data density. The journey map exposed where a single ranger task required jumping across four disconnected tools, which became the primary redesign target.",
    images: [
      "/img/75a1e1cc9d0e.webp",
      "/img/20b60c5b2c68.webp",
    ],
  },
  {
    step: "05",
    title: "Core Problem Statement",
    body: "Distilled research into one falsifiable problem statement rather than a list of feature requests. Framing the challenge as fragmented telemetry preventing timely carbon verification gave the team a shared success criterion to design and test against.",
    images: [
      "/img/71150c6fb943.webp",
    ],
  },
  {
    step: "06",
    title: "Quantitative Survey & Validation",
    body: "Ran structured surveys with the operator group to size which pain points were widespread versus anecdotal. Survey wording went through several revisions — early drafts leaked assumptions that would have confirmed what we already believed instead of testing it. The final instrument produced the baseline numbers later used to measure the redesign.",
    images: [
      "/img/89a23b1c6f55.webp",
      "/img/450fe7105838.webp",
      "/img/713e5b9a1998.webp",
      "/img/76de419dd0e8.webp",
      "/img/203c03003ef7.webp",
    ],
  },
  {
    step: "07",
    title: "Information Architecture",
    body: "Restructured the IA around decisions rather than data sources. Instead of mirroring the backend's satellite/drone/sensor split, screens were grouped by the question the user was answering, with progressive disclosure keeping dense GIS layers one level down.",
    images: [
      "/img/1f9851799d1b.webp",
      "/img/254b4a0a553b.webp",
    ],
  },
  {
    step: "08",
    title: "Wireframing & Hi-Fi Prototypes",
    body: "Moved from low-fidelity flows to hi-fi frames, pressure-testing how much telemetry a single viewport could carry before analysts lost the thread. Layer toggling and map density were the two interactions that went through the most iteration.",
    images: [
      "/img/64cb2e0a37a8.webp",
      "/img/eeecaaf7aefb.webp",
      "/img/0c23da99f09e.webp",
    ],
  },
  {
    step: "09",
    title: "Design System & Token Architecture",
    body: "Engineered BaseBlocksUI as a tokenized component framework — semantic colour tokens, spacing scales, and a dedicated chart-primitives layer so GIS visualisations stayed legible across themes. This is what let 34 components be reused when the platform expanded to two new regions.",
    images: [
      "/img/cd4d11f314ac.webp",
      "/img/83482528aa7f.webp",
      "/img/c83c80528121.webp",
      "/img/c26fd3e089b9.webp",
    ],
  },
  {
    step: "10",
    title: "Final UI Delivery",
    body: "Resolved the system into the production interface: a unified carbon-tracking command centre where satellite imagery, drone telemetry and field reports converge into one auditable view — spanning dashboard, map analysis, plot detail, reporting and admin surfaces. Every screen draws from the token architecture, so visual consistency held without per-screen intervention.",
    images: [
      "/img/29ff7486b121.webp",
      "/img/8543d840cc61.webp",
      "/img/5700efd4b40b.webp",
      "/img/37f2d7178707.webp",
      "/img/e3a051b96bcf.webp",
      "/img/9ef45125d8a8.webp",
      "/img/7afb12494e48.webp",
      "/img/017012cea57b.webp",
    ],
  },
  {
    step: "11",
    title: "Screen Flow & Interactive Prototype",
    body: "With the screens designed, the full flow was assembled and wired into a clickable prototype. Laying the multi-role navigation out end-to-end made structural problems visible that individual screens had hidden — two redundant states were cut here rather than carried into build.",
    images: [
      "/img/8152b47b7af8.webp",
      "/img/40d58e4fd5ab.webp",
    ],
  },
  {
    step: "12",
    title: "Design Spec & Developer Handoff",
    body: "Documented every component with edge-case states, token references and behavioural notes. The spec was written to remove interpretation gaps: no engineer should need to ask what happens when data is missing, stale, or out of range. This is what made the prototype buildable without a translation layer.",
    images: [
      "/img/ec185830aa6b.webp",
    ],
  },
  {
    step: "13",
    title: "Usability Testing & Iteration",
    body: "Put the prototype in front of real operators and measured task completion rather than collecting opinions. Time-on-task and error rate separated genuine friction from simple unfamiliarity, and the findings drove a round of layout and labelling revisions back into the spec before engineering built against it.",
    images: [
      "/img/eab7eaf40650.webp",
      "/img/308bd5a80031.webp",
      "/img/7f752303a445.webp",
      "/img/9701c254b768.webp",
      "/img/b982444cd334.webp",
    ],
  },
  {
    step: "14",
    title: "Gathering Feedback & Synthesis",
    body: "Closed the loop by collecting structured feedback from operators and stakeholders after testing. Reading written responses alongside session findings separated one-off preferences from repeated signals — determining what shipped in this release and what was logged for the next.",
    images: [
      "/img/3976ef32d68a.webp",
      "/img/ab6258e58cce.webp",
      "/img/af00c95d2ec5.webp",
      "/img/af00c95d2ec5.webp",
      "/img/2f3920e302a4.webp",
    ],
  },
];
