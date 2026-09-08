import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Marketing Site & Content Structure",
    body: "Designed the public surface: a homepage that leads with a document search rather than a pitch, a three-step explanation of how the product works, the template catalogue split into business and personal, an FAQ, and an article section. The whole site is Thai-language, so the type scale was set against dense Thai body copy rather than adapted from a Latin layout afterwards.",
    images: ["/img/process/contracable/1.webp"],
  },
  {
    step: "02",
    title: "Document Fill Flow",
    body: "The core journey. A template page states what the document is, when it was last revised, its format and length, and what the three steps ahead involve — then the fill-in screen puts the guided questions on the left and the live contract on the right, with a progress bar tracking completion. Watching the clause assemble as each field is answered is what lets a non-lawyer check the output instead of trusting it.",
    images: ["/img/process/contracable/2.webp"],
  },
  {
    step: "03",
    title: "Member Area & Account",
    body: "The logged-in surface: saved documents with their status and Word or PDF download, purchase receipts, profile settings, password change and account deletion. Keeping finished documents retrievable turns a one-off purchase into something a user can come back to when the same contract is needed again.",
    images: ["/img/process/contracable/3.webp"],
  },
];
