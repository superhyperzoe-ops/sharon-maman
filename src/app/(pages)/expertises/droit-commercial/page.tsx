import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function DroitCommercialPage() {
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
              Droit commercial et de la concurrence
            </h1>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink/80 text-justify">
            <p>
              Le cabinet intervient auprès des acteurs économiques — entreprises, dirigeants,
              partenaires commerciaux, agents ou intermédiaires — dans l’encadrement juridique de
              leurs relations d’affaires et dans la sécurisation de leur environnement commercial
              et concurrentiel. Son accompagnement vise à structurer des relations contractuelles
              équilibrées, anticiper les risques et assurer la conformité aux règles applicables.
            </p>
            <p>
              En matière de concurrence et de distribution, le cabinet accompagne la mise en place
              et l’organisation de réseaux, l’élaboration et la négociation des contrats qui
              structurent ces relations, ainsi que l’analyse des pratiques commerciales au regard
              des règles encadrant les déséquilibres significatifs, les pratiques restrictives ou
              les restrictions de concurrence.
            </p>
            <p>
              Le cabinet intervient également dans la rédaction et la négociation des contrats
              commerciaux qui organisent l’activité économique, qu’il s’agisse de contrats de
              distribution, d’agent commerciale, d’apporteur d’affaires, de partenariats, de
              prestations de services, de baux commerciaux, de location-gérance ou toutes modalités
              d’exploitation d’un fonds ou d’une activité. Il veille à sécuriser les droits et
              obligations des parties, à prévenir les situations de dépendance économique et à
              préserver l’équilibre contractuel.
            </p>
            <p>
              Plus largement, le cabinet accompagne ses clients dans la structuration juridique de
              leurs relations commerciales, en apportant une analyse pragmatique et adaptée aux
              enjeux économiques et stratégiques poursuivis, ainsi qu’aux règles applicables à ces
              activités.
            </p>
            <p className="pt-2 text-base italic font-medium text-accent">
              Le cabinet se tient à votre disposition pour analyser et sécuriser vos relations
              commerciales.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
