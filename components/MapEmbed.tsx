"use client";

import Image from "next/image";
import { useState } from "react";
import { CLUB } from "@/lib/site";
import { IconArrowUpRight, IconPin } from "./Icons";

const EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(`${CLUB.navName} Debrecen`)}&z=15&output=embed`;

/** The map loads Google only when asked, so the page stays fast and nothing is shared before a click. */
export function MapEmbed() {
  const [on, setOn] = useState(false);
  return (
    <div className="map photo">
      {on ? (
        <iframe src={EMBED} title={`${CLUB.name} a térképen`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      ) : (
        <>
          <Image src="/img/courts-panorama.jpg" alt="" fill sizes="(min-width: 981px) 50vw, 92vw" className="map__bg" />
          <div className="map__cover">
            <IconPin className="map__pin" />
            <p className="small">
              {CLUB.address}, {CLUB.city} · GPS: {CLUB.gps}
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <button type="button" className="btn btn--small" onClick={() => setOn(true)}>
                Térkép betöltése
              </button>
              <a className="btn btn--small btn--ghost" href={CLUB.mapsHref} target="_blank" rel="noopener noreferrer">
                Google Térkép <IconArrowUpRight />
              </a>
            </div>
            <p className="map__note">A térképet a Google Maps tölti be.</p>
          </div>
        </>
      )}
    </div>
  );
}
