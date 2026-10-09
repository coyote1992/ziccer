import type { Metadata } from "next";
import Image from "next/image";
import { IconArrowUpRight, IconMail, IconPhone } from "@/components/Icons";
import { PriceTable } from "@/components/PriceTable";
import { CLUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tennis lessons and court hire in Debrecen",
  description:
    "Private and small-group tennis lessons for children from age 4 and for adults, on three clay courts in Debrecen, with certified coach Dr. Ervin Berkó. Court hire from 2,000 HUF an hour.",
  alternates: { canonical: "/en", languages: { hu: "/", en: "/en" } },
};

export default function English() {
  return (
    <div lang="en">
      <header className="container page-head">
        <p className="eyebrow" data-reveal>
          Ziccer Tennis Arena · Debrecen
        </p>
        <h1 className="h1" data-reveal>
          Tennis in Debrecen, <em>on clay.</em>
        </h1>
        <p className="lead" data-reveal>
          Private and small-group tennis lessons for children and adults on the three clay courts of the Ziccer Tennis Arena,
          with a certified professional coach, Dr. Ervin Berkó.
        </p>
        <div className="btn-row" style={{ marginTop: 36 }} data-reveal>
          <a className="btn" href={CLUB.phoneHref}>
            <IconPhone /> Call {CLUB.phoneDisplay}
          </a>
          <a className="btn btn--ghost" href={`mailto:${CLUB.email}?subject=${encodeURIComponent("Tennis lesson / court booking")}`}>
            <IconMail /> {CLUB.email}
          </a>
        </div>
      </header>

      <section className="section section--tight" aria-labelledby="en-lessons">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <h2 id="en-lessons" className="h2">
              Lessons
            </h2>
            <ul className="ticks" style={{ fontSize: 17 }}>
              <li>Children from age 4: private lessons or small groups of up to 4.</li>
              <li>Adults, up to the age of 85: private and two-person lessons.</li>
              <li>Training with a ball machine.</li>
              <li>Racket rental on request, racket stringing with an electric machine.</li>
              <li>Summer tennis camps for children: ask Ervin about this year&apos;s dates.</li>
            </ul>
            <p className="muted">
              Your coach: Dr. Ervin Berkó, certified tennis coach and owner of the club; No. 7 on the ITF Senior World
              Ranking, Serbian and Hungarian senior international winner and Hungarian senior champion.
            </p>
          </div>
          <figure className="photo photo--sky" style={{ aspectRatio: "4 / 3" }} data-reveal>
            <Image src="/img/court-net-wide.jpg" alt="A clay court at the Ziccer Tennis Arena" fill sizes="(min-width: 901px) 44vw, 92vw" />
          </figure>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="en-courts">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <h2 id="en-courts" className="h2">
              Court fees
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Per court, for the whole booking. The coach&apos;s fee is agreed with Ervin.
            </p>
          </div>
          <PriceTable en caption="Court fees per court" />
        </div>
      </section>

      <section className="section" aria-labelledby="en-book">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <h2 id="en-book" className="h2">
              Booking and <em>finding us</em>
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Call or email Ervin with the day, time and length you would like. Payment is by bank transfer, or in cash on site
              when agreed with him. Cancellations are possible outside 48 hours.
            </p>
          </div>
          <dl className="info" style={{ marginTop: 0 }}>
            <div>
              <dt>Address</dt>
              <dd>
                {CLUB.address}, {CLUB.postcode} {CLUB.city}
              </dd>
            </div>
            <div>
              <dt>GPS</dt>
              <dd>Opposite {CLUB.gps}</dd>
            </div>
            <div>
              <dt>Bus</dt>
              <dd>Lines 46 and 46/Y</dd>
            </div>
            <div>
              <dt>Map</dt>
              <dd>
                <a href={CLUB.mapsHref} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Google Maps <IconArrowUpRight />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
