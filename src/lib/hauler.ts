export type HaulerDrink = {
  name: string;
  detail: string;
  price: string;
};

export const haulerMenu = [
  {
    id: "on-tap",
    title: "On tap cocktails",
    drinks: [
      {
        name: "The “Worded”",
        detail: "Blueberry vodka, almond syrup, cranberry, OJ.",
        price: "$11",
      },
      {
        name: "Summer Lovin’",
        detail: "Vodka, green tea & lemon.",
        price: "$11",
      },
      {
        name: "Lavender Lemonade",
        detail: "Vodka spiked lemonade w/ floral notes of lavender.",
        price: "$11",
      },
      {
        name: "Fall Mule",
        detail: "Rum, apple cider, ginger beer and cinnamon.",
        price: "$11",
      },
    ],
  },
  {
    id: "standards",
    title: "Simple standards",
    drinks: [
      {
        name: "Vodka",
        detail: "Seltzer / OJ / cranberry.",
        price: "$11",
      },
      {
        name: "Rum & Coke",
        detail: "",
        price: "$11",
      },
      {
        name: "Gin and Tonic",
        detail: "",
        price: "$11",
      },
      {
        name: "Moscow Mule",
        detail: "",
        price: "$11",
      },
      {
        name: "Vodka Redbull",
        detail: "",
        price: "$15",
      },
      {
        name: "Whiskey pours",
        detail: "",
        price: "$15",
      },
    ],
  },
] as const satisfies { id: string; title: string; drinks: HaulerDrink[] }[];

export const haulerNote =
  "All drinks $11 except Vodka Redbull and whiskey pours. Prices do not include tax. If you pay by card, a 3.99% fee is added.";
