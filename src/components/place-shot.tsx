"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const hold = 4200;
const wipeMs = 1300;

export function PlaceShot() {
  const ref = useRef<HTMLElement>(null);
  const [showThen, setShowThen] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [wipe, setWipe] = useState<"" | "then" | "now">("");
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)), {
      threshold: 0.4,
    });
    observer.observe(node);
    const onVisibility = () => {
      if (document.hidden) setVisible(false);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const live = visible && !hovered && !reduce;

  const go = useCallback(() => {
    const next = !showThen;
    setShowThen(next);
    setCycle((value) => value + 1);
    if (!reduce) setWipe(next ? "then" : "now");
  }, [showThen, reduce]);

  useEffect(() => {
    if (!live) return;
    const id = window.setTimeout(go, hold);
    return () => window.clearTimeout(id);
  }, [live, cycle, go]);

  useEffect(() => {
    if (!wipe) return;
    const id = window.setTimeout(() => setWipe(""), wipeMs);
    return () => window.clearTimeout(id);
  }, [wipe]);

  const label = showThen ? "Then" : "Now";
  const wipeClass = wipe === "then" ? " is-to-then" : wipe === "now" ? " is-to-now" : "";

  return (
    <figure
      ref={ref}
      className={`place-shot${showThen ? " is-showing-then" : ""}${wipeClass}`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <img
        className="is-now"
        src="/media/place/building-now.jpg"
        alt="Milk Street Distillery at 1 Milk Street today."
        width={1200}
        height={609}
        loading="eager"
      />
      <span className="place-wipe">
        <img
          className="is-then"
          src="/media/place/building.jpg"
          alt="The historic feed-store building that houses the distillery."
          width={1500}
          height={1091}
          loading="eager"
        />
        {wipe ? <span key={cycle} className="place-edge" aria-hidden="true" /> : null}
      </span>
      <figcaption className="place-when">
        <span key={label} className="place-word">
          {label}
        </span>
        <span key={`${cycle}-${live}`} className={`place-timer${live ? " is-running" : ""}`} aria-hidden="true" />
      </figcaption>
      <button
        type="button"
        className="place-flip"
        onClick={go}
        aria-label={showThen ? "Show the building now" : "Show the building then"}
      />
    </figure>
  );
}
