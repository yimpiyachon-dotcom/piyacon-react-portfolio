import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Design Thinking & Process Framing",
    body: "Framed the engagement around a reporting problem rather than a dashboard request. Satellite monitoring already covered the forest areas, so the design question was how a person standing in the plot could record what they were seeing in a form the monitoring side could actually use.",
    images: [
      "/img/process/smart-watcher/01.webp",
      "/img/process/smart-watcher/02.webp",
    ],
  },
  {
    step: "02",
    title: "Product Ecosystem Mapping",
    body: "Mapped how the reporting app sits alongside Smart Forest, the organisations whose plots are being reported on, and the administrators who review what comes in. Making these relationships explicit clarified which information had to travel with every report for it to be worth anything downstream.",
    images: [
      "/img/process/smart-watcher/03.webp",
    ],
  },
  {
    step: "03",
    title: "Personas & Field Roles",
    body: "Defined two government-official profiles with very different conditions. One is a technical high user based in Bangkok who monitors plots and reports upward to management, and needs an overview and a dashboard. The other is a low-technology user in Laos who has to walk into the area itself to assess it and had no tool supporting that trip. Both name forest encroachment and burning as the problems they are watching for.",
    images: [
      "/img/process/smart-watcher/04.webp",
    ],
  },
  {
    step: "04",
    title: "User Flow Architecture",
    body: "Structured the flows around the report lifecycle for both roles. A field user scans a QR code, picks a report type, fills in the incident and its location, and gets a status back; an administrator receives an email notification and works through report management, status checks and an overall dashboard. Anchoring navigation to that sequence kept both sides looking at the same object.",
    images: [
      "/img/process/smart-watcher/05.webp",
    ],
  },
  {
    step: "05",
    title: "Design System & Token Architecture",
    body: "Built the component system on semantic tokens so status, report type and urgency read consistently across every surface. Consistency matters here because the same report is read on a phone in the field and in a back-office review screen, and the two have to agree at a glance.",
    images: [
      "/img/process/smart-watcher/06.webp",
      "/img/process/smart-watcher/07.webp",
      "/img/process/smart-watcher/08.webp",
    ],
  },
  {
    step: "06",
    title: "Chart Library & Data Visualisation",
    body: "Adopted a documented Figma chart library as the data-visualisation layer rather than drawing charts by hand, and set its colour, typography and customisation rules against the system tokens. That kept the analytics views consistent with the rest of the product and gave engineering a chart vocabulary that already existed in code.",
    images: [
      "/img/process/smart-watcher/09.webp",
    ],
  },
  {
    step: "07",
    title: "Wireframing",
    body: "Worked through the report layout in low fidelity: reporter identity, evidence photos, the issue type, an urgency tag, the description, and how far the viewer is from the reported point. Testing the order in wireframe settled what a reviewer needs to see before scrolling and what can wait.",
    images: [
      "/img/process/smart-watcher/10.webp",
    ],
  },
  {
    step: "08",
    title: "UI Design",
    body: "Resolved the wireframes into the production interface — a mobile reporting flow from QR sign-in through photo, location, date and submission, paired with the web side where submitted reports appear on a map with their supporting detail.",
    images: [
      "/img/process/smart-watcher/11.webp",
    ],
  },
  {
    step: "09",
    title: "Report Types & Edge-Case States",
    body: "Designed the report types the platform supports, including plot acceptance and tree profile, each with its own step sequence, bulk-upload path and detail form. Alongside them sit the states that decide whether a report can be filed at all: no organisation behind the scanned code, location permission denied, a page the account is not allowed to open, camera versus photo-library upload, and logged out.",
    images: [
      "/img/process/smart-watcher/12.webp",
      "/img/process/smart-watcher/13.webp",
      "/img/process/smart-watcher/14.webp",
      "/img/process/smart-watcher/15.webp",
      "/img/process/smart-watcher/16.webp",
    ],
  },
  {
    step: "10",
    title: "Design Spec & Developer Handoff",
    body: "Documented components with edge-case states, token references and behavioural notes — including what the interface does when location is unavailable, a photo cannot be attached, or a scanned code resolves to nothing. A report that fails silently in the field is a report that never reaches the monitoring side.",
    images: [
      "/img/process/smart-watcher/17.webp",
    ],
  },
  {
    step: "11",
    title: "Screen Flow & Interactive Prototype",
    body: "Assembled the full screen flow and a clickable prototype so both the field and administrator paths could be walked end-to-end. Seeing report entry as a continuous path exposed transitions that felt correct in isolation but broke the flow of someone filling this in outdoors.",
    images: [
      "/img/process/smart-watcher/18.webp",
      "/img/process/smart-watcher/19.webp",
    ],
  },
  {
    step: "12",
    title: "Usability Testing",
    body: "Ran moderated task-completion sessions against the prototype. Watching people work through the report flow, rather than collecting preferences, isolated the friction worth fixing before engineering built against the spec.",
    images: [
      "/img/process/smart-watcher/20.webp",
      "/img/process/smart-watcher/21.webp",
    ],
  },
  {
    step: "13",
    title: "Test Scripts & Measured Results",
    body: "Each task was written as a numbered script with an explicit objective before anyone was put in front of the prototype — QR-code sign-in, then the two report-entry flows for a Dry Evergreen forest sub-plot. Running them through Maze returned success rate, drop-off, misclick rate and time on task per script instead of impressions: script 1 came back at 100% success and 0% drop-off but a 17.4% misclick rate, which pointed at target sizing rather than comprehension. The open question at the end of each script is where the qualitative signal came from.",
    images: [
      "/img/process/smart-watcher/22.webp",
      "/img/process/smart-watcher/23.webp",
      "/img/process/smart-watcher/24.webp",
      "/img/process/smart-watcher/25.webp",
      "/img/process/smart-watcher/26.webp",
      "/img/process/smart-watcher/27.webp",
      "/img/process/smart-watcher/28.webp",
    ],
  },
  {
    step: "14",
    title: "Gathering Feedback & Synthesis",
    body: "Testing output and stakeholder comments were consolidated onto one board split into pain point, requirement and user feedback, with every proposed change tagged as a new feature or an improvement. Separating what users struggled with from what they asked for is what kept the backlog honest — a request only became scope when a pain point stood behind it.",
    images: [
      "/img/process/smart-watcher/29.webp",
    ],
  },
];
