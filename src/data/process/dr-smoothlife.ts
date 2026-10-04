import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Service Scenarios: Patient and System Lanes",
    body: "The service was mapped as scenarios before any screen was drawn, each with a patient lane above a system lane, so every decision point shows what the person sees and what the system has to do. Scenario one covers seeing a doctor straight away, with dispensing and delivery limited to Bangkok and its surrounding provinces. Scenario two covers booking an appointment, with nationwide delivery from regional stock or collection at a partner pharmacy. A third board maps a centralised model that sends medicine from the nearest pharmacy. Laying the scenarios side by side showed where they share steps and where delivery coverage forces them apart.",
    images: [
      "/img/process/dr-smoothlife/01.webp",
      "/img/process/dr-smoothlife/02.webp",
      "/img/process/dr-smoothlife/03.webp",
    ],
  },
  {
    step: "02",
    title: "Design System Foundation",
    body: "One system board sets the foundation shared by the patient, clinical and admin screens: a green primary palette with greys, and yellow and red reserved for alerts; Prompt for headings and Sarabun for Thai body text; button families from primary to ghost, each with default, hover, pressed and disabled states; text fields with focused, error and complete states; tabs, status tags, and toasts for error, warning, info and success; and container widths for desktop, tablet and mobile with their paddings.",
    images: [
      "/img/process/dr-smoothlife/04.webp",
    ],
  },
  {
    step: "03",
    title: "Patient Web Experience",
    body: "The patient-facing web was designed at desktop, tablet and mobile widths, each with its own navigation drawer, rather than one layout shrunk to fit. Product pages were specified for every state a pharmacy catalogue meets: items with and without options, out of stock, without an image, a medicine shown without its image, loading and sharing. A buy-more-save-more promotion was taken from the product page through the cart and checkout to its success screen.",
    images: [
      "/img/process/dr-smoothlife/05.webp",
      "/img/process/dr-smoothlife/07.webp",
      "/img/process/dr-smoothlife/08.webp",
    ],
  },
  {
    step: "04",
    title: "Consultation & Intake Journeys",
    body: "The consultation journeys were drawn end to end. On the web, a stepped intake form with a progress bar collects the patient's details and symptom photos, then hands over to a queue number, a waiting screen, the video call with the doctor and the summary that follows. The mobile app adds consent and identity verification with an ID card capture before either track starts, then runs telepharmacy and telemedicine as parallel flows, including the end-call, time-out, hang-up and error branches and a chat option.",
    images: [
      "/img/process/dr-smoothlife/06.webp",
      "/img/process/dr-smoothlife/09.webp",
    ],
  },
  {
    step: "05",
    title: "Shipping Fee Rules",
    body: "In the back office, delivery is configured as shipping-fee rules: a table of weight bands with the fee and an on-off status for each, filters for normal and express delivery, weight and volume, a form for adding a rule by delivery type, and a confirmation before a rule is deleted.",
    images: [
      "/img/process/dr-smoothlife/10.webp",
    ],
  },
  {
    step: "06",
    title: "Order Management",
    body: "Orders are handled from one list with status tabs, search filters, an export and a shipping label to print, and a detail page for each order showing the buyer, the delivery and tax-invoice addresses, a delivery-status timeline, the items, the carrier and the payment breakdown. The boards show the same templates in two states: orders waiting to be received and completed orders.",
    images: [
      "/img/process/dr-smoothlife/11.webp",
      "/img/process/dr-smoothlife/13.webp",
    ],
  },
  {
    step: "07",
    title: "Returns, Exchanges & Cancellations",
    body: "The exception paths got their own screens. Exchange and refund requests open with the reason and the customer's evidence photos, and each item is approved or rejected on its own; a rejected item needs a reason before the decision can be saved, and the list shows whether a request was approved in part, in full or not at all. Cancelled orders keep their detail page with the cancellation reason and time, for orders cancelled automatically and those cancelled manually.",
    images: [
      "/img/process/dr-smoothlife/12.webp",
      "/img/process/dr-smoothlife/14.webp",
      "/img/process/dr-smoothlife/15.webp",
    ],
  },
];
