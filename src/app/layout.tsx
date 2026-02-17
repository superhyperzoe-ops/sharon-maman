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
  title: {
    default: "Sharon Maman — Avocat Paris",
    template: "%s | Sharon Maman",
  },
  description:
    "Cabinet d'avocat à Paris. Conseil stratégique, défense et accompagnement juridique sur mesure.",
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
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
