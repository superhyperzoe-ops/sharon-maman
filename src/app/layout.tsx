import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

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
  metadataBase: new URL("https://sharonmaman.vercel.app"),
  title: {
    default: "Sharon Maman — Avocat Paris",
    template: "%s | Sharon Maman",
  },
  description:
    "Cabinet d'avocat à Paris. Conseil stratégique, défense et accompagnement juridique sur mesure.",
  icons: {
    icon: "/favicon-3.ico",
    shortcut: "/favicon-3.ico",
    apple: "/apple-touch-icon.png",
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
    url: "https://sharonmaman.vercel.app",
    title: "Sharon Maman — Avocat Paris",
    description:
      "Cabinet d'avocat à Paris. Conseil stratégique, défense et accompagnement juridique sur mesure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharon Maman — Avocat Paris",
    description:
      "Cabinet d'avocat à Paris. Conseil stratégique, défense et accompagnement juridique sur mesure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${libreBaskerville.variable} ${frankRuhlLibre.variable} bg-background text-ink antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Sharon Maman",
              url: "https://sharonmaman.vercel.app",
              telephone: "+33 6 35 41 74 67",
              email: "sharonmaman.law@gmail.com",
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
