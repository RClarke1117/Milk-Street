"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OpenBadge } from "@/components/open-badge";
import { nav, site } from "@/lib/site";

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

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className={`site-header ${solid || open ? "is-solid" : ""}`}>
      <Link href="/" className="brand" aria-label="Milk Street Distillery, home">
        <span>Milk Street</span>
        <small>Distillery</small>
      </Link>
      <nav id="site-nav" className={open ? "is-open" : ""} aria-label="Primary">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
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
    </header>
  );
}
