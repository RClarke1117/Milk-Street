"use client";

import { useEffect, useState } from "react";

export function PlaceShot() {
  const [showThen, setShowThen] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const hold = window.setInterval(() => setShowThen((value) => !value), 4200);
    return () => window.clearInterval(hold);
  }, []);

  return (
    <figure className={`place-shot${showThen ? " is-showing-then" : ""}`}>
      <figcaption className="place-when">{showThen ? "Then" : "Now"}</figcaption>
      <img
        className="is-now"
        src="/media/place/building-now.jpg"
        alt="Milk Street Distillery at 1 Milk Street today."
        width={1200}
        height={609}
        loading="eager"
      />
      <img
        className="is-then"
        src="/media/place/building.jpg"
        alt="The historic feed-store building that houses the distillery."
        width={1500}
        height={1091}
        loading="eager"
      />
    </figure>
  );
}
