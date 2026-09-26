import type { Metadata } from "next";
import Link from "next/link";
import { UpcomingEvents } from "@/components/upcoming-events";
import { WheatFrame } from "@/components/wheat-frame";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Events at Milk Street Distillery.",
};

export default function EventsPage() {
  return (
    <main>
      <header className="page-hero">
        <WheatFrame tone="copper" />
        <p className="kicker kicker-rule">The calendar</p>
        <h1>Events</h1>
      </header>
      <section className="section">
        <UpcomingEvents />
        <p>
          <Link href="/alco-hauler">Alco-Hauler</Link> is available for weddings and private events.{" "}
          <a href={site.emailHref}>{site.email}</a> or <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </section>
    </main>
  );
}
