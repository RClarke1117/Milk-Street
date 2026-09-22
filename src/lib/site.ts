export const site = {
  name: "Milk Street Distillery",
  short: "Milk Street",
  tagline: "Grain to glass, on Milk Street.",
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
  { href: "/the-make", label: "The Make" },
  { href: "/spirits", label: "Spirits" },
  { href: "/menu", label: "Menu" },
  { href: "/tours", label: "Tours" },
  { href: "/events", label: "Events" },
  { href: "/visit", label: "Visit" },
] as const;

export const hours = [
  {
    days: "Monday – Thursday",
    room: "Closed",
    note: "Bottle and gift-card pickup only, 12–6. Email ahead so someone is in. No tasting room, no tours.",
  },
  {
    days: "Friday",
    room: "4–10 PM",
    note: "Pickup 12–6. Tasting room and walk-in tours from 4.",
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
