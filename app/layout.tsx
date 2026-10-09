import type { Metadata, Viewport } from "next";
import "@fontsource-variable/cormorant-garamond/wght.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "@fontsource-variable/instrument-sans/wght.css";
import "@/kits/dot-space/theme/space.css";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/foglalas.css";
import "@/styles/oktatas.css";
import "@/styles/kapcsolat.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { SpaceBackground } from "@/components/SpaceBackground";
import { CLUB } from "@/lib/site";

const SITE_URL = "https://teniszdebrecen.hu";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ziccer Tenisz Aréna · Teniszoktatás és pályabérlés Debrecenben",
    template: "%s · Ziccer Tenisz Aréna",
  },
  description:
    "Három salakpálya Debrecenben, a Határ útnál. Teniszoktatás gyerekeknek 4 éves kortól és felnőtteknek, magánóra és kiscsoport Dr. Berkó Ervin okleveles szakedzővel. Pályabérlés 2 000 Ft/órától.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: CLUB.name,
    images: [{ url: "/img/court-net-wide.jpg", width: 2200, height: 1100, alt: "A Ziccer Tenisz Aréna salakpályája a háló mentén" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1e1c",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: CLUB.name,
  alternateName: CLUB.legalName,
  url: SITE_URL,
  telephone: CLUB.phoneDisplay,
  email: CLUB.email,
  image: `${SITE_URL}/img/court-net-wide.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLUB.address,
    postalCode: CLUB.postcode,
    addressLocality: CLUB.city,
    addressCountry: "HU",
  },
  sameAs: [CLUB.facebookHref],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className="space" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">
          Ugrás a tartalomhoz
        </a>
        <SpaceBackground />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
