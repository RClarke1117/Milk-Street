"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DrinkSlot } from "@/components/drink-slot";
import { PhotoModal, type Shot } from "@/components/photo-modal";
import { drinks, menuCategories, type Drink, type MenuCategory } from "@/lib/menu";

function toShot(drink: Drink): Shot {
  return {
    src: drink.image,
    alt: drink.imageAlt ?? drink.name,
    slot: drink.image ? undefined : { name: drink.name, category: drink.category },
    title: drink.name,
    kicker: drink.category,
    body: drink.description,
    price: drink.price,
    credit: drink.credit,
    href: drink.spiritSlug ? `/spirits/${drink.spiritSlug}` : undefined,
    hrefLabel: drink.spiritSlug ? `The spirit · ${drink.spirit}` : undefined,
    hint: "Arrow keys move through the list.",
  };
}

export function MenuBoard() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<MenuCategory | "All">("All");
  const [query, setQuery] = useState("");
  const [shot, setShot] = useState<Shot | null>(null);
  const [cursor, setCursor] = useState<number | null>(null);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return drinks.filter((drink) => {
      const inCategory = active === "All" || drink.category === active;
      if (!inCategory) return false;
      if (!needle) return true;
      return `${drink.name} ${drink.description} ${drink.spirit} ${drink.category}`
        .toLowerCase()
        .includes(needle);
    });
  }, [active, query]);

  function writePour(id: string | null) {
    const next = new URLSearchParams(params.toString());
    if (id) next.set("pour", id);
    else next.delete("pour");
    const search = next.toString();
    router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
  }

  function openDrink(drink: Drink) {
    const index = visible.findIndex((item) => item.id === drink.id);
    setCursor(index >= 0 ? index : 0);
    setShot(toShot(drink));
    writePour(drink.id);
  }

  function close() {
    setShot(null);
    setCursor(null);
    writePour(null);
  }

  useEffect(() => {
    const pour = params.get("pour");
    if (!pour) return;
    let timer = 0;
    let cancelled = false;
    const tryOpen = () => {
      if (cancelled) return;
      if (sessionStorage.getItem("msd-age") !== "1") {
        timer = window.setTimeout(tryOpen, 300);
        return;
      }
      const drink = drinks.find((item) => item.id === pour);
      if (!drink) return;
      setShot(toShot(drink));
      const index = visible.findIndex((item) => item.id === drink.id);
      setCursor(index >= 0 ? index : 0);
    };
    tryOpen();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
    // Open from the URL once the age gate has cleared. Filter changes should not reopen.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    if (cursor === null || visible.length === 0) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      const next = (cursor + delta + visible.length) % visible.length;
      const drink = visible[next];
      setCursor(next);
      setShot(toShot(drink));
      writePour(drink.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cursor, visible, params, pathname, router]);

  const groups = menuCategories
    .map((category) => ({
      category,
      items: visible.filter((drink) => drink.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <div className="menu-search">
        <label className="sr-only" htmlFor="menu-find">
          Search the menu
        </label>
        <input
          id="menu-find"
          value={query}
          placeholder="Search a drink, a spirit, a flavor"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="menu-layout">
        <nav className="menu-nav" aria-label="Menu categories">
          <button type="button" className={active === "All" ? "is-on" : ""} onClick={() => setActive("All")}>
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
          {groups.length === 0 ? (
            <p className="empty">Nothing on the list matches that. Try the spirit, or clear the search.</p>
          ) : null}
          {groups.map((group) => (
            <section key={group.category} className="menu-group">
              <header>
                <h2>{group.category}</h2>
              </header>
              <ul>
                {group.items.map((drink) => (
                  <li key={drink.id} id={drink.id}>
                    <button type="button" className="menu-row" onClick={() => openDrink(drink)}>
                      <span className="menu-thumb">
                        {drink.image ? (
                          <img src={drink.image} alt="" />
                        ) : (
                          <DrinkSlot name={drink.name} size="thumb" />
                        )}
                      </span>
                      <span className="menu-copy">
                        <span className="menu-name">{drink.name}</span>
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
      <PhotoModal shot={shot} onClose={close} />
    </>
  );
}
