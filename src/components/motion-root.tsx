"use client";

import { useEffect } from "react";

// Keep in sync with the reveal selectors in motion.css.
const targets = [
  ".section-head > p",
  ".section-head h2",
  ".split > div",
  ".split > figure",
  ".split h2",
  ".two > div",
  ".two h2",
  ".visit-grid > *",
  ".section > h2",
  ".section > p",
  ".section > figure",
  ".section > .btn-row",
  ".page-hero > .kicker",
  ".page-hero h1",
  ".page-hero > p",
  ".page-subnav",
  ".frame",
  ".place-shot",
  ".hauler-photo",
  ".hauler-group",
  ".hours-row",
  ".event",
  ".event-card figure",
  ".event-card > div",
  ".menu-search",
  ".menu-group header",
  ".menu-group li",
  ".shelf > .spirit-card",
  ".ig-grid > .ig-cell",
  ".detail-hero > img",
  ".detail-copy > .kicker",
  ".detail-copy h1",
  ".detail-copy > .lede",
  ".detail-copy > .detail-note",
  ".facts > div",
  ".wheat-frame",
  ".footer-top > div",
  ".footer-bottom",
].join(",");

declare global {
  interface Window {
    __msdMotion?: boolean;
  }
}

export function MotionRoot({ active }: { active: boolean }) {
  useEffect(() => {
    window.__msdMotion = true;
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-revealed", active);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const root = document.documentElement;
    if (!root.classList.contains("m")) return;

    const seen = new WeakSet<Element>();
    const pending = new Set<HTMLElement>();
    const show = (el: Element, order: number) => {
      (el as HTMLElement).style.setProperty("--i", String(Math.min(order, 6)));
      el.setAttribute("data-in", "");
      pending.delete(el as HTMLElement);
      observer.unobserve(el);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        let order = 0;
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target, order++);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    const scan = () => {
      document.querySelectorAll("#content, .site-footer").forEach((scope) => {
        scope.querySelectorAll<HTMLElement>(targets).forEach((el) => {
          if (seen.has(el)) return;
          seen.add(el);
          pending.add(el);
          observer.observe(el);
        });
      });
    };

    // The last strip of the page can sit inside the bottom margin and never cross it.
    let frame = 0;
    const flushAtBottom = () => {
      frame = 0;
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (!bottom) return;
      let order = 0;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) show(el, order++);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(flushAtBottom);
    };

    let queued = 0;
    const mutations = new MutationObserver(() => {
      if (queued) return;
      queued = requestAnimationFrame(() => {
        queued = 0;
        scan();
      });
    });

    scan();
    mutations.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(queued);
    };
  }, [active]);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest?.<HTMLElement>(".spirit-card, .ig-cell");
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - box.left}px`);
      card.style.setProperty("--my", `${event.clientY - box.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
