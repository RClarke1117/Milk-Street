"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PhotoModal, type Shot } from "@/components/photo-modal";
import { drinks, menuCategories, type Drink } from "@/lib/menu";

function toShot(drink: Drink): Shot {
  return {
    src: drink.image,
    alt: drink.imageAlt,
    title: drink.name,
    kicker: drink.category,
    body: drink.description,
    price: drink.price,
    credit: drink.credit,
    href: drink.spiritSlug ? `/spirits/${drink.spiritSlug}` : undefined,
    hrefLabel: drink.spiritSlug ? `The spirit · ${drink.spirit}` : undefined,
    secondarySrc: drink.instagramImage,
    secondaryAlt: drink.instagramAlt,
    secondaryHref: drink.instagramHref,
    secondaryLabel: "This spirit on Instagram",
  };
}

export function MenuBoard() {
  const [active, setActive] = useState<(typeof menuCategories)[number] | "All">("All");
  const [shot, setShot] = useState<Shot | null>(null);

  const visible = useMemo(
    () => (active === "All" ? drinks : drinks.filter((drink) => drink.category === active)),
    [active],
  );

  const groups = menuCategories
    .map((category) => ({
      category,
      items: visible.filter((drink) => drink.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <div className="menu-layout">
        <nav className="menu-nav" aria-label="Menu categories">
          <button
            type="button"
            className={active === "All" ? "is-on" : ""}
            onClick={() => setActive("All")}
          >
            All
          </button>
          {menuCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={active === category ? "is-on" : ""}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </nav>
        <div>
          {groups.map((group) => (
            <section key={group.category} className="menu-group" id={group.category.toLowerCase().replace(/[^a-z]+/g, "-")}>
              <header>
                <h2>{group.category}</h2>
                <span>{group.items[0]?.price.startsWith("$") ? "" : ""}</span>
              </header>
              <ul>
                {group.items.map((drink) => (
                  <li key={drink.id} id={drink.id}>
                    <button type="button" className="menu-row" onClick={() => setShot(toShot(drink))}>
                      <span className="menu-thumb">
                        <img src={drink.image} alt="" />
                      </span>
                      <span className="menu-copy">
                        <span className="menu-name">
                          {drink.name}
                          {drink.instagramImage ? <i>IG</i> : null}
                        </span>
                        <span className="menu-desc">{drink.description}</span>
                        <span className="menu-spirit">{drink.spirit}</span>
                      </span>
                      <span className="menu-price">{drink.price}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="menu-foot">
            Built only with what we distill. A spirit page sits behind every named bottle.{" "}
            <Link href="/spirits">See the shelf</Link>.
          </p>
        </div>
      </div>
      <PhotoModal shot={shot} onClose={() => setShot(null)} />
    </>
  );
}
