"use client";

import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div
      className="marquee"
      onPointerDown={(event) => event.currentTarget.classList.add("is-held")}
      onPointerUp={(event) => event.currentTarget.classList.remove("is-held")}
      onPointerCancel={(event) => event.currentTarget.classList.remove("is-held")}
      onPointerLeave={(event) => event.currentTarget.classList.remove("is-held")}
    >
      {children}
    </div>
  );
}
