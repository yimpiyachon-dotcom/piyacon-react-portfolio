import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "UX Process Framing",
    body: "Set the process for a product whose users are smallholder farmers, not office workers — many on low-end devices, in the field, with intermittent connectivity. That constraint shaped every decision downstream: what could be assumed, what had to degrade gracefully, and how much a screen could ask of someone standing in a plot.",
    images: [
      "/img/9de6929de782.webp",
    ],
  },
  {
    step: "02",
    title: "Design System Foundation",
    body: "Built a token-driven system sized for mobile-first agricultural use — large touch targets, high contrast for outdoor daylight, and Thai typography that stays legible at small sizes. Consistency here directly reduced onboarding friction for first-time smartphone users.",
    images: [
      "/img/73e3a31326fc.webp",
    ],
  },
  {
    step: "03",
    title: "Onboarding, Homepage & Content",
    body: "Designed the welcome flow, homepage and news surfaces alongside their full state coverage — loading, 500 errors, unauthorised, no-internet, request timeout and coming-soon. For a field app, the offline and failure states are not edge cases; they are the everyday experience.",
    images: [
      "/img/39898510db1b.webp",
      "/img/e1f7b19c50ad.webp",
      "/img/dd8212b760be.webp",
    ],
  },
  {
    step: "04",
    title: "Farm Plot & Project Management",
    body: "Structured how farmers register plots, join projects and manage participation. Flows were designed for both directions — joining a project and leaving one — including the empty state where a farmer has no plots registered yet.",
    images: [
      "/img/50f4d93dcc66.webp",
      "/img/7ea7b94a0902.webp",
      "/img/e740bb35c7d5.webp",
      "/img/46c9bd524978.webp",
    ],
  },
  {
    step: "05",
    title: "Activity Tracking & Cultivation Records",
    body: "Designed the activity logging module where farmers record cultivation events over a season. Screen-flow diagrams and hand-sketched IA were used to compress a long, repetitive data-entry task into something completable on a phone between field rounds.",
    images: [
      "/img/a42899b7d00f.webp",
      "/img/353d7b0723a0.webp",
      "/img/50998c200d31.webp",
    ],
  },
  {
    step: "06",
    title: "Utility & Conversion Tools",
    body: "Added practical in-app tools including unit conversion for length and area measurements. Thai agricultural units sit alongside metric in daily use, so conversion was built into the product rather than left as something farmers work out separately.",
    images: [
      "/img/d7a7b54106a5.webp",
      "/img/d71c9b31361a.webp",
      "/img/e698f740f168.webp",
    ],
  },
  {
    step: "07",
    title: "Notifications & Account Management",
    body: "Designed alerting, profile and account surfaces that connect the mobile app to the geospatial back-office. Notifications had to be specific enough to act on without becoming noise a farmer learns to dismiss.",
    images: [
      "/img/b582ccd9f289.webp",
      "/img/47d2345ea0ca.webp",
      "/img/6e76036f0372.webp",
    ],
  },
  {
    step: "08",
    title: "Final UI & Launch",
    body: "Shipped to the App Store and Google Play — an AI-driven field diagnostics app paired with a geospatial CMS, serving 15,000+ smallholder farmers under the KANNA by Varuna brand.",
    images: [
      "/img/c70518826907.webp",
      "/img/520478b35168.webp",
    ],
  },
];
