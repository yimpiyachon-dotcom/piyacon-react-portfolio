/**
 * Employment history, shown twice: as a vertical list on the About page and as
 * an auto-scrolling card rail on the home page. One array so the two can never
 * drift apart.
 */
export type CareerEntry = {
  company: string;
  logo: string;
  role: string;
  period: string;
  desc: string;
};

export const career: CareerEntry[] = [
  {
    company: "VARUNA CO., LTD. (ARV / PTTEP)",
    logo: "/img/logos/varuna.webp",
    role: "Middle UX/UI Designer",
    period: "Oct 2024 – Present",
    desc: "Leading UX/UI for Smart Forest carbon GIS analytics, Smart Watcher security SOC platform, and Forest of Tomorrow ecosystem.",
  },
  {
    company: "BEURDEV CO., LTD.",
    logo: "/img/logos/beyourdev.webp",
    role: "Lead UX/UI Designer",
    period: "Feb 2024 – Oct 2024",
    desc: "Delivered 40+ digital marketing web portals, high-conversion real estate showcases, and TH Health appointment systems.",
  },
  {
    company: "HAPPY THREE CREATION CO., LTD.",
    logo: "/img/logos/happy-three-creation.webp",
    role: "Senior UX/UI Designer",
    period: "Aug 2023 – Feb 2024",
    desc: "Designed Area 22 IoT gateway management back office (400+ nodes) and Dr. Smoothlife clinical telemedicine workspace.",
  },
  {
    company: "VARUNA CO., LTD. (ARV / PTTEP)",
    logo: "/img/logos/varuna.webp",
    role: "UX/UI Designer",
    period: "June 2022 – Aug 2023",
    desc: "Designed Kanna agricultural diagnostic mobile app (15,000+ farmers) and VLM land management administrative tools.",
  },
  {
    company: "ALL ABOUT YOU CO., LTD.",
    logo: "/img/logos/all-about-you.webp",
    role: "UX/UI Designer",
    period: "March 2021 – June 2022",
    desc: "Designed clean beauty e-commerce storefront, streamlining checkout and reducing shopping cart abandonment by 44%.",
  },
];
