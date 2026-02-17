import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const subcategories = [
  {
    title: "Encadrement des mandats",
    description:
      "Structuration des mandats et sécurisation des relations entre mandataires, clubs et fédérations.",
  },
  {
    title: "Conformité & réglementation",
    description:
      "Mise en conformité avec les règles nationales et internationales applicables au secteur sportif.",
  },
  {
    title: "Négociation & protection des intérêts",
    description:
      "Négociation contractuelle et protection des intérêts à chaque étape de la carrière.",
  },
];

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
              Mandataires sportifs
            </h1>
            <p className="text-base leading-relaxed text-ink/80">
              Un accompagnement juridique dédié aux acteurs du sport, pour
              sécuriser les trajectoires et les engagements.
            </p>
          </div>

          <div className="grid gap-6">
            {subcategories.map((item) => (
              <div key={item.title} className="border border-sand p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
