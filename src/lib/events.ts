export type DistilleryEvent = {
  id: string;
  date: string;
  start: string;
  end?: string;
  title: string;
  detail: string;
  kind: "Music" | "Food truck" | "House game" | "Show";
  image: string;
  imageAlt: string;
  href?: string;
  hrefLabel?: string;
};

/** Upcoming room dates taken from the distillery’s public calendar, as of 26 Sep 2026. */
export const events: DistilleryEvent[] = [
  {
    id: "smokin-mos-0926",
    date: "2026-09-26",
    start: "5:00 PM",
    end: "9:00 PM",
    title: "Smokin’ Mo’s BBQ",
    detail:
      "A succulent variety of wood smoked meats such as brisket, ribs, pork and chicken along with many delicious sides. This date at the distillery is not to be missed!",
    kind: "Food truck",
    image: "/media/events/smokin-mos.jpg",
    imageAlt: "Smokin’ Mo’s BBQ truck, the flyer on the September 26 calendar listing.",
  },
  {
    id: "brian-st-john-0926",
    date: "2026-09-26",
    start: "7:00 PM",
    end: "10:00 PM",
    title: "Brian St. John Band",
    detail:
      "The famous Brian St. John Band will be fully electric. Jamming out in a style completely unique to them, it is guaranteed to get your ass shakin’.",
    kind: "Music",
    image: "/media/events/brian-st-john.jpg",
    imageAlt: "Brian St. John Band, electric, on the distillery’s event flyer.",
  },
  {
    id: "chicken-bingo-0927",
    date: "2026-09-27",
    start: "1:00 PM",
    end: "6:00 PM",
    title: "Chicken S#!t Bingo",
    detail:
      "With every drink you buy, you get a number. Once an hour we put a chicken on a numbered mat in a pen. If she poops on your number, you win. First poop that hour gets you a free drink, and the second poop, an exclusive Chicken S#!t Bingo t-shirt. Every 2nd and 4th Sunday. First poo at 2:00.",
    kind: "House game",
    image: "/media/events/chicken-bingo.jpg",
    imageAlt: "The numbered chicken-bingo pen, the photograph on the distillery’s listing.",
  },
  {
    id: "name-that-tune-1002",
    date: "2026-10-02",
    start: "7:30 PM",
    end: "9:30 PM",
    title: "Name That Tune",
    detail: "Join us this Friday night for some fun, music and prizes. Trivia Revolution brings us Name That Tune.",
    kind: "House game",
    image: "/media/events/name-that-tune.jpg",
    imageAlt: "Name That Tune at Milk Street Distillery, October 2, from Trivia Revolution’s flyer.",
  },
  {
    id: "rumble-city-1003",
    date: "2026-10-03",
    start: "7:00 PM",
    end: "10:00 PM",
    title: "Rumble City Records Unplugged",
    detail: "Remember these guys from the summer? Well, here they are as a 2 piece rockin’ out unplugged.",
    kind: "Music",
    image: "/media/events/rumble-city-unplugged.jpg",
    imageAlt: "Rumble City Records as a two-piece, the photograph on the distillery’s listing.",
  },
  {
    id: "trivia-1004",
    date: "2026-10-04",
    start: "3:30 PM",
    end: "5:30 PM",
    title: "Trivia with DJ Ray",
    detail:
      "Do you think that you are smart and know things? Come put your knowledge to the test every first and third Sunday of the month. Have a drink, have fun, and have a shot of winning a $25 gift certificate for 1st place.",
    kind: "House game",
    image: "/media/events/trivia.jpg",
    imageAlt: "Trivia Night at Milk Street Distillery, every first and third Sunday at 3:30.",
  },
  {
    id: "music-bingo-1009",
    date: "2026-10-09",
    start: "7:00 PM",
    end: "9:00 PM",
    title: "Music Bingo",
    detail:
      "How good do you think that you know music? 30–45 seconds of a song is played. If you know it and have it on your bingo card, mark it down. Win prizes.",
    kind: "House game",
    image: "/media/events/music-bingo.jpg",
    imageAlt: "Music Bingo at Milk Street Distillery. Sing it, mark it, win it.",
  },
  {
    id: "slice-of-nj-1010",
    date: "2026-10-10",
    start: "5:00 PM",
    end: "9:00 PM",
    title: "A Slice of New Jersey",
    detail:
      "Cooked at 900 degrees in our mobile gas-fired ovens in only 90 seconds, our Neapolitan-style pizza features a soft and delicate crust, with beautiful charring from the high temperatures. We will bring our fresh ingredients to you, as we will prepare authentic, artisan pizza on the spot using local and quality ingredients that isn't widely accessible here in this part of New Jersey.",
    kind: "Food truck",
    image: "/media/events/slice-of-nj.jpg",
    imageAlt: "A Slice of New Jersey, the pizza-oven truck on the distillery’s listing.",
  },
  {
    id: "sons-of-hudson-1010",
    date: "2026-10-10",
    start: "7:00 PM",
    end: "10:00 PM",
    title: "Sons of Hudson",
    detail:
      "Sons of Hudson Band hails from the Hudson Valley area of NY, playing a mix of classic country, classic rock, and original music. From Johnny Cash, Waylon Jennings to Pink Floyd and Rolling Stones.",
    kind: "Music",
    image: "/media/events/sons-of-hudson.jpg",
    imageAlt: "Sons of Hudson, the photograph on the distillery’s October 10 listing.",
  },
  {
    id: "chicken-bingo-1011",
    date: "2026-10-11",
    start: "1:00 PM",
    end: "5:00 PM",
    title: "Chicken S#!t Bingo",
    detail:
      "With every drink you buy, you get a number. Once an hour we put a chicken on a numbered mat in a pen. If she poops on your number, you win. First poop that hour gets you a free drink, and the second poop, an exclusive Chicken S#!t Bingo t-shirt. Every 2nd and 4th Sunday. First poo at 2:00.",
    kind: "House game",
    image: "/media/events/chicken-bingo.jpg",
    imageAlt: "The numbered chicken-bingo pen, the photograph on the distillery’s listing.",
  },
  {
    id: "brandon-davis-1015",
    date: "2026-10-15",
    start: "5:00 PM",
    end: "10:00 PM",
    title: "Brandon Davis Backroads and Barn Tour",
    detail:
      "Join Brandon Davis for another unforgettable stop on the Backroads & Barns Tour—a traveling concert series celebrating Live Music • Real People • Small Businesses. This special stop is proudly hosted in partnership with Milk Street Distillery. Come early, connect with friends and family, and experience an intimate evening of live country music.",
    kind: "Show",
    image: "/media/events/brandon-davis.jpg",
    imageAlt: "Brandon Davis, Backroads & Barns Tour, Branchville, October 15, in partnership with Milk Street Distillery.",
    href: "https://www.tickettailor.com/events/brandondavis/2309545?date=2026-10-15",
    hrefLabel: "Tickets",
  },
  {
    id: "pierogi-1017",
    date: "2026-10-17",
    start: "5:00 PM",
    end: "9:00 PM",
    title: "Tranquility Temptations Pierogi",
    detail:
      "Tranquility Temptations Pierogi is run by a mother & daughter duo. The local business’ main focus is their delicious hand crafted pierogi with dozens of flavors to choose from. They have everything ranging from the classics such as Potato & Cheddar, Sauerkraut, and Farmers Cheese to the weird and wonderful such as Buffalo Chicken, Roasted Garlic Gouda & Potato, and Steak Fajita. Their offerings even include vegan & dairy free options for those that are interested.",
    kind: "Food truck",
    image: "/media/events/pierogi.jpg",
    imageAlt: "Tranquility Temptations Pierogi, the photograph on the distillery’s listing.",
  },
  {
    id: "mike-volcanics-1017",
    date: "2026-10-17",
    start: "7:00 PM",
    end: "10:00 PM",
    title: "Mike and the Volcanics",
    detail:
      "Playing the very best of classic rock. Zeppelin, Journey, Bad Co. and much more. Also the best of 90s grunge rock. Soundgarden, STP, Jane’s Addiction. All are seasoned musicians who have toured around Europe and South America. Mike and the Volcanics will be playing an entire tribute to Zeppelin set.",
    kind: "Music",
    image: "/media/events/mike-volcanics.jpg",
    imageAlt: "Mike and the Volcanics, the photograph on the distillery’s listing.",
  },
  {
    id: "trivia-1018",
    date: "2026-10-18",
    start: "3:30 PM",
    end: "5:30 PM",
    title: "Trivia with DJ Ray",
    detail:
      "Do you think that you are smart and know things? Come put your knowledge to the test every first and third Sunday of the month. Have a drink, have fun, and have a shot of winning a $25 gift certificate for 1st place.",
    kind: "House game",
    image: "/media/events/trivia.jpg",
    imageAlt: "Trivia Night at Milk Street Distillery, every first and third Sunday at 3:30.",
  },
  {
    id: "music-bingo-1023",
    date: "2026-10-23",
    start: "7:00 PM",
    end: "9:00 PM",
    title: "Music Bingo",
    detail:
      "How good do you think that you know music? 30–45 seconds of a song is played. If you know it and have it on your bingo card, mark it down. Win prizes.",
    kind: "House game",
    image: "/media/events/music-bingo.jpg",
    imageAlt: "Music Bingo at Milk Street Distillery. Sing it, mark it, win it.",
  },
  {
    id: "chicken-bingo-1025",
    date: "2026-10-25",
    start: "1:00 PM",
    end: "6:00 PM",
    title: "Last Chicken S#!t Bingo of the Year",
    detail:
      "Every winner gets a hoodie sweatshirt! With every drink you buy, you get a number. Once an hour we put a chicken on a numbered mat in a pen. If she poops on your number, you win. First poop that hour will get you a hoodie, and the second poop, an exclusive Chicken S#!t Bingo hoodie. Every 2nd and 4th Sunday. First poo at 2:00.",
    kind: "House game",
    image: "/media/events/chicken-bingo-hoodie.jpg",
    imageAlt: "Chicken S#!t Bingo at Milk Street Distillery, the line-art flyer from the listing.",
  },
  {
    id: "wonderloaf-1031",
    date: "2026-10-31",
    start: "7:00 PM",
    end: "10:00 PM",
    title: "Wonderloaf Halloween Party",
    detail:
      "Wonderloaf is Classic Rock covering Zeppelin, Cash, Creedence, Heart, Neil, Stones – Rock and Roll Baby! Cover tunes - the Mighty Zep, Heart, Guitar driven raw, Some Outlaw Country, V8 powered never hybrid, Motorcycles not scooters, Tube amp not solid state, real live music no auto tune. Wear a costume, be judged, win prizes!",
    kind: "Music",
    image: "/media/events/wonderloaf-halloween.jpg",
    imageAlt: "Wonderloaf in costume at the still, the photograph on the Halloween listing.",
  },
];

export function formatEventDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  }).format(new Date(`${iso}T12:00:00-04:00`));
}

/** Calendar day in Branchville, YYYY-MM-DD. */
export function branchvilleDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const year = parts.find((part) => part.type === "year")?.value ?? "0000";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";
  return `${year}-${month}-${day}`;
}

/** Dates still on today’s calendar in Branchville. A finished day drops off; the rest keep their order. */
export function upcomingEvents(now = new Date(), limit?: number) {
  const today = branchvilleDate(now);
  const list = events
    .map((event, index) => ({ event, index }))
    .filter(({ event }) => event.date >= today)
    .sort((a, b) => a.event.date.localeCompare(b.event.date) || a.index - b.index)
    .map(({ event }) => event);
  return limit ? list.slice(0, limit) : list;
}
