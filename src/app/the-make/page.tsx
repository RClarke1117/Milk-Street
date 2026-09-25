import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WheatFrame } from "@/components/wheat-frame";

export const metadata: Metadata = {
  title: "Distillery",
  description: "We are a true grain to glass distillery, as everything is mashed, fermented, distilled and bottled on site.",
};

export default function MakePage() {
  return (
    <main>
      <header className="page-hero">
        <WheatFrame tone="copper" />
        <p className="kicker">Distillery</p>
        <h1>We are a true grain to glass distillery.</h1>
        <p>
          Sussex County&apos;s first distillery in over 70 years, located in the small town of Branchville, nestled in the rural northwest corner of New Jersey. Everything is mashed, fermented, distilled and bottled on site.
        </p>
      </header>
      <section className="section">
        <div className="split">
          <figure>
            <Image src="/media/place/stills-wide.jpg" alt="Open stainless tank on the distillery floor." width={1600} height={1100} style={{ width: "100%", height: "auto" }} />
          </figure>
          <div className="prose">
            <h2>Bringing it back, just in liquid form.</h2>
            <p>
              The building went up in the late 1800s as a feed and grain store. Gordon keeps a photograph over the fireplace: the early 1900s, sacks of grain stacked floor to ceiling, and the sliding doors that are still here. His line: bringing it back, just in liquid form.
            </p>
            <p>
              Mike and Gordon grew up in Franklin. In the winter of 2014 they were on a school job in Newark, cold and slushy, when Gordon saw that Governor Christie had relaxed the state’s distillery laws. In February 2015 they quit construction. “We quit our jobs, mortgaged our houses, and went full bore on this,” Mike said. Gordon’s shorter version: “Temporary insanity.”
            </p>
            <p>
              The building was a shell. They put in the water, sewer, and gas, built the tasting room, and waited nearly two years on the license. It was the first legal distillery in Sussex County since the Sussex County Distillery Co. burned in 1948. Milk Street opened in January 2017 with Black Vulture Vodka and Wooden Leg Rum. Both are still in the lineup.
            </p>
            <Link className="btn" href="/spirits">
              Our spirits
            </Link>
          </div>
        </div>
        <div className="split">
          <div className="prose">
            <h2>It’s on Milk Street.</h2>
            <p>
              Asked why the distillery has that name, Gordon said they were overflowing with creativity: it’s on Milk Street. The street sat between two creameries. Borden’s was behind the building. Across the road was the old Sussex creamery. Sussex County was a farming county then, more cows than people, and Mike says you can almost throw a football down the street.
            </p>
            <p>
              They mash, ferment, distill, age, and bottle here. Gordon’s point: some distilleries buy neutral spirit, and the label says bottled by. Theirs says distilled and bottled by.
            </p>
            <p>The distillery cats are Harry and Ester.</p>
            <p className="fine">
              Mike and Gordon Geerhart, in New Jersey Monthly (October 31, 2023), on Whiskey Lore, in the New Jersey Herald (January 10, 2017), and in NJ Skylands.
            </p>
          </div>
          <figure>
            <Image src="/media/place/barrels.jpg" alt="Harry or Ester, one of the distillery cats." width={1400} height={1600} style={{ width: "100%", height: "auto" }} />
          </figure>
        </div>
        <figure>
          <Image src="/media/place/mash.jpg" alt="The bottling line." width={1600} height={1100} style={{ width: "100%", height: "auto" }} />
        </figure>
      </section>
    </main>
  );
}
