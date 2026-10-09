import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Crest } from "@/components/Crest";
import { IconArrowUpRight, IconFacebook, IconMail, IconPhone } from "@/components/Icons";
import { MapEmbed } from "@/components/MapEmbed";
import { CLUB, SUPPORTERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kapcsolat és megközelítés",
  description:
    "Ziccer Tenisz Aréna, 4002 Debrecen, Nagy Mihály kert 32/B (GPS: Határ út 33.). Telefon: +36 70 943 2732, e-mail: ziccertc@gmail.com. Busszal a 46-os és 46/Y járattal.",
  alternates: { canonical: "/kapcsolat" },
};

export default function Kapcsolat() {
  return (
    <>
      <header className="container page-head">
        <p className="eyebrow" data-reveal>
          Kapcsolat
        </p>
        <h1 className="h1" data-reveal>
          Gyere el <em>a Határ útra.</em>
        </h1>
        <p className="lead" data-reveal>
          Foglalás, edzés, tábor vagy bérlet: mindenben Dr. Berkó Ervin segít, telefonon a leggyorsabban.
        </p>
      </header>

      <section className="section section--tight" aria-label="Elérhetőség">
        <div className="container contact">
          <div className="contact__cards">
            <a className="ccard glass" href={CLUB.phoneHref} data-reveal>
              <IconPhone className="ccard__icon" />
              <span className="ccard__label">Telefon · foglalás</span>
              <span className="ccard__main num">{CLUB.phoneDisplay}</span>
              <span className="ccard__sub">{CLUB.coach}, okleveles szakedző</span>
            </a>
            <a className="ccard glass" href={`mailto:${CLUB.email}`} data-reveal>
              <IconMail className="ccard__icon" />
              <span className="ccard__label">E-mail</span>
              <span className="ccard__main ccard__main--sm">{CLUB.email}</span>
            </a>
            <a className="ccard glass" href={CLUB.facebookHref} target="_blank" rel="noopener noreferrer" data-reveal>
              <IconFacebook className="ccard__icon" />
              <span className="ccard__label">Facebook</span>
              <span className="ccard__main ccard__main--sm">
                ZICCER Tenisz Aréna <IconArrowUpRight className="ccard__ext" />
              </span>
            </a>
          </div>

          <div>
            <h2 className="h3">Cím és megközelítés</h2>
            <dl className="info">
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.postcode} {CLUB.city}, {CLUB.address}
                </dd>
              </div>
              <div>
                <dt>GPS</dt>
                <dd>{CLUB.gps}: a pályák ezzel szemben vannak</dd>
              </div>
              <div>
                <dt>Navigáció</dt>
                <dd>Írd be: „{CLUB.navName}”</dd>
              </div>
              <div>
                <dt>Busszal</dt>
                <dd>46-os és 46/Y járat</dd>
              </div>
              <div>
                <dt>Tájékozódás</dt>
                <dd>A Fészek lakóparktól 400 m-re, az Ipari Parktól 700 m-re</dd>
              </div>
            </dl>
            <MapEmbed />
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Képek a klubról">
        <div className="container gallery">
          <figure className="photo photo--sky gallery__a" data-reveal>
            <Image src="/img/clubhouse.jpg" alt="A klubház menta színű tetővel" fill sizes="(min-width: 801px) 46vw, 92vw" />
            <figcaption>A klubház</figcaption>
          </figure>
          <figure className="photo photo--sky gallery__b" data-reveal>
            <Image src="/img/court-banners.jpg" alt="Salakpálya a támogatók molinóival" fill sizes="(min-width: 801px) 46vw, 92vw" />
            <figcaption>A pályák</figcaption>
          </figure>
          <figure className="photo gallery__c" data-reveal>
            <Image src="/img/pavilions.jpg" alt="Pihenő pavilonok a pályák mellett" fill sizes="(min-width: 801px) 46vw, 92vw" />
            <figcaption>Pihenők</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="tamogatok-title">
        <div className="container supporters-block">
          <Crest className="supporters-block__crest" title="A Ziccer Tenisz és Szabadidő Klub címere" />
          <div>
            <h2 id="tamogatok-title" className="h3">
              Támogatóink
            </h2>
            <p className="muted">Köszönjük a klub támogatóinak:</p>
            <ul className="supporters-list">
              {SUPPORTERS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Link href="/foglalas" className="btn" style={{ marginTop: 36 }}>
              Pályafoglalás
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
