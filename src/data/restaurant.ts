export const restaurant = {
  name: "Mitchell's Restaurant & Pizzeria",
  shortName: "Mitchell's",
  // Canonical origin. Swap to the custom domain once one is registered —
  // metadataBase, the sitemap and the JSON-LD all read from here.
  siteUrl: "https://mitchells-website.vercel.app",
  address: "3553 Trading Post Rd, Huddleston, VA 24104",
  addressShort: "3553 Trading Post Rd, Huddleston, VA",
  streetAddress: "3553 Trading Post Rd",
  city: "Huddleston",
  region: "VA",
  postalCode: "24104",
  phoneDisplay: "(540) 296-0664",
  phoneHref: "tel:+15402960664",
  facebookHandle: "@meetmeatmitchells",
  facebookUrl: "https://www.facebook.com/meetmeatmitchells/",
  orderOnlineUrl:
    "https://www.toasttab.com/local/order/mitchells-restaurant-lakeside-pizzeria-3553-trading-post-rd/r-282fad48-ce33-4214-b3ff-2e254166a626",
  mapsUrl:
    "https://maps.google.com/?q=3553+Trading+Post+Rd,+Huddleston,+VA+24104",
  hours: [
    { days: "Monday – Thursday", time: "11:00am – 9:00pm" },
    { days: "Friday", time: "11:00am – 10:00pm" },
    { days: "Saturday", time: "8:00am – 9:00pm" },
    { days: "Sunday", time: "8:00am – 8:00pm" },
  ],
  hoursShort: "Mon–Thu 11–9 · Fri 11–10 · Sat 8–9 · Sun 8–8",
  // Machine-readable mirror of `hours`, for schema.org openingHoursSpecification.
  // Keep the two in sync — same source (verified 2026-07-12), different consumers.
  hoursSpec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "21:00",
    },
    { days: ["Friday"], opens: "11:00", closes: "22:00" },
    { days: ["Saturday"], opens: "08:00", closes: "21:00" },
    { days: ["Sunday"], opens: "08:00", closes: "20:00" },
  ],
} as const;

export type Performer = { name: string; photo?: string; photoAlt?: string };

export const performers: Performer[] = [
  {
    name: "JD Ross",
    photo: "/images/band-jd-ross.jpg",
    photoAlt: "JD Ross playing acoustic guitar",
  },
  {
    name: "Annalyse Marie",
    photo: "/images/band-annalyse-marie.jpg",
    photoAlt: "Annalyse Marie at sunset",
  },
  { name: "The Dock Wizards" },
  { name: "Tate Tuck" },
  { name: "Doug & Robin T. Settles" },
];
