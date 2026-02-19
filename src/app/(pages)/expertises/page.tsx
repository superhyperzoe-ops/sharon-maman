import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const expertises = [
  {
    title: "Corporate & Fusions-Acquisitions",
    slug: "droit-des-affaires",
    items: [
      "Droit des sociétés",
      "Gouvernance et relations entre associés",
      "Venture Capital & Private Equity",
      "Fusions-Acquisitions",
      "Cessions de titres",
      "Opérations sur capital",
      "Restructurations juridiques",
    ],
    summary:
      "Le cabinet intervient dans l’ensemble des opérations structurantes et capitalistiques des entreprises, dirigeants et investisseurs, en assurant leur sécurisation juridique et la protection des intérêts en présence.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-sand"
        fill="currentColor"
      >
        <path d="M5 20h14v-2H5v2zm3-4h8V4H8v12zm2-2V6h4v8h-4z" />
      </svg>
    ),
  },
  {
    title:
      "Transmission et acquisition d’entreprises et de structures réglementées",
    slug: "transmission-structures-reglementees",
    items: [
      "Cession et acquisition de fonds de commerce",
      "Transmission de cabinets et structures d’exercice libéral",
      "Opérations relatives aux professions libérales réglementées",
      "Structuration et sécurisation juridique des transmissions",
    ],
    summary:
      "Le cabinet met à profit une expérience dédiée, permettant d’anticiper les contraintes propres à ces secteurs et de sécuriser chaque décision structurante.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-sand"
        fill="currentColor"
      >
        <path d="M7 6h10v2H7V6zm0 4h6v2H7v-2zm-2 9h14a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a1 1 0 0 0 1 1zm1-2V5h12v12H6z" />
      </svg>
    ),
  },
  {
    title: "Droit commercial et de la concurrence",
    slug: "droit-commercial",
    items: [
      "Concurrence et distribution : contrat de distribution, réseaux, CGV",
      "Relations commerciales : structuration et sécurisation des relations d’affaires",
      "Pratiques restrictives et conformité concurrentielle",
      "Contrats commerciaux : baux commerciaux, prestations de service, location-gérance, partenariats, CGV/CGU...",
    ],
    summary:
      "Le cabinet veille à la conformité et à la solidité juridique de vos relations commerciales.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-sand"
        fill="currentColor"
      >
        <path d="M6 17c3-3 6-6 12-8l-2-3 4 1-1 4-2-3c-6 2-8 5-11 8 0 0 2 2 6 2v2c-5 0-8-3-8-3z" />
      </svg>
    ),
  },
  {
    title: "Mandataire Sportif – Accompagnement juridique des acteurs du sport professionnel",
    slug: "mandataires-sportifs",
    items: [
      "Négociation et sécurisation des contrats professionnels",
      "Structuration des opérations de transfert",
      "Encadrement contractuel des partenariats et droits à l’image",
      "Accompagnement réglementaire des acteurs du sport",
      "Conseil stratégique dans la gestion et l’évolution de carrière",
    ],
    summary:
      "En qualité de mandataire sportif, le cabinet vous accompagne avec exigence et vision stratégique dans la protection et la valorisation de vos intérêts.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-sand"
        fill="currentColor"
      >
        <path d="M12 2l7 3v6c0 4.7-3.1 8.9-7 11-3.9-2.1-7-6.3-7-11V5l7-3zm0 2.2L7 6v5c0 3.6 2.2 6.9 5 8.8 2.8-1.9 5-5.2 5-8.8V6l-5-1.8z" />
      </svg>
    ),
  },
];

export default function ExpertisesPage() {
  return (
    <Section className="pt-6 pb-20">
      <Container className="flex flex-col">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.25em] text-ink sm:text-4xl">
            EXPERTISES
          </h1>
          <p className="text-base leading-relaxed text-ink/80">
            Des expertises ciblées pour sécuriser vos décisions stratégiques
          </p>
        </div>

        <div className="mt-8 grid auto-rows-fr items-stretch gap-5 md:grid-cols-2">
          {expertises.map((expertise) => (
            <Link
              key={expertise.title}
              href={`/expertises/${expertise.slug}`}
              className="group flex h-full flex-col border border-sand bg-sand/40 px-4 py-4 transition-colors hover:bg-sand/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-6 sm:py-6"
            >
              <div className="flex h-full flex-col gap-2 sm:gap-3">
                <div className="flex items-center gap-3">
                  {expertise.icon}
                  <h2 className="text-lg font-semibold text-ink">
                    {expertise.title}
                  </h2>
                </div>
                <ul className="space-y-1 text-sm leading-relaxed text-ink/80">
                  {expertise.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-2 text-justify text-sm leading-relaxed text-ink/60 sm:pt-3">
                  {expertise.summary}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 self-end pt-4 text-xs uppercase tracking-[0.2em] text-ink/70 transition-colors group-hover:text-ink">
                Découvrir
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 h-px w-24 bg-sand" aria-hidden="true" />
      </Container>
    </Section>
  );
}
