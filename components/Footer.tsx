import Link from "next/link";
import { CLUB, NAV, SUPPORTERS } from "@/lib/site";
import { Crest } from "./Crest";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Crest className="footer__crest" title="A Ziccer Tenisz és Szabadidő Klub címere" />
            <p style={{ maxWidth: "26em" }}>
              Teniszoktatás és pályabérlés három salakpályán, Debrecenben. Gyerekeknek négyéves kortól, felnőtteknek akár
              nyolcvanöt éves korig.
            </p>
          </div>
          <div>
            <h2 className="footer__title">Elérhetőség</h2>
            <ul className="footer__list">
              <li>
                <a className="num" href={CLUB.phoneHref}>
                  {CLUB.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
              </li>
              <li>
                <a href={CLUB.facebookHref} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Cím</h2>
            <ul className="footer__list">
              <li>
                {CLUB.name}
                <br />
                {CLUB.postcode} {CLUB.city}, {CLUB.address}
              </li>
              <li className="muted">GPS: {CLUB.gps}</li>
              <li>
                <a href={CLUB.mapsHref} target="_blank" rel="noopener noreferrer">
                  Útvonal a Google Térképen
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Oldalak</h2>
            <ul className="footer__list">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/en" lang="en">
                  English
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="supporters">
          <strong>Támogatóink</strong>
          {SUPPORTERS.join(" · ")}
        </p>

        <div className="footer__bottom">
          <span>
            © {CLUB.legalName} · {CLUB.city}
          </span>
          <span>
            Fotók:{" "}
            <a href={CLUB.photoCredit.href} target="_blank" rel="noopener noreferrer">
              {CLUB.photoCredit.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
