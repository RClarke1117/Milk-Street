"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { formatEventDate, upcomingEvents, type DistilleryEvent } from "@/lib/events";

export function UpcomingEvents({ variant = "board" }: { variant?: "board" | "preview" }) {
  const limit = variant === "preview" ? 3 : undefined;
  const [list, setList] = useState<DistilleryEvent[]>(() => upcomingEvents(new Date(), limit));

  useEffect(() => {
    const tick = () => setList(upcomingEvents(new Date(), limit));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [limit]);

  if (list.length === 0) return <p>No dates listed.</p>;

  if (variant === "preview") {
    return (
      <div className="event-list">
        {list.map((event) => (
          <article key={event.id} className="event event-next">
            <figure>
              <Image src={event.image} alt="" width={240} height={240} />
            </figure>
            <div>
              <time dateTime={event.date}>{formatEventDate(event.date)}</time>
              <span className="kind">{event.start}</span>
              <h3>{event.title}</h3>
              <p>{event.detail}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="event-board">
      {list.map((event) => (
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
  );
}
