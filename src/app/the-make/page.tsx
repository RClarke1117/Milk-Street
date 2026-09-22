import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Distillery",
  description: "We are a true grain to glass distillery, as everything is mashed, fermented, distilled and bottled on site.",
};

export default function MakePage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Distillery</p>
        <h1>We are a true grain to glass distillery.</h1>
        <p>
          Sussex County&apos;s first distillery in over 70 years, located in the small town of Branchville, nestled in the rural northwest corner of New Jersey. Everything is mashed, fermented, distilled and bottled on site.
        </p>
      </header>
      <section className="section">
        <div className="split">
          <figure>
            <Image src="/media/place/stills-wide.jpg" alt="Two copper column stills and the fermenters beside them." width={1600} height={1100} style={{ width: "100%", height: "auto" }} />
          </figure>
          <div className="prose">
            <h2>Mashed, fermented, distilled and bottled on site.</h2>
            <p>Whiskey is aged on site.</p>
            <Link className="btn" href="/spirits">
              Our spirits
            </Link>
          </div>
        </div>
        <div className="split">
          <figure>
            <Image src="/media/place/barrels.jpg" alt="Oak barrels at the distillery." width={1400} height={1600} style={{ width: "100%", height: "auto" }} />
          </figure>
          <figure>
            <Image src="/media/place/mash.jpg" alt="The mash tun." width={1400} height={1600} style={{ width: "100%", height: "auto" }} />
          </figure>
        </div>
      </section>
    </main>
  );
}
