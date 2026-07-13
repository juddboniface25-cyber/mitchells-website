export const restaurant = {
  name: "Mitchell's Restaurant & Pizzeria",
  shortName: "Mitchell's",
  address: "3553 Trading Post Rd, Huddleston, VA 24104",
  addressShort: "3553 Trading Post Rd, Huddleston, VA",
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
} as const;

export const performers = [
  "The Dock Wizards",
  "JD Ross",
  "Tate Tuck",
  "Annalyse Marie",
  "Doug & Robin T. Settles",
] as const;
