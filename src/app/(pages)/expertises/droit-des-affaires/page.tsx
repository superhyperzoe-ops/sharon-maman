import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Corporate & Fusions-Acquisitions",
  description:
    "Accompagnement en droit des sociétés, gouvernance, levées de fonds et opérations de fusion-acquisition.",
  keywords: [
    "droit des affaires",
    "fusion-acquisition",
    "levée de fonds",
    "gouvernance",
    "avocat Paris",
  ],
};

export default function DroitDesAffairesPage() {
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
              Corporate &amp; Fusions-Acquisitions
            </h1>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink/80 text-justify">
            <p>
              Le cabinet conseille les entreprises et fonds d’investissement de toutes tailles
              ainsi que leurs dirigeants dans leurs opérations de cession, d’acquisition,
              d’investissement, de réorganisation et de gouvernance. Il les accompagne à chaque
              étape de la vie de la société, de sa constitution à sa dissolution, en intervenant
              aussi bien sur les problématiques courantes de droit des sociétés que sur les
              opérations stratégiques de croissance ou de transmission.
            </p>
            <p>
              En matière de droit des sociétés, le cabinet accompagne les sociétés dans leur
              secrétariat juridique courant et le respect de leurs obligations sociales, la
              préparation et la tenue de leurs assemblées générales, la rédaction des
              procès-verbaux, ainsi que la nomination ou la révocation des organes de direction et
              l’organisation de la gouvernance. Le cabinet intervient également sur les opérations
              d’évolution du capital, l’émission de valeurs mobilières, le choix de la rémunération
              des mandataires sociaux et la rédaction des rapports réglementaires.
            </p>
            <p>
              L’accompagnement couvre la structuration juridique et capitalistique des opérations,
              la définition des équilibres entre associés, ainsi que la préparation et la
              négociation des actes nécessaires à leur mise en œuvre.
            </p>
            <p>
              Le cabinet assiste par ailleurs ses clients lors de levées de fonds, de prises de
              participation et d’opérations de fusions-acquisitions, en assurant leur structuration
              et leur sécurisation juridique, incluant la réalisation d’audits juridiques, la
              rédaction de la documentation précontractuelle et contractuelle, ainsi que la
              négociation des engagements et garanties.
            </p>
            <p>
              Il intervient également dans le cadre de restructurations juridiques, d’opérations
              de croissance externe, d’apports ou de transformations de sociétés.
            </p>
            <p>
              Dans une logique d’accompagnement global, le cabinet assure une veille juridique et
              fiscale constante et peut intervenir, le cas échéant, dans la revue de documents
              sociaux et financiers en lien avec les conseils compétents.
            </p>
            <p className="pt-2 text-base italic font-medium text-accent">
              Le cabinet intervient dans l’ensemble des opérations structurantes et capitalistiques
              des entreprises, dirigeants et investisseurs, en assurant leur sécurisation juridique
              et la protection des intérêts en présence.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
