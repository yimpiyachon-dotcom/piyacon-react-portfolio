import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "UX Process Framing",
    body: "Set the process around who actually uses this: people working in a plot, often on modest devices, with connectivity that comes and goes. That constraint shaped every decision downstream — what could be assumed, what had to degrade gracefully, and how much a single screen could reasonably ask of someone standing in a field.",
    images: [
      "/img/process/kanna-app/01.webp",
    ],
  },
  {
    step: "02",
    title: "Design System Foundation",
    body: "Built a token-driven system sized for mobile-first agricultural use — large touch targets, high contrast for outdoor daylight, and Thai typography that stays legible at small sizes. One consistent set of patterns is what keeps each screen predictable for someone who does not use a smartphone often.",
    images: [
      "/img/process/kanna-app/02.webp",
    ],
  },
  {
    step: "03",
    title: "Onboarding, Homepage & Content",
    body: "Designed the welcome flow, homepage and news surfaces alongside their full state coverage — loading, 500 errors, unauthorised, no-internet, request timeout and coming-soon. For a field app the offline and failure states are not edge cases, they are part of the everyday experience, so they were designed rather than left to chance.",
    images: [
      "/img/process/kanna-app/03.webp",
      "/img/process/kanna-app/04.webp",
      "/img/process/kanna-app/05.webp",
    ],
  },
  {
    step: "04",
    title: "Farm Plot & Project Management",
    body: "Structured how farmers register plots, join projects and manage participation. Flows were designed for both directions — joining a project and leaving one — including the empty state where a farmer has no plots registered yet.",
    images: [
      "/img/process/kanna-app/06.webp",
      "/img/process/kanna-app/07.webp",
      "/img/process/kanna-app/08.webp",
      "/img/process/kanna-app/09.webp",
    ],
  },
  {
    step: "05",
    title: "Activity Tracking & Cultivation Records",
    body: "Designed the activity logging module where farmers record cultivation events over a season. Screen-flow diagrams and hand-sketched IA were used to compress a long, repetitive data-entry task into something completable on a phone between field rounds.",
    images: [
      "/img/process/kanna-app/10.webp",
      "/img/process/kanna-app/11.webp",
      "/img/process/kanna-app/12.webp",
    ],
  },
  {
    step: "06",
    title: "Utility & Conversion Tools",
    body: "Added practical in-app tools including unit conversion for length and area measurements. Thai agricultural units sit alongside metric in daily use, so conversion was built into the product rather than left as something farmers work out separately.",
    images: [
      "/img/process/kanna-app/13.webp",
      "/img/process/kanna-app/14.webp",
      "/img/process/kanna-app/15.webp",
    ],
  },
  {
    step: "07",
    title: "Notifications & Account Management",
    body: "Designed alerting, profile and account surfaces that connect the mobile app to the geospatial CMS. Notifications had to be specific enough to act on without becoming noise a farmer learns to dismiss.",
    images: [
      "/img/process/kanna-app/16.webp",
      "/img/process/kanna-app/17.webp",
      "/img/process/kanna-app/18.webp",
    ],
  },
  {
    step: "08",
    title: "Final UI & Launch",
    body: "Released on the App Store and Google Play as KANNA by varuna: drawing a plot directly on the satellite map with its area returned in Thai agricultural units, the saved plot records and their details, weather, projects and agricultural news — with the geospatial CMS behind it.",
    images: [
      "/img/process/kanna-app/19.webp",
      "/img/process/kanna-app/20.webp",
    ],
  },
];
