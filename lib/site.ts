// Every fact on the site comes from here, so it can be checked against the club's own
// materials in one place: teniszdebrecen.hu (pages, booking form, flyers) and the owner's emails.

export const CLUB = {
  name: "Ziccer Tenisz Aréna",
  legalName: "Ziccer Tenisz és Szabadidő Klub",
  city: "Debrecen",
  coach: "Dr. Berkó Ervin",
  phoneDisplay: "+36 70 943 2732",
  phoneShort: "70 943 2732",
  phoneHref: "tel:+36709432732",
  smsHref: "sms:+36709432732",
  email: "ziccertc@gmail.com",
  address: "Nagy Mihály kert 32/B",
  postcode: "4002",
  gps: "Határ út 33.",
  navName: "ZICCER Tenisz Aréna",
  mapsHref: "https://www.google.com/maps?cid=4418372264301073477",
  facebookHref: "https://www.facebook.com/p/ZICCER-Tenisz-Ar%C3%A9na-100067805612328/",
  bank: { name: "OTP Bank", holder: "Dr. Berkó Ervin", account: "11773384-03044085" },
  photoCredit: { name: "Kiss Lóránt", href: "http://www.lorantkiss.com" },
} as const;

/** Court fee for one court, from the club's booking form. */
export const COURT_PRICES = [
  { hours: 1, label: "1 óra", before: 2000, after: 3000, passBefore: 700, passAfter: 1050 },
  { hours: 1.5, label: "1,5 óra", before: 3000, after: 4500, passBefore: 1050, passAfter: 1600 },
] as const;

export const PRICE_SPLIT = "15:00";

/** Hungarian price format with a thin no-break space between thousands: 2 000 Ft. */
export const ft = (n: number) => `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f")}\u00a0Ft`;

export const COACH_CREDENTIALS = [
  "Okleveles szakedző",
  "Az ITF szenior világranglistáján 7. helyezett",
  "Szerb és magyar szenior nemzetközi tornagyőztes",
  "Szenior magyar bajnok",
] as const;

/** Real Google reviews of the club (via its public Maps listing). */
export const REVIEWS = [
  { text: "Évek óta járunk oda. […] A pályák jó minőségűek.", author: "Szarka Gyula", date: "2023. november" },
  { text: "Kiváló sportolási lehetőségek három pályával.", author: "Szabó Zsolt", date: "2023. szeptember" },
] as const;

export const SUPPORTERS = [
  "Diego",
  "CívisAgro Állatgyógyszertár",
  "Emil és Társai Takarító Kft.",
  "Raditherm Plusz Kft.",
  "Kristály-Clean Kft.",
  "Kosz-Faló Kft.",
  "HúsBest Kft.",
  "Pannónia Kincse",
] as const;

export const NAV = [
  { href: "/#palyak", label: "Pályák és árak" },
  { href: "/oktatas", label: "Oktatás" },
  { href: "/foglalas", label: "Foglalás" },
  { href: "/kapcsolat", label: "Kapcsolat" },
] as const;
