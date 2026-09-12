// Case-study content for the nine platform projects. This is the only
// definition; App.tsx renders it and must not keep a copy.
export const projects = [
  {
    id: "smart-forest",
    title: "Smart Forest Platform",
    client: "VARUNA CO., LTD. (ARV / PTTEP)",
    timeline: "1 yr 8 mo · Oct 2024 – May 2026",
    hook: "Fragmented satellite & drone field telemetry unified into one carbon-tracking GIS command center.",
    role: "Lead UX/UI Designer",
    platform: "Web Application (GIS)",
    industry: "ClimateTech / SaaS",
    stack: ["Figma", "Design Tokens", "GIS Data Viz", "BaseBlocksUI"],
    image: "/img/cover/smart-forest.webp",
    imageAlt: "Aerial forest canopy with GIS digital heatmaps and telemetry overlay",
    badges: [
      { label: "−58% Audit Time", positive: true },
      { label: "12-Screen System", positive: null },
    ],
    kpis: [
      { value: "−58%", label: "Field survey dependency", sub: "audit hours reduced per month" },
      { value: "+73%", label: "Task completion rate", sub: "compliance verification workflow" },
      { value: "94%", label: "Analyst adoption rate", sub: "post-launch active WAU" },
    ],
    problem:
      "Forest asset management and carbon auditing relied on fragmented data silos, uncalibrated drone surveys, and slow manual field spreadsheets. Environmental analysts struggled to cross-reference satellite indices with carbon-stock updates — delaying ecological response and compromising carbon-credit audit transparency.",
    baselineStats: [
      { value: "14 hrs", label: "avg. to compile a field carbon audit report" },
      { value: "67%", label: "analyst time spent on manual CSV data reconciliation" },
      { value: "9×", label: "disconnected regional data sources cross-checked" },
    ],
    solutions: [
      {
        title: "Integrated Geospatial Viewport",
        body: "Multi-layered map interface rendering canopy density, biomass changes, and deforestation alerts in real time — eliminating static satellite TIFF downloads.",
      },
      {
        title: "Carbon Analytics Command Center",
        body: "Dedicated KPI dashboard calculating predictive carbon sequestration and verification stages, enabling non-technical executives to make decisions without a GIS specialist.",
      },
      {
        title: "Predictive Ecological Risk Panels",
        body: "Early-warning anomaly detection flagging drought and illegal encroachment before escalation — transforming the tool from passive reporting to proactive intervention.",
      },
      {
        title: "Progressive Disclosure Reporting",
        body: "Adaptive UI system serving both 10-second executive summaries and granular spectral band analysis through seamless depth toggles.",
      },
    ],
    impactTable: [
      { metric: "Field-survey hours / month", before: "~112 hrs", after: "~47 hrs", delta: "−58%" },
      { metric: "Compliance workflow task completion", before: "41%", after: "73%", delta: "+78%" },
      { metric: "Time-to-insight for carbon report", before: "14 hrs", after: "3.5 hrs", delta: "−75%" },
      { metric: "Analyst CSAT score (confidence)", before: "2.8 / 5", after: "4.6 / 5", delta: "+64%" },
    ],
    quote: "I used to spend half my morning just pulling data from three separate portals. Now everything I need to audit a forest plot is on one screen.",
    quoteRole: "Senior Environmental Analyst, Varuna Tech",
    learnings: [
      "Coordinating IA across 1 PM + 2 UX/UI designers + GIS data scientists required establishing shared design tokens for map symbology and spatial layers.",
      "Engineered BaseBlocksUI 1.6 as a tokenized component framework, enabling 34 components to be seamlessly reused when expanding to 2 new international regions.",
      "Solved executive vs. analyst tension via progressive disclosure: high-level sequestration KPIs default on top, with deep GIS rasters available on 1-click drilldown.",
    ],
  },
  {
    id: "smart-watcher",
    title: "Smart Watcher Platform",
    client: "VARUNA CO., LTD. (ARV)",
    timeline: "1 yr 8 mo · Oct 2024 – May 2026",
    hook: "Hundreds of unclassified CCTV & sensor feeds consolidated into an AI-triaged security operations center.",
    role: "Lead UX/UI Designer",
    platform: "Web Application · Mobile",
    industry: "IoT / Security Tech",
    stack: ["Figma", "Design Tokens", "Real-time Telemetry", "AI/ML UI"],
    image: "/img/cover/smart-watcher.webp",
    imageAlt: "Security monitoring control room screens with camera feeds",
    badges: [
      { label: "−71% Alert Fatigue", positive: true },
      { label: "+88% Response Rate", positive: true },
    ],
    kpis: [
      { value: "−71%", label: "Operator alert fatigue", sub: "false-positive dismissals/shift" },
      { value: "+88%", label: "Critical incident response rate", sub: "vs. legacy manual surveillance" },
      { value: "1.8 min", label: "Triage turnaround time", sub: "from 9.4 min baseline" },
    ],
    problem:
      "Security operators across industrial facilities were overwhelmed by an average of 340 raw alerts per shift. Without AI prioritization, genuine perimeter breaches and thermal anomalies were buried under false triggers, causing severe operator burnout.",
    baselineStats: [
      { value: "340", label: "avg. raw alerts per operator per 8-hour shift" },
      { value: "9.4 min", label: "avg. time to classify & dispatch a critical incident" },
      { value: "83%", label: "of total alerts were non-actionable false positives" },
    ],
    solutions: [
      {
        title: "AI-Triage Alert Hierarchy",
        body: "Replaced raw alert cascades with a 3-tier severity model (Critical, Warning, Low). Inline AI bounding boxes and confidence scores highlight exact incident triggers.",
      },
      {
        title: "Dynamic Spatial Camera Grid",
        body: "Replaced static 16-up walls with context-aware camera routing that auto-promotes adjacent perimeter feeds when a sensor triggers.",
      },
      {
        title: "Chronological Incident Handoff",
        body: "One-click digital incident logging with synchronized timestamps and snapshot packaging, eliminating shift-handoff communication gaps.",
      },
      {
        title: "Mobile Field Responder Companion",
        body: "Lightweight companion view designed for security patrol officers, featuring push-only emergency alerts with 1-tap route guidance.",
      },
    ],
    impactTable: [
      { metric: "Actionable alerts per operator shift", before: "340", after: "~15", delta: "−96%" },
      { metric: "Time to classify critical incident", before: "9.4 min", after: "1.8 min", delta: "−81%" },
      { metric: "Critical incident response rate", before: "47%", after: "89%", delta: "+88%" },
      { metric: "Operator retention (6-month)", before: "61%", after: "84%", delta: "+38%" },
    ],
    quote: "Before this, I closed my shifts feeling exhausted with hundreds of alerts unchecked. Now, high-risk events pop right to the front.",
    quoteRole: "Senior Control Room Operator, SecureVision Team",
    learnings: [
      "In high-stress control rooms, color cannot be the sole visual cue: paired severity colors with pulsing geometry, distinct audio frequencies, and keyboard hotkeys.",
      "Separated alert data feeds from presentation components via WebSocket tokens, allowing backend engineers to connect live computer vision models seamlessly.",
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
