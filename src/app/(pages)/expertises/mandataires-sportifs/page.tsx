import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Mandataire sportif",
  description:
    "Accompagnement juridique des acteurs du sport professionnel : contrats, transferts, partenariats et droits à l’image.",
  keywords: [
    "mandataire sportif",
    "droit du sport",
    "contrats sportifs",
    "avocat Paris",
  ],
};

export default function MandatairesSportifsPage() {
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
              Mandataire Sportif – Accompagnement juridique des acteurs du sport professionnel
            </h1>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink/80 text-justify">
            <p>
              Titulaire de la qualification de mandataire sportif, Maître Sharon Maman intervient
              auprès des sportifs professionnels, clubs, entraîneurs et autres acteurs du sport
              dans la structuration et la sécurisation de leurs relations contractuelles.
            </p>
            <p>
              À ce titre, elle peut être amenée à représenter ses mandants dans la négociation et
              la conclusion de leurs contrats, qu’il s’agisse de contrats de travail, d’accords de
              transfert, de conventions de sponsoring ou d’exploitation des droits à l’image. Elle
              intervient au nom et pour le compte de ses clients, avec une approche rigoureuse et
              stratégique.
            </p>
            <p>
              Maître Sharon Maman accompagne également les opérations de transfert et les
              changements de structure sportive, en veillant au respect des réglementations
              applicables et à la sécurisation des intérêts financiers et contractuels en jeu.
            </p>
            <p>
              Son intervention ne se limite pas à la négociation ponctuelle d’un contrat. Elle
              s’inscrit dans une logique d’accompagnement global, intégrant la gestion des
              partenariats commerciaux, la valorisation des droits à l’image et l’organisation
              juridique de la carrière sportive.
            </p>
            <p>
              Forte d’une pratique dédiée au secteur sportif, Maître Sharon Maman met son expertise
              au service de sportifs professionnels comme d’acteurs en devenir, avec la même
              exigence et la même rigueur.
            </p>
            <p className="pt-2 text-base italic font-medium text-ink">
              En qualité de mandataire sportif, Maître Sharon Maman vous accompagne avec exigence
              et vision stratégique dans la protection et la valorisation de vos intérêts.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
