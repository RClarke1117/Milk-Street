import Image from "next/image";
import Link from "next/link";
import { Hours } from "@/components/hours";
import { WheatFrame } from "@/components/wheat-frame";
import { IgGrid } from "@/components/ig-grid";
import { PlaceShot } from "@/components/place-shot";
import { Marquee } from "@/components/marquee";
import { ProcessRow } from "@/components/process-row";
import { UpcomingEvents } from "@/components/upcoming-events";
import { profile } from "@/lib/instagram";
import { hours, site } from "@/lib/site";
import { spirits } from "@/lib/spirits";

const steps: {
  n: string;
  title: string;
  image: string;
  alt: string;
  line: string;
  crop?: string;
}[] = [
  {
    n: "01",
    title: "Mash",
    image: "/media/place/process-mash.jpg",
    alt: "Milled grain poured into the mash tun.",
    line: "Milled grain into the tun.",
    crop: "38% 58%",
  },
  {
    n: "02",
    title: "Ferment",
    image: "/media/place/process-ferment.jpg",
    alt: "A fermenting wash with a thick head of krausen.",
    line: "The wash working in the drum.",
    crop: "50% 68%",
  },
  {
    n: "03",
    title: "Distill",
    image: "/media/place/process-distill.jpg",
    alt: "New make spirit running from the still into the spirit tub.",
    line: "New make off the still.",
    crop: "50% 22%",
  },
  {
    n: "04",
    title: "Age",
    image: "/media/place/bar.jpg",
    alt: "Oak barrels racked in the distillery.",
    line: "Rested in oak barrels.",
  },
  {
    n: "05",
    title: "Bottle",
    image: "/media/place/mash.jpg",
    alt: "The bottling line at Milk Street.",
    line: "Filled on the line.",
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
          <h1 className="display hero-title" aria-label="Grain to glass.">
            <span className="hero-line" aria-hidden="true">
              {"Grain".split("").map((letter, index) => (
                <span key={letter} style={{ animationDelay: `${180 + index * 42}ms` }}>
                  {letter}
                </span>
              ))}
            </span>
            <span className="hero-line" aria-hidden="true">
              {"to ".split("").map((letter, index) => (
                <span key={`to-${index}`} style={{ animationDelay: `${620 + index * 42}ms` }}>
                  {letter === " " ? "\u00a0" : letter}
                </span>
              ))}
              <em>
                {"glass.".split("").map((letter, index) => (
                  <span key={`glass-${index}`} style={{ animationDelay: `${760 + index * 42}ms` }}>
                    {letter}
                  </span>
                ))}
              </em>
            </span>
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
            {hours.map((row) => (
              <span key={row.days}>
                {row.days} {row.room}
              </span>
            ))}
          </div>
        </div>
        <span className="hero-cue" aria-hidden="true">
          <i />
        </span>
      </section>

      <Marquee>
        <div className="marquee-track">
          {[...names, ...names].map((name, index) => (
            <span key={`${name}-${index}`}>{name} ·</span>
          ))}
        </div>
      </Marquee>

      <section className="section">
        <div className="section-head">
          <h2>
            <span className="num">01</span>We&apos;re located in downtown Branchville.
          </h2>
        </div>
        <div className="split place">
          <PlaceShot />
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
        <ProcessRow steps={steps} />
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
          <Link href="/spirits" className="spirit-card spirit-more">
            <Image
              src="/media/place/pour.jpg"
              alt="The rest of the Milk Street bottles on the tasting-room shelf."
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
            />
            <WheatFrame tone="copper" />
            <span>
              <em>The rest of the shelf</em>
              <strong>More spirits</strong>
            </span>
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
