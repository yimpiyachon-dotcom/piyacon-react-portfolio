import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Field Research in Nakhon Phanom",
    body: "The research started in the field, with interviews in Na Wa sub-district of Nakhon Phanom. Two personas came out of it, each written up with a typical quote, behaviour, pain points, background and goals. A journey map then followed the season from preparing the land through planting and harvest to selling the crop, recording at each stage the actions, touchpoints, feelings, pain points and opportunities.",
    images: [
      "/img/process/kanna-app/01.webp",
    ],
  },
  {
    step: "02",
    title: "Design System Foundation",
    body: "One board sets the system: the mood and tone, the colour palette, type with Sarabun for Thai, two icon sets, buttons in full and half width with radio buttons, checkboxes, toggles and icon buttons, inputs from dropdowns and text fields to a one-time-code field and a date and time slider, the grid, the iOS system components, a set of weather icons, and the KANNA logo in its horizontal and vertical versions.",
    images: [
      "/img/process/kanna-app/02.webp",
    ],
  },
  {
    step: "03",
    title: "Welcome, Home and System States",
    body: "The welcome screen opens on the logo, and the home page leads with the local weather, then a row of shortcuts and the news and knowledge feeds. Every failure the app can meet was drawn as its own screen, not found, unauthorised, bad request, server error, request timeout and no internet, along with loading, a coming-soon page, a success message, and the home page as it appears before signing in.",
    images: [
      "/img/process/kanna-app/03.webp",
    ],
  },
  {
    step: "04",
    title: "Sign-Up by Phone Number",
    body: "Registration runs on a phone number with a one-time code, including the screen for a wrong code, beside buttons for signing in with another account. The privacy policy is read through to the end and accepted with a checkbox before the user goes on, and the profile step was drawn both with and without a photo.",
    images: [
      "/img/process/kanna-app/04.webp",
    ],
  },
  {
    step: "05",
    title: "Drawing a Plot on the Map",
    body: "The core task is drawing a plot on the satellite map: the user taps its corners, sees the length of each side and the area in rai, ngan and square wa, and saves it with a name and its coordinates. Around it sit the map tools, place search, entering a point by its x and y values, switching the map type and returning to the current location. A second method lays a photo of the land title deed over the map, with its transparency, size and rotation adjustable, so the boundary can be traced along the document. Each saved plot then shows its basic data and advice for that plot, and a denied location permission has its own screen.",
    images: [
      "/img/process/kanna-app/05.webp",
      "/img/process/kanna-app/06.webp",
      "/img/process/kanna-app/14.webp",
    ],
  },
  {
    step: "06",
    title: "Weather Forecast",
    body: "Weather has its own icon set for day and night conditions and an air-quality scale, and the forecast was drawn for the home page, for each plot and by the hour. Notes on the board set what moves to the top as the forecast days run out, and there are screens for missing data and for location turned off.",
    images: [
      "/img/process/kanna-app/08.webp",
    ],
  },
  {
    step: "07",
    title: "Notifications",
    body: "Notifications were designed both outside the app, as iOS push messages, and inside it as a list with read and unread states, where each item opens the record it refers to. The empty list has its own illustration.",
    images: [
      "/img/process/kanna-app/07.webp",
    ],
  },
  {
    step: "08",
    title: "Projects and Plot Verification",
    body: "Farmers join a project by accepting its terms and choosing which of their plots to enrol, and can leave it after confirming; someone with no plot yet is asked to add one first. Each enrolled plot shows its status in the project, and verifying a plot is a stepped form that takes the ID card, the type of land document and photos of it.",
    images: [
      "/img/process/kanna-app/09.webp",
      "/img/process/kanna-app/10.webp",
    ],
  },
  {
    step: "09",
    title: "Activities and Location-Stamped Photos",
    body: "Cultivation activities are recorded against a plot, a flow worked out first in hand sketches and a flow diagram. The camera stamps each photo with the plot ID, latitude and longitude, x and y coordinates and the time, asks before saving, and shares through the iOS and Android share sheets, with the location and photo permission requests designed alongside.",
    images: [
      "/img/process/kanna-app/11.webp",
      "/img/process/kanna-app/17.webp",
    ],
  },
  {
    step: "10",
    title: "Trees, Carbon and Land Cover",
    body: "Trees planted on a plot are recorded with a photo and pinned on the map, and the plot shows the carbon they account for. A share card turns the tree count and the carbon figure into an image with a QR code that leads to the app. Land cover inside a plot, such as buildings, is drawn as areas of its own, in two scenarios depending on when it is added.",
    images: [
      "/img/process/kanna-app/13.webp",
      "/img/process/kanna-app/12.webp",
      "/img/process/kanna-app/16.webp",
    ],
  },
  {
    step: "11",
    title: "Unit Conversion",
    body: "A calculator menu converts area and length between units, including Thai units such as the wa, and shows an error when the value or the unit is missing.",
    images: [
      "/img/process/kanna-app/15.webp",
    ],
  },
  {
    step: "12",
    title: "Back-Office CMS",
    body: "Behind the app, the web CMS lets the agricultural team open each project and work through two tables, plot data waiting for approval and recorded cultivation activities, each with counts by status and filters by province, district, sub-district, date and status.",
    images: [
      "/img/process/kanna-app/18.webp",
    ],
  },
  {
    step: "13",
    title: "Launch",
    body: "The app was released on the App Store and Google Play as KANNA by varuna, with store graphics walking through the home page, drawing a plot to find its area and coordinates, the list of saved plots and each plot's data.",
    images: [
      "/img/process/kanna-app/19.webp",
      "/img/process/kanna-app/20.webp",
    ],
  },
];
