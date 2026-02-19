import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le cabinet Sharon Maman à Paris. Conseil en droit des affaires, transmission d'entreprise, acquisition et droit commercial.",
  keywords: [
    "contact avocat",
    "Sharon Maman",
    "Paris",
    "droit des affaires",
    "droit commercial",
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-white text-ink">
      <Section className="pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
            <div className="flex h-full flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/70">
                Contact
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Parlons de votre situation.
              </h1>
              <p className="text-base leading-relaxed text-ink/80">
                Le cabinet vous contactera dans les plus brefs délais.
              </p>
              <Card className="space-y-3 !bg-accent/10 !border-accent/10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                  Coordonnées
                </h2>
                <p className="text-sm text-ink/80">
                  16 rue Washington - 75008 Paris
                  <br />
                  +33 6 35 41 74 67
                  <br />
                  <a
                    href="mailto:sharonmaman.law@gmail.com"
                    className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    sharonmaman.law@gmail.com
                  </a>
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                  Du lundi au vendredi, de 9h à 20h, sur rendez-vous uniquement
                </p>
              </Card>
              <div className="flex-1 pb-6">
                <div className="h-full border border-sand bg-white">
                  <Image
                    src="/paris.jpg"
                    alt="Localisation du cabinet"
                    width={1200}
                    height={800}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={70}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </div>
  );
}
