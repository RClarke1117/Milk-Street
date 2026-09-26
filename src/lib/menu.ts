export type Drink = {
  id: string;
  name: string;
  price: string;
  category: MenuCategory;
  description: string;
  /** Words from the scan. A bottle name only when the scan names that bottle. */
  spirit: string;
  /** Set only when the scan names that bottle. Unspecified vodka is not Black Vulture. */
  spiritSlug?: string;
  /** Link text when the spirit line names more than the linked bottle. */
  linkLabel?: string;
  /** A photograph of this drink. Absent until one exists — the menu shows a slot instead of another bottle. */
  image?: string;
  imageAlt?: string;
  credit?: string;
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

const bottle = {
  murder: { spirit: "Murder Bourbon", spiritSlug: "murder-bourbon" },
  war: { spirit: "War Penny", spiritSlug: "war-penny" },
  rye: { spirit: "Dam Break Rye", spiritSlug: "dam-break-rye" },
  mcnally: { spirit: "McNally’s", spiritSlug: "mcnallys" },
  devil: { spirit: "The Devil’s Bark", spiritSlug: "devils-bark" },
  wooden: { spirit: "Wooden Leg Rum", spiritSlug: "wooden-leg-rum" },
  vexed: { spirit: "Vexed Gin", spiritSlug: "vexed-gin" },
  bettie: { spirit: "Blind Bettie Gin", spiritSlug: "blind-bettie" },
  kanpeki: { spirit: "Kanpeki", spiritSlug: "kanpeki" },
  ginger: { spirit: "Soulless Ginger", spiritSlug: "soulless-ginger" },
  vodka: { spirit: "Vodka" },
  gin: { spirit: "Gin" },
  whiskey: { spirit: "Whiskey" },
  bourbon: { spirit: "Bourbon" },
  rum: { spirit: "Rum" },
  blueberry: { spirit: "Blueberry-infused vodka" },
  gingerVodka: { spirit: "Ginger vodka" },
  rumAndVodka: { spirit: "Rum and vodka" },
  flight: { spirit: "" },
} as const;

type BottleKey = keyof typeof bottle;

function item(
  id: string,
  name: string,
  price: string,
  category: MenuCategory,
  description: string,
  base: BottleKey,
  extra?: Partial<Pick<Drink, "spirit" | "spiritSlug" | "linkLabel" | "image" | "imageAlt" | "credit">>,
): Drink {
  const source = bottle[base];
  const named = "spiritSlug" in source ? source.spiritSlug : undefined;
  return {
    id,
    name,
    price,
    category,
    description,
    spirit: extra?.spirit ?? source.spirit,
    spiritSlug: extra && "spiritSlug" in extra ? extra.spiritSlug : extra?.spirit ? undefined : named,
    linkLabel: extra?.linkLabel,
    image: extra?.image,
    imageAlt: extra?.imageAlt,
    credit: extra?.credit,
  };
}

export const drinks: Drink[] = [
  item("the-morgan-after-pill", "The Morgan After Pill", "$11", "Vodka", "Kanpeki, blackberry citrus tea, and crystallized lemon.", "kanpeki"),
  item("the-word", "The “Word”", "$11", "Vodka", "Blueberry-infused vodka, almond syrup, cranberry, and a splash of orange juice.", "blueberry"),
  item("pamplemousse-knuckle", "Pamplemousse Knuckle", "$11", "Vodka", "Grapefruit seltzer and vodka.", "vodka"),
  item("lavender-lemonade", "Lavender Lemonade", "$11", "Vodka", "Vodka, lemonade, and lavender.", "vodka"),
  item("poppa-boosh", "Poppa Boosh", "$11", "Vodka", "Kanpeki, seltzer, and citrus, over ice.", "kanpeki"),
  item("cool-as-a-cucumber", "Cool as a Cucumber", "$11", "Vodka", "Cucumber and lemon muddled with cane, then tonic and ginger beer.", "vodka"),
  item("maks-tropical-temptation", "Mak’s Tropical Temptation", "$11", "Vodka", "Kanpeki, coconut, lime, and a splash of bubbles.", "kanpeki"),
  item("carol-effin-baskin", "Carol Effin Baskin", "$11", "Vodka", "Vodka with vanilla, orange, and coconut.", "vodka"),
  item("lpr", "L.P.R.", "$11", "Vodka", "Vodka, cranberry, orange juice, and peach puree.", "vodka"),

  item("electric-passion", "Electric Passion", "$11", "Rum", "Rum, passion fruit, lime, and sour, topped with a watermelon Red Bull float.", "rum"),
  item("the-banana-hammock", "The Banana Hammock", "$11", "Rum", "Banana, coconut, and strawberry.", "rum"),
  item("captain-hazelwood", "Captain Hazelwood", "$11", "Rum", "Coconut, pineapple, cranberry, Wooden Leg rum, and blueberry vodka, under a frothy top.", "wooden", { spirit: "Wooden Leg rum and blueberry vodka", spiritSlug: "wooden-leg-rum", linkLabel: "Wooden Leg Rum" }),
  item("mango-habanero-rum-a-rita", "Mango Habanero Rum-A-Rita", "$11", "Rum", "Rum, mango, lime, triple sec, and habanero.", "rum"),
  item("strawberry-coconut-cooler", "Strawberry Coconut Cooler", "$11", "Rum", "Rum, coconut, strawberry, pineapple, and lime.", "rum"),
  item("rum-punch", "Rum Punch", "$11", "Rum", "Mango nectar, cranberry, and pineapple.", "rum"),
  item("the-island-quicky", "The Island Quicky", "$11", "Rum", "Rum, coconut-pineapple seltzer, and pineapple juice.", "rum"),
  item("matcha-colada", "Matcha Colada", "$11", "Rum", "Rum, matcha, and sweet almond.", "rum"),
  item("the-little-man-in-the-boat", "The Little Man in the Boat", "$11", "Rum", "Grapefruit, lime, simple syrup, and cardamom.", "rum"),

  item("heavy-melons", "Heavy Melons", "$11", "Gin", "Blind Bettie, cantaloupe, citrus, and seltzer.", "bettie"),
  item("rosemaries-baby", "Rosemary’s Baby", "$11", "Gin", "Orange and lemon muddled in rosemary syrup, with gin and seltzer.", "gin"),
  item("butterfly-pea", "Butterfly Pea", "$11", "Gin", "Vexed, lavender, lemonade, seltzer, and butterfly pea.", "vexed"),
  item("blind-lemonade", "Blind Lemonade", "$11", "Gin", "Blind Bettie and pink lemonade.", "bettie"),
  item("fun-with-a-cucumber", "Fun with a Cucumber", "$11", "Gin", "Gin, muddled cucumber and lime, tonic, and ginger beer.", "gin"),
  item("betties-bbl", "Bettie’s BBL", "$11", "Gin", "Blind Bettie, blackberry, pink lemonade, and cran-razz seltzer.", "bettie"),

  item("southern-lip-lock", "Southern Lip Lock", "$13", "Whiskey", "Basil, lemon, and strawberry, shaken with bourbon and iced tea.", "bourbon"),
  item("fu-gary", "F.U. Gary", "$13", "Whiskey", "Whiskey, lemon, triple sec, and 7up.", "whiskey"),
  item("tits-on-a-moritz", "Tits on a Moritz", "$13", "Whiskey", "Murder Bourbon, sour cherry, and almond syrup, served ice-cold. Add $1 when it is a mantini.", "murder"),
  item("tish-and-7up", "Tish & 7up", "$13", "Whiskey", "McNally’s and 7up.", "mcnally"),
  item("classic-whiskey-sour", "Classic Whiskey Sour", "$13", "Whiskey", "Whiskey, lemon, simple syrup, and egg white.", "whiskey"),
  item("barrel-rested-old-fashioned", "Barrel Rested Old Fashioned", "$13", "Whiskey", "Orange, cherry, sugar, bitters, and Dam Break Rye over ice.", "rye"),
  item("smoked-cherry", "Smoked Cherry", "$13", "Whiskey", "Light vanilla syrup and black cherry soda with War Penny.", "war"),

  item("moscow-mule", "Moscow Mule", "$11", "Mules", "Vodka, lime, and ginger beer.", "vodka"),
  item("the-red-headed-mule", "The Red Headed Mule", "$11", "Mules", "Soulless Ginger, lime, and ginger beer.", "ginger"),
  item("summer-mule", "Summer Mule", "$11", "Mules", "Vodka, strawberry, lime, and ginger beer.", "vodka"),
  item("war-mule", "War Mule", "$12.50", "Mules", "War Penny, lime, and ginger beer.", "war"),
  item("lucky-peach-mule", "Lucky Peach Mule", "$12", "Mules", "McNally’s, peach, lime, and ginger beer.", "mcnally"),
  item("the-big-ass-mule", "The Big Ass Mule", "$125", "Mules", "Vodka in a 192-ounce mug.", "vodka"),

  item("classic-martini", "Classic Martini", "$14", "Martinis", "Vodka martini.", "vodka"),
  item("french-martini", "French Martini", "$14", "Martinis", "Raspberry, vanilla syrup, and pineapple juice.", "vodka"),
  item("espresso-martini", "Espresso Martini", "$14", "Martinis", "Espresso and a touch of light vanilla syrup.", "vodka"),
  item("flirtini", "Flirtini", "$14", "Martinis", "Peach, raspberry, almond, and a splash of cranberry.", "vodka"),
  item("ferrero-rocher-martini", "Ferrero Rocher Martini", "$14", "Martinis", "Hazelnut, chocolate, and a touch of cream.", "vodka"),
  item("cucumber-melon-martini", "Cucumber Melon Martini", "$14", "Martinis", "Kanpeki with cucumber-melon shrub.", "kanpeki"),

  item("strawberry-shorty-cake", "Strawberry Shorty Cake", "$19", "Shaker shots", "Vodka, strawberry, cake syrup, and lemon. The shaker is $19; refills are $14.", "vodka"),
  item("lemoannn-squared", "Lemoannn Squared", "$19", "Shaker shots", "Vodka, lemon-square syrup, and cream. Refills $14.", "vodka"),
  item("key-lime-thighs", "Key Lime Thighs", "$19", "Shaker shots", "Vodka, key lime, graham cracker syrup, and cream. Refills $14.", "vodka"),
  item("dole-whips-and-chains", "Dole Whips and Chains", "$19", "Shaker shots", "Rum, pineapple juice, and marshmallow syrup. Refills $14.", "rum"),
  item("push-it-real-good-pop", "Push it Real Good Pop", "$19", "Shaker shots", "Rum, vodka, vanilla, and cream. Refills $14.", "rumAndVodka"),
  item("banana-split", "Banana, Can You Do a Split", "$19", "Shaker shots", "Rum, strawberry-banana, chocolate, vanilla, and cream. Refills $14.", "rum"),

  item("dirty-big-balls", "Dirty Big Balls", "$12", "Boba", "Vodka, green tea, mango nectar, and passion-fruit boba.", "vodka"),
  item("ball-tickler", "Ball Tickler", "$12", "Boba", "Devil’s Bark, cranberry, black tea, and pomegranate boba.", "devil"),
  item("berry-naughty-baubles", "Berry Naughty Baubles", "$12", "Boba", "Vodka, pineapple, raspberry, black tea, and strawberry boba.", "vodka"),
  item("the-admirals-family-jewels", "The Admiral’s Family Jewels", "$12", "Boba", "Rum, pineapple, strawberry, and kiwi boba.", "rum"),
  item("ball-buster", "Ball Buster", "$12", "Boba", "Ginger vodka, pink lemonade, blackberry, and blueberry boba.", "gingerVodka"),
  item("coconut-danglers", "Coconut Danglers", "$12", "Boba", "Rum, coconut, orange, pineapple, coconut-pineapple seltzer, and mango boba.", "rum"),

  item("jello-shots", "Jello Shots", "$5", "Flights & extras", "", "flight"),
  item("moonshine-shots", "Moonshine Shots", "$5", "Flights & extras", "", "flight"),
  item("boozy-slushies", "Boozy Slushies", "$12", "Flights & extras", "", "flight"),
  item("brown-flight", "Brown Flight", "$36", "Flights & extras", "", "flight", { spirit: "Whiskey" }),
  item("clear-flight", "Clear Flight", "$26", "Flights & extras", "", "flight", { spirit: "Vodka, gin, rum" }),
];

export const menuNote =
  "Spring / Summer 2026. Prices do not include tax. If you pay by card, a 3.99% fee is added.";

export function drinksUsing(slug: string) {
  return drinks.filter((drink) => drink.spiritSlug === slug);
}
