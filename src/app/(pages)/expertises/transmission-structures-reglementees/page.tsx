import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Transmission et acquisition d’entreprises",
  description:
    "Transmission et acquisition d’entreprises et structures réglementées : structuration, audit et sécurisation juridique.",
  keywords: [
    "transmission d'entreprise",
    "acquisition d'entreprise",
    "structures réglementées",
    "avocat Paris",
  ],
};

export default function TransmissionStructuresReglementeesPage() {
  return (
    <Section className="pt-24 pb-20">
      <Container>
        <div className="space-y-10">
          <div className="space-y-4">
            <a
              href="/expertises"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              ← Retour aux expertises
            </a>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Transmission et acquisition d’entreprises et de structures réglementées
            </h1>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink/80 text-justify">
            <p>
              Le cabinet accompagne les professionnels et dirigeants dans leurs opérations de
              transmission, d’acquisition et de reprise d’activités réglementées, en intégrant les
              spécificités juridiques, ordinales et économiques propres à ces secteurs.
            </p>
            <p>
              La transmission d’un cabinet, d’un fonds ou d’une structure d’exercice libéral
              constitue une étape structurante, engageant à la fois la continuité de l’activité, sa
              valorisation et les intérêts patrimoniaux des parties. Ces opérations nécessitent une
              maîtrise fine des contraintes sectorielles et des règles professionnelles
              applicables.
            </p>
            <p>
              Le cabinet intervient dès la phase préparatoire afin d’anticiper les enjeux,
              d’organiser la structuration juridique de l’opération et d’encadrer les négociations
              dans un cadre sécurisé. Il accompagne ses clients dans l’analyse préalable de la
              situation juridique et contractuelle, la définition du schéma de transmission, la
              rédaction et la négociation des actes, ainsi que la mise en œuvre des formalités
              nécessaires à la réalisation de l’opération.
            </p>
            <p>
              Il veille au respect des règles professionnelles et des procédures applicables afin
              d’assurer la régularité de l’opération.
            </p>
            <p>
              Le cabinet intervient notamment dans le cadre de cessions et acquisitions de fonds
              de commerce, dans la transmission de cabinets et de structures d’exercice libéral,
              ainsi que plus largement dans la structuration juridique complète des opérations,
              incluant l’audit préalable et le suivi post-réalisation.
            </p>
            <p className="pt-2 text-base italic font-medium text-accent">
              Le cabinet met à profit une expertise dédiée aux opérations de transmission et
              d’acquisition, assurant leur structuration stratégique et leur parfaite sécurisation
              juridique.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
