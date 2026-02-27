import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FAVICON_VERSION, SITE_URL } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-cabinet",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sharon Maman | Avocat à Paris",
    template: "%s | Sharon Maman",
  },
  description:
    "Maître Sharon Maman, avocate à Paris. Conseil stratégique, défense et accompagnement juridique sur mesure.",
  icons: {
    icon: [
      { url: `/favicon.ico?v=${FAVICON_VERSION}` },
      {
        url: `/favicon-32x32.png?v=${FAVICON_VERSION}`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `/favicon-16x16.png?v=${FAVICON_VERSION}`,
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: `/apple-touch-icon.png?v=${FAVICON_VERSION}`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "droit des affaires",
    "Sharon Maman",
    "avocat",
    "Paris",
    "mandataire sportif",
    "droit commercial",
    "transmission d'entreprise",
    "acquisition d'entreprise",
    "fusion-acquisition",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: "Sharon Maman | Avocat à Paris",
    description:
      "Maître Sharon Maman, avocate à Paris. Conseil stratégique, défense et accompagnement juridique sur mesure.",
    siteName: "Sharon Maman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharon Maman | Avocat à Paris",
    description:
      "Maître Sharon Maman, avocate à Paris. Conseil stratégique, défense et accompagnement juridique sur mesure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faviconSuffix = `?v=${FAVICON_VERSION}`;

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href={`/favicon.ico${faviconSuffix}`} sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon-32x32.png${faviconSuffix}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.png${faviconSuffix}`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/apple-touch-icon.png${faviconSuffix}`}
        />
      </head>
      <body
        className={`${montserrat.variable} ${libreBaskerville.variable} ${frankRuhlLibre.variable} bg-background text-ink antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Maître Sharon Maman",
              url: SITE_URL,
              telephone: "+33 6 35 41 74 67",
              email: "sharonmaman.law@gmail.com",
              image: `${SITE_URL}/Sharon2.jpeg`,
              jobTitle: "Avocate",
              address: {
                "@type": "PostalAddress",
                streetAddress: "16 rue Washington",
                postalCode: "75008",
                addressLocality: "Paris",
                addressCountry: "FR",
              },
              areaServed: "FR",
              openingHours: "Mo-Fr 09:00-20:00",
            }),
          }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
