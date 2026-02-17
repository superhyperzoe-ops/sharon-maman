import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const articles = [
  {
    slug: "reforme-procedures-civiles-2024",
    title: "Réforme des procédures civiles : points clés 2024",
    date: "Janvier 2024",
    content: [
      "Cet article présente une synthèse des évolutions majeures et de leurs impacts pratiques. Il s'agit de points de vigilance à intégrer dans la gestion quotidienne des dossiers.",
      "Nous détaillons les changements procéduraux, les délais renforcés et les implications sur la stratégie de défense. L'objectif : sécuriser la conduite des procédures dès l'amont.",
      "Une lecture stratégique permet d'anticiper les effets concrets sur les entreprises et d'ajuster la documentation contractuelle en conséquence.",
    ],
  },
  {
    slug: "negociation-contractuelle-clauses-critiques",
    title: "Négociation contractuelle : sécuriser vos clauses critiques",
    date: "Décembre 2023",
    content: [
      "La négociation contractuelle impose une attention particulière aux clauses structurantes, notamment la responsabilité, la durée et les modalités de sortie.",
      "Une rédaction précise réduit les zones d'incertitude et limite l'exposition au risque contentieux.",
      "Cet article propose une approche méthodique pour sécuriser les clauses sensibles tout en préservant l'équilibre de la relation commerciale.",
    ],
  },
  {
    slug: "prevenir-risque-contentieux-entreprise",
    title: "Prévenir le risque contentieux en entreprise",
    date: "Novembre 2023",
    content: [
      "La prévention du risque contentieux repose sur des process clairs et des indicateurs de suivi adaptés à l'activité.",
      "L'identification précoce des zones de friction permet d'agir avant la cristallisation du litige.",
      "Nous proposons des outils concrets pour structurer une politique de prévention efficace et pérenne.",
    ],
  },
  {
    slug: "strategie-contentieuse-anticiper",
    title: "Stratégie contentieuse : anticiper les scénarios clés",
    date: "Octobre 2023",
    content: [
      "Une stratégie contentieuse maîtrisée commence par une cartographie des risques et des scénarios possibles.",
      "L'anticipation des arguments adverses et des étapes procédurales renforce la position dès les premiers échanges.",
      "Cet article propose un cadre de préparation stratégique pour gagner en cohérence et en efficacité.",
    ],
  },
  {
    slug: "croissance-externe-securiser",
    title: "Croissance externe : sécuriser les étapes décisives",
    date: "Septembre 2023",
    content: [
      "Une opération de croissance externe exige un pilotage juridique rigoureux à chaque étape.",
      "La due diligence, les garanties et la gouvernance post-opération sont des points déterminants.",
      "Nous présentons les précautions essentielles pour sécuriser les décisions et limiter les risques.",
    ],
  },
  {
    slug: "gouvernance-clarifier-roles",
    title: "Gouvernance : clarifier les rôles et responsabilités",
    date: "Août 2023",
    content: [
      "La gouvernance efficace repose sur une répartition claire des rôles et une organisation documentée.",
      "Les délégations et procédures internes doivent être adaptées aux enjeux et à la taille de la structure.",
      "Cet article met en lumière les bonnes pratiques pour renforcer la cohérence décisionnelle.",
    ],
  },
  {
    slug: "gestion-litiges-commerciaux",
    title: "Gestion des litiges commerciaux : bonnes pratiques",
    date: "Juillet 2023",
    content: [
      "La gestion des litiges commerciaux requiert une approche équilibrée entre fermeté et maintien de la relation.",
      "Une documentation complète et une stratégie claire réduisent les incertitudes.",
      "Nous détaillons les réflexes essentiels pour une gestion efficace et structurée.",
    ],
  },
  {
    slug: "conformite-contrats-cadres",
    title: "Conformité et contrats cadres : les essentiels",
    date: "Juin 2023",
    content: [
      "Les contrats cadres doivent rester cohérents avec les pratiques opérationnelles pour éviter les fragilités.",
      "La conformité suppose une harmonisation des engagements et un suivi régulier.",
      "Nous exposons les points de contrôle à privilégier pour renforcer la sécurité juridique.",
    ],
  },
  {
    slug: "negociation-sportive",
    title: "Négociation sportive : enjeux juridiques actuels",
    date: "Mai 2023",
    content: [
      "La négociation sportive impose une connaissance fine des règles applicables et des équilibres contractuels.",
      "Les intérêts des différentes parties doivent être sécurisés par une rédaction précise.",
      "Cet article propose un éclairage sur les enjeux actuels et les pratiques recommandées.",
    ],
  },
];

type PageProps = {
  params: { slug: string };
};

export default function ActualitePage({ params }: PageProps) {
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <Section className="pt-24 pb-20">
      <Container>
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
              Actualités
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {article.title}
            </h1>
            <p className="text-sm uppercase tracking-[0.2em] text-ink/60">
              {article.date}
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink/80">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
