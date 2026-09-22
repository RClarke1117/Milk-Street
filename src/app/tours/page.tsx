import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hours } from "@/components/hours";

export const metadata: Metadata = {
  title: "Tours",
  description: "Tours run every half an hour. It is not necessary to book a tour.",
};

export default function ToursPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Tours & tastings</p>
        <h1>Tours & tastings</h1>
        <p>
          We offer weekly tours in addition to tasting sessions. Tours run every half an hour. It is not necessary to book a tour, just c&apos;mon in.
        </p>
        <p>
          Bottle and gift-card pickup only, Monday through Friday, 12–6. Please email to verify that we are in. Not open for the tasting room or tours. Friday tasting room 4–10. Saturday 1–10. Sunday 1–6.
        </p>
      </header>
      <section className="section">
        <figure>
          <Image src="/media/place/fermenters.jpg" alt="Fermenters on the production floor." width={1400} height={1600} style={{ width: "100%", height: "auto" }} />
        </figure>
      </section>
      <section className="section section-dark">
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
