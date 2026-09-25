export const site = {
  name: "Milk Street Distillery",
  short: "Milk Street",
  tagline: "We are a true grain to glass distillery, as everything is mashed, fermented, distilled and bottled on site.",
  established: "2017",
  address: {
    line1: "1 Milk Street, Building 1",
    city: "Branchville",
    region: "NJ",
    postal: "07826",
    full: "1 Milk Street, Building 1, Branchville, NJ 07826",
  },
  phone: "(973) 948-0178",
  phoneHref: "tel:+19739480178",
  email: "drunk@milkstreetdistillery.com",
  emailHref: "mailto:drunk@milkstreetdistillery.com",
  instagram: "https://www.instagram.com/milkstreetdistillery/",
  instagramHandle: "@milkstreetdistillery",
  facebook: "https://www.facebook.com/milkstreetdistillery/",
  maps: "https://www.google.com/maps/dir/?api=1&destination=1+Milk+Street+Building+1+Branchville+NJ+07826",
  mapEmbed:
    "https://maps.google.com/maps?q=1%20Milk%20Street%20Building%201%20Branchville%20NJ%2007826&z=16&output=embed",
  legacy: "https://www.milkstreetdistillery.com/welcome",
} as const;

export const nav = [
  { href: "/the-make", label: "Distillery" },
  { href: "/spirits", label: "Spirits" },
  { href: "/menu", label: "Menu" },
  { href: "/tours", label: "Tours" },
  { href: "/events", label: "Events" },
  { href: "/alco-hauler", label: "Alco-Hauler" },
  { href: "/visit", label: "Visit" },
] as const;

export const hours = [
  {
    days: "Monday – Thursday",
    room: "Pickup 12–6",
    note: "Bottle and gift-card pickup only, 12–6. Please email to verify that we are in. Not open for the tasting room or tours.",
  },
  {
    days: "Friday",
    room: "Pickup 12–6 · 4–10 PM",
    note: "Pickup 12–6. Tasting room 4–10. Tours every half hour.",
  },
  {
    days: "Saturday",
    room: "1–10 PM",
    note: "Tasting room. Tours on the half hour.",
  },
  {
    days: "Sunday",
    room: "1–6 PM",
    note: "Tasting room. Tours on the half hour.",
  },
] as const;
