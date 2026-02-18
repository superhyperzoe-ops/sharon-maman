import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const content = [
  {
    type: "paragraph",
    text: "La reprise d’un fonds de commerce, d’un cabinet libéral ou d’une patientèle constitue une opération stratégique à forts enjeux juridiques et financiers. Une cession d’activité mal préparée peut générer des risques importants pour l’acquéreur comme pour le cédant. Voici cinq conseils juridiques essentiels pour sécuriser durablement votre reprise d’activité.",
  },
  { type: "heading", text: "Ne pas sous-estimer la promesse de cession" },
  {
    type: "paragraph",
    text: "La promesse de cession n’est pas une simple formalité préalable à l’acte définitif. Elle fixe dès ce stade les règles juridiques de l’opération.",
  },
  { type: "paragraph", text: "Elle doit notamment encadrer :" },
  {
    type: "list",
    items: [
      "Le prix de cession et ses modalités de paiement ;",
      "Les conditions suspensives ;",
      "Les engagements réciproques des parties.",
    ],
  },
  {
    type: "paragraph",
    text: "Une promesse insuffisamment rédigée peut fragiliser l’ensemble de la cession.",
  },
  { type: "heading", text: "Définir précisément la consistance de la reprise" },
  {
    type: "paragraph",
    text: "L’acte doit déterminer avec précision ce que l’acquéreur reprend réellement.",
  },
  { type: "paragraph", text: "Il convient d’identifier notamment :" },
  {
    type: "list",
    items: [
      "Le fonds de commerce ou la patientèle ;",
      "Le droit au bail commercial ;",
      "Le matériel professionnel ;",
      "Les éléments incorporels (nom commercial, clientèle, contrats en cours…).",
    ],
  },
  {
    type: "paragraph",
    text: "Toute imprécision peut devenir source de contentieux postérieur.",
  },
  { type: "heading", text: "Sécuriser les conditions suspensives dès la promesse" },
  {
    type: "paragraph",
    text: "Certaines conditions doivent impérativement être validées avant la réalisation définitive de la cession.",
  },
  { type: "paragraph", text: "Il s’agit notamment :" },
  {
    type: "list",
    items: [
      "De l’obtention du financement bancaire ;",
      "De l’accord du bailleur pour la cession du bail ;",
      "Des autorisations ordinales ou administratives requises – notamment dans le cadre d’activités réglementées ;",
      "Du transfert des contrats essentiels à l’exploitation.",
    ],
  },
  {
    type: "paragraph",
    text: "Ces éléments doivent être rigoureusement encadrés afin d’éviter toute insécurité juridique.",
  },
  { type: "heading", text: "Anticiper l’après-cession dès la négociation" },
  {
    type: "paragraph",
    text: "La signature de l’acte de cession définitif ne marque pas nécessairement la fin des engagements.",
  },
  { type: "paragraph", text: "Il est indispensable de prévoir :" },
  {
    type: "list",
    items: [
      "Une clause de non-concurrence adaptée ;",
      "Une période d’accompagnement du cédant ;",
      "La continuité des contrats clés ;",
      "Les modalités de continuité de l’exploitation.",
    ],
  },
  { type: "heading", text: "Réaliser un audit juridique préalable" },
  {
    type: "paragraph",
    text: "Un audit juridique préalable permet d’identifier les risques liés à la reprise.",
  },
  { type: "paragraph", text: "Il porte notamment sur :" },
  {
    type: "list",
    items: [
      "Les contrats en cours ;",
      "La situation locative (bail commercial, autorisations, etc) ;",
      "Les engagements existants ;",
      "Les risques juridiques et contentieux potentiels.",
    ],
  },
  {
    type: "paragraph",
    text: "Cet audit constitue un outil essentiel de sécurisation de l’opération.",
  },
  {
    type: "paragraph",
    text: "Une cession de fonds de commerce ou de cabinet libéral réussie repose sur une préparation juridique structurée et anticipée. Le cabinet vous propose un accompagnement adapté à votre activité qui permet d’anticiper les risques, de sécuriser les engagements contractuels et de protéger durablement votre investissement.",
  },
];

export default function RepriseActivitePage() {
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
              Reprise de fonds de commerce ou de cabinet libéral : 5 conseils
              juridiques pour sécuriser votre acquisition
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
