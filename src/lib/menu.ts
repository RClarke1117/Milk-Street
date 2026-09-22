import { instagramPosts } from "@/lib/instagram";

export type Drink = {
  id: string;
  name: string;
  price: string;
  category: MenuCategory;
  description: string;
  spirit: string;
  spiritSlug?: string;
  image: string;
  imageAlt: string;
  credit: string;
  instagramHref?: string;
  instagramImage?: string;
  instagramAlt?: string;
};

export const menuCategories = [
  "Vodka",
  "Rum",
  "Gin",
  "Whiskey",
  "Mules",
  "Martinis",
  "Shaker shots",
  "Boba",
  "Flights & extras",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

const vexedPour = instagramPosts.find((post) => post.id === "vexed-pour")!;
const ryeFilm = instagramPosts.find((post) => post.id === "dam-break-process")!;

const bottle = {
  murder: {
    image: "/media/spirits/murder.jpg",
    imageAlt: "Murder Bourbon in the barrel.",
    spirit: "Murder Bourbon",
    spiritSlug: "murder-bourbon",
    credit: "Distillery photograph · Murder Bourbon",
  },
  war: {
    image: "/media/spirits/war-penny.jpg",
    imageAlt: "War Penny, wax-sealed with a 1943 steel penny.",
    spirit: "War Penny",
    spiritSlug: "war-penny",
    credit: "Distillery photograph · War Penny",
  },
  rye: {
    image: "/media/spirits/dam-break.jpg",
    imageAlt: "Dam Break Rye bottle.",
    spirit: "Dam Break Rye",
    spiritSlug: "dam-break-rye",
    credit: "Distillery photograph · Dam Break Rye",
  },
  mcnally: {
    image: "/media/spirits/mcnally.jpg",
    imageAlt: "McNally’s Irish Style Whiskey in the field.",
    spirit: "McNally’s",
    spiritSlug: "mcnallys",
    credit: "Distillery photograph · McNally’s",
  },
  devil: {
    image: "/media/spirits/devils-bark.jpg",
    imageAlt: "The Devil’s Bark bottle.",
    spirit: "The Devil’s Bark",
    spiritSlug: "devils-bark",
    credit: "Distillery photograph · The Devil’s Bark",
  },
  rum: {
    image: "/media/spirits/wooden-leg.jpg",
    imageAlt: "Wooden Leg Rum bottle.",
    spirit: "Wooden Leg Rum",
    spiritSlug: "wooden-leg-rum",
    credit: "Distillery photograph · Wooden Leg Rum",
  },
  vexed: {
    image: "/media/spirits/vexed.jpg",
    imageAlt: "Vexed Gin bottle by the water.",
    spirit: "Vexed Gin",
    spiritSlug: "vexed-gin",
    credit: "Distillery photograph · Vexed Gin",
  },
  bettie: {
    image: "/media/spirits/blind-bettie.jpg",
    imageAlt: "Blind Bettie Gin in the cucumber garden.",
    spirit: "Blind Bettie Gin",
    spiritSlug: "blind-bettie",
    credit: "Distillery photograph · Blind Bettie",
  },
  kanpeki: {
    image: "/media/spirits/kanpeki.jpg",
    imageAlt: "Kanpeki rice vodka bottle.",
    spirit: "Kanpeki",
    spiritSlug: "kanpeki",
    credit: "Distillery photograph · Kanpeki",
  },
  vulture: {
    image: "/media/spirits/black-vulture.jpg",
    imageAlt: "Black Vulture corn vodka.",
    spirit: "Black Vulture Vodka",
    spiritSlug: "black-vulture",
    credit: "Distillery photograph · Black Vulture",
  },
  ginger: {
    image: "/media/spirits/soulless-ginger.jpg",
    imageAlt: "Soulless Ginger vodka.",
    spirit: "Soulless Ginger",
    spiritSlug: "soulless-ginger",
    credit: "Distillery photograph · Soulless Ginger",
  },
  flight: {
    image: "/media/place/back-bar.jpg",
    imageAlt: "The bottle wall behind the tasting-room bar.",
    spirit: "The shelf",
    credit: "Distillery photograph · the back bar",
  },
} as const;

type BottleKey = keyof typeof bottle;

function item(
  id: string,
  name: string,
  price: string,
  category: MenuCategory,
  description: string,
  base: BottleKey,
  extra?: Partial<Pick<Drink, "instagramHref" | "instagramImage" | "instagramAlt" | "spirit" | "spiritSlug">>,
): Drink {
  const source = bottle[base];
  return {
    id,
    name,
    price,
    category,
    description,
    spirit: extra?.spirit ?? source.spirit,
    spiritSlug: extra?.spiritSlug ?? ("spiritSlug" in source ? source.spiritSlug : undefined),
    image: source.image,
    imageAlt: source.imageAlt,
    credit: source.credit,
    ...extra,
  };
}

const igVexed = {
  instagramHref: vexedPour.href,
  instagramImage: vexedPour.image,
  instagramAlt: vexedPour.alt,
};

const igRye = {
  instagramHref: ryeFilm.href,
  instagramImage: ryeFilm.image,
  instagramAlt: ryeFilm.alt,
};

export const drinks: Drink[] = [
  item("the-morgan-after-pill", "The Morgan After Pill", "$11", "Vodka", "Kanpeki, blackberry citrus tea, and crystallized lemon.", "kanpeki"),
  item("the-word", "The “Word”", "$11", "Vodka", "Blueberry-infused vodka, almond syrup, cranberry, and a splash of orange juice. One of the room’s most asked-for drinks.", "vulture", { spirit: "Blueberry-infused vodka" }),
  item("pamplemousse-knuckle", "Pamplemousse Knuckle", "$11", "Vodka", "Grapefruit seltzer and vodka.", "vulture", { spirit: "Milk Street vodka" }),
  item("lavender-lemonade", "Lavender Lemonade", "$11", "Vodka", "Vodka, lemonade, and lavender. Ask for blueberry vodka if you want it fruitier.", "vulture", { spirit: "Milk Street vodka" }),
  item("poppa-boosh", "Poppa Boosh", "$11", "Vodka", "Kanpeki, seltzer, and citrus, over ice.", "kanpeki"),
  item("cool-as-a-cucumber", "Cool as a Cucumber", "$11", "Vodka", "Cucumber and lemon muddled with cane, then tonic and ginger beer.", "vulture", { spirit: "Milk Street vodka" }),
  item("maks-tropical-temptation", "Mak’s Tropical Temptation", "$11", "Vodka", "Kanpeki, coconut, lime, and a splash of bubbles.", "kanpeki"),
  item("carol-effin-baskin", "Carol Effin Baskin", "$11", "Vodka", "Vodka with vanilla, orange, and coconut. An orange creamsicle with a spine.", "vulture", { spirit: "Milk Street vodka" }),
  item("lpr", "L.P.R.", "$11", "Vodka", "Vodka, cranberry, orange juice, and peach puree.", "vulture", { spirit: "Milk Street vodka" }),

  item("electric-passion", "Electric Passion", "$11", "Rum", "Rum, passion fruit, lime, and sour, topped with a watermelon Red Bull float.", "rum"),
  item("the-banana-hammock", "The Banana Hammock", "$11", "Rum", "Banana, coconut, and strawberry.", "rum"),
  item("captain-hazelwood", "Captain Hazelwood", "$11", "Rum", "Coconut, pineapple, cranberry, Wooden Leg rum, and blueberry vodka, under a frothy top.", "rum", { spirit: "Wooden Leg Rum & blueberry vodka" }),
  item("mango-habanero-rum-a-rita", "Mango Habanero Rum-A-Rita", "$11", "Rum", "Rum, mango, lime, triple sec, and habanero.", "rum"),
  item("strawberry-coconut-cooler", "Strawberry Coconut Cooler", "$11", "Rum", "Rum, coconut, strawberry, pineapple, and lime.", "rum"),
  item("rum-punch", "Rum Punch", "$11", "Rum", "Mango nectar, cranberry, and pineapple.", "rum"),
  item("the-island-quicky", "The Island Quicky", "$11", "Rum", "Rum, coconut-pineapple seltzer, and a short pour of pineapple juice. The dry one.", "rum"),
  item("matcha-colada", "Matcha Colada", "$11", "Rum", "Rum, matcha, and sweet almond. A colada that went to a tea house.", "rum"),
  item("the-little-man-in-the-boat", "The Little Man in the Boat", "$11", "Rum", "Grapefruit, lime, simple syrup, and cardamom.", "rum"),

  item("heavy-melons", "Heavy Melons", "$11", "Gin", "Blind Bettie, cantaloupe, citrus, and seltzer. Lighter than the name.", "bettie"),
  item("rosemaries-baby", "Rosemary’s Baby", "$11", "Gin", "Orange and lemon muddled in rosemary syrup, with gin and seltzer.", "bettie", { spirit: "House gin" }),
  item("butterfly-pea", "Butterfly Pea", "$11", "Gin", "Vexed, lavender, lemonade, seltzer, and butterfly pea.", "vexed", igVexed),
  item("blind-lemonade", "Blind Lemonade", "$11", "Gin", "Blind Bettie and pink lemonade.", "bettie"),
  item("fun-with-a-cucumber", "Fun with a Cucumber", "$11", "Gin", "Gin, muddled cucumber and lime, tonic, and ginger beer.", "bettie", { spirit: "House gin" }),
  item("betties-bbl", "Bettie’s BBL", "$11", "Gin", "Blind Bettie, blackberry, pink lemonade, and cran-razz seltzer.", "bettie"),

  item("southern-lip-lock", "Southern Lip Lock", "$13", "Whiskey", "Basil, lemon, and strawberry, shaken with bourbon and iced tea.", "murder", { spirit: "House bourbon" }),
  item("fu-gary", "F.U. Gary", "$13", "Whiskey", "Whiskey, lemon, triple sec, and 7up.", "murder", { spirit: "House whiskey" }),
  item("tits-on-a-moritz", "Tits on a Moritz", "$13", "Whiskey", "Murder Bourbon, sour cherry, and almond syrup, served ice-cold. Add $1 when it is a mantini.", "murder"),
  item("tish-and-7up", "Tish & 7up", "$13", "Whiskey", "A 7&7 built on McNally’s Irish Style Whiskey and 7up.", "mcnally"),
  item("classic-whiskey-sour", "Classic Whiskey Sour", "$13", "Whiskey", "Whiskey, lemon, simple syrup, and egg white.", "murder", { spirit: "House whiskey" }),
  item("barrel-rested-old-fashioned", "Barrel Rested Old Fashioned", "$13", "Whiskey", "Orange, cherry, sugar, bitters, and Dam Break Rye over ice.", "rye", igRye),
  item("smoked-cherry", "Smoked Cherry", "$13", "Whiskey", "Light vanilla syrup and black cherry soda with War Penny.", "war"),

  item("moscow-mule", "Moscow Mule", "$11", "Mules", "Vodka, lime, and ginger beer.", "vulture", { spirit: "Milk Street vodka" }),
  item("the-red-headed-mule", "The Red Headed Mule", "$11", "Mules", "Soulless Ginger, lime, and ginger beer.", "ginger"),
  item("summer-mule", "Summer Mule", "$11", "Mules", "Vodka, strawberry, lime, and ginger beer.", "vulture", { spirit: "Milk Street vodka" }),
  item("war-mule", "War Mule", "$12.50", "Mules", "War Penny, lime, and ginger beer.", "war"),
  item("lucky-peach-mule", "Lucky Peach Mule", "$12", "Mules", "McNally’s, peach, lime, and ginger beer. A dollar over the house mule.", "mcnally"),
  item("the-big-ass-mule", "The Big Ass Mule", "$125", "Mules", "Your choice of vodka in a 192-ounce mug — about seventeen mules. Built for five people or more, plus tax.", "vulture", { spirit: "Milk Street vodka" }),

  item("classic-martini", "Classic Martini", "$14", "Martinis", "Tell them how you want it: dry, dirty, twist, or extra olives.", "kanpeki", { spirit: "Kanpeki or house vodka" }),
  item("french-martini", "French Martini", "$14", "Martinis", "Raspberry, vanilla syrup, and pineapple juice.", "vulture", { spirit: "Milk Street vodka" }),
  item("espresso-martini", "Espresso Martini", "$14", "Martinis", "Espresso and a touch of light vanilla syrup.", "kanpeki", { spirit: "Milk Street vodka" }),
  item("flirtini", "Flirtini", "$14", "Martinis", "Peach, raspberry, almond, and a splash of cranberry.", "vulture", { spirit: "Milk Street vodka" }),
  item("ferrero-rocher-martini", "Ferrero Rocher Martini", "$14", "Martinis", "Hazelnut, chocolate, and a touch of cream.", "vulture", { spirit: "Milk Street vodka" }),
  item("cucumber-melon-martini", "Cucumber Melon Martini", "$14", "Martinis", "Kanpeki with cucumber-melon shrub.", "kanpeki"),

  item("strawberry-shorty-cake", "Strawberry Shorty Cake", "$19", "Shaker shots", "Vodka, strawberry, cake syrup, and lemon. The shaker is $19; refills are $14.", "vulture", { spirit: "Milk Street vodka" }),
  item("lemoannn-squared", "Lemoannn Squared", "$19", "Shaker shots", "Vodka, lemon-square syrup, and cream. Refills $14.", "vulture", { spirit: "Milk Street vodka" }),
  item("key-lime-thighs", "Key Lime Thighs", "$19", "Shaker shots", "Vodka, key lime, graham cracker syrup, and cream. Refills $14.", "vulture", { spirit: "Milk Street vodka" }),
  item("dole-whips-and-chains", "Dole Whips and Chains", "$19", "Shaker shots", "Rum, pineapple juice, and marshmallow syrup. Refills $14.", "rum"),
  item("push-it-real-good-pop", "Push it Real Good Pop", "$19", "Shaker shots", "Rum, vodka, vanilla, and cream. Refills $14.", "rum", { spirit: "Rum & vodka" }),
  item("banana-split", "Banana, Can You Do a Split", "$19", "Shaker shots", "Rum, strawberry-banana, chocolate, vanilla, and cream. Refills $14.", "rum"),

  item("dirty-big-balls", "Dirty Big Balls", "$12", "Boba", "Vodka, green tea, mango nectar, and passion-fruit boba.", "vulture", { spirit: "Milk Street vodka" }),
  item("ball-tickler", "Ball Tickler", "$12", "Boba", "Devil’s Bark, cranberry, black tea, and pomegranate boba.", "devil"),
  item("berry-naughty-baubles", "Berry Naughty Baubles", "$12", "Boba", "Vodka, pineapple, raspberry, black tea, and strawberry boba.", "vulture", { spirit: "Milk Street vodka" }),
  item("the-admirals-family-jewels", "The Admiral’s Family Jewels", "$12", "Boba", "Rum, pineapple, strawberry, and kiwi boba.", "rum"),
  item("ball-buster", "Ball Buster", "$12", "Boba", "Ginger vodka, pink lemonade, blackberry, and blueberry boba.", "ginger"),
  item("coconut-danglers", "Coconut Danglers", "$12", "Boba", "Rum, coconut, orange, pineapple, coconut-pineapple seltzer, and mango boba.", "rum"),

  item("jello-shots", "Jello Shots", "$5", "Flights & extras", "Ask the bar which flavor is set that day.", "flight", { spirit: "House spirit" }),
  item("moonshine-shots", "Moonshine Shots", "$5", "Flights & extras", "A shot of the unaged house spirit.", "flight", { spirit: "House spirit" }),
  item("boozy-slushies", "Boozy Slushies", "$12", "Flights & extras", "Flavors change. Ask what is in the machine.", "flight", { spirit: "House spirit" }),
  item("brown-flight", "Brown Flight", "$36", "Flights & extras", "A flight through the whiskeys on the shelf.", "flight", { spirit: "Whiskey shelf" }),
  item("clear-flight", "Clear Flight", "$26", "Flights & extras", "A flight through the unsweetened clear spirits — vodka, gin, silver rum.", "flight", { spirit: "Clear shelf" }),
];

export const menuNote =
  "Spring / Summer 2026 tasting-room list. Prices do not include tax. Cards add 3.99%. Every pour is a Milk Street spirit.";

export function drinksUsing(slug: string) {
  return drinks.filter((drink) => drink.spiritSlug === slug);
}
