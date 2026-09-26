"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { OpenBadge } from "@/components/open-badge";
import { WheatFrame, WheatMark } from "@/components/wheat-frame";
import { nav, site } from "@/lib/site";

function isHere(pathname: string, href: string) {
  const clean = pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/";
  return clean === href || clean.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const meter = useRef<HTMLSpanElement>(null);
  const closeTimer = useRef(0);
  const openRef = useRef(false);
  openRef.current = open;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setSolid(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      meter.current?.style.setProperty("--progress", String(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    window.clearTimeout(closeTimer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(false);
      setClosing(false);
      return;
    }
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 320);
  }, []);

  function toggleMenu() {
    if (open && !closing) {
      closeMenu();
      return;
    }
    window.clearTimeout(closeTimer.current);
    setClosing(false);
    setOpen(true);
  }

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const showing = open && !closing;
  const classes = ["site-header", solid || open ? "is-solid" : ""].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      {open ? (
        <button
          type="button"
          className={`nav-dim${closing ? " is-closing" : ""}`}
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}
      <div className="header-bar">
        <Link href="/" className="brand" aria-label="Milk Street Distillery, home">
          <img src="/media/brand/logo.png" alt="" width={878} height={167} />
        </Link>
        <nav
          id="site-nav"
          className={`${open ? "is-open" : ""}${closing ? " is-closing" : ""}`}
          aria-label="Primary"
        >
          <WheatFrame tone="copper" />
          {nav.map((item, index) => {
            const here = isHere(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={here ? "is-here" : undefined}
                aria-current={here ? "page" : undefined}
                style={{ "--i": index } as React.CSSProperties}
              >
                {here ? <WheatMark className="nav-wheat" /> : null}
                {here ? <span className="nav-rule" /> : null}
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}
          <a className="nav-phone" href={site.phoneHref} style={{ "--i": nav.length } as React.CSSProperties}>
            {site.phone}
          </a>
        </nav>
        <div className="header-tools">
          <OpenBadge />
          <a className="header-phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <button
            type="button"
            className={`nav-toggle${showing ? " is-open" : ""}`}
            aria-expanded={showing}
            aria-controls="site-nav"
            onClick={toggleMenu}
          >
            <span className="nav-toggle-mark" aria-hidden="true">
              <i />
              <i />
            </span>
            <span key={showing ? "close" : "menu"} className="nav-toggle-label">
              {showing ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>
      <span className="scroll-meter" ref={meter} aria-hidden="true">
        <span key={pathname} className="route-sweep" />
      </span>
    </header>
  );
}
