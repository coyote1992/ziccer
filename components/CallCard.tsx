import Link from "next/link";
import { CLUB } from "@/lib/site";
import { IconPhone } from "./Icons";

/** The booking card: the phone number first, because a call is the quickest way to a court. */
export function CallCard({ withForm = true }: { withForm?: boolean }) {
  return (
    <div className="callcard glass">
      <p className="eyebrow eyebrow--plain">Pályafoglalás</p>
      <a className="callcard__phone num" href={CLUB.phoneHref}>
        {CLUB.phoneDisplay}
      </a>
      <p className="muted small">{CLUB.coach}, okleveles szakedző</p>
      <dl className="callcard__rows">
        <div>
          <dt>Pálya</dt>
          <dd>2 000 Ft/órától</dd>
        </div>
        <div>
          <dt>Fizetés</dt>
          <dd>utalás vagy készpénz</dd>
        </div>
        <div>
          <dt>Lemondás</dt>
          <dd>48 órán kívül</dd>
        </div>
      </dl>
      <div className="callcard__cta">
        <a className="btn btn--block" href={CLUB.phoneHref}>
          <IconPhone /> Hívás most
        </a>
        {withForm && (
          <Link className="btn btn--ghost btn--block" href="/foglalas#keres">
            Foglalási kérés online
          </Link>
        )}
      </div>
    </div>
  );
}
