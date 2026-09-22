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
        <h1>We&apos;re located in downtown Branchville.</h1>
        <p>{site.address.full}</p>
        <p>
          Just off US-206. Gordon calls it the gateway to Sussex County’s parks, and to Branchville. Mike wanted a nightspot for the town: a down-home bar, and a food truck on Saturday evenings.
        </p>
      </header>
      <section className="section">
        <div className="visit-grid">
          <div>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={site.emailHref}>{site.email}</a>
            </p>
            <p>
              Bottle and gift-card pickup only, Monday through Friday, 12–6. Please email to verify that we are in. Not open for the tasting room or tours. Friday tasting room 4–10. Saturday 1–10. Sunday 1–6.
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
            <Image src="/media/place/alco-hauler.jpg" alt="The Alco-Hauler." fill sizes="50vw" />
          </figure>
          <div>
            <h2>Alco-Hauler</h2>
            <p>Available for weddings and private events.</p>
            <p>Keep the party going at home. Grab some bottles to go.</p>
            <p>If you pay by card, a 3.99% fee is added.</p>
            <a className="btn" href={site.emailHref}>
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
