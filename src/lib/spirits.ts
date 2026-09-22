export type Spirit = {
  slug: string;
  name: string;
  family: "Whiskey" | "Gin" | "Vodka" | "Rum";
  proof?: string;
  image: string;
  imageAlt: string;
  lede: string;
  story: string;
  mash: string;
  palate: string;
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
    lede: "Corn, rye, and barley, cut to the proof that lets the grain speak, then left in new white American oak.",
    story:
      "The mash bill is corn, rye, and barley. It comes off the still and is laid down at 100 proof in new white American oak. Time in the wood turns it into a sipping bourbon — butter, brown sugar, and caramel — bottled in the same building where it was mashed.",
    mash: "Corn, rye, barley",
    palate: "Butter, brown sugar, caramel",
    award: "New York International Spirits Competition, Gold 95, 2025",
  },
  {
    slug: "war-penny",
    name: "War Penny",
    family: "Whiskey",
    image: "/media/spirits/war-penny.jpg",
    imageAlt:
      "War Penny bottle on black, black wax sealed with a 1943 steel penny.",
    lede: "Cherry-wood smoke for 36 hours, new oak, then a finish in a local beer barrel.",
    story:
      "A portion of the corn and rye is held in cherry-wood smoke for a full 36 hours before it ever sees the still. The whiskey ages in new white American oak, then finishes in beer barrels from local breweries, so no two batches taste quite alike. The wax on the bottle carries a 1943 steel penny.",
    mash: "Corn and rye, part of it smoked on cherry wood",
    palate: "Quiet smoke, then whatever the beer barrel left behind",
    award: "San Francisco World Spirits Competition, Silver",
  },
  {
    slug: "dam-break-rye",
    name: "Dam Break Rye",
    family: "Whiskey",
    proof: "90",
    image: "/media/spirits/dam-break.jpg",
    imageAlt: "Dam Break Rye bottle and its illustrated label.",
    lede: "Ninety proof, and still the softest rye in the rack.",
    story:
      "Dam Break is a rye that refuses the usual bite. At 90 proof it opens with caramel, vanilla, and honey, then the grain arrives on the finish as a dry pepper. Mashed, distilled, and bottled on Milk Street — the same floor shown in the distillery’s process film.",
    mash: "Rye",
    palate: "Caramel, vanilla, honey, peppery rye finish",
    award: "Global Spirits Awards, Gold, 2019",
  },
  {
    slug: "mcnallys",
    name: "McNally’s Irish Style Whiskey",
    family: "Whiskey",
    proof: "90",
    image: "/media/spirits/mcnally.jpg",
    imageAlt: "McNally’s bottle standing in a green field.",
    lede: "An Irish-style whiskey made in Sussex County, aged in seasoned bourbon barrels.",
    story:
      "McNally’s follows an Irish-style recipe and is aged in barrels that already held bourbon. At 90 proof the wood gives vanilla and caramel, with dried fruit underneath. It is distilled here, not imported and relabeled.",
    mash: "Irish-style grain bill, aged in seasoned bourbon barrels",
    palate: "Vanilla, caramel, dried fruit",
  },
  {
    slug: "devils-bark",
    name: "The Devil’s Bark",
    family: "Whiskey",
    image: "/media/spirits/devils-bark.jpg",
    imageAlt: "The Devil’s Bark bottle against a deep red ground.",
    lede: "Birch and cinnamon wound through the house whiskey.",
    story:
      "The Devil’s Bark takes the distillery’s whiskey and sets it against birch and cinnamon — a flavored whiskey with a campfire story attached, still made from spirit that started as grain on this floor.",
    mash: "House whiskey with birch and cinnamon",
    palate: "Cinnamon heat, birch, whiskey sweetness",
  },
  {
    slug: "vexed-gin",
    name: "Vexed Gin",
    family: "Gin",
    image: "/media/spirits/vexed.jpg",
    imageAlt: "Vexed Gin bottle set against open water.",
    lede: "A corn-base gin. Juniper, citrus peel, lavender, and a line of sarsaparilla.",
    story:
      "Vexed starts as corn from the distillery, not a bought-in neutral. The botanical bill is juniper, coriander, cardamom, sarsaparilla, angelica, lemon, orange, grapefruit, and lavender. It is built to hold a tonic without disappearing.",
    mash: "Corn, distilled on site, then botanicals",
    palate: "Juniper, citrus peel, lavender, warm spice",
    award: "ASCOT Awards, Double Platinum",
  },
  {
    slug: "blind-bettie",
    name: "Blind Bettie Gin",
    family: "Gin",
    image: "/media/spirits/blind-bettie.jpg",
    imageAlt: "Blind Bettie Gin in a garden with cucumber on the label.",
    lede: "Cucumber first, then lemon, honey, cranberry, and juniper to tie the knot.",
    story:
      "Blind Bettie is the summer gin. Cucumber leads, lemon and honey follow, cranberry cuts the sweetness, and juniper keeps it a gin. It earned ASCOT Double Platinum on the strength of that balance.",
    mash: "Distilled gin base, cucumber-led botanicals",
    palate: "Cucumber, lemon, honey, cranberry, juniper",
    award: "ASCOT Awards, Double Platinum",
  },
  {
    slug: "kanpeki",
    name: "Kanpeki Rice Vodka",
    family: "Vodka",
    image: "/media/spirits/kanpeki.jpg",
    imageAlt: "Kanpeki rice vodka bottle.",
    lede: "Polished white rice, distilled twice, filtered twice through carbon.",
    story:
      "Kanpeki is Japanese for perfection. The vodka is polished white rice, run through the still twice, then filtered twice across carbons until what remains is soft enough to drink over ice. Wine Enthusiast scored it 92.",
    mash: "Polished white rice",
    palate: "Clean, soft, almost no burn",
    award: "Wine Enthusiast, 92 points",
  },
  {
    slug: "black-vulture",
    name: "Black Vulture Vodka",
    family: "Vodka",
    image: "/media/spirits/black-vulture.jpg",
    imageAlt: "Black Vulture Vodka bottle, the distillery’s corn vodka.",
    lede: "Corn grown close to the Delaware River basin, distilled until it is nearly sweet.",
    story:
      "Black Vulture was one of the two spirits on the shelf the day the distillery opened in January 2017. It is distilled from corn, smooth, with a faint sweetness. The vulture on the label is the house mark. Wine Enthusiast scored it 90.",
    mash: "Corn",
    palate: "Soft corn sweetness, clean finish",
    award: "Wine Enthusiast, 90 points",
  },
  {
    slug: "soulless-ginger",
    name: "Soulless Ginger",
    family: "Vodka",
    image: "/media/spirits/soulless-ginger.jpg",
    imageAlt: "Soulless Ginger vodka bottle with fireworks behind it.",
    lede: "Corn spirit from the still, rested on candied ginger.",
    story:
      "Soulless Ginger begins as the distillery’s corn spirit and is infused with candied ginger until it is both sweet and hot. It is the vodka inside the Red Headed Mule.",
    mash: "Corn spirit, candied ginger",
    palate: "Candied ginger, heat, then sweetness",
  },
  {
    slug: "wooden-leg-rum",
    name: "Wooden Leg Rum",
    family: "Rum",
    image: "/media/spirits/wooden-leg.jpg",
    imageAlt: "Wooden Leg Rum bottle.",
    lede: "Evaporated cane juice and brown molasses. A silver rum with a salted-caramel weight.",
    story:
      "Wooden Leg opened with Black Vulture in 2017 and is still on the shelf. Cane juice brings the sweetness; brown molasses brings a salted-caramel depth. It is a silver rum, unaged, and it has taken both a Global Spirits silver and a New York gold.",
    mash: "Evaporated cane juice and brown molasses",
    palate: "Cane sweetness, salted caramel, clean silver finish",
    award: "Global Spirits Awards Silver, 2017 · NYISC Gold 94, 2020",
  },
];

export function getSpirit(slug: string) {
  return spirits.find((spirit) => spirit.slug === slug);
}
