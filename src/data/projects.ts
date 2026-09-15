// Case-study content for the nine platform projects. This is the only
// definition; App.tsx renders it and must not keep a copy.
export const projects = [
  {
    id: "smart-forest",
    title: "Smart Forest Platform",
    client: "VARUNA CO., LTD. (ARV / PTTEP)",
    timeline: "1 yr 8 mo · Oct 2024 – May 2026",
    hook: "Smart Forest brings satellite, geospatial, and field data into one platform, helping teams monitor forest conditions, analyze carbon data, and support reporting and verification.",
    role: "UX/UI Designer",
    platform: "Web Application (GIS)",
    industry: "ClimateTech / SaaS",
    stack: ["Figma", "Design Tokens", "GIS Data Viz", "BaseBlocksUI"],
    image: "/img/cover/smart-forest.webp",
    imageAlt: "Aerial forest canopy with GIS digital heatmaps and telemetry overlay",
    badges: [
      { label: "GIS Data Platform", positive: true },
      { label: "12-Screen System", positive: null },
    ],
    kpis: [
      { value: "One Platform", label: "Connected data", sub: "Satellite, GIS, field, and carbon data brought into one workflow." },
      { value: "Layered Views", label: "Progressive disclosure", sub: "From high-level insights to detailed GIS and carbon data." },
      { value: "Design System", label: "Reusable tokens", sub: "Consistent UI patterns that scale as the platform grows." },
    ],
    // This study is written without performance metrics: none of the numbers
    // that used to sit here could be verified, so the sections describe what
    // was designed and what changed instead of claiming a percentage.
    sectionLabels: {
      problemHeading: "Problem & Baseline",
      solutionsHeading: "Key Design Decisions",
      impactHeading: "Impact",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
    },
    problem:
      "Forest monitoring and carbon auditing relied on data spread across satellite, GIS, and field workflows. Analysts had to cross-reference information across different sources, making it harder to understand forest conditions and move from monitoring to reporting.",
    baselineStats: [
      { value: "Multiple data sources", label: "Satellite · GIS · Field · Carbon" },
      { value: "Complex information", label: "Different users needed different levels of detail." },
      { value: "Fragmented workflow", label: "Monitoring, analysis, and reporting were handled across separate steps." },
    ],
    solutions: [
      {
        title: "Integrated Geospatial View",
        body: "Combined multiple map layers into a single workspace so users could explore forest conditions without switching between separate data views.",
      },
      {
        title: "Carbon Analytics Dashboard",
        body: "Structured key carbon and forest indicators into a clearer dashboard, allowing users to understand important information before diving into detailed data.",
      },
      {
        title: "Risk & Monitoring Views",
        body: "Organized monitoring information around important forest conditions and potential areas of concern, making it easier to identify where further investigation was needed.",
      },
      {
        title: "Progressive Disclosure",
        body: "Designed different levels of information so users could start with a high-level overview and progressively explore detailed GIS and carbon data when needed.",
      },
    ],
    impactTable: [
      { metric: "Forest & carbon data", before: "Scattered across multiple sources", after: "Connected in one platform", delta: "Unified" },
      { metric: "Information depth", before: "One level of information", after: "Layered from overview to detail", delta: "Clearer" },
      { metric: "UI consistency", before: "Ad hoc screens", after: "Shared tokens & components", delta: "Scalable" },
      { metric: "Monitoring → reporting", before: "Disconnected steps", after: "Connected workflow", delta: "Connected" },
    ],
    learnings: [
      "Working across product, UX/UI, GIS, and data teams showed me how important shared patterns are when designing a complex data-heavy platform.",
      "Building reusable tokens and components helped maintain consistency as the platform expanded across different screens and workflows.",
      "Progressive disclosure helped balance the needs of users who wanted a quick overview with those who needed deeper GIS and carbon data.",
    ],
  },
  {
    id: "smart-watcher",
    title: "Smart Watcher Platform",
    client: "VARUNA CO., LTD. (ARV)",
    timeline: "1 yr 8 mo · Oct 2024 – May 2026",
    hook: "Field reporting connected with satellite monitoring, helping teams capture ground observations and cross-check incidents with Smart Forest data.",
    // The card shows `hook`; the case study opens with `summary`, which carries the
    // fuller framing of how this platform sits alongside Smart Forest.
    summary:
      "Smart Watcher is a field reporting platform designed to complement Smart Forest's satellite monitoring. It connects field observations with satellite data, giving teams additional context for cross-checking and verifying incidents.",
    role: "Lead UX/UI Designer",
    platform: "Web Application",
    industry: "Field Reporting / Incident Verification",
    stack: ["Figma", "Design System", "GIS Workflow", "Field UX"],
    image: "/img/cover/smart-watcher.webp",
    imageAlt: "Security monitoring control room screens with camera feeds",
    badges: [
      { label: "Field Reporting", positive: true },
      { label: "Incident Verification", positive: null },
    ],
    kpis: [
      {
        value: "Field Reporting",
        label: "Real-world observations",
        sub: "Field officers can report incidents directly from the location, providing information that satellite monitoring cannot capture immediately.",
      },
      {
        value: "Connected Monitoring",
        label: "Smart Forest integration",
        sub: "Field reports can be connected with satellite observations from Smart Forest to support incident verification.",
      },
      {
        value: "Incident Verification",
        label: "Cross-checking data",
        sub: "Combining field observations with satellite data helps teams compare what is happening on the ground with what the monitoring system detects.",
      },
    ],
    // Written without performance metrics: the numbers that used to sit here could
    // not be verified, so each section describes what was designed instead.
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Context",
      problemHeading: "Problem & Baseline",
      solutionsHeading: "Key Design Decisions",
      impactHeading: "Outcomes",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
    },
    problem:
      "Satellite monitoring provides valuable coverage across large forest areas, but it cannot observe the same location continuously. Because satellite revisit cycles create a delay between observations, teams need a way to capture what is happening on the ground in the meantime.",
    baselineStats: [
      {
        value: "Satellite revisit cycle",
        label: "The same area cannot be continuously observed by satellite, creating a gap between monitoring cycles.",
      },
      {
        value: "Limited real-time field context",
        label: "Satellite data can indicate changes, but it does not always confirm what is happening on the ground.",
      },
      {
        value: "Disconnected verification",
        label: "Field observations need to be captured and connected with monitoring data so teams can cross-check incidents.",
      },
    ],
    solutions: [
      {
        title: "Simple Field Reporting",
        body: "Designed a straightforward reporting flow so field officers can quickly capture an incident from the location without navigating unnecessary complexity.",
      },
      {
        title: "Location-Based Reporting",
        body: "Connected reports with location information so each observation could be associated with the area where it occurred.",
      },
      {
        title: "Structured Incident Information",
        body: "Organized report types and supporting information to make field observations easier to understand and compare with monitoring data.",
      },
      {
        title: "Connected Verification Workflow",
        body: "Designed the reporting experience as a complementary layer to Smart Forest, allowing field observations to be used alongside satellite data during incident verification.",
      },
    ],
    impactTable: [
      {
        metric: "Field observations",
        before: "Information depended on separate field communication",
        after: "Incidents can be reported directly from the field",
        delta: "Structured reporting",
      },
      {
        metric: "Satellite monitoring",
        before: "Satellite observations operate on revisit cycles",
        after: "Field reports provide additional ground context between observations",
        delta: "Complementary data",
      },
      {
        metric: "Incident verification",
        before: "Field and monitoring information were harder to compare",
        after: "Field reports can be cross-checked with Smart Forest data",
        delta: "Easier to verify",
      },
      {
        metric: "Reporting workflow",
        before: "Incident information could be fragmented",
        after: "Structured reporting flow with location and incident details",
        delta: "Connected workflow",
      },
    ],
    learnings: [
      "Designing a field reporting product made me think beyond the interface and consider how information moves between people, systems, and real-world conditions.",
      "Working alongside Smart Forest showed me that different data sources do not always need to replace each other. They can provide complementary perspectives when connected through the right workflow.",
      "Designing for field conditions reinforced the importance of keeping reporting flows focused, structured, and easy to complete at the point of observation.",
    ],
  },
  {
    id: "area-22",
    title: "Area 22 IOT Management",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "7 mo · Aug 2023 – Feb 2024",
    hook: "Unified remote gateway configuration and live telemetry back-office managing 400+ industrial IoT nodes.",
    role: "Senior UX/UI Designer",
    platform: "Web Back Office",
    industry: "Industrial IoT / Admin SaaS",
    stack: ["Figma", "Design System", "Hardware Telemetry", "RBAC"],
    image: "/img/cover/area-22.webp",
    imageAlt: "Industrial IoT analytics dashboard with live telemetry and data charts",
    badges: [
      { label: "−62% Setup Time", positive: true },
      { label: "99.4% Node Uptime", positive: true },
    ],
    kpis: [
      { value: "−62%", label: "Node provisioning time", sub: "batch hardware setup per technician" },
      { value: "99.4%", label: "Fleet connectivity health", sub: "zero-packet-loss threshold" },
      { value: "−85%", label: "Outage diagnostic time", sub: "from 3.2 hrs to 28 mins" },
    ],
    problem:
      "Facility technicians had to manually SSH into individual sensor gateways across disparate warehouse and plant sites. Disconnected firmware versioning led to 38% configuration errors, frequent packet drops, and costly on-site engineer dispatches.",
    baselineStats: [
      { value: "45 min", label: "avg. time to provision a single IoT gateway node" },
      { value: "38%", label: "node firmware mismatch rate across client facilities" },
      { value: "3.2 hrs", label: "mean time to locate and diagnose network hardware failure" },
    ],
    solutions: [
      {
        title: "Batch Provisioning Wizard",
        body: "Guided 3-step setup UI allowing technicians to configure and test up to 50 gateways simultaneously with automated ping verification.",
      },
      {
        title: "Network Topology Health Canvas",
        body: "Interactive node canvas displaying mesh connections, signal-to-noise ratios, and battery levels with quick-filtering by facility zone.",
      },
      {
        title: "Remote FOTA Deployment Queue",
        body: "Staged Over-The-Air firmware rollouts with instant rollback mechanisms, preventing device bricking during maintenance windows.",
      },
      {
        title: "Granular RBAC Administration",
        body: "Role-tailored permissions separating plant managers, third-party contractors, and senior system architects.",
      },
    ],
    impactTable: [
      { metric: "Gateway provisioning time", before: "45 min", after: "17 min", delta: "−62%" },
      { metric: "Firmware mismatch incident rate", before: "38%", after: "4%", delta: "−89%" },
      { metric: "Mean time to triage node dropouts", before: "3.2 hrs", after: "28 min", delta: "−85%" },
      { metric: "Field technician task CSAT", before: "3.1 / 5", after: "4.8 / 5", delta: "+55%" },
    ],
    quote: "Batch provisioning used to take our entire weekend. With Area 22, we deploy fifty gateways before lunch with zero script errors.",
    quoteRole: "Lead IoT Hardware Engineer, Happy Three Creation",
    learnings: [
      "Field technicians often wear protective gloves and view ruggedized tablets outdoors; UI required minimum 48px touch targets and high-contrast telemetry text.",
      "Constructed a reusable data table component capable of handling 5,000+ live rows with virtual scrolling and instant column filtering.",
    ],
  },
  {
    id: "kanna-app",
    title: "Kanna Application & CMS",
    client: "VARUNA CO., LTD. (ARV / PTTEP)",
    timeline: "1 yr 3 mo · June 2022 – Aug 2023",
    hook: "AI-driven agricultural field diagnostics paired with a geospatial back-office for 15,000+ smallholder farmers.",
    role: "UX/UI Designer",
    platform: "Mobile App + Web CMS",
    industry: "Smart Agriculture / AgriTech",
    stack: ["Figma", "User Research", "Offline UX", "Mobile Design"],
    image: "/img/cover/kanna-app.webp",
    imageAlt: "Agricultural sensor technology and smartphone plant disease inspection",
    badges: [
      { label: "+91% Diagnostic Accuracy", positive: true },
      { label: "15k+ Farmers", positive: null },
    ],
    kpis: [
      { value: "+91%", label: "Crop disease triage rate", sub: "via offline on-device camera ML" },
      { value: "−40%", label: "Post-harvest crop loss", sub: "following preventative spray guides" },
      { value: "4.7★", label: "Farmer app rating", sub: "15,000+ verified smallholder accounts" },
    ],
    problem:
      "Smallholder farmers faced severe seasonal crop losses from pests and fungus without immediate agronomist support. Meanwhile, Varuna’s agricultural coordinators lacked field data to coordinate regional drone-spraying operations and resource allocation.",
    baselineStats: [
      { value: "5–7 days", label: "avg. turnaround for agronomists to visit and diagnose field disease" },
      { value: "72 hrs", label: "time needed to coordinate emergency drone spray missions" },
      { value: "36%", label: "historical adherence to chemical prevention schedules" },
    ],
    solutions: [
      {
        title: "High-Sunlight Mobile Inspection Flow",
        body: "Designed ultra-high-contrast UI with large visual cards and voice prompts, tailored for non-tech-savvy farmers operating in direct sunlight.",
      },
      {
        title: "Offline-First Disease Scanner",
        body: "Instant on-device ML leaf photo analysis that delivers treatment recommendations even when disconnected from cellular coverage in remote fields.",
      },
      {
        title: "Agronomist GIS Back Office",
        body: "Geographic dashboard tracking regional outbreak clusters and scheduling drone flights to contain pest outbreaks before spreading.",
      },
      {
        title: "Localized Calendar & Spray Tracker",
        body: "Icon-driven weather warnings and countdown timelines reminding farmers when to irrigate and apply organic fertilizers.",
      },
    ],
    impactTable: [
      { metric: "Disease diagnosis turnaround", before: "5–7 days", after: "< 30 sec", delta: "−99%" },
      { metric: "Back-office drone mission dispatch", before: "72 hrs", after: "4 hrs", delta: "−94%" },
      { metric: "Preventative schedule adherence", before: "36%", after: "82%", delta: "+128%" },
      { metric: "Agronomist weekly case resolution", before: "14 cases", after: "68 cases", delta: "+385%" },
    ],
    quote: "Before Kanna, a leaf spot could ruin half our harvest before anyone inspected it. Now, taking a photo tells me what to do immediately.",
    quoteRole: "Participating Agricultural Lead, Suphanburi Demonstration Farm",
    learnings: [
      "Conducted extensive in-field contextual inquiries: discovered complex typography was unusable under harsh sunlight, leading to an icon-first visual grammar.",
      "Designed an offline local-storage sync queue that silently syncs disease photos once mobile signal is re-acquired.",
    ],
  },
  {
    id: "dr-smoothlife",
    title: "Dr. Smoothlife Platform",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "7 mo · Aug 2023 – Feb 2024",
    hook: "Integrated telehealth booking, digital prescription fulfillment, and doctor clinical workspace.",
    role: "Senior UX/UI Designer",
    platform: "Mobile App + Web Admin CMS",
    industry: "HealthTech / Telemedicine",
    stack: ["Figma", "Design Tokens", "Design System", "Telehealth UX"],
    image: "/img/cover/dr-smoothlife.webp",
    imageAlt: "Doctor utilizing telemedicine workspace and digital consultation platform",
    badges: [
      { label: "+68% Call Completion", positive: true },
      { label: "−52% Cart Drop-off", positive: true },
    ],
    kpis: [
      { value: "+68%", label: "Consultation completion", sub: "zero tech dropouts during calls" },
      { value: "−52%", label: "Pharmacy cart abandonment", sub: "via in-app 1-tap fulfillment" },
      { value: "3.2 min", label: "Patient-to-doctor connection", sub: "down from 14.8 min baseline" },
    ],
    problem:
      "Patients endured long virtual queue times, opaque symptom intake forms, and disconnected pharmacy handoffs that caused over 60% of digital prescriptions to go unfulfilled. Physicians were slowed down by fragmented desktop software.",
    baselineStats: [
      { value: "14.8 min", label: "avg. patient waiting time in virtual consultation queue" },
      { value: "51%", label: "intake form drop-off before connecting to a physician" },
      { value: "8.5 min", label: "physician time spent manually logging EHR notes post-call" },
    ],
    solutions: [
      {
        title: "90-Second Rapid Medical Intake",
        body: "Visual symptom picker and automated microphone/camera test ensuring patients are prepped and verified before the physician connects.",
      },
      {
        title: "Unified Clinical Workspace",
        body: "Split-screen doctor desktop UI featuring video consultation on the left and live EHR record + 1-click digital prescribing on the right.",
      },
      {
        title: "Direct-to-Door Prescription Pipeline",
        body: "Automated routing of digital prescriptions to the nearest certified pharmacy with real-time courier tracking in the patient app.",
      },
      {
        title: "Multi-Language Healthcare Portal",
        body: "Full Thai & English language parity with accessible font sizing compliant with WCAG AAA contrast standards.",
      },
    ],
    impactTable: [
      { metric: "Patient intake form completion", before: "51%", after: "89%", delta: "+74%" },
      { metric: "Pre-consultation queue wait time", before: "14.8 min", after: "3.2 min", delta: "−78%" },
      { metric: "Physician charting time per patient", before: "8.5 min", after: "2.1 min", delta: "−75%" },
      { metric: "Digital prescription fulfillment rate", before: "38%", after: "79%", delta: "+108%" },
    ],
    quote: "The split-screen clinical UI cut our consultation logging time by 75%. I can focus on listening to the patient instead of fighting EHR tabs.",
    quoteRole: "Consulting Medical Director, Smoothlife Clinic Network",
    learnings: [
      "Healthcare applications require strict error prevention: added double-confirmation modals with dosage sanity checks to prevent accidental medication over-prescribing.",
      "Created an animated connection-status indicator during video calls to reduce patient anxiety during momentary cellular jitter.",
    ],
  },
  {
    id: "th-health",
    title: "TH Health Platform",
    client: "Thonburi Health Group (THG)",
    timeline: "4 weeks · Feb 2024",
    hook: "Medical jargon replaced with symptom-first discovery — turning a confusing pharmacy catalogue into a guided health checkout.",
    role: "UX/UI Designer",
    platform: "Responsive E-Commerce Website",
    industry: "Healthcare / E-Commerce",
    stack: ["Figma", "Design Tokens", "IA Restructure", "Responsive Web"],
    image: "/img/cover/th-health.webp",
    imageAlt: "TH Health symptom-based health e-commerce platform on desktop",
    badges: [
      { label: "Symptom-First IA", positive: null },
      { label: "Multi-Gateway Checkout", positive: null },
    ],
    kpis: [
      { value: "↓ Friction", label: "Symptom-based discovery", sub: "products mapped to symptoms, not chemical names" },
      { value: "↑ Conversion", label: "Checkout completion", sub: "flexible multi-gateway payment options" },
      { value: "100%", label: "Responsive coverage", sub: "consistent desktop & mobile web experience" },
    ],
    problem:
      "Shopping for health products online is overwhelming when items are grouped by medical jargon or chemical ingredients. This navigation friction drove high cart abandonment. A rigid, limited payment infrastructure compounded the problem, creating distrust and frustration at the final checkout phase.",
    baselineStats: [
      { value: "Jargon-led", label: "catalogue grouped by chemical name, not symptom" },
      { value: "Rigid", label: "checkout limited to few payment methods" },
      { value: "Mobile-heavy", label: "most browsing happens on phones seeking quick relief" },
    ],
    solutions: [
      {
        title: "Symptom-Driven Navigation",
        body: "Restructured the Information Architecture to map products directly to common health symptoms, so users searching for relief find remedies without knowing drug names.",
      },
      {
        title: "Frictionless Multi-Gateway Checkout",
        body: "Redesigned the checkout funnel to support multiple flexible payment options, streamlining the transaction flow and cutting unnecessary input fields to minimise drop-off.",
      },
      {
        title: "Optimized E-Commerce Journey",
        body: "Refined the full user flow from landing page to order confirmation, delivering a cohesive, clean and distraction-free shopping experience.",
      },
      {
        title: "Responsive & Accessible Layouts",
        body: "Implemented a mobile-first responsive framework with attention to readability, accessibility compliance and tap-target optimisation across all viewports.",
      },
    ],
    impactTable: [
      { metric: "Product discovery model", before: "Chemical / brand name", after: "Symptom-based", delta: "Restructured" },
      { metric: "Payment options at checkout", before: "Limited gateways", after: "Multi-gateway", delta: "Expanded" },
      { metric: "Checkout input fields", before: "Long form", after: "Reduced set", delta: "Streamlined" },
      { metric: "Viewport support", before: "Desktop-led", after: "Mobile-first responsive", delta: "Full coverage" },
    ],
    quote: "Users don't search for a medicine name — they search for how they feel. Once the catalogue spoke that language, everything downstream got easier.",
    quoteRole: "Design rationale · TH Health",
    learnings: [
      "Users search by symptom, not by product name — IA that mirrors user vocabulary beats IA that mirrors internal catalogue structure.",
      "Checkout anxiety is a payment-flexibility problem as much as a form-length problem; both had to be solved together.",
      "In healthcare commerce, trust is built through clear product detail and transparent pricing before any visual polish matters.",
    ],
  },
  {
    id: "land-monitoring",
    title: "VLM Land Monitoring Platform",
    client: "VARUNA CO., LTD.",
    timeline: "6 months · Mar 2024 – Aug 2024",
    hook: "Dense satellite climate metrics — NDVI, carbon, hot spots — translated into one customizable geospatial dashboard.",
    role: "UX/UI Designer",
    platform: "Web Dashboard (Responsive Desktop)",
    industry: "ClimateTech / GIS",
    stack: ["Figma", "GIS Data Viz", "Design System", "Dashboard UX"],
    image: "/img/cover/land-monitoring.webp",
    imageAlt: "VLM satellite-based forest monitoring and environmental analytics dashboard",
    badges: [
      { label: "Geospatial Viz", positive: null },
      { label: "Modular Dashboard", positive: null },
    ],
    kpis: [
      { value: "1 view", label: "Unified metric dashboard", sub: "vs. fragmented single-purpose GIS tools" },
      { value: "↓ Triangulation", label: "Cross-reference time", sub: "multiple metrics in one viewport" },
      { value: "Real-time", label: "Hot spot & carbon tracking", sub: "prompt incident response workflow" },
    ],
    problem:
      "Environmental data and satellite imagery are complex, non-linear and dense. Analysts struggled with fragmented tools that failed to correlate multiple metrics, delaying response to critical changes such as deforestation, hot spot outbreaks, or sudden drops in carbon storage capacity.",
    baselineStats: [
      { value: "Overload", label: "simultaneous data layers caused visual fatigue" },
      { value: "Rigid", label: "traditional GIS tools hard to toggle between layers" },
      { value: "Varied", label: "each org prioritises a different core metric" },
    ],
    solutions: [
      {
        title: "Intuitive Geospatial Visualization",
        body: "Built a clean, multi-layered interactive map interface that simplifies interpretation of dense satellite metrics like NDVI and carbon sequestration without sacrificing scientific precision.",
      },
      {
        title: "Customizable Modular Dashboards",
        body: "Designed a widget-based viewport letting users pin, rearrange and focus on the environmental indicators relevant to their role — auditors on sequestration, rangers on hot spots.",
      },
      {
        title: "Real-Time Alert & Tracking System",
        body: "Integrated an automated real-time data streaming layout highlighting immediate changes in forest conditions to support prompt risk mitigation.",
      },
      {
        title: "Frictionless Interaction Architecture",
        body: "Re-architected navigation for smooth one-click toggling between climate, terrain and satellite data layers.",
      },
    ],
    impactTable: [
      { metric: "Data layer interaction", before: "Rigid GIS toggling", after: "One-click layer switch", delta: "Simplified" },
      { metric: "Dashboard layout", before: "Fixed view", after: "User-customizable widgets", delta: "Modular" },
      { metric: "Metric correlation", before: "Multiple tools", after: "Single viewport", delta: "Consolidated" },
      { metric: "Change detection", before: "Manual review", after: "Real-time alerts", delta: "Automated" },
    ],
    quote: "Different organisations care about different numbers. The dashboard had to let a carbon auditor and a forest ranger both feel it was built for them.",
    quoteRole: "Design rationale · VLM Platform",
    learnings: [
      "Showing every satellite layer at once causes cognitive overload — progressive disclosure and user-controlled density were essential.",
      "Role-based metric prioritisation mattered more than a single 'optimal' default dashboard layout.",
      "Scientific precision and visual simplicity are not in conflict if the visual system encodes uncertainty honestly.",
    ],
  },
  {
    id: "all-about-you",
    title: "ALL ABOUT YOU Platform",
    client: "ALL ABOUT YOU CO., LTD.",
    timeline: "1 yr 4 mo · Mar 2021 – Jun 2022",
    hook: "Online and in-store loyalty finally speaking to each other — an omnichannel skincare CRM synced to ERP and retail POS.",
    role: "Lead UX/UI Designer",
    platform: "Responsive E-Commerce Website",
    industry: "Retail / Beauty E-Commerce",
    stack: ["Figma", "Design System", "CRM UX", "Branding"],
    image: "/img/cover/all-about-you.webp",
    imageAlt: "ALL ABOUT YOU omnichannel skincare e-commerce and CRM platform",
    badges: [
      { label: "Omnichannel CRM", positive: null },
      { label: "Branding Refresh", positive: null },
    ],
    kpis: [
      { value: "O2O", label: "Unified loyalty sync", sub: "points & coupons valid online and in-store" },
      { value: "↑ Engagement", label: "CRM participation", sub: "simplified points and coupon visibility" },
      { value: "Modernized", label: "Brand identity", sub: "premium, contemporary skincare positioning" },
    ],
    problem:
      "The original platform combined outdated branding with a fragmented experience. Offline and online journeys were disconnected — users could not sync membership tiers, track loyalty points, or redeem rewards flexibly between the website and physical retail branches, causing drop-offs and lost retention.",
    baselineStats: [
      { value: "Disconnected", label: "online and in-store rewards did not sync" },
      { value: "Outdated", label: "branding failed to signal premium skincare" },
      { value: "Low engagement", label: "loyalty dashboards hard to navigate" },
    ],
    solutions: [
      {
        title: "Branding Modernization",
        body: "Reimagined the visual design system with a clean, contemporary layout that elevates product discovery and matches the expectations of modern skincare consumers.",
      },
      {
        title: "Unified CRM Dashboard",
        body: "Designed an intuitive loyalty portal where users monitor membership tier status, track accumulated points and manage coupons in one clear view.",
      },
      {
        title: "Frictionless Omnichannel Flow",
        body: "Created an online-to-offline checkout architecture allowing unified coupon redemption and real-time points syncing with ERP and store POS systems.",
      },
      {
        title: "Optimized E-Commerce Journey",
        body: "Streamlined responsive cart and checkout flows to maximise conversion across desktop and mobile web.",
      },
    ],
    impactTable: [
      { metric: "Loyalty points sync", before: "Online only", after: "Online + in-store", delta: "Unified" },
      { metric: "Coupon redemption", before: "Channel-locked", after: "Cross-channel", delta: "Omnichannel" },
      { metric: "Loyalty dashboard", before: "Hard to navigate", after: "Single clear portal", delta: "Simplified" },
      { metric: "Visual identity", before: "Outdated", after: "Modern premium system", delta: "Rebranded" },
    ],
    quote: "Points earned online that can't be used in the shop aren't a reward — they're a broken promise. Fixing that was the whole project.",
    quoteRole: "Design rationale · ALL ABOUT YOU",
    learnings: [
      "Loyalty fragmentation between web and physical retail was the single biggest driver of churn — far more than checkout UX alone.",
      "Branding modernisation directly affected perceived trust in a category where product credibility is everything.",
      "Designing for ERP and POS integration meant the interface had to reflect real sync states, not assume instant consistency.",
    ],
  },
  {
    id: "embark-real-estate",
    title: "Embark Real Estate Platform",
    client: "Embark Real Estate",
    timeline: "4 weeks · May 2024",
    hook: "Location anxiety solved in-platform — property listings fused with a neighborhood intelligence map so buyers stop tab-hopping.",
    role: "UX/UI Designer",
    platform: "Responsive Web & Mobile Web",
    industry: "PropTech / Real Estate",
    stack: ["Figma", "Map UX", "Component Library", "Responsive Web"],
    image: "/img/cover/embark-real-estate.webp",
    imageAlt: "Embark neighborhood-centric real estate brokerage platform",
    badges: [
      { label: "Neighborhood Map", positive: null },
      { label: "Progressive Disclosure", positive: null },
    ],
    kpis: [
      { value: "1 journey", label: "Discovery + neighborhood", sub: "eliminated cross-app tab fatigue" },
      { value: "↑ Confidence", label: "Informed decisions", sub: "address data turned into lifestyle context" },
      { value: "↑ Leads", label: "Broker contact points", sub: "contextual touchpoints across screen sizes" },
    ],
    problem:
      "Property hunters suffer from location anxiety. Standard platforms focus on structural specs — bedrooms, price, square footage — but isolate the listing from its neighborhood context. Users were forced across multiple tabs and map apps to research schools, supermarkets or transit, creating a fragmented and exhausting decision workflow.",
    baselineStats: [
      { value: "Tab fatigue", label: "listings cross-checked against external map apps" },
      { value: "Spec-only", label: "neighborhood lifestyle context missing" },
      { value: "Drop-off", label: "users left property context to contact brokers" },
    ],
    solutions: [
      {
        title: "\"Find the Neighborhood for You\"",
        body: "Designed an interactive map-driven discovery module overlaying real-time district amenities, transport links and lifestyle points of interest directly onto the property layout.",
      },
      {
        title: "Structured Information Architecture",
        body: "Re-engineered property detail sheets with clear visual hierarchy and progressive disclosure, presenting dense specs and media without overwhelming the user.",
      },
      {
        title: "Contextual Agent Communication",
        body: "Integrated low-friction contact actions inside the viewing experience, giving single-click access to verified brokers without leaving the listing.",
      },
      {
        title: "Responsive Layout Optimization",
        body: "Implemented a mobile-first framework so map interactions, filters and galleries scale fluidly from desktop down to smartphone.",
      },
    ],
    impactTable: [
      { metric: "Neighborhood research", before: "External map apps", after: "In-platform module", delta: "Consolidated" },
      { metric: "Property detail density", before: "Flat spec list", after: "Progressive disclosure", delta: "Restructured" },
      { metric: "Broker contact", before: "Separate flow", after: "Contextual in-listing", delta: "Inline" },
      { metric: "Mobile map interaction", before: "Desktop-led", after: "Mobile-first responsive", delta: "Optimized" },
    ],
    quote: "Buyers weren't choosing a floor plan — they were choosing a daily commute, a coffee shop, a school run. The map had to say that.",
    quoteRole: "Design rationale · Embark Real Estate",
    learnings: [
      "Lifestyle proximity factors influenced final decisions more heavily than structural specs did.",
      "Consolidating external research into the platform removed cognitive load that no amount of listing-page polish could fix.",
      "Communication touchpoints must live where the decision happens; moving users out of context reliably lost the lead.",
    ],
  },
];
