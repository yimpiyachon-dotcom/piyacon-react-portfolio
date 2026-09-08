// Design-process walkthroughs, keyed by project id. A project with no entry
// here simply renders without the Design Process tab.
export const processSteps = {
  "smart-forest": [
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
  ],
  "smart-watcher": [
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
  ],
  "area-22": [
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
  ],
  "kanna-app": [
    {
      step: "01",
      title: "UX Process Framing",
      body: "Set the process for a product whose users are smallholder farmers, not office workers — many on low-end devices, in the field, with intermittent connectivity. That constraint shaped every decision downstream: what could be assumed, what had to degrade gracefully, and how much a screen could ask of someone standing in a plot.",
      images: [
        "/img/9de6929de782.webp",
      ],
    },
    {
      step: "02",
      title: "Design System Foundation",
      body: "Built a token-driven system sized for mobile-first agricultural use — large touch targets, high contrast for outdoor daylight, and Thai typography that stays legible at small sizes. Consistency here directly reduced onboarding friction for first-time smartphone users.",
      images: [
        "/img/73e3a31326fc.webp",
      ],
    },
    {
      step: "03",
      title: "Onboarding, Homepage & Content",
      body: "Designed the welcome flow, homepage and news surfaces alongside their full state coverage — loading, 500 errors, unauthorised, no-internet, request timeout and coming-soon. For a field app, the offline and failure states are not edge cases; they are the everyday experience.",
      images: [
        "/img/39898510db1b.webp",
        "/img/e1f7b19c50ad.webp",
        "/img/dd8212b760be.webp",
      ],
    },
    {
      step: "04",
      title: "Farm Plot & Project Management",
      body: "Structured how farmers register plots, join projects and manage participation. Flows were designed for both directions — joining a project and leaving one — including the empty state where a farmer has no plots registered yet.",
      images: [
        "/img/50f4d93dcc66.webp",
        "/img/7ea7b94a0902.webp",
        "/img/e740bb35c7d5.webp",
        "/img/46c9bd524978.webp",
      ],
    },
    {
      step: "05",
      title: "Activity Tracking & Cultivation Records",
      body: "Designed the activity logging module where farmers record cultivation events over a season. Screen-flow diagrams and hand-sketched IA were used to compress a long, repetitive data-entry task into something completable on a phone between field rounds.",
      images: [
        "/img/a42899b7d00f.webp",
        "/img/353d7b0723a0.webp",
        "/img/50998c200d31.webp",
      ],
    },
    {
      step: "06",
      title: "Utility & Conversion Tools",
      body: "Added practical in-app tools including unit conversion for length and area measurements. Thai agricultural units sit alongside metric in daily use, so conversion was built into the product rather than left as something farmers work out separately.",
      images: [
        "/img/d7a7b54106a5.webp",
        "/img/d71c9b31361a.webp",
        "/img/e698f740f168.webp",
      ],
    },
    {
      step: "07",
      title: "Notifications & Account Management",
      body: "Designed alerting, profile and account surfaces that connect the mobile app to the geospatial back-office. Notifications had to be specific enough to act on without becoming noise a farmer learns to dismiss.",
      images: [
        "/img/b582ccd9f289.webp",
        "/img/47d2345ea0ca.webp",
        "/img/6e76036f0372.webp",
      ],
    },
    {
      step: "08",
      title: "Final UI & Launch",
      body: "Shipped to the App Store and Google Play — an AI-driven field diagnostics app paired with a geospatial CMS, serving 15,000+ smallholder farmers under the KANNA by Varuna brand.",
      images: [
        "/img/c70518826907.webp",
        "/img/520478b35168.webp",
      ],
    },
  ],
  "dr-smoothlife": [
    {
      step: "01",
      title: "Telemedicine User Flow Architecture",
      body: "Mapped the telehealth journey as parallel tracks — what the patient experiences above the line, what the system does below it. Scenario-based flows covered the branching realities of telemedicine: consultation with prescription dispensing, delivery-area coverage limits, and the fallback paths when a case cannot be handled remotely.",
      images: [
        "/img/cbb2e9901c98.webp",
        "/img/63477afa21d6.webp",
        "/img/e7f29eff3689.webp",
      ],
    },
    {
      step: "02",
      title: "Design System Foundation",
      body: "Built a token-driven system spanning mobile, tablet and desktop. In a healthcare product the system carries clinical weight — status, urgency and prescription state have to read identically whether a patient sees them on a phone or a doctor reads them on a workstation.",
      images: [
        "/img/309c04fe04e9.webp",
      ],
    },
    {
      step: "03",
      title: "Responsive Patient Experience",
      body: "Designed the patient-facing surfaces across desktop, tablet and mobile breakpoints rather than shrinking one layout into the others. Each viewport got a navigation model that fits how it is actually held and used.",
      images: [
        "/img/7686e6167464.webp",
        "/img/d77ddb8c7a31.webp",
      ],
    },
    {
      step: "04",
      title: "Telepharma & Telemed Journeys",
      body: "Detailed the two core service paths — remote consultation and digital prescription fulfilment — from doctor discovery through video consult to medication delivery. Laying both journeys out in full exposed where they diverge and where they can share components.",
      images: [
        "/img/573999861f34.webp",
        "/img/b12fa236114a.webp",
        "/img/d5df024500c9.webp",
      ],
    },
    {
      step: "05",
      title: "Logistics & Fulfilment Back-Office",
      body: "Designed the admin surfaces governing delivery: shipping fee rules, coverage zones and rate configuration. Prescription delivery is where telemedicine either works or quietly fails, so these operational tools were treated as core product.",
      images: [
        "/img/0f273f4608bd.webp",
        "/img/125a36fbbeab.webp",
      ],
    },
    {
      step: "06",
      title: "Order & Prescription Management",
      body: "Built the CMS workflows for order handling — review, status transitions, and itemised prescription detail. Screens were structured so an operator can reconstruct exactly what was prescribed, dispensed and shipped without leaving the record.",
      images: [
        "/img/e468522152cd.webp",
        "/img/65c7f86eba73.webp",
      ],
    },
    {
      step: "07",
      title: "Exception Handling & Cancellations",
      body: "Designed the cancellation and refund flows, including partial item cancellation within an order. In pharmacy fulfilment the exception path is frequent enough that leaving it undesigned would have pushed the work onto support staff.",
      images: [
        "/img/0cfb8c44e356.webp",
        "/img/5600db3e620c.webp",
      ],
    },
  ],
  "th-health": [
    {
      step: "01",
      title: "Screen Flow Architecture",
      body: "Laid the whole platform out as one connected flow before designing individual pages. Mapping browse, product detail, cart, checkout, account and order history in a single view showed how far a customer travels between finding a remedy and paying for it — and where that path could be shortened.",
      images: [
        "/img/fd64221933f3.webp",
      ],
    },
    {
      step: "02",
      title: "Core Marketing & Landing Pages",
      body: "Designed the homepage, promotions, article and about surfaces that carry the brand and drive acquisition. These pages had to establish credibility quickly: in health commerce a customer decides whether to trust the seller before they evaluate any product.",
      images: [
        "/img/37ac5191256f.webp",
      ],
    },
    {
      step: "03",
      title: "Product Discovery & Detail",
      body: "Built the catalogue browsing, filtering and product detail templates. Detail pages were structured so dosage, indication and pricing are readable without scrolling past marketing copy — the information a customer actually needs to decide comes first.",
      images: [
        "/img/979c29af40b1.webp",
      ],
    },
    {
      step: "04",
      title: "Health Packages & Content Pages",
      body: "Designed the health check-up package pages and long-form editorial content. Packages are comparison-heavy purchases, so pricing tables and inclusions were laid out to be scanned side-by-side rather than read sequentially.",
      images: [
        "/img/9a2046c709b6.webp",
      ],
    },
    {
      step: "05",
      title: "Account & Member Management",
      body: "Designed member registration, profile management and address book flows, including inline validation and success feedback. Reducing form friction here directly affects whether a first-time buyer completes their first order.",
      images: [
        "/img/f4a43beda2c0.webp",
        "/img/2f579c6f4c70.webp",
      ],
    },
    {
      step: "06",
      title: "Wishlist & Saved Products",
      body: "Built the saved-products surface so customers can hold items across sessions. For repeat medication and supplement purchases this doubles as a personal reorder list, not just a shopping convenience.",
      images: [
        "/img/c153191239da.webp",
      ],
    },
    {
      step: "07",
      title: "Checkout & Payment Confirmation",
      body: "Designed the bank transfer flow with slip upload, including the error state when a required file is missing. Thai e-commerce still runs heavily on transfer-and-confirm, so this path needed the same care usually reserved for card checkout.",
      images: [
        "/img/306c114fb44d.webp",
      ],
    },
    {
      step: "08",
      title: "Order History & Fulfilment Tracking",
      body: "Built order history with clear payment-status states and a full order summary covering items, delivery details and QR payment. Customers can reconstruct exactly what they ordered and where it stands without contacting support.",
      images: [
        "/img/3c1e43570c9d.webp",
      ],
    },
    {
      step: "09",
      title: "Kiosk & Mobile Touchpoint Design",
      body: "Resolved the patient-facing experience into two additional touchpoints: a kiosk format with a vertical scan-and-browse layout anchored to a LINE QR handoff, and a mobile-optimised product catalogue with a persistent bottom action bar. Both surfaces were designed for low-friction discovery — customers who arrive at a clinic or pharmacy kiosk have already decided to buy; the interface just needs to get out of the way.",
      images: [
        "/img/c27496b5d985.webp",
      ],
    },
  ],
  "land-monitoring": [
    {
      step: "01",
      title: "Brand & Landing Page Design",
      body: "Designed the VLM marketing surface that has to explain a geospatial carbon product to buyers who are not GIS specialists. Satellite imagery and 3D data-layer illustrations were used to make an abstract remote-sensing capability legible before a prospect ever sees the platform.",
      images: [
        "/img/3dde92b39270.webp",
      ],
    },
    {
      step: "02",
      title: "Authentication & Account Flows",
      body: "Built the full account lifecycle — register, email verification, log in, forgot password and profile — including the error and expired-link states. For a platform holding regulated carbon data, a clear account boundary is part of the product's credibility, not just plumbing.",
      images: [
        "/img/d4d03caac3b5.webp",
      ],
    },
    {
      step: "03",
      title: "Analytical Dashboard Design",
      body: "Designed the per-plot analysis view where biomass, carbon sequestration, NDVI, precipitation, solar radiation, temperature and elevation each get a dedicated read. Every metric needed its own chart treatment — a bar comparison, a time series, or a colour-ramped map — rather than forcing one visual language onto different data shapes.",
      images: [
        "/img/bcee5b6ef5ad.webp",
      ],
    },
    {
      step: "04",
      title: "Geospatial Layer System",
      body: "Built the full map-layer feature set: switching between biomass, NDVI, temperature, precipitation, hot spot and elevation overlays on one continuous map. The design problem was keeping the base map readable while a colour-ramped raster sits on top of it.",
      images: [
        "/img/7065d8ee9d23.webp",
      ],
    },
    {
      step: "05",
      title: "Project & Plot Management",
      body: "Designed the multi-project workspace where users filter between farms, inspect plot boundaries against high-resolution imagery, and read the area breakdown table alongside the map. The linked mini-map keeps regional context while the main view is zoomed into a single parcel.",
      images: [
        "/img/06faf1b6ffab.webp",
        "/img/7c5dd9518c5e.webp",
      ],
    },
    {
      step: "06",
      title: "Hot Spot Detection & Zoom Behaviour",
      body: "Specified marker clustering across six zoom levels so hot spot density stays interpretable from national view down to a single district. Without a defined clustering rule, fire and anomaly markers collapse into an unreadable mass at country scale.",
      images: [
        "/img/7b76b00d5486.webp",
        "/img/fc66130a776a.webp",
      ],
    },
    {
      step: "07",
      title: "Provincial Reporting & Summary Views",
      body: "Designed the choropleth reporting layer with province-level breakdowns and proportional summaries. These are the screens that get exported into carbon reporting, so the table and chart had to stay legible outside the interface.",
      images: [
        "/img/bf22b7b56636.webp",
      ],
    },
  ],
  // Ordered by source filename (1, 2, 4, 5, 6, 7, 8, 9). File 3 was a corrupt
  // export and is not yet replaced, so its step is missing from this sequence.
  "all-about-you": [
    {
      step: "01",
      title: "Homepage Architecture — Wireframe to UI",
      body: "Blocked out the homepage as greybox wireframes for desktop and mobile before any visual design, so the merchandising hierarchy — flash sale, new brands, best sellers, brand promotions, all categories — was settled first. The finished screens keep that exact skeleton, which is what let layout debates get resolved on the wireframe instead of on finished UI.",
      images: ["/img/process/all-about-you/1.webp"],
    },
    {
      step: "02",
      title: "Brand & Product Listing",
      body: "Designed the brand landing and product listing pages across breakpoints. Desktop pairs the brand story banner with a dense product grid; on mobile the filter set moves into a full-screen sheet and the category tabs pin to the top while the grid scrolls beneath, so browsing a long catalogue on a phone never loses the filters.",
      images: ["/img/process/all-about-you/2.webp"],
    },
    {
      step: "03",
      title: "Product Detail Page",
      body: "Resolved the desktop product page and its states: the buy box and gallery up top, then the brand's own ingredient and how-to-use storytelling, the full ingredient list, and a 4.2-star review section with filter chips and customer photos. The variants cover the review-with-photo layout and the active write-a-review state, so the page was signed off with its interactions shown rather than described.",
      images: ["/img/process/all-about-you/3.webp"],
    },
    {
      step: "04",
      title: "Product Detail Flow",
      body: "Mapped the mobile product detail journey end to end: image gallery, share sheet, ingredient and how-to-use content, the ratings breakdown, the write-a-review modal, and the related-products rail that closes the loop back into browsing. Laying the branches out side by side exposed which review states needed their own screen rather than an inline expand.",
      images: ["/img/process/all-about-you/4.webp"],
    },
    {
      step: "05",
      title: "Desktop Checkout & Coupon Flow",
      body: "Charted the desktop purchase path from cart through coupon selection, points redemption, payment and confirmation — including the pop-up branches for applying a code and for failed redemption. Drawing every dialogue as its own node made it clear where the flow doubled back and which confirmations could be merged.",
      images: ["/img/process/all-about-you/5.webp"],
    },
    {
      step: "06",
      title: "Mobile Checkout & Redemption Flow",
      body: "The same journey rebuilt for mobile, where the coupon drawer, points balance and order summary compete for a much smaller viewport. Redemption was split into discrete steps — select reward, confirm points, success — rather than stacked into one screen, so the user always knows how many points a step will spend.",
      images: ["/img/process/all-about-you/6.webp"],
    },
    {
      step: "07",
      title: "Checkout Screen Set",
      body: "The resolved checkout screens: a three-step progress header across shipping details, payment method and order summary, with the cart contents held in a persistent right-hand panel so the total never leaves view. Includes the card-entry modal and the completed-order receipt with tracking reference.",
      images: ["/img/process/all-about-you/7.webp"],
    },
    {
      step: "08",
      title: "Loyalty & CRM Flow",
      body: "The membership side of the platform: main menu, points balance, reward redemption, my-coupons wallet, in-store barcode, member tier card and points history. The barcode screen is the hinge of the omnichannel promise — it is what makes an online balance spendable at a physical branch.",
      images: ["/img/process/all-about-you/8.webp"],
    },
    {
      step: "09",
      title: "Annotated Flow Handoff",
      body: "The developer-facing version of the desktop flow, with Figma frame names kept visible on every node so engineering could trace any screen in the build back to its source frame. Annotations call out the promo-code path and which dialogues are shared between branches.",
      images: ["/img/process/all-about-you/9.webp"],
    },
  ],

};
