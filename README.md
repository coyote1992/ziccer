# Ziccer Tenisz Aréna, weboldal

Új weboldal a debreceni Ziccer Tenisz Arénának (teniszdebrecen.hu): három salakpálya,
teniszoktatás Dr. Berkó Ervin okleveles szakedzővel, pályafoglalás.

Next.js (App Router) + TypeScript, statikusan generált oldalak. A háttér a `kits/dot-space`
WebGL pontmező: a kezdőlapon görgetésre formákat vesz fel, az aloldalakon csendes csillagmező.

## Futtatás

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # éles build
npm run start
npm run lint       # TypeScript ellenőrzés
npm run check:space -- http://localhost:3000/   # a pontformák ellenőrzése (Playwright kell hozzá)
```

## Oldalak

| Útvonal | Tartalom |
|---|---|
| `/` | Kezdőlap: pályák és árak, az edző, oktatás, foglalás menete, nyári tábor, vélemények, megközelítés |
| `/foglalas` | Foglalási kérés (e-mail vagy SMS), mi történik utána, utalási adatok, árak, szabályok |
| `/oktatas` | Gyerek- és felnőttoktatás, adogatógép, díjak, az edző, nyári tábor |
| `/kapcsolat` | Elérhetőség, cím, megközelítés, térkép (kattintásra töltődik), támogatók |
| `/en` | Rövid angol nyelvű összefoglaló |

## A tartalom forrása

Minden tény a `lib/site.ts` fájlban van, egy helyen ellenőrizhetően. Források: a jelenlegi
teniszdebrecen.hu oldalai, a foglalási űrlap (pályadíjak), a klub szórólapjai (oktatás, tábor,
bérletek), Dr. Berkó Ervin e-mailje (40 év tapasztalat, készpénzes fizetés a helyszínen), és két
nyilvános Google-értékelés. A fotók a régi oldalról származnak (Kiss Lóránt felvételei); a címer a
klubház oromzatán lévő tábla újrarajzolt változata (`components/Crest.tsx`).

A foglalási kérés nem élő naptár: a látogató a saját levelező- vagy üzenetküldő alkalmazásából
küldi el Ervinnek, aki visszaigazolja. Élesítéskor bekötheti egy foglalási rendszer vagy
e-mail-küldő szolgáltatás.

## A pontmező

A koreográfia a `lib/space-config.ts` fájlban van: pályavonalak (`#palyak`), „No.7” Ervin ITF
szenior világranglista-helyezéséről (`#edzo-title`), ütő (`#oktatas`), forgó labda (`#tabor`),
végül fekete lyuk (`.final`). A kit leírása: `kits/dot-space/SKILL.md`.
