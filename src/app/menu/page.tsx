import type { Metadata } from "next";
import { IgGrid } from "@/components/ig-grid";
import { MenuBoard } from "@/components/menu-board";
import { menuNote } from "@/lib/menu";
import { profile } from "@/lib/instagram";

export const metadata: Metadata = {
  title: "Tasting room menu",
  description: "Spring and summer 2026 pours. Every drink is a Milk Street spirit.",
};

export default function MenuPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">The room · secondary to the still</p>
        <h1>Pours of what we make.</h1>
        <p>
          Spring / Summer 2026. The list is cocktails, mules, martinis, shakers, and boba — all built on Milk Street spirits. Click any drink to open the photograph. Where Instagram has a real picture of that spirit, it sits inside the same window.
        </p>
        <p className="fine" style={{ color: "rgba(243,238,230,.7)" }}>{menuNote}</p>
      </header>
      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <MenuBoard />
      </section>
      <section className="section section-dark">
        <div className="section-head">
          <h2>On Instagram</h2>
          <p>
            {profile.handle}. Click a frame to open it here, or follow the link through to the post. The recent grid is heavy on the room and the calendar; the drink photograph in it is the Vexed gin and tonic.
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
