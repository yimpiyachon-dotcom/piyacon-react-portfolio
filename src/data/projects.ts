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
      processHeading: "From Field Research to Shipped System",
      processIntro:
        "The end-to-end process behind this platform \u2014 how ambiguous stakeholder requests were reframed into a validated problem, then architected into a scalable, tokenized system.",
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
      processHeading: "From Field Roles to Tested Reports",
      processIntro:
        "How field reporting was framed around the people who file reports, built into flows, a design system and report screens, then tested with scripted tasks before handoff.",
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
    hook: "Area 22 is an industrial IoT gateway management platform designed to make complex administrative and monitoring tasks easier to manage through a structured back-office experience.",
    role: "Senior UX/UI Designer",
    platform: "Back Office",
    industry: "Industrial IoT / Admin SaaS",
    stack: ["Figma", "Design System", "Hardware Telemetry", "RBAC"],
    image: "/img/cover/area-22.webp",
    imageAlt: "Industrial IoT analytics dashboard with live telemetry and data charts",
    badges: [
      { label: "Gateway Management", positive: true },
      { label: "Back Office Admin", positive: null },
    ],
    kpis: [
      {
        value: "Gateway Management",
        label: "Centralized administration",
        sub: "A back-office platform for managing industrial IoT gateways, configurations, and operational information through a structured web interface.",
      },
      {
        value: "Operational Monitoring",
        label: "Clear system visibility",
        sub: "Organized gateway status and technical information into clearer views so users can understand system conditions without navigating fragmented screens.",
      },
      {
        value: "Structured Workflows",
        label: "From setup to monitoring",
        sub: "Designed administrative workflows that make technical gateway management more structured, consistent, and easier to follow.",
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
      processHeading: "From Requirements to Monitoring",
      processIntro:
        "How the back office was structured around what an administrator manages, from requirements and access rules to the operational modules, live CCTV and monitoring dashboards.",
    },
    problem:
      "Managing industrial IoT gateways involves multiple types of technical information and administrative tasks. Without a clear structure, users can find it difficult to understand gateway status, configure devices, and move between different operational workflows.",
    baselineStats: [
      {
        value: "Complex technical information",
        label: "Gateway status, configuration, and operational information needed to be presented in a way that users could understand and act on.",
      },
      {
        value: "Fragmented administration",
        label: "Different management tasks required users to move between related workflows and screens.",
      },
      {
        value: "Low information hierarchy",
        label: "Technical information needed clearer hierarchy so users could quickly distinguish important status information from detailed configuration data.",
      },
    ],
    solutions: [
      {
        title: "Structured Gateway Management",
        body: "Organized gateway-related information and actions into clearer administrative workflows so users could manage devices without unnecessary navigation.",
      },
      {
        title: "Clear Information Hierarchy",
        body: "Prioritized important gateway status and operational information while keeping detailed technical data available when needed.",
      },
      {
        title: "Consistent Administrative Patterns",
        body: "Applied reusable patterns across management screens, forms, tables, and system states to make the back-office experience more consistent.",
      },
      {
        title: "Connected Management Flow",
        body: "Designed related administrative workflows with a consistent structure so users could move between setup, configuration, monitoring, and management tasks more easily.",
      },
    ],
    impactTable: [
      {
        metric: "Gateway management",
        before: "Information and actions were spread across different screens",
        after: "Related gateway information and actions were organized into clearer workflows",
        delta: "More structured",
      },
      {
        metric: "Technical information",
        before: "Different types of information competed for attention",
        after: "Information was organized by hierarchy and context",
        delta: "Easier to understand",
      },
      {
        metric: "Administrative workflows",
        before: "Related tasks could feel disconnected",
        after: "Workflows were designed with more consistent patterns",
        delta: "More consistent",
      },
      {
        metric: "Monitoring & management",
        before: "Users needed to navigate between different operational views",
        after: "Key information was brought into clearer management views",
        delta: "Easier to navigate",
      },
    ],
    learnings: [
      "Designing an industrial IoT back-office showed me how important information hierarchy becomes when users need to work with technical data and administrative tasks at the same time.",
      "I learned that complex systems do not necessarily need more information on screen. They need clearer structure so users can understand what matters and what action comes next.",
      "Working on management workflows reinforced the value of consistent patterns across forms, tables, states, and navigation when designing a complex administrative product.",
    ],
  },
  {
    id: "kanna-app",
    title: "Kanna Application & CMS",
    client: "VARUNA CO., LTD. (ARV / PTTEP)",
    timeline: "1 yr 3 mo · June 2022 – Aug 2023",
    hook: "Kanna is an agricultural mobile application and geospatial CMS designed to connect field activities with agricultural data and support farmers and agricultural teams through a more structured digital workflow.",
    role: "UX/UI Designer",
    platform: "Mobile App + Web CMS",
    industry: "Smart Agriculture / AgriTech",
    stack: ["Figma", "User Research", "Offline UX", "Mobile Design"],
    image: "/img/cover/kanna-app.webp",
    imageAlt: "Agricultural sensor technology and smartphone plant disease inspection",
    badges: [
      { label: "Field Diagnostics", positive: true },
      { label: "Geospatial CMS", positive: null },
    ],
    kpis: [
      {
        value: "Field Diagnostics",
        label: "Mobile-first field experience",
        sub: "A mobile application designed to help farmers capture field information, inspect crop conditions, and access useful agricultural guidance directly from the field.",
      },
      {
        value: "Geospatial Management",
        label: "Connected field data",
        sub: "A web-based CMS that helps agricultural teams manage field information and connect mobile app data with geospatial views.",
      },
      {
        value: "Designed for Field Conditions",
        label: "Practical mobile UX",
        sub: "Designed around real-world agricultural conditions, including outdoor use, limited connectivity, and users who may not be frequent smartphone users.",
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
      processHeading: "From Field Conditions to Launch",
      processIntro:
        "How the app was framed around farm work, then built up from a design system into plots, projects, cultivation records and field tools, through to the final UI.",
    },
    problem:
      "Agricultural work happens in environments where connectivity, device conditions, and user familiarity with digital tools can vary. The product needed to support field activities while keeping information and workflows simple enough to use during everyday farm work.",
    baselineStats: [
      {
        value: "Field-first constraints",
        label: "The mobile experience needed to work in outdoor environments where sunlight, device conditions, and attention could affect how users interact with the interface.",
      },
      {
        value: "Limited connectivity",
        label: "Field activities may take place in areas with unreliable connectivity, so important workflows needed to remain practical when network access was limited.",
      },
      {
        value: "Complex agricultural information",
        label: "Crop information, cultivation records, field data, and supporting guidance needed to be organized so users could understand and act on them without unnecessary complexity.",
      },
      {
        value: "Connected field & back-office workflows",
        label: "Mobile field activities and agricultural team workflows needed to work together through a connected CMS and geospatial view.",
      },
    ],
    solutions: [
      {
        title: "Field-First Mobile Experience",
        body: "Designed the mobile experience around real field conditions, using clear visual hierarchy, accessible touch targets, and straightforward navigation.",
      },
      {
        title: "Practical Offline Experience",
        body: "Considered limited connectivity in the field and designed important interactions to remain understandable and usable when network access was unavailable or unreliable.",
      },
      {
        title: "Structured Farm & Project Management",
        body: "Organized farm plots, project participation, cultivation activities, and related information into clearer workflows so users could manage field activities more easily.",
      },
      {
        title: "Connected Geospatial CMS",
        body: "Designed the relationship between the mobile application and web-based CMS so agricultural teams could manage field information through a more structured geospatial workflow.",
      },
    ],
    impactTable: [
      {
        metric: "Field activities",
        before: "Field information and activities could be difficult to organize digitally",
        after: "Key activities were structured into clearer mobile workflows",
        delta: "More structured",
      },
      {
        metric: "Mobile experience",
        before: "Field conditions introduced usability constraints",
        after: "Interface and interaction patterns were designed around field use",
        delta: "More practical",
      },
      {
        metric: "Farm management",
        before: "Farm and project information could be spread across different workflows",
        after: "Related information was organized into clearer management flows",
        delta: "Easier to manage",
      },
      {
        metric: "Field & back-office data",
        before: "Mobile and agricultural team workflows needed stronger connection",
        after: "Mobile activities were connected with a geospatial CMS workflow",
        delta: "Better connected",
      },
    ],
    learnings: [
      "Designing for agricultural users taught me to consider the environment around the interface, not just the interface itself. Outdoor conditions, connectivity, device limitations, and user familiarity all affect how a product is experienced.",
      "I learned that simplifying a field experience is not about removing information. It is about presenting the right information at the right moment and making the next action obvious.",
      "Working across a mobile application and geospatial CMS reinforced the importance of designing connected workflows rather than treating each product surface as a separate experience.",
    ],
  },
  {
    id: "dr-smoothlife",
    title: "Dr. Smoothlife Platform",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "7 mo · Aug 2023 – Feb 2024",
    hook: "Dr. Smoothlife is a telemedicine platform designed to connect patients, doctors, pharmacy fulfilment, and operational workflows across mobile and web experiences.",
    role: "Senior UX/UI Designer",
    platform: "App + Web CMS",
    industry: "HealthTech / Telemedicine",
    stack: ["Figma", "Design Tokens", "Design System", "Telehealth UX"],
    image: "/img/cover/dr-smoothlife.webp",
    imageAlt: "Doctor utilizing telemedicine workspace and digital consultation platform",
    badges: [
      { label: "Connected Care", positive: true },
      { label: "Clinical Workspace", positive: null },
    ],
    kpis: [
      {
        value: "Connected Telemedicine",
        label: "From consultation to fulfilment",
        sub: "A telemedicine platform connecting patient consultation, digital prescriptions, pharmacy fulfilment, and doctor workflows into one connected experience.",
      },
      {
        value: "Clinical Workspace",
        label: "Focused doctor experience",
        sub: "A dedicated clinical workspace designed to help doctors manage consultations, patient information, and digital prescriptions without switching between disconnected tools.",
      },
      {
        value: "Operational Back Office",
        label: "Connected service management",
        sub: "Supporting admin workflows for prescription orders, delivery configuration, fulfilment, cancellations, and other operational tasks behind the telemedicine service.",
      },
    ],
    // Written without performance metrics: the numbers that used to sit here could
    // not be verified, so each section describes what was designed instead.
    sectionLabels: {
      problemHeading: "Problem & Baseline",
      impactHeading: "Outcomes",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
      processHeading: "From Consultation to Fulfilment",
      processIntro:
        "The service mapped as patient and system scenarios first, then the design system, the patient experience on web and mobile, and the back office that prices delivery and handles orders, returns and cancellations.",
    },
    problem:
      "Telemedicine involves more than the consultation itself. Patients need to move through intake and booking before meeting a doctor, while doctors need access to clinical information and prescribing tools during the consultation. Behind the experience, pharmacy and fulfilment workflows also need to stay connected.",
    baselineStats: [
      {
        value: "Disconnected patient journey",
        label: "Patient intake, consultation, prescription, and fulfilment needed to work together as one continuous experience rather than separate product steps.",
      },
      {
        value: "Fragmented clinical workflow",
        label: "Doctors needed to manage consultation information and prescribing while maintaining focus on the patient.",
      },
      {
        value: "Complex fulfilment operations",
        label: "Prescription orders, delivery rules, pharmacy fulfilment, cancellations, and related operational tasks required structured back-office workflows.",
      },
      {
        value: "Multiple product surfaces",
        label: "The platform spanned patient-facing mobile experiences, doctor-facing interfaces, and web-based operational tools, requiring consistency across different contexts.",
      },
    ],
    solutions: [
      {
        title: "Structured Medical Intake",
        body: "Designed a focused intake experience that helps patients provide relevant information and prepare for the consultation before connecting with a doctor.",
      },
      {
        title: "Unified Clinical Workspace",
        body: "Designed a doctor workspace that brings video consultation, patient information, clinical records, and prescribing actions into a more focused interface.",
      },
      {
        title: "Connected Prescription Fulfilment",
        body: "Connected digital prescription workflows with pharmacy and delivery processes so the journey continues beyond the consultation.",
      },
      {
        title: "Operational Back Office",
        body: "Designed structured admin workflows for delivery configuration, order management, prescription handling, cancellations, and fulfilment operations.",
      },
    ],
    impactTable: [
      {
        metric: "Patient journey",
        before: "Consultation and fulfilment involved multiple disconnected steps",
        after: "Patient, consultation, prescription, and fulfilment workflows were connected",
        delta: "More connected",
      },
      {
        metric: "Doctor workflow",
        before: "Clinical information and actions could be spread across different tools",
        after: "Key consultation and prescribing tasks were brought into one workspace",
        delta: "More focused",
      },
      {
        metric: "Prescription fulfilment",
        before: "Pharmacy and delivery operations required separate management workflows",
        after: "Prescription and fulfilment processes were structured as part of the wider service",
        delta: "Better connected",
      },
      {
        metric: "Operations",
        before: "Delivery, orders, cancellations, and fulfilment required multiple administrative tasks",
        after: "Operational workflows were organized into clearer management flows",
        delta: "More structured",
      },
    ],
    learnings: [
      "Designing a telemedicine product showed me that healthcare UX is not only about making individual screens easy to use. The experience depends on how patients, doctors, pharmacies, and operational teams connect across the entire service.",
      "I learned that clinical interfaces need to reduce cognitive load while still keeping important information and actions visible. The goal is not to simplify the data itself, but to make the workflow easier to understand.",
      "Working across patient-facing, clinical, and operational products reinforced the importance of designing a consistent system across different users, devices, and responsibilities.",
    ],
  },
  {
    id: "th-health",
    title: "TH Health Platform",
    client: "Thonburi Health Group (THG)",
    timeline: "4 weeks · Feb 2024",
    hook: "A health e-commerce platform where customers can find products by symptom, lifestyle or age, compare check-up packages, and pay by bank transfer through a guided flow.",
    summary: "TH Health is an e-commerce platform for health products and check-up packages. The design gives customers several ways into the catalogue, starting from how they feel, takes them through a guided checkout and bank transfer flow, and carries the same symptom-first entry onto in-store kiosk screens.",
    role: "UX/UI Designer",
    platform: "Web + Kiosk",
    industry: "Healthcare / E-Commerce",
    stack: ["Figma", "Design Tokens", "IA Restructure", "Responsive Web"],
    image: "/img/cover/th-health.webp",
    imageAlt: "TH Health symptom-based health e-commerce platform on desktop",
    badges: [
      { label: "Symptom-First IA", positive: true },
      { label: "Guided Checkout", positive: null },
    ],
    kpis: [
      {
        value: "Symptom-First Discovery",
        label: "Several ways into the catalogue",
        sub: "Products can be found by symptom, lifestyle or age group, alongside category, brand and search.",
      },
      {
        value: "Guided Checkout",
        label: "Step-by-step purchase",
        sub: "Address, payment method and order summary in clear steps, followed by a bank transfer flow with slip upload.",
      },
      {
        value: "Connected Touchpoints",
        label: "Web, member area and kiosk",
        sub: "Account, wishlist and order history online, with kiosk screens that start from the same symptom grid.",
      },
    ],
    // Written without performance metrics: the arrows and percentage that used to
    // sit here could not be verified, so each section describes what was designed.
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Context",
      problemHeading: "Problem & Baseline",
      solutionsHeading: "Key Design Decisions",
      impactHeading: "Outcomes",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
      processHeading: "From Symptom to Checkout",
      processIntro:
        "The whole store mapped as one flow first, then the pages a customer passes through from finding a product by how they feel to paying by transfer, and the kiosk that carries the same symptom-first entry.",
    },
    problem:
      "Customers looking for health products often know how they feel rather than the name of the product that helps. A catalogue organised only by category or brand asks them to know what to search for before they can find it. The platform also needed a purchase flow built around bank transfer, where the customer still has steps to complete after checkout, and a way to present health check-up packages, which are compared rather than browsed.",
    baselineStats: [
      {
        value: "Product-led browsing",
        label: "Customers who knew their symptom but not the product name needed another way into the catalogue.",
      },
      {
        value: "Transfer-based payment",
        label: "Paying by bank transfer adds steps after checkout, such as sending proof of payment, which had to be designed as part of the flow.",
      },
      {
        value: "Comparison purchases",
        label: "Check-up packages differ by what they include, so customers needed to compare them side by side.",
      },
      {
        value: "Multiple touchpoints",
        label: "The experience had to work across the website, the member area and in-store kiosk screens.",
      },
    ],
    solutions: [
      {
        title: "Several Ways into the Catalogue",
        body: "Added symptom, lifestyle and age-group entry points on the homepage and in the catalogue sidebar, alongside category, brand and search, so customers can start from how they feel or from what they already know.",
      },
      {
        title: "Guided Checkout and Transfer Flow",
        body: "Broke checkout into address, payment method and order summary steps, then designed the bank transfer flow with the account details, a slip upload and a clear error state when the slip is missing.",
      },
      {
        title: "Order Status Customers Can Read",
        body: "Designed order history with a payment status on every order, pending, paid or voided, and a confirmation page summarising items, delivery and the transfer slip, so customers can check where an order stands without contacting support.",
      },
      {
        title: "Packages Compared Side by Side",
        body: "Laid out health check-up packages with a comparison table of what each one includes and a booking contact beside it, so packages can be scanned against each other rather than read one by one.",
      },
      {
        title: "Kiosk Screens That Start From Symptoms",
        body: "Designed kiosk screens that open on a grid of symptoms, lead to matching products and product detail, and hand off to LINE for contact, with a fixed bar for going back or returning to the start.",
      },
    ],
    impactTable: [
      {
        metric: "Product discovery",
        before: "Finding a product depended on knowing its name or category",
        after: "Symptom, lifestyle and age-group entry points sit alongside category, brand and search",
        delta: "More ways in",
      },
      {
        metric: "Checkout & payment",
        before: "Bank transfer left steps to complete after the order",
        after: "Checkout and transfer designed as guided steps with slip upload",
        delta: "More guided",
      },
      {
        metric: "Order tracking",
        before: "Customers needed a way to check payment and order status",
        after: "Order history shows a payment status for every order",
        delta: "Easier to follow",
      },
      {
        metric: "Check-up packages",
        before: "Packages differ in what they include",
        after: "Inclusions compared in one table",
        delta: "Easier to compare",
      },
      {
        metric: "In-store kiosk",
        before: "Kiosk screens needed their own entry point",
        after: "Kiosk starts from the same symptom grid as the website",
        delta: "More consistent",
      },
    ],
    learnings: [
      "Customers describe health needs by how they feel, so offering several entry points, symptom alongside category and brand, served people with very different levels of product knowledge.",
      "A bank transfer purchase does not end at checkout. Designing the slip upload, its error state and the payment status as part of the flow mattered as much as the checkout itself.",
      "Carrying the symptom-first entry from the website onto kiosk screens showed the value of a shared structure across touchpoints, even when each screen format is different.",
    ],
  },
  {
    id: "land-monitoring",
    title: "VLM Land Monitoring Platform",
    client: "VARUNA CO., LTD.",
    timeline: "6 months · Mar 2024 – Aug 2024",
    hook: "A geospatial platform for land and carbon monitoring: define a plot by drawing or uploading it, read its biomass, carbon, NDVI and climate data, and report the results by province.",
    summary: "VLM Land Monitoring is a web platform that turns satellite data into plot-level environmental analysis. The design covers the full path from defining an area, by drawing or uploading a polygon, through per-metric analysis and map layers, to project management and provincial reporting.",
    role: "UX/UI Designer",
    platform: "Geospatial Web App",
    industry: "ClimateTech / GIS",
    stack: ["Figma", "GIS Data Viz", "Design System", "Dashboard UX"],
    image: "/img/cover/land-monitoring.webp",
    imageAlt: "VLM satellite-based forest monitoring and environmental analytics dashboard",
    badges: [
      { label: "Geospatial Viz", positive: true },
      { label: "Plot Analysis", positive: null },
    ],
    kpis: [
      {
        value: "Plot-Level Analysis",
        label: "One read per metric",
        sub: "Biomass, carbon sequestration, NDVI, climate and elevation each get a chart suited to the shape of their data.",
      },
      {
        value: "Layered Map",
        label: "Readable overlays",
        sub: "Satellite layers switch on one continuous map while the base map stays readable underneath.",
      },
      {
        value: "Area to Report",
        label: "From plot to province",
        sub: "Define an area, manage plots across projects, and read province-level summaries built for export.",
      },
    ],
    // Written without performance metrics: the figures that used to sit here could
    // not be verified, so each section describes what was designed instead.
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Context",
      problemHeading: "Problem & Baseline",
      solutionsHeading: "Key Design Decisions",
      impactHeading: "Outcomes",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
      processHeading: "From Plot to Provincial Report",
      processIntro:
        "How satellite data was made readable for non-specialists: the landing page and accounts, per-metric analysis, map layers and clustering, then project management and province-level reporting.",
    },
    problem:
      "Satellite and environmental data comes in very different shapes: values compared across plots, time series, and colour-ramped rasters. Showing them all in one visual language makes each harder to read, and stacking layers on a map can hide the base map users rely on for orientation. Users also needed to define the area they care about, keep track of plots across several projects, and turn the results into reports that hold up outside the interface.",
    baselineStats: [
      {
        value: "Different data shapes",
        label: "Comparisons, time series and rasters each needed their own visual treatment.",
      },
      {
        value: "Layer overload",
        label: "Colour-ramped overlays could hide the base map that users rely on for orientation.",
      },
      {
        value: "Defining the area",
        label: "Users needed to set the plot they wanted analysed, by drawing it or uploading a file, with clear limits.",
      },
      {
        value: "Readable at every scale",
        label: "Hot spot markers and plot data had to stay readable from national view down to a single parcel.",
      },
    ],
    solutions: [
      {
        title: "Area Definition by Drawing or Upload",
        body: "Designed the flow for defining a plot: upload a polygon file or draw on the map, see the area size before analysing, and get clear dialogs when an area is too large or about to be deleted.",
      },
      {
        title: "One Chart Treatment per Metric",
        body: "The analysis view gives each metric its own read under a tab: bar comparisons for biomass and carbon, time series for precipitation, temperature and solar radiation, and colour-ramped maps for NDVI and elevation.",
      },
      {
        title: "Map Layers That Keep the Base Readable",
        body: "Biomass, NDVI, temperature, precipitation, hot spot and elevation overlays switch on one continuous map, with legends and colour ramps chosen so the base map stays legible underneath.",
      },
      {
        title: "Hot Spot Clustering Across Zoom Levels",
        body: "Specified marker clustering across six zoom levels so hot spot density stays interpretable from national view down to a single district.",
      },
      {
        title: "Projects, Plots and Provincial Reports",
        body: "A multi-project workspace filters farms and shows plot boundaries on high-resolution imagery beside a linked mini-map and an area table, and a choropleth reporting layer summarises results by province in tables that stay legible when exported.",
      },
    ],
    impactTable: [
      {
        metric: "Area definition",
        before: "Analysis needed a clearly defined plot",
        after: "Draw or upload a polygon, with size feedback and limits",
        delta: "Clearer",
      },
      {
        metric: "Metric reading",
        before: "Different data shapes in one visual language",
        after: "A chart treatment matched to each metric",
        delta: "Easier to read",
      },
      {
        metric: "Map layers",
        before: "Overlays could hide the base map",
        after: "Layers switched on one map with a readable base",
        delta: "More legible",
      },
      {
        metric: "Hot spots at scale",
        before: "Markers could merge into one mass at country scale",
        after: "Clustering defined across six zoom levels",
        delta: "Interpretable",
      },
      {
        metric: "Reporting",
        before: "Results needed to hold up outside the interface",
        after: "Province-level tables and charts built for export",
        delta: "Report-ready",
      },
    ],
    learnings: [
      "Different data shapes need different chart treatments; forcing one visual language onto every metric made each of them harder to read.",
      "On a layered map, the base map is part of the information. Overlays had to be designed so users never lost their orientation.",
      "Zoom behaviour is a design decision: without a clustering rule, the same hot spot data is readable at one scale and meaningless at another.",
    ],
  },
  {
    id: "all-about-you",
    title: "ALL ABOUT YOU Platform",
    client: "ALL ABOUT YOU CO., LTD.",
    timeline: "1 yr 4 mo · Mar 2021 – Jun 2022",
    hook: "A skincare e-commerce platform with a loyalty programme that works online and in store: points, coupons and member tiers in one place, with a barcode that makes an online balance usable at a branch.",
    summary: "ALL ABOUT YOU is a skincare and beauty e-commerce platform with a membership programme shared between the website and physical branches. The design covers the shopping journey from homepage to checkout and the loyalty side of the product: points, rewards, coupons, member tiers and the in-store barcode that connects the two channels.",
    role: "Lead UX/UI Designer",
    platform: "Responsive Web",
    industry: "Retail / Beauty E-Commerce",
    stack: ["Figma", "Design System", "CRM UX", "Branding"],
    image: "/img/cover/all-about-you.webp",
    imageAlt: "ALL ABOUT YOU omnichannel skincare e-commerce and CRM platform",
    badges: [
      { label: "Omnichannel CRM", positive: true },
      { label: "In-Store Barcode", positive: null },
    ],
    kpis: [
      {
        value: "Omnichannel Loyalty",
        label: "Online and in-store",
        sub: "Points and coupons can be used at a branch through an in-store barcode, not only on the website.",
      },
      {
        value: "Clear Redemption",
        label: "Step-by-step rewards",
        sub: "Redemption split into select, confirm and success, so members always see how many points a step spends.",
      },
      {
        value: "Structured Shopping",
        label: "Browse to checkout",
        sub: "Merchandising, product detail and a three-step checkout planned on wireframes before visual design.",
      },
    ],
    // Written without performance metrics: the figures that used to sit here could
    // not be verified, so each section describes what was designed instead.
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Context",
      problemHeading: "Problem & Baseline",
      solutionsHeading: "Key Design Decisions",
      impactHeading: "Outcomes",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
      processHeading: "From Wireframe to Loyalty Flow",
      processIntro:
        "How the storefront was settled on wireframes first, then designed through product pages and checkout on desktop and mobile, the loyalty side of the platform, and an annotated handoff.",
    },
    problem:
      "Members could collect points and coupons, but the website and the physical branches needed to feel like one programme. A balance earned online had to be usable in a shop, and redemption had to be clear about what it would cost before the member committed. On the shopping side, a large skincare catalogue needed to stay easy to browse on a phone, and checkout had to carry coupons and points without losing track of the total.",
    baselineStats: [
      {
        value: "Two channels",
        label: "The website and physical branches needed to share one membership, one points balance and one set of coupons.",
      },
      {
        value: "Redemption cost",
        label: "Members needed to know how many points a reward would spend before confirming it.",
      },
      {
        value: "Long catalogue on mobile",
        label: "Browsing many brands and products on a phone risked losing the filters and the category context.",
      },
      {
        value: "Checkout with rewards",
        label: "Coupons and points had to be applied during checkout without hiding the order total.",
      },
    ],
    solutions: [
      {
        title: "In-Store Barcode for Online Rewards",
        body: "Designed a barcode screen for coupons and member benefits, so a balance or coupon held online can be used at a physical branch. It is the screen that connects the two channels.",
      },
      {
        title: "Redemption in Clear Steps",
        body: "Split reward redemption into select reward, confirm points and success, rather than one stacked screen, so the member always knows how many points a step will spend.",
      },
      {
        title: "One Hub for Membership",
        body: "Brought the points balance, reward redemption, the coupon wallet, the member tier card and points history together under one membership menu.",
      },
      {
        title: "Browsing Built for a Long Catalogue",
        body: "On mobile the filter set moves into a full-screen sheet and the category tabs stay pinned while the product grid scrolls, so browsing a long catalogue never loses the filters.",
      },
      {
        title: "Checkout That Keeps the Total in View",
        body: "A three-step progress header covers shipping, payment and order summary, with the cart held in a persistent side panel, and the coupon and points branches, including a failed redemption, drawn as their own paths.",
      },
    ],
    impactTable: [
      {
        metric: "Online & in-store rewards",
        before: "Rewards earned online needed a way to be used in a shop",
        after: "In-store barcode for coupons and member benefits",
        delta: "Better connected",
      },
      {
        metric: "Reward redemption",
        before: "Point cost needed to be clear before confirming",
        after: "Select, confirm and success as separate steps",
        delta: "Clearer",
      },
      {
        metric: "Mobile browsing",
        before: "A long catalogue had to stay browsable on a phone",
        after: "Full-screen filter sheet and pinned category tabs",
        delta: "Easier to browse",
      },
      {
        metric: "Checkout",
        before: "Coupons and points had to fit into checkout",
        after: "Three-step checkout with a persistent cart panel",
        delta: "More structured",
      },
    ],
    learnings: [
      "An omnichannel promise is only as real as the screen that carries it into the shop. For this programme, that screen was the in-store barcode.",
      "Showing the cost of a reward at each step, rather than on one dense screen, made redemption something members could check before committing.",
      "Settling the merchandising hierarchy on wireframes first meant layout debates were resolved before visual design, not on finished UI.",
    ],
  },
  {
    id: "embark-real-estate",
    title: "Embark Real Estate Platform",
    client: "Embark Real Estate",
    timeline: "4 weeks · May 2024",
    hook: "A real estate platform that treats the neighbourhood as part of the listing: browse by area, explore the surroundings on a map, and contact an agent without leaving the property.",
    summary: "Embark is a real estate brokerage platform for premium residential property. The design makes the neighbourhood a first-class way into the listings, keeps location and media on the property page, and holds the enquiry form beside the listing so a buyer never has to leave it to make contact.",
    role: "UX/UI Designer",
    platform: "Responsive Web",
    industry: "PropTech / Real Estate",
    stack: ["Figma", "Map UX", "Component Library", "Responsive Web"],
    image: "/img/cover/embark-real-estate.webp",
    imageAlt: "Embark neighborhood-centric real estate brokerage platform",
    badges: [
      { label: "Neighborhood Map", positive: true },
      { label: "Split Map Search", positive: null },
    ],
    kpis: [
      {
        value: "Neighbourhood First",
        label: "Browse by area",
        sub: "Neighbourhood entry points on the homepage and a map view in search, for buyers who start from where they want to live.",
      },
      {
        value: "Progressive Disclosure",
        label: "Dense listings, opened on demand",
        sub: "Photos, floor plan, video and map open in their own views, so the page leads with the information a buyer decides with.",
      },
      {
        value: "Contact in Context",
        label: "Enquiry beside the listing",
        sub: "The agent contact form stays beside the property, so a buyer can study it without losing the path to enquire.",
      },
    ],
    // Written without performance metrics: the figures that used to sit here could
    // not be verified, so each section describes what was designed instead.
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Context",
      problemHeading: "Problem & Baseline",
      solutionsHeading: "Key Design Decisions",
      impactHeading: "Outcomes",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
      processHeading: "From Mood Board to Account Area",
      processIntro:
        "How the visual direction and the screen inventory came first, then the discovery screens, listings and new developments, search with the map, and the account area that brings buyers back.",
    },
    problem:
      "Buying property is a decision about location as much as about the unit itself, but listings usually lead with specifications and leave the surroundings to be researched elsewhere. New developments add another layer of dense data, unit tables, building facts and media, that can overwhelm a page. And because a property search runs for months, the platform needed a way to bring a buyer back when matching stock appeared.",
    baselineStats: [
      {
        value: "Location as context",
        label: "Buyers needed to understand the area around a property, not only its specifications.",
      },
      {
        value: "Dense project data",
        label: "New developments carry unit tables, building facts and media that could overwhelm a single page.",
      },
      {
        value: "Contact path",
        label: "Enquiring needed to stay available while a buyer studied photos, plans and the map.",
      },
      {
        value: "Long search cycle",
        label: "A property hunt can run for months, so buyers needed a way to be brought back when new listings matched.",
      },
    ],
    solutions: [
      {
        title: "Neighbourhood as a Way In",
        body: "Placed 'Find the Neighbourhood for You' on the homepage as a first-class path, with area cards leading into listings, and added an 'Explore the area' map to the property page.",
      },
      {
        title: "Search by List or by Map",
        body: "Designed search as a split view, with results beside a live map of clustered pins, plus a map-only mode for buyers who search by area first.",
      },
      {
        title: "Media and Data Opened on Demand",
        body: "Photos, floor plan, video and map open from a switcher into their own views, and new-development pages lead with the unit table and building facts, so each page opens on the decision-making information.",
      },
      {
        title: "Enquiry Pinned Beside the Listing",
        body: "The agent contact form stays beside the listing content, so a buyer can study the property and its media without losing the path to enquire.",
      },
      {
        title: "Saved Searches That Bring Buyers Back",
        body: "The account area holds saved listings, saved searches with per-search email alerts, sent enquiries and recommendations, so a search that runs for months can pick up again when new stock matches.",
      },
    ],
    impactTable: [
      {
        metric: "Neighbourhood research",
        before: "Location context sat outside the listing",
        after: "Area entry points on the homepage and an area map on the listing",
        delta: "More connected",
      },
      {
        metric: "Search",
        before: "Results and location viewed separately",
        after: "Split list and map view, plus a map-only mode",
        delta: "More flexible",
      },
      {
        metric: "Listing detail",
        before: "Dense data and media competed on one page",
        after: "Media and building data opened on demand",
        delta: "More focused",
      },
      {
        metric: "Agent enquiry",
        before: "Contact needed to stay available while browsing media",
        after: "Enquiry form pinned beside the listing",
        delta: "Always in reach",
      },
      {
        metric: "Return visits",
        before: "Long searches needed a way to resume",
        after: "Saved searches with email alerts",
        delta: "Easier to resume",
      },
    ],
    learnings: [
      "For property, location is part of the product, so the neighbourhood belongs in the main navigation rather than inside a filter.",
      "Progressive disclosure worked best when the page opened on the information a buyer decides with and moved media into its own views.",
      "Keeping the contact path beside the content mattered more than making it loud; a buyer should never have to leave a listing to ask about it.",
    ],
  },
];
