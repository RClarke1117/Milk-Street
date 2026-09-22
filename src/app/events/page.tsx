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
          Live music, a food truck, chicken bingo, trivia. The distillery does not run a restaurant. Dinner, when there is dinner, parks outside. Dates below are from the public calendar as of September 22, 2026.
        </p>
      </header>
      <section className="section">
        <div className="split">
          <figure>
            <Image src="/media/place/evening.jpg" alt="Evening in the tasting room." width={1400} height={1000} style={{ width: "100%", height: "auto" }} />
          </figure>
          <div className="event-list">
            {events.map((event) => (
              <article key={event.id} className="event" style={{ gridTemplateColumns: "1fr" }}>
                <div>
                  <span className="kind">{event.kind}</span>
                  <time dateTime={event.date}>{formatEventDate(event.date)}</time>
                  <p>
                    {event.start}
                    {event.end ? ` – ${event.end}` : ""}
                  </p>
                </div>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.detail}</p>
                </div>
              </article>
            ))}
            <p>
              Private events and weddings go out on the Alco-Hauler. Write{" "}
              <a href={site.emailHref}>{site.email}</a> or call <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
