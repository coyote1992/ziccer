import { COURT_PRICES, PRICE_SPLIT, ft } from "@/lib/site";

/** The court fee from the club's booking form: before / after 15:00, without and with a pass. */
export function PriceTable({ caption, en = false }: { caption?: string; en?: boolean }) {
  const t = en
    ? { dur: "Duration", before: "before", after: "after", pass: "With a season pass", h: (l: string) => l.replace(",", ".").replace("óra", l.startsWith("1 ") ? "hour" : "hours") }
    : { dur: "Időtartam", before: "előtt", after: "után", pass: "Bérlettel", h: (l: string) => l };
  return (
    <div className="ptable glass">
      <table>
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            <th scope="col">
              <span className="sr-only">{t.dur}</span>
            </th>
            <th scope="col">{en ? `${t.before} ${PRICE_SPLIT}` : `${PRICE_SPLIT} ${t.before}`}</th>
            <th scope="col">{en ? `${t.after} ${PRICE_SPLIT}` : `${PRICE_SPLIT} ${t.after}`}</th>
          </tr>
        </thead>
        <tbody>
          {COURT_PRICES.map((p) => (
            <tr key={p.label}>
              <th scope="row">{t.h(p.label)}</th>
              <td className="num">{ft(p.before)}</td>
              <td className="num">{ft(p.after)}</td>
            </tr>
          ))}
        </tbody>
        <tbody className="ptable__pass">
          <tr>
            <th scope="rowgroup" colSpan={3}>
              {t.pass}
            </th>
          </tr>
          {COURT_PRICES.map((p) => (
            <tr key={`pass-${p.label}`}>
              <th scope="row">{t.h(p.label)}</th>
              <td className="num">{ft(p.passBefore)}</td>
              <td className="num">{ft(p.passAfter)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
