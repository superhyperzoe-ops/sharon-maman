import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function MentionsLegalesPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Mentions légales
          </h1>
          <p className="text-base leading-relaxed text-ink/80">
            Placeholder pour les informations légales obligatoires du cabinet.
          </p>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            Éditeur du site
          </h2>
          <p className="text-sm text-ink/80">
            Sharon Maman, Avocat au Barreau de Paris, 12 rue de la Paix, 75002
            Paris.
          </p>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            Hébergeur
          </h2>
          <p className="text-sm text-ink/80">
            Informations d&apos;hébergement à compléter.
          </p>
        </div>
      </Container>
    </Section>
  );
}
