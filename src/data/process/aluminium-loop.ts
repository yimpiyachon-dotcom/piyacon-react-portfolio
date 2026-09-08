import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Heuristic Audit: Entry Point",
    body: "Ran a heuristic pass over the live site before proposing anything, starting with the hero. The background image was not doing the work a hero needs to do, and the headline block sat off the grid the rest of the page used — misalignment a visitor reads as a page still under construction rather than a deliberate layout. Arguing the fix from Proximity and Consistency & Standards made the recommendation specific enough to act on, instead of a general note that it looked unpolished.",
    images: [
      "/img/process/aluminium-loop/01.webp",
    ],
  },
  {
    step: "02",
    title: "Heuristic Audit: The Scroll Barrier",
    body: "The recycled-can counter filled the entire desktop viewport, so nothing below it was visible at rest and no cue suggested the page continued. A visitor forms their judgement in the first five to ten seconds; spending that window on a single number with no visible next section means they can leave without ever learning what the company does. The recommendation was to scale the can down until the following section breaks the fold — Closure and Continuity doing work no scroll hint would.",
    images: [
      "/img/process/aluminium-loop/02.webp",
    ],
  },
  {
    step: "03",
    title: "Heuristic Audit: Branch Locator Dead End",
    body: "The branch map showed nationwide coverage but gave no way to read an actual location — the coordinates link opened a separate page, taking the visitor off the surface holding everything else. Getting back means the browser's back button, which is enough friction to lose people at the exact moment they are trying to find a drop-off point near them. There was unused horizontal space beside the map, so the branch table belonged inline.",
    images: [
      "/img/process/aluminium-loop/03.webp",
    ],
  },
  {
    step: "04",
    title: "Heuristic Audit: Card Styling & Alignment",
    body: "Two consistency findings on the lower page. The article cards used square corners with a blue drop shadow — a skeuomorphic treatment that reads as early-iOS rather than current, where softening the radius and dropping the coloured shadow was enough to settle it. Below that, the testimonial heading was centred while the news heading directly above it was left-aligned, and the partner logos sat well below the scale of the heading above them.",
    images: [
      "/img/process/aluminium-loop/04.webp",
    ],
  },
  {
    step: "05",
    title: "Redesigned Landing & Closed-Loop Story",
    body: "Rebuilt the site on a dark ground that lets the aluminium product photography carry the page. The landing page leads with the brand statement, moves into the closed-loop explanation, and holds the impact figures as a compact stat row rather than a full-screen counter — the same content the audit found unreadable, reordered so one scroll passes through all of it. A dedicated Closed-Loop Recycling page carries the TCP partnership case in full.",
    images: [
      "/img/process/aluminium-loop/05.webp",
    ],
  },
  {
    step: "06",
    title: "About & Founder Surfaces",
    body: "Designed the About cluster — Our Story, the founder page in two treatments, and What We Do. The founder page does credibility work for a business selling verified recycling claims, so credentials sit as a scannable list beside the portrait rather than buried in body copy. What We Do carries the process itself: collection, the reverse-vending touchpoint, and the audit trail that makes the claim checkable.",
    images: [
      "/img/process/aluminium-loop/06.webp",
    ],
  },
  {
    step: "07",
    title: "Solutions, Editorial & Contact",
    body: "Completed the surface: the sustainable solutions page covering Aluminium Loop CAN and Aluminium Solar with the ESG circular impact diagram, the article index and template, the news and events index with a long-form event sample, and contact with an embedded map and enquiry form. The editorial templates do commercial work here — they are where the company gets found by people researching circular packaging before they are looking for a supplier.",
    images: [
      "/img/process/aluminium-loop/07.webp",
    ],
  },
];
