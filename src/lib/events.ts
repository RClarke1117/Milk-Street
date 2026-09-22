export type DistilleryEvent = {
  id: string;
  date: string;
  start: string;
  end?: string;
  title: string;
  detail: string;
  kind: "Music" | "Food truck" | "House game" | "Show";
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
      "A short clip of a song, a card, a prize. Friday night in the tasting room.",
    kind: "House game",
  },
  {
    id: "smokin-mos-0926",
    date: "2026-09-26",
    start: "5:00 PM",
    end: "9:00 PM",
    title: "Smokin’ Mo’s BBQ",
    detail:
      "Brisket, ribs, pork, and chicken from the truck. Milk Street does not run a kitchen — dinner parks outside.",
    kind: "Food truck",
  },
  {
    id: "brian-st-john-0926",
    date: "2026-09-26",
    start: "7:00 PM",
    end: "10:00 PM",
    title: "Brian St. John Band",
    detail: "The band, fully electric, in the tasting room.",
    kind: "Music",
  },
  {
    id: "chicken-bingo-0927",
    date: "2026-09-27",
    start: "1:00 PM",
    end: "6:00 PM",
    title: "Chicken S#!t Bingo",
    detail:
      "Every drink gets a number. Once an hour a chicken walks a numbered mat. The first mark of the hour wins a drink; the second wins a shirt. Second and fourth Sundays. First drop at 2:00.",
    kind: "House game",
  },
  {
    id: "trivia-1004",
    date: "2026-10-04",
    start: "3:30 PM",
    end: "5:30 PM",
    title: "Trivia with DJ Ray",
    detail:
      "First and third Sundays. First place leaves with a $25 gift certificate.",
    kind: "House game",
  },
  {
    id: "chicken-bingo-1011",
    date: "2026-10-11",
    start: "1:00 PM",
    end: "6:00 PM",
    title: "Chicken S#!t Bingo",
    detail: "Second Sunday of the month. First drop at 2:00.",
    kind: "House game",
  },
  {
    id: "brandon-davis-1015",
    date: "2026-10-15",
    start: "Evening",
    title: "Brandon Davis",
    detail:
      "Country recording artist. His only New Jersey stop on the run, announced by the distillery for October 15. Ask the bar, or watch @milkstreetdistillery, for tickets.",
    kind: "Show",
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
