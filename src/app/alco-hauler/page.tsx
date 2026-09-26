import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WheatFrame } from "@/components/wheat-frame";
import { haulerMenu, haulerNote } from "@/lib/hauler";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alco-Hauler",
  description: "The Alco-Hauler is available for weddings and private events.",
};

export default function AlcoHaulerPage() {
  return (
    <main>
      <header className="page-hero">
        <WheatFrame tone="copper" />
        <p className="kicker">Private events</p>
        <h1>Alco-Hauler</h1>
        <p>
          Available for weddings and private events. Keep the party going at home. Grab some bottles to go.
        </p>
        <nav className="page-subnav" aria-label="Alco-Hauler">
          <a href="#hauler-menu">The menu</a>
          <a href="#hauler-book">Book it</a>
        </nav>
      </header>

      <section className="section">
        <figure className="hauler-photo">
          <Image
            src="/media/ig/alco-hauler.jpg"
            alt="The Alco-Hauler trailer."
            width={1080}
            height={1920}
            sizes="100vw"
          />
        </figure>
      </section>

      <section id="hauler-menu" className="section section-dark">
        <WheatFrame tone="copper" />
        <div className="section-head">
          <h2>The menu</h2>
          <p>{haulerNote}</p>
        </div>
        <div className="hauler-board">
          {haulerMenu.map((group) => (
            <div key={group.id} className="hauler-group">
              <p className="kicker">{group.title}</p>
              <ul>
                {group.drinks.map((drink) => (
                  <li key={drink.name}>
                    <div>
                      <strong>{drink.name}</strong>
                      {drink.detail ? <span>{drink.detail}</span> : null}
                    </div>
                    <em>{drink.price}</em>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="hauler-book" className="section">
        <div className="split">
          <figure>
            <Image
              src="/media/place/alco-hauler.jpg"
              alt="Alco-Hauler on tap cocktails and simple standards."
              width={1080}
              height={1350}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <div>
            <p className="kicker">Book it</p>
            <h2>Weddings and private events.</h2>
            <p>
              Write or call. {site.email} or {site.phone}.
            </p>
            <div className="btn-row">
              <a className="btn" href={site.emailHref}>
                {site.email}
              </a>
              <a className="btn btn-ghost" href={site.phoneHref}>
                {site.phone}
              </a>
            </div>
            <div className="btn-row">
              <Link className="btn btn-ghost" href="/events">
                Events
              </Link>
              <Link className="btn btn-ghost" href="/visit">
                Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
