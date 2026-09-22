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
        <div>
          <p className="kicker">Instagram</p>
          <p>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              {site.instagramHandle}
            </a>
            <br />
            <a href={site.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
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
