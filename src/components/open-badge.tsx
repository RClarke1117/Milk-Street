"use client";

import { useEffect, useState } from "react";

type Status = "open" | "pickup" | "closed";

function readStatus(now = new Date()): Status {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const day = parts.find((part) => part.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const room: Record<string, [number, number] | undefined> = {
    Fri: [16, 22],
    Sat: [13, 22],
    Sun: [13, 18],
  };
  const window = room[day];
  if (window && hour >= window[0] && hour < window[1]) return "open";
  const pickupDay = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(day);
  if (pickupDay && hour >= 12 && hour < 18 && !(day === "Fri" && hour >= 16)) return "pickup";
  return "closed";
}

const copy: Record<Status, { full: string; short: string }> = {
  open: { full: "Tasting room open", short: "Open" },
  pickup: { full: "Pickup only — email ahead", short: "Pickup" },
  closed: { full: "Tasting room closed", short: "Closed" },
};

export function OpenBadge() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const tick = () => setStatus(readStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) return null;
  return (
    <p className={`open-pill ${status === "open" ? "is-open" : "is-shut"}`}>
      <i />
      <span className="open-pill-full">{copy[status].full}</span>
      <span className="open-pill-short">{copy[status].short}</span>
    </p>
  );
}
