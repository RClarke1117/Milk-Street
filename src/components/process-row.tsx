"use client";

import { useEffect, useRef, useState } from "react";

export type ProcessStep = {
  n: string;
  title: string;
  image: string;
  alt: string;
  crop?: string;
};

export function ProcessRow({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setOn(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`process${on ? " is-in" : ""}`}>
      {steps.map((step, index) => (
        <article key={step.n}>
          <img
            src={step.image}
            alt={step.alt}
            style={{
              objectPosition: step.crop,
              animationDelay: `${index * 0.12}s`,
            }}
          />
          <div>
            <span style={{ animationDelay: `${0.2 + index * 0.12}s` }}>{step.n}</span>
            <h3>{step.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
