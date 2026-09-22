import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { drinksUsing } from "@/lib/menu";
import { getSpirit, spirits } from "@/lib/spirits";

export function generateStaticParams() {
  return spirits.map((spirit) => ({ slug: spirit.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const spirit = getSpirit(slug);
    if (!spirit) return { title: "Spirit" };
    return { title: spirit.name, description: spirit.lede };
  });
}

export default async function SpiritPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const spirit = getSpirit(slug);
  if (!spirit) notFound();
  const pours = drinksUsing(spirit.slug);

  return (
    <main>
      <article className="detail-hero">
        <Image src={spirit.image} alt={spirit.imageAlt} width={1400} height={1800} priority />
        <div className="detail-copy">
          <p className="kicker">{spirit.family}{spirit.proof ? ` · ${spirit.proof} proof` : ""}</p>
          <h1>{spirit.name}</h1>
          <p className="lede">{spirit.lede}</p>
          <div className="facts">
            <div>
              <span>Mash</span>
              {spirit.mash}
            </div>
            <div>
              <span>Palate</span>
              {spirit.palate}
            </div>
            <div>
              <span>Award</span>
              {spirit.award ?? "House spirit"}
            </div>
          </div>
        </div>
      </article>
      <section className="section">
        <div className="split">
          <div className="prose">
            <p className="kicker">How it is made</p>
            <h2>On this floor</h2>
            <p>{spirit.story}</p>
            <Link className="btn" href="/the-make">
              The make
            </Link>
          </div>
          <div>
            <p className="kicker">Poured as</p>
            <h2>In the tasting room</h2>
            {pours.length === 0 ? (
              <p>Ask the bar for a neat pour or a flight.</p>
            ) : (
              <ul className="footer-links">
                {pours.map((drink) => (
                  <li key={drink.id}>
                    <Link href={`/menu#${drink.id}`}>{drink.name}</Link>
                    <span>{drink.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
