import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-hero" style={{ minHeight: "100svh" }}>
      <p className="kicker">404</p>
      <h1>Page not found.</h1>
      <div className="btn-row">
        <Link className="btn" href="/">
          Home
        </Link>
        <Link className="btn btn-ghost" href="/spirits">
          Our spirits
        </Link>
      </div>
    </main>
  );
}
