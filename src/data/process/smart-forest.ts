import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Process and Design Thinking Model",
    body: "The first boards set out how the work would run. The team process goes from product-market fit and requirements through research, wireframes reviewed with the CEO and the developers, the interface with its negative cases, usability testing, handover and launch, and then back into analytics, satisfaction scores and further testing. Each feature followed the same short chain: a user story written as who, what they need and why, a user flow, the screens, the design with its negative cases, and a Jira task.",
    images: [
      "/img/process/smart-forest/01.webp",
      "/img/process/smart-forest/02.webp",
      "/img/process/smart-forest/03.webp",
    ],
  },
  {
    step: "02",
    title: "Product Ecosystem Mapping",
    body: "Smart Forest is one of several connected products, so the ecosystem was mapped first. Villagers report through Smart Watcher online, and field survey staff report offline from the grid areas assigned to them; those reports reach the Smart Watcher back office and are sent on to Smart Forest. Inside Smart Forest, the organisation team works as staff, admin and super admin, and the platform is linked to Forest of Tomorrow, the marketplace for carbon credits. Knowing what each product hands to the next decided what Smart Forest had to show.",
    images: [
      "/img/process/smart-forest/04.webp",
    ],
  },
  {
    step: "03",
    title: "Competitive and Portfolio Analysis",
    body: "The company's own product line and an established set of remote-sensing services were laid side by side. A SWOT summarised the position, and a feature table checked each capability of the other product family, from carbon assessment and crop monitoring to flood detection and drone surveys, against whether Smart Forest already offered it as an analytic feature, had it in development, or would need machine learning to build it.",
    images: [
      "/img/process/smart-forest/38.webp",
      "/img/process/smart-forest/39.webp",
      "/img/process/smart-forest/40.webp",
      "/img/process/smart-forest/41.webp",
    ],
  },
  {
    step: "04",
    title: "Personas and Customer Journey",
    body: "Two personas came out of the research. The first is a technical government officer in Bangkok who monitors planted areas and reports upward, and needs current data, an overview dashboard and reports. The second is a less technical officer in Laos who has to travel into the forest to assess an area and has no tool for it. A customer journey map then followed the technical profile through action, monitoring, reporting and resolution, recording long journeys to hard-to-reach plots and manual reports as pain points, and a dashboard, automatic reports, email alerts and satellite information as opportunities.",
    images: [
      "/img/process/smart-forest/05.webp",
      "/img/process/smart-forest/06.webp",
    ],
  },
  {
    step: "05",
    title: "Core Problem Statement",
    body: "The research was reduced to one question: how might we help forest officers understand forest conditions quickly and make decisions without needing expertise in GIS or satellite analysis? Three insights sit under it, users switching between several systems, GIS being complex, and areas too large to survey on foot, each paired with a design opportunity: one dashboard for the data, simpler data visualisation, and satellite analytics to show where to look first. The UX goals followed: understand forest status within minutes, reduce analysis complexity, and support faster decisions.",
    images: [
      "/img/process/smart-forest/07.webp",
    ],
  },
  {
    step: "06",
    title: "Language Survey and Data-Layer Workshop",
    body: "A survey asked the team and the CEO, separately, how Smart Forest should speak and which words should describe it, and settled on five keywords: reliable, luxurious, smart, convenient and bold. A workshop then had stakeholders write and vote on a plain-language explanation for every data layer, from biomass and NDVI to hotspots, elevation and villages. Open questions on the multiple-shapefile selector and an analytics and Hotjar session for the team complete the set.",
    images: [
      "/img/process/smart-forest/08.webp",
      "/img/process/smart-forest/09.webp",
      "/img/process/smart-forest/35.webp",
      "/img/process/smart-forest/36.webp",
      "/img/process/smart-forest/37.webp",
    ],
  },
  {
    step: "07",
    title: "Information Architecture",
    body: "The platform was broken into modules: analytic and monitoring with its map data layers, area drawing, route access, notification, report, search, user management, files and project management, and the Smart Watcher link. A second board maps every module to the customer group it serves, prevention and deforestation for the national parks department, area assessment for PTTEP and IRCP, and carbon credit for Thailand Post, MFL and Betrago, so the priority of each feature could be argued from who needs it.",
    images: [
      "/img/process/smart-forest/10.webp",
      "/img/process/smart-forest/11.webp",
    ],
  },
  {
    step: "08",
    title: "Ideation and Wireframes",
    body: "The hardest structural question was how a shapefile appears on the map: as the original polygon, or as the master grid used for analysis, and what changes when one file or several are selected. It was worked out in sketches and then in a set of use-case frames for both cases. Grey-scale wireframes followed for the analytic views, NDVI, CO2 sequestration, above-ground biomass and forest change, each drawn with its date picker, chart, information tooltip and empty state.",
    images: [
      "/img/process/smart-forest/12.webp",
      "/img/process/smart-forest/13.webp",
      "/img/process/smart-forest/14.webp",
    ],
  },
  {
    step: "09",
    title: "Design System and Chart Library",
    body: "The system is structured as one core theme, colour, type, grid, spacing, icons, shadow, radius and motion, shared by every product the company runs, with each product overriding only its colour, radius and font family. Smart Forest's components live in BaseBlocksUI, built on the Ant Design kit for Figma, with every button variant drawn in each of its states. A separate chart library sets the chart styles, and a states board gives every data layer an empty, loading, data and error state.",
    images: [
      "/img/process/smart-forest/15.webp",
      "/img/process/smart-forest/16.webp",
      "/img/process/smart-forest/17.webp",
      "/img/process/smart-forest/18.webp",
    ],
  },
  {
    step: "10",
    title: "Final Interface",
    body: "The finished screens were marked ready for development page by page. Monitoring groups the map layers into biosphere, atmosphere, land cover, risk and vulnerability, and socioeconomics, and every layer carries a short explanation and a legend. The analytic pages give each metric its own view, with above-ground biomass shown from the model or from sampling plots and a defined state for incomplete data. Around them sit shapefile upload, edit and delete with a progress summary, a one-page area summary with its no-data states, and email alerts for hotspots, deforestation and forest change, including the email sent when nothing was detected.",
    images: [
      "/img/process/smart-forest/19.webp",
      "/img/process/smart-forest/20.webp",
      "/img/process/smart-forest/21.webp",
      "/img/process/smart-forest/22.webp",
      "/img/process/smart-forest/23.webp",
      "/img/process/smart-forest/24.webp",
      "/img/process/smart-forest/25.webp",
      "/img/process/smart-forest/26.webp",
    ],
  },
  {
    step: "11",
    title: "Screen Flow and Interactive Prototype",
    body: "All sections were laid out on one screen-flow map, from monitoring and analytics to user management and the project area with its documents and villages, so the navigation between them could be checked as a whole. The main paths were then wired into clickable prototypes: hotspots in split view, NDVI analysis, and uploading a shapefile to create a site.",
    images: [
      "/img/process/smart-forest/29.webp",
      "/img/process/smart-forest/28.webp",
    ],
  },
  {
    step: "12",
    title: "Design Spec and Developer Handoff",
    body: "Components were specified with numbered anatomy callouts, the properties of every layer, and a layout and spacing view for the selected node, as in the plantation information panel and the planting progress chart. The spec gives developers the measurements and properties directly instead of leaving them to read them off the design.",
    images: [
      "/img/process/smart-forest/27.webp",
    ],
  },
  {
    step: "13",
    title: "Usability Testing",
    body: "Testing was planned as a flow, from objectives and participant selection to retesting after changes and handover. The biomass test asked participants to fill in a project design document and then read the carbon figures on the biomass page. The first task averaged about four minutes with a 90.6% misclick rate, and the heatmaps showed most participants starting from Create Project rather than the profile button that held the form. The proposed fixes were to let the document be filled in from Create Project, to label the menu in words, and to bring the entry out of the menu. The second task reached 100% success with no drop-off but a 78.4% misclick rate.",
    images: [
      "/img/process/smart-forest/30.webp",
      "/img/process/smart-forest/31.webp",
      "/img/process/smart-forest/32.webp",
      "/img/process/smart-forest/33.webp",
      "/img/process/smart-forest/34.webp",
    ],
  },
  {
    step: "14",
    title: "Feedback and Product Direction",
    body: "After release, a dashboard feedback survey had stakeholders rate and comment on each section of the dashboard, and each comment was mapped to a customer need and a pain point. A feedback board for Smart Forest and Smart Watcher sorted every item into pain point, requirement or user feedback and tagged it as a new feature or an improvement. A product direction board for the next version then grouped the work into what to keep from the first version, what needs improving and what is new.",
    images: [
      "/img/process/smart-forest/42.webp",
      "/img/process/smart-forest/43.webp",
      "/img/process/smart-forest/44.webp",
      "/img/process/smart-forest/46.webp",
    ],
  },
];
