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
          {spirit.note ? <p className="detail-note">{spirit.note}</p> : null}
          <div className="facts">
            {spirit.mash ? (
              <div>
                <span>Mash</span>
                {spirit.mash}
              </div>
            ) : null}
            <div>
              <span>Palate</span>
              {spirit.palate}
            </div>
            {spirit.award ? (
              <div>
                <span>Award</span>
                {spirit.award}
              </div>
            ) : null}
          </div>
          <div className="btn-row">
            <Link className="btn" href="/the-make">
              Distillery
            </Link>
            <Link className="btn btn-ghost" href="/bottles">
              Bottles
            </Link>
          </div>
        </div>
      </article>
      {pours.length > 0 ? (
        <section className="section">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: 0 }}>Spring / Summer 2026 menu</h2>
          <p className="fine">Drinks on the menu that name this bottle.</p>
          <ul className="footer-links">
            {pours.map((drink) => (
              <li key={drink.id}>
                <Link href={`/menu?pour=${drink.id}`}>{drink.name}</Link>
                <span>{drink.price}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
