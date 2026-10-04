import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Public Site: Find the Right Template",
    body: "The home page leads with a document search instead of a pitch, then explains how the product works in three short steps, splits the template catalogue into business and personal, and ends on an FAQ and an article index. Grouping templates by the user's situation rather than by legal category is the match between system and the real world the rest of the flow depends on: a visitor knows they are hiring, renting or lending, not which contract type that needs. The whole interface is Thai, so the type scale was set against dense Thai body copy from the start.",
    images: [
      "/img/process/contracable/1.webp",
    ],
  },
  {
    step: "02",
    title: "Fill Flow: The Document Writes Itself",
    body: "Each template page first says what the document is, when it was last revised, its format and length, and the three steps ahead, so the user knows the size of the task before starting. The fill screen then puts one guided question at a time on the left and the live document on the right, with a progress bar above the questions. Seeing each answer land in the clause as it is typed is visibility of system status at its most literal: a non-lawyer can check the output instead of trusting it.",
    images: [
      "/img/process/contracable/2.webp",
    ],
  },
  {
    step: "03",
    title: "Member Area: Documents and Account in the User's Hands",
    body: "The signed-in area keeps every saved document with its status and a Word or PDF download, the purchase receipts, profile settings, password change and account deletion. Deletion asks for confirmation before it runs. Putting finished documents and the account itself under the user's control is user control and freedom, and it means a contract needed again can be fetched rather than filled in from scratch.",
    images: [
      "/img/process/contracable/3.webp",
    ],
  },
];
