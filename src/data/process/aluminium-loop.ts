import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Audit: Hero and About Section",
    body: "The audit started with the live site rather than a proposal. In the hero, the background image did not earn the space, and the headline block sat off the grid the rest of the page used, which reads as a page still being built. The fix was argued from proximity and consistency and standards. The About section below had good contrast but long, unbroken text; the recommendation was to split it into shorter parts under their own headings and to give the content some visual support, so a reader can recognise what each part covers instead of reading all of it to find out.",
    images: [
      "/img/process/aluminium-loop/01.webp",
    ],
  },
  {
    step: "02",
    title: "Audit: The Scroll Barrier",
    body: "The recycled-can counter filled the whole desktop viewport, so nothing below it was visible and nothing suggested the page continued. A visitor decides within the first few seconds whether to stay, and spending them on one number with no visible next section risks losing them before they learn what the company does. The recommendation was to shrink the can until the next section breaks the fold, using closure and continuity rather than a scroll hint.",
    images: [
      "/img/process/aluminium-loop/02.webp",
    ],
  },
  {
    step: "03",
    title: "Audit: The Branch Locator Dead End",
    body: "The map showed coverage across the country but gave no way to read an actual location: the link to the coordinates opened a separate page, away from everything else. Coming back means the browser's back button, which is exactly where someone looking for a drop-off point gives up. The space beside the map was unused, so the recommendation was to bring the branch table, grouped by region, inline next to it.",
    images: [
      "/img/process/aluminium-loop/03.webp",
    ],
  },
  {
    step: "04",
    title: "Audit: Cards, Headings and Logos",
    body: "The news cards used square corners with a blue drop shadow, a treatment that reads as early skeuomorphic rather than current; softening the radius and dropping the coloured shadow was enough to settle it. Below them, the partner heading was centred while the news heading above was left-aligned, so the recommendation was one alignment rule for every section heading. The partner logos also sat far smaller than their heading, and either a larger size or a carousel would close the gap.",
    images: [
      "/img/process/aluminium-loop/04.webp",
    ],
  },
  {
    step: "05",
    title: "Redesign: Landing and Closed-Loop Pages",
    body: "The redesign keeps a light page with a blue hero and a dark navy footer, and puts the product photography to work. The landing page moves from the brand statement into the closed-loop explanation, then shows the impact figures as a row of compact stat cards instead of a full-screen counter, so one scroll passes through all of it. The same page carries the news cards, the partner logos and the client logos at a consistent size. A separate Closed-Loop Recycling page holds the partnership case with its own figures and photographs.",
    images: [
      "/img/process/aluminium-loop/05.webp",
    ],
  },
  {
    step: "06",
    title: "Redesign: About Pages",
    body: "The About section is split into Our Story, The Founder and What We Do. The founder page was drawn in two versions, one opening on the biography and one on the education, and both put the credentials as a short list beside the portrait rather than inside body copy. What We Do walks through the recycling process itself, including the collection machine, so the claim that the recycling can be checked is shown rather than stated.",
    images: [
      "/img/process/aluminium-loop/06.webp",
    ],
  },
  {
    step: "07",
    title: "Redesign: Solutions, Articles, News and Contact",
    body: "The remaining pages complete the set: the sustainable solutions page for the can and solar lines with the ESG circular impact diagram, the article index with category tabs and an article template, the news and events index with a long-form sample, and a contact page with the map beside the enquiry form. Articles and news share one card pattern and one template structure, so a reader who has used one already knows the other.",
    images: [
      "/img/process/aluminium-loop/07.webp",
    ],
  },
];
