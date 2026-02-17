import Link from "next/link";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const articles = [
  {
    slug: "reforme-procedures-civiles-2024",
    title: "Réforme des procédures civiles : points clés 2024",
    date: "Janvier 2024",
    excerpt:
      "Synthèse des changements majeurs et impacts pour les entreprises et les praticiens.",
  },
  {
    slug: "negociation-contractuelle-clauses-critiques",
    title: "Négociation contractuelle : sécuriser vos clauses critiques",
    date: "Décembre 2023",
    excerpt:
      "Clauses de responsabilité, audit, durée et sortie : les points à verrouiller.",
  },
  {
    slug: "prevenir-risque-contentieux-entreprise",
    title: "Prévenir le risque contentieux en entreprise",
    date: "Novembre 2023",
    excerpt:
      "Mettre en place des process et des indicateurs pour limiter l'exposition.",
  },
  {
    slug: "strategie-contentieuse-anticiper",
    title: "Stratégie contentieuse : anticiper les scénarios clés",
    date: "Octobre 2023",
    excerpt:
      "Cartographier les risques et bâtir une position procédurale cohérente.",
  },
  {
    slug: "croissance-externe-securiser",
    title: "Croissance externe : sécuriser les étapes décisives",
    date: "Septembre 2023",
    excerpt:
      "Points d'attention juridiques avant, pendant et après l'opération.",
  },
  {
    slug: "gouvernance-clarifier-roles",
    title: "Gouvernance : clarifier les rôles et responsabilités",
    date: "Août 2023",
    excerpt:
      "Statuts, délégations et pratiques internes pour une gouvernance saine.",
  },
  {
    slug: "gestion-litiges-commerciaux",
    title: "Gestion des litiges commerciaux : bonnes pratiques",
    date: "Juillet 2023",
    excerpt:
      "Préserver la relation tout en défendant les intérêts essentiels.",
  },
  {
    slug: "conformite-contrats-cadres",
    title: "Conformité et contrats cadres : les essentiels",
    date: "Juin 2023",
    excerpt:
      "Harmoniser les engagements et éviter les incohérences contractuelles.",
  },
  {
    slug: "negociation-sportive",
    title: "Négociation sportive : enjeux juridiques actuels",
    date: "Mai 2023",
    excerpt:
      "Encadrer la carrière et sécuriser les relations avec les clubs.",
  },
];

export default function ActualitesPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/70">
              Actualités
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Publications et analyses juridiques.
            </h1>
            <p className="text-base leading-relaxed text-ink/80">
              Retrouvez les dernières actualités, décryptages et événements du
              cabinet.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <Card
                key={article.title}
                className="flex h-full flex-col transition-colors hover:bg-sand/40"
              >
                <Link
                  href={`/actualites/${article.slug}`}
                  className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                    {article.date}
                  </p>
                  <h2 className="mt-4 text-base font-semibold text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm text-ink/80">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 text-xs uppercase tracking-[0.2em] text-ink/70">
                    Lire l&apos;article
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
