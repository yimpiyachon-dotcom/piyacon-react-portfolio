import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Homepage Architecture — Wireframe to UI",
    body: "Blocked out the homepage as greybox wireframes for desktop and mobile before any visual design, so the merchandising hierarchy — flash sale, new brands, best sellers, brand promotions, all categories — was settled first. The finished screens keep that exact skeleton, which is what let layout debates get resolved on the wireframe instead of on finished UI.",
    images: ["/img/process/all-about-you/1.webp"],
  },
  {
    step: "02",
    title: "Brand & Product Listing",
    body: "Designed the brand landing and product listing pages across breakpoints. Desktop pairs the brand story banner with a dense product grid; on mobile the filter set moves into a full-screen sheet and the category tabs pin to the top while the grid scrolls beneath, so browsing a long catalogue on a phone never loses the filters.",
    images: ["/img/process/all-about-you/2.webp"],
  },
  {
    step: "03",
    title: "Product Detail Page",
    body: "Resolved the desktop product page and its states: the buy box and gallery up top, then the brand's own ingredient and how-to-use storytelling, the full ingredient list, and a 4.2-star review section with filter chips and customer photos. The variants cover the review-with-photo layout and the active write-a-review state, so the page was signed off with its interactions shown rather than described.",
    images: ["/img/process/all-about-you/3.webp"],
  },
  {
    step: "04",
    title: "Product Detail Flow",
    body: "Mapped the mobile product detail journey end to end: image gallery, share sheet, ingredient and how-to-use content, the ratings breakdown, the write-a-review modal, and the related-products rail that closes the loop back into browsing. Laying the branches out side by side exposed which review states needed their own screen rather than an inline expand.",
    images: ["/img/process/all-about-you/4.webp"],
  },
  {
    step: "05",
    title: "Desktop Checkout & Coupon Flow",
    body: "Charted the desktop purchase path from cart through coupon selection, points redemption, payment and confirmation — including the pop-up branches for applying a code and for failed redemption. Drawing every dialogue as its own node made it clear where the flow doubled back and which confirmations could be merged.",
    images: ["/img/process/all-about-you/5.webp"],
  },
  {
    step: "06",
    title: "Mobile Checkout & Redemption Flow",
    body: "The same journey rebuilt for mobile, where the coupon drawer, points balance and order summary compete for a much smaller viewport. Redemption was split into discrete steps — select reward, confirm points, success — rather than stacked into one screen, so the user always knows how many points a step will spend.",
    images: ["/img/process/all-about-you/6.webp"],
  },
  {
    step: "07",
    title: "Checkout Screen Set",
    body: "The resolved checkout screens: a three-step progress header across shipping details, payment method and order summary, with the cart contents held in a persistent right-hand panel so the total never leaves view. Includes the card-entry modal and the completed-order receipt with tracking reference.",
    images: ["/img/process/all-about-you/7.webp"],
  },
  {
    step: "08",
    title: "Loyalty & CRM Flow",
    body: "The membership side of the platform: main menu, points balance, reward redemption, my-coupons wallet, in-store barcode, member tier card and points history. The barcode screen is the hinge of the omnichannel promise — it is what makes an online balance spendable at a physical branch.",
    images: ["/img/process/all-about-you/8.webp"],
  },
  {
    step: "09",
    title: "Annotated Flow Handoff",
    body: "The developer-facing version of the desktop flow, with Figma frame names kept visible on every node so engineering could trace any screen in the build back to its source frame. Annotations call out the promo-code path and which dialogues are shared between branches.",
    images: ["/img/process/all-about-you/9.webp"],
  },
];
