"use client";

import { useMemo, useRef, useState } from "react";
import { CLUB, COURT_PRICES, PRICE_SPLIT, ft } from "@/lib/site";
import { IconCheck, IconCopy, IconMail, IconChat } from "./Icons";

type Mode = "court" | "coach";

const DURATIONS = ["1", "1.5", "2"] as const;
const durationLabel = (d: string) => (d === "1.5" ? "1,5 óra" : `${d} óra`);

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function longDate(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("hu-HU", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
}

/**
 * A booking request, not a live calendar: the visitor fills in what they want, sees the court
 * fee from the club's price list, and sends the request to Ervin by email or SMS from their own
 * device. Ervin confirms it, exactly as the club's booking flow works today.
 */
export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [mode, setMode] = useState<Mode>("court");
  const [people, setPeople] = useState("1");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState<(typeof DURATIONS)[number]>("1");
  const [court, setCourt] = useState("Mindegy");
  const [pass, setPass] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState<null | "email" | "sms">(null);
  const [copied, setCopied] = useState(false);

  const estimate = useMemo(() => {
    const row = COURT_PRICES.find((p) => String(p.hours) === duration);
    if (!row || !time) return null;
    const after = time >= PRICE_SPLIT;
    const price = pass ? (after ? row.passAfter : row.passBefore) : after ? row.after : row.before;
    return { price, after };
  }, [duration, time, pass]);

  const message = useMemo(() => {
    const lines = [
      `Foglalási kérés – ${CLUB.name}`,
      "",
      `Mit: ${mode === "court" ? "pályabérlés (edző nélkül)" : `edzés Ervinnel, ${people} fő`}`,
      `Nap: ${longDate(date) || "–"}`,
      `Kezdés: ${time || "–"}, időtartam: ${durationLabel(duration)}`,
      `Pálya: ${court}`,
      `Bérlet: ${pass ? "van" : "nincs"}`,
      "",
      `Név: ${name}`,
      `Telefon: ${phone}`,
    ];
    if (email) lines.push(`E-mail: ${email}`);
    if (note.trim()) lines.push("", `Megjegyzés: ${note.trim()}`);
    return lines.join("\n");
  }, [mode, people, date, time, duration, court, pass, name, phone, email, note]);

  const send = (via: "email" | "sms") => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const subject = `Foglalási kérés: ${longDate(date)} ${time}`;
    const href =
      via === "email"
        ? `mailto:${CLUB.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
        : `${CLUB.smsHref}?&body=${encodeURIComponent(message)}`;
    window.location.href = href;
    setSent(via);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <form
      ref={formRef}
      className="bform glass"
      noValidate={false}
      onSubmit={(e) => {
        e.preventDefault();
        send("email");
      }}
      aria-describedby="bform-help"
    >
      <fieldset className="bform__group">
        <legend className="bform__legend">Mit szeretnél?</legend>
        <div className="seg" role="radiogroup">
          {(
            [
              ["court", "Csak pályát"],
              ["coach", "Edzést Ervinnel"],
            ] as const
          ).map(([v, l]) => (
            <label key={v} className="seg__opt">
              <input type="radio" name="mode" value={v} checked={mode === v} onChange={() => setMode(v)} />
              <span>{l}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {mode === "coach" && (
        <div className="bform__field">
          <label htmlFor="bf-people">Hányan lesztek?</label>
          <select id="bf-people" value={people} onChange={(e) => setPeople(e.target.value)}>
            <option value="1">1 fő – magánóra</option>
            <option value="2">2 fő – kétfős óra</option>
            <option value="3">3 fő – kiscsoport</option>
            <option value="4">4 fő – gyerek kiscsoport</option>
          </select>
          {Number(people) >= 3 && <p className="bform__hint">Háromfős edzéshez másfél vagy kétórás foglalkozást javaslunk.</p>}
        </div>
      )}

      <div className="bform__row">
        <div className="bform__field">
          <label htmlFor="bf-date">Nap</label>
          <input id="bf-date" type="date" required min={todayISO()} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="bform__field">
          <label htmlFor="bf-time">Kezdés</label>
          <input id="bf-time" type="time" required step={1800} value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
      </div>

      <fieldset className="bform__group">
        <legend className="bform__legend">Időtartam</legend>
        <div className="seg seg--3">
          {DURATIONS.map((d) => (
            <label key={d} className="seg__opt">
              <input type="radio" name="duration" value={d} checked={duration === d} onChange={() => setDuration(d)} />
              <span>{durationLabel(d)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="bform__row">
        <div className="bform__field">
          <label htmlFor="bf-court">Pálya</label>
          <select id="bf-court" value={court} onChange={(e) => setCourt(e.target.value)}>
            <option>Mindegy</option>
            <option>1-es pálya</option>
            <option>2-es pálya</option>
            <option>3-as pálya</option>
          </select>
        </div>
        <label className="bform__check">
          <input type="checkbox" checked={pass} onChange={(e) => setPass(e.target.checked)} />
          <span>Van bérletem</span>
        </label>
      </div>

      <div className="estimate" aria-live="polite">
        <span className="estimate__label">Pályadíj</span>
        {estimate ? (
          <>
            <span className="estimate__price num">{ft(estimate.price)}</span>
            <span className="estimate__why">
              {durationLabel(duration)}, kezdés {PRICE_SPLIT} {estimate.after ? "után" : "előtt"}, {pass ? "bérlettel" : "bérlet nélkül"}
              {mode === "coach" ? " · az edzői díjat Ervinnel egyeztetheted" : ""}
            </span>
          </>
        ) : (
          <span className="estimate__why">
            {duration === "2" ? "A kétórás foglalás díját Ervinnel egyeztetheted." : "Add meg a kezdés idejét, és megmutatjuk a díjat."}
          </span>
        )}
      </div>

      <div className="bform__row">
        <div className="bform__field">
          <label htmlFor="bf-name">Név</label>
          <input id="bf-name" required minLength={3} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="bform__field">
          <label htmlFor="bf-phone">Telefon</label>
          <input id="bf-phone" type="tel" required minLength={7} autoComplete="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <div className="bform__field">
        <label htmlFor="bf-email">
          E-mail <span className="muted">(nem kötelező)</span>
        </label>
        <input id="bf-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="bform__field">
        <label htmlFor="bf-note">
          Megjegyzés <span className="muted">(nem kötelező)</span>
        </label>
        <textarea id="bf-note" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Pl. kezdők vagyunk, ütőt bérelnénk." />
      </div>

      <div className="bform__send">
        <button type="submit" className="btn">
          <IconMail /> Küldés e-mailben
        </button>
        <button type="button" className="btn btn--ghost bform__sms" onClick={() => send("sms")}>
          <IconChat /> Küldés SMS-ben
        </button>
      </div>
      <p id="bform-help" className="small muted bform__help">
        A kérést a saját levelező- vagy üzenetküldő alkalmazásod küldi el Ervinnek; ez az oldal nem tárol adatot. A foglalás az
        ő visszaigazolásával lesz végleges.
      </p>

      {sent && (
        <div className="bform__done" role="status">
          <IconCheck />
          <div>
            <p>
              <strong>{sent === "email" ? "Megnyitottuk a levelet." : "Megnyitottuk az üzenetet."}</strong> Küldd el, és Ervin
              visszajelez. Ha nem nyílt meg semmi, másold ki a kérést, vagy hívd: <a href={CLUB.phoneHref}>{CLUB.phoneShort}</a>.
            </p>
            <button type="button" className="link-arrow bform__copy" onClick={copy}>
              <IconCopy /> {copied ? "Kimásolva" : "Kérés másolása"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
