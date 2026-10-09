"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CLUB, NAV } from "@/lib/site";
import { Crest } from "./Crest";
import { IconPhone } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 24);
      setBar(window.scrollY > window.innerHeight * 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) => (href === pathname ? "page" : undefined);

  return (
    <>
      <header className={`header${solid || open ? " header--solid" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" aria-label={`${CLUB.name}, kezdőlap`}>
            <Crest variant="mark" className="brand__mark" />
            <span className="brand__text">
              <span className="brand__name">ZICCER</span>
              <span className="brand__sub">Tenisz Aréna · Debrecen</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={current(n.href)}>
                {n.label}
              </Link>
            ))}
          </nav>
          <a className="header__phone num" href={CLUB.phoneHref}>
            {CLUB.phoneShort}
          </a>
          <Link href="/foglalas" className="btn btn--small header__cta">
            Pályafoglalás
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            onClick={() => setOpen((o) => !o)}
          >
            <span>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div id="mobile-menu" className="mobile-menu" data-open={open} aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobil navigáció">
          <Link href="/" aria-current={current("/")}>
            Kezdőlap
          </Link>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/en" aria-current={current("/en")} lang="en">
            English
          </Link>
        </nav>
        <div className="mobile-menu__contact">
          <a className="btn btn--block" href={CLUB.phoneHref}>
            <IconPhone /> Hívás: {CLUB.phoneShort}
          </a>
          <Link className="btn btn--ghost btn--block" href="/foglalas">
            Foglalási kérés online
          </Link>
          <p className="small muted" style={{ marginTop: 8 }}>
            {CLUB.address}, {CLUB.city} · GPS: {CLUB.gps}
          </p>
        </div>
      </div>

      <div className="actionbar" data-show={bar && !open}>
        <a className="btn" href={CLUB.phoneHref}>
          <IconPhone /> Hívás
        </a>
        <Link className="btn btn--ghost" href="/foglalas">
          Foglalás
        </Link>
      </div>
    </>
  );
}
