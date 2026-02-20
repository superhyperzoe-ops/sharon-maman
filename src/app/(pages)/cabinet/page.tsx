import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Le cabinet",
  description:
    "Présentation du cabinet Sharon Maman, avocate à Paris en droit des affaires, transmission d'entreprise, fusion-acquisition et droit commercial.",
  keywords: [
    "Sharon Maman",
    "avocat",
    "Paris",
    "droit des affaires",
    "fusion-acquisition",
    "transmission d'entreprise",
  ],
};

export default function CabinetPage() {
  return (
    <div className="cabinet-page bg-white text-ink">
      <Section id="presentation" className="pt-0 pb-16 scroll-mt-24">
        <Container className="max-w-[1200px]">
          <div className="mx-auto mb-12 max-w-[820px] space-y-3 text-center">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-ink">
              Sharon MAMAN
            </h2>
            <p className="text-sm font-semibold tracking-[0.2em] text-accent/80">
              Avocat à la Cour
            </p>
            <div className="mx-auto h-px w-14 bg-sand" aria-hidden="true" />
          </div>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-start">
            <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
              <div className="relative h-[520px] w-full rounded-none border border-sand/60 shadow-sm lg:mt-0">
                <Image
                  src="/Sharon2.jpeg"
                  alt="Portrait de Maître Sharon Maman"
                  width={1200}
                  height={1600}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  quality={70}
                  className="h-full w-full rounded-none object-cover"
                />
              </div>
            </div>
            <div className="order-2 lg:order-1 lg:col-span-7 lg:col-start-1">
              <div className="w-full space-y-6 text-justify text-[16px] leading-[1.6] text-ink/80">
                <div className="space-y-5">
                  <p>
                    Avocate au Barreau de Paris, Maître Maman exerce en droit des affaires.
                  </p>
                  <p>
                    Diplômée d’un Master II en droit des affaires, Maître Maman a poursuivi
                    sa formation au sein de l’École de Formation du Barreau de Paris (EFB),
                    où elle a obtenu le Certificat d’Aptitude à la Profession d’Avocat.
                  </p>
                  <p>
                    Elle a prêté serment à l’âge de 24 ans devant la Cour d’appel de Paris,
                    jurant « d’exercer ses fonctions avec dignité, conscience, indépendance,
                    probité et humanité ».
                  </p>
                  <p>
                    Depuis lors, elle met son exigence, sa rigueur et sa passion du droit au
                    service des entreprises, dirigeants et entrepreneurs qu’elle accompagne
                    en droit des affaires.
                  </p>
                  <p>
                    Elle intervient notamment en droit des sociétés, en private equity, en
                    droit des contrats ainsi qu’en droit commercial, notamment en matière de
                    baux commerciaux et de cessions de fonds de commerce.
                  </p>
                  <p>
                    Elle dispose d’une expertise reconnue dans l’accompagnement des
                    opérations de transmission, de cession et d’acquisition d’entreprises,
                    avec une spécialisation marquée dans les structures professionnelles
                    réglementées, notamment dans le secteur de la santé et des professions
                    libérales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-justify text-[16px] leading-[1.6] text-ink/80 lg:max-w-[1100px]">
            <p>
              Titulaire de la qualification de mandataire sportif, Maître Maman
              intervient également auprès des acteurs du sport professionnel, qu’elle
              accompagne dans la structuration et la sécurisation de leurs opérations,
              à l’interface du droit des affaires et des réglementations sportives.
            </p>
            <p>
              Enfin, Maître Maman accompagne ses clients dans la gestion des
              situations précontentieuses et des différends entre associés.
            </p>
            <p>
              Convaincue que le droit est un levier stratégique au service de la
              performance et de la sécurité juridique, Maître Maman adopte une
              approche pragmatique, privilégiant des solutions efficaces et adaptées
              aux enjeux économiques de ses clients.
            </p>
            <p>
              Engagée et déterminée, elle défend leurs intérêts avec précision,
              fermeté et sens stratégique, tout en recherchant, lorsque cela est
              possible, des solutions amiables équilibrées.
            </p>
            <p>Maître Maman intervient sur tout le territoire national.</p>

          </div>
        </Container>
      </Section>

      <Section
        id="valeurs-et-engagement"
        className="bg-accent/10 pt-10 pb-16 lg:pt-12 lg:pb-20 scroll-mt-0"
      >
        <Container className="max-w-[1200px]">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-ink">
              Valeurs et Engagement
            </h2>
            <div className="mt-4 h-px w-14 bg-sand mx-auto" aria-hidden="true" />
          </div>

          <div className="mt-6 space-y-4 text-[16px] leading-[1.6] text-ink/80">
            <div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-semibold text-sand/80" aria-hidden="true" />
                <div className="flex-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                    Vision stratégique
                  </p>
                  <p className="mt-2">
                    Le cabinet accompagne ses clients dans une approche stratégique du droit des affaires. Chaque dossier est appréhendé au regard de ses enjeux juridiques, économiques et patrimoniaux, avec une vision globale et structurée.
                  </p>
                </div>
              </div>
              <div className="mt-4 h-px w-12 bg-sand" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-semibold text-sand/80" aria-hidden="true" />
                <div className="flex-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                    Anticipation &amp; sécurisation
                  </p>
                  <p className="mt-2">
                    Convaincue que le droit est avant tout un outil d’anticipation et de sécurisation, Maître Maman attache une importance particulière à la prévention des risques et à la solidité juridique des opérations qu’elle accompagne. Chaque intervention s’inscrit dans une logique de maîtrise et de protection des intérêts de ses clients.
                  </p>
                </div>
              </div>
              <div className="mt-4 h-px w-12 bg-sand" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-semibold text-sand/80" aria-hidden="true" />
                <div className="flex-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                    Rigueur, clarté, efficacité
                  </p>
                  <p className="mt-2">
                    Son approche repose sur la rigueur, la clarté et l’efficacité. Les opérations sont préparées avec précision, les risques identifiés en amont et les équilibres contractuels soigneusement négociés afin d’assurer une sécurité juridique optimale.
                  </p>
                </div>
              </div>
              <div className="mt-4 h-px w-12 bg-sand" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-semibold text-sand/80" aria-hidden="true" />
                <div className="flex-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                    Accompagnement sur mesure
                  </p>
                  <p className="mt-2">
                    Le cabinet se distingue par un accompagnement personnalisé, direct et réactif. Chaque client bénéficie d’un suivi sur mesure, adapté à son secteur d’activité, pensé en fonction de ses enjeux économiques, de son environnement réglementaire et de ses objectifs à long terme.
                  </p>
                </div>
              </div>
              <div className="mt-4 h-px w-12 bg-sand" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-semibold text-sand/80" aria-hidden="true" />
                <div className="flex-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                    Transparence
                  </p>
                  <p className="mt-2">
                    La transparence constitue un principe fondamental. Les modalités d’intervention et les honoraires sont définis en amont de chaque mission, dans un souci de clarté et de prévisibilité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-[16px] italic leading-[1.6] text-ink/80">
            Au-delà du conseil juridique, le cabinet entend être un partenaire de
            confiance, impliqué et pleinement investi aux côtés de ses clients.
          </div>
        </Container>
      </Section>

      <Section id="honoraires" className="py-20 scroll-mt-0">
        <Container>
          <div className="max-w-[1200px] space-y-6 text-[16px] leading-[1.6] text-ink/80">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-ink">
                Honoraires
              </h2>
              <p className="text-sm font-semibold tracking-[0.2em] text-accent/80">
                Une approche transparente et structurée des modalités d’intervention.
              </p>
              <div className="mx-auto h-px w-16 bg-sand" aria-hidden="true" />
            </div>
            <div className="space-y-4">
              <p>
                Les honoraires sont fixés conformément aux règles déontologiques de la profession d’avocat et tiennent compte notamment de la complexité de l’opération, du temps consacré au dossier, de la nature de la mission confiée ainsi que des enjeux économiques du dossier.
              </p>
              <p>
                Chaque mission fait l’objet d’une convention d’honoraires préalable, garantissant transparence, clarté et parfaite prévisibilité des modalités d’intervention.
              </p>
            </div>
            <p>
              Plusieurs modes de facturation peuvent être envisagés, en fonction de la nature du dossier :
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-xs font-semibold text-sand/80">01</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold tracking-[0.2em] text-ink">
                      Honoraire au temps passé
                    </p>
                    <p className="mt-2">
                      Une facturation sur la base d’un taux horaire défini en amont peut être retenue pour les opérations nécessitant une analyse approfondie, des négociations évolutives ou un accompagnement stratégique sur mesure. Une estimation prévisionnelle est communiquée lorsque cela est possible.
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-px w-12 bg-sand" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-xs font-semibold text-sand/80">02</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold tracking-[0.2em] text-ink">
                      Honoraire forfaitaire
                    </p>
                    <p className="mt-2">
                      Pour les opérations identifiées et structurées — telles que la constitution de sociétés, la rédaction d’accords stratégiques, les cessions de fonds de commerce ou les transmissions d’entreprises — un honoraire global déterminé à l’avance peut être convenu, offrant une visibilité complète sur le coût de la mission.
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-px w-12 bg-sand" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-xs font-semibold text-sand/80">03</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold tracking-[0.2em] text-ink">
                      Abonnement
                    </p>
                    <p className="mt-2">
                      Pour les missions nécessitant un accompagnement continu, une formule d’abonnement peut être proposée. Cette formule permet un accès privilégié et réactif au cabinet, dans une logique de partenariat et d’anticipation permanente des enjeux juridiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Les honoraires sont déterminés avec précision et en toute transparence, dans le respect des enjeux propres à chaque opération.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
