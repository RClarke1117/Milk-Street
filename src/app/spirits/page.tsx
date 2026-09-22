import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { spirits } from "@/lib/spirits";

export const metadata: Metadata = {
  title: "Spirits",
  description: "Kanpeki, Murder Bourbon, McNally's, Vexed, Blind Bettie, The Devil's Bark, War Penny, Dam Break Rye, Soulless Ginger, Wooden Leg Rum, and Black Vulture.",
};

const families = ["Whiskey", "Gin", "Vodka", "Rum"] as const;

export default function SpiritsPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Our spirits</p>
        <h1>Our spirits</h1>
        <p>We are a true grain to glass distillery, as everything is mashed, fermented, distilled and bottled on site.</p>
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
