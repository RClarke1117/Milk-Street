import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hours } from "@/components/hours";

export const metadata: Metadata = {
  title: "Tours",
  description: "Walk-in distillery tours every half hour during tasting-room hours.",
};

const walk = [
  ["The tun", "Where the grain is cooked. Corn, rye, barley, rice, or cane, depending on the day."],
  ["The fermenters", "Open stainless. This is the beer before it is a spirit."],
  ["The columns", "Copper. The cut is the whole argument."],
  ["The rack", "New oak, seasoned bourbon barrels, beer-barrel finishes."],
  ["The glass", "A taste of what you just walked past. The room is the last stop, not the first."],
];

export default function ToursPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Tours</p>
        <h1>Walk in. The still is the tour.</h1>
        <p>
          Tours run every half hour during tasting-room hours. You do not book a slot. Come in, ask, and go. Weekdays are pickup only — the tasting room and the tours are closed Monday through Thursday, and Friday before 4.
        </p>
      </header>
      <section className="section">
        <div className="split">
          <figure>
            <Image src="/media/place/fermenters.jpg" alt="Fermenters on the production floor." width={1400} height={1600} style={{ width: "100%", height: "auto" }} />
          </figure>
          <ol className="event-list" style={{ listStyle: "none", padding: 0 }}>
            {walk.map(([title, copy], index) => (
              <li key={title} className="event">
                <time>0{index + 1}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section-dark">
        <h2>When a tour can start</h2>
        <Hours />
        <div className="btn-row">
          <Link className="btn" href="/visit">
            Plan the visit
          </Link>
        </div>
      </section>
    </main>
  );
}
