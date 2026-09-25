"use client";

import { useEffect, useRef, type ReactNode } from "react";

const cruise = 46;

export function Marquee({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const track = node?.querySelector<HTMLElement>(".marquee-track");
    if (!node || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.classList.add("is-live");
    let x = 0;
    let speed = cruise;
    let boost = 0;
    let direction = 1;
    let held = false;
    let visible = true;
    let frame = 0;
    let lastTime = performance.now();
    let lastY = window.scrollY;

    const tick = (time: number) => {
      const dt = Math.min(64, time - lastTime) / 1000;
      lastTime = time;
      boost *= Math.exp(-dt * 2.6);
      const target = held ? 0 : (cruise + boost) * direction;
      speed += (target - speed) * (1 - Math.exp(-dt * (held ? 9 : 5)));
      x -= speed * dt;
      const loop = track.scrollWidth / 2;
      if (loop > 0) {
        x %= loop;
        if (x > 0) x -= loop;
      }
      const skew = Math.max(-6, Math.min(6, -(speed - cruise * direction) * 0.012));
      track.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0) skewX(${skew.toFixed(2)}deg)`;
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame || !visible || document.hidden) return;
      lastTime = performance.now();
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (!dy) return;
      direction = dy > 0 ? 1 : -1;
      boost = Math.min(620, boost + Math.abs(dy) * 4);
    };
    const hold = (value: boolean) => () => {
      held = value;
      node.classList.toggle("is-held", value);
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const observer = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
      if (visible) start();
      else stop();
    });
    observer.observe(node);

    const down = hold(true);
    const up = hold(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    node.addEventListener("pointerdown", down);
    node.addEventListener("pointerenter", down);
    node.addEventListener("pointerup", up);
    node.addEventListener("pointercancel", up);
    node.addEventListener("pointerleave", up);
    start();

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      node.removeEventListener("pointerdown", down);
      node.removeEventListener("pointerenter", down);
      node.removeEventListener("pointerup", up);
      node.removeEventListener("pointercancel", up);
      node.removeEventListener("pointerleave", up);
      node.classList.remove("is-live", "is-held");
      track.style.transform = "";
    };
  }, []);

  return (
    <div ref={ref} className="marquee">
      <div className="marquee-fade">{children}</div>
    </div>
  );
}
