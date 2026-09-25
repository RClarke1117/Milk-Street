import Image from "next/image";
import Link from "next/link";
import { Hours } from "@/components/hours";
import { WheatFrame } from "@/components/wheat-frame";
import { IgGrid } from "@/components/ig-grid";
import { Reveal } from "@/components/reveal";
import { UpcomingEvents } from "@/components/upcoming-events";
import { profile } from "@/lib/instagram";
import { site } from "@/lib/site";
import { spirits } from "@/lib/spirits";

const steps = [
  {
    n: "01",
    title: "Mash",
    copy: "Mashed on site.",
    image: "/media/ig/dam-break-process.jpg",
    alt: "Rye grain poured into the mash.",
  },
  {
    n: "02",
    title: "Ferment",
    copy: "Fermented on site.",
    image: "/media/place/stills-wide.jpg",
    alt: "Open stainless tank on the distillery floor.",
  },
  {
    n: "03",
    title: "Distill",
    copy: "Distilled on site.",
    image: "/media/place/back-bar.jpg",
    alt: "New make spirit running from the still.",
  },
  {
    n: "04",
    title: "Age",
    copy: "Whiskey is aged on site.",
    image: "/media/place/bar.jpg",
    alt: "Oak barrels racked in the distillery.",
  },
  {
    n: "05",
    title: "Bottle",
    copy: "Bottled on site.",
    image: "/media/place/mash.jpg",
    alt: "The bottling line at Milk Street.",
  },
];

export default function HomePage() {
  const featured = spirits.slice(0, 5);
  const names = spirits.map((spirit) => spirit.name);

  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/media/place/column-still.jpg"
            alt="The copper column still at Milk Street Distillery."
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-copy">
          <p className="kicker">Branchville, New Jersey</p>
          <h1 className="display">
            Grain
            <br />
            to <em>glass.</em>
          </h1>
          <p className="lede">
            Sussex County&apos;s first distillery in over 70 years, located in the small town of Branchville, nestled in the rural northwest corner of New Jersey. We are a true grain to glass distillery, as everything is mashed, fermented, distilled and bottled on site.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/spirits">
              Our spirits
            </Link>
            <Link className="btn btn-ghost" href="/tours">
              Tours
            </Link>
          </div>
          <div className="hero-meta">
            <span>Friday 4–10</span>
            <span>Saturday 1–10</span>
            <span>Sunday 1–6</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...names, ...names].map((name, index) => (
            <span key={`${name}-${index}`}>{name} ·</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="section-head">
          <h2>
            <span className="num">01</span>We&apos;re located in downtown Branchville.
          </h2>
        </div>
        <div className="split place">
          <figure className="place-shot">
            <Image
              className="is-now"
              src="/media/place/building-now.jpg"
              alt="Milk Street Distillery at 1 Milk Street today."
              width={1200}
              height={609}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <Image
              className="is-then"
              src="/media/place/building.jpg"
              alt="The historic feed-store building that houses the distillery."
              width={1500}
              height={1091}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </figure>
          <div>
            <p className="kicker">Visit</p>
            <h3>1 Milk Street, Building 1</h3>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={site.emailHref}>{site.email}</a>
            </p>
            <div className="btn-row">
              <Link className="btn" href="/visit">
                Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <WheatFrame tone="copper" />
        <div className="section-head">
          <h2>
            <span className="num">02</span>Our distillery
          </h2>
          <p>
            We are a true grain to glass distillery, as everything is mashed, fermented, distilled and bottled on site.
            Mike and Gordon Geerhart opened in January 2017, in a late-1800s feed store. “We’re Sussex County boys and we love it here,” Mike told New Jersey Monthly.
          </p>
        </div>
        <div className="btn-row">
          <Link className="btn" href="/the-make">
            Distillery
          </Link>
        </div>
        <div className="process">
          {steps.map((step) => (
            <Reveal key={step.n}>
              <article>
                <img src={step.image} alt={step.alt} />
                <div>
                  <span>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>
            <span className="num">03</span>Our spirits
          </h2>
        </div>
        <div className="shelf">
          {featured.map((spirit) => (
            <Link key={spirit.slug} href={`/spirits/${spirit.slug}`} className="spirit-card">
              <Image src={spirit.image} alt={spirit.imageAlt} fill sizes="(max-width: 900px) 100vw, 33vw" />
              <span>
                <em>{spirit.family}{spirit.proof ? ` · ${spirit.proof} proof` : ""}</em>
                <strong>{spirit.name}</strong>
              </span>
            </Link>
          ))}
        </div>
        <div className="btn-row">
          <Link className="btn" href="/spirits">
            Our spirits
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <WheatFrame tone="copper" />
        <div className="split">
          <div>
            <p className="kicker">Tours &amp; tastings</p>
            <h2>
              <span className="num">04</span>Tours &amp; tastings
            </h2>
            <p>
              We offer weekly tours in addition to tasting sessions. Tours run every half an hour. It is not necessary to book a tour, just c&apos;mon in.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/menu">
                Our menu
              </Link>
              <Link className="btn btn-ghost" href="/tours">
                Tours
              </Link>
            </div>
          </div>
          <figure className="frame">
            <Image src="/media/place/still-house.jpg" alt="The tasting room bar." fill sizes="50vw" />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>
            <span className="num">05</span>Instagram
          </h2>
          <p>
            {profile.handle}. {profile.bio}
          </p>
        </div>
        <IgGrid limit={6} />
        <div className="btn-row">
          <a className="btn" href={profile.href} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <Link className="btn btn-ghost" href="/menu">
            Our menu
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <WheatFrame tone="copper" />
        <div className="two">
          <div>
            <h2>Hours</h2>
            <Hours />
          </div>
          <div>
            <h2>Events</h2>
            <UpcomingEvents variant="preview" />
            <div className="btn-row">
              <Link className="btn" href="/events">
                All dates
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
