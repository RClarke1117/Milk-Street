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

function afterPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function imagesReady(el: HTMLElement) {
  const imgs = [
    ...(el instanceof HTMLImageElement ? [el] : []),
    ...Array.from(el.querySelectorAll("img")),
  ];
  if (!imgs.length) return Promise.resolve();
  return Promise.all(
    imgs.map((img) => {
      const loaded =
        img.complete && img.naturalWidth > 0
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener("load", () => resolve(), { once: true });
              img.addEventListener("error", () => resolve(), { once: true });
            });
      return loaded.then(() => img.decode?.().catch(() => undefined));
    }),
  ).then(() => undefined);
}

function stagger(el: HTMLElement) {
  const parent = el.parentElement;
  if (!parent) return 0;
  return Math.min(Math.max([...parent.children].indexOf(el), 0), 6);
}

function onScreen(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
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
    const revealing = new WeakSet<Element>();

    const mark = (el: HTMLElement) => {
      el.style.setProperty("--i", String(stagger(el)));
      el.setAttribute("data-in", "");
    };

    const show = (el: Element, force = false) => {
      const node = el as HTMLElement;
      if (revealing.has(node) || node.hasAttribute("data-in")) return;
      revealing.add(node);
      pending.delete(node);
      observer.unobserve(node);
      void (async () => {
        await Promise.race([imagesReady(node), sleep(2200)]);
        await afterPaint();
        if (!node.isConnected) return;
        if (!force && !onScreen(node)) {
          revealing.delete(node);
          pending.add(node);
          observer.observe(node);
          return;
        }
        mark(node);
      })();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.16 },
    );

    const scan = () => {
      document.querySelectorAll("#content, .site-footer").forEach((scope) => {
        scope.querySelectorAll<HTMLElement>(targets).forEach((el) => {
          if (seen.has(el) || el.hasAttribute("data-in")) return;
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
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) show(el, true);
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

    const resetPersisted = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      document.querySelectorAll<HTMLElement>("[data-in]").forEach((el) => {
        el.removeAttribute("data-in");
        seen.delete(el);
        revealing.delete(el);
        pending.add(el);
      });
      scan();
    };

    scan();
    mutations.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pageshow", resetPersisted);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pageshow", resetPersisted);
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
