import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { IconArrow, IconPhone } from "@/components/Icons";
import { PriceTable } from "@/components/PriceTable";
import { CLUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pályafoglalás",
  description:
    "Foglalj salakpályát vagy edzést a Ziccer Tenisz Arénában: telefonon Dr. Berkó Ervinnél, vagy foglalási kéréssel e-mailben, SMS-ben. Pályadíj 2 000 Ft/órától.",
  alternates: { canonical: "/foglalas" },
};

export default function Foglalas() {
  return (
    <>
      <header className="container page-head">
        <p className="eyebrow" data-reveal>
          Pályafoglalás
        </p>
        <h1 className="h1" data-reveal>
          Foglalj pályát <em>vagy edzést.</em>
        </h1>
        <p className="lead" data-reveal>
          A leggyorsabb, ha felhívod Ervint. Ha inkább írnál, töltsd ki a kérést: e-mailben vagy SMS-ben megy hozzá, és ő
          visszaigazolja.
        </p>
        <div className="ways" data-reveal>
          <a className="way glass" href={CLUB.phoneHref}>
            <span className="way__label">Telefonon · a leggyorsabb</span>
            <span className="way__main num">{CLUB.phoneDisplay}</span>
            <span className="way__sub">
              <IconPhone /> {CLUB.coach} veszi fel
            </span>
          </a>
          <a className="way glass" href="#keres">
            <span className="way__label">Írásban</span>
            <span className="way__main">Foglalási kérés</span>
            <span className="way__sub">
              <IconArrow /> E-mailben vagy SMS-ben
            </span>
          </a>
        </div>
      </header>

      <section id="keres" className="section section--tight" aria-labelledby="keres-title">
        <div className="container booking">
          <div>
            <h2 id="keres-title" className="h3 booking__title">
              Foglalási kérés
            </h2>
            <BookingForm />
          </div>

          <aside className="booking__aside" aria-label="Mi történik ezután?">
            <h2 className="h3">Mi történik ezután?</h2>
            <ol className="steps steps--compact">
              <li>
                <span className="steps__n">01</span>
                <div>
                  <h3 className="steps__title">Visszaigazolás</h3>
                  <p>Ervin e-mailben vagy telefonon jelez vissza, hogy a kért időpont szabad-e.</p>
                </div>
              </li>
              <li>
                <span className="steps__n">02</span>
                <div>
                  <h3 className="steps__title">Fizetés</h3>
                  <p>
                    Átutalással: a foglalás akkor válik aktívvá, amikor az összeg megérkezett és Ervin jóváhagyta. Ha
                    személyesen egyeztetsz vele, a helyszínen készpénzzel is fizethetsz.
                  </p>
                </div>
              </li>
              <li>
                <span className="steps__n">03</span>
                <div>
                  <h3 className="steps__title">Játék</h3>
                  <p>
                    Navigációban: „{CLUB.navName}”, GPS: {CLUB.gps}
                  </p>
                </div>
              </li>
            </ol>

            <div className="bank glass">
              <p className="eyebrow eyebrow--plain">Utaláshoz</p>
              <dl>
                <div>
                  <dt>Bank</dt>
                  <dd>{CLUB.bank.name}</dd>
                </div>
                <div>
                  <dt>Számlatulajdonos</dt>
                  <dd>{CLUB.bank.holder}</dd>
                </div>
                <div>
                  <dt>Számlaszám</dt>
                  <dd className="num">{CLUB.bank.account}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section id="arak" className="section section--tight" aria-labelledby="arak-title">
        <div className="container booking">
          <div>
            <p className="eyebrow">Árak</p>
            <h2 id="arak-title" className="h2">
              Pályadíj <em>egy pályára.</em>
            </h2>
            <p className="lead" style={{ marginTop: 22 }}>
              Az ár a foglalás teljes idejére szól, a kezdés időpontja szerint 15:00 előtt vagy után. Az edzői díjat Ervinnel
              egyeztetheted.
            </p>
          </div>
          <PriceTable caption="Pályadíjak egy pályára" />
        </div>
      </section>

      <section className="section" aria-labelledby="szabalyok-title">
        <div className="container">
          <h2 id="szabalyok-title" className="h2 rules__title">
            Jó tudni <em>foglalás előtt.</em>
          </h2>
          <dl className="rules">
            <div data-reveal>
              <dt>Lemondás</dt>
              <dd>Pályát és edzést 48 órán kívül lehet lemondani.</dd>
            </div>
            <div data-reveal>
              <dt>Kiscsoport (2–3 fő)</dt>
              <dd>
                Egy kijelölt ember foglalja a pályát, és egy összegben utalja az edzői és a pályadíjat, ha nincs teniszbérlete.
              </dd>
            </div>
            <div data-reveal>
              <dt>Bérlettel</dt>
              <dd>A bérletes játékos csak az edzői díj rá eső részét utalja; a pályahasználatért kreditet vonunk le.</dd>
            </div>
            <div data-reveal>
              <dt>Hosszabb edzés</dt>
              <dd>
                Háromfős edzésnél javasolt a másfél vagy kétórás foglalkozás. Az árát Ervinnel egyeztetheted, de könnyen
                kiszámolható.
              </dd>
            </div>
            <div data-reveal>
              <dt>Készpénz</dt>
              <dd>Ervinnél a helyszínen készpénzzel is fizethetsz.</dd>
            </div>
            <div data-reveal>
              <dt>Bérletek</dt>
              <dd>Havi és szabadtéri idénybérlet (november 30-ig) is kérhető, akár családi kedvezménnyel.</dd>
            </div>
          </dl>
          <div className="btn-row" style={{ marginTop: 48 }}>
            <a className="btn" href={CLUB.phoneHref}>
              <IconPhone /> Kérdésed van? {CLUB.phoneShort}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
