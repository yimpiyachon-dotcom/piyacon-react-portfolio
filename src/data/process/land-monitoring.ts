import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Brand & Landing Page Design",
    body: "Designed the VLM marketing surface that has to explain a geospatial carbon product to buyers who are not GIS specialists. Satellite imagery and 3D data-layer illustrations were used to make an abstract remote-sensing capability legible before a prospect ever sees the platform.",
    images: [
      "/img/process/land-monitoring/01.webp",
    ],
  },
  {
    step: "02",
    title: "Authentication & Account Flows",
    body: "Built the full account lifecycle — register, email verification, log in, forgot password and profile — including the error and expired-link states. For a platform holding regulated carbon data, a clear account boundary is part of the product's credibility, not just plumbing.",
    images: [
      "/img/process/land-monitoring/02.webp",
    ],
  },
  {
    step: "03",
    title: "Analytical Dashboard Design",
    body: "Designed the per-plot analysis view where biomass, carbon sequestration, NDVI, precipitation, solar radiation, temperature and elevation each get a dedicated read. Every metric needed its own chart treatment — a bar comparison, a time series, or a colour-ramped map — rather than forcing one visual language onto different data shapes.",
    images: [
      "/img/process/land-monitoring/03.webp",
    ],
  },
  {
    step: "04",
    title: "Geospatial Layer System",
    body: "Built the full map-layer feature set: switching between biomass, NDVI, temperature, precipitation, hot spot and elevation overlays on one continuous map. The design problem was keeping the base map readable while a colour-ramped raster sits on top of it.",
    images: [
      "/img/process/land-monitoring/04.webp",
    ],
  },
  {
    step: "05",
    title: "Project & Plot Management",
    body: "Designed the multi-project workspace where users filter between farms, inspect plot boundaries against high-resolution imagery, and read the area breakdown table alongside the map. The linked mini-map keeps regional context while the main view is zoomed into a single parcel.",
    images: [
      "/img/process/land-monitoring/05.webp",
      "/img/process/land-monitoring/07.webp",
    ],
  },
  {
    step: "06",
    title: "Hot Spot Detection & Zoom Behaviour",
    body: "Specified marker clustering across six zoom levels so hot spot density stays interpretable from national view down to a single district. Without a defined clustering rule, fire and anomaly markers collapse into an unreadable mass at country scale.",
    images: [
      "/img/process/land-monitoring/06.webp",
      "/img/process/land-monitoring/08.webp",
    ],
  },
  {
    step: "07",
    title: "Provincial Reporting & Summary Views",
    body: "Designed the choropleth reporting layer with province-level breakdowns and proportional summaries. These are the screens that get exported into carbon reporting, so the table and chart had to stay legible outside the interface.",
    images: [
      "/img/process/land-monitoring/09.webp",
    ],
  },
];
