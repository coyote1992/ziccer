// The club's emblem, redrawn from the sign on the clubhouse gable: two crossed rackets in a
// ring reading "Ziccer Tenisz és Szabadidő Klub · Debrecen". `mark` is the small version for
// the header and favicon sizes, where the lettering would not read.

function Racket({ angle, strings }: { angle: number; strings: number }) {
  const id = `head-${angle < 0 ? "l" : "r"}-${strings}`;
  const rows = [];
  for (let x = -14; x <= 14; x += strings) rows.push(<line key={`v${x}`} x1={x} y1={-70} x2={x} y2={-30} />);
  for (let y = -68; y <= -32; y += strings) rows.push(<line key={`h${y}`} x1={-15} y1={y} x2={15} y2={y} />);
  return (
    <g transform={`rotate(${angle})`}>
      <clipPath id={id}>
        <ellipse cx="0" cy="-50" rx="13" ry="17.5" />
      </clipPath>
      <g clipPath={`url(#${id})`} strokeWidth="1" opacity="0.75">
        {rows}
      </g>
      <ellipse cx="0" cy="-50" rx="14" ry="18.5" fill="none" strokeWidth="3.4" />
      <path d="M-5.5 -33 L-1.6 -21 M5.5 -33 L1.6 -21" fill="none" strokeWidth="2.4" />
      <line x1="0" y1="-21" x2="0" y2="12" strokeWidth="3.4" />
      <line x1="0" y1="2" x2="0" y2="16" strokeWidth="5.6" strokeLinecap="round" />
    </g>
  );
}

export function Crest({ variant = "full", className, title }: { variant?: "full" | "mark"; className?: string; title?: string }) {
  const mark = variant === "mark";
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="100" cy="100" r="95" strokeWidth={mark ? 7 : 4} />
      {!mark && (
        <>
          <circle cx="100" cy="100" r="66" strokeWidth="1.6" opacity="0.6" />
          <defs>
            {/* the name runs three quarters of the way round, from lower left over the top; the city sits at the bottom */}
            <path id="crest-top" d="M 46.3 153.7 A 76 76 0 1 1 153.7 153.7" />
            <path id="crest-bottom" d="M 32.4 139 A 78 78 0 0 0 167.6 139" />
          </defs>
          <text fill="currentColor" stroke="none" fontSize="14" letterSpacing="1.1" fontWeight="600" fontFamily="var(--font-sans)">
            <textPath href="#crest-top" startOffset="50%" textAnchor="middle">
              ZICCER TENISZ ÉS SZABADIDŐ KLUB
            </textPath>
          </text>
          <text fill="currentColor" stroke="none" fontSize="14" letterSpacing="3" fontWeight="600" fontFamily="var(--font-sans)">
            <textPath href="#crest-bottom" startOffset="50%" textAnchor="middle" dominantBaseline="hanging">
              DEBRECEN
            </textPath>
          </text>
        </>
      )}
      <g transform={mark ? "translate(100 122) scale(1.25)" : "translate(100 121) scale(0.92)"} strokeLinecap="round">
        <Racket angle={-31} strings={mark ? 7 : 4.6} />
        <Racket angle={31} strings={mark ? 7 : 4.6} />
      </g>
    </svg>
  );
}
