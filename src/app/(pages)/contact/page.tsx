import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <div className="bg-white text-ink">
      <Section className="pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
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
              <div className="flex items-center justify-center overflow-hidden border border-sand bg-white">
                <Image
                  src="/shacontact.jpg"
                  alt="Localisation du cabinet"
                  width={1200}
                  height={800}
                  className="h-48 w-auto max-w-full object-contain lg:h-56"
                />
              </div>
            </div>
            <Card className="h-full">
              <form className="flex h-full flex-col gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="nom"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Votre nom"
                    className="w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="entreprise"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Entreprise
                  </label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    placeholder="Nom de l’entreprise"
                    className="w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nom@domaine.fr"
                    className="w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="telephone"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="+33 6 35 41 74 67"
                    className="w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Expliquez votre besoin en quelques lignes."
                    className="min-h-[180px] w-full flex-1 border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <Button type="submit" className="mt-auto">
                  Envoyer
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
