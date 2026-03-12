import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Proxénétisme hôtelier : responsabilité du propriétaire",
  description:
    "Proxénétisme hôtelier : quand un propriétaire devient, à son insu, une victime. Affaire pénale traitée en mars 2026.",
  keywords: [
    "proxénétisme hôtelier",
    "responsabilité du propriétaire",
    "tribunal correctionnel",
    "droit pénal",
    "avocat Paris",
  ],
};

const content = [
  {
    type: "paragraph",
    text: "Peut-on être poursuivi pour proxénétisme sans avoir jamais su que de la prostitution se déroulait dans son appartement ? C’est la question au cœur d’une affaire que notre cabinet vient d’accompagner devant le tribunal correctionnel, dans le cadre d’une procédure longue et complexe impliquant plusieurs propriétaires.",
  },
  { type: "heading", text: "Ce que dit la loi" },
  {
    type: "paragraph",
    text: "Le proxénétisme hôtelier est prévu par l’article 225-10, alinéa 1er, 3° du Code pénal. Il réprime le fait de tenir à la disposition d’une ou plusieurs personnes des locaux privés en sachant qu’elles s’y livreront à la prostitution.",
  },
  {
    type: "paragraph",
    text: "Cette infraction suppose la réunion de trois éléments cumulatifs : l’existence d’une activité de prostitution, la connaissance de cette activité par le propriétaire, et un profit tiré non pas de la location ordinaire, mais de l’activité prostitutionnelle elle-même. L’absence d’un seul de ces éléments suffit à faire tomber les poursuites.",
  },
  { type: "heading", text: "Les faits" },
  {
    type: "paragraph",
    text: "Notre client est un particulier, salarié de longue date, qui louait plusieurs biens immobiliers via des plateformes privées comme Airbnb ou Booking. Des locataires appartenant à un réseau de prostitution organisé avaient utilisé ces appartements pour y exercer leur activité — à l’insu du propriétaire.",
  },
  {
    type: "paragraph",
    text: "Notre client a fait l’objet d’une procédure d’instruction approfondie, au terme de laquelle il a été renvoyé devant le tribunal correctionnel.",
  },
  { type: "heading", text: "Le résultat" },
  {
    type: "paragraph",
    text: "À l’issue des débats, le tribunal a écarté la confiscation des biens immobiliers de notre client — mesure pourtant expressément requise par le Ministère public lors de ses réquisitions. C’est sur ce point que se jouait l’essentiel : la confiscation de biens acquis par notre client aurait représenté une sanction disproportionnée et dévastatrice.",
  },
  {
    type: "heading",
    text: "Ce que cette affaire enseigne aux propriétaires",
  },
  {
    type: "paragraph",
    text: "La location courte durée expose les propriétaires à des risques juridiques qu’ils sous-estiment souvent. Un réseau organisé peut instrumentaliser un bien immobilier sans que son propriétaire en ait la moindre connaissance.",
  },
  {
    type: "paragraph",
    text: "Quelques réflexes de base peuvent néanmoins limiter l’exposition :",
  },
  {
    type: "list",
    items: [
      "Documenter toutes les réservations et les échanges avec les locataires ;",
      "Maintenir une cohérence tarifaire avec les plateformes officielles ;",
      "Tracer et déclarer tous les paiements ;",
      "Signaler immédiatement tout incident aux autorités compétentes.",
    ],
  },
  {
    type: "paragraph",
    text: "En cas de mise en cause, la réactivité et la rigueur de la préparation sont déterminantes.",
  },
  {
    type: "paragraph",
    text: "Notre cabinet accompagne les particuliers et les professionnels mis en cause dans des procédures pénales complexes. Si vous êtes confronté à une situation similaire, n’hésitez pas à nous contacter.",
  },
];

export default function ProxenetismeHotelierPage() {
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
              Proxénétisme hôtelier : quand un propriétaire devient, à son insu, une
              victime
            </h1>
            <p className="text-sm uppercase tracking-[0.2em] text-ink/60">
              Tribunal correctionnel — Mars 2026
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink/80">
            {content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 key={`${block.text}-${index}`} className="text-lg font-semibold text-ink">
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
