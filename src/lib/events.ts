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
};

/** Upcoming room dates taken from the distillery’s public calendar, as of 22 Sep 2026. */
export const events: DistilleryEvent[] = [
  {
    id: "music-bingo-0925",
    date: "2026-09-25",
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
    id: "smokin-mos-0926",
    date: "2026-09-26",
    start: "5:00 PM",
    end: "9:00 PM",
    title: "Smokin’ Mo’s BBQ",
    detail:
      "A succulent variety of wood smoked meats such as brisket, ribs, pork and chicken along with many delicious sides.",
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
    id: "chicken-bingo-1011",
    date: "2026-10-11",
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
    id: "brandon-davis-1015",
    date: "2026-10-15",
    start: "Evening",
    title: "Brandon Davis",
    detail: "Country recording artist Brandon Davis at Milk Street October 15.",
    kind: "Show",
    image: "/media/events/brandon-davis.jpg",
    imageAlt: "Brandon Davis, October 15, from the distillery’s Instagram announcement.",
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
