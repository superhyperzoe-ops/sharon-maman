import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Le pacte d’associés",
  description:
    "Comprendre le pacte d’associés et ses fonctions : gouvernance, liquidité, sortie et sécurisation des relations.",
  keywords: [
    "pacte d'associés",
    "droit des sociétés",
    "gouvernance",
    "avocat Paris",
  ],
};

const content = [
  {
    type: "paragraph",
    text: "Le pacte d’associés est un contrat extra-statutaire destiné à organiser les relations entre associés au-delà du cadre légal et statutaire. S’il est souvent envisagé en période de tension, il constitue en réalité un outil d’anticipation qui doit être structuré lorsque l’équilibre entre associés est encore stable.",
  },
  { type: "heading", text: "Le cadre légal : un socle minimal" },
  {
    type: "paragraph",
    text: "Le droit des sociétés fixe un cadre de fonctionnement par défaut : règles de majorité, pouvoirs organiques des dirigeants et mécanismes décisionnels.",
  },
  {
    type: "paragraph",
    text: "En revanche, il ne traite pas précisément des situations suivantes :",
  },
  {
    type: "list",
    items: [
      "Les désaccords stratégiques profonds ;",
      "Les situations de blocage capitalistique ;",
      "Les modalités concrètes de séparation entre associés ;",
      "Les mécanismes d’exclusion ou de sortie organisée.",
    ],
  },
  {
    type: "paragraph",
    text: "Le pacte d’associés intervient précisément sur ces zones de vulnérabilité.",
  },
  { type: "heading", text: "La fonction technique du pacte d’associés" },
  {
    type: "paragraph",
    text: "Un pacte d’associés structuré permet notamment :",
  },
  {
    type: "list",
    items: [
      "D’aménager les règles de gouvernance ;",
      "De créer des droits financiers spécifiques ;",
      "D’encadrer strictement la cession de titres ;",
      "D’organiser les mécanismes de liquidité (sortie conjointe, drag along, tag along) ;",
      "De prévoir des clauses de buy-out en cas de conflit (elles instituent un mécanisme de sortie contrainte prévoyant, en cas de conflit ou de situation de blocage, le rachat des titres d’un associé par un autre selon une formule de valorisation et une procédure fixées à l’avance).",
    ],
  },
  {
    type: "paragraph",
    text: "Le pacte d’associés complète les statuts sans s’y substituer et permet d’adapter le cadre juridique à la réalité économique et stratégique du projet.",
  },
  { type: "heading", text: "L’anticipation des risques" },
  {
    type: "paragraph",
    text: "Dans la pratique, les contentieux entre associés naissent fréquemment :",
  },
  {
    type: "list",
    items: [
      "D’une divergence de stratégie ;",
      "D’une perte de confiance ;",
      "D’un déséquilibre dans l’implication opérationnelle ;",
      "D’un changement de situation personnelle.",
    ],
  },
  {
    type: "paragraph",
    text: "Un pacte d’associés rédigé en amont permet d’éviter qu’un désaccord ne se transforme en paralysie décisionnelle ou en contentieux.",
  },
  {
    type: "heading",
    text: "Une structuration adaptée à la configuration juridique et stratégique de la société concernée",
  },
  {
    type: "paragraph",
    text: "Le contenu d’un pacte d’associés varie selon plusieurs paramètres :",
  },
  {
    type: "list",
    items: [
      "La forme sociale (SAS, SARL, société civile…) ;",
      "La répartition du capital ;",
      "La présence d’investisseurs ;",
      "La stratégie de croissance ;",
      "Les enjeux patrimoniaux ou familiaux.",
    ],
  },
  {
    type: "paragraph",
    text: "Un pacte d’associé standardisé expose à un risque juridique significatif et ne permet pas de sécuriser efficacement l’équilibre entre associés.",
  },
  {
    type: "paragraph",
    text: "Le cabinet intervient dans la structuration et la sécurisation des pactes d’associés, en tenant compte de la configuration spécifique de chaque société et des objectifs de ses associés.",
  },
];

export default function PacteAssociesPage() {
  return (
    <Section className="pt-24 pb-20">
      <Container>
        <div className="space-y-8">
          <div className="space-y-3">
            <a
              href="/actualites"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              ← Retour aux actualités
            </a>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
              Actualités
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Le pacte d’associés : un instrument juridique d’anticipation
              stratégique
            </h1>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink/80">
            {content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`${block.text}-${index}`}
                    className="text-lg font-semibold text-ink"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                if (!block.items || block.items.length === 0) {
                  return null;
                }
                return (
                  <ul key={`list-${index}`} className="space-y-2 pl-5 text-ink/80">
                    {block.items.map((item) => (
                      <li key={item} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={`${block.text}-${index}`}>{block.text}</p>;
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
