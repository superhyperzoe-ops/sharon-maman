import Link from "next/link";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const articles = [
  {
    slug: "reprise-activite",
    title:
      "Reprise de fonds de commerce ou de cabinet libéral : 5 conseils juridiques pour sécuriser votre acquisition",
    date: "Article",
    excerpt:
      "Cinq conseils juridiques pour sécuriser durablement une reprise d’activité.",
  },
  {
    slug: "pacte-associes",
    title: "Le pacte d’associés : un instrument juridique d’anticipation stratégique",
    date: "Article",
    excerpt: "Organiser les relations entre associés et anticiper les risques.",
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
              Publications et décryptage juridique
            </h1>
            <p className="text-base leading-relaxed text-ink/80">
              Retrouvez les dernières actualités, décryptages et événements du
              cabinet.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={`/actualites/${article.slug}`}
                className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Card className="flex h-full min-h-[260px] flex-col !bg-sand/40 transition-colors hover:!bg-sand/70 md:min-h-[320px]">
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
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
