import Image from "next/image";
import Link from "next/link";
import { CallCard } from "@/components/CallCard";
import { Crest } from "@/components/Crest";
import { IconArrow, IconArrowUpRight, IconPhone } from "@/components/Icons";
import { PriceTable } from "@/components/PriceTable";
import { CLUB, COACH_CREDENTIALS, REVIEWS } from "@/lib/site";

export const metadata = { alternates: { canonical: "/" } };

const PATHS = [
  {
    href: "/oktatas#gyerekeknek",
    title: "Gyereket hoznék",
    text: "Négyéves kortól: magánóra vagy kiscsoport, legfeljebb négy gyerekkel.",
  },
  {
    href: "/oktatas#felnotteknek",
    title: "Én tanulnék",
    text: "Magánóra vagy kétfős óra felnőtteknek, akár 85 éves korig.",
  },
  {
    href: "/foglalas",
    title: "Pályát foglalnék",
    text: "Salakpálya 2 000 Ft/órától, edzővel vagy anélkül.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="eyebrow" data-reveal>
              Ziccer Tenisz Aréna · Debrecen
            </p>
            <h1 id="hero-title" className="display" data-reveal style={{ ["--d" as string]: "0.08s" }}>
              Négy évestől <em>nyolcvanöt évesig.</em>
            </h1>
            <p className="lead hero__lead" data-reveal style={{ ["--d" as string]: "0.16s" }}>
              Teniszoktatás és pályabérlés három salakpályán, a Határ útnál. Az órákat Dr. Berkó Ervin okleveles szakedző
              tartja: a klub tulajdonosa, egykor az ITF szenior világranglista 7. helyezettje.
            </p>
          </div>

          <div className="hero__media" data-reveal style={{ ["--d" as string]: "0.1s" }}>
            <figure className="photo photo--sky hero__photo">
              <Image
                src="/img/court-net.jpg"
                alt="Salakos teniszpálya a háló vonalából, a végében padok és tujasor"
                fill
                priority
                sizes="(min-width: 901px) 34vw, 92vw"
              />
            </figure>
            <figure className="photo hero__club">
              <Image src="/img/clubhouse.jpg" alt="A klubház menta színű tetővel és a klub címerével" fill sizes="(min-width: 901px) 17vw, 46vw" />
              <figcaption>A klubház</figcaption>
            </figure>
          </div>

          <ul className="paths" aria-label="Mit keresel?">
            {PATHS.map((p, i) => (
              <li key={p.href} data-reveal style={{ ["--d" as string]: `${0.22 + i * 0.07}s` }}>
                <Link href={p.href} className="path glass">
                  <span className="path__title">
                    {p.title}
                    <IconArrow />
                  </span>
                  <span className="path__text">{p.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- courts and prices: the court lines stand on the right ---------- */}
      <section id="palyak" className="section leave-right" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow" data-reveal>
            A pályák
          </p>
          <h2 id="palyak-title" className="h2" data-reveal>
            Három salakpálya, <em>fák között.</em>
          </h2>
          <p className="lead section-lead" data-reveal>
            Debrecen szélén, a Határ útnál: három salakos teniszpálya, klubház és árnyékos pihenők a pályák mellett. Alkalmi
            pályabérlés mellett havi és szabadtéri idénybérlet is kérhető, családi kedvezménnyel is.
          </p>

          <dl className="facts" data-reveal>
            <div>
              <dt className="facts__num">3</dt>
              <dd>salakos teniszpálya</dd>
            </div>
            <div>
              <dt className="facts__num">4</dt>
              <dd>éves kortól tanulhatnak a gyerekek</dd>
            </div>
            <div>
              <dt className="facts__num">85</dt>
              <dd>éves korig tartunk felnőtt órákat</dd>
            </div>
            <div>
              <dt className="facts__num">
                400<span className="facts__unit">m</span>
              </dt>
              <dd>a Fészek lakóparktól</dd>
            </div>
          </dl>

          <div className="court-photos">
            <figure className="photo photo--sky court-photos__wide" data-reveal>
              <Image src="/img/courts-panorama.jpg" alt="Két salakpálya egymás mellett, háttérben a klubház" fill sizes="(min-width: 901px) 62vw, 92vw" />
            </figure>
            <figure className="photo court-photos__a" data-reveal>
              <Image src="/img/pavilions.jpg" alt="Fa pavilonok padokkal és asztalokkal a pályák mellett" fill sizes="(min-width: 901px) 30vw, 92vw" />
              <figcaption>Pihenők a pálya mellett</figcaption>
            </figure>
            <figure className="photo photo--sky court-photos__b" data-reveal style={{ ["--d" as string]: "0.08s" }}>
              <Image src="/img/court-side.jpg" alt="Salakpálya az alapvonal felől" fill sizes="(min-width: 901px) 30vw, 92vw" />
            </figure>
          </div>

          <div id="arak" className="prices" data-reveal>
            <div className="prices__head">
              <h3 className="h3">Pályadíj</h3>
              <p className="muted small">Egy pályára, a foglalás teljes idejére.</p>
            </div>
            <PriceTable />
            <p className="small muted prices__note">
              Bérlettel a pályahasználatot kreditből vonjuk le. Az edzői díjat Ervinnel egyeztetheted.
            </p>
            <div className="btn-row">
              <Link href="/foglalas" className="btn">
                Pályát foglalok <IconArrow />
              </Link>
              <a href={CLUB.phoneHref} className="btn btn--ghost">
                <IconPhone /> {CLUB.phoneShort}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- the coach: "No.7" in dots forms beside the heading ---------- */}
      <section id="edzo" className="section leave-right leave-right--wide" aria-labelledby="edzo-title">
        <div className="container">
          <p className="eyebrow" data-reveal>
            Dr. Berkó Ervin
          </p>
          <h2 id="edzo-title" className="h2 coach__title" data-reveal>
            Az edző, aki <em>világranglistán</em> játszott.
          </h2>
          <div className="coach">
            <figure className="photo coach__photo" data-reveal>
              <Image src="/img/ervin.jpg" alt="Dr. Berkó Ervin teniszütővel a salakpálya szélén" fill sizes="240px" />
            </figure>
            <div className="coach__body" data-reveal style={{ ["--d" as string]: "0.08s" }}>
              <p className="lead">
                Okleveles szakedző, a Ziccer tulajdonosa. Negyven év tapasztalattal tanít gyerekeket és felnőtteket:
                magánórán, kétfős órán és kis csoportban.
              </p>
              <ul className="creds">
                {COACH_CREDENTIALS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <Link href="/oktatas" className="link-arrow">
                Az oktatásról <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- lessons: the racket stands in the middle column ---------- */}
      <section id="oktatas" className="section" aria-labelledby="oktatas-title">
        <div className="container">
          <div className="trio">
            <div className="trio__main">
              <p className="eyebrow" data-reveal>
                Oktatás
              </p>
              <h2 id="oktatas-title" className="h2" data-reveal>
                Egyedül, párban <em>vagy kis csoportban.</em>
              </h2>
              <ol className="offers">
                <li data-reveal>
                  <span className="offers__tag">Négyéves kortól</span>
                  <h3 className="offers__title">Gyerekeknek</h3>
                  <p>Magánóra vagy kiscsoportos foglalkozás, egy csoportban legfeljebb négy gyerekkel.</p>
                </li>
                <li data-reveal>
                  <span className="offers__tag">Akár 85 éves korig</span>
                  <h3 className="offers__title">Felnőtteknek</h3>
                  <p>Magánóra vagy kétfős óra: egyedül, vagy azzal, akivel játszani szeretnél.</p>
                </li>
                <li data-reveal>
                  <span className="offers__tag">Gépes edzés</span>
                  <h3 className="offers__title">Adogatógéppel</h3>
                  <p>Teniszezés és oktatás adogatógéppel. Ütőt igény szerint bérelhetsz, és elektromos géppel húrozunk is.</p>
                </li>
              </ol>
            </div>
            <aside className="trio__side glass lesson-card" data-reveal aria-label="Edzés Ervinnel">
              <p className="eyebrow eyebrow--plain">Edzés Ervinnel</p>
              <p className="lesson-card__big">Pályadíj + edzői díj</p>
              <p className="muted">Az edzői díjat Ervinnel egyeztetheted, a pályadíj a fenti árlista szerint számít.</p>
              <ul className="ticks">
                <li>Kiscsoportnál egy ember foglal, és egy összegben utalja az edzői és a pályadíjat.</li>
                <li>Háromfős edzéshez másfél vagy kétórás foglalkozást javaslunk.</li>
                <li>Bérletesek csak az edzői díj rájuk eső részét utalják.</li>
              </ul>
              <a href={CLUB.phoneHref} className="btn btn--block">
                <IconPhone /> Hívd Ervint
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- booking: the racket stays between the steps and the call card ---------- */}
      <section id="foglalas" className="section" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="trio">
            <div className="trio__main">
              <p className="eyebrow" data-reveal>
                Foglalás
              </p>
              <h2 id="foglalas-title" className="h2" data-reveal>
                Így lesz <em>pályád.</em>
              </h2>
              <ol className="steps">
                <li data-reveal>
                  <span className="steps__n">01</span>
                  <div>
                    <h3 className="steps__title">Kérj időpontot</h3>
                    <p>
                      Hívd Ervint a <a href={CLUB.phoneHref}>{CLUB.phoneShort}</a> számon, vagy küldj{" "}
                      <Link href="/foglalas">foglalási kérést</Link>: melyik nap, hány órára, kérsz-e edzőt.
                    </p>
                  </div>
                </li>
                <li data-reveal>
                  <span className="steps__n">02</span>
                  <div>
                    <h3 className="steps__title">Visszaigazolás</h3>
                    <p>Ervin e-mailben vagy telefonon jelez vissza a foglalásodról.</p>
                  </div>
                </li>
                <li data-reveal>
                  <span className="steps__n">03</span>
                  <div>
                    <h3 className="steps__title">Fizetés</h3>
                    <p>
                      Átutalással: a foglalás akkor él, amikor az összeg megérkezett és Ervin jóváhagyta. Ha személyesen
                      egyeztetsz vele, a helyszínen készpénzzel is fizethetsz.
                    </p>
                  </div>
                </li>
                <li data-reveal>
                  <span className="steps__n">04</span>
                  <div>
                    <h3 className="steps__title">Irány a salak</h3>
                    <p>
                      A navigációba írd be: „{CLUB.navName}” (GPS: {CLUB.gps}). Lemondani 48 órán kívül lehet.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="trio__side trio__side--sticky" data-reveal>
              <CallCard />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- summer camp: the big ball spins behind ---------- */}
      <section id="tabor" className="section camp" aria-labelledby="tabor-title">
        <div className="container camp__inner">
          <p className="eyebrow" data-reveal>
            Nyári tenisztábor
          </p>
          <h2 id="tabor-title" className="h1" data-reveal>
            Egy hét <em>a salakon.</em>
          </h2>
          <p className="lead camp__lead" data-reveal>
            Nyári tábor gyerekeknek a Ziccer pályáin, Ervin irányításával. Napi kétszer másfél óra tenisz edzővel és
            adogatógéppel, közte tízórai, ebéd és szabad játék.
          </p>
          <dl className="camp__facts">
            <div className="glass" data-reveal>
              <dt>2 × 1,5 óra</dt>
              <dd>tenisz naponta</dd>
            </div>
            <div className="glass" data-reveal style={{ ["--d" as string]: "0.06s" }}>
              <dt className="num">7:15–16:30</dt>
              <dd>a tábor napi nyitvatartása</dd>
            </div>
            <div className="glass" data-reveal style={{ ["--d" as string]: "0.12s" }}>
              <dt>2 étkezés</dt>
              <dd>tízórai és ebéd</dd>
            </div>
            <div className="glass" data-reveal style={{ ["--d" as string]: "0.18s" }}>
              <dt>−10%</dt>
              <dd>ha testvérek jelentkeznek</dd>
            </div>
          </dl>
          <p className="small muted camp__note" data-reveal>
            Szabadfoglalkozás: speedbadminton, darts, foci. Ütőt és labdát tudunk adni. Az aktuális turnusokról és díjakról
            Ervin ad tájékoztatást; jelentkezni a turnus indulása előtt legalább egy héttel lehet.
          </p>
          <div className="btn-row camp__cta" data-reveal>
            <a className="btn" href={`mailto:${CLUB.email}?subject=${encodeURIComponent("Nyári tenisztábor – érdeklődés")}`}>
              Érdeklődöm a táborról
            </a>
            <Link className="btn btn--ghost" href="/oktatas#tabor">
              Részletek
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- reviews ---------- */}
      <section className="section section--tight" aria-labelledby="velemenyek-title">
        <div className="container">
          <h2 id="velemenyek-title" className="eyebrow">
            Akik már jártak itt
          </h2>
          <div className="reviews">
            {REVIEWS.map((r, i) => (
              <figure key={r.author} className="review" data-reveal style={{ ["--d" as string]: `${i * 0.08}s` }}>
                <blockquote>„{r.text}”</blockquote>
                <figcaption>
                  {r.author} · Google-értékelés, {r.date}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- getting here ---------- */}
      <section id="megkozelites" className="section" aria-labelledby="megkozelites-title">
        <div className="container split visit">
          <div>
            <p className="eyebrow" data-reveal>
              Megközelítés
            </p>
            <h2 id="megkozelites-title" className="h2" data-reveal>
              Debrecen szélén, <em>a Határ útnál.</em>
            </h2>
            <dl className="info" data-reveal>
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
                <dd>„{CLUB.navName}”</dd>
              </div>
              <div>
                <dt>Busszal</dt>
                <dd>46-os és 46/Y járat</dd>
              </div>
              <div>
                <dt>Tájékozódás</dt>
                <dd>400 m a Fészek lakóparktól, 700 m az Ipari Parktól</dd>
              </div>
            </dl>
            <a className="link-arrow" href={CLUB.mapsHref} target="_blank" rel="noopener noreferrer" data-reveal>
              Útvonal a Google Térképen <IconArrowUpRight />
            </a>
          </div>
          <figure className="photo photo--sky visit__photo" data-reveal>
            <Image src="/img/clubhouse.jpg" alt="A Ziccer klubháza a pályák mellett" fill sizes="(min-width: 901px) 44vw, 92vw" />
            <figcaption>A klubház, oromzatán a klub címerével</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- the closing call: the black hole forms above the heading ---------- */}
      <section className="final" aria-labelledby="final-title">
        <div className="container final__inner">
          <Crest variant="mark" className="final__crest" />
          <h2 id="final-title" className="display" data-reveal>
            Jöhet <em>egy szett?</em>
          </h2>
          <p className="lead" data-reveal>
            Hívd Ervint, és megbeszélitek: pálya, időpont, edző.
          </p>
          <div className="btn-row final__cta" data-reveal>
            <a className="btn" href={CLUB.phoneHref}>
              <IconPhone /> {CLUB.phoneDisplay}
            </a>
            <Link className="btn btn--ghost" href="/foglalas">
              Foglalási kérés online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
