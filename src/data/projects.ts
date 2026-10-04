// Case-study content for the nine platform projects. This is the only
// definition; App.tsx renders it and must not keep a copy.
export const projects = [
  {
    id: "smart-forest",
    title: "Smart Forest Platform",
    client: "VARUNA CO., LTD. (ARV / PTTEP)",
    timeline: "1 yr 8 mo · Oct 2024 – May 2026",
    hook: "A forest-monitoring platform designed so officers can read satellite and field data without GIS expertise: layers explained in plain language, analysis by plot, and email alerts.",
    summary:
      "Smart Forest is a GIS platform for monitoring forest plots and their carbon, working alongside Smart Watcher's field reports and the Forest of Tomorrow carbon marketplace. The design groups the map layers into five plain-language categories, gives each metric its own analysis view, shows a plot either as its own shapefile or as the analysis grid, and sends hotspot, deforestation and forest-change alerts by email.",
    role: "UX/UI Designer",
    platform: "Web Application (GIS)",
    industry: "ClimateTech / SaaS",
    stack: ["Figma", "Design Tokens", "GIS Data Viz", "BaseBlocksUI"],
    image: "/img/cover/smart-forest.webp",
    imageAlt: "Smart Forest analytics on a laptop: a plot's master grid on satellite imagery, with its NDVI time series and monthly images",
    badges: [
      { label: "GIS Data Platform", positive: true },
      { label: "Split-View Map", positive: null },
    ],
    kpis: [
      {
        value: "Plain-Language Layers",
        label: "Five groups, each explained",
        sub: "Biosphere, atmosphere, land cover, risk and socioeconomics, with a short explanation and a legend for every layer.",
      },
      {
        value: "Analysis per Plot",
        label: "One view per metric",
        sub: "NDVI, CO2 sequestration, biomass and forest change each get their own analysis, with a split view to compare layers.",
      },
      {
        value: "Shared Design System",
        label: "One theme, five products",
        sub: "A core theme shared by five company products, each overriding only its colour, radius and font, built on BaseBlocksUI.",
      },
    ],
    // Written from the boards. The only figures are the usability-test results read
    // off the Maze boards; every other section describes what was designed.
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Context",
      problemHeading: "Problem & Baseline",
      solutionsHeading: "Key Design Decisions",
      impactHeading: "Outcomes",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
      processHeading: "From Ecosystem Map to Next Version",
      processIntro:
        "From the product ecosystem, personas and one problem statement, through the information architecture and a design system shared across products, to the finished interface, usability testing and the direction for the next version.",
    },
    problem:
      "Forest officers needed to understand the condition of large planted areas and report on them, but the satellite and GIS data that could show it was hard to read without specialist training. The research found users switching between several systems, finding GIS complex, and facing areas too large to survey on foot, with long journeys to hard-to-reach plots and reports still made manually. The platform also had to show plots the way customers define them in their own shapefiles, while running its analysis on a common grid.",
    baselineStats: [
      {
        value: "Many systems",
        label: "Users switched between several systems to see the data for one area.",
      },
      {
        value: "Complex GIS",
        label: "Satellite and GIS layers were hard to read, and one persona had little technical background.",
      },
      {
        value: "Areas too large",
        label: "Plots were too large and too remote to survey on foot, so officers needed to know where to look first.",
      },
      {
        value: "Two shapes of data",
        label: "Customers define plots in their own shapefiles, while the analysis runs on a common master grid.",
      },
    ],
    solutions: [
      {
        title: "Layers Grouped and Explained",
        body: "Grouped the map layers into biosphere, atmosphere, land cover, risk and vulnerability, and socioeconomics, and gave every layer a short 'What is it?' explanation and a legend.",
      },
      {
        title: "One Analysis View per Metric",
        body: "Gave NDVI, CO2 sequestration, above-ground biomass and forest change their own analysis views, with time series, monthly imagery and a split view for comparing layers side by side.",
      },
      {
        title: "Original Polygon or Master Grid",
        body: "Let a plot be shown as its original shapefile polygon or as the master grid used for analysis, for one file or several, with uploads tracked in a progress summary of the area covered.",
      },
      {
        title: "Alerts That Come to the User",
        body: "Designed email alerts for hotspots, deforestation and forest change, including the email sent when nothing was detected, answering the research call for alerts and automatic reports.",
      },
      {
        title: "One Theme Across Five Products",
        body: "Built a core theme shared by five products, each overriding only its colour, radius and font, with components in BaseBlocksUI and an empty, loading, data and error state defined for every layer.",
      },
    ],
    impactTable: [
      {
        metric: "Reading the layers",
        before: "Layers assumed GIS knowledge",
        after: "Five groups, each layer explained with a legend",
        delta: "Easier to read",
      },
      {
        metric: "Seeing one area",
        before: "Data for one area sat in several systems",
        after: "Each metric analysed per plot, with a split view",
        delta: "One place",
      },
      {
        metric: "Plot boundaries",
        before: "Customers' shapefiles and the analysis grid differed",
        after: "Switch between the original polygon and the master grid",
        delta: "Both views",
      },
      {
        metric: "Alerts and reports",
        before: "Reports were made manually",
        after: "Email alerts for hotspots, deforestation and forest change",
        delta: "Proactive",
      },
      {
        metric: "Finding the project form",
        before: "Production test: about four minutes, 90.6% misclick",
        after: "Fix proposed: start the form from Create Project, menu labelled in words",
        delta: "To retest",
      },
    ],
    learnings: [
      "Writing the problem as one question, how officers could understand a forest without GIS expertise, gave every later decision a test: does this screen need specialist knowledge to read?",
      "Testing the production version showed that a working feature can still be hard to find: most participants looked for the project form under Create Project rather than where it was placed.",
      "Sharing one core theme across five products, with each overriding only its colour, radius and font, kept them related without forcing them to look identical.",
    ],
  },
  {
    id: "smart-watcher",
    title: "Smart Watcher Platform",
    client: "VARUNA CO., LTD. (ARV)",
    timeline: "1 yr 8 mo · Oct 2024 – May 2026",
    hook: "A field reporting app opened by QR code: villagers and survey staff report a hotspot, deforestation or wildlife in three steps, and the report reaches Smart Forest for checking.",
    summary:
      "Smart Watcher is the field reporting side of Smart Forest. People on the ground sign in by scanning their organisation's QR code, choose what they saw, add the details, photos and location, and submit; the landowner is emailed, and the report appears in Smart Forest beside the satellite data it can confirm.",
    role: "Lead UX/UI Designer",
    platform: "Web Application",
    industry: "Field Reporting / Incident Verification",
    stack: ["Figma", "Design System", "GIS Workflow", "Field UX"],
    image: "/img/cover/smart-watcher.webp",
    imageAlt: "Smart Watcher report form on a phone in a forest, at the location step with a map pin, a photo and the nearby village",
    badges: [
      { label: "Field Reporting", positive: true },
      { label: "Cross-Checking", positive: null },
    ],
    kpis: [
      {
        value: "QR Sign-In",
        label: "Reporting starts with a scan",
        sub: "Scanning the organisation's QR code opens the right reporting space, with screens for a code that leads nowhere.",
      },
      {
        value: "Three-Step Report",
        label: "Type, detail, location",
        sub: "Five report categories, then the reporter's details and urgency, then the photos, map pin, date and time.",
      },
      {
        value: "Linked to Smart Forest",
        label: "Ground truth beside satellite",
        sub: "Each report emails the landowner and appears in Smart Forest, where it can be checked against the satellite layers.",
      },
    ],
    // Written from the boards. The only figures are the usability-test results read
    // off the Maze boards; every other section describes what was designed.
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
      "Satellite monitoring covers large forest areas but cannot watch one place continuously, and it can show a change without confirming what caused it. The people who can confirm it, villagers and field survey teams, had no simple way to report what they saw. The officers who use the reports range from a technical user in Bangkok who monitors plots and reports upward to a less technical user in Laos who has to walk into the area to assess it.",
    baselineStats: [
      {
        value: "Satellite revisit gap",
        label: "The same area is not observed continuously, so changes between passes go unseen.",
      },
      {
        value: "No reporting tool",
        label: "People who saw a fire or forest clearing on the ground had no simple way to report it.",
      },
      {
        value: "Two kinds of user",
        label: "A technical officer monitoring from Bangkok and a less technical officer on site needed different things from the same reports.",
      },
      {
        value: "Edge cases in the field",
        label: "A code with no organisation, a denied location or a blocked page could stop a report before it was filed.",
      },
    ],
    solutions: [
      {
        title: "QR Code as the Way In",
        body: "Reporters start by scanning their organisation's QR code, which opens the right reporting space, with screens for a code that has no organisation and for pages an account cannot open.",
      },
      {
        title: "A Report in Three Steps",
        body: "Report entry runs as type, detail and location, starting from five categories, hotspot, deforestation, biodiversity, plant growth and other, each with a line on when to use it.",
      },
      {
        title: "Location and Evidence From the Site",
        body: "The location step pins the report on the map from the device or a photo, shows the latitude and longitude, and takes photos from the camera or the library, with its own path when location access is denied.",
      },
      {
        title: "Urgency and Distance at a Glance",
        body: "A report shows the reporter, the photos, the issue type, a new or emergency tag, and how far the viewer is from the reported point, settled in wireframes before the visual design.",
      },
      {
        title: "Reports That Reach the Right People",
        body: "Each submission emails the landowner and appears in Smart Forest, while administrators work through report management, status checks by reporter name or phone, and an overall dashboard.",
      },
    ],
    impactTable: [
      {
        metric: "Getting started",
        before: "No simple way into a reporting tool",
        after: "One QR scan opens the organisation's reporting space",
        delta: "One scan",
      },
      {
        metric: "Report entry",
        before: "No structured way to report an incident",
        after: "Five categories and three numbered steps",
        delta: "Guided",
      },
      {
        metric: "Location",
        before: "Sightings were hard to place on the map",
        after: "Map pin from the device or the photo, with a path for denied location",
        delta: "Pinned",
      },
      {
        metric: "Follow-up",
        before: "Reports needed to reach the right people",
        after: "Email to the landowner, report management and status checks",
        delta: "Routed",
      },
      {
        metric: "QR sign-in (tested)",
        before: "Flow not yet tried by users",
        after: "100% success and no drop-off in Maze, with a 17.4% misclick rate to fix",
        delta: "Validated",
      },
    ],
    learnings: [
      "Designing for two very different officers, one monitoring from Bangkok and one walking into the forest in Laos, meant a report had to be quick to file on site and complete enough to review from a desk.",
      "Much of the work was in the edge cases: a code with no organisation, a denied location or a blocked page decides whether a report is filed at all, so each one got its own screen.",
      "Field reports and satellite data do not replace each other; a report is most useful when it lands on the same map as the layer it confirms.",
    ],
  },
  {
    id: "area-22",
    title: "Area 22 IOT Management",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "7 mo · Aug 2023 – Feb 2024",
    hook: "A back office for a building of rented offices, connected to its face scan, CCTV, car barrier and meters, with room booking, technician jobs and usage dashboards for billing tenants.",
    summary:
      "Area 22 manages a building of rented offices and the hardware in it: the screen in the common area, face scan, CCTV, the car barrier, and the electricity and water meters. The design splits the platform between the front-desk admin, the technicians and the building owner, puts a screen by each meeting room door, and turns meter readings into dashboards the owner can use to bill tenants.",
    role: "Senior UX/UI Designer",
    platform: "Back Office",
    industry: "PropTech / Smart Building",
    stack: ["Figma", "Chakra UI", "Chart.js", "Role-Based Access"],
    image: "/img/cover/area-22.webp",
    imageAlt: "Area 22 electricity dashboard on a laptop, with total consumption, usage over time and the floors that use the most",
    badges: [
      { label: "Building Operations", positive: true },
      { label: "Room Signage", positive: null },
    ],
    kpis: [
      {
        value: "Three Roles",
        label: "Admin, technician, owner",
        sub: "The front desk runs daily operations, technicians see only their job tickets, and the owner also gets the dashboards.",
      },
      {
        value: "Room Signage",
        label: "A screen by every door",
        sub: "Each meeting room's screen shows the day's bookings with tenant logos, whether the room is free now and the sessions left.",
      },
      {
        value: "Usage Dashboards",
        label: "Meter readings for billing",
        sub: "Electricity, water, visitors, cars, events and jobs, from a day up to a year, filtered by floor and exported as CSV.",
      },
    ],
    // Written from the boards: Area 22 is a building back office joined to its
    // hardware, so every section describes what was designed, without metrics.
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
      "A building of rented offices shares its entrance, meeting rooms, fitness room and car park between many tenant companies, and its hardware, face scan, CCTV, the car barrier and the electricity and water meters, all had to come together in one place. The owner wanted one system to log who came and went, manage the shared rooms in limited space, route tenants' problems to the in-house technicians, and summarise electricity, water and room use so tenants could be billed correctly.",
    baselineStats: [
      {
        value: "Many devices",
        label: "Face scan, CCTV, the car barrier and the meters each had to feed one system.",
      },
      {
        value: "Shared, limited rooms",
        label: "Many tenant companies shared a small number of meeting and fitness rooms.",
      },
      {
        value: "Three roles",
        label: "The front desk, the technicians and the owner needed different access to the same data.",
      },
      {
        value: "Billing by usage",
        label: "The owner needed electricity, water and room use summarised to charge tenants correctly.",
      },
    ],
    solutions: [
      {
        title: "Structure Built Around Roles",
        body: "Organised the platform into Dashboard, Manage, Technician Service, Time Log and CCTV, with permissions per role, so a technician sees only job tickets and the owner sees the dashboards.",
      },
      {
        title: "Room Booking With Signage at the Door",
        body: "Booking runs in month, week, day and agenda views and checks the slot before confirming, and a portrait screen by each room shows the day's bookings, tenant logos and the sessions left.",
      },
      {
        title: "People and Vehicles on Record",
        body: "Visitors and staff are registered with a photo from the camera or a file, and the time logs list vehicles by licence-plate photo and visitors by type and purpose, with times in and out and a CSV export.",
      },
      {
        title: "Job Tickets for the In-House Team",
        body: "Technicians accept a job from its ticket and update its progress, anyone who did not accept it sees a separate view, and an admin can delete a ticket after confirming.",
      },
      {
        title: "Dashboards for Billing",
        body: "Electricity, water, operator, event and technician dashboards each have a CSV download; the range runs from a single day up to a year or a custom period, with bars grouped more coarsely as it grows, and usage filters by floor.",
      },
    ],
    impactTable: [
      {
        metric: "Building hardware",
        before: "Face scan, CCTV, barrier and meters needed one place",
        after: "One back office with dashboards, time logs and CCTV",
        delta: "One system",
      },
      {
        metric: "Shared rooms",
        before: "Limited rooms shared by many tenants",
        after: "Calendar booking with an availability check and a screen by each door",
        delta: "Visible",
      },
      {
        metric: "Access",
        before: "Three roles needed different views of the same data",
        after: "Permissions per role; technicians see only job tickets",
        delta: "Role-based",
      },
      {
        metric: "Maintenance",
        before: "Tenants' problems needed a route to the technicians",
        after: "Job tickets that technicians accept and update",
        delta: "Tracked",
      },
      {
        metric: "Billing",
        before: "Usage needed summarising for tenant bills",
        after: "Meter dashboards by range and floor, exported as CSV",
        delta: "Exportable",
      },
    ],
    learnings: [
      "Starting from the three roles, front desk, technician and owner, decided the structure: each module exists because one of them needs it, and the permissions follow the same split.",
      "The meeting-room screens showed that a back office does not end at the browser; the same booking data had to read at a glance on a door.",
      "Setting date ranges for the dashboards meant deciding how the bars group at each range; otherwise a year of readings is unreadable and a single day too coarse.",
    ],
  },
  {
    id: "kanna-app",
    title: "Kanna Application & CMS",
    client: "VARUNA CO., LTD. (ARV / PTTEP)",
    timeline: "1 yr 3 mo · June 2022 – Aug 2023",
    hook: "A farming app and CMS: farmers draw their plots on the satellite map, get the area in rai, ngan and square wa, check the weather, join projects and record their work, even with a weak connection.",
    summary:
      "Kanna is a mobile app for farmers with a web CMS behind it, built from field research in Nakhon Phanom. Farmers draw a plot on the satellite map or trace it over a photo of the land title deed, read the weather and advice for each plot, join projects and verify their plots, and record activities with location-stamped photos, while the agricultural team approves plots and reviews activities in the CMS.",
    role: "UX/UI Designer",
    platform: "Mobile App + Web CMS",
    industry: "Smart Agriculture / AgriTech",
    stack: ["Figma", "User Research", "Offline UX", "Mobile Design"],
    image: "/img/cover/kanna-app.webp",
    imageAlt: "Kanna home screen on a phone, with the local weather, shortcuts for prices, weather, soil checks and pests, and the news feed",
    badges: [
      { label: "Plot Drawing", positive: true },
      { label: "Geospatial CMS", positive: null },
    ],
    kpis: [
      {
        value: "Plot Drawing",
        label: "Area in Thai units",
        sub: "Tap a plot's corners on the satellite map, or trace it over a photo of the title deed, and get its area in rai, ngan and square wa.",
      },
      {
        value: "Connected Projects",
        label: "From the app to the CMS",
        sub: "Farmers join projects and verify their plots in the app; the agricultural team approves plots and reviews activities in the CMS.",
      },
      {
        value: "Designed for Field Conditions",
        label: "Practical mobile UX",
        sub: "Designed around real-world agricultural conditions, including outdoor use, limited connectivity, and users who may not be frequent smartphone users.",
      },
    ],
    // Written from the boards, without metrics. The offline claims stay as they were:
    // the boards show only the no-internet screen, but the user confirmed it works.
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Context",
      problemHeading: "Problem & Baseline",
      solutionsHeading: "Key Design Decisions",
      impactHeading: "Outcomes",
      impactColumns: ["Area", "Before", "After", "Outcome"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "What I Learned",
      processHeading: "From Field Research to Launch",
      processIntro:
        "From field research in Nakhon Phanom and a design system, through drawing plots on the map, weather, projects, activity records and the back-office CMS, to launch.",
    },
    problem:
      "Field research in Na Wa, Nakhon Phanom followed farmers through the season, from preparing the land to selling the crop. The app had to work where they are: outdoors, often with a weak connection, for people who may not use a smartphone often. Plots had to be defined in the units farmers use and drawn from the paper title deeds they hold, and the work recorded in the field had to reach the agricultural team that runs the projects.",
    baselineStats: [
      {
        value: "Plots in Thai units",
        label: "Farmers measure land in rai, ngan and square wa, and their plot boundaries are on paper title deeds.",
      },
      {
        value: "Limited connectivity",
        label: "Field activities may take place in areas with unreliable connectivity, so important workflows needed to remain practical when network access was limited.",
      },
      {
        value: "A season of records",
        label: "Activities, trees and land cover had to be recorded plot by plot across the season, with evidence of where.",
      },
      {
        value: "Connected field & back-office workflows",
        label: "Mobile field activities and agricultural team workflows needed to work together through a connected CMS and geospatial view.",
      },
    ],
    solutions: [
      {
        title: "Drawing a Plot on the Satellite Map",
        body: "Farmers tap a plot's corners and see each side's length and the area in rai, ngan and square wa, or lay a photo of the title deed over the map, adjust its transparency, size and rotation, and trace the boundary along it.",
      },
      {
        title: "Practical Offline Experience",
        body: "Considered limited connectivity in the field and designed important interactions to remain understandable and usable when network access was unavailable or unreliable.",
      },
      {
        title: "Weather and Advice per Plot",
        body: "The home page leads with the local weather, and each plot carries its own forecast, an hourly view, an air-quality scale and advice for that plot.",
      },
      {
        title: "Projects, Verification and Records",
        body: "Farmers join a project and choose which plots to enrol, verify each plot with their ID card and land documents, and record activities with photos stamped with the plot ID, coordinates and time.",
      },
      {
        title: "A CMS for the Agricultural Team",
        body: "Behind the app, the CMS lets the team approve plot data and review recorded activities in tables with counts by status and filters by province, district, sub-district, date and status.",
      },
    ],
    impactTable: [
      {
        metric: "Plot definition",
        before: "Boundaries held on paper title deeds",
        after: "Drawn on the satellite map or traced over a photo of the deed",
        delta: "On the map",
      },
      {
        metric: "Units",
        before: "Areas reckoned in rai, ngan and square wa",
        after: "Area shown in Thai units, with a unit converter",
        delta: "Familiar units",
      },
      {
        metric: "Connectivity",
        before: "Field areas with unreliable connectivity",
        after: "Key interactions stay usable without a connection, with clear no-internet and time-out screens",
        delta: "Practical",
      },
      {
        metric: "Field records",
        before: "Activities needed proof of where they happened",
        after: "Photos stamped with the plot ID, coordinates and time",
        delta: "Verifiable",
      },
      {
        metric: "Back office",
        before: "Field data had to reach the project team",
        after: "Plot approvals and activity reviews in the CMS",
        delta: "Better connected",
      },
    ],
    learnings: [
      "Designing for agricultural users taught me to consider the environment around the interface, not just the interface itself. Outdoor conditions, connectivity, device limitations, and user familiarity all affect how a product is experienced.",
      "Meeting farmers in the units and documents they already use, rai, ngan and square wa, and the paper title deed, took a translation step out of the most important task.",
      "Working across the app and the CMS reinforced that a field record is only useful once someone in the back office can approve it or act on it.",
    ],
  },
  {
    id: "dr-smoothlife",
    title: "Dr. Smoothlife Platform",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "7 mo · Aug 2023 – Feb 2024",
    hook: "Dr. Smoothlife is a telemedicine and online pharmacy platform that takes a patient from intake and video consultation through to medicine delivery, with the back office that runs the orders behind it.",
    summary:
      "Dr. Smoothlife is a telemedicine and online pharmacy service on a mobile app and a responsive website, with a web back office behind it. The design maps each service scenario as patient and system lanes, takes the patient from a stepped intake and identity check through the video consultation to buying and receiving medicine, and gives the back office its own flows for delivery fees, orders, and returns, exchanges and cancellations.",
    role: "Senior UX/UI Designer",
    platform: "App + Web CMS",
    industry: "HealthTech / Telemedicine",
    stack: ["Figma", "Design Tokens", "Design System", "Telehealth UX"],
    image: "/img/cover/dr-smoothlife.webp",
    imageAlt: "Dr. Smoothlife patient website on a laptop and a phone, showing Shop by Symptoms and product listings",
    badges: [
      { label: "Connected Care", positive: true },
      { label: "Guided Intake", positive: null },
    ],
    kpis: [
      {
        value: "Connected Telemedicine",
        label: "From intake to delivery",
        sub: "Intake, video consultation, the pharmacy catalogue and delivery designed as one service across the patient app and website.",
      },
      {
        value: "Guided Intake",
        label: "Consultation journeys",
        sub: "A stepped intake with identity verification, a queue and the video call, with the time-out, hang-up and error branches drawn as screens too.",
      },
      {
        value: "Operational Back Office",
        label: "Connected service management",
        sub: "Admin workflows for shipping-fee rules, order management, and returns, exchanges and cancellations behind the telemedicine service.",
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
      processHeading: "From Consultation to Fulfilment",
      processIntro:
        "The service mapped as patient and system scenarios first, then the design system, the patient experience on web and mobile, and the back office that prices delivery and handles orders, returns and cancellations.",
    },
    problem:
      "Telemedicine involves more than the consultation itself. Patients need to move through intake and identity checks before meeting a doctor, then buy and receive their medicine, on a phone or on the web. Behind the experience, delivery pricing, orders and the exceptions, returns, exchanges and cancellations, each need a workflow of their own.",
    baselineStats: [
      {
        value: "Disconnected patient journey",
        label: "Patient intake, consultation, purchase and delivery needed to work together as one continuous experience rather than separate product steps.",
      },
      {
        value: "Coverage-dependent delivery",
        label: "Delivery coverage differed between service scenarios, so the same consultation could end in different dispensing and delivery paths.",
      },
      {
        value: "Complex fulfilment operations",
        label: "Shipping-fee rules, orders, returns, exchanges and cancellations required structured back-office workflows.",
      },
      {
        value: "Multiple product surfaces",
        label: "The platform spanned a patient mobile app, a responsive patient website and a web back office, requiring consistency across different contexts.",
      },
    ],
    solutions: [
      {
        title: "Structured Medical Intake",
        body: "Designed a stepped intake with a progress bar, identity verification on mobile and a queue, so patients provide the right information and know where they stand before connecting with a doctor.",
      },
      {
        title: "Scenario-First Service Mapping",
        body: "Mapped each service scenario with a patient lane above a system lane before drawing screens, so every decision point shows what the patient sees and what the system has to do.",
      },
      {
        title: "One Design System Across Surfaces",
        body: "Built one system of colour, Thai type, buttons, fields, tags and toasts, each with its states, shared by the patient app, the website and the back office.",
      },
      {
        title: "Patient Web Built for Every State",
        body: "Designed the patient website at desktop, tablet and mobile widths, each with its own navigation drawer, and specified product pages for every state a pharmacy catalogue meets: with and without options, out of stock, without an image and loading.",
      },
      {
        title: "Operational Back Office",
        body: "Designed admin workflows for shipping-fee rules, order management, and returns, exchanges and cancellations, including item-by-item approval with a required reason for each rejection.",
      },
    ],
    impactTable: [
      {
        metric: "Patient journey",
        before: "Consultation and fulfilment involved multiple disconnected steps",
        after: "Intake, consultation, purchase and delivery were designed as one connected flow",
        delta: "More connected",
      },
      {
        metric: "Exception paths",
        before: "Time-outs, dropped calls and errors in a consultation had no defined screens",
        after: "Each branch of the consultation flow was designed as its own screen",
        delta: "Fully mapped",
      },
      {
        metric: "Product pages",
        before: "A pharmacy catalogue meets many edge cases",
        after: "Pages specified with and without options, out of stock, without an image and loading",
        delta: "Fully specified",
      },
      {
        metric: "Delivery pricing",
        before: "Shipping fees depended on weight bands and delivery type",
        after: "Fee rules were configured in one table, each with its own on-off status",
        delta: "Configurable",
      },
      {
        metric: "Operations",
        before: "Delivery, orders, cancellations, and fulfilment required multiple administrative tasks",
        after: "Operational workflows were organized into clearer management flows",
        delta: "More structured",
      },
    ],
    learnings: [
      "Designing a telemedicine product showed me that healthcare UX is not only about making individual screens easy to use. The experience depends on how patients, pharmacies and operational teams connect across the entire service.",
      "Mapping the scenarios as patient and system lanes before drawing screens showed early where delivery coverage splits the journey, so the screens could be designed for each branch from the start.",
      "Working across the patient app, the website and the back office reinforced the importance of one design system shared by different users, devices and responsibilities.",
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
        metric: "Membership",
        before: "Points, rewards, coupons and tier needed one home",
        after: "One membership menu with balance, redemption, coupon wallet, tier card and history",
        delta: "One place",
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
