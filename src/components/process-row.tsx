"use client";

import { useEffect, useRef, useState } from "react";

export type ProcessStep = {
  n: string;
  title: string;
  image: string;
  alt: string;
  line: string;
  crop?: string;
};

export function ProcessRow({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [index, setIndex] = useState(0);
  const [moved, setMoved] = useState(false);

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

  function onScroll() {
    const node = ref.current;
    if (!node) return;
    const card = node.querySelector("article");
    const width = card?.getBoundingClientRect().width || node.clientWidth;
    const next = Math.round(node.scrollLeft / (width + 12));
    setIndex(Math.min(steps.length - 1, Math.max(0, next)));
    if (node.scrollLeft > 12) setMoved(true);
  }

  return (
    <div className="process-wrap">
      <div ref={ref} className={`process${on ? " is-in" : ""}`} onScroll={onScroll}>
        {steps.map((step, stepIndex) => (
          <article key={step.n}>
            <img
              src={step.image}
              alt={step.alt}
              style={{
                objectPosition: step.crop,
                animationDelay: `${stepIndex * 0.12}s`,
              }}
            />
            <div>
              <span style={{ animationDelay: `${0.2 + stepIndex * 0.12}s` }}>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.line}</p>
            </div>
          </article>
        ))}
      </div>
      <div className={`process-swipe${moved ? " is-moved" : ""}`}>
        <span>Swipe</span>
        <div>
          {steps.map((step, stepIndex) => (
            <i key={step.n} className={stepIndex === index ? "is-on" : undefined} />
          ))}
        </div>
      </div>
    </div>
  );
}
