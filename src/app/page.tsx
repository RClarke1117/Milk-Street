import Image from "next/image";
import Link from "next/link";
import { Hours } from "@/components/hours";
import { IgGrid } from "@/components/ig-grid";
import { Reveal } from "@/components/reveal";
import { events, formatEventDate } from "@/lib/events";
import { profile } from "@/lib/instagram";
import { site } from "@/lib/site";
import { spirits } from "@/lib/spirits";

const steps = [
  {
    n: "01",
    title: "Mash",
    copy: "Corn, rye, barley, rice, cane. The grain hits the tun in this building.",
    image: "/media/place/mash.jpg",
    alt: "Stainless mash tun on the distillery floor.",
  },
  {
    n: "02",
    title: "Ferment",
    copy: "The wash sits in the fermenters until the sugar is gone and the beer is ready for the still.",
    image: "/media/place/fermenters.jpg",
    alt: "Open stainless fermenters.",
  },
  {
    n: "03",
    title: "Distill",
    copy: "Copper columns. The cut is made by hand, on the proof the grain wants.",
    image: "/media/place/column-still.jpg",
    alt: "Copper column still with a spirit safe.",
  },
  {
    n: "04",
    title: "Age",
    copy: "New white oak, seasoned bourbon barrels, and the occasional local beer barrel.",
    image: "/media/place/barrels.jpg",
    alt: "Barrels racked in the distillery.",
  },
  {
    n: "05",
    title: "Bottle",
    copy: "Filled, sealed, and labeled here. Nothing on the shelf was finished somewhere else.",
    image: "/media/place/still-house.jpg",
    alt: "The still house interior at Milk Street.",
  },
];

export default function HomePage() {
  const featured = spirits.slice(0, 5);
  const next = events.slice(0, 3);
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
          <p className="kicker">Branchville, New Jersey · Est. {site.established}</p>
          <h1 className="display">
            Grain
            <br />
            to <em>glass.</em>
          </h1>
          <p className="lede">
            Sussex County’s first legal distillery in more than seventy years. Everything on the shelf is mashed, fermented, distilled, and bottled in the old feed store at 1 Milk Street.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/the-make">
              The make
            </Link>
            <Link className="btn btn-ghost" href="/spirits">
              The shelf
            </Link>
          </div>
          <div className="hero-meta">
            <span>Tasting room Fri–Sun</span>
            <span>The still runs all week</span>
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
            <span className="num">01</span>Made here.
          </h2>
          <p className="prose">
            Milk Street is a distillery that keeps a tasting room, not a bar that happens to sell bottles. Brothers Mike and Gordon Geerhart built the plant with their own hands inside a late-1800s feed store. The street took its name from the Borden creameries that once stood on it. The whiskey takes its name from the work.
          </p>
        </div>
        <div className="split">
          <figure className="frame">
            <Image
              src="/media/place/building.jpg"
              alt="The historic feed-store building that houses the distillery."
              width={1400}
              height={1600}
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption>1 Milk Street, Building 1. The feed store is still the plant.</figcaption>
          </figure>
          <div>
            <p className="kicker">From the sack to the seal</p>
            <h3 className="display" style={{ fontSize: "clamp(2.8rem, 5vw, 4.4rem)" }}>
              Five rooms. One address.
            </h3>
            <p>
              Opened January 2017 with Black Vulture vodka and Wooden Leg rum. The shelf is larger now — bourbon, smoked bourbon, rye, Irish-style whiskey, two gins, rice vodka, ginger vodka — and the rule has not changed. If it is in the bottle, it was made on this floor.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/the-make">
                Walk the make
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-head">
          <h2>
            <span className="num">02</span>The make
          </h2>
          <p>No neutral shipped in from somewhere else and dressed up as craft. The column is in the room.</p>
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
            <span className="num">03</span>The shelf
          </h2>
          <p>Eleven spirits. Awards where they were earned. The tasting room pours these and nothing else.</p>
        </div>
        <div className="shelf">
          {featured.map((spirit, index) => (
            <Link
              key={spirit.slug}
              href={`/spirits/${spirit.slug}`}
              className={`spirit-card ${index === 0 ? "feature" : ""}`}
            >
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
            All eleven
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <div className="split">
          <div>
            <p className="kicker">After the bottle</p>
            <h2>
              <span className="num">04</span>The room is second.
            </h2>
            <p>
              Friday through Sunday the tasting room opens and the same spirits are poured by the glass. Tours leave every half hour. You do not book them. You walk in. Weekdays are for pickup, not for a bar shift — email first so someone is in the building.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/menu">
                Tasting-room list
              </Link>
              <Link className="btn btn-ghost" href="/tours">
                Tours
              </Link>
            </div>
          </div>
          <figure className="frame">
            <Image src="/media/place/bar.jpg" alt="The hand-built wooden bar in the tasting room." fill sizes="50vw" />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>
            <span className="num">05</span>From the feed
          </h2>
          <p>
            {profile.handle} · {profile.followers} followers. {profile.bio} Verified against the live profile. Not {profile.notThis}.
          </p>
        </div>
        <IgGrid limit={6} />
        <div className="btn-row">
          <a className="btn" href={profile.href} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <Link className="btn btn-ghost" href="/menu">
            Drinks, with the photos
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <div className="two">
          <div>
            <p className="kicker">When the door is open</p>
            <h2>Hours</h2>
            <Hours />
          </div>
          <div>
            <p className="kicker">Next in the room</p>
            <h2>On the calendar</h2>
            <div className="event-list">
              {next.map((event) => (
                <article key={event.id} className="event">
                  <div>
                    <time dateTime={event.date}>{formatEventDate(event.date)}</time>
                    <span className="kind">{event.start}</span>
                  </div>
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.detail}</p>
                  </div>
                </article>
              ))}
            </div>
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
