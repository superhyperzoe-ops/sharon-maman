import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const subcategories = [
  {
    title: "Structuration & gouvernance",
    description:
      "Choix de structure, organisation des pouvoirs, pactes d'associés et règles de gouvernance adaptées aux enjeux de l'entreprise.",
  },
  {
    title: "Opérations stratégiques",
    description:
      "Accompagnement des opérations de croissance, restructurations et arbitrages complexes avec une sécurisation juridique intégrale.",
  },
  {
    title: "Financement & relations investisseurs",
    description:
      "Mise en place des mécanismes de financement et coordination des échanges avec les investisseurs sur des dossiers sensibles.",
  },
];

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
              Droit des affaires
            </h1>
            <p className="text-base leading-relaxed text-ink/80">
              Une approche stratégique pour sécuriser les décisions structurantes,
              anticiper les risques et accompagner la croissance.
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
