import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Screen Flow Architecture",
    body: "Laid the whole platform out as one connected flow before designing individual pages. Mapping browse, product detail, cart, checkout, account and order history in a single view showed how far a customer travels between finding a remedy and paying for it — and where that path could be shortened.",
    images: [
      "/img/process/th-health/01.webp",
    ],
  },
  {
    step: "02",
    title: "Core Marketing & Landing Pages",
    body: "Designed the homepage, promotions, article and about surfaces that carry the brand and drive acquisition. These pages had to establish credibility quickly: in health commerce a customer decides whether to trust the seller before they evaluate any product.",
    images: [
      "/img/process/th-health/02.webp",
    ],
  },
  {
    step: "03",
    title: "Product Discovery & Detail",
    body: "Built the catalogue browsing, filtering and product detail templates. Detail pages were structured so dosage, indication and pricing are readable without scrolling past marketing copy — the information a customer actually needs to decide comes first.",
    images: [
      "/img/process/th-health/03.webp",
    ],
  },
  {
    step: "04",
    title: "Health Packages & Content Pages",
    body: "Designed the health check-up package pages and long-form editorial content. Packages are comparison-heavy purchases, so pricing tables and inclusions were laid out to be scanned side-by-side rather than read sequentially.",
    images: [
      "/img/process/th-health/04.webp",
    ],
  },
  {
    step: "05",
    title: "Account & Member Management",
    body: "Designed member registration, profile management and address book flows, including inline validation and success feedback. A first-time buyer meets these forms before their first order, so each field had to explain itself where it is filled in.",
    images: [
      "/img/process/th-health/05.webp",
      "/img/process/th-health/06.webp",
    ],
  },
  {
    step: "06",
    title: "Wishlist & Saved Products",
    body: "Built the saved-products surface so customers can hold items across sessions. For repeat medication and supplement purchases this doubles as a personal reorder list, not just a shopping convenience.",
    images: [
      "/img/process/th-health/07.webp",
    ],
  },
  {
    step: "07",
    title: "Checkout & Payment Confirmation",
    body: "Designed the bank transfer flow with slip upload, including the error state when a required file is missing. Transfer-and-confirm is how this store takes payment, so this path needed the same care usually reserved for card checkout.",
    images: [
      "/img/process/th-health/08.webp",
    ],
  },
  {
    step: "08",
    title: "Order History & Fulfilment Tracking",
    body: "Built order history with clear payment-status states and a full order summary covering items, delivery details and QR payment. Customers can reconstruct exactly what they ordered and where it stands without contacting support.",
    images: [
      "/img/process/th-health/09.webp",
    ],
  },
  {
    step: "09",
    title: "Kiosk Touchpoint",
    body: "The kiosk runs as tall portrait screens. It opens on a grid of symptoms with a LINE QR code for contact, leads to the matching products with the symptom chips kept along the top, and then to product detail with its own LINE QR code. On the product screens a fixed bar along the bottom always offers a way back and a way to contact the store or return to the start, so nobody at the kiosk is left without a next step.",
    images: [
      "/img/process/th-health/10.webp",
    ],
  },
];
