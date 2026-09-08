// The twenty web & brand design projects shown on the Projects page.
export const webProjects = [
  {
    id: "contracable",
    title: "Contracable SaaS",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & B2B SaaS",
    tags: ["SaaS", "B2B", "Design Tokens", "Enterprise"],
    image: "/img/441ee598a9f9.webp",
    imageAlt: "Contract lifecycle management SaaS product marketing landing and tier pricing calculator",
    metric: "98/100 Lighthouse Perf",
    metricBadge: "+62% Free Trials",
    overview: "Contract lifecycle management platform landing page with enterprise pricing tier configurator, compliance calculator, and interactive product demo tours.",
    problem: "Legal-tech enterprise buyers found the previous landing page too abstract and lacked clear ROI proof to justify scheduling software enterprise demos.",
    baselineStats: [
      { value: "2.1%", label: "Free trial / sales demo request conversion" },
      { value: "64/100", label: "Legacy page performance score (slow load speeds)" },
      { value: "73%", label: "Visitors leaving before reaching pricing comparisons" }
    ],
    solutions: [
      { title: "Interactive Product Feature Playground", body: "Embedded clickable sandbox showing how automated NDA generation and redline tracking works in 3 clicks." },
      { title: "ROI & Legal Hours Saved Calculator", body: "Interactive slider allowing General Counsels to input team size and immediately calculate hours and dollar savings." },
      { title: "Ultra-Clean Tokenized Architecture", body: "Strict Tailwind-based typography and SVG vector illustration hierarchy achieving 98/100 Google Lighthouse rating." }
    ],
    impactTable: [
      { metric: "Enterprise demo requests", before: "24 / mo", after: "59 / mo", delta: "+145%" },
      { metric: "Lighthouse Performance Score", before: "64 / 100", after: "98 / 100", delta: "+53%" },
      { metric: "Pricing section scroll depth", before: "27%", after: "68%", delta: "+151%" }
    ],
    deliverables: ["B2B SaaS Landing Page", "Interactive ROI Calculator", "Responsive Component Tokens", "Design System Specs"]
  },
  {
    id: "aluminium-loop",
    title: "Aluminium Loop",
    client: "BEURDEV CO., LTD.",
    timeline: "Jun 2024 – Sep 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Industrial",
    tags: ["Manufacturing", "Circular", "Corporate", "ESG"],
    image: "/img/78f5a36f6e23.webp",
    imageAlt: "Industrial aluminum recycling circular economy portal and carbon emissions tracker",
    metric: "−40% Bounce Rate",
    metricBadge: "+85% Spec Downloads",
    overview: "Sustainable manufacturing brand experience showcasing closed-loop aluminum recycling metrics, supply chain provenance, and carbon-reduction audit proof.",
    problem: "Global B2B procurement heads doubted circular sustainability claims without empirical smelting data and third-party ISO verification metrics.",
    baselineStats: [
      { value: "58%", label: "Initial visitor bounce rate on corporate sustainability page" },
      { value: "9%", label: "Procurement visitors downloading raw technical data sheets" },
      { value: "11 days", label: "Average inquiry-to-quote response turnaround" }
    ],
    solutions: [
      { title: "Verified ESG Metrics Telemetry", body: "Prominent live data strip visualizing cumulative metric tons of recycled scrap and avoided CO₂ emissions." },
      { title: "Interactive Closed-Loop Visualizer", body: "Step-by-step schematic detailing collection, shredding, green smelting, and remanufacturing specifications." },
      { title: "B2B Request for Quotation (RFQ) Fast-Track", body: "Direct spec upload drawer allowing buyers to submit alloy technical requirements in under 60 seconds." }
    ],
    impactTable: [
      { metric: "Corporate website bounce rate", before: "58%", after: "35%", delta: "−40%" },
      { metric: "Alloy specification downloads", before: "140 / mo", after: "260 / mo", delta: "+85%" },
      { metric: "Direct B2B procurement inquiries", before: "12 / mo", after: "34 / mo", delta: "+183%" }
    ],
    deliverables: ["Industrial Corporate Portal", "Circular Diagram Graphics", "RFQ Quick Form", "ESG Proof Architecture"]
  },
  {
    id: "beurdev-agency",
    title: "Beurdev Agency",
    client: "BEURDEV CO., LTD.",
    timeline: "Feb 2024 – Oct 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Tech Agency",
    tags: ["Tech", "Agency", "Interactive", "Dark Mode"],
    image: "/img/d1ea62bff343.webp",
    imageAlt: "Digital engineering and software consultancy agency flagship showcase",
    metric: "2.4× Inbound Inquiries",
    metricBadge: "+120% Case Reads",
    overview: "Agency portfolio and digital engineering case study showcase featuring dark mode aesthetics, interactive case study filters, and tokenized layouts.",
    problem: "Previous agency website presented services generically without highlighting enterprise engineering depth or design system credentials.",
    baselineStats: [
      { value: "7 inbound", label: "Monthly qualified enterprise project inquiries" },
      { value: "45 sec", label: "Average page dwell time before visitor departure" },
      { value: "22%", label: "Case study completion reading rate" }
    ],
    solutions: [
      { title: "Impact-Driven Case Study Cards", body: "Replaced vague client logos with measurable before/after metrics prominently surfaced directly on the index grid." },
      { title: "Engineered Dark-Mode Aesthetic", body: "JetBrains Mono typography paired with high-contrast emerald highlights communicating technical mastery." },
      { title: "Direct Calendly Strategy Booking", body: "Eliminated back-and-forth email scheduling by embedding instant scoping consultation calendars." }
    ],
    impactTable: [
      { metric: "Monthly inbound client inquiries", before: "7 leads", after: "17 leads", delta: "+142%" },
      { metric: "Case study readership depth", before: "22%", after: "58%", delta: "+163%" },
      { metric: "Average session time on portfolio", before: "45 sec", after: "3.2 min", delta: "+326%" }
    ],
    deliverables: ["Agency Flagship Site", "Case Study Template Engine", "Interactive Capability Matrix", "Brand Guidelines"]
  },
  {
    id: "patc-institute",
    title: "PATC Institute",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jun 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Education",
    tags: ["Education", "Institute", "Courses", "Aviation"],
    image: "/img/4a8aa1992ceb.webp",
    imageAlt: "Professional aviation training academy course catalog and student enrollment portal",
    metric: "+76% Enrollment Rate",
    metricBadge: "−50% Call Center Queries",
    overview: "Professional aviation and aerospace training curriculum portal with live cohort availability calendars, syllabus downloads, and student registration.",
    problem: "Aspiring pilots and maintenance trainees found course requirements confusing, resulting in high call center volumes and abandoned registrations.",
    baselineStats: [
      { value: "340 calls", label: "Monthly repetitive student queries regarding course prerequisites" },
      { value: "12%", label: "Online cohort registration conversion from course view page" },
      { value: "6.5 min", label: "Time needed to discover upcoming class dates" }
    ],
    solutions: [
      { title: "Interactive Course Prerequisite Checker", body: "Step-by-step 30-second eligibility quiz verifying flight hours, age, and medical certificate requirements." },
      { title: "Live Cohort Availability Grid", body: "Real-time seat counter showing remaining spots per semester with instant waitlist capability." },
      { title: "1-Click PDF Syllabus Download", body: "Gated syllabus download capturing student lead contacts for automated nurture email follow-ups." }
    ],
    impactTable: [
      { metric: "Online cohort enrollment rate", before: "12%", after: "21%", delta: "+76%" },
      { metric: "Repetitive call center questions", before: "340 / mo", after: "168 / mo", delta: "−50%" },
      { metric: "Prospective student lead captures", before: "85 / mo", after: "240 / mo", delta: "+182%" }
    ],
    deliverables: ["Curriculum Directory UI", "Eligibility Checker Tool", "Student Portal Wireframes", "Mobile Responsive Layout"]
  },
  {
    id: "the-right-office",
    title: "The Right Office",
    client: "BEURDEV CO., LTD.",
    timeline: "May 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & PropTech",
    tags: ["PropTech", "Coworking", "Booking", "Flex Space"],
    image: "/img/74c05e525887.webp",
    imageAlt: "Flexible coworking space and private office suite on-demand booking portal",
    metric: "+62% Desk Bookings",
    metricBadge: "4.8★ Booking CSAT",
    overview: "Modern workspace leasing and meeting room reservation platform with instant availability filtering and flexible membership tier calculators.",
    problem: "Remote teams and startups struggled to compare physical layout amenities and view real-time meeting room availability without calling the front desk.",
    baselineStats: [
      { value: "48%", label: "Drop-off rate when booking conference rooms" },
      { value: "15 min", label: "Average phone confirmation time with concierge" },
      { value: "31%", label: "Unoccupied weekend hot desk capacity" }
    ],
    solutions: [
      { title: "Floor-Plan Visual Room Selector", body: "Interactive architectural floor layout displaying active room occupation, video conferencing hardware, and natural light ratings." },
      { title: "Instant QR Access Pass Integration", body: "Immediate digital pass issuance added directly to Apple Wallet & Google Wallet upon confirmation." },
      { title: "Flexible Team Credit Management", body: "Company billing dashboard allowing managers to assign workspace booking credits across departments seamlessly." }
    ],
    impactTable: [
      { metric: "Completed meeting room bookings", before: "210 / mo", after: "340 / mo", delta: "+62%" },
      { metric: "Desk check-in wait time at reception", before: "4.5 min", after: "15 sec", delta: "−94%" },
      { metric: "Weekend hot-desk utilization", before: "24%", after: "61%", delta: "+154%" }
    ],
    deliverables: ["Coworking Reservation App", "Interactive Floorplan Selector", "Wallet Pass UI", "Admin Management Console"]
  },
  {
    id: "max-solution",
    title: "Max Solution",
    client: "BEURDEV CO., LTD.",
    timeline: "Mar 2024 – May 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Enterprise",
    tags: ["Enterprise", "B2B", "Consulting", "IT Services"],
    image: "/img/661d950db877.webp",
    imageAlt: "Enterprise IT software solutions and digital transformation consulting website",
    metric: "4.9★ Stakeholder CSAT",
    metricBadge: "−38% Bounce Rate",
    overview: "Enterprise software consultation website built with accessible typography, interactive solutions matrix, and whitepaper download funnels.",
    problem: "Executive decision makers were confused by dense corporate service descriptions and couldn't find relevant enterprise client case references.",
    baselineStats: [
      { value: "54%", label: "Bounce rate on enterprise technology solutions page" },
      { value: "8 inquiries", label: "Monthly RFP contact submissions" },
      { value: "3.2 / 5", label: "Stakeholder perception score for technical credibility" }
    ],
    solutions: [
      { title: "Industry-Vertical Matrix Navigation", body: "Segmented solutions by industry (Banking, Retail, Logistics) with dedicated compliance certifications visible upfront." },
      { title: "Interactive System Architecture Schematics", body: "Clean visual diagrams illustrating cloud migration pathways and security hardening protocols." },
      { title: "Streamlined Enterprise RFP Workflow", body: "Guided 4-step proposal request form capturing technical scope, timeline, and compliance standards." }
    ],
    impactTable: [
      { metric: "Qualified RFP submissions", before: "8 / mo", after: "22 / mo", delta: "+175%" },
      { metric: "Enterprise whitepaper downloads", before: "45 / mo", after: "190 / mo", delta: "+322%" },
      { metric: "Stakeholder credibility score", before: "3.2 / 5", after: "4.9 / 5", delta: "+53%" }
    ],
    deliverables: ["Enterprise B2B Architecture", "Interactive System Diagrams", "Lead-Capture Funnels", "Corporate Brand Kit"]
  },
  {
    id: "orgenees-wellness",
    title: "Orgenees Orange Juice",
    client: "BEURDEV CO., LTD.",
    timeline: "Jun 2024 – Aug 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Food Manufacturing",
    tags: ["Manufacturing", "Wholesale", "OEM", "FMCG"],
    image: "/img/222c56aeeb4c.webp",
    imageAlt: "Orgeness fresh orange juice factory wholesale and OEM website",
    metric: "220–1000 ml Range",
    metricBadge: "GMP · HACCP · อย.",
    overview: "Site for a fresh orange juice factory selling wholesale and OEM contract production, built to convert resellers and own-brand clients rather than individual shoppers.",
    problem: "The business earns from wholesale volume and contract manufacturing, but a conventional product site speaks to single-bottle buyers — leaving reseller margins, minimum order terms and OEM capability invisible to the people who actually place large orders.",
    baselineStats: [
      { value: "Retail-framed", label: "Site spoke to individual buyers, not resellers" },
      { value: "Unstated", label: "Wholesale pricing and minimum order terms not published" },
      { value: "Hidden", label: "OEM own-brand production capability not surfaced" }
    ],
    solutions: [
      { title: "Wholesale Economics Made Explicit", body: "Published the reseller case directly — sizes from 220 ml to 1,000 ml, wholesale from ฿11.5 per bottle, free Bangkok delivery above 100 bottles, and nationwide shipping by temperature-controlled truck." },
      { title: "OEM Contract Production Track", body: "A dedicated section for own-brand manufacturing, positioned around low capital outlay and no storefront requirement, with LINE and phone consultation as the entry point." },
      { title: "Food-Safety Credibility Layer", body: "GMP, HACCP and Thai FDA certification surfaced alongside the residue-testing and sweetness-consistency process, since food-grade buyers screen on standards before taste." }
    ],
    impactTable: [
      { metric: "Audience the site addresses", before: "Retail buyers", after: "Wholesale and OEM clients", delta: "Repositioned" },
      { metric: "Wholesale terms visibility", before: "On request", after: "Published rates and minimums", delta: "Open" },
      { metric: "Certification disclosure", before: "Not shown", after: "GMP, HACCP, อย.", delta: "Surfaced" }
    ],
    deliverables: ["Wholesale Marketing Site", "Product Catalogue", "OEM Enquiry Flow", "Article & SEO Templates"]

  },
  {
    id: "billion-plus",
    title: "Billion Plus",
    client: "BEURDEV CO., LTD.",
    timeline: "Mar 2024 – May 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Industrial Equipment",
    tags: ["Industrial", "Catalogue", "Rental", "B2B"],
    image: "/img/3310c7a49b83.webp",
    imageAlt: "Billion Plus industrial floor cleaning machine sales and rental website",
    metric: "5 Machine Categories",
    metricBadge: "Open Rental Pricing",
    overview: "Sales, rental and service site for industrial floor-cleaning machines, structured so facilities buyers can navigate by cleaning application rather than model number.",
    problem: "Buyers sourcing floor-cleaning equipment rarely know model names, and rental rates were locked behind enquiry forms — forcing a sales conversation before a prospect could tell whether the machine or the budget was even a fit.",
    baselineStats: [
      { value: "Model-led", label: "Catalogue organised by SKU rather than cleaning task" },
      { value: "Hidden", label: "Rental rates available only on request" },
      { value: "Mixed", label: "Sales, rental and service offers competing on one page" }
    ],
    solutions: [
      { title: "Application-Based Catalogue Structure", body: "Machines grouped into five classes — mini floor washer, single disc, high speed burnisher, walk-behind scrubber and ride-on scrubber — with a dropdown that filters by cleaning application instead of model number." },
      { title: "Published Rental Rate Tables", body: "Structured tables showing machine size, cleaning capacity in square metres and rate per rental period, putting the daily rate in the open rather than behind a contact form." },
      { title: "Industrial Client Credibility Layer", body: "Client logos from manufacturers including AGC, NHK, KYB, Sumitomo and NSK positioned to carry the proof a B2B facilities buyer looks for before enquiring." }
    ],
    impactTable: [
      { metric: "Catalogue navigation model", before: "By model number", after: "By cleaning application", delta: "Restructured" },
      { metric: "Rental pricing visibility", before: "Enquiry required", after: "Published tables", delta: "Open" },
      { metric: "Machine categories surfaced", before: "Flat product list", after: "5 grouped classes", delta: "Segmented" }
    ],
    deliverables: ["Wireframes", "Product Catalogue System", "Rental Rate Tables", "Responsive Marketing Site"]

  },
  {
    id: "unionchemical",
    title: "Unionchemical Industrial",
    client: "BEURDEV CO., LTD.",
    timeline: "May 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Industrial",
    tags: ["Industrial", "Corporate", "B2B", "Chemicals"],
    image: "/img/68958e8a7255.webp",
    imageAlt: "Industrial chemical raw material manufacturing directory and TDS download portal",
    metric: "+45% Product Spec Downloads",
    metricBadge: "−60% Inquiry Response Time",
    overview: "Chemical manufacturing product directory with technical data sheet (TDS/MSDS) quick downloads and batch RFQ cart system for factory engineers.",
    problem: "Factory chemical engineers couldn't easily locate specific polymer and solvent grades due to poor search indexing and inaccessible PDF safety sheets.",
    baselineStats: [
      { value: "6.2 min", label: "Time taken to find chemical specification sheets" },
      { value: "42%", label: "Users abandoning search before downloading MSDS files" },
      { value: "19 phone inquiries", label: "Daily repetitive requests for basic product datasheets" }
    ],
    solutions: [
      { title: "CAS Number & Chemical Formula Instant Search", body: "Engineered rapid search recognizing IUPAC nomenclature, commercial names, and CAS numbers." },
      { title: "1-Click Batch Technical Download", body: "Engineered multi-select drawer allowing engineers to bundle 10+ TDS and safety sheets into a single ZIP." },
      { title: "Bulk Container Volume Estimator", body: "Interactive container calculator estimating pallet and IBC tote shipping weights and volumes." }
    ],
    impactTable: [
      { metric: "Technical specification downloads", before: "420 / mo", after: "610 / mo", delta: "+45%" },
      { metric: "Search-to-spec discovery time", before: "6.2 min", after: "45 sec", delta: "−88%" },
      { metric: "Direct industrial RFQ conversions", before: "18 / mo", after: "46 / mo", delta: "+155%" }
    ],
    deliverables: ["B2B Chemical Directory", "CAS Index Search UI", "Technical Spec Drawer", "Responsive Corporate Portal"]
  },
  {
    id: "thaimanee-craft",
    title: "Thaimanee Craft",
    client: "BEURDEV CO., LTD.",
    timeline: "Feb 2024 – Apr 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Manufacturing",
    tags: ["Manufacturing", "OEM", "Industrial", "Bilingual"],
    image: "/img/49976d5d8a0e.webp",
    imageAlt: "Thaimanee Craft plastic injection moulding and OEM manufacturing website",
    metric: "4 Product Categories",
    metricBadge: "ISO 9001:2015",
    overview: "Corporate site for a plastic injection moulding and mould-making manufacturer, built to present OEM capability and production capacity to industrial buyers in both Thai and English.",
    problem: "OEM manufacturing buyers evaluate suppliers on capability and capacity, not marketing copy — but the company had no way to show its machine inventory, tonnage range or product range to prospects before a factory visit.",
    baselineStats: [
      { value: "No catalogue", label: "Product capability not visible to prospective buyers" },
      { value: "Thai only", label: "No English entry point for overseas OEM enquiries" },
      { value: "Unstated", label: "Machine capacity and certification not published" }
    ],
    solutions: [
      { title: "Capability-Led Product Catalogue", body: "Work organised into four categories — moulds, plastic injection, assembly and screen printing — with real production photography so buyers can match their part against existing output." },
      { title: "Published Production Capacity", body: "Machine inventory stated explicitly: 26 CNC, W-CUT, EDM and milling machines, 47 injection machines, and a tonnage range from 35 to 1,200 tons, alongside ISO 9001:2015 certification." },
      { title: "Bilingual Corporate Structure", body: "Thai and English toggle across company history, vision, mission and objectives, giving overseas buyers a route into the same credibility material domestic clients see." }
    ],
    impactTable: [
      { metric: "Product capability visibility", before: "Not published", after: "4 categories with photography", delta: "Catalogued" },
      { metric: "Production capacity disclosure", before: "Unstated", after: "Machine count and tonnage published", delta: "Transparent" },
      { metric: "Language coverage", before: "Thai only", after: "Thai and English", delta: "Bilingual" }
    ],
    deliverables: ["Corporate Marketing Site", "Product Category System", "Bilingual TH/EN UI", "Capability & Certification Pages"]

  },
  {
    id: "supakit-amulet",
    title: "Supakit Amulet",
    client: "BEURDEV CO., LTD.",
    timeline: "Jan 2024 – Mar 2024",
    role: "UX/UI Designer",
    category: "Web Design & Manufacturing",
    tags: ["Manufacturing", "Portfolio", "Craft", "B2B"],
    image: "/img/75bbd0306862.webp",
    imageAlt: "Supakit amulet manufacturing workshop portfolio and commission enquiry website",
    metric: "3 Work Categories",
    metricBadge: "Direct Line Enquiry",
    overview: "Portfolio and commission site for an amulet manufacturing workshop, built to show casting capability and finished work quality to temples and commissioning clients.",
    problem: "Commissioning religious objects is a trust-heavy decision made largely on craftsmanship evidence, but the workshop had no way to show finished work, production process or scale to prospective clients before a phone call.",
    baselineStats: [
      { value: "No portfolio", label: "Finished work not viewable before enquiry" },
      { value: "Unseen", label: "Casting and finishing process not documented" },
      { value: "Phone only", label: "No structured route from interest to enquiry" }
    ],
    solutions: [
      { title: "Work Portfolio by Craft Type", body: "Output separated into coin pressing, three-dimensional casting and finished pieces, photographed against dark backgrounds so metal finish and relief detail read clearly." },
      { title: "Workshop Process Documentation", body: "Real photography of the casting floor, hand finishing and quality inspection, giving commissioning clients evidence of the production standard rather than claims about it." },
      { title: "Direct Enquiry Architecture", body: "Phone numbers and LINE contact persistent in the header and repeated at each section break, matching how this market actually opens a commission conversation." }
    ],
    impactTable: [
      { metric: "Finished work visibility", before: "Not published", after: "Categorised portfolio", delta: "Documented" },
      { metric: "Production process evidence", before: "None", after: "Workshop photography", delta: "Shown" },
      { metric: "Enquiry routes", before: "Phone only", after: "Phone, LINE and form", delta: "Expanded" }
    ],
    deliverables: ["Portfolio Site", "Work Category System", "Article & News Templates", "Contact & Location Pages"]

  },
  {
    id: "chaocom-thailand",
    title: "Chaocom Thailand",
    client: "BEURDEV CO., LTD.",
    timeline: "Mar 2024 – Jun 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & IT Rental",
    tags: ["B2B", "Rental", "Corporate IT", "Lead Gen"],
    image: "/img/10ab1770eadb.webp",
    imageAlt: "ChaoCom Thailand computer and notebook rental service website",
    metric: "Daily · Monthly · Yearly",
    metricBadge: "No Minimum Order",
    overview: "Lead-generation site for a computer and notebook rental service, built to convert corporate clients renting IT equipment for offices, training sessions, seminars and events.",
    problem: "Companies renting IT equipment weigh it against buying outright, but the rental case — no capital outlay, no depreciation, immediate replacement, tax deductibility — was never argued anywhere a prospect could find it before contacting sales.",
    baselineStats: [
      { value: "Unargued", label: "Rent-versus-buy case not made on site" },
      { value: "Unlisted", label: "Available machine models not shown to prospects" },
      { value: "Assumed", label: "Buyers expected a minimum order requirement" }
    ],
    solutions: [
      { title: "Rent-Versus-Buy Argument Structure", body: "Five reasons stated up front: zero capital risk, maintained hardware with instant replacement, no minimum rental quantity, advisory support, and rental treated as a 100% deductible expense." },
      { title: "Equipment Catalogue by Class", body: "Available machines shown by category — laptop, MacBook and desktop — with named models from Dell, Lenovo, HP, Acer and Apple so prospects can match specification before enquiring." },
      { title: "Structured Quotation Funnel", body: "A dedicated quotation form capturing company, equipment type, quantity, rental period and delivery location, replacing an open-ended contact form with a request sales can price directly." }
    ],
    impactTable: [
      { metric: "Rent-versus-buy positioning", before: "Not stated", after: "Five-reason argument", delta: "Argued" },
      { metric: "Equipment visibility", before: "Not listed", after: "3 classes, named models", delta: "Catalogued" },
      { metric: "Enquiry quality", before: "Open contact form", after: "Structured quotation request", delta: "Qualified" }
    ],
    deliverables: ["Lead Generation Site", "Equipment Catalogue", "Quotation Request Flow", "Service Terms Pages"]

  },
  {
    id: "thanada-construction",
    title: "Thanada Construction",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Construction",
    tags: ["Construction", "Residential", "Portfolio", "Lead Gen"],
    image: "/img/e56bec59cc1d.webp",
    imageAlt: "Thanada Construction residential design and build portfolio website",
    metric: "Design + Build",
    metricBadge: "Free Consultation",
    overview: "Portfolio and enquiry site for a residential design-and-build contractor, structured so homeowners can judge completed work before starting a build conversation.",
    problem: "Choosing a home builder is a high-commitment decision made largely on evidence of finished work, but the company had no way to show completed houses, service scope or team structure to homeowners weighing contractors.",
    baselineStats: [
      { value: "Unseen", label: "Completed houses not viewable before enquiry" },
      { value: "Unclear", label: "Design and construction scope not separated" },
      { value: "Unstated", label: "Team structure and capability not documented" }
    ],
    solutions: [
      { title: "Work Portfolio Split by Service", body: "Completed projects separated into design work and construction work, each with photography of finished houses so homeowners can assess style and quality against their own brief." },
      { title: "Organisational Capability Chart", body: "Team structure published across design, engineering and site management, showing homeowners the company has the disciplines a full design-and-build actually requires." },
      { title: "Editorial Content for Early-Stage Buyers", body: "Articles on choosing a contractor and planning a build, capturing homeowners researching months before they are ready to commission." }
    ],
    impactTable: [
      { metric: "Completed work visibility", before: "Not published", after: "Portfolio by service type", delta: "Documented" },
      { metric: "Service scope clarity", before: "Undifferentiated", after: "Design and build separated", delta: "Structured" },
      { metric: "Early-stage audience reach", before: "None", after: "Article and guide content", delta: "Added" }
    ],
    deliverables: ["Portfolio Site", "Service Category System", "Article Templates", "Contact & Enquiry Pages"]

  },
  {
    id: "happy-training",
    title: "Happy Training",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "Aug 2023 – Feb 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Training Institute",
    tags: ["Training", "Courses", "Lead Gen", "Corporate"],
    image: "/img/085390af373d.webp",
    imageAlt: "Happy Training corporate training institute course catalogue website",
    metric: "15 Course Groups",
    metricBadge: "Soft Skill + Hard Skill",
    overview: "Redesign of a corporate training institute site, restructuring an unnavigable list of course links into a browsable catalogue that HR buyers can filter and shortlist from.",
    problem: "The original site listed every course as a plain text link in one continuous column — over a hundred entries with no grouping, no imagery and no hierarchy — leaving HR buyers to scan the entire page to find anything relevant to their team.",
    baselineStats: [
      { value: "Flat list", label: "All courses presented as undifferentiated text links" },
      { value: "No grouping", label: "Courses not categorised by skill type or function" },
      { value: "No visual", label: "Course pages carried no imagery or scannable structure" }
    ],
    solutions: [
      { title: "Course Category Architecture", body: "Restructured the catalogue into fifteen course groups spanning leadership, sales and marketing, service, safety, digital and knowledge management, so HR buyers can navigate by the capability gap they are solving." },
      { title: "Visual Course Cards with Filtering", body: "Replaced text links with image-led cards and a category filter, making the catalogue scannable rather than something to be read line by line." },
      { title: "Trainer Credibility Layer", body: "Foregrounded the four delivery formats — group coaching, hard-skill workshop, training and workshop, training and activity — with photography of live sessions, since corporate buyers assess the trainer as much as the syllabus." }
    ],
    impactTable: [
      { metric: "Catalogue structure", before: "Single flat text list", after: "15 grouped categories", delta: "Restructured" },
      { metric: "Course presentation", before: "Text links only", after: "Image cards with filter", delta: "Scannable" },
      { metric: "Delivery format clarity", before: "Not stated", after: "4 formats surfaced", delta: "Defined" }
    ],
    deliverables: ["Site Redesign", "Course Catalogue System", "Category Filter UI", "Responsive Marketing Site"]

  },
  {
    id: "once-accounting",
    title: "Once Accounting",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Accounting Services",
    tags: ["Sale Page", "Paid Ads", "Lead Gen", "Accounting"],
    image: "/img/112eda399d4e.webp",
    imageAlt: "Once Accounting company registration service sale page for paid advertising",
    metric: "3 Pricing Tiers",
    metricBadge: "Built for Paid Ads",
    overview: "Single-page sale page for an accounting firm, built as a paid-advertising landing destination for company registration and monthly bookkeeping services.",
    problem: "Ad traffic arrives with one question — what does it cost and how long does it take — but a conventional corporate site buries pricing behind an enquiry form, losing the visitor before the firm ever gets a lead.",
    baselineStats: [
      { value: "No landing page", label: "Paid traffic sent to a general corporate site" },
      { value: "Price on request", label: "Service fees not stated up front" },
      { value: "Unclear", label: "Registration process and timeline not explained" }
    ],
    solutions: [
      { title: "Price-Led Offer Presentation", body: "Three registration packages published openly at ฿4,000, ฿2,000 and ฿1,900 with the inclusions listed against each, so an ad visitor can qualify themselves in seconds instead of filling a form to find out." },
      { title: "Four-Step Process Explainer", body: "The registration journey reduced to four numbered steps — form, document preparation, signing, receiving the completed set — anchored by a one-week completion promise." },
      { title: "Persistent Conversion Bar", body: "Phone number and LINE contact repeated after every content block, matching how a single-page ad funnel converts rather than relying on one footer form." }
    ],
    impactTable: [
      { metric: "Landing destination", before: "General corporate site", after: "Dedicated sale page", delta: "Purpose-built" },
      { metric: "Pricing visibility", before: "On request", after: "3 tiers published", delta: "Open" },
      { metric: "Contact touchpoints", before: "Footer form only", after: "Repeated after each block", delta: "Multiplied" }
    ],
    deliverables: ["Sale Page Design", "Pricing Comparison Blocks", "Process Explainer Graphics", "Logo & Brand Assets"]

  },
  {
    id: "endless-eco",
    title: "Endless Eco",
    client: "BEURDEV CO., LTD.",
    timeline: "May 2024 – Aug 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Renewable Energy",
    tags: ["Solar", "Calculator", "Local SEO", "Lead Gen"],
    image: "/img/9df6a7ddadfa.webp",
    imageAlt: "Endless Eco solar rooftop installation website with savings calculator",
    metric: "Up to 70% Bill Cut",
    metricBadge: "Free Site Survey",
    overview: "Bilingual site for a solar rooftop installer in Chachoengsao, built around a savings calculator that turns an abstract investment into a number the visitor can act on.",
    problem: "Solar is a high-consideration purchase where the buyer's real question is financial, not technical — how much will I save and when do I break even — but installer sites lead with equipment specifications and hide the economics behind a quote request.",
    baselineStats: [
      { value: "Spec-led", label: "Installers present equipment before financial return" },
      { value: "Quote-gated", label: "Savings and payback only available on enquiry" },
      { value: "Unclear", label: "Permit and installation process not explained upfront" }
    ],
    solutions: [
      { title: "Interactive Savings Calculator", body: "Visitors enter their monthly bill and daytime usage share to get recommended system size, monthly savings, payback period and 25-year total — answering the financial question before any contact is required." },
      { title: "Four-Step Process Transparency", body: "The journey from free site survey through design, PEA permits and switch-on stated openly, including that Endless Eco handles all utility paperwork — the part homeowners most fear." },
      { title: "Bilingual Local-SEO Structure", body: "Thai and English served together throughout, with geographic targeting for Chachoengsao and the Eastern provinces, since solar buying is a local search behaviour." }
    ],
    impactTable: [
      { metric: "Financial answer", before: "Quote required", after: "Instant calculator", delta: "Self-serve" },
      { metric: "Process visibility", before: "Not explained", after: "4 steps published", delta: "Transparent" },
      { metric: "Language coverage", before: "Single language", after: "Thai and English", delta: "Bilingual" }
    ],
    deliverables: ["Marketing Site", "Savings Calculator UI", "Portfolio & Blog Templates", "Bilingual TH/EN System"]

  },
  {
    id: "cwnh-hospital",
    title: "CWNH Nursing Home",
    client: "BEURDEV CO., LTD.",
    timeline: "Jun 2024 – Sep 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Elderly Care",
    tags: ["Elderly Care", "Healthcare", "Trust", "Lead Gen"],
    image: "/img/51a82624552f.webp",
    imageAlt: "Chaeng Watthana Nursing Home elderly care centre website",
    metric: "24-Hour Care",
    metricBadge: "From ฿19,000 / month",
    overview: "Site for a 24-hour elderly care home, designed for adult children choosing where to place a parent — a decision driven by trust in the people and the facility, not by feature lists.",
    problem: "Families choosing a nursing home are deciding who will care for their parent daily, often while feeling guilty about the decision. Care centre sites typically list services and stay silent on the two things that actually settle it: who the staff are and what the rooms genuinely look like.",
    baselineStats: [
      { value: "Unseen staff", label: "Care team not introduced to prospective families" },
      { value: "No facility view", label: "Rooms and equipment not shown honestly" },
      { value: "Price on request", label: "Monthly and daily rates not published" }
    ],
    solutions: [
      { title: "Care Team Introduction", body: "Named staff with photographs and credentials — doctor, nurses, caregivers — because families are entrusting a person, not a facility, and want to see who that person is before visiting." },
      { title: "Honest Facility Photography", body: "Real photographs of rooms, beds, medical equipment and daily activities rather than stock imagery, letting families assess conditions before committing to a site visit." },
      { title: "Published Care Rates", body: "Monthly and daily pricing stated openly from ฿19,000 per month and ฿1,000 per day, with the inclusions listed, so families can assess affordability without an uncomfortable enquiry call." }
    ],
    impactTable: [
      { metric: "Care team visibility", before: "Not introduced", after: "Named staff with photos", delta: "Personal" },
      { metric: "Facility transparency", before: "Not shown", after: "Real room photography", delta: "Honest" },
      { metric: "Pricing disclosure", before: "On request", after: "Monthly and daily published", delta: "Open" }
    ],
    deliverables: ["Marketing Site", "Service & Pricing Pages", "Team Profile Layouts", "Article Templates"]

  },
  {
    id: "pumacha-lifestyle",
    title: "Pumacha Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Mar 2024 – May 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Garment Manufacturing",
    tags: ["Manufacturing", "OEM", "Garment", "B2B"],
    image: "/img/142b87fa6b04.webp",
    imageAlt: "Pumacha garment and bag OEM manufacturing website",
    metric: "One-Stop Service",
    metricBadge: "Oeko-Tex Certified",
    overview: "Site for a garment and bag OEM manufacturer producing premium promotional apparel, positioned to win corporate buyers sourcing production directly rather than through agents.",
    problem: "Corporate buyers sourcing promotional apparel usually reach factories through agents, paying a margin without knowing who actually produces their order — and factories that sell direct have no way to prove they are the manufacturer rather than another intermediary.",
    baselineStats: [
      { value: "Agent-mediated", label: "Buyers reaching factories through intermediaries" },
      { value: "Unproven", label: "No evidence distinguishing factory from trading agent" },
      { value: "Unstated", label: "Testing certification not surfaced to buyers" }
    ],
    solutions: [
      { title: "Direct-From-Factory Positioning", body: "The no-agent argument stated explicitly and backed with production floor photography — cutting, sewing and finishing lines — so buyers can see the operation rather than take the claim on trust." },
      { title: "Capability & Product Range Display", body: "Garment categories and a bag collection shown together, including work produced for recognised brands, demonstrating the range a one-stop supplier is expected to cover." },
      { title: "Certification as Buying Signal", body: "Oeko-Tex testing certification surfaced prominently, since it is the standard corporate buyers screen on when the order includes childrenswear." }
    ],
    impactTable: [
      { metric: "Supply chain positioning", before: "Reached via agents", after: "Direct factory contact", delta: "Disintermediated" },
      { metric: "Production capability evidence", before: "Claimed only", after: "Factory floor photography", delta: "Shown" },
      { metric: "Certification visibility", before: "Not stated", after: "Oeko-Tex surfaced", delta: "Published" }
    ],
    deliverables: ["Corporate Marketing Site", "Product Collection Layouts", "Capability Pages", "Contact & Enquiry Flow"]

  },
  {
    id: "clean-all-kleen",
    title: "Clean All Kleen",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jun 2024",
    role: "UX/UI Designer",
    category: "Web Design & Facility Services",
    tags: ["Facility Services", "B2B", "Sale Page", "Lead Gen"],
    image: "/img/b795be97cdda.webp",
    imageAlt: "Clean All Kleen commercial and industrial cleaning service sale page",
    metric: "3 Service Lines",
    metricBadge: "Industrial & Commercial",
    overview: "Single-page site for a commercial cleaning contractor covering big cleaning, industrial cleanroom work and drain de-greasing across factories, offices, malls and showrooms.",
    problem: "Commercial cleaning contracts are awarded on evidence that the contractor has handled comparable sites, but service companies typically describe what they offer in text without showing a single job they have completed.",
    baselineStats: [
      { value: "Undifferentiated", label: "Service lines not separated by site type" },
      { value: "No evidence", label: "Completed jobs not shown to prospective clients" },
      { value: "Unclear scope", label: "Facility types served not stated explicitly" }
    ],
    solutions: [
      { title: "Three-Service Structure", body: "Work divided into big cleaning, industrial cleanroom service and drain de-greasing, each with its own imagery so a facility manager can identify their requirement immediately rather than reading a paragraph." },
      { title: "Completed Work Evidence Grid", body: "A photo grid of real jobs — factory floors, ducting, upholstery, crews in protective equipment — giving procurement the comparable-site evidence that decides commercial cleaning contracts." },
      { title: "Scope Stated in the Hero", body: "The facility types served listed up front — homes, condos, offices, factories, restaurants, malls, showrooms — so a visitor knows within seconds whether the contractor covers their site." }
    ],
    impactTable: [
      { metric: "Service presentation", before: "Text description", after: "3 lines with imagery", delta: "Structured" },
      { metric: "Completed work evidence", before: "None shown", after: "Job photography grid", delta: "Documented" },
      { metric: "Coverage clarity", before: "Implied", after: "Facility types listed", delta: "Explicit" }
    ],
    deliverables: ["Sale Page Design", "Service Category Blocks", "Work Gallery Layout", "Contact & Map Section"]

  },
  {
    id: "zea-management",
    title: "Zea Management",
    client: "BEURDEV CO., LTD.",
    timeline: "Jul 2024 – Oct 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Business Services",
    tags: ["Back Office", "Accounting", "B2B", "Corporate"],
    image: "/img/2b62be871cf9.webp",
    imageAlt: "Zea Corp back office and accounting outsourcing website",
    metric: "4 Service Lines",
    metricBadge: "Outsourced Back Office",
    overview: "Corporate site for a back-office outsourcing firm handling accounting, audit, tax and company registration for businesses that would rather not run those functions in-house.",
    problem: "Outsourcing your accounts means handing a stranger your financial records, so the decision runs on credibility — but service firms typically list what they do without evidencing why they can be trusted with it.",
    baselineStats: [
      { value: "Undifferentiated", label: "Service scope presented as a flat list" },
      { value: "Unproven", label: "Expertise claimed without supporting evidence" },
      { value: "Unclear", label: "Engagement process not explained to prospects" }
    ],
    solutions: [
      { title: "Three-Step Engagement Explainer", body: "The path to working together reduced to three steps — brief, Google Form, consultation — removing the ambiguity that stops businesses starting an outsourcing conversation." },
      { title: "Credibility Through Proof", body: "Client logos and a record of speaking engagements including tax advisory seminars, evidencing recognised expertise rather than asserting it." },
      { title: "Premium Dark Identity", body: "A black and gold visual system that signals professional financial services, distinguishing the firm from the generic templates common in the accounting category." }
    ],
    impactTable: [
      { metric: "Engagement process", before: "Not explained", after: "3 steps published", delta: "Clarified" },
      { metric: "Credibility evidence", before: "Claimed", after: "Clients and speaking record", delta: "Demonstrated" },
      { metric: "Category positioning", before: "Generic", after: "Premium dark identity", delta: "Differentiated" }
    ],
    deliverables: ["Corporate Marketing Site", "Service Pages", "Article Templates", "Contact & Enquiry Flow"]

  }
];
