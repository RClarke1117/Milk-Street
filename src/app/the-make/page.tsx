import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Make",
  description: "How Milk Street mashes, ferments, distills, ages, and bottles in Branchville.",
};

export default function MakePage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">01 — The make</p>
        <h1>The plant, not the party.</h1>
        <p>
          Mike and Gordon Geerhart left construction in 2015, rented a feed store built in the late 1800s, and spent two years plumbing a distillery into it. Milk Street opened in January 2017. It was the first legal distillery in Sussex County in more than seventy years.
        </p>
      </header>
      <section className="section">
        <div className="split">
          <figure>
            <Image src="/media/place/stills-wide.jpg" alt="Two copper column stills and the fermenters beside them." width={1600} height={1100} style={{ width: "100%", height: "auto" }} />
            <figcaption>The columns and the fermenters, in one room.</figcaption>
          </figure>
          <div className="prose">
            <p className="kicker">Grain to glass</p>
            <h2>What that phrase means here</h2>
            <p>
              Grain arrives. It is mashed. It ferments. It is distilled on the copper. Whiskey goes into wood in this building. Bottles are filled here. The gin is not a purchased neutral with a botanical tea bag dropped in. The rum starts as cane and molasses. The rice vodka starts as rice.
            </p>
            <p>
              Soulless Ginger is the house corn spirit rested on candied ginger. War Penny smokes part of its grain on cherry wood for 36 hours, ages in new oak, and finishes in a local beer barrel. A 1943 steel penny sits in the wax.
            </p>
            <p>
              In 2020, when sanitizer disappeared, the brothers turned the still toward it and gave it to first responders. Then they went back to whiskey.
            </p>
          </div>
        </div>
        <div className="split">
          <div className="prose">
            <p className="kicker">The wood</p>
            <h2>Barrels with a job</h2>
            <p>
              Murder Bourbon rests in new white American oak and is bottled at 100 proof. Dam Break Rye and McNally’s sit at 90. McNally’s uses seasoned bourbon barrels for an Irish-style whiskey made in New Jersey. War Penny leaves the oak and finishes in beer barrels, so the batch on the shelf this month is not a promise about the next one.
            </p>
            <Link className="btn" href="/spirits">
              Read the bottles
            </Link>
          </div>
          <figure>
            <Image src="/media/place/barrels.jpg" alt="Oak barrels stacked in the rack house." width={1400} height={1600} style={{ width: "100%", height: "auto" }} />
            <figcaption>The rack. New oak, and barrels with a past.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
