import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { spirits } from "@/lib/spirits";

export const metadata: Metadata = {
  title: "Spirits",
  description: "The Milk Street shelf: whiskey, gin, vodka, and rum made on site.",
};

const families = ["Whiskey", "Gin", "Vodka", "Rum"] as const;

export default function SpiritsPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">02 — The shelf</p>
        <h1>Eleven bottles. One floor.</h1>
        <p>Every spirit below is mashed, fermented, distilled, and bottled at 1 Milk Street. The tasting room does not pour anyone else’s liquor.</p>
      </header>
      {families.map((family) => (
        <section key={family} className="section" style={{ paddingTop: "3rem" }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginTop: 0 }}>{family}</h2>
          <div className="shelf">
            {spirits
              .filter((spirit) => spirit.family === family)
              .map((spirit) => (
                <Link key={spirit.slug} href={`/spirits/${spirit.slug}`} className="spirit-card">
                  <Image src={spirit.image} alt={spirit.imageAlt} fill sizes="33vw" />
                  <span>
                    <em>{spirit.proof ? `${spirit.proof} proof` : spirit.family}</em>
                    <strong>{spirit.name}</strong>
                  </span>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
