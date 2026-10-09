import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconPhone } from "@/components/Icons";
import { CLUB, COACH_CREDENTIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teniszoktatás",
  description:
    "Teniszoktatás Debrecenben Dr. Berkó Ervin okleveles szakedzővel: magánóra és kiscsoport gyerekeknek 4 éves kortól, magán- és kétfős óra felnőtteknek, adogatógépes edzés, nyári tenisztábor.",
  alternates: { canonical: "/oktatas" },
};

const JUMPS = [
  ["#gyerekeknek", "Gyerekeknek"],
  ["#felnotteknek", "Felnőtteknek"],
  ["#adogatogep", "Adogatógéppel"],
  ["#edzo", "Az edző"],
  ["#tabor", "Nyári tábor"],
] as const;

export default function Oktatas() {
  return (
    <>
      <header className="container page-head">
        <p className="eyebrow" data-reveal>
          Teniszoktatás
        </p>
        <h1 className="h1" data-reveal>
          Magánóra, kétfős óra, <em>kiscsoport.</em>
        </h1>
        <p className="lead" data-reveal>
          Okleveles szakedzővel, három salakpályán, Debrecenben. Gyerekeknek négyéves kortól, felnőtteknek akár 85 éves korig.
        </p>
        <nav className="jumps" aria-label="Ugrás" data-reveal>
          {JUMPS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section id="gyerekeknek" className="section section--tight" aria-labelledby="gyerek-title">
        <div className="container lesson">
          <div className="lesson__text">
            <p className="eyebrow">Négyéves kortól</p>
            <h2 id="gyerek-title" className="h2">
              Gyerekeknek
            </h2>
            <p className="lead">
              A gyerekek már négy-ötéves kortól elkezdhetik. Magánórán Ervin csak egy gyerekkel foglalkozik; kiscsoportban
              legfeljebb négyen játszanak együtt.
            </p>
          </div>
          <dl className="lesson__card glass" data-reveal>
            <div>
              <dt>Kortól</dt>
              <dd className="lnum">4 év</dd>
            </div>
            <div>
              <dt>Forma</dt>
              <dd>Magánóra vagy kiscsoport</dd>
            </div>
            <div>
              <dt>Csoportban</dt>
              <dd className="lnum">legfeljebb 4 fő</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="felnotteknek" className="section section--tight" aria-labelledby="felnott-title">
        <div className="container lesson lesson--flip">
          <div className="lesson__text">
            <p className="eyebrow">Akár 85 éves korig</p>
            <h2 id="felnott-title" className="h2">
              Felnőtteknek
            </h2>
            <p className="lead">
              Felnőtteknek magánórát és kétfős órát tartunk. Jöhetsz egyedül, vagy azzal, akivel játszani szeretnél: kétfős
              órán ketten osztoztok az edzésen.
            </p>
          </div>
          <figure className="photo photo--sky lesson__photo" data-reveal>
            <Image src="/img/court-net-wide.jpg" alt="Salakpálya a háló mentén, a végében padok" fill sizes="(min-width: 901px) 44vw, 92vw" />
          </figure>
        </div>
      </section>

      <section id="adogatogep" className="section section--tight" aria-labelledby="gep-title">
        <div className="container lesson">
          <div className="lesson__text">
            <p className="eyebrow">Gépes edzés</p>
            <h2 id="gep-title" className="h2">
              Adogatógéppel
            </h2>
            <p className="lead">
              Adogatógépes teniszezés és oktatás gyerekeknek és felnőtteknek. Ütőt igény szerint bérelhetsz, a saját ütődet
              pedig elektromos géppel húrozzuk.
            </p>
          </div>
          <ul className="lesson__card lesson__card--list glass" data-reveal>
            <li>Teniszezés és oktatás adogatógéppel</li>
            <li>Ütőbérlés igény szerint</li>
            <li>Ütőhúrozás elektromos géppel</li>
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="dij-title">
        <div className="container">
          <div className="fee glass" data-reveal>
            <div>
              <p className="eyebrow eyebrow--plain">Díjak és foglalás</p>
              <h2 id="dij-title" className="h3">
                Pályadíj + edzői díj
              </h2>
              <p className="muted">
                A pályadíj az árlista szerint számít (1 óra 2 000 Ft-tól), az edzői díjat Ervinnel egyeztetheted.
              </p>
            </div>
            <ul className="ticks">
              <li>Kiscsoportnál egy ember foglal, és egy összegben utalja az edzői és a pályadíjat.</li>
              <li>Háromfős edzéshez másfél vagy kétórás foglalkozást javaslunk.</li>
              <li>Bérletesek csak az edzői díj rájuk eső részét utalják.</li>
            </ul>
            <div className="fee__cta">
              <a className="btn btn--block" href={CLUB.phoneHref}>
                <IconPhone /> Hívd Ervint
              </a>
              <Link className="btn btn--ghost btn--block" href="/foglalas#keres">
                Foglalási kérés
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="edzo" className="section" aria-labelledby="edzo-title">
        <div className="container coachp">
          <figure className="photo coachp__photo" data-reveal>
            <Image src="/img/ervin.jpg" alt="Dr. Berkó Ervin teniszütővel a salakpálya szélén" fill sizes="(min-width: 801px) 300px, 70vw" />
          </figure>
          <div>
            <p className="eyebrow">Az edző</p>
            <h2 id="edzo-title" className="h2">
              Dr. Berkó Ervin
            </h2>
            <p className="lead" style={{ marginTop: 22 }}>
              Okleveles szakedző, a Ziccer Tenisz és Szabadidő Klub tulajdonosa. Negyven év tapasztalattal tanít, és várja a
              teniszt kedvelő vagy megtanulni akaró tanítványokat.
            </p>
            <ul className="creds-list">
              {COACH_CREDENTIALS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="tabor" className="section" aria-labelledby="tabor-title">
        <div className="container">
          <div className="camp-head">
            <div>
              <p className="eyebrow">Nyáron</p>
              <h2 id="tabor-title" className="h1">
                Nyári <em>tenisztábor.</em>
              </h2>
            </div>
            <p className="lead">
              Egy- vagy kéthetes turnusok a Ziccer pályáin, Ervin irányításával. A tábort a Botond Sportmarketing Kft. és a
              Ziccer Tenisz és Szabadidő Klub szervezi.
            </p>
          </div>
          <dl className="campgrid">
            <div className="glass" data-reveal>
              <dt>Tenisz</dt>
              <dd>Naponta 2 × 1,5 óra oktatás, edzővel és adogatógéppel.</dd>
            </div>
            <div className="glass" data-reveal>
              <dt>Nyitvatartás</dt>
              <dd>Naponta 7:15-től 16:30-ig.</dd>
            </div>
            <div className="glass" data-reveal>
              <dt>Étkezés</dt>
              <dd>Napi kétszer: tízórai és ebéd, benne a tábor árában.</dd>
            </div>
            <div className="glass" data-reveal>
              <dt>Szabad játék</dt>
              <dd>Speedbadminton, darts, foci.</dd>
            </div>
            <div className="glass" data-reveal>
              <dt>Felszerelés</dt>
              <dd>Ütőt és labdát tudunk adni.</dd>
            </div>
            <div className="glass" data-reveal>
              <dt>Testvéreknek</dt>
              <dd>10% kedvezmény, ha testvérek jelentkeznek.</dd>
            </div>
          </dl>
          <p className="muted camp-note">
            Jelentkezni a turnus indulása előtt legalább egy héttel lehet. Az aktuális turnusokról és díjakról Ervin ad
            tájékoztatást.
          </p>
          <div className="btn-row">
            <a className="btn" href={`mailto:${CLUB.email}?subject=${encodeURIComponent("Nyári tenisztábor – érdeklődés")}`}>
              Érdeklődöm e-mailben
            </a>
            <a className="btn btn--ghost" href={CLUB.phoneHref}>
              <IconPhone /> {CLUB.phoneShort}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Foglalás">
        <div className="container endcta" data-reveal>
          <h2 className="h2">
            Kezdjük <em>az első órával?</em>
          </h2>
          <div className="btn-row">
            <a className="btn" href={CLUB.phoneHref}>
              <IconPhone /> Hívd Ervint
            </a>
            <Link className="btn btn--ghost" href="/foglalas">
              Foglalás <IconArrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
