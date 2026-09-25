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
  const movedRef = useRef(false);
  const [on, setOn] = useState(false);
  const [index, setIndex] = useState(0);
  const [moved, setMoved] = useState(false);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOn(true);
      return;
    }
    let nudgeStart = 0;
    let nudgeEnd = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setOn(true);
        observer.disconnect();
        if (!window.matchMedia("(max-width: 640px)").matches) return;
        nudgeStart = window.setTimeout(() => {
          if (movedRef.current) return;
          setNudge(true);
          nudgeEnd = window.setTimeout(() => setNudge(false), 1300);
        }, 1100);
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(nudgeStart);
      window.clearTimeout(nudgeEnd);
    };
  }, []);

  function cardStep(node: HTMLDivElement) {
    const cards = node.querySelectorAll("article");
    if (cards.length < 2) return node.clientWidth;
    return cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
  }

  function onScroll() {
    const node = ref.current;
    if (!node) return;
    const next = Math.round(node.scrollLeft / cardStep(node));
    setIndex(Math.min(steps.length - 1, Math.max(0, next)));
    if (node.scrollLeft > 12 && !movedRef.current) {
      movedRef.current = true;
      setMoved(true);
      setNudge(false);
    }
  }

  function goTo(stepIndex: number) {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollTo({ left: stepIndex * cardStep(node), behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <div className="process-wrap">
      <div
        ref={ref}
        className={`process${on ? " is-in" : ""}${nudge ? " is-nudge" : ""}`}
        onScroll={onScroll}
      >
        {steps.map((step, stepIndex) => (
          <article
            key={step.n}
            className={stepIndex === index ? "is-active" : undefined}
            style={{ "--i": stepIndex } as React.CSSProperties}
          >
            <div className="process-photo">
              <img src={step.image} alt={step.alt} style={{ objectPosition: step.crop }} />
            </div>
            <div>
              <span>{step.n}</span>
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
            <button
              key={step.n}
              type="button"
              className={stepIndex === index ? "is-on" : undefined}
              aria-label={`${step.title}, step ${step.n}`}
              aria-current={stepIndex === index ? "step" : undefined}
              onClick={() => goTo(stepIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
