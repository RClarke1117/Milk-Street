import type { Metadata } from "next";
import Image from "next/image";
import { events, formatEventDate } from "@/lib/events";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Events at Milk Street Distillery.",
};

export default function EventsPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Events</p>
        <h1>Events</h1>
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
          Alco-Hauler is available for weddings and private events.{" "}
          <a href={site.emailHref}>{site.email}</a> or <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </section>
    </main>
  );
}
