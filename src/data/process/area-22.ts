import type { ProcessStep } from '../processSteps';

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirements and User Roles",
    body: "The brief was a management system for a building of rented offices, connected to its hardware: the screen in the common area, face scan, CCTV, the car barrier, and the electricity and water meters. It had to log who came and went and whether each person was staff or a guest, keep track of the companies and employees in the building, manage the shared meeting and fitness rooms, and let tenants report problems to the in-house technicians. The requirements board splits the platform between three roles: the front-desk admin, the technician, who sees only job tickets, and the building owner, who also sees the usage summaries used to bill tenants for electricity, water and the shared rooms.",
    images: [
      "/img/process/area-22/01.webp",
      "/img/process/area-22/02.webp",
    ],
  },
  {
    step: "02",
    title: "Information Architecture",
    body: "The structure follows what those roles do. Dashboard holds electricity, water, operator, event and security monitoring. Manage holds visitors, meeting rooms, admins with their permissions, and companies with their employees and access. Technician Service holds maintenance requests and job tickets, Time Log holds vehicle and visitor entry and exit with a CSV export, and CCTV holds the live view, playback, event detection and face recognition.",
    images: [
      "/img/process/area-22/03.webp",
    ],
  },
  {
    step: "03",
    title: "Design System Foundation",
    body: "The component base is Chakra UI, with its forms, alerts and toasts set out on the board beside the colour and type styles, a Chart.js chart set drawn in light and dark versions, and the Iconsax icon set. A back office repeats the same tables, forms and messages all day, so these were settled before the screens.",
    images: [
      "/img/process/area-22/04.webp",
    ],
  },
  {
    step: "04",
    title: "Meeting Room Signage",
    body: "Beyond the back office, each meeting room has a portrait screen by its door showing the room type, capacity and floor, the day's bookings with each tenant's logo, whether the room is free now, and how many sessions remain. The board takes the design from an empty day to a full one, beside a photo of the screen installed at the fitness room.",
    images: [
      "/img/process/area-22/05.webp",
    ],
  },
  {
    step: "05",
    title: "Sign-In and Password Recovery",
    body: "Sign-in is drawn as a flow with its checks: wrong details return to the form with an error, and a successful sign-in opens the platform with a confirmation message. Password recovery runs from the request and its confirmation through the email link and the new-password screen, and lands the user on the dashboard.",
    images: [
      "/img/process/area-22/06.webp",
    ],
  },
  {
    step: "06",
    title: "Visitor and Company Management",
    body: "Visitors and company staff are added through the same form, with a photo taken on the camera or uploaded from a file, and edited or deleted from their lists. Each list has an empty state, deletion asks for confirmation first, and every action ends in a success or an error message. Company management places the company profile above its list of employees.",
    images: [
      "/img/process/area-22/07.webp",
      "/img/process/area-22/09.webp",
    ],
  },
  {
    step: "07",
    title: "Room Booking, Job Tickets and Time Logs",
    body: "Meeting-room booking offers month, week, day and agenda views, checks the slot before confirming, and reports success or failure either way. On a job ticket, a technician accepts the job and updates its progress, anyone who did not accept it sees a separate view, and an admin can delete a ticket after confirming. The time logs list vehicles by licence-plate photo and visitors by name, type and purpose of visit, with the times in and out, a CSV download and an empty state.",
    images: [
      "/img/process/area-22/08.webp",
      "/img/process/area-22/10.webp",
      "/img/process/area-22/11.webp",
    ],
  },
  {
    step: "08",
    title: "CCTV by Location",
    body: "CCTV lists the cameras by location, from each floor to the elevator, the rooftop and the car park, beside a live view. A floor with no camera attached yet has its own empty state rather than a blank frame.",
    images: [
      "/img/process/area-22/12.webp",
    ],
  },
  {
    step: "09",
    title: "Dashboards and Date Ranges",
    body: "The dashboards cover electricity, water, the operator view with live visitor and car counts, events with meeting summaries and room usage, and technician service with job status, each with a CSV download. On the electricity dashboard the range runs from a single day up to the last year or a custom period, with the bars grouped more coarsely as the range grows, and total usage can be filtered by floor.",
    images: [
      "/img/process/area-22/13.webp",
      "/img/process/area-22/14.webp",
      "/img/process/area-22/15.webp",
    ],
  },
];
