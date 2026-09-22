import type { Metadata } from "next";
import Image from "next/image";
import { Hours } from "@/components/hours";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: "1 Milk Street, Building 1, Branchville, NJ. Hours, pickup, and the Alco-Hauler.",
};

export default function VisitPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Visit</p>
        <h1>Downtown Branchville. Building 1.</h1>
        <p>
          {site.address.full}. The tasting room is the public face. The work is the still behind it.
        </p>
      </header>
      <section className="section">
        <div className="visit-grid">
          <div>
            <p className="kicker">Find the door</p>
            <h2>Come to the feed store.</h2>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={site.emailHref}>{site.email}</a>
            </p>
            <p>
              Bottle and gift-card pickup is Monday through Friday, 12–6. Email first. The tasting room and tours are not open on those weekday hours. Friday at 4 the room opens and stays open until 10. Saturday 1–10. Sunday 1–6.
            </p>
            <div className="btn-row">
              <a className="btn" href={site.maps}>
                Directions
              </a>
              <a className="btn btn-ghost" href={site.phoneHref}>
                Call
              </a>
            </div>
            <Hours />
          </div>
          <iframe className="map" title="Map to Milk Street Distillery" src={site.mapEmbed} loading="lazy" />
        </div>
      </section>
      <section className="section section-dark">
        <div className="split">
          <figure className="frame">
            <Image src="/media/place/alco-hauler.jpg" alt="The Alco-Hauler, the distillery’s mobile bar." fill sizes="50vw" />
          </figure>
          <div>
            <p className="kicker">Off site</p>
            <h2>The Alco-Hauler</h2>
            <p>
              Weddings and private events. The trailer carries Milk Street spirits and someone who knows how to pour them. It is the distillery leaving the building, not a separate bar brand. Cards on to-go bottles add 3.99%.
            </p>
            <a className="btn" href={site.emailHref}>
              Ask about a date
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
