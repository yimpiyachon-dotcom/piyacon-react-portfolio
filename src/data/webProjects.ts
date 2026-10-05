// The web & brand design projects shown on the Projects page, in display order.
export const webProjects = [
  {
    id: "portfolio-redesign",
    title: "Portfolio Website Redesign",
    client: "Personal Project",
    timeline: "Sep 2026 – Oct 2026",
    role: "UX/UI Designer",
    category: "Web Redesign & Portfolio",
    platform: "Responsive Portfolio Website",
    industry: "Personal Brand / Portfolio",
    tags: ["Redesign", "Portfolio", "Heuristics", "Case Study"],
    stack: ["Figma", "React", "Design System", "Heuristic Evaluation"],
    image: "/img/cover/portfolio-redesign.webp",
    imageAlt: "Portfolio redesign: the earlier Framer template site beside the rebuilt yimpiyachon.com",
    metric: "Case-Study System",
    hook: "A redesign of this portfolio, from a Framer template where projects were covers and titles into a custom site where every project reads as a case study.",
    overview:
      "A redesign of this portfolio, moving from a site built on a Framer template to the custom build at yimpiyachon.com. The earlier site presented each project as a cover image, a category label and a title, and each case study as a long run of process boards. The redesign gives every card the information a reviewer needs to shortlist, puts every project into the same case-study template, and prerenders every page so it can be shared on its own.",
    summary:
      "A redesign of this portfolio, from a site built on a Framer template into the custom build you are reading now. The earlier site showed 29 projects as covers with a category and a title, so a reviewer had to open each one to learn what it was. The redesign puts that answer on the card, gives every project the same case-study structure, opens each study on its overview rather than its process boards, and rebuilds the about, stack and contact pages around what a reviewer needs next.",
    kpis: [
      { value: "Recognition", label: "Recognition rather than recall", sub: "every card shows role, platform and client up front" },
      { value: "Consistency", label: "Consistency and standards", sub: "one case-study template behind every project" },
      { value: "Minimalism", label: "Aesthetic and minimalist design", sub: "overview read first, process boards in their own tab" },
    ],
    problem:
      "The earlier site ran on a Framer template: a fixed left sidebar, a typewriter headline and a grid of project covers. Read against the heuristics, the projects page showed 29 covers with only a category label and a title, and 24 of those labels read the same 'WEB DESIGN', so nothing on a card helped a reviewer recall what the project was or what role was played. Application case studies were a single long column of text and process boards with no summary before them: measured at a 1440px desktop width, the Smart Forest, Smart Watcher and Area 22 pages ran 50,321, 26,248 and 15,319 pixels tall. Web and brand projects had the opposite problem: 17 of the 20 pages carried fewer than 70 words of text, and 13 of them used the same sentence about building a company profile for Google Ads and SEO.",
    baselineStats: [
      { value: "Covers only", label: "29 projects shown as an image, a category and a title" },
      { value: "Same label", label: "24 of the 29 cards carried the same WEB DESIGN category" },
      { value: "Boards first", label: "each case study ran as one long column of process boards" },
      { value: "Thin web pages", label: "17 of 20 web project pages under 70 words of text" },
    ],
    solutions: [
      {
        heuristic: "Recognition rather than recall",
        title: "Cards That Say What the Project Was",
        body: "Every card now carries the role, the platform and the industry, two short descriptors over the cover, a one-sentence description, the tools used, the client and the timeline. A reviewer can shortlist from the projects page instead of opening each project to remember what it was.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Template for Every Case Study",
        body: "Each project uses the same case-study structure: an executive summary with three highlights, the problem, the design decisions, a before-and-after table and what was learned. Moving between projects means reading new content in a structure already learned, rather than learning a new page each time.",
      },
      {
        heuristic: "Aesthetic and minimalist design",
        title: "Overview First, Process Boards on Demand",
        body: "Each case study opens on its overview and keeps the process boards in a separate tab, where any board opens full-screen for detail. The summary is read before the boards instead of sitting underneath them.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "Two Groups of Work, Named",
        body: "The projects page splits the work into web applications and platforms and web and brand design, with a filter and a count on each. A reviewer hiring for product work or for marketing sites goes straight to the group that matches the role.",
      },
      {
        heuristic: "User control and freedom",
        title: "Contact Without Leaving the Page",
        body: "The separate contact page and its message form became a panel that opens over whatever page the visitor is on, with copy buttons for the email and phone number, links to LINE, LinkedIn and Facebook, and the resume one click away. Closing it returns the visitor to the same place, so getting in touch never costs them their position in a case study.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "Every Page Ready to Share",
        body: "Every page is prerendered with its own title, description and share card, so a case-study link sent in a chat unfurls as that project rather than as the homepage.",
      },
    ],
    impactTable: [
      { metric: "Recognition", before: "Cover, category and title only", after: "Role, platform, client and timeline on each card", delta: "Readable" },
      { metric: "Consistency", before: "Process boards as the whole case study", after: "One case-study template for every project", delta: "Standardised" },
      { metric: "Minimalism", before: "Boards before any summary", after: "Overview first, boards in their own tab", delta: "Focused" },
      { metric: "Real-world", before: "One grid of 29 covers", after: "Two named groups with a filter and a count", delta: "Grouped" },
      { metric: "Consistency", before: "Web pages with a cover, a board and a sentence", after: "The same case-study template as the applications", delta: "Documented" },
      { metric: "Control", before: "Contact on its own page", after: "Contact panel over any page, resume one click away", delta: "In place" },
    ],
    quote:
      "A reviewer reads a portfolio in a hurry. The earlier site asked them to open every project to find out what it was; the redesign puts that answer on the card and the same structure behind every click.",
    quoteRole: "Design rationale · Portfolio Website Redesign",
    learnings: [
      "Redesigning your own portfolio is the same problem as any client site: the reader is a stranger, and the cards have to answer their first question without a click.",
      "A shared case-study template does more for credibility than any single polished page, because it makes every project comparable with the next.",
      "Rewriting thirty case studies made one rule necessary: no number goes on a page unless it can be traced to a source.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "From Template to Case-Study System",
      processIntro:
        "Every page of the earlier Framer site set beside its rebuilt version: home, projects, both kinds of case study, about, stack, contact and mobile.",
    },
  },
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
    metric: "Live Document Preview",
    hook: "Legal paperwork without a lawyer — pick a Thai contract template, answer the questions, watch the document write itself.",
    overview:
      "A Thai-language platform for producing legal documents without a lawyer. A user browses a catalogue of business and personal templates, fills in a guided form while the finished contract renders live beside it, then downloads the result as Word or PDF. Accounts keep completed documents and purchase receipts.",
    summary:
      "A self-service platform for producing standard legal documents, designed for a non-lawyer who cannot judge a contract's wording on their own. The design makes the output visible while it is being written, frames each template in the user's own situation, and keeps finished documents in the user's hands. Each decision below is tied to the usability heuristic it serves.",
    kpis: [
      { value: "Visibility", label: "Visibility of system status", sub: "live preview writes each answer into the document" },
      { value: "Real-world", label: "Match between system and the real world", sub: "templates grouped by situation, not legal terms" },
      { value: "Guidance", label: "Help and documentation", sub: "each template says what happens next before the form" },
    ],
    problem:
      "Someone producing a routine contract without a lawyer cannot tell which clauses a document needs or whether the wording holds up. Read against the heuristics, the usual routes failed them: a downloaded template hid what each blank would turn into, so the result was only visible once it was finished; template lists were named in legal vocabulary rather than in the situation the user was in; and nothing explained what the process would ask of them before they started.",
    baselineStats: [
      { value: "Output hidden", label: "a blank template showed nothing of the finished document" },
      { value: "Legal vocabulary", label: "templates named in legal terms, not the user's situation" },
      { value: "No guidance", label: "nothing said what the process would ask for before it began" },
    ],
    solutions: [
      {
        heuristic: "Visibility of system status",
        title: "The Document Writes Itself Beside the Form",
        body: "The fill-in screen puts the guided questions on the left and the contract on the right, with a progress bar underneath. Each answer appears in the document as it is entered, so the user can check the wording they are producing and always knows how much of the form is left.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "Templates Grouped by the User's Situation",
        body: "The catalogue splits documents into business and personal before any legal vocabulary appears, and the homepage leads with a search box rather than a pitch. A user identifies their situation in their own terms first, which is where a list of legal document names loses them.",
      },
      {
        heuristic: "Help and documentation",
        title: "Each Template Explains Itself First",
        body: "Every template page states what the document is, when it was last revised, its format and length, and the four steps ahead, with an FAQ on the public site behind it. The questions a first-time user has before investing time in a form are answered before the form begins.",
      },
      {
        heuristic: "User control and freedom",
        title: "Documents and Account in the User's Hands",
        body: "The member area keeps finished documents with their status and a Word or PDF download, alongside receipts, profile settings, password change and account deletion. A user can fetch a document again, check a receipt or close the account without asking anyone.",
      },
    ],
    impactTable: [
      { metric: "Visibility", before: "Wording unseen until download", after: "Rendered live beside the form", delta: "Visible" },
      { metric: "Real-world", before: "Templates in legal vocabulary", after: "Split by business and personal, search first", delta: "Relatable" },
      { metric: "Guidance", before: "No explanation before the form", after: "Revision date, format and four steps up front", delta: "Explained" },
      { metric: "Control", before: "One-time download", after: "Documents, receipts and account settings kept", delta: "Retained" },
    ],
    quote:
      "A form that hides its output asks the user to trust it; a form that writes the document in front of them lets the user check it. For someone without legal training, being able to check is the feature.",
    quoteRole: "Design rationale · Contractable",
    learnings: [
      "Showing the output while it is being produced is the strongest form of system status: it replaces reassurance with something the user can verify.",
      "Letting people choose by situation before they meet specialist vocabulary is a real-world match that a single list of document names cannot provide.",
      "Each template page answers what a first-time user asks before committing to a form: what the document is, how long it runs and what the steps are. Answering those up front is help that costs the user nothing to read.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "From Template Choice to Finished Document",
      processIntro:
        "The public site that helps a visitor find the right template, the fill flow that writes the document live, and the member area that keeps it.",
    },
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
    hook: "A freelance engagement that started by auditing the client's live site against named usability heuristics, then rebuilt it on what the audit found.",
    overview:
      "A redesign of the public website for Aluminium Loop, a Thai closed-loop aluminium can recycling business. The engagement began as a heuristic evaluation of the site already in production — each finding written against a named heuristic so it could be argued rather than asserted — and the redesign that followed rebuilt the marketing surface as eleven page templates sharing one system: light pages under a blue hero, a navy footer, and a language switcher in the header. Delivered as a complete design; not yet in production at the time of writing.",
    summary:
      "A redesign of a recycling company's marketing site that began as a heuristic audit of the live site. Each finding was written against a named principle so it could be argued rather than asserted, and the redesign rebuilt the site on what the audit found. Delivered as a complete design; not in production at the time of writing.",
    kpis: [
      { value: "Minimalism", label: "Aesthetic and minimalist design", sub: "full-screen counter reduced to a row so the page reads on" },
      { value: "Consistency", label: "Consistency and standards", sub: "hero realigned to the grid the rest of the page follows" },
      { value: "Recognition", label: "Recognition rather than recall", sub: "location table beside the map, not on another page" },
    ],
    problem:
      "The site already carried strong content, but its layout worked against it. The audit found three main problems: a counter that filled the whole desktop viewport, so nothing below was visible and nothing suggested the page continued; a hero headline sitting off the grid the rest of the page used; and a branch map whose locations could only be read by leaving for a separate page. Smaller findings covered card styling and heading alignment that did not match the rest of the page.",
    baselineStats: [
      { value: "Scroll barrier", label: "a full-screen counter with no visible next section" },
      { value: "Off-grid hero", label: "headline block misaligned with the content beneath it" },
      { value: "Lookup elsewhere", label: "reading a location meant leaving the page for another" },
    ],
    solutions: [
      {
        heuristic: "Heuristic evaluation",
        title: "Audit the Live Site Before Proposing Anything",
        body: "Six sections of the live site were reviewed against named principles, including proximity, consistency and standards, closure and continuity, real-world match and recognition over recall. Naming the principle turned each note from an opinion about polish into a specific fix the client could act on.",
      },
      {
        heuristic: "Aesthetic and minimalist design",
        title: "Impact Figures Reduced to a Stat Row",
        body: "The figures kept their prominence but lost the full-screen treatment, sitting as a compact row that lets the next section break the fold. A visitor can see there is more page below, so the content the audit found unreadable now gets read.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Grid, One Alignment Rule",
        body: "The hero headline was realigned to the grid the rest of the page follows, section headings were given one alignment rule, card corners and shadows were brought in line with the rest of the system, and partner logos were raised to the scale of the heading above them.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "Location Table Beside the Map",
        body: "The branch map gained its location table inline, using horizontal space that was already empty. A visitor reads the nearest drop-off point while the map is still in view, instead of leaving the page and carrying the location back in their head.",
      },
    ],
    impactTable: [
      { metric: "Minimalism", before: "Full-screen counter", after: "Compact stat row above the fold break", delta: "Continued" },
      { metric: "Consistency", before: "Hero off the page grid", after: "Aligned to the content grid", delta: "Aligned" },
      { metric: "Recognition", before: "Locations on a separate page", after: "Table inline beside the map", delta: "Inlined" },
      { metric: "Consistency", before: "Mixed heading alignment and card styles", after: "One alignment rule, one card style", delta: "Unified" },
    ],
    quote:
      "An audit that says a page looks unpolished can be dismissed. An audit that says the headline breaks the grid the rest of the page follows, and names the principle, is a fix.",
    quoteRole: "Design rationale · Aluminium Loop",
    learnings: [
      "Naming the principle behind a finding is what makes a critique actionable; without it, the client hears taste rather than a problem.",
      "A number given the whole viewport reads as the end of the page, not as emphasis: scale bought attention here at the cost of everything below it.",
      "A link that leaves the page is a real cost on a site with one main surface, because the visitor has to choose to come back.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "From Heuristic Audit to Redesign",
      processIntro:
        "Four findings from the audit of the live site, each argued from a named principle, then the redesigned pages that answer them.",
    },
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
    metric: "Five Pages, One System",
    hook:
      "An agency site rebuilt so its five pages read as one company, with the frameworks the team builds in named where a technical buyer looks for them.",
    overview:
      "The flagship site for Beurdev, the software house behind much of the client work in this portfolio. The five pages being replaced did not share one look: two used a teal treatment with stock illustration, the other three a white and navy layout with a pink footer band. The rebuild keeps the five-page structure, moves every page onto one dark system with green accents, and adds a tech stack section that names the frameworks the team builds with.",
    summary:
      "A rebuild of a software agency's own site, designed for a prospect deciding whether the team fits their project before getting in touch. The design gives five pages one visual language, names the frameworks behind each service, and labels the working process by stage. Each decision below is tied to the usability heuristic it serves.",
    kpis: [
      { value: "Consistency", label: "Consistency and standards", sub: "five pages moved onto one dark system" },
      { value: "Real-world", label: "Match between system and the real world", sub: "services described by the frameworks a buyer checks" },
      { value: "Visibility", label: "Visibility of system status", sub: "each process stage labelled with its status" },
    ],
    problem:
      "The site being replaced had the right sections, a price list and a package table among them, but it did not read as one company. Read against the heuristics, its five pages used two unrelated looks, so a visitor moving between them could not be sure they were still on the same site; the team was described by role, with no frameworks named, so a technical buyer had to ask what the team builds in; and two of the pages were led by stock illustration that showed nothing of the work.",
    baselineStats: [
      { value: "Two looks", label: "five pages split between a teal and a navy layout" },
      { value: "No stack named", label: "the team described by role, with no frameworks listed" },
      { value: "Stock imagery", label: "two pages led by illustration rather than the team's work" },
    ],
    solutions: [
      {
        heuristic: "Consistency and standards",
        title: "Five Pages, One System",
        body: "Every page moves onto one dark ground with green accents and a code texture, under the same header and above the same footer. A visitor going from the home page to services, portfolio or contact stays inside one company's site rather than crossing between templates.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "The Stack, Named in the Buyer's Terms",
        body: "The tech stack splits into iOS app, front end and back end, and names each framework with its logo: React Native and Flutter; React, Vue.js and Angular; NestJS, Laravel and Django. A prospect with an existing codebase checks compatibility in the vocabulary they already use.",
      },
      {
        heuristic: "Visibility of system status",
        title: "Each Stage Labelled With Its Status",
        body: "The working process runs as three cards, Design, Build and Roll Out, tagged Starting, On Progress and Success, with QA and testing named inside the last. A client can see what each stage covers and where a project stands at each point before the work begins.",
      },
      {
        heuristic: "Aesthetic and minimalist design",
        title: "The Work in Place of Illustration",
        body: "The stock illustration gives way to screenshots of client projects and photographs of the two founders, and the four packages sit side by side with their inclusions under each price. The space that decoration took now carries what a prospect came to check.",
      },
    ],
    impactTable: [
      { metric: "Consistency", before: "Teal pages and navy pages", after: "One dark system on all five pages", delta: "Unified" },
      { metric: "Real-world", before: "Team described by role", after: "Frameworks named in three groups", delta: "Checkable" },
      { metric: "Visibility", before: "Process as a row of arrows", after: "Three stages, each with a status", delta: "Labelled" },
      { metric: "Minimalism", before: "Stock illustration", after: "Client work and founders' photos", delta: "Focused" },
    ],
    quote:
      "A prospect choosing a software house runs two checks it can make on the page: is this one serious company, and does it build in what my project needs. The rebuild puts both answers where they can be checked.",
    quoteRole: "Design rationale · Beurdev Agency",
    learnings: [
      "Naming frameworks is stronger than describing capability because it is checkable; a claim a visitor can verify in their own vocabulary carries weight that a general one does not.",
      "Consistency across pages is part of credibility: five pages in two looks read as a set of templates, not as one company.",
      "For a technical service the visual register is part of the message; illustration that carried no information was quietly saying the wrong thing.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "From Template Look to Engineering Site",
      processIntro:
        "The five pages being replaced set above their rebuilt versions, then the new home page that carries the whole pitch in one scroll.",
    },
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
    metric: "One Course Template",
    hook:
      "A training centre whose authority rested on four scanned documents — the site's job was to bring them to the point where someone decides whether to enrol.",
    overview:
      "The website for Pattaya Aviation Training Center, a Thai aviation and occupational safety training provider. The site carries three separate lines of business — public and in-house training, occupational measurement services, and meeting room hire — and puts the centre's accreditations, each traced back to the certificate that issues it, in front of anyone weighing up a course.",
    summary:
      "A course and booking site for an aviation and occupational safety training centre, designed around the three questions a visitor brings: is this centre qualified to train me, which of its services is mine, and can I compare and book a course without phoning. Each decision below is tied to the usability heuristic it serves.",
    kpis: [
      { value: "Consistency", label: "Consistency and standards", sub: "one detail template so any two courses compare field by field" },
      { value: "Recognition", label: "Recognition rather than recall", sub: "schedule row answers date, area, price and booking in one place" },
      { value: "Minimalism", label: "Aesthetic and minimalist design", sub: "competing service lines given a fixed order down the homepage" },
    ],
    problem:
      "The material the site started from answered those questions in the wrong places. The centre's accreditation existed as four scanned documents, a certificate and three official letters, none of them where a visitor decides. The business runs three unrelated services that would otherwise compete for the top of one homepage. And a catalogue of courses is only useful if two of them can be compared, which turns into a memory task when each course page takes its own shape. Read against the heuristics, those were the three gaps to close.",
    baselineStats: [
      { value: "Proof on paper", label: "accreditation held as four scanned documents, away from the pages that need it" },
      { value: "Three services", label: "training, measurement and room hire sharing one homepage" },
      { value: "Courses to compare", label: "a catalogue whose value depends on comparing courses field by field" },
    ],
    solutions: [
      {
        heuristic: "Match between system and the real world",
        title: "Trust Marks Drawn From the Certificates",
        body: "Each accreditation mark was traced back to the document that issues it before it was drawn, so the mark a visitor sees on the site is the same one printed on the paper. Working from the documents rather than from a list of claims also kept the row to what the centre can actually evidence.",
      },
      {
        heuristic: "Aesthetic and minimalist design",
        title: "One Block per Service, in a Fixed Order",
        body: "Training, measurement services and room hire each get their own homepage block under their own heading, in an order that does not change. A visitor finds the one they came for by its heading instead of reading past the other two to work out which is which.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "A Schedule Row That Holds the Whole Decision",
        body: "The public schedule, grouped under tabs by course type, puts each run's number, dates, course and area on one row with the general and member prices, the course details, a quotation request and the booking action. Everything needed to book is in view at the moment of booking, so nothing has to be carried over from another page.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Template for Every Course",
        body: "Every course page uses the same fields in the same order: duration, course format, participants, instructor qualification, objectives, outline and evaluation. Because each field sits in the same place every time, two courses can be compared without relearning the page.",
      },
    ],
    impactTable: [
      { metric: "Real-world", before: "Four scanned documents", after: "Marks traced to the issuing documents", delta: "Evidenced" },
      { metric: "Minimalism", before: "Three services, one homepage", after: "One block each, in a fixed order", delta: "Separated" },
      { metric: "Recognition", before: "Date, area, price and booking to find", after: "All in one schedule row, with a quote request", delta: "In view" },
      { metric: "Consistency", before: "Courses compared one page at a time", after: "One template across every course", delta: "Standardised" },
    ],
    quote:
      "Every page here answers one question a visitor brings: is this centre qualified, which service is mine, and can I compare and book without phoning. The heuristics were the test of whether each page actually answered it.",
    quoteRole: "Design rationale · PATC Website",
    learnings: [
      "Trust is a real-world match problem: a mark is only credible if it is the one printed on the document, so the trust row was built from the certificates rather than from claims.",
      "When one organisation runs several services, minimalist design is mostly a question of order; fixing the order removes the sorting the visitor would otherwise have to do.",
      "A course catalogue is used for comparison before it is used for reading, so consistency between course pages mattered more than the polish of any single page.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "From Certificate to Course Page",
      processIntro:
        "The trust marks traced back to the documents that issue them, and the pages those marks support.",
    },
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
    metric: "One Card per Service",
    hook:
      "Six services sold to one customer — a foreign business setting up in Thailand — rebuilt out of a fixed-width site that showed all six only as menu links.",
    overview:
      "The website for The Right Office, a Bangkok provider whose business runs wider than desks: serviced and virtual offices, visa and work permit advisory, accounting, secretarial services and company incorporation for foreign businesses operating in Thailand. The rebuild replaced a fixed-width site from an earlier web era, where the services were text links in a side menu above a column of prose, with a full-width one organised around those six services and the single audience they share.",
    summary:
      "A rebuild of a business-services provider's site, from a fixed-width layout into a full-width one organised around six services and the one visitor they share. The design shows all six as one set of cards, opens the office cards with the visitor's own questions, and keeps a long list of inclusions in full while making it scannable. Each decision below is tied to the usability heuristic it serves.",
    kpis: [
      { value: "Recognition", label: "Recognition rather than recall", sub: "six services shown as cards, not as menu labels" },
      { value: "Consistency", label: "Consistency and standards", sub: "six services on one card pattern, read as one set" },
      { value: "Minimalism", label: "Aesthetic and minimalist design", sub: "a long inclusions list kept in full and given structure" },
    ],
    problem:
      "The site being replaced was built for a desktop monitor: a fixed-width column with small body text. Read against the heuristics, the six services appeared only as text links in a side menu, so a visitor had to know which label fitted their situation before learning anything about it; the home page itself was a column of prose; and the most useful content on the site, the list of what an office includes, sat in a small box at the foot of the page.",
    baselineStats: [
      { value: "Menu labels only", label: "six services listed as text links, with nothing about each" },
      { value: "Fixed width", label: "a narrow desktop column with small body text" },
      { value: "Boxed away", label: "the inclusions list squeezed into a small box at the foot of the page" },
    ],
    solutions: [
      {
        heuristic: "Recognition rather than recall",
        title: "Six Services Shown, Not Listed",
        body: "The services move out of the side menu and onto the home and services pages as six cards, each with a photograph, the service name, a short summary and a link to read more. A visitor recognises the one that fits instead of guessing from a menu label.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Card Pattern for Every Service",
        body: "Office, virtual office, visa and work permit advice, accounting, secretarial work and incorporation share one card structure. The six read as a single set, so a visitor who needs several of them sees that one provider covers them all.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "Office Cards Open With the Visitor's Question",
        body: "The serviced and virtual office cards open with the questions a visitor would ask: a start-up needing a prestigious address, a company expanding, a short-term project, a small business whose owner is always on the road. The accounting card names the taxes it covers, from personal and corporate income tax to VAT and withholding tax, in the terms a business owner already uses.",
      },
      {
        heuristic: "Aesthetic and minimalist design",
        title: "The Inclusions List, Structured Rather Than Cut",
        body: "The list of what an office includes was kept in full and moved into its own section, Why Choose The Right Office, with a heading, a short introduction and the list beside photographs of the space. It was the content visitors needed most, so the fix for a cramped box was space and structure, not removal.",
      },
    ],
    impactTable: [
      { metric: "Recognition", before: "Services as menu links", after: "Six cards with photo and summary", delta: "Visible" },
      { metric: "Consistency", before: "Side menu above a column of prose", after: "One card pattern for all six", delta: "Unified" },
      { metric: "Real-world", before: "The provider's own description", after: "Office cards open with the visitor's questions", delta: "Relatable" },
      { metric: "Minimalism", before: "Small box at the foot of the page", after: "Own section, kept in full", delta: "Scannable" },
    ],
    quote:
      "The six services look unrelated until you notice they are the same visitor in the same month. Showing them as one set of cards is what lets a single visit cover all of them.",
    quoteRole: "Design rationale · The Right Office",
    learnings: [
      "Opening a card with the question it answers lets a visitor self-select faster than a description of the service; it works best where the questions are easy to state, as they were for the office cards.",
      "A dense list is not automatically something to delete; when it is the content people need, the minimalist fix is structure rather than removal.",
      "When several services share one customer, a shared card pattern tells the visitor they belong together more clearly than copy saying so.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "From Fixed Width to Six Services",
      processIntro:
        "The fixed-width site being replaced, set above the responsive rebuild organised around six services.",
    },
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
    metric: "Device-First Layout",
    hook: "A security-hardware supplier whose strongest sales asset was its install list — so the site was built to make every reference checkable down to the model number.",
    overview:
      "The website for Max Solution, a Thai supplier and installer of access-control hardware — face scanners, card readers, swing and flap gates, automatic door sensors. It is built around two assets the business already had and was not putting to work: a catalogue buyers want to browse by device type, and two decades of named installations at international schools, restaurant groups and manufacturers that could be shown with the models and dates attached.",
    summary:
      "A catalogue and enquiry site for an access-control hardware supplier, designed for a specifier who usually knows the device they need and wants to see where it has worked before. The design gives that buyer a shortcut past the marketing, writes references in the terms they specify with, and asks for what a quote needs up front.",
    kpis: [
      { value: "Efficiency", label: "Flexibility and efficiency of use", sub: "device strip lets a buyer skip past the marketing" },
      { value: "Real-world", label: "Match between system and the real world", sub: "references written as model and go-live month" },
      { value: "Prevention", label: "Error prevention", sub: "quote form asks for product and callback time up front" },
    ],
    problem:
      "An access-control purchase is specified by someone who needs the exact model and evidence it has held up somewhere comparable. Read against the heuristics, the usual supplier site fails that buyer in three places: one route serves every visitor, so a buyer who already knows the device still reads the marketing first; references show a client's name but not the models installed, so a specifier cannot use them; and a price starts with an open phone call, with nothing structuring what a quote needs.",
    baselineStats: [
      { value: "Two kinds of buyer", label: "some arrive knowing the device, others need to browse" },
      { value: "Proof needs models", label: "a reference persuades a specifier only when it names the hardware" },
      { value: "Open-ended call", label: "a phone call leaves nothing to structure what a quote needs" },
    ],
    solutions: [
      {
        heuristic: "Flexibility and efficiency of use",
        title: "A Device Strip Above the Marketing",
        body: "The homepage opens with a strip of device types, so a buyer who already knows what they need goes straight to it. Highlight and best-of blocks sit below for visitors who arrive without a specification, so both kinds of buyer have a way in.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "References Written in the Specifier's Terms",
        body: "Each reference card names the sector, the models installed written inline as links, and the month the system went live, with an expandable list of every product at that site. A specifier reads it the way they read a bill of materials.",
      },
      {
        heuristic: "Error prevention",
        title: "A Quote Request That Asks the Right Questions",
        body: "The quotation page is a form that asks which product, the buyer's name, email, phone and LINE ID, the details, and the time they prefer to be called back. Asking for the callback window up front prevents the missed call that would otherwise stall the request.",
      },
      {
        heuristic: "User control and freedom",
        title: "A Second Channel for Buyers Who Will Not Phone",
        body: "A LINE QR code sits beside the quote form, with the phone, hotline and email contacts listed below it, so a buyer who does not want a phone call can still start the conversation in the channel they choose.",
      },
    ],
    impactTable: [
      { metric: "Efficiency", before: "One route for every buyer", after: "Device strip at the top of the homepage", delta: "Direct" },
      { metric: "Real-world", before: "A client name without models", after: "Models and go-live month on every card", delta: "Specific" },
      { metric: "Prevention", before: "An open-ended phone call", after: "Form with product and callback window", delta: "Structured" },
      { metric: "Control", before: "One channel chosen for the buyer", after: "LINE, phone and email beside the form", delta: "Choice" },
    ],
    quote:
      "A specifier does not want a brochure; they want to know which model went into a building like theirs. Every decision here gives that buyer a shorter or more specific route to the answer.",
    quoteRole: "Design rationale · Max Solution Website",
    learnings: [
      "An accelerator for expert users can sit alongside the general route: the device strip serves the buyer who knows, the blocks below serve the one who does not.",
      "A reference is only evidence if it uses the reader's own terms; naming the model and the month turns a logo wall into something a specifier can use.",
      "Asking for the callback window inside the form prevents a failure that would otherwise happen after the user has left the page.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "Device Strip, Quote Form, References",
      processIntro:
        "The three surfaces the site turns on: a device-first homepage, a quotation form and the reference page.",
    },
  },
  {
    id: "orgeness-wellness",
    title: "Orgeness Orange Juice Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Jun 2024 – Aug 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Food Manufacturing",
    platform: "Responsive Marketing & Catalogue Site",
    industry: "Food Manufacturing / Wholesale & OEM",
    tags: ["Manufacturing", "Wholesale", "OEM", "FMCG"],
    stack: ["Figma", "Design System", "Thai Typography", "Catalogue Templates"],
    image: "/img/cover/orgeness-wellness.webp",
    imageAlt: "Orgeness fresh orange juice website — wholesale price tiers, four formulas and OEM contract production",
    metric: "Price Breaks Upfront",
    hook: "A juice factory that earns from cases, not bottles — so the site publishes the wholesale break-points instead of making a reseller ask for them.",
    overview:
      "The site for ORGENESS GROUP, a fresh orange juice factory selling wholesale and producing juice for other companies. It is built to convert resellers and production clients rather than individual shoppers: four formulas each get their own product page, every bottle size carries a retail price and two quantity break-points, and the factory's production offer has a services page of its own beside the catalogue.",
    summary:
      "A product and wholesale site for a juice manufacturer, designed for a reseller deciding whether to stock a line rather than a shopper buying a bottle. The design keeps the numbers a reseller needs in view, matches the pages to how resellers actually stock, and gives contract production its own route.",
    kpis: [
      { value: "Recognition", label: "Recognition rather than recall", sub: "price breaks printed under every size, no lookup" },
      { value: "Real-world", label: "Match between system and the real world", sub: "one page per product line, the way a reseller stocks" },
      { value: "Minimalism", label: "Aesthetic and minimalist design", sub: "factory offer summarised at home, detailed on its own page" },
    ],
    problem:
      "The business sells wholesale and produces juice for other companies, but a conventional product site is shaped for someone buying one bottle. Read against the heuristics, that shape fails a reseller in three places: the margin, their first question, can only be answered by asking for prices; a variant selector assumes the buyer compares the range when they stock a single line; and a production offer with no page of its own is either missed or crowds the catalogue.",
    baselineStats: [
      { value: "Terms on request", label: "the usual route to wholesale prices and quantity breaks is to ask" },
      { value: "Retail framing", label: "a structure shaped for one bottle, not a reseller's order" },
      { value: "Offer unplaced", label: "a production offer without a page is missed or crowds the catalogue" },
    ],
    solutions: [
      {
        heuristic: "Recognition rather than recall",
        title: "Price Breaks on the Product Page",
        body: "Each formula gets a full-width price panel: every size from the smallest bottle to a six-litre container, with its retail price and two wholesale quantity break points beneath it. A reseller works out their margin from what is in view instead of requesting a price list.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "One Product Line per Page",
        body: "The four formulas are separate products with their own pages rather than variants behind a selector. A reseller stocks one line, not the range, so the page is shaped around the decision they are actually making.",
      },
      {
        heuristic: "Aesthetic and minimalist design",
        title: "The Factory Offer Given Its Own Page",
        body: "The homepage carries the production offer as one short why-choose block. The full offer, with the factory's standards, its certificate and the price panels for all four formulas, sits on the services page, so it is easy to find without crowding the catalogue.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "The Next Step on the Same Panel",
        body: "The LINE QR code, the LINE ID and the phone number sit on the price panel itself, so a reseller who has done the arithmetic can start the order from the same place without looking for a contact page.",
      },
    ],
    impactTable: [
      { metric: "Recognition", before: "Prices on request", after: "Retail price and two breaks per size", delta: "In view" },
      { metric: "Real-world", before: "Variants of one product", after: "Four products, a page each", delta: "Separated" },
      { metric: "Minimalism", before: "Production offer with no place", after: "Summary at home, detail on its own page", delta: "Placed" },
      { metric: "Efficiency", before: "Contact apart from pricing", after: "LINE QR and phone on the price panel", delta: "Adjacent" },
    ],
    quote:
      "A reseller's first question is margin. Every decision here keeps the answer in view and the next step beside it, so the arithmetic and the order happen on the same page.",
    quoteRole: "Design rationale · Orgeness Orange Juice Website",
    learnings: [
      "Putting the numbers a buyer needs where they decide removes a round trip that a contact form can only add.",
      "Page structure should follow the user's real unit of decision; a variant selector suits someone comparing a range, not someone stocking one line.",
      "A secondary offer needs a place of its own, or it either disappears or crowds out the primary one.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "A Page Set for the Wholesale Buyer",
      processIntro:
        "The full page set, built around a reseller working out their margin rather than a shopper buying one bottle.",
    },
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
    stack: ["Figma", "Spec Tables", "Design System", "Thai Typography"],
    image: "/img/cover/billion-plus.webp",
    imageAlt: "Billion Plus Service website — industrial floor-cleaning machine catalogue, specification tables and rental",
    metric: "Task-Based Catalogue",
    hook: "Facilities buyers do not know model names — they know how many square metres have to be clean before the next shift. The catalogue was built on that number.",
    overview:
      "The site for Billion Plus Service, a Thai supplier of industrial floor-cleaning machines running three lines: sales, rental and repair. The catalogue is organised by machine class and by cleaning throughput in square metres per hour, so a facilities buyer can size equipment against the floor they actually have instead of working backwards from model names.",
    summary:
      "A catalogue site for an industrial floor-cleaning equipment supplier that sells, rents and repairs. It is designed for a facilities manager who knows their floor and their shift rather than the product range, so the catalogue is organised by task and the specification tables answer the sizing question directly.",
    kpis: [
      { value: "Real-world", label: "Match between system and the real world", sub: "catalogue grouped by cleaning task, not model name" },
      { value: "Recognition", label: "Recognition rather than recall", sub: "spec tables size a machine against a known floor area" },
      { value: "Prevention", label: "Error prevention", sub: "rental route stated in the hero, before a buyer leaves" },
    ],
    problem:
      "A floor-cleaning machine is usually bought by a facilities or plant manager rather than an equipment specialist. Read against the heuristics, a catalogue organised by model name asks them to learn the supplier's vocabulary before choosing; the specification that decides a purchase, how much floor a machine clears per hour, needs to sit against the sizes on offer; and the rental option, often the better answer for a one-off clean, is easy to miss on a page shaped for sales.",
    baselineStats: [
      { value: "Model-led", label: "catalogue organised by product code, not cleaning task" },
      { value: "Sizing unanswered", label: "no way to size a machine against a known floor area" },
      { value: "Rental hidden", label: "the cheaper route easy to miss on a sales-shaped page" },
    ],
    solutions: [
      {
        heuristic: "Match between system and the real world",
        title: "Catalogue Grouped by Cleaning Task",
        body: "Machines sit in the classes a facilities manager already uses, from compact floor washers and single-disc machines to walk-behind and ride-on scrubbers, with a category menu that also reaches sweepers, vacuums, pressure washers and the chemicals that go with them. A buyer enters at the job, not the product code.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "Specification Tables That Answer the Sizing Question",
        body: "The rental page sets each machine's brush size against tank capacity, cleaning throughput per hour and rental term, in one table for each type of scrubber and sweeper. A manager who knows their floor area and shift length reads the right size off the table instead of describing the problem to a salesperson.",
      },
      {
        heuristic: "Error prevention",
        title: "Sell, Rent and Repair Stated in the Hero",
        body: "The three lines sit directly beneath the brand name, with the rental entry price on the same screen. A visitor for whom renting is the better answer finds it before leaving, rather than after buying the wrong way.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Card for Every Machine",
        body: "Every machine in the catalogue uses the same card, a photograph on white, the model name, a short description and a link to its details, under a class heading with a paragraph on what that class is for. Once a buyer has read one card they can scan the rest.",
      },
    ],
    impactTable: [
      { metric: "Real-world", before: "Model number as the entry point", after: "Machine class and cleaning task", delta: "Restructured" },
      { metric: "Recognition", before: "Ask a salesperson to size", after: "Throughput set against size in a table", delta: "Self-serve" },
      { metric: "Prevention", before: "Rental behind an enquiry", after: "Rental entry price in the hero", delta: "Surfaced" },
      { metric: "Consistency", before: "A long list of models", after: "One card per machine, grouped by class", delta: "Uniform" },
    ],
    quote:
      "A plant manager does not want a machine; they want the floor clean before the next shift. Publishing throughput against size turns the catalogue into a calculation they can run themselves.",
    quoteRole: "Design rationale · Billion Plus Website",
    learnings: [
      "Buyers navigate by the constraint they own, floor area and shift length, not by the supplier's product codes, so the deciding specification belongs in the table.",
      "Stating every route in the hero is cheap error prevention: three words stop a rental customer leaving a page shaped for sales.",
      "A class heading with a short explanation helps a non-specialist more than a filter does, because it tells them which group their job belongs to before they look at a single model.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "From Catalogue to Specification Table",
      processIntro:
        "The home, about, catalogue and service pages, ending on the rental tables that let a buyer size a machine.",
    },
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
    metric: "Certification-Led IA",
    hook: "An ethanol manufacturer selling into food and pharmaceutical supply chains, where the buyer's first question is never the product — it is which certificates you hold.",
    overview:
      "The corporate site for Union Chemical and Equipment (UC&E), a Thai ethanol manufacturer supplying food, pharmaceutical and industrial customers. It is weighted toward governance rather than catalogue: four products sit inside a structure that gives at least as much room to certification, company history, ESG and organisational structure, because in a regulated supply chain those are what a buyer audits before a grade is ever discussed.",
    summary:
      "A corporate site for a manufacturer selling into regulated food and pharmaceutical supply chains, where the buyer audits before they buy. The design writes out the evidence a reviewer checks by name and number, shows the same history in two shapes for two kinds of reader, and puts the details that decide a purchase on the product page.",
    kpis: [
      { value: "Real-world", label: "Match between system and the real world", sub: "standards named with their licence numbers, as a checklist reads" },
      { value: "Efficiency", label: "Flexibility and efficiency of use", sub: "one history as a table and a timeline for two readers" },
      { value: "Recognition", label: "Recognition rather than recall", sub: "packaging specification on both ethanol product pages" },
    ],
    problem:
      "In a regulated supply chain, a procurement or quality reviewer screens a supplier against a checklist before a grade is discussed. Read against the heuristics, a conventional product site serves that reviewer badly: certification is reduced to a row of logos in the footer, with nothing a checklist item can be matched against; the company's history comes in one shape when two readers want different things from it; and shipping details are left for a later conversation, though they decide whether a product can be bought at all.",
    baselineStats: [
      { value: "Logos only", label: "certification reduced to a row of marks in the footer" },
      { value: "One shape of history", label: "a single format for readers who want different things" },
      { value: "Specs deferred", label: "shipping units left for a later conversation" },
    ],
    solutions: [
      {
        heuristic: "Match between system and the real world",
        title: "Certification in the Reviewer's Terms",
        body: "The homepage gives Our Standard its own section in the body of the page, listing each licence and certificate by name and number above the row of marks. A dedicated certification page divides the evidence into four groups: company, product, environmental, and laboratory testing and calibration. A reviewer arrives holding a checklist and can match it item by item.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "One History, Two Shapes",
        body: "The milestone page shows the same record as a dated table and as a horizontal timeline. The table serves a reviewer checking a specific year; the timeline serves a visitor forming a view of the company. Each reader takes the shape that suits their task.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "Packaging Specified on the Product Page",
        body: "The two ethanol product pages end with their shipping containers, from small drums to bulk tanks, with net volume and weight per unit. A buyer sees whether the product ships the way they need without asking for it separately.",
      },
      {
        heuristic: "Aesthetic and minimalist design",
        title: "Long Content Opened in Place",
        body: "Open positions run as an accordion, so a full job description expands in place, with an application form that takes a CV directly. A visitor sees the whole list at a glance and opens only the role they want.",
      },
    ],
    impactTable: [
      { metric: "Real-world", before: "Marks as a footer row", after: "Named standards and a four-group page", delta: "Checkable" },
      { metric: "Efficiency", before: "History in one format", after: "Dated table and timeline", delta: "Two views" },
      { metric: "Recognition", before: "Shipping units on request", after: "Specified on both ethanol product pages", delta: "In view" },
      { metric: "Minimalism", before: "Every job description in full", after: "Accordion with a CV upload", delta: "Collapsed" },
    ],
    quote:
      "In a regulated supply chain the sale opens with an audit, not a pitch. Giving the evidence a reviewer checks its own place, written out by name and number, was the central design decision.",
    quoteRole: "Design rationale · Unionchemical Website",
    learnings: [
      "A reviewer matches a supplier against a checklist, so standards listed by name and licence number serve them better than a row of logos can.",
      "The same content can serve two readers if it is given two shapes; showing the history twice was correct rather than redundant.",
      "Details that decide whether a purchase is possible belong where the purchase is considered, not in a follow-up.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "Structured for the Reviewer",
      processIntro:
        "The homepage and standards row, the corporate and certification structure, product pages, two of them with packaging specifications, ESG with its fourth pillar, and contact, media and careers.",
    },
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
    metric: "Search-First Catalogue",
    hook: "OEM buyers qualify a factory on its machine list and its tonnage range. Publishing both turns the first enquiry into a shortlist decision the buyer has already made.",
    overview:
      "The corporate site for Thaimanee Craft, a Thai OEM plastic injection moulder and mould maker operating since 1983. It is built for industrial buyers rather than browsers: the machine inventory and clamping range are published outright, work is organised into the four things the factory actually does, and every page carries a Thai and English switch so an overseas buyer can reach the same evidence a domestic one does.",
    summary:
      "A corporate site for an injection moulding and mould-making factory, designed for an industrial buyer qualifying suppliers before they make contact. The design publishes the pass-or-fail criteria up front, lets a buyer match their part against real production, and keeps the language switch in the same place on every page.",
    kpis: [
      { value: "Real-world", label: "Match between system and the real world", sub: "capacity published as the figures a buyer qualifies on" },
      { value: "Recognition", label: "Recognition rather than recall", sub: "photo grids of real parts to match a component against" },
      { value: "Consistency", label: "Consistency and standards", sub: "language switch in the same place on every page" },
    ],
    problem:
      "An OEM buyer qualifies a moulding supplier on two things before anything else: what machines it runs and whether their tonnage covers the part. Read against the heuristics, a supplier site that publishes neither leaves the buyer nothing to check against their own requirement; without photographs of parts actually produced there is nothing to compare a component to; and a second language that has to be hunted for leaves an overseas buyer with less evidence than a domestic one.",
    baselineStats: [
      { value: "Capacity unstated", label: "machine inventory and tonnage range usually left unpublished" },
      { value: "Nothing to match", label: "no record of parts produced to compare a component with" },
      { value: "Language hunted", label: "a second language an overseas buyer has to look for" },
    ],
    solutions: [
      {
        heuristic: "Match between system and the real world",
        title: "Capacity Stated in the Buyer's Terms",
        body: "The homepage states the machine inventory in plain figures, 26 mould-making machines across CNC, wire-cut, EDM and milling and 47 injection machines from 35 to 1,200 tons, in the units a buyer specifies with. A buyer confirms their part fits before writing an email, which is all a first visit needs to achieve.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "Real Parts, Grouped by Process",
        body: "Moulds, injection, assembly and screen printing each carry a photo grid of parts the factory has actually produced. A buyer recognises a component like theirs by eye instead of describing it and waiting for an answer.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "Search and Filter Before the Grids",
        body: "A product search with a category filter sits above the category grids on the homepage, so a buyer who knows what they are looking for can go straight to it rather than browse.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Language Switch, Every Page",
        body: "The Thai and English switch sits in the same place in the top bar of every page, and each page header repeats the phone and LINE contacts. A buyer can change language or make contact from wherever they land, without looking for a separate section.",
      },
    ],
    impactTable: [
      { metric: "Real-world", before: "Capacity unstated", after: "Inventory and tonnage range on the homepage", delta: "Published" },
      { metric: "Recognition", before: "Nothing to compare against", after: "Photo grids of real parts in four groups", delta: "Catalogued" },
      { metric: "Efficiency", before: "Browse every grid", after: "Search and category filter first", delta: "Direct" },
      { metric: "Consistency", before: "A second language to look for", after: "Thai and English switch on every page", delta: "Fixed place" },
    ],
    quote:
      "A moulding buyer's first question is whether the press can close on their part. Answering it on the homepage, in their units, removes the only reason they had to call before shortlisting.",
    quoteRole: "Design rationale · Thaimanee Craft Website",
    learnings: [
      "Figures a supplier treats as internal are the buyer's shortlisting criteria; publishing them in the buyer's units is the real-world match that matters most here.",
      "Photography of real output works as recognition: the buyer matches their component against it rather than reading about capability.",
      "Bilingual is a consistency question as much as a translation task: the switch has to sit in the same place on every page, wherever a buyer lands.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "Capacity and Real Parts, Up Front",
      processIntro:
        "The homepage, company pages and capability catalogue, with the machine inventory stated near the top and both languages on every page.",
    },
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
    metric: "Shot-on-Black Gallery",
    hook:
      "In amulet commissioning the order goes to a person, not a company — so the founder's face and direct mobile number sit on the homepage rather than behind a contact form.",
    overview:
      "The site for Supakit Watthumongkol, a Thai amulet and Buddhist-object foundry. Commissioning sacred objects is a trust decision made on craftsmanship and on who answers the phone, so the site is built around two things: photographic evidence of finished work and of the production floor, and the founder named, pictured and reachable where an enquiry starts.",
    summary:
      "A portfolio and enquiry site for a foundry making religious coins, medals and sculpted pieces, where a commission is a trust decision made on craftsmanship and on the person taking the order. The design lets the work carry the page, shows how it is made, and keeps the person and the contact within reach.",
    kpis: [
      { value: "Minimalism", label: "Aesthetic and minimalist design", sub: "work shot on black so relief and finish carry the image" },
      { value: "Real-world", label: "Match between system and the real world", sub: "the workshop and the founder shown, as on a visit" },
      { value: "Efficiency", label: "Flexibility and efficiency of use", sub: "contact one element away from any piece being viewed" },
    ],
    problem:
      "A client commissioning a sacred object judges two things: whether the finish is good enough and whether the person taking the order can be relied on, and in person they would judge both at the workshop. Read against the heuristics, a site has to give them the real-world cues they would use on a visit, finished work they can inspect, the production floor and the person they would deal with, and keep the route to asking a question short.",
    baselineStats: [
      { value: "Finish unseen", label: "without photographs, the work can only be judged in person" },
      { value: "Process unseen", label: "how a piece is struck and finished visible only on a visit" },
      { value: "No named contact", label: "a company name does not say who will take the order" },
    ],
    solutions: [
      {
        heuristic: "Aesthetic and minimalist design",
        title: "Every Piece Shot on Black",
        body: "The portfolio expands two bodies of work, die-struck coins and medals and sculpted pieces, into grids where every item sits on black. Nothing competes with the relief, metal and finish, which are the only things a client is judging from the photograph.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "The Workshop and the Person, Shown",
        body: "Six photographs of the production floor show the striking presses, inspection and hand sculpting, with monks visiting the work, and the founder appears by name, photograph and direct number on the homepage call to action. A client gets the cues they would look for on a visit: how the work is made and who they would deal with.",
      },
      {
        heuristic: "Consistency and standards",
        title: "The Same Two Groups Everywhere",
        body: "The homepage and the portfolio use the same two groups of work in the same order, so a category seen on the homepage is found in the same place in the full portfolio.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "Contact Never More Than One Element Away",
        body: "Phone and LINE buttons sit in the header of every page and repeat at each section break, beside a contact page with a form and a map. A client can ask about a piece from wherever they are looking at it.",
      },
    ],
    impactTable: [
      { metric: "Minimalism", before: "Work judged only in person", after: "Two groups of work, shot on black", delta: "Published" },
      { metric: "Real-world", before: "Workshop visit needed to judge", after: "Production floor and founder on the site", delta: "Shown" },
      { metric: "Consistency", before: "Work to sort through", after: "Same two groups in the same order", delta: "Predictable" },
      { metric: "Efficiency", before: "A visit or a phone call", after: "Phone and LINE in every header", delta: "Closer" },
    ],
    quote:
      "A client is not choosing a supplier; they are choosing someone to entrust a sacred object to. The site gives them the cues a workshop visit would: the work, the floor and the person.",
    quoteRole: "Design rationale · Supakit Amulet Website",
    learnings: [
      "Shooting metalwork on black is functional minimalism: the client is judging relief and finish, and any background competes with the only evidence they have.",
      "Where a purchase is entrusted rather than transacted, the real-world cue is a named person, and it does more than any amount of company copy.",
      "Keeping contact one element away from every piece shortens the step between looking and asking, which is where interest is easiest to lose.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "The Work, the Floor and the Person",
      processIntro:
        "Six pages built around photographs of finished work, the production floor and the founder.",
    },
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
    metric: "Decision-Order IA",
    hook: "Renting IT is weighed against buying it — so the site argues the case, terms and failure handling included, before it shows a single laptop.",
    overview:
      "A lead-generation site for Chaocom Thailand, a computer and notebook rental service supplying offices, training sessions, seminars and events. It is structured as an argument before a catalogue: five reasons to rent come before the machines, the documents, delivery and replacement terms have a page of their own, and the quotation form is specific enough for sales to price directly.",
    summary:
      "A lead-generation site for a computer rental service, designed for a company deciding whether to rent at all rather than which provider to rent from. The design puts the pages in the order that decision is made, publishes the terms people would otherwise negotiate, and turns the enquiry into a brief sales can price.",
    kpis: [
      { value: "Recognition", label: "Recognition rather than recall", sub: "models named, so a buyer picks a spec, not describes one" },
      { value: "Prevention", label: "Error prevention", sub: "quote form asks for everything needed to price it" },
      { value: "Guidance", label: "Help and documentation", sub: "documents to rent listed before the quote is sent" },
    ],
    problem:
      "A company renting IT equipment is weighing renting against buying, and that turns on questions a product page never addresses. Read against the heuristics, a typical rental enquiry leaves the deciding terms, what happens when a machine fails and what paperwork is needed, to negotiation; asks a prospect to describe the hardware they want rather than pick it; and offers an open contact box that lets a request arrive without the details needed to price it, so an enquiry begins with a round of questions.",
    baselineStats: [
      { value: "Terms unstated", label: "failure handling and delivery usually left for negotiation" },
      { value: "Describe, not pick", label: "without named models, a buyer has to describe a specification" },
      { value: "Open contact box", label: "a request can arrive without what a price depends on" },
    ],
    solutions: [
      {
        heuristic: "Match between system and the real world",
        title: "Pages in the Order the Decision Is Made",
        body: "The homepage makes the case before the catalogue: five reasons to rent come before any machine is shown, and the menu then runs from the service conditions to the quotation form. A visitor who has not yet decided to rent meets the argument first, matching how the decision actually unfolds.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "Models Named, Not Described",
        body: "Equipment is split into laptops, MacBooks and desktop computers with the actual brands and models listed. A prospect picks a specification they recognise instead of describing one and waiting to hear whether it exists.",
      },
      {
        heuristic: "Error prevention",
        title: "A Quote Form Sales Can Price",
        body: "The quotation page asks for the company and contact, the purpose, the specification, the quantity, the start and return dates and a budget. A request arrives with the details a price depends on, which removes the first round of follow-up questions.",
      },
      {
        heuristic: "Help and documentation",
        title: "Terms and Paperwork Published Up Front",
        body: "The service conditions page lists the documents needed to rent, states that delivery and collection are free, and sets out what happens when hardware fails, with a replacement time for each area and remote help for software problems. The questions a prospect would ask during negotiation are answered before they enquire.",
      },
    ],
    impactTable: [
      { metric: "Real-world", before: "Explained by sales, per enquiry", after: "Five reasons before the catalogue", delta: "Argued" },
      { metric: "Recognition", before: "Hardware described by the prospect", after: "Models named by class", delta: "Selectable" },
      { metric: "Prevention", before: "Open contact form", after: "Structured quotation brief", delta: "Complete" },
      { metric: "Guidance", before: "Terms asked during negotiation", after: "Documents, delivery and failure terms published", delta: "Published" },
    ],
    quote:
      "Someone looking at rental laptops is often still deciding whether to rent at all, not which company to rent from. The site follows that decision in order and answers each question before it has to be asked.",
    quoteRole: "Design rationale · Chaocom Thailand Website",
    learnings: [
      "When a service competes with not using it at all, matching the real-world order of the decision means the argument comes before the catalogue.",
      "A structured enquiry is error prevention for both sides: the details a price depends on are captured before anyone has to ask for them.",
      "Publishing the paperwork needed to proceed removes a stall that most enquiry flows leave to a later email.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "In the Order the Decision Is Made",
      processIntro:
        "Four pages in the order a company decides to rent: the argument, the terms, the catalogue and the quote.",
    },
  },
  {
    id: "thanada-construction",
    title: "Thanada Construction Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Construction",
    platform: "Responsive Marketing & Portfolio Site",
    industry: "Residential Design & Build",
    tags: ["Construction", "Residential", "Portfolio", "Lead Gen"],
    stack: ["Figma", "Design System", "Thai Typography", "Content Templates"],
    image: "/img/cover/thanada-construction.webp",
    imageAlt: "Thanada Construction website — design and construction portfolios kept separate, full organisation chart published",
    metric: "Two-Track Portfolio",
    hook: "A homeowner choosing a builder is really asking whether anyone will still answer after handover — so the organisation chart, warranty function included, is published in full.",
    overview:
      "Portfolio and enquiry site for Thanada Construction, a Thai residential design-and-build contractor. Completed work is split into design and construction so a homeowner can judge each separately, and the organisation chart is published in full — three departments and thirteen named functions, quality warranty among them — because the question behind choosing a builder is whether the company has the people to finish the job and to answer afterwards.",
    summary:
      "A portfolio and enquiry site for a residential design-and-build contractor, designed for a homeowner making a decision that takes months. The design separates the two judgements they make, shows who inside the company owns each stage, and stays useful to people who are not ready to enquire yet.",
    kpis: [
      { value: "Real-world", label: "Match between system and the real world", sub: "portfolio split into the two judgements a homeowner makes" },
      { value: "Visibility", label: "Visibility of system status", sub: "who owns each stage, after handover too, on one chart" },
      { value: "Guidance", label: "Help and documentation", sub: "articles for homeowners researching months ahead" },
    ],
    problem:
      "Commissioning a house is decided on evidence a homeowner cannot easily get. Read against the heuristics, a single gallery mixes two different judgements, taste in design and quality of construction; a builder's site rarely shows which people inside the company handle each stage, including who answers after handover; and someone researching months before they can commission has no reason to visit.",
    baselineStats: [
      { value: "One gallery", label: "design and construction work commonly shown together" },
      { value: "Company unseen", label: "no account of who handles each stage" },
      { value: "No early content", label: "nothing for homeowners still months from deciding" },
    ],
    solutions: [
      {
        heuristic: "Match between system and the real world",
        title: "Two Portfolios, Not One",
        body: "Completed work splits into design projects and construction projects, on the homepage and on the portfolio page. A homeowner judges taste and execution separately, the way they would if they were visiting finished houses.",
      },
      {
        heuristic: "Visibility of system status",
        title: "The Organisation Chart, Published in Full",
        body: "The about page shows three departments and their thirteen functions, from design and estimating through engineering, construction and handover to quality warranty and after-sales service. A homeowner can see who owns each stage of the build, including after handover, rather than taking capability on trust.",
      },
      {
        heuristic: "Help and documentation",
        title: "Articles for People Not Ready to Enquire",
        body: "An article index and template cover choosing a contractor and a house design. A build decision has a long lead time, so helping someone who cannot yet commission is part of the site's job.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "An Enquiry Band at the Foot of Every Page",
        body: "Every page ends on the same band, an invitation to ask about design and construction with the phone number and a LINE button, above the footer. A homeowner who has seen enough can enquire from wherever they stopped reading.",
      },
    ],
    impactTable: [
      { metric: "Real-world", before: "Design and construction mixed", after: "Two portfolios judged separately", delta: "Separated" },
      { metric: "Visibility", before: "Company structure unstated", after: "Three departments, thirteen functions", delta: "Published" },
      { metric: "Guidance", before: "No reason to visit early", after: "Article and guide content", delta: "Reached" },
      { metric: "Efficiency", before: "Contact on its own page", after: "Phone and LINE band on every page", delta: "Closer" },
    ],
    quote:
      "The question underneath 'which builder should I use' is usually 'will anyone answer when something needs fixing in year two'. Showing who owns each stage answers it better than a guarantee written in marketing copy.",
    quoteRole: "Design rationale · Thanada Construction Website",
    learnings: [
      "Separating two judgements the user makes in real life, taste and execution, makes each of them easier to make.",
      "An organisation chart works as system status for a service: it turns a claim about capability into a visible list of who does what.",
      "Long decisions need help content for people who cannot act yet; it is part of the job, not an extra.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "Built for a Months-Long Decision",
      processIntro:
        "Five pages for a homeowner deciding over months: the split portfolio, the organisation chart and articles for early research.",
    },
  },
  {
    id: "happy-training",
    title: "Happy Training Website",
    client: "HAPPY THREE CREATION CO., LTD.",
    timeline: "Aug 2023 – Feb 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Training Institute",
    platform: "Responsive Marketing & Catalogue Site",
    industry: "Corporate Training",
    tags: ["Training", "Courses", "Lead Gen", "Corporate"],
    stack: ["Figma", "Design System", "Thai Typography", "Catalogue Templates"],
    image: "/img/cover/happy-training.webp",
    imageAlt: "Happy Training website redesign — a flat column of course links rebuilt as fifteen grouped, filterable categories",
    metric: "Filterable Catalogue",
    hook:
      "The old site put every course in one column of plain text links — dozens of them, ungrouped. Making that catalogue navigable was the entire redesign.",
    overview:
      "A redesign for Happy Training, a Thai corporate training institute. The site it replaced listed every course as a plain text link in a single continuous column with no grouping, no imagery and no hierarchy. The rebuild turns that into fifteen course groups, image-led cards with a category filter, and the four delivery formats stated before the catalogue — so an HR buyer can shortlist by the capability gap they are trying to close.",
    summary:
      "A redesign of a corporate training institute's site, whose catalogue had been a single long column of plain text links. The design groups the catalogue, gives the eye something to scan by, and states how sessions run before the course list. Each decision below is tied to the usability heuristic it serves.",
    kpis: [
      { value: "Minimalism", label: "Aesthetic and minimalist design", sub: "a flat column of links regrouped into categories" },
      { value: "Recognition", label: "Recognition rather than recall", sub: "image cards and a filter, so the catalogue is scanned" },
      { value: "Real-world", label: "Match between system and the real world", sub: "delivery format stated before the course list" },
    ],
    problem:
      "The previous site listed every course as a plain text link in one unbroken column, dozens of them, with no grouping and no imagery in the list. Read against the heuristics, a buyer looking for one course had to read the entire list to learn whether it existed, with nothing to recognise by and no structure to narrow the search; and how a session would run, which a corporate buyer decides alongside the topic, was not stated at all.",
    baselineStats: [
      { value: "One flat column", label: "every course as an undifferentiated text link" },
      { value: "No grouping", label: "nothing organising courses by skill type or function" },
      { value: "No imagery", label: "no visual hierarchy in the list; it had to be read" },
    ],
    solutions: [
      {
        heuristic: "Aesthetic and minimalist design",
        title: "Fifteen Groups Instead of One List",
        body: "The catalogue was restructured into fifteen groups, from coaching and leadership to digital skills and online courses. A visitor sees fifteen choices instead of the whole list and navigates by the skill they need rather than by scanning titles.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "Cards and a Filter Instead of Links",
        body: "Courses became image cards with a category filter above them. Imagery and grouping give the eye something to recognise, so the catalogue is scanned rather than read.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "Delivery Format Before the Syllabus",
        body: "Four formats are stated before any course is shown: training with group coaching, hard-skill workshop, training with workshop, and training with activity. A corporate buyer decides how a day will run with their team as deliberately as what it covers, so the format comes first.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Card for Every Course",
        body: "Every course card takes the same shape: a photograph, the numbered course title and a red details button in the same place. Once a buyer has read one card, the rest of the grid can be compared at a glance.",
      },
    ],
    impactTable: [
      { metric: "Minimalism", before: "One flat column of links", after: "Fifteen grouped categories", delta: "Restructured" },
      { metric: "Recognition", before: "Read the entire list", after: "Image cards with a category filter", delta: "Scannable" },
      { metric: "Real-world", before: "Format not stated", after: "Four formats before the catalogue", delta: "Defined" },
      { metric: "Consistency", before: "Links of varying length", after: "One card shape for every course", delta: "Uniform" },
    ],
    quote:
      "Dozens of courses in one column is not a catalogue, it is a wall. The institute's depth was its best asset and its worst navigation problem, and grouping it was the redesign.",
    quoteRole: "Design rationale · Happy Training Website",
    learnings: [
      "Depth becomes a liability the moment it is presented flat; the minimalist fix is grouping rather than trimming.",
      "In a long list, imagery is not decoration: it gives recognition something to work with, which is the difference between reading a page and finding something on it.",
      "Buyers decide format as deliberately as topic, so the format belongs before the list rather than inside each course page.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "From Wall of Links to Catalogue",
      processIntro:
        "The single column of course links being replaced, set beside the grouped, image-led catalogue.",
    },
  },
  {
    id: "once-accounting",
    title: "Once Accounting Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jul 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Accounting Services",
    platform: "Single-Page Sale Page",
    industry: "Accounting & Company Registration",
    tags: ["Sale Page", "Paid Ads", "Lead Gen", "Accounting"],
    stack: ["Figma", "Landing Page Design", "Thai Typography", "Brand Assets"],
    image: "/img/cover/once-accounting.webp",
    imageAlt: "Once Accounting sale page — three published registration packages, four-step process and repeated contact bar",
    metric: "Price With Exclusions",
    hook: "Ad traffic arrives with two questions — what does it cost and how long does it take — so the page answers both in the first screen and repeats the phone number after every block.",
    overview:
      "A single-page sale page for Once Accounting, a Thai accounting firm selling company registration and monthly bookkeeping. It is built as a paid-advertising destination rather than a corporate site: three packages priced openly, a four-step process anchored to a one-week completion, a client wall carrying Shell and MG, and a contact bar after every block. The pricing section exists in two versions, the second reframing the third tier as a discounted logo design add-on.",
    summary:
      "A single sale page for an accounting firm's company registration service, built as the landing page for paid advertising. The design answers an impatient visitor's two questions, what it costs and how long it takes, in the first screens, and keeps the next step beside wherever they stop reading.",
    kpis: [
      { value: "Visibility", label: "Visibility of system status", sub: "four numbered steps with the completion time beneath" },
      { value: "Prevention", label: "Error prevention", sub: "fees outside the quoted price disclosed under it" },
      { value: "Efficiency", label: "Flexibility and efficiency of use", sub: "contact bar after every block, where reading stops" },
    ],
    problem:
      "A visitor arriving from an advertisement has two questions and little patience: what it costs and how long it takes. Read against the heuristics, a corporate site answers neither where they land; a quoted price that later grows by government fees misleads them; and a single contact form at the end of the page asks them to scroll to the bottom at the moment they decide.",
    baselineStats: [
      { value: "Price on request", label: "the usual route to a fee is a call" },
      { value: "Timeline unstated", label: "how long a registration takes rarely explained" },
      { value: "One exit", label: "contact only at the end of a long page" },
    ],
    solutions: [
      {
        heuristic: "Visibility of system status",
        title: "Four Steps and a Stated Finish",
        body: "Registration is shown as four numbered steps, from completing the form to receiving the full set of documents, with the completion time stated beneath them. The visitor sees the whole process and its end point before they commit.",
      },
      {
        heuristic: "Error prevention",
        title: "The Price, With What It Excludes",
        body: "Three packages list their inclusions against each, and the note that government registration fees sit outside the quoted price runs directly beneath. The number a visitor sees is one that still holds after the call.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "Contact After Every Block",
        body: "A free-consultation bar with phone and LINE repeats after each section, and the same contact sits in the hero. A single-page funnel converts wherever the reader stops, so the next step is always beside them.",
      },
      {
        heuristic: "Consistency and standards",
        title: "The Same Order on a Phone",
        body: "The step flow and the client wall were laid out for mobile as well, so the steps read in the same order and numbering on a phone as on a desktop.",
      },
    ],
    impactTable: [
      { metric: "Visibility", before: "Process unstated", after: "Four steps and a completion time", delta: "Shown" },
      { metric: "Prevention", before: "Price on request", after: "Three tiers, excluded fees disclosed", delta: "Honest" },
      { metric: "Efficiency", before: "Footer form only", after: "Contact after every block", delta: "Multiplied" },
      { metric: "Consistency", before: "Steps laid out for a wide screen", after: "Same numbered order, stacked on a phone", delta: "Kept" },
    ],
    quote:
      "Ad traffic is expensive and impatient. If the first screens do not show the price and the timeline, the click has already been paid for nothing.",
    quoteRole: "Design rationale · Once Accounting Website",
    learnings: [
      "On a paid-traffic page, visibility means the price and the timeline in the first screens; anything placed later asks an impatient visitor to keep reading first.",
      "Disclosing what a price excludes is error prevention for the visitor and protects the number's credibility at the same time.",
      "Designing the offer block twice forced the third card's job to be decided explicitly, in a way that arguing about it in the abstract would not have.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "One Sale Page, Two Offers",
      processIntro:
        "The sale page in two versions on one shared structure, with what each package covers stated on the card and a way to get in touch after every block.",
    },
  },
  {
    id: "endless-eco",
    title: "Endless Eco Website",
    client: "BEURDEV CO., LTD.",
    timeline: "May 2024 – Aug 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Multi-Line Retail",
    platform: "Responsive Marketing & Catalogue Site",
    industry: "Solar, Electric Vehicles & Building Hardware",
    tags: ["Solar", "E-Motorcycle", "Catalogue", "Multi-Line"],
    stack: ["Figma", "Design System", "Thai Typography", "Catalogue Templates"],
    image: "/img/cover/endless-eco.webp",
    imageAlt: "Endless Eco website — solar rooftop, Deco electric motorcycles and Häfele fittings given separate sections",
    metric: "Per-Business Sections",
    hook: "One company selling solar rooftops, electric motorcycles and Häfele bathroom fittings — the design problem was giving three unrelated businesses one coherent site.",
    overview:
      "The site for Enless Eco, a Chachoengsao company running three unrelated businesses under one roof: solar rooftop installation, the Deco electric motorcycle brand, and Häfele sanitary and hardware distribution. Rather than forcing them through one funnel, solar, the company's main line, leads the homepage with its installed sites, Deco and Häfele each get a top-level section with their own product treatment, and the blog splits into a stream for each line.",
    summary:
      "A site for a company running three unrelated businesses under one roof: solar installation, electric motorcycles and hardware distribution. The design gives each audience its own route, presents each line the way its buyer already searches, and splits content so nobody reads past the other two. Each decision below is tied to the usability heuristic it serves.",
    kpis: [
      { value: "Efficiency", label: "Flexibility and efficiency of use", sub: "two brands in the navigation, solar leading the homepage" },
      { value: "Real-world", label: "Match between system and the real world", sub: "each line laid out the way its buyer already searches" },
      { value: "Minimalism", label: "Aesthetic and minimalist design", sub: "articles split by line, so no one scrolls past the rest" },
    ],
    problem:
      "Three unrelated product lines under one company is a navigation problem before it is a marketing one. Read against the heuristics, a homepage trying to serve a homeowner, a rider and a contractor at once makes each of them work through content meant for the others; one product layout does not fit three ways of buying; and a single news feed mixes articles none of them asked for.",
    baselineStats: [
      { value: "Three unrelated lines", label: "solar, motorcycles and hardware under one company" },
      { value: "No shared audience", label: "three buyers wanting different pages" },
      { value: "One mixed feed", label: "articles from all three lines in a single stream" },
    ],
    solutions: [
      {
        heuristic: "Flexibility and efficiency of use",
        title: "A Route for Each Business",
        body: "Solar, the company's main line, leads the homepage with its installed sites. Deco and Häfele each have their own item in the navigation, with call and LINE buttons in the bar itself. A rider or a contractor reaches their line in one click from anywhere, and a homeowner meets solar as soon as they land.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "A Product Layout That Fits Each Buyer",
        body: "Motorcycles are listed as named models with customer reviews beneath, because a rider buys on model and on what other riders said. Hardware runs as a searchable catalogue with a category sidebar, because a contractor arrives knowing the category. Solar shows installed sites, each with a page of its own, because a homeowner wants roofs like theirs.",
      },
      {
        heuristic: "Aesthetic and minimalist design",
        title: "The Blog Split Four Ways",
        body: "Articles are grouped into general, solar, motorcycle and hardware streams rather than one feed. One content system serves three audiences, and none of them reads past the other two to reach their own.",
      },
      {
        heuristic: "Consistency and standards",
        title: "Contact in the Same Place Everywhere",
        body: "Call and LINE sit in the navigation bar on every page and repeat through the homepage sections. Whatever the line, the enquiry starts from the same control in the same place.",
      },
    ],
    impactTable: [
      { metric: "Efficiency", before: "Reached through the company story", after: "Brands in the nav, solar on the homepage", delta: "Direct" },
      { metric: "Real-world", before: "One shared treatment", after: "Model grid, catalogue, installed sites", delta: "Fitted" },
      { metric: "Minimalism", before: "Single mixed feed", after: "Four streams by business line", delta: "Segmented" },
      { metric: "Consistency", before: "Contact form", after: "Call and LINE in every header", delta: "Constant" },
    ],
    quote:
      "A homeowner pricing a solar roof, a rider choosing a motorcycle and a contractor sourcing fittings share nothing but the company they landed on. The design job was to stop any of them reading the other two.",
    quoteRole: "Design rationale · Endless Eco Website",
    learnings: [
      "When one company runs unrelated lines, a route per line is the efficient path: here the main line leads the homepage and the other two get sections of their own, where a shared story would only add reading.",
      "Each line needed its own product layout because each buyer arrives knowing something different; matching that is the real-world fit.",
      "Splitting content by audience lets one system serve three groups, which a single reverse-chronological feed cannot.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "Three Businesses, Three Routes",
      processIntro:
        "One site for three unrelated businesses, each given its own route and presented the way its buyer searches.",
    },
  },
  {
    id: "cwnh-hospital",
    title: "CWNH Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Jun 2024 – Sep 2024",
    role: "Lead UX/UI Designer",
    category: "Web Design & Elderly Care",
    platform: "Responsive Marketing Site",
    industry: "Elderly Care / Nursing Home",
    tags: ["Elderly Care", "Healthcare", "Trust", "Lead Gen"],
    stack: ["Figma", "Design System", "Thai Typography", "Photography Direction"],
    image: "/img/cover/cwnh-hospital.webp",
    imageAlt: "Chaeng Watthana Nursing Home website — named care team, published rate with inclusions, nearby transfer hospitals",
    metric: "Real Rooms & People",
    hook: "Publishing the monthly rate is easy. Publishing the eight things it includes is what stops a family bracing for what will be extra.",
    overview:
      "Site for Chaeng Watthana Nursing Home, a 24-hour elderly care centre, designed for the adult child deciding where to place a parent. That decision is made on trust rather than on features, so the site names the care team, shows the actual rooms, publishes the rate together with the eight things it covers, and lists the nearby hospitals a resident would be transferred to in an emergency.",
    summary:
      "A site for a 24-hour elderly care centre, designed for an adult child deciding where to place a parent. The decision is made on trust, so the design shows the real people and rooms, states what the rate covers, and answers the question families find hardest to ask.",
    kpis: [
      { value: "Prevention", label: "Error prevention", sub: "rate published with what it covers, so nothing surprises" },
      { value: "Real-world", label: "Match between system and the real world", sub: "real people and rooms, so a visit confirms what was seen" },
      { value: "Guidance", label: "Help and documentation", sub: "emergency hospitals listed before a family has to ask" },
    ],
    problem:
      "A family choosing a nursing home is deciding who will care for their parent every day. Read against the heuristics, care sites typically leave out the cues that settle it: who the staff are, what the rooms really look like, what the rate includes, and what happens in an emergency. Each gap leaves the family to find out on a visit or a call, or to assume.",
    baselineStats: [
      { value: "Unseen staff", label: "care team not introduced before a visit" },
      { value: "No real view", label: "rooms and equipment not shown as they are" },
      { value: "Rate unexplained", label: "what a monthly rate covers left unstated" },
    ],
    solutions: [
      {
        heuristic: "Match between system and the real world",
        title: "Real People and Real Rooms",
        body: "Two doctors and two nurses appear by name with photographs and a line on their experience, followed by real photographs of rooms, beds and daily activities from a dedicated set. A family sees the people and the conditions they are choosing, so a visit confirms what they already saw rather than revealing it.",
      },
      {
        heuristic: "Error prevention",
        title: "The Rate and Everything It Covers",
        body: "The service page states the monthly and daily rate, and directly beneath it an eight-item block lists what that includes, from three meals and two snacks a day to vital-signs monitoring and round-the-clock CCTV. A family knows what they are paying for before they call, rather than bracing for it.",
      },
      {
        heuristic: "Help and documentation",
        title: "Nearby Hospitals Named",
        body: "The contact page lists seven nearby hospitals beside the map as the transfer destinations in an emergency. The question families find hardest to ask on a first call is answered without them asking.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "Call or LINE From Any Page",
        body: "The phone number and a LINE button sit in the header of every page and again beneath the rate, so a family that has read enough can call or message from wherever they stopped, instead of looking for the contact page.",
      },
    ],
    impactTable: [
      { metric: "Real-world", before: "Staff and rooms not shown", after: "Named team and real photography", delta: "Shown" },
      { metric: "Prevention", before: "Rate unexplained", after: "Rate with an eight-item inclusions list", delta: "Clear" },
      { metric: "Guidance", before: "Emergency plan unaddressed", after: "Seven nearby hospitals named", delta: "Answered" },
      { metric: "Efficiency", before: "Contact on its own page", after: "Phone and LINE in every header", delta: "Closer" },
    ],
    quote:
      "The question a family cannot bring themselves to ask on a first call is what happens at three in the morning. Naming the hospitals a resident would go to answers it before they have to.",
    quoteRole: "Design rationale · CWNH Website",
    learnings: [
      "In care, photography is evidence rather than atmosphere: a visit should confirm what the family already saw.",
      "Stating what a price includes prevents a misunderstanding a family would otherwise only discover after deciding.",
      "The fear behind this kind of decision is usually unspoken, and answering it unprompted is the most useful help a page can give.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "Answering What a Family Cannot Ask",
      processIntro:
        "Three pages that show the care team, the rooms and the rate, and name the hospitals used in an emergency.",
    },
  },
  {
    id: "pumacha-lifestyle",
    title: "Pumacha Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Mar 2024 – May 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Garment Manufacturing",
    platform: "Single-Page Corporate Site",
    industry: "Garment & Bag OEM Manufacturing",
    tags: ["Manufacturing", "OEM", "Garment", "B2B"],
    stack: ["Figma", "Design System", "Thai Typography", "Photography Direction"],
    image: "/img/cover/pumacha-lifestyle.webp",
    imageAlt: "Pumacha website — factory-direct claim, twelve bag types, and a bag collection carrying Coca-Cola and FWD work",
    metric: "Claim-Then-Evidence",
    hook: "Every garment factory says it makes good work. This one says it is the factory, not an agent — so the site had to show a production floor rather than a portfolio.",
    overview:
      "Single-page site for Pumacha Co., Ltd., a garment and bag OEM producing premium promotional goods for corporate buyers. The page is built around one claim the client leads with — that they are the factory and no agent sits in between — and everything else on it exists to make that claim checkable: photographs from their own sewing floor, a named list of what they can produce, and a bag collection carrying work done for brands the buyer already knows.",
    summary:
      "A single-page site for a garment and bag factory selling promotional goods to corporate buyers. The page is built around one claim, that buyers deal with the factory directly, and the design places beside it evidence a buyer can check, a named list of what can be made, and contact wherever they stop reading.",
    kpis: [
      { value: "Real-world", label: "Match between system and the real world", sub: "the claim placed beside the evidence that supports it" },
      { value: "Recognition", label: "Recognition rather than recall", sub: "products listed by name, so a buyer finds their item" },
      { value: "Efficiency", label: "Flexibility and efficiency of use", sub: "contact repeated after every block of one scroll" },
    ],
    problem:
      "Corporate buyers of promotional goods often reach factories through agents, and from a website an agent and a manufacturer look the same: both show finished products. Read against the heuristics, a claim to be the factory needs real-world evidence a buyer can check; capability described in general terms makes a buyer with a specific brief ask rather than look; and on a single long page, contact placed only at the end misses the moment they decide.",
    baselineStats: [
      { value: "Indistinguishable", label: "an agent's site looks the same as a factory's" },
      { value: "Capability unstated", label: "what can be produced not listed" },
      { value: "One exit", label: "contact only at the end of a long page" },
    ],
    solutions: [
      {
        heuristic: "Match between system and the real world",
        title: "The Claim, Then the Evidence",
        body: "The page states the factory-direct claim full-width, and around it sit photographs from the factory itself: cutting tables, sewing lines, stacked finished stock and staff at work. An agent can borrow product photos but not pictures of a floor they do not have, so the claim becomes something a buyer can check.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "Capability Written Out by Name",
        body: "Twelve bag types are named in one block, alongside uniforms, hats and caps, with printing methods listed under the claim. A buyer with a specific brief finds their item on the list or does not, which is faster for both sides than an enquiry that ends in a no.",
      },
      {
        heuristic: "Help and documentation",
        title: "Design Help Offered Up Front",
        body: "A consultation and design block says the factory will help shape the product with the buyer, beside photographs of pattern cutting. A buyer who arrives with an idea rather than finished artwork learns before enquiring that this is part of the service.",
      },
      {
        heuristic: "Flexibility and efficiency of use",
        title: "Contact the Length of the Scroll",
        body: "A call button and LINE account sit in the header and repeat after every block, seven points across one page. The next step is always beside wherever the reader stops.",
      },
    ],
    impactTable: [
      { metric: "Real-world", before: "Claimed only", after: "Own factory floor photographed", delta: "Shown" },
      { metric: "Recognition", before: "Capability unstated", after: "Twelve bag types named", delta: "Listed" },
      { metric: "Guidance", before: "Artwork assumed", after: "Consultation and design offered", delta: "Explained" },
      { metric: "Efficiency", before: "Footer only", after: "Seven call and LINE points", delta: "Multiplied" },
    ],
    quote:
      "From a website, a trading agent and a real factory look the same. The one thing an agent cannot show is their own sewing floor, so that is what sits beside the claim.",
    quoteRole: "Design rationale · Pumacha Website",
    learnings: [
      "When a page leads with a claim, the design job is to place beside it the one piece of evidence a competitor could not fake.",
      "Naming capability item by item lets the wrong buyer recognise early that it is not for them, which saves both sides an enquiry.",
      "On a single-page site the exit has to be everywhere, because the reader stops wherever they decide.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "A Claim Made Checkable",
      processIntro:
        "One page built around the factory-direct claim, with the factory floor, the product list and contact placed around it.",
    },
  },
  {
    id: "clean-all-kleen",
    title: "Clean All Kleen",
    client: "BEURDEV CO., LTD.",
    timeline: "Apr 2024 – Jun 2024",
    role: "UX/UI Designer",
    category: "Web Design & Facility Services",
    platform: "Single-Page Sale Page",
    industry: "Commercial & Industrial Cleaning",
    tags: ["Facility Services", "B2B", "Sale Page", "Lead Gen"],
    stack: [
      "Figma",
      "Landing Page",
      "Design System",
      "Thai Typography",
    ],
    image: "/img/cover/clean-all-kleen.webp",
    imageAlt: "Clean All Kleen sale page — three service lines, eight facility types and a grid of completed industrial jobs",
    metric: "Photo-Led Service Cards",
    hook: "An industrial-estate contractor moving into homes and condos. The site had to keep the heavy-duty credibility while stopping it from scaring off a homeowner.",
    overview:
      "Single-page site for Clean All Kleen, the cleaning arm of Magic Equipment Co., Ltd. The parent company built its business inside industrial estates and then widened out to serve a broader mix of clients, so the page carries three service lines — big cleaning, industrial oil and grease removal, and drain and grease-trap dredging — across eight named facility types, with a gallery of completed jobs doing the work that a service description cannot.",
    summary:
      "A single-page site for a cleaning contractor serving both factories and homes. The design lets each visitor recognise their job from a photograph, find their own type of site named, and judge the standard from completed work, without the industrial side making the domestic side feel like the wrong place.",
    kpis: [
      { value: "Recognition", label: "Recognition rather than recall", sub: "each service card led by a photo of that exact job" },
      { value: "Real-world", label: "Match between system and the real world", sub: "site types named, so a factory and a home both fit" },
      { value: "Consistency", label: "Consistency and standards", sub: "three service lines on one card: photo, title, scope" },
    ],
    problem:
      "Commercial cleaning is bought on evidence that the contractor has handled a site like yours, and this page had to serve a factory manager and a homeowner at once. Read against the heuristics, services described in text make both read before they recognise their job; a general description of coverage leaves each wondering whether their type of site is included; and without completed work there is nothing to judge the standard by.",
    baselineStats: [
      { value: "Text only", label: "services usually described rather than shown" },
      { value: "Unclear scope", label: "the types of site served left unstated" },
      { value: "No evidence", label: "nothing to judge the standard of work by" },
    ],
    solutions: [
      {
        heuristic: "Recognition rather than recall",
        title: "Each Service Led by a Photograph of the Job",
        body: "Big cleaning, industrial oil and grease removal, and drain and grease-trap dredging each get a card with a photograph of that exact work and one line of scope. A visitor recognises their job from the picture before reading anything.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "Every Site Type Written Out",
        body: "House, condo, showroom, restaurant, shopping mall, office building, factory and warehouse are named in the hero and again in the service copy, with post-construction cleaning alongside. Each visitor finds their own word, so one page serves a homeowner and a plant manager at once.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Card Pattern for Three Lines",
        body: "The three service cards share one structure: photograph, title and one line of scope. A visitor compares them at a glance, and the industrial lines sit beside the domestic one without looking like a different business.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "Completed Work as the Evidence",
        body: "Eight photographs of completed jobs run across two rows, including a crew in full protective equipment. A visitor judges the standard from work already done, the cue they would look for in person, and an industrial buyer sees the safety standard the crew already works to.",
      },
    ],
    impactTable: [
      { metric: "Recognition", before: "Text description", after: "Three lines, each with its own photograph", delta: "Visual" },
      { metric: "Real-world", before: "Coverage implied", after: "Eight site types named in the hero and copy", delta: "Explicit" },
      { metric: "Consistency", before: "Industrial and domestic apart", after: "One card pattern for all three lines", delta: "Unified" },
      { metric: "Real-world", before: "No completed work shown", after: "Eight-job gallery including a PPE crew", delta: "Documented" },
    ],
    quote:
      "A contractor from the industrial estates already has the harder credential. The design problem was showing it to a factory manager without making a homeowner feel they had opened the wrong website.",
    quoteRole: "Design rationale · Clean All Kleen",
    learnings: [
      "When one page serves two very different buyers, naming every site type does more than copy written general enough to cover both.",
      "A photograph of the exact job lets a visitor recognise their need before reading, which matters most on a page with several services.",
      "In facility services, the photograph that settles an industrial enquiry is of the crew and their protective equipment, not a finished room.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "One Page, Two Kinds of Buyer",
      processIntro:
        "One page that serves a plant manager and a homeowner, with every site type named and the completed work shown.",
    },
  },
  {
    id: "zea-management",
    title: "Zea Management Website",
    client: "BEURDEV CO., LTD.",
    timeline: "Jul 2024 – Oct 2024",
    role: "Senior UX/UI Designer",
    category: "Web Design & Business Services",
    platform: "Six-Page Corporate Site",
    industry: "Accounting & Back Office Outsourcing",
    tags: ["Back Office", "Accounting", "B2B", "Corporate"],
    stack: ["Figma", "Design System", "Thai Typography", "Component Library"],
    image: "/img/cover/zea-management.webp",
    imageAlt: "Zea Management website — black and gold identity, four service lines, client seals and a wall of seminar posters",
    metric: "Three-Step Engagement",
    hook: "The seminar posters are not decoration on this site. Training is one of the four things the firm sells, so the speaking record is both the proof of expertise and the portfolio for a service line.",
    overview:
      "Six-page corporate site for Zea Management Consultant Co., Ltd. (ZEACORP), a back-office firm selling four lines: accounting and financial-statement closing, advisory, company registration, and paid training. The last of those changes how the whole site works — a firm that teaches tax courses can prove its expertise by showing the courses, so the homepage carries a wall of seminar posters where a competitor would have written a paragraph about experience.",
    summary:
      "A six-page site for an accounting and business-services firm, designed for a visitor deciding whether to hand their financial records to someone they have not met. The design work went into three things: making the first step visible, showing expertise rather than describing it, and keeping every page on one set of components.",
    kpis: [
      { value: "Visibility", label: "Visibility of system status", sub: "three numbered steps show where an engagement starts" },
      { value: "Real-world", label: "Match between system and the real world", sub: "expertise shown through published course material" },
      { value: "Consistency", label: "Consistency and standards", sub: "reusable cards and one closing block across the pages" },
    ],
    problem:
      "Outsourcing accounts is a high-trust decision made by someone who cannot easily judge accounting expertise. Read against the heuristics, the risks were specific: a visitor could not see what starting an engagement involved, so the first step felt like a commitment; expertise written as prose gave them nothing from their own world to check it against; and four services in a flat list gave them no structure to recognise their own need by.",
    baselineStats: [
      { value: "First step unseen", label: "nothing showed what starting an engagement involved or asked for" },
      { value: "Claims, not evidence", label: "expertise described in prose that any firm could have written" },
      { value: "Flat service list", label: "four lines of work with no structure to recognise a need by" },
    ],
    solutions: [
      {
        heuristic: "Visibility of system status",
        title: "The Engagement Path in Three Steps",
        body: "Getting started is published as three numbered steps with icons: state what you need, fill in the online form, receive the consultation. Naming the form as the first step shows a visitor where the process begins and what it asks of them, before they commit to a call or a meeting.",
      },
      {
        heuristic: "Match between system and the real world",
        title: "Expertise Shown as Published Course Material",
        body: "The homepage shows the firm's seminar posters as they were actually published, with dates, venues and fees. A visitor judges them the way they judge any course in the real world, as something other people already signed up for, which is a check that a sentence about experience cannot offer.",
      },
      {
        heuristic: "Recognition rather than recall",
        title: "Four Services, One Card Each",
        body: "Accounting, advisory, registration and training each get a card with a photograph, a title and a list of what it covers. A visitor scans for their own need and recognises it, instead of reading a description of everything the firm does.",
      },
      {
        heuristic: "Consistency and standards",
        title: "One Component Set Across Six Pages",
        body: "The service cards were built as reusable components with collapsed and expanded variants, and a consultation block with two QR codes, LINE among them, closes the home, services, blog and contact pages in the same form. A visitor learns the layout once and finds the same element in the same place.",
      },
    ],
    impactTable: [
      { metric: "Visibility", before: "First step of an engagement unstated", after: "Three numbered steps, the form named first", delta: "Shown" },
      { metric: "Real-world", before: "Expertise described in prose", after: "Published seminar material on the homepage", delta: "Evidenced" },
      { metric: "Recognition", before: "Services in a flat list", after: "Four cards with photograph and inclusions", delta: "Scannable" },
      { metric: "Consistency", before: "Not systematised", after: "Card components and one closing block", delta: "Systematised" },
    ],
    quote:
      "Outsourcing accounts is decided on trust by someone who cannot audit an accountant. The design kept to things a visitor can check for themselves: what the first step is, what the firm has already taught, and the same structure on every page.",
    quoteRole: "Design rationale · Zea Management Website",
    learnings: [
      "For a high-trust service the most useful thing to make visible is the first step; naming it as a form rather than a meeting lowers the commitment a visitor believes they are making.",
      "Evidence from the visitor's own world, such as a published course with a date and a fee, matches how people already judge expertise, which is why it carries further than a claim in prose.",
      "Building the service cards as components with variants kept the pages consistent, so a new service reuses a pattern visitors have already learned.",
    ],
    sectionLabels: {
      problemEyebrow: "01 / Discovery & Heuristic Gaps",
      problemHeading: "Problem & Usability Gaps",
      solutionsHeading: "Design Decisions by Heuristic",
      impactHeading: "Before & After by Heuristic",
      impactColumns: ["Heuristic", "Before", "After", "Change"],
      learningsEyebrow: "04 / Retrospective",
      learningsHeading: "Design Learnings",
      processHeading: "Six Pages, One Component Set",
      processIntro:
        "Six pages built from one set of components, with the engagement path published and the course material shown as evidence.",
    },
  }
];
