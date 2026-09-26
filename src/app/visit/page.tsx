import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hours } from "@/components/hours";
import { WheatFrame } from "@/components/wheat-frame";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: "1 Milk Street, Building 1, Branchville, NJ. Hours, pickup, and the Alco-Hauler.",
};

export default function VisitPage() {
  return (
    <main>
      <header className="page-hero">
        <WheatFrame tone="copper" />
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
        <WheatFrame tone="copper" />
        <div className="split">
          <figure className="frame">
            <Image src="/media/ig/alco-hauler.jpg" alt="The Alco-Hauler trailer." fill sizes="50vw" />
          </figure>
          <div>
            <h2>Alco-Hauler</h2>
            <p>Available for weddings and private events. Keep the party going at home. Grab some bottles to go.</p>
            <div className="btn-row">
              <Link className="btn" href="/alco-hauler">
                Alco-Hauler
              </Link>
              <a className="btn btn-ghost" href={site.emailHref}>
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
