export type IgPost = {
  id: string;
  image: string;
  alt: string;
  caption: string;
  href: string;
  date: string;
  kind: "Spirit" | "Room" | "Event";
};

/**
 * Latest public posts from @milkstreetdistillery (verified; not @177milkstreet).
 * Images saved locally from the public profile on 22 Sep 2026.
 * Further pages of the feed returned HTTP 401, so this is the live grid, not the archive.
 */
export const instagramPosts: IgPost[] = [
  {
    id: "vexed-pour",
    image: "/media/ig/vexed-pour.jpg",
    alt: "A gin and tonic with lime, shot for the Vexed Gin post.",
    caption: "Vexed Gin",
    href: "https://www.instagram.com/reel/DdKjQZoiu--/",
    date: "Sep 11, 2026",
    kind: "Spirit",
  },
  {
    id: "dam-break-process",
    image: "/media/ig/dam-break-process.jpg",
    alt: "Close view of Dam Break Rye whiskey in the glass, from the process film.",
    caption: "Dam Break Rye",
    href: "https://www.instagram.com/reel/DY-F6jUjadR/",
    date: "May 30, 2026",
    kind: "Spirit",
  },
  {
    id: "vexed-award",
    image: "/media/ig/vexed-award.jpg",
    alt: "Vexed Gin bottle with juniper, celebrating a Double Platinum award.",
    caption: "Vexed Gin, Double Platinum at the ASCOT Awards.",
    href: "https://www.instagram.com/reel/DaoKVvkFbft/",
    date: "Jul 10, 2026",
    kind: "Spirit",
  },
  {
    id: "alco-hauler",
    image: "/media/ig/alco-hauler.jpg",
    alt: "The Alco-Hauler trailer introduced on Instagram.",
    caption: "Alco-Hauler",
    href: "https://www.instagram.com/reel/DbRHnVLDw2W/",
    date: "Jul 26, 2026",
    kind: "Room",
  },
  {
    id: "brandon-davis",
    image: "/media/ig/brandon-davis.jpg",
    alt: "Brandon Davis show poster with a drink in frame.",
    caption: "Brandon Davis, October 15",
    href: "https://www.instagram.com/reel/DdPXtEelmDL/",
    date: "Sep 13, 2026",
    kind: "Event",
  },
  {
    id: "cigars-blues",
    image: "/media/ig/cigars-blues.jpg",
    alt: "Poster for cigars, blues, tacos, and booze at the distillery.",
    caption: "Cigars, tacos, booze, and the Fabulous Rhythm Aces.",
    href: "https://www.instagram.com/p/DdcMvGWDz9i/",
    date: "Sep 18, 2026",
    kind: "Event",
  },
  {
    id: "harrisons-band",
    image: "/media/ig/harrisons-band.jpg",
    alt: "The Harrisons and Company, full band, posted by the distillery.",
    caption: "The Harrisons and Company",
    href: "https://www.instagram.com/p/DdXfJMHl_k3/",
    date: "Sep 16, 2026",
    kind: "Event",
  },
  {
    id: "chicken-bingo",
    image: "/media/ig/chicken-bingo.jpg",
    alt: "Chicken bingo card posted by Milk Street Distillery.",
    caption: "Chicken S#!t Bingo",
    href: "https://www.instagram.com/p/DdPI25SG9eV/",
    date: "Sep 13, 2026",
    kind: "Room",
  },
  {
    id: "southern-stew",
    image: "/media/ig/southern-stew.jpg",
    alt: "Southern Stew live-music poster from the distillery’s Instagram.",
    caption: "Southern Stew",
    href: "https://www.instagram.com/p/DdHzTe3m3iw/",
    date: "Sep 12, 2026",
    kind: "Event",
  },
];

export const profile = {
  handle: "@milkstreetdistillery",
  href: "https://www.instagram.com/milkstreetdistillery/",
  name: "Milk Street Distillery",
  bio: "Just a couple of M'Fers making ya'll some fine spirits.",
  followers: "4,125",
  external: "http://www.milkstreetdistillery.com/welcome",
  notThis: "@177milkstreet",
} as const;
