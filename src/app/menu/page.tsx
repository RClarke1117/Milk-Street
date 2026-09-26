import type { Metadata } from "next";
import { Suspense } from "react";
import { IgGrid } from "@/components/ig-grid";
import { MenuBoard } from "@/components/menu-board";
import { WheatFrame } from "@/components/wheat-frame";
import { menuNote } from "@/lib/menu";
import { profile } from "@/lib/instagram";

export const metadata: Metadata = {
  title: "Tasting room menu",
  description: "Spring / Summer 2026 menu. Prices do not include tax.",
};

export default function MenuPage() {
  return (
    <main>
      <header className="page-hero">
        <WheatFrame tone="copper" />
        <p className="kicker">Our menu</p>
        <h1>Our menu</h1>
        <p>Spring / Summer 2026.</p>
        <p className="fine" style={{ color: "rgba(243,238,230,.7)" }}>{menuNote}</p>
      </header>
      <section className="section menu-section">
        <Suspense fallback={<p className="empty">Setting the list…</p>}>
          <MenuBoard />
        </Suspense>
      </section>
      <section className="section section-dark">
        <WheatFrame tone="copper" />
        <div className="section-head">
          <h2>Instagram</h2>
          <p>
            {profile.handle}. {profile.bio}
          </p>
        </div>
        <IgGrid />
        <div className="btn-row">
          <a className="btn" href={profile.href} target="_blank" rel="noreferrer">
            {profile.handle}
          </a>
        </div>
      </section>
    </main>
  );
}
