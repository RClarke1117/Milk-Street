import type { Metadata } from "next";
import Image from "next/image";
import { events, formatEventDate } from "@/lib/events";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Music, trucks, and house games at Milk Street Distillery.",
};

export default function EventsPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">The room</p>
        <h1>What is on, after the make.</h1>
        <p>
          Live music, a food truck, chicken bingo, trivia. The distillery does not run a restaurant. Dinner, when there is dinner, parks outside. Each date below uses the flyer from the public calendar, as of September 22, 2026.
        </p>
      </header>
      <section className="section">
        <div className="event-board">
          {events.map((event) => (
            <article key={event.id} className="event-card">
              <figure>
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 980px) 100vw, 22rem"
                />
              </figure>
              <div>
                <span className="kind">{event.kind}</span>
                <time dateTime={event.date}>{formatEventDate(event.date)}</time>
                <p className="event-when">
                  {event.start}
                  {event.end ? ` – ${event.end}` : ""}
                </p>
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <p>
          Private events and weddings go out on the Alco-Hauler. Write{" "}
          <a href={site.emailHref}>{site.email}</a> or call <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </section>
    </main>
  );
}
