import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hours } from "@/components/hours";
import { WheatFrame } from "@/components/wheat-frame";

export const metadata: Metadata = {
  title: "Tours",
  description: "Tours run every half an hour. It is not necessary to book a tour.",
};

export default function ToursPage() {
  return (
    <main>
      <header className="page-hero">
        <WheatFrame tone="copper" />
        <p className="kicker">Tours & tastings</p>
        <h1>Tours & tastings</h1>
        <p>
          We offer weekly tours in addition to tasting sessions. Tours run every half an hour. It is not necessary to book a tour, just c&apos;mon in.
        </p>
        <p>
          Mike and Gordon fitted the building while they waited on the license. Water, sewer, gas, a bathroom, and the bar. The tour is that floor.
        </p>
        <p>
          Bottle and gift-card pickup only, Monday through Friday, 12–6. Please email to verify that we are in. Not open for the tasting room or tours.
        </p>
      </header>
      <section className="section">
        <figure>
          <Image src="/media/place/still-house.jpg" alt="The tasting room at Milk Street Distillery." width={1400} height={1600} style={{ width: "100%", height: "auto" }} />
        </figure>
      </section>
      <section className="section section-dark">
        <WheatFrame tone="copper" />
        <h2>Hours</h2>
        <Hours />
        <div className="btn-row">
          <Link className="btn" href="/visit">
            Visit
          </Link>
        </div>
      </section>
    </main>
  );
}
