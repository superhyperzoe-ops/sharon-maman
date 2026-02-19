import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du cabinet Sharon Maman, avocate à Paris.",
  keywords: ["confidentialité", "RGPD", "avocat Paris", "Sharon Maman"],
};

export default function ConfidentialitePage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="text-base leading-relaxed text-ink/80">
            Placeholder pour la politique de confidentialité du cabinet et les
            informations relatives à la protection des données.
          </p>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            Données collectées
          </h2>
          <p className="text-sm text-ink/80">
            Nom, email, message et informations fournies via le formulaire de
            contact.
          </p>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            Finalités
          </h2>
          <p className="text-sm text-ink/80">
            Répondre aux demandes, planifier un rendez-vous et assurer le suivi
            des échanges.
          </p>
        </div>
      </Container>
    </Section>
  );
}
