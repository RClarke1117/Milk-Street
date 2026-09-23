import Link from "next/link";
import { hours, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <img className="footer-logo" src="/media/brand/logo.png" alt="Milk Street Distillery" width={878} height={167} />
          <p>
            {site.address.line1}
            <br />
            {site.address.city}, {site.address.region} {site.address.postal}
          </p>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={site.emailHref}>{site.email}</a>
          </p>
        </div>
        <div>
          <p className="kicker">Hours</p>
          <ul className="footer-hours">
            {hours.map((row) => (
              <li key={row.days}>
                <span>{row.days}</span>
                <strong>{row.room}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">Menu</p>
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-social">
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramMark />
          </a>
          <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookMark />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Milk Street Distillery, LLC</p>
        <p className="cds">
          Designed by <span>Clarke Design Studio</span>
        </p>
      </div>
    </footer>
  );
}

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .01 6A3 3 0 0 0 12 9z" />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.1 22 12.07z" />
    </svg>
  );
}
