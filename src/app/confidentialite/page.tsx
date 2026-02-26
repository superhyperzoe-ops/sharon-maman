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
        <div className="space-y-6 text-ink/80">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="text-base leading-relaxed">Page en construction</p>
        </div>
      </Container>
    </Section>
  );
}
