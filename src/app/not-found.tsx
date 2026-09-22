import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-hero" style={{ minHeight: "100svh" }}>
      <p className="kicker">404</p>
      <h1>That barrel is empty.</h1>
      <p>The page is not on this floor.</p>
      <div className="btn-row">
        <Link className="btn" href="/">
          Back to the still
        </Link>
        <Link className="btn btn-ghost" href="/spirits">
          The shelf
        </Link>
      </div>
    </main>
  );
}
