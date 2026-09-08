import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Telemedicine User Flow Architecture",
    body: "Mapped the telehealth journey as parallel tracks — what the patient experiences above the line, what the system does below it. Scenario-based flows covered the branching realities of telemedicine: consultation with prescription dispensing, delivery-area coverage limits, and the fallback paths when a case cannot be handled remotely.",
    images: [
      "/img/process/dr-smoothlife/01.webp",
      "/img/process/dr-smoothlife/02.webp",
      "/img/process/dr-smoothlife/03.webp",
    ],
  },
  {
    step: "02",
    title: "Design System Foundation",
    body: "Built a token-driven system spanning mobile, tablet and desktop. In a healthcare product the system carries clinical weight — status, urgency and prescription state have to read identically whether a patient sees them on a phone or a doctor reads them on a workstation.",
    images: [
      "/img/process/dr-smoothlife/04.webp",
    ],
  },
  {
    step: "03",
    title: "Responsive Patient Experience",
    body: "Designed the patient-facing surfaces across desktop, tablet and mobile breakpoints rather than shrinking one layout into the others. Each viewport got a navigation model that fits how it is actually held and used.",
    images: [
      "/img/process/dr-smoothlife/05.webp",
      "/img/process/dr-smoothlife/06.webp",
    ],
  },
  {
    step: "04",
    title: "Telepharma & Telemed Journeys",
    body: "Detailed the two core service paths — remote consultation and digital prescription fulfilment — from doctor discovery through video consult to medication delivery. Laying both journeys out in full exposed where they diverge and where they can share components.",
    images: [
      "/img/process/dr-smoothlife/07.webp",
      "/img/process/dr-smoothlife/08.webp",
      "/img/process/dr-smoothlife/09.webp",
    ],
  },
  {
    step: "05",
    title: "Logistics & Fulfilment Back-Office",
    body: "Designed the admin surfaces governing delivery: shipping fee rules, coverage zones and rate configuration. Prescription delivery is where telemedicine either works or quietly fails, so these operational tools were treated as core product.",
    images: [
      "/img/process/dr-smoothlife/10.webp",
      "/img/process/dr-smoothlife/11.webp",
    ],
  },
  {
    step: "06",
    title: "Order & Prescription Management",
    body: "Built the CMS workflows for order handling — review, status transitions, and itemised prescription detail. Screens were structured so an operator can reconstruct exactly what was prescribed, dispensed and shipped without leaving the record.",
    images: [
      "/img/process/dr-smoothlife/12.webp",
      "/img/process/dr-smoothlife/13.webp",
    ],
  },
  {
    step: "07",
    title: "Exception Handling & Cancellations",
    body: "Designed the cancellation and refund flows, including partial item cancellation within an order. In pharmacy fulfilment the exception path is frequent enough that leaving it undesigned would have pushed the work onto support staff.",
    images: [
      "/img/process/dr-smoothlife/14.webp",
      "/img/process/dr-smoothlife/15.webp",
    ],
  },
];
