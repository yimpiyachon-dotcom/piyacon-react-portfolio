// The twenty web & brand design projects shown on the Projects page.
export const webProjects = [
  {
    id: "contracable",
    title: "Contractable",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web App & Legal Tech",
    platform: "Responsive Web Application",
    industry: "Legal Tech / Document Automation",
    tags: ["Legal Tech", "Document Automation", "Thai Language", "Self-Service"],
    stack: ["Figma", "Component Library", "Form UX", "Thai Typography"],
    image: "/img/cover/contracable.webp",
    imageAlt: "Contractable Thai legal document platform — template catalogue, guided form and live document preview",
    metric: "Word & PDF Output",
    metricBadge: "Guided Form + Live Preview",
    hook: "Legal paperwork without a lawyer — pick a Thai contract template, answer the questions, watch the document write itself.",
    overview:
      "A Thai-language platform for producing legal documents without a lawyer. A user browses a catalogue of business and personal templates, fills in a guided form while the finished contract renders live beside it, then downloads the result as Word or PDF. Accounts keep completed documents and purchase receipts.",
    kpis: [
      { value: "Self-service", label: "Document creation", sub: "no lawyer needed for standard contracts" },
      { value: "Live preview", label: "Form and document side by side", sub: "wording visible while answering" },
      { value: "Word + PDF", label: "Editable and final output", sub: "downloadable from the member area" },
    ],
    problem:
      "Producing a standard Thai contract meant either paying a lawyer for routine paperwork or copying a template of unknown provenance from the internet. Non-lawyers cannot tell which clauses a document needs, whether the wording holds up, or what they are agreeing to — so the choice was between unnecessary cost and unmanaged risk.",
    baselineStats: [
      { value: "Lawyer or guesswork", label: "no middle option for routine documents" },
      { value: "Blind templates", label: "downloaded files gave no guidance on what to fill in" },
      { value: "Unverifiable", label: "no way to know whether the wording was sound" },
    ],
    solutions: [
      {
        title: "Template Catalogue Split by Audience",
        body: "Documents are organised into business and personal groups on the homepage and the catalogue page, so a visitor identifies their situation before facing any legal vocabulary."
      },
      {
        title: "Guided Form Beside a Live Document",
        body: "The fill-in flow puts the question set on the left and the rendering contract on the right, with a progress bar underneath. The user sees their answer become the legal sentence, which is what turns an opaque form into something they can check."
      },
      {
        title: "Plain-Language Framing Around Each Template",
        body: "Every template opens with its last-updated date, format, page count and a three-step explanation of what happens next — the questions a first-time user asks before committing time to a form."
      },
      {
        title: "Member Area for Documents and Receipts",
        body: "Completed documents stay downloadable in Word and PDF from the account area, alongside purchase receipts and account settings, so a document can be retrieved and re-issued later."
      }
    ],
    impactTable: [
      { metric: "Route to a standard contract", before: "Lawyer or unverified template", after: "Guided self-service flow", delta: "Opened" },
      { metric: "Document wording during entry", before: "Unseen until download", after: "Rendered live beside the form", delta: "Visible" },
      { metric: "Access to finished documents", before: "One-time download", after: "Stored in the member area", delta: "Retained" },
      { metric: "Template selection", before: "Undifferentiated list", after: "Split by business and personal", delta: "Structured" }
    ],
    quote:
      "The live preview is the whole product. A form that hides its output asks the user to trust it; a form that writes the contract in front of them lets the user verify it — and for a legal document, verification is the feature.",
    quoteRole: "Design rationale · Contractable",
    learnings: [
      "Showing the generated document while the form is being answered does more for confidence than any amount of reassuring copy around the form.",
      "Splitting templates into business and personal lets people self-identify before they meet legal vocabulary, which is where a general list loses them.",
      "Thai legal text is dense and long-form: type scale and line height carried more of the usability work here than layout did."
    ],
    deliverables: ["Marketing Site", "Template Catalogue", "Guided Document Flow", "Member Area & Account Settings", "Article Templates"]
  },
  {
    id: "aluminium-loop",
    title: "Aluminium Loop",
    client: "Aluminium Loop",
    timeline: "Mar 2026 – May 2026",
    role: "Freelance UX/UI Designer",
    category: "Web Redesign & Sustainability",
    platform: "Responsive Marketing Website",
    industry: "Recycling / Circular Packaging",
    tags: ["Heuristic Evaluation", "Redesign", "Sustainability", "Bilingual"],
    stack: ["Figma", "Heuristic Evaluation", "Design System", "Thai Typography"],
    image: "/img/cover/aluminium-loop.webp",
    imageAlt: "Aluminium Loop website redesign — heuristic audit of the live site and a rebuilt bilingual marketing surface",
    metric: "Audit-Led Redesign",
    metricBadge: "11 Page Templates",
    hook: "A freelance engagement that started by auditing the client's live site against named usability heuristics, then rebuilt it on what the audit found.",
    overview:
      "A redesign of the public website for Aluminium Loop, a Thai closed-loop aluminium can recycling business. The engagement began as a heuristic evaluation of the site already in production — each finding written against a named heuristic so it could be argued rather than asserted — and the redesign that followed rebuilt the marketing surface as eleven bilingual templates on a single dark-ground system. Delivered as a complete design; not yet in production at the time of writing.",
    kpis: [
      { value: "Heuristic audit", label: "Live site reviewed section by section", sub: "each finding tied to a named heuristic and a specific fix" },
      { value: "11 templates", label: "Landing, about, solutions, editorial, contact", sub: "one dark-ground system across the whole site" },
      { value: "TH / EN", label: "Bilingual throughout", sub: "language toggle in the primary navigation" },
    ],
    problem:
      "The company was already publishing real, externally sourced recycling figures — cans returned, CO₂e avoided against the US EPA WARM model, energy saved — but the page structure worked against them. The counter carrying those numbers filled the entire desktop viewport, so nothing below it was visible and no cue suggested the page continued; the hero headline sat off the grid the rest of the page used; and reading an actual drop-off location meant leaving the site's main page for a separate one.",
    baselineStats: [
      { value: "Full-screen counter", label: "the What We Do figure filled the viewport with no visible next section" },
      { value: "Off-grid hero", label: "headline block misaligned with the content beneath it" },
      { value: "Off-page branch lookup", label: "finding a drop-off point meant leaving the page holding everything else" }
    ],
    solutions: [
      {
        title: "Heuristic Evaluation Before Any Redesign",
        body: "Six sections of the live site were reviewed against named heuristics — Proximity, Consistency & Standards, Closure & Continuity, Match Between System and the Real World, Recognition Rather Than Recall. Naming the heuristic is what turned each note from an opinion about polish into a fix the client could act on."
      },
      {
        title: "Impact Figures Reformatted as a Stat Row",
        body: "The recycling figures kept their prominence but lost the full-screen treatment, sitting instead as a compact row that lets the next section break the fold. The same content the audit found unreadable now gets read, because a visitor can see there is more page to scroll."
      },
      {
        title: "Branch Table Beside the Map",
        body: "The nationwide branch map gained the location table inline, using horizontal space that was already empty. Someone looking for a drop-off point near them no longer has to leave the page and find their way back."
      },
      {
        title: "One System Across Eleven Templates",
        body: "Landing, closed-loop recycling, our story, founder, what we do, sustainable solutions, article index and detail, news index and detail, and contact — all built on a dark ground that lets the aluminium product photography carry the pages, in Thai and English."
      }
    ],
    impactTable: [
      { metric: "What We Do section", before: "Full-screen can counter", after: "Compact stat row above the fold break", delta: "Continued" },
      { metric: "Hero headline", before: "Off the page grid", after: "Aligned to the content grid", delta: "Aligned" },
      { metric: "Branch lookup", before: "Separate page behind a link", after: "Table inline beside the map", delta: "Inlined" },
      { metric: "Headings and partner logos", before: "Mixed alignment, undersized logos", after: "One alignment rule, raised logo scale", delta: "Unified" }
    ],
    quote:
      "An audit that says a page looks unpolished can be dismissed. An audit that says the headline breaks the grid the rest of the page follows, and names the heuristic, is a fix — and that difference is what got the redesign commissioned.",
    quoteRole: "Design rationale · Aluminium Loop",
    learnings: [
      "Naming the heuristic behind a finding is what makes a critique commissionable; without it, the client hears taste rather than a problem.",
      "A number given the whole viewport reads as the end of the page, not as emphasis — scale bought attention here at the cost of everything below it.",
      "A link that leaves the page is a real cost on a site with one main surface: the visitor has to decide to come back, and some of them will not."
    ],
    deliverables: ["Heuristic Evaluation Report", "Bilingual Page Template Set", "Editorial & News Templates", "Sustainable Solutions Pages"]
  },
  {
    id: "beurdev-agency",
    title: "Beurdev Agency",
    client: "BEURDEV CO., LTD.",
    timeline: "Feb 2024 – Oct 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Tech Agency",
    platform: "Responsive Marketing Website",
    industry: "Software Development Agency",
    tags: ["Agency", "Software House", "Dark Mode", "Pricing"],
    stack: ["Figma", "Design System", "Dark UI", "Thai Typography"],
    image: "/img/cover/beurdev-agency.webp",
    imageAlt: "Beurdev agency site rebuild — dark engineering-led marketing site naming the tech stack and publishing package pricing",
    metric: "4 Priced Packages",
    metricBadge: "8 Named Technologies",
    hook: "An agency site that answers the two questions a prospect actually has — what do you build with, and what does it cost — before they have to ask for either.",
    overview:
      "The flagship site for Beurdev, the software house behind much of the client work in this portfolio. The rebuild replaced a five-page, illustration-led marketing site with a dark, engineering-led one that names the frameworks the team builds with and publishes package pricing on the page — the two things the previous site made every prospect ask for by email.",
    kpis: [
      { value: "4 packages", label: "Priced on the page, 4,900–54,500 ฿", sub: "scope and inclusions listed per tier" },
      { value: "8 technologies", label: "Named across iOS, front end and back end", sub: "React Native, Flutter, React, Vue, Angular, NestJS, Laravel, Django" },
      { value: "3 stages", label: "Design, Build, Roll Out", sub: "shown as Starting, On Progress and Success" },
    ],
    problem:
      "The previous site was a five-page marketing template on a light teal palette, carried by stock illustration. It described services in general terms, named no technologies and published no prices — so a prospect assessing a software house could not tell whether the team built in what their project needed, or worked within the budget they had, without making contact first. Every enquiry started from zero.",
    baselineStats: [
      { value: "No stack named", label: "services described in general terms, no technologies listed" },
      { value: "No prices", label: "budget fit could only be established by making contact" },
      { value: "Template look", label: "illustration-led light theme that read as any small agency" }
    ],
    solutions: [
      {
        title: "Dark Ground as a Positioning Choice",
        body: "The rebuild moved from light teal and stock illustration to a dark ground with green accents and code texture. For a technical service the visual register is part of the argument — the old palette positioned the team as a marketing shop, which is not what they are being hired as."
      },
      {
        title: "The Stack, Named",
        body: "iOS App, Front End and Back End each list the actual frameworks: React Native and Flutter; React, Vue and Angular; NestJS, Laravel and Django. A prospect with an existing codebase or a hiring constraint can check compatibility on the page instead of asking and waiting."
      },
      {
        title: "Four Packages With Prices on the Page",
        body: "Scope is published rather than quoted — one, three and five page builds at 4,900, 14,500 and 24,500 baht, plus a 54,500 baht tier carrying a new design. Every tier lists the same baseline inclusions: responsive layouts, a back-office CMS and Google Analytics."
      },
      {
        title: "Engagement Model as Three Stages",
        body: "Design, Build and Roll Out are presented as Starting, On Progress and Success, with QA and testing named inside the final stage rather than left implied. A client can place their project in the sequence using vocabulary they were given before the work began."
      }
    ],
    impactTable: [
      { metric: "Technology stack", before: "Not stated", after: "8 frameworks across 3 groups", delta: "Disclosed" },
      { metric: "Pricing", before: "Quote on enquiry", after: "4 tiers published with inclusions", delta: "Published" },
      { metric: "Visual positioning", before: "Light illustrated template", after: "Dark engineering-led system", delta: "Repositioned" },
      { metric: "Engagement model", before: "Undescribed", after: "Design → Build → Roll Out", delta: "Named" }
    ],
    quote:
      "A prospect choosing a software house runs two checks: can you build in what my project needs, and can you do it for what I have. The old site answered neither without an email — and publishing both costs you only the enquiries that were never going to close.",
    quoteRole: "Design rationale · Beurdev Agency",
    learnings: [
      "Publishing prices filters rather than deters — the enquiries that stop arriving are the ones that would not have closed, and the ones that do arrive already know the budget.",
      "Naming frameworks is a stronger credibility signal than describing capability, because it is checkable; a claim a visitor can verify carries weight that a claim they cannot does not.",
      "For a technical service the visual register is an argument on its own, and a light illustrated template was quietly making the wrong one."
    ],
    deliverables: ["Agency Flagship Site", "Dark Design System", "Package & Pricing Structure", "Tech Stack & Process Sections"]
  },
  {
    id: "patc-institute",
    title: "PATC Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jun 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Education",
    platform: "Responsive Marketing Website",
    industry: "Aviation Training / Vocational Education",
    tags: ["Education", "Aviation", "Courses", "Accreditation"],
    stack: ["Figma", "Design System", "Thai Typography", "Content Templates"],
    image: "/img/cover/patc-institute.webp",
    imageAlt: "Pattaya Aviation Training Center website — accreditation marks, course catalogue and public training schedule",
    metric: "4 Accreditations Surfaced",
    metricBadge: "14 Courses · 3 Service Lines",
    hook: "A training centre whose authority sat in a filing cabinet as four certificates — the site's job was to move them to the point where someone decides whether to enrol.",
    overview:
      "The website for Pattaya Aviation Training Center, a Thai aviation and occupational safety training provider. The site carries three separate lines of business — public and in-house training, occupational measurement services, and meeting room hire — and puts the centre's accreditations, each traced back to the certificate that issues it, in front of anyone weighing up a course.",
    kpis: [
      { value: "4 accreditations", label: "ISO 9001:2015, CAAT and two national endorsements", sub: "each traced to the issued certificate" },
      { value: "14 courses", label: "Filterable catalogue with category sidebar", sub: "one detail template across every course" },
      { value: "3 service lines", label: "Training, measurement services, room hire", sub: "ordered down one homepage instead of competing" },
    ],
    problem:
      "The centre's authority to train rests on paperwork — an ISO 9001:2015 quality management registration, Civil Aviation Authority of Thailand approval and two national endorsements — but a certificate is a scanned document, not something a visitor encounters while deciding. On top of that the organisation runs three separate businesses that were all claiming the top of the homepage, so someone arriving to book safety training first had to work out which of the three they were looking at.",
    baselineStats: [
      { value: "Certificates as documents", label: "accreditation lived in scanned files, not on the site" },
      { value: "Three lines, one page", label: "training, measurement services and room hire competing for the same space" },
      { value: "Unstructured course pages", label: "no consistent shape for duration, format, prerequisites or outline" }
    ],
    solutions: [
      {
        title: "Accreditation Traced to Source",
        body: "The four trust marks on the site are not decoration — each was mapped back to the document it stands for before it was drawn: the CCQM ISO 9001:2015 registration, the CAAT approval and two government endorsements. Working from the certificates themselves is what kept the row to what the centre can evidence."
      },
      {
        title: "Three Service Lines, One Order",
        body: "Training, occupational measurement (light, sound and heat) and room hire — Foxtrot, Lima and Oscar at thirty seats each, sixty combined — each get their own block in a fixed order down the homepage. Separating them means a visitor recognises within a screen which one they came for."
      },
      {
        title: "A Schedule Table That Answers Booking Questions",
        body: "The public training schedule carries cohort number, dates, course, room, general and member pricing, location and a registration action on a single row. The questions a prospective student would otherwise phone in are answered where they are asked."
      },
      {
        title: "One Course Detail Template",
        body: "Every course renders the same fields — subject, duration, delivery format, participant and instructor qualification, objectives, outline and evaluation method. Across fourteen courses that consistency is what lets someone compare two of them before choosing."
      }
    ],
    impactTable: [
      { metric: "Accreditation", before: "Scanned certificates held off-site", after: "Four marks traced to source documents", delta: "Surfaced" },
      { metric: "Service lines", before: "Competing on one page", after: "Three blocks in a fixed order", delta: "Separated" },
      { metric: "Course information", before: "Shaped per course", after: "One template across 14 courses", delta: "Standardised" },
      { metric: "Booking a public cohort", before: "Enquiry required first", after: "Dates, pricing and registration in the row", delta: "Self-serve" }
    ],
    quote:
      "A training centre's product is trust, and here that trust was sitting in a filing cabinet as four certificates. The design work was less about presenting courses than about moving those documents to the moment someone decides whether to enrol.",
    quoteRole: "Design rationale · PATC Website",
    learnings: [
      "Working from the issued certificate rather than a list of claims keeps a trust row honest — you can only show a mark you are able to point at a document for.",
      "An organisation with several revenue lines will each want the top of the homepage; fixing the order is a design decision that stops the visitor having to do the sorting.",
      "A course catalogue is a comparison tool before it is a reading tool, which makes template consistency worth more than any single page's polish."
    ],
    deliverables: ["Marketing Site", "Course Catalogue & Detail Template", "Public Training Schedule", "Accreditation Pages"]
  },
  {
    id: "the-right-office",
    title: "The Right Office",
    client: "BEURDEV CO., LTD.",
    timeline: "May 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Business Services",
    platform: "Responsive Marketing Website",
    industry: "Serviced Offices / Business Services",
    tags: ["Serviced Office", "Business Services", "Expatriate", "Bangkok"],
    stack: ["Figma", "Design System", "Card System", "Responsive Layout"],
    image: "/img/cover/the-right-office.webp",
    imageAlt: "The Right Office website rebuild — serviced office, visa advisory, accounting and incorporation services for foreign businesses in Bangkok",
    metric: "6 Services Structured",
    metricBadge: "Fixed-Width Site Rebuilt",
    hook: "Six services sold to one customer — a foreign business setting up in Thailand — rebuilt out of a site that buried all six in prose.",
    overview:
      "The website for The Right Office, a Bangkok provider whose business runs wider than desks: serviced and virtual offices, visa and work permit advisory, accounting, secretarial services and company incorporation for foreign businesses operating in Thailand. The rebuild replaced a fixed-width site from an earlier web era with a responsive one organised around those six services and the single audience they share.",
    kpis: [
      { value: "6 services", label: "Office, virtual office, visa, accounting, secretarial, incorporation", sub: "each card opens with the question it answers" },
      { value: "1 audience", label: "Foreign businesses and expatriates setting up in Thailand", sub: "address, permit, company and tax treated as one need" },
      { value: "6 client logos", label: "Including DHL, DSV, TRUMPF and Harmless Harvest", sub: "moved onto the homepage beneath the services" },
    ],
    problem:
      "The site being replaced was built for a desktop monitor and an earlier web — fixed width, dense paragraph blocks, body text at a size no phone would render usefully. Underneath that, the six services the business actually sells were described inside running prose, so a visitor who needed a work permit and an office and a tax filing could not see that one provider covered all three. For a client base of foreigners setting up in Thailand, that combination is the entire proposition.",
    baselineStats: [
      { value: "Fixed-width layout", label: "built for a desktop monitor, unusable on a phone" },
      { value: "Services in prose", label: "six offerings described inside paragraphs rather than addressable" },
      { value: "Proof unused", label: "the client roster did not appear where a visitor was deciding" }
    ],
    solutions: [
      {
        title: "Six Services, Six Cards",
        body: "Serviced office, virtual office, visa and work permit advisory, accounting, secretarial services and business incorporation each get a card that opens with the question it answers — \"Are you a start-up that needs a prestigious office address?\", \"Do you run a small business that needs an impressive address?\" A visitor self-identifies before reading any description."
      },
      {
        title: "One Audience Across Every Service",
        body: "The six are unrelated as products and identical as a customer: someone landing in Bangkok to set up a business needs the address, the permit, the company and the tax filing in the same month. Ordering the site around that person rather than around the service catalogue is what lets a single visit cover all six."
      },
      {
        title: "Client Logos as the Credibility Layer",
        body: "TRUMPF, Harmless Harvest, H&R, DHL and DSV sit on the homepage directly under the services. For a provider handling a foreign company's legal and tax presence in an unfamiliar jurisdiction, who already trusts them is the strongest argument available."
      },
      {
        title: "The Inclusions List, Kept but Structured",
        body: "The old site's long list — BTS Chong Nonsi location, 24-hour access seven days a week, personalised reception and PABX, call forwarding, direct line with IDD, video conferencing, daily cleaning — was the most genuinely useful content it had. It was kept in full and given a heading and a shape rather than trimmed for looking dense."
      }
    ],
    impactTable: [
      { metric: "Layout", before: "Fixed width, desktop only", after: "Responsive across devices", delta: "Rebuilt" },
      { metric: "Service discovery", before: "Described inside paragraphs", after: "Six cards, each led by a question", delta: "Addressable" },
      { metric: "Client proof", before: "Absent from the homepage", after: "Logo row beneath the services", delta: "Surfaced" },
      { metric: "Inclusions list", before: "Undifferentiated block of text", after: "Kept in full, given structure", delta: "Retained" }
    ],
    quote:
      "The six services look unrelated until you notice they are the same customer in the same month — someone landing in Bangkok who needs an address, a permit, a company and a tax filing. Ordering the site around that person, not the catalogue, is the whole decision.",
    quoteRole: "Design rationale · The Right Office",
    learnings: [
      "A dense list is not automatically something to delete — the old site's inclusions list was its most useful content, and the fix was structure rather than removal.",
      "Opening a service card with the question it answers lets a visitor self-select faster than any description of the service can.",
      "When several products share one customer, ordering the site around the customer beats ordering it around the catalogue."
    ],
    deliverables: ["Marketing Site", "Service Card System", "Responsive Rebuild", "Client Proof & Location Pages"]
  },
  {
    id: "max-solution",
    title: "Max Solution Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Mar 2024 – May 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Security Hardware",
    platform: "Responsive Marketing & Catalogue Site",
    industry: "Access Control / Security Hardware",
    tags: ["Access Control", "Security Hardware", "B2B", "Thai Language"],
    stack: ["Figma", "Design System", "Thai Typography", "Catalogue Templates"],
    image: "/img/cover/max-solution.webp",
    imageAlt: "Max Solution website — access control hardware catalogue, quotation request and named customer installations",
    metric: "9 Customer References",
    metricBadge: "Models & Dates Per Install",
    hook: "A security-hardware supplier whose strongest sales asset was its install list — so the site was built to make every reference checkable down to the model number.",
    overview:
      "The website for Max Solution, a Thai supplier and installer of access-control hardware — face scanners, card readers, swing and flap gates, automatic door sensors. It is built around two assets the business already had and was not putting to work: a catalogue buyers want to browse by device type, and two decades of named installations at international schools, restaurant groups and manufacturers that could be shown with the models and dates attached.",
    kpis: [
      { value: "9 references", label: "Named customers with install month and models", sub: "expandable list of every product at each site" },
      { value: "20+ years", label: "Operating since 2003", sub: "published references span 2018 to 2023" },
      { value: "Quote, not cart", label: "Product enquiry with a preferred callback window", sub: "LINE Official and a ten-line phone system alongside" },
    ],
    problem:
      "In access control the purchase is a risk decision rather than a preference one. A school or a factory is buying something that will govern who gets through a door for the next decade, and it will be specified by someone who needs to know the exact model and whether it has held up somewhere comparable. The business had that evidence — two decades of installations at named organisations — but evidence a buyer cannot check does no work, and a buyer who already knows the device they need has no way to start from it.",
    baselineStats: [
      { value: "Evidence unpublished", label: "two decades of named installations not usable by a buyer" },
      { value: "Specification blind", label: "no way to see which model went into a comparable site" },
      { value: "No device-first entry", label: "browsing by the hardware type a buyer already knows" }
    ],
    solutions: [
      {
        title: "References That Name the Model",
        body: "Each of the nine customer cards carries the organisation, its sector, what was installed with the model numbers written inline — G5, L4, NBT, ESW-850, F8, KB1 — the month the system went live, and an expandable list of every product at that site. A specifier can find a comparable installation and read its bill of materials rather than take a claim on trust."
      },
      {
        title: "Scale Stated in the Customer's Own Terms",
        body: "The references quote deployment size where it exists: over 500 units across Mr. D.I.Y branches, over 300 across MK Restaurant Group's brands including Yayoi, Mio-Mio Paradise and Laem Charoen Seafood. For anyone weighing a multi-site rollout that is the number which settles whether the supplier can carry it."
      },
      {
        title: "Catalogue Browsable by Device",
        body: "A category strip runs across the top of the homepage — face scan, card reader, swing gate, flap gate, card connector, autodoor sensor, wireless switch — so a buyer who already knows the device type skips the marketing entirely. Highlight and best-of blocks sit below for the ones who arrive without a specification."
      },
      {
        title: "A Quote Path, Not a Checkout",
        body: "The primary action is a quotation request asking which product, the details, and — the part that matters to a trade buyer — the window in which they would prefer to be called back. A LINE Official QR code sits beside it for the buyers who will not make a phone call at all."
      }
    ],
    impactTable: [
      { metric: "Checking a comparable install", before: "Ask a salesperson", after: "Read the reference card", delta: "Self-serve" },
      { metric: "Knowing which model to specify", before: "Ask a salesperson", after: "Models named in every reference", delta: "Published" },
      { metric: "Browsing by device type", before: "Requires knowing the range first", after: "Category strip above the marketing", delta: "Direct" },
      { metric: "Getting a price", before: "Phone call in office hours", after: "Quote form with a callback window", delta: "Asynchronous" }
    ],
    quote:
      "In access control the buyer is a specifier, and a specifier does not want a brochure — they want to know which model went into a building like theirs and whether it is still running. Naming the model in every reference is the whole credibility strategy.",
    quoteRole: "Design rationale · Max Solution Website",
    learnings: [
      "A reference is only evidence if it is checkable — naming the model and the month is what turns a logo wall into something a specifier can use.",
      "Deployment scale in the customer's own words carries further than any claim the supplier makes about its own capacity.",
      "A trade buyer often knows the device before they know the brand, which makes a category strip above the marketing worth the homepage space it takes."
    ],
    deliverables: ["Marketing Site", "Product Catalogue Structure", "Customer Reference System", "Quotation Request Flow"]
  },
  {
    id: "orgenees-wellness",
    title: "Orgeness Orange Juice Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Jun 2024 – Aug 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Food Manufacturing",
    platform: "Responsive Marketing & Catalogue Site",
    industry: "Food Manufacturing / Wholesale & OEM",
    tags: ["Manufacturing", "Wholesale", "OEM", "FMCG"],
    stack: ["Figma", "Design System", "Thai Typography", "Catalogue Templates"],
    image: "/img/cover/orgenees-wellness.webp",
    imageAlt: "Orgeness fresh orange juice website — wholesale price tiers, four formulas and OEM contract production",
    metric: "4 Formulas · 5 Sizes",
    metricBadge: "Wholesale Tiers Published",
    hook: "A juice factory that earns from cases, not bottles — so the site publishes the wholesale break-points instead of making a reseller ask for them.",
    overview:
      "The site for ORGENESS GROUP, a fresh orange juice factory selling wholesale and OEM contract production. It is built to convert resellers and own-brand clients rather than individual shoppers: four formulas each get their own page, every bottle size carries a retail price and two quantity break-points, and contract manufacturing runs as a second track alongside the catalogue.",
    kpis: [
      { value: "4 formulas", label: "Original and Premium, each with a low-calorie version", sub: "treated as separate products, not variants" },
      { value: "5 sizes + jug", label: "220 ml to 1,000 ml, plus a six-litre catering jug", sub: "retail price and two wholesale breaks per size" },
      { value: "2 buyer tracks", label: "Wholesale resellers and OEM own-brand clients", sub: "carried on one site without competing" },
    ],
    problem:
      "The business earns from wholesale volume and contract manufacturing, but a conventional product site speaks to someone buying a single bottle. A reseller deciding whether to stock the brand needs the break-points and the margin before anything else, and a company wanting its own label produced needs to know that is on offer at all — neither of which a retail-shaped site tells them. Both were left to a phone call.",
    baselineStats: [
      { value: "Retail-framed", label: "the site spoke to individual buyers, not resellers" },
      { value: "Terms on request", label: "wholesale pricing and quantity breaks not published" },
      { value: "OEM invisible", label: "own-brand contract production not surfaced as an offer" }
    ],
    solutions: [
      {
        title: "Wholesale Economics on the Product Page",
        body: "Each formula gets a full-width price panel: bottles from 220 ml to 1,000 ml plus a six-litre catering jug, retail price under every size, and two quantity break-points beneath that. A reseller can calculate margin on the page instead of opening a conversation to get a number."
      },
      {
        title: "Four Formulas as Four Products",
        body: "Original and Premium, each with a low-calorie version, get their own page rather than sitting behind a variant selector. A reseller stocks one line, not the range, so each formula has to stand on its own with its own pricing panel and its own contact point."
      },
      {
        title: "OEM Contract Production as a Second Track",
        body: "A dedicated services page positions own-brand manufacturing around low capital outlay and no storefront requirement, with LINE and phone consultation as the entry point. It shares the site with the wholesale catalogue without competing with it for the homepage."
      },
      {
        title: "Food-Safety Credibility Layer",
        body: "The factory's certification is surfaced on the page alongside the production process and the plant itself. Food-grade buyers screen on standards before they consider taste, so the document belongs where the decision happens rather than on a page nobody reaches."
      }
    ],
    impactTable: [
      { metric: "Audience the site addresses", before: "Retail buyers", after: "Wholesale resellers and OEM clients", delta: "Repositioned" },
      { metric: "Wholesale terms", before: "On request by phone", after: "Two break-points published per size", delta: "Open" },
      { metric: "Contract manufacturing", before: "Not offered on the site", after: "Its own services track", delta: "Surfaced" },
      { metric: "Formula selection", before: "Variants of one product", after: "Four products with their own pages", delta: "Separated" }
    ],
    quote:
      "A reseller's first question is margin, and every hour they spend waiting for a price is an hour a competitor's published sheet is answering it. Putting the break-points on the product page is not transparency for its own sake — it is the shortest route to the order.",
    quoteRole: "Design rationale · Orgeness Orange Juice Website",
    learnings: [
      "Publishing quantity break-points does the qualifying work a sales call would otherwise spend its first ten minutes on.",
      "When buyers stock one line rather than the range, giving each formula its own page beats a variant selector that assumes they are comparing.",
      "For food-grade buyers the certification is not a trust badge at the bottom of the page — it is a screening gate that has to sit before the product story."
    ],
    deliverables: ["Wholesale Marketing Site", "Product & Pricing Pages", "OEM Enquiry Flow", "Article & SEO Templates"]
  },
  {
    id: "billion-plus",
    title: "Billion Plus Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Mar 2024 – May 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Industrial Equipment",
    platform: "Responsive Marketing & Catalogue Site",
    industry: "Industrial Cleaning Equipment",
    tags: ["Industrial", "Catalogue", "Rental", "B2B"],
    stack: ["Figma", "Wireframes", "Design System", "Thai Typography"],
    image: "/img/cover/billion-plus.webp",
    imageAlt: "Billion Plus Service website — industrial floor-cleaning machine catalogue, specification tables and rental",
    metric: "5 Machine Classes",
    metricBadge: "Sized by m²/hr, Not Model",
    hook: "Facilities buyers do not know model names — they know how many square metres have to be clean before the next shift. The catalogue was built on that number.",
    overview:
      "The site for Billion Plus Service, a Thai supplier of industrial floor-cleaning machines running three lines: sales, rental and repair. The catalogue is organised by machine class and by cleaning throughput in square metres per hour, so a facilities buyer can size equipment against the floor they actually have instead of working backwards from model names.",
    kpis: [
      { value: "5 classes", label: "Mini washer, single disc, burnisher, walk-behind and ride-on scrubber", sub: "menu also reaches sweepers, vacuums and cleaning chemicals" },
      { value: "m²/hr published", label: "Throughput and tank capacity per machine size", sub: "sizes from 20 to 32 inches, standard and heavy duty" },
      { value: "Sell · rent · repair", label: "Three lines declared in the hero", sub: "rental entry price stated on the same screen" },
    ],
    problem:
      "Someone sourcing a floor scrubber is usually a facilities or plant manager, not an equipment specialist. They know their floor area and their shift window; they do not know which machine width clears it in time. A catalogue organised by model name asks them to learn the range before they are allowed to choose from it — and the rental option, often the right answer for a one-off deep clean, sits behind the same wall.",
    baselineStats: [
      { value: "Model-led", label: "catalogue organised by SKU rather than by cleaning task" },
      { value: "Specs unmatched to need", label: "no way to size a machine against a known floor area" },
      { value: "Three lines, one page", label: "sales, rental and repair competing for the same attention" }
    ],
    solutions: [
      {
        title: "Catalogue Grouped by Machine Class",
        body: "Machines sit in five classes — mini floor washer, single disc, high-speed burnisher, walk-behind scrubber and ride-on scrubber — with a category menu that also reaches sweepers, vacuum and carpet cleaners, high-pressure jets, escalator cleaners and the cleaning chemicals that go alongside them. A buyer enters at the task rather than the SKU."
      },
      {
        title: "Specification Tables That Answer the Sizing Question",
        body: "Each table sets machine size, from 20 to 32 inches in standard and heavy-duty builds, against water tank capacity, cleaning throughput in square metres per hour, and the rental term. A plant manager who knows their floor area and their shift length can read the right size straight off the table instead of describing the problem to a salesperson first."
      },
      {
        title: "Three Business Lines Declared Up Front",
        body: "Sell, rent, repair sits directly beneath the brand name in the hero, with the rental entry price — 333 baht a day — on the same screen. Someone who arrived intending to buy, and for whom renting is the cheaper answer, finds that out before they leave rather than after."
      },
      {
        title: "Industrial Client Wall as Proof",
        body: "Manufacturers including AAPICO, AGC Automotive, NHK Spring, JBT, KYB, Häfele, Sumitomo Rubber, NSK, IJTT, Nissin Electric and Bangkok Summit carry the credibility a facilities buyer screens on. In plant procurement, which comparable operations already use a supplier is the reference that settles it."
      }
    ],
    impactTable: [
      { metric: "Catalogue entry point", before: "Model number", after: "Machine class and cleaning task", delta: "Restructured" },
      { metric: "Sizing a machine", before: "Ask a salesperson", after: "Throughput in m²/hr against size", delta: "Self-serve" },
      { metric: "Rental option", before: "Behind an enquiry", after: "Entry price and terms in the open", delta: "Surfaced" },
      { metric: "Business lines", before: "Competing on one page", after: "Sell, rent, repair stated in the hero", delta: "Declared" }
    ],
    quote:
      "A plant manager does not want a machine, they want the floor clean before the next shift starts. Publishing square metres per hour against machine size turns a catalogue into a calculation they can run themselves.",
    quoteRole: "Design rationale · Billion Plus Website",
    learnings: [
      "Buyers navigate by the constraint they own — floor area and shift length — not by the vocabulary the supplier uses, so the spec that decides the purchase belongs in the table rather than in a datasheet.",
      "Keeping the wireframe on the board beside the finished pages is what kept the structural argument reviewable once the visual design arrived.",
      "When a business sells, rents and repairs, saying so in the hero costs three words and stops a rental customer bouncing off a sales page."
    ],
    deliverables: ["Wireframes", "Product Catalogue System", "Rental Specification Tables", "Responsive Marketing Site"]
  },
  {
    id: "unionchemical",
    title: "Unionchemical Website",
    client: "BEURDEV CO., LTD.",
    timeline: "May 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Industrial",
    platform: "Responsive Corporate Website",
    industry: "Ethanol Manufacturing / Chemicals",
    tags: ["Industrial", "Corporate", "B2B", "Ethanol"],
    stack: ["Figma", "Design System", "Bilingual Content", "Thai Typography"],
    image: "/img/cover/unionchemical.webp",
    imageAlt: "Union Chemical and Equipment corporate website — certification architecture, four ethanol products and ESG section",
    metric: "Corporate Site, 20+ Pages",
    metricBadge: "ESG + Health as 4th Pillar",
    hook: "An ethanol manufacturer selling into food and pharmaceutical supply chains, where the buyer's first question is never the product — it is which certificates you hold.",
    overview:
      "The corporate site for Union Chemical and Equipment (UC&E), a Thai ethanol manufacturer supplying food, pharmaceutical and industrial customers. It is weighted toward governance rather than catalogue: four products sit inside a structure that gives at least as much room to certification, company history, ESG and organisational structure, because in a regulated supply chain those are what a buyer audits before a grade is ever discussed.",
    kpis: [
      { value: "4 products", label: "Ethanol food additive, Solvent 95, avia sanitiser, chemical", sub: "each with its own packaging-container specification" },
      { value: "4 ESG pillars", label: "Environmental, Social, Governance — and Health", sub: "a fourth pillar with its own page, not a subsection" },
      { value: "5 sections", label: "About, Businesses, ESG, Media, Contact across 20+ pages", sub: "bilingual Thai and English throughout" },
    ],
    problem:
      "Selling ethanol into food and pharmaceutical manufacturing is a qualification process before it is a sale. A procurement or QA reviewer works down a list — production licence, ISO, GMP, HACCP, halal, laboratory calibration — and a supplier who cannot produce that evidence quickly is screened out regardless of what the product is like. A conventional product site leads with grades and treats the paperwork as a footnote, which inverts the order the buyer actually works in.",
    baselineStats: [
      { value: "Product-first order", label: "grades foregrounded, certification treated as a footnote" },
      { value: "History unstructured", label: "capital, licences and certifications with no single view" },
      { value: "ESG unplaced", label: "no home for the disclosures regulated buyers request" }
    ],
    solutions: [
      {
        title: "Certification Given Its Own Architecture",
        body: "Marks including FDA, GMP, ISO and halal sit high on the homepage, and a dedicated Certification page splits the evidence into Our Standard, Product Standard, Environmental Standards, and laboratory testing and measurement calibration. A QA reviewer can work down their own checklist without opening a conversation to do it."
      },
      {
        title: "Company History Shown Twice, Deliberately",
        body: "The milestone page carries the same record as both a dated table and a horizontal timeline — capital increases, licences, ISO and HACCP certifications, product launches. The table serves a reviewer verifying a specific year; the timeline serves a visitor forming a view of how long the company has held its standards. Two readers, two shapes, one record."
      },
      {
        title: "Packaging Specified on Every Product",
        body: "Each product page ends with its packaging containers, from 20-litre drums through 200-litre drums and 1,000-litre IBC tanks up to ISO tank, with net volume and net weight per unit. For an industrial buyer how a product ships determines whether it can be bought at all, so it sits on the page rather than in a follow-up."
      },
      {
        title: "ESG With a Fourth Pillar",
        body: "Sustainability runs Environmental, Social and Governance and adds Health, each with its own page. For a manufacturer whose output reaches food and pharmaceutical chains, health is the axis buyers ask about directly — folding it into Social would have buried the disclosure most likely to be requested."
      }
    ],
    impactTable: [
      { metric: "Order the buyer works in", before: "Product grades first", after: "Certification given its own section", delta: "Reordered" },
      { metric: "Verifying a certification year", before: "Ask the company", after: "Dated milestone table and timeline", delta: "Self-serve" },
      { metric: "Packaging and shipping units", before: "Ask a salesperson", after: "Specified on every product page", delta: "Published" },
      { metric: "ESG disclosure", before: "Nowhere to point to", after: "Four pillars, a page each", delta: "Structured" }
    ],
    quote:
      "In a regulated supply chain the sale opens with an audit, not a pitch. Giving certification its own architecture instead of a badge row at the bottom of the page matches the order a QA reviewer actually works in.",
    quoteRole: "Design rationale · Unionchemical Website",
    learnings: [
      "In regulated industries the compliance evidence is the product page, and leading with grades inverts the order the buyer works in.",
      "The same history can serve two readers differently — a dated table for someone verifying a year, a timeline for someone forming an impression — which makes showing it twice correct rather than redundant.",
      "Health sitting alongside the standard three ESG pillars fits a manufacturer whose output reaches food and pharmaceutical chains better than folding it into Social would have."
    ],
    deliverables: ["Corporate Website", "Certification & Standards Architecture", "Product & Packaging Templates", "ESG Section", "Careers & CV Submission"]
  },
  {
    id: "thaimanee-craft",
    title: "Thaimanee Craft Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Feb 2024 – Apr 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Manufacturing",
    platform: "Responsive Corporate Website",
    industry: "Plastic Injection Moulding / OEM",
    tags: ["Manufacturing", "OEM", "Industrial", "Bilingual"],
    stack: ["Figma", "Design System", "Bilingual TH/EN", "Thai Typography"],
    image: "/img/cover/thaimanee-craft.webp",
    imageAlt: "Thaimanee Craft website — published machine inventory, clamping tonnage range and four production categories",
    metric: "73 Machines Published",
    metricBadge: "35–1,200 Ton Range",
    hook: "OEM buyers qualify a factory on its machine list and its tonnage range. Publishing both turns the first enquiry into a shortlist decision the buyer has already made.",
    overview:
      "The corporate site for Thaimanee Craft, a Thai OEM plastic injection moulder and mould maker operating since 1983. It is built for industrial buyers rather than browsers: the machine inventory and clamping range are published outright, work is organised into the four things the factory actually does, and everything runs in Thai and English so an overseas buyer reaches the same evidence a domestic one does.",
    kpis: [
      { value: "73 machines", label: "26 mould-making, 47 injection", sub: "CNC, W-CUT, EDM and milling named individually" },
      { value: "35–1,200 tons", label: "Injection clamping range published", sub: "a buyer checks their part fits before enquiring" },
      { value: "Since 1983", label: "Four decades of end-to-end plastic parts manufacture", sub: "ISO 9001:2015, bilingual Thai and English" },
    ],
    problem:
      "An OEM buyer sourcing injection moulding qualifies a factory on two things before anything else: what machines it runs, and whether its clamping tonnage covers their part. Neither is marketing copy — they are pass or fail filters, and a supplier who publishes neither cannot be shortlisted without a call or a factory visit. That is a slow gate for a domestic buyer and close to an impassable one for an overseas buyer working in English.",
    baselineStats: [
      { value: "Capacity unstated", label: "machine inventory and tonnage range not published" },
      { value: "No capability catalogue", label: "nothing for a buyer to match their own part against" },
      { value: "Thai only", label: "no English entry point for overseas OEM enquiries" }
    ],
    solutions: [
      {
        title: "Machine Inventory Published Outright",
        body: "The homepage states it plainly: 26 mould-making machines across CNC, W-CUT, EDM and milling, 47 injection machines, and a clamping range from 35 to 1,200 tons. A buyer can confirm their part fits the range before writing an email, which is the only thing the first visit needs to achieve."
      },
      {
        title: "Four Categories, Real Production Photography",
        body: "Moulds, plastic injection, assembly and screen printing each carry a photo grid of parts the factory has actually produced rather than stock imagery. An OEM buyer matches their component against existing output by eye, so the photography is doing evidence work rather than decoration."
      },
      {
        title: "Quality and Technology as Their Own Sections",
        body: "Technology and Quality Control & Standards sit in the top-level navigation alongside products, with ISO 9001:2015 in the footer of every page. For a supplier that gets audited rather than browsed, those belong in the nav rather than buried inside an About page."
      },
      {
        title: "Bilingual Throughout, Not Just the Entry Page",
        body: "The Thai and English toggle carries across company history, vision, mission and objectives — the mission is written out in English on the page itself — so an overseas buyer reaches the same credibility material rather than a reduced summary of it."
      }
    ],
    impactTable: [
      { metric: "Checking clamping tonnage", before: "Call or factory visit", after: "35–1,200 tons on the homepage", delta: "Self-serve" },
      { metric: "Machine capability", before: "Unstated", after: "26 mould-making, 47 injection", delta: "Published" },
      { metric: "Matching a part", before: "Nothing to compare against", after: "Four categories of production photography", delta: "Catalogued" },
      { metric: "Overseas enquiry route", before: "Thai only", after: "Thai and English throughout", delta: "Bilingual" }
    ],
    quote:
      "A moulding buyer's first question is whether your press can close on their part. Answering it on the homepage costs one line and removes the only reason they had to call before shortlisting you.",
    quoteRole: "Design rationale · Thaimanee Craft Website",
    learnings: [
      "Capacity figures a supplier may treat as internal are the buyer's shortlisting criteria, and publishing them converts a phone call into a decision that has already been made.",
      "Photography of the factory's own parts does evidence work that stock imagery cannot, because the buyer is matching their component against it rather than looking at it.",
      "Putting quality and technology in the top-level navigation reflects how an audited supplier is actually assessed, instead of hiding both inside an About page."
    ],
    deliverables: ["Corporate Marketing Site", "Product Category System", "Bilingual TH/EN UI", "Capability & Certification Pages"]
  },
  {
    id: "supakit-amulet",
    title: "Supakit Amulet Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Jan 2024 – Mar 2024",
    role: "UX/UI Designer",
    category: "Web Design & Manufacturing",
    platform: "Responsive Marketing & Portfolio Site",
    industry: "Amulet & Buddhist Object Manufacturing",
    tags: ["Manufacturing", "Portfolio", "Craft", "B2B"],
    stack: ["Figma", "Design System", "Thai Typography", "Photography Direction"],
    image: "/img/cover/supakit-amulet.webp",
    imageAlt: "Supakit Watthumongkol website — die-struck and 3D sculpted portfolio, workshop photography and founder-fronted enquiry",
    metric: "2 Craft Disciplines",
    metricBadge: "Owner's Direct Line, Site-Wide",
    hook: "In amulet commissioning the order goes to a person, not a company — so the founder's face and his own mobile number sit on the homepage rather than behind a contact form.",
    overview:
      "The site for Supakit Watthumongkol, a Thai amulet and Buddhist-object foundry. Commissioning sacred objects is a trust decision made on craftsmanship and on who answers the phone, so the site is built around two things: photographic evidence of finished work and of the production floor, and the founder placed personally at every point where an enquiry starts.",
    kpis: [
      { value: "2 disciplines", label: "Die-struck coins and medals, 3D sculpted pieces", sub: "shot on black so relief and metal finish read" },
      { value: "Owner-fronted", label: "Named, photographed, with his own mobile number", sub: "on the homepage call-to-action and the about page" },
      { value: "6 process photos", label: "Casting, hand finishing, welding, inspection", sub: "evidence of the standard rather than a claim about it" },
    ],
    problem:
      "Commissioning religious objects is a trust-heavy decision, and it turns on two things a website usually cannot carry: whether the finish is good enough, and whether the person taking the order can be relied on. A temple committee or a commissioning client judged both by visiting the workshop or asking around. With no published work, no view of the production floor and no named person to call, there was nothing to assess before that first phone call — which made the call itself the filter.",
    baselineStats: [
      { value: "No portfolio", label: "finished work not viewable before an enquiry" },
      { value: "Process unseen", label: "casting and hand finishing undocumented" },
      { value: "No named contact", label: "nothing telling a client who they would be dealing with" }
    ],
    solutions: [
      {
        title: "Two Disciplines, Photographed to Be Judged",
        body: "Work splits into die-struck coins and medals, and 3D sculpted pieces — statues, rings, bangles. Every item is shot against black so relief, metal and finish read, because the client is assessing craftsmanship from the photograph alone and nothing else on the page can stand in for that."
      },
      {
        title: "The Production Floor as Evidence",
        body: "Six photographs of the workshop: inspection under a loupe, casting, hand finishing, welding, the team at work, and a monk present on site. These carry the production standard as evidence rather than as a claim, which counts for more here than any description of quality control could."
      },
      {
        title: "The Founder Placed Where Enquiries Start",
        body: "Boy Supakit appears by name and photograph with his own mobile number on the homepage call-to-action and again on the about page. In this market a commission is entrusted to a person, so putting that person behind a generic form removes the thing actually being decided."
      },
      {
        title: "Contact Persistent, Not Parked",
        body: "Two phone numbers and a LINE account sit in the header of every page and repeat at each section break, alongside a contact page with a form and a map. The distance between looking at a piece and asking about it is never more than one element."
      }
    ],
    impactTable: [
      { metric: "Assessing craftsmanship", before: "Workshop visit or word of mouth", after: "Two categorised bodies of work", delta: "Published" },
      { metric: "Production standard", before: "Claimed", after: "Six workshop photographs", delta: "Evidenced" },
      { metric: "Who the client deals with", before: "Unstated", after: "Founder named, pictured, direct mobile", delta: "Personal" },
      { metric: "Enquiry route", before: "Phone only", after: "Phone, LINE and form, header-persistent", delta: "Expanded" }
    ],
    quote:
      "A temple committee is not choosing a supplier, they are choosing someone to entrust a sacred object to. Putting the founder's face and his own mobile number on the homepage is not a warm touch — it is the thing being decided.",
    quoteRole: "Design rationale · Supakit Amulet Website",
    learnings: [
      "Where a purchase is entrusted rather than transacted, a named and photographed person outperforms any amount of company-voice copy.",
      "Shooting metalwork on black is a functional decision rather than a stylistic one — the client is judging relief and finish, and a busy background removes the only evidence they have.",
      "Documenting the production floor answers a quality question that no written claim about quality control can reach."
    ],
    deliverables: ["Portfolio Site", "Work Category System", "Article & News Templates", "Contact & Location Pages"]
  },
  {
    id: "chaocom-thailand",
    title: "Chaocom Thailand Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Mar 2024 – Jun 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & IT Rental",
    platform: "Responsive Marketing & Lead-Gen Site",
    industry: "IT Equipment Rental",
    tags: ["B2B", "Rental", "Corporate IT", "Lead Gen"],
    stack: ["Figma", "Design System", "Thai Typography", "Form UX"],
    image: "/img/cover/chaocom-thailand.webp",
    imageAlt: "Chaocom Thailand website — computer and notebook rental, published replacement terms and quotation request",
    metric: "Daily · Monthly · Yearly",
    metricBadge: "1-Day Replacement in Bangkok",
    hook: "Renting IT is weighed against buying it — so the site argues the case, terms and failure handling included, before it shows a single laptop.",
    overview:
      "A lead-generation site for Chaocom Thailand, a computer and notebook rental service supplying offices, training sessions, seminars and events. It is structured as an argument before a catalogue: five reasons to rent rather than buy, the delivery and replacement terms stated in the open, then the machines, then a quotation form specific enough for sales to price directly.",
    kpis: [
      { value: "From 1 unit", label: "No minimum rental quantity", sub: "stated as a reason on the homepage, not buried in terms" },
      { value: "1–3 days", label: "Free replacement when hardware fails", sub: "one day in Bangkok, one to three upcountry" },
      { value: "3 classes", label: "Laptop, MacBook and desktop with models named", sub: "Dell, Lenovo, HP, Acer and Apple" },
    ],
    problem:
      "A company renting IT equipment is not comparing rental providers, it is comparing renting against buying. That decision turns on things a product page never addresses: whether capital has to be committed, what happens when a machine fails mid-project, and whether a five-laptop training session is even large enough to be worth quoting. None of it was argued anywhere a prospect could reach, so every enquiry opened by re-explaining the model from scratch.",
    baselineStats: [
      { value: "Unargued", label: "the rent-versus-buy case not made anywhere on site" },
      { value: "Terms unstated", label: "delivery, replacement and failure handling unpublished" },
      { value: "Minimum assumed", label: "prospects expected an order minimum and did not ask" }
    ],
    solutions: [
      {
        title: "Five Reasons, Before the Catalogue",
        body: "The homepage argues the model before showing a machine: no capital risk, maintained hardware with immediate replacement, no minimum rental quantity, advisory support, and rental treated as an operating expense rather than a capital purchase. The audience is someone who has not yet decided to rent, so the argument has to come first."
      },
      {
        title: "Failure Handling Published as a Term",
        body: "The service conditions page states what happens when a machine breaks: a replacement delivered free within one day in Bangkok, one to three days in the surrounding provinces and upcountry, with software issues resolved remotely. For a client running a seminar on Tuesday, that single term is the decision."
      },
      {
        title: "Equipment Catalogue by Class, Models Named",
        body: "Laptop, MacBook and desktop, each with actual models — Dell, Lenovo, HP and Acer laptops; MacBook Air M1, MacBook Pro M1, MacBook Air M2 and iMac 2021; Dell and Lenovo Core i3 through i7 desktops. A prospect matches a specification rather than describing one and waiting to hear whether it exists."
      },
      {
        title: "A Quotation Form Sales Can Price",
        body: "The request captures company and address, contact, purpose of rental, rental period, required specification, quantity, and the collection and return dates — a brief rather than an open contact box. The documents needed to rent, including the company certificate, Por Por 20 and signatory ID, are listed separately so nothing stalls after the quote is accepted."
      }
    ],
    impactTable: [
      { metric: "Rent-versus-buy case", before: "Explained by sales, per enquiry", after: "Five reasons on the homepage", delta: "Argued" },
      { metric: "What happens on failure", before: "Asked during negotiation", after: "1 day Bangkok, 1–3 days upcountry, free", delta: "Published" },
      { metric: "Minimum order", before: "Assumed by prospects", after: "Stated: one unit is enough", delta: "Removed" },
      { metric: "Enquiry quality", before: "Open contact form", after: "Structured quotation brief", delta: "Qualified" }
    ],
    quote:
      "Nobody shopping for rental laptops is comparing rental companies — they are deciding whether to rent at all. The homepage has to win that argument before the catalogue is worth showing.",
    quoteRole: "Design rationale · Chaocom Thailand Website",
    learnings: [
      "When a service competes against not using the service at all, the homepage's job is the argument, and the catalogue earns its place only after that argument lands.",
      "Publishing the failure terms — how fast a replacement arrives and at whose cost — moves a rental decision further than any amount of copy about reliability.",
      "Listing the paperwork required to rent removes the stall that happens after a quote is accepted, a step most enquiry flows leave to a later email."
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
    image: "/img/cover/thanada-construction.webp",
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
    image: "/img/cover/happy-training.webp",
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
    image: "/img/cover/once-accounting.webp",
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
    image: "/img/cover/endless-eco.webp",
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
    image: "/img/cover/cwnh-hospital.webp",
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
    image: "/img/cover/pumacha-lifestyle.webp",
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
    image: "/img/cover/clean-all-kleen.webp",
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
    image: "/img/cover/zea-management.webp",
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
