export type Spirit = {
  slug: string;
  name: string;
  family: "Whiskey" | "Gin" | "Vodka" | "Rum";
  proof?: string;
  image: string;
  imageAlt: string;
  lede: string;
  mash?: string;
  palate: string;
  /** Printed on that bottle’s page at milkstreetdistillery.com, checked 22 Sep 2026. */
  award?: string;
};

export const spirits: Spirit[] = [
  {
    slug: "murder-bourbon",
    name: "Murder Bourbon",
    family: "Whiskey",
    proof: "100",
    image: "/media/spirits/murder.jpg",
    imageAlt: "Murder Bourbon bottle lying in a wooden barrel of charred oak.",
    lede: "Corn, rye, and barley. Aged in new white American oak. 100 proof.",
    mash: "Corn, rye, and barley",
    palate: "Butter, brown sugar, and caramel",
  },
  {
    slug: "war-penny",
    name: "War Penny",
    family: "Whiskey",
    image: "/media/spirits/war-penny.jpg",
    imageAlt: "War Penny bottle on black, black wax with a coin pressed into the seal.",
    lede: "Corn and rye. A portion of the grain is smoked on cherry wood for 36 hours, aged in new white American oak, then finished in beer barrels from local breweries.",
    mash: "Corn and rye, part smoked on cherry wood for 36 hours",
    palate: "Subtle smoke, and the beer barrel it was finished in",
  },
  {
    slug: "dam-break-rye",
    name: "Dam Break Rye",
    family: "Whiskey",
    proof: "90",
    image: "/media/spirits/dam-break.jpg",
    imageAlt: "Dam Break Rye bottle and its illustrated label.",
    lede: "90 proof.",
    mash: "Rye",
    palate: "Caramel, vanilla, honey, and a peppery rye finish",
  },
  {
    slug: "mcnallys",
    name: "McNally’s Irish Style Whiskey",
    family: "Whiskey",
    proof: "90",
    image: "/media/spirits/mcnally.jpg",
    imageAlt: "McNally’s bottle standing in a green field.",
    lede: "Irish-style whiskey, aged in seasoned bourbon barrels. 90 proof.",
    palate: "Vanilla, caramel, and dried fruit",
  },
  {
    slug: "devils-bark",
    name: "The Devil’s Bark",
    family: "Whiskey",
    image: "/media/spirits/devils-bark.jpg",
    imageAlt: "The Devil’s Bark bottle against a deep red ground.",
    lede: "Birch, cinnamon, and whiskey.",
    palate: "Birch, cinnamon, and whiskey",
  },
  {
    slug: "vexed-gin",
    name: "Vexed Gin",
    family: "Gin",
    image: "/media/spirits/vexed.jpg",
    imageAlt: "Vexed Gin bottle set against open water.",
    lede: "A corn-base gin.",
    mash: "Corn",
    palate: "Juniper, coriander, cardamom, sarsaparilla, angelica, lemon, orange, grapefruit, and lavender",
  },
  {
    slug: "blind-bettie",
    name: "Blind Bettie Gin",
    family: "Gin",
    image: "/media/spirits/blind-bettie.jpg",
    imageAlt: "Blind Bettie Gin in a garden with cucumber on the label.",
    lede: "Cucumber, lemon, honey, cranberry, and juniper.",
    palate: "Cucumber, lemon, honey, cranberry, and juniper",
  },
  {
    slug: "kanpeki",
    name: "Kanpeki Rice Vodka",
    family: "Vodka",
    image: "/media/spirits/kanpeki.jpg",
    imageAlt: "Kanpeki rice vodka bottle.",
    lede: "Polished white rice. Double distilled, then double filtered through carbon. Kanpeki is the Japanese word for perfection.",
    mash: "Polished white rice",
    palate: "Clean, smooth, and soft",
    award: "92 points from Wine Enthusiast",
  },
  {
    slug: "black-vulture",
    name: "Black Vulture Vodka",
    family: "Vodka",
    image: "/media/spirits/black-vulture.jpg",
    imageAlt: "Black Vulture Vodka bottle.",
    lede: "Distilled from locally grown corn in the Delaware River Basin.",
    mash: "Corn",
    palate: "Smooth, with a subtle sweetness",
    award: "90 Points Wine Enthusiast",
  },
  {
    slug: "soulless-ginger",
    name: "Soulless Ginger",
    family: "Vodka",
    image: "/media/spirits/soulless-ginger.jpg",
    imageAlt: "Soulless Ginger vodka bottle with fireworks behind it.",
    lede: "A corn-based spirit infused with candied ginger.",
    mash: "Corn",
    palate: "Sweet and spicy",
  },
  {
    slug: "wooden-leg-rum",
    name: "Wooden Leg Rum",
    family: "Rum",
    image: "/media/spirits/wooden-leg.jpg",
    imageAlt: "Wooden Leg Rum bottle.",
    lede: "Evaporated cane juice and brown molasses. Silver rum. The cane juice brings sweetness. The brown molasses is reminiscent of salted caramel.",
    mash: "Evaporated cane juice and brown molasses",
    palate: "Cane sweetness, brown molasses reminiscent of salted caramel",
    award: "2017 Global Spirits Awards Silver Winner",
  },
];

export function getSpirit(slug: string) {
  return spirits.find((spirit) => spirit.slug === slug);
}
