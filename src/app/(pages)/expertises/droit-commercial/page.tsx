import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const subcategories = [
  {
    title: "Contrats commerciaux",
    description:
      "Rédaction, négociation et sécurisation des contrats stratégiques pour garantir des relations durables.",
  },
  {
    title: "Distribution & partenariats",
    description:
      "Encadrement des réseaux, franchises et partenariats afin d'anticiper les risques opérationnels.",
  },
  {
    title: "Pré-contentieux & litiges",
    description:
      "Gestion des tensions commerciales, prévention des ruptures et défense des intérêts en cas de différend.",
  },
];

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
              Droit commercial
            </h1>
            <p className="text-base leading-relaxed text-ink/80">
              Sécuriser les échanges, protéger les engagements et maintenir la
              stabilité des relations commerciales.
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
