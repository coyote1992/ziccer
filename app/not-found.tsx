import Link from "next/link";
import { CLUB } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container page-head" style={{ minHeight: "70svh" }}>
      <p className="eyebrow">404</p>
      <h1 className="h1">
        Ez a labda <em>kiment.</em>
      </h1>
      <p className="lead">Ezt az oldalt nem találjuk. A pályák, az árak és a foglalás innen egy kattintás.</p>
      <div className="btn-row" style={{ marginTop: 32 }}>
        <Link className="btn" href="/">
          Kezdőlap
        </Link>
        <Link className="btn btn--ghost" href="/foglalas">
          Pályafoglalás
        </Link>
        <a className="btn btn--ghost" href={CLUB.phoneHref}>
          {CLUB.phoneShort}
        </a>
      </div>
    </section>
  );
}
