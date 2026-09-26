"use client";

import { FormEvent, useMemo, useState } from "react";
import { WheatFrame } from "@/components/wheat-frame";
import { site } from "@/lib/site";
import { formatMiles, houseStore, milesBetween, storeMaps, stores, type Store } from "@/lib/stores";

type Status = "idle" | "looking" | "ready" | "bad";

function StoreRow({ store, miles }: { store: Store; miles?: number }) {
  return (
    <li>
      <article className="store-row">
        <div>
          <h3>{store.name}</h3>
          <p>
            {store.line1}
            <br />
            {store.city}, {store.region} {store.postal}
          </p>
          {store.note ? <p className="store-note">{store.note}</p> : null}
          <p className="store-links">
            <a href={storeMaps(store)}>Directions</a>
            {store.phone ? (
              <>
                {" · "}
                <a href={`tel:${store.phone.replace(/[^\d+]/g, "")}`}>{store.phone}</a>
              </>
            ) : null}
            {store.house ? (
              <>
                {" · "}
                <a href={site.emailHref}>{site.email}</a>
              </>
            ) : null}
          </p>
        </div>
        {miles !== undefined ? <span className="store-miles">{formatMiles(miles)}</span> : null}
      </article>
    </li>
  );
}

export function StoreFinder() {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [origin, setOrigin] = useState<{ lat: number; lng: number; place: string } | null>(null);

  const houseMiles = origin ? milesBetween(origin, houseStore) : undefined;
  const nearby = useMemo(() => {
    if (!origin) return stores;
    return [...stores]
      .map((store) => ({ store, miles: milesBetween(origin, store) }))
      .sort((a, b) => a.miles - b.miles);
  }, [origin]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = zip.replace(/\D/g, "").slice(0, 5);
    if (code.length !== 5) {
      setStatus("bad");
      setOrigin(null);
      return;
    }
    setStatus("looking");
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${code}`);
      if (!response.ok) {
        setStatus("bad");
        setOrigin(null);
        return;
      }
      const data = (await response.json()) as {
        places?: { latitude: string; longitude: string; "place name": string; "state abbreviation": string }[];
      };
      const place = data.places?.[0];
      if (!place) {
        setStatus("bad");
        setOrigin(null);
        return;
      }
      setOrigin({
        lat: Number(place.latitude),
        lng: Number(place.longitude),
        place: `${place["place name"]}, ${place["state abbreviation"]}`,
      });
      setStatus("ready");
    } catch {
      setStatus("bad");
      setOrigin(null);
    }
  }

  return (
    <div className="menu-layout">
      <form className="menu-search store-search" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="store-zip">
          Zip code
        </label>
        <input
          id="store-zip"
          value={zip}
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={10}
          placeholder="Zip code"
          onChange={(event) => setZip(event.target.value.replace(/[^\d-]/g, "").slice(0, 10))}
        />
        <button type="submit" className="btn" disabled={status === "looking"}>
          {status === "looking" ? "Looking" : "Find"}
        </button>
      </form>
      {status === "bad" ? <p className="empty">That zip isn’t on the map. Try the five digits.</p> : null}
      {status === "ready" && origin ? (
        <p className="fine">
          {origin.place} {zip.replace(/\D/g, "").slice(0, 5)}.
        </p>
      ) : null}
      <div className="menu-sheet">
        <WheatFrame />
        <section className="menu-group">
          <header>
            <h2>The distillery</h2>
          </header>
          <ul>
            <StoreRow store={houseStore} miles={houseMiles} />
          </ul>
        </section>
        <section className="menu-group">
          <header>
            <h2>Liquor stores</h2>
          </header>
          <ul>
            {stores.length === 0 ? (
              <li>
                <p className="empty">
                  No liquor stores on this list yet. When the accounts are in, a zip will sort them by distance.
                </p>
              </li>
            ) : origin ? (
              nearby.map((row) => <StoreRow key={row.store.id} store={row.store} miles={row.miles} />)
            ) : (
              stores.map((store) => <StoreRow key={store.id} store={store} />)
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
