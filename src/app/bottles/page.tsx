import type { Metadata } from "next";
import Link from "next/link";
import { Hours } from "@/components/hours";
import { StoreFinder } from "@/components/store-finder";
import { WheatFrame } from "@/components/wheat-frame";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bottles",
  description: "Find Milk Street Distillery bottles. Pickup at 1 Milk Street, Building 1, Branchville, NJ.",
};

export default function BottlesPage() {
  return (
    <main>
      <header className="page-hero">
        <WheatFrame tone="copper" />
        <p className="kicker">Bottles</p>
        <h1>Bottles</h1>
        <p>
          Type a zip. We&apos;ll list the liquor stores that carry Milk Street when the accounts are on this page. Until
          then, the bottles are at 1 Milk Street.
        </p>
        <p>
          Bottle and gift-card pickup only, Monday through Friday, 12–6. Please email to verify that we are in.
        </p>
      </header>
      <section className="section menu-section">
        <StoreFinder />
      </section>
      <section className="section section-dark">
        <WheatFrame tone="copper" />
        <h2>Hours</h2>
        <Hours />
        <div className="btn-row">
          <Link className="btn" href="/spirits">
            Our spirits
          </Link>
          <a className="btn btn-ghost" href={site.emailHref}>
            {site.email}
          </a>
        </div>
      </section>
    </main>
  );
}
