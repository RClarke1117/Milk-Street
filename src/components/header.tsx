"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${solid || open ? "is-solid" : ""}`}>
      <div className="header-bar">
        <Link href="/" className="brand" aria-label="Milk Street Distillery, home">
          <img src="/media/brand/logo.png" alt="" width={878} height={167} />
        </Link>
        <nav id="site-nav" className={open ? "is-open" : ""} aria-label="Primary">
          <WheatFrame tone="copper" />
          {nav.map((item) => {
            const here = isHere(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={here ? "is-here" : undefined}
                aria-current={here ? "page" : undefined}
              >
                {here ? <WheatMark className="nav-wheat" /> : null}
                {item.label}
              </Link>
            );
          })}
          <a className="nav-phone" href={site.phoneHref}>
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
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
