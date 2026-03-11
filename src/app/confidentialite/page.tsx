import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Politique de cookies du cabinet Sharon Maman, avocate à Paris.",
  keywords: ["cookies", "RGPD", "avocat Paris", "Sharon Maman"],
};

export default function ConfidentialitePage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="space-y-6 text-ink/80">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Politique de cookies
          </h1>
          <p className="text-base leading-relaxed text-ink/80">
            Cette politique de cookies a été mise à jour pour la dernière fois le
            [date de mise en ligne] et s&apos;applique aux citoyens et aux résidents
            permanents légaux de l&apos;Espace Économique Européen et de la Suisse.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            1. Introduction
          </h2>
          <p className="text-sm">
            Notre site web utilise des cookies et autres technologies liées (par
            simplification, toutes ces technologies sont désignées par le terme
            « cookies »). Des cookies peuvent également être placés par des tierces
            parties que nous avons engagées. Dans ce document, nous vous informons
            de l&apos;utilisation des cookies sur notre site web.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            2. Qu&apos;est-ce qu&apos;un cookie ?
          </h2>
          <div className="space-y-3 text-sm">
            <p>
              Un cookie est un petit fichier texte déposé sur votre ordinateur ou
              appareil mobile lorsque vous visitez notre site. Il permet de
              mémoriser certaines informations vous concernant, qui pourront être
              lues lors de vos prochaines visites, par notre site ou par des
              services tiers.
            </p>
            <p>
              Les cookies permettent de conserver, pendant leur durée de validité,
              des informations d&apos;état lorsqu&apos;un navigateur accède aux différentes
              pages d&apos;un site web ou y retourne ultérieurement. Seul l&apos;émetteur
              d&apos;un cookie peut lire ou modifier les informations qu&apos;il contient.
            </p>
            <p>Il existe différents types de cookies :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>des cookies de session, qui disparaissent dès que vous quittez le site ;</li>
              <li>
                des cookies permanents, qui demeurent sur votre terminal jusqu&apos;à
                expiration de leur durée de vie ou jusqu&apos;à ce que vous les supprimiez
                via votre navigateur.
              </li>
            </ul>
            <p>
              Lors de vos visites sur notre site, des cookies peuvent ainsi être
              installés sur votre équipement terminal.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            3. Autres technologies de suivi
          </h2>
          <div className="space-y-3 text-sm">
            <p>Scripts</p>
            <p>
              Un script est un élément de code utilisé pour que notre site web
              fonctionne correctement et de manière interactive. Ce code est
              exécuté sur notre serveur ou sur votre appareil.
            </p>
            <p>Balises invisibles</p>
            <p>
              Une balise invisible (ou balise web) est un petit morceau de texte
              ou d&apos;image invisible sur un site web, utilisé pour suivre le trafic.
              Pour ce faire, diverses données vous concernant sont stockées à
              l&apos;aide de ces balises.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            4. Finalités des cookies utilisés
          </h2>
          <p className="text-sm">
            Les cookies utilisés sur notre site ont pour but d&apos;analyser la
            fréquentation et l&apos;utilisation qui est faite du site, d&apos;optimiser votre
            expérience de navigation et d&apos;assurer le bon fonctionnement de certaines
            fonctionnalités.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            5. Quels cookies utilisons-nous ?
          </h2>
          <div className="space-y-3 text-sm">
            <p>5.1 Cookies techniques ou fonctionnels</p>
            <p>
              Certains cookies assurent le fonctionnement correct de certaines
              parties du site web et la prise en compte de vos préférences en tant
              qu&apos;internaute. Ces cookies peuvent être déposés sans votre consentement
              préalable car ils sont strictement nécessaires au bon fonctionnement
              du site.
            </p>
            <p>5.2 Cookies statistiques (Google Analytics)</p>
            <p>
              Nous utilisons des cookies statistiques afin d&apos;optimiser l&apos;expérience
              des internautes sur notre site web. Nous faisons appel aux services
              de la société Google Inc. via Google Analytics, qui permet de
              comptabiliser les visiteurs et d&apos;identifier la manière dont ils
              utilisent le site.
            </p>
            <p>Les données collectées par l&apos;intermédiaire de ces cookies sont transmises et stockées par Google Inc. Ces données concernent notamment :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>votre utilisation du site ;</li>
              <li>
                votre adresse IP afin de déterminer la ville de connexion — cette donnée
                est immédiatement anonymisée après localisation et n&apos;est pas
                communiquée à notre cabinet.
              </li>
            </ul>
            <p>
              Pour plus d&apos;informations sur Google Analytics :
              {" https://www.google.com/analytics/learn/privacy.html"}
            </p>
            <p>
              Nous vous demandons votre consentement avant de placer des cookies
              statistiques.
            </p>
            <p>5.3 Cookies de marketing/suivi</p>
            <p>
              Les cookies de marketing/suivi sont utilisés pour créer des profils
              d&apos;utilisateurs afin d&apos;afficher de la publicité ou de suivre
              l&apos;utilisateur sur ce site web ou sur plusieurs sites web ayant des
              finalités marketing similaires. Leur dépôt est soumis à votre
              consentement préalable.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            6. Consentement
          </h2>
          <p className="text-sm">
            Lorsque vous visitez notre site web pour la première fois, une bannière
            vous présente les différentes catégories de cookies utilisés. En
            cliquant sur « Enregistrer les préférences », vous nous autorisez à
            utiliser les catégories de cookies que vous avez sélectionnées, comme
            décrit dans la présente politique.
          </p>
          <p className="text-sm">
            Lors de vos navigations ultérieures, le dépôt et la lecture des cookies
            autorisés permettent d&apos;analyser votre navigation et de mesurer l&apos;audience
            de notre site.
          </p>
          <p className="text-sm">
            Vous pouvez à tout moment modifier vos préférences via les paramètres
            de votre navigateur ou notre gestionnaire de consentement.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            7. Gestion et suppression des cookies
          </h2>
          <div className="space-y-3 text-sm">
            <p>Vous disposez de plusieurs options pour gérer les cookies. La plupart des navigateurs acceptent par défaut l&apos;installation de cookies, mais vous avez la possibilité de :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>accepter tous les cookies ;</li>
              <li>refuser systématiquement tous les cookies ;</li>
              <li>choisir les cookies que vous acceptez selon leur émetteur ou leur finalité ;</li>
              <li>être averti avant qu&apos;un cookie soit installé sur votre terminal.</li>
            </ul>
            <p>
              Vous pouvez également paramétrer votre navigateur pour accepter ou
              refuser les cookies au cas par cas, et régulièrement supprimer les
              cookies déjà présents sur votre terminal. N&apos;oubliez pas de paramétrer
              l&apos;ensemble des navigateurs de vos différents appareils (tablettes,
              smartphones, ordinateurs).
            </p>
            <p>
              La configuration de chaque navigateur est différente et est décrite
              dans le menu d&apos;aide de votre navigateur, qui vous permettra de savoir
              comment modifier vos préférences en matière de cookies.
            </p>
            <p>
              Attention : si vous paramétrez votre navigateur pour refuser les
              cookies, certaines fonctionnalités, pages ou espaces du site pourraient
              ne plus être accessibles, ce dont nous ne saurions être tenus responsables.
            </p>
            <p>
              Par ailleurs, lorsque vous vous opposez à l&apos;installation d&apos;un cookie,
              un cookie de refus est installé sur votre terminal afin de mémoriser
              votre choix. Si vous le supprimez, il ne sera plus possible de vous
              identifier comme ayant refusé l&apos;utilisation de cookies. De même, un
              cookie de consentement est installé lorsque vous acceptez les cookies —
              ces cookies de refus ou de consentement doivent rester sur votre terminal.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            8. Vos droits concernant vos données personnelles
          </h2>
          <div className="space-y-3 text-sm">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD)
              et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                droit à l&apos;information : savoir pourquoi vos données sont collectées,
                ce qui leur arrivera et combien de temps elles seront conservées ;
              </li>
              <li>
                droit d&apos;accès : obtenir communication des données personnelles vous
                concernant que nous détenons ;
              </li>
              <li>
                droit de rectification : corriger, compléter ou faire supprimer vos
                données personnelles ;
              </li>
              <li>
                droit de retrait du consentement : révoquer à tout moment votre
                consentement au traitement de vos données ;
              </li>
              <li>
                droit à la portabilité : demander le transfert de vos données vers
                un autre responsable de traitement ;
              </li>
              <li>
                droit d&apos;opposition : vous opposer au traitement de vos données,
                sauf motif légitime impérieux de notre part.
              </li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter aux coordonnées
              indiquées ci-dessous. Vous avez également le droit d&apos;introduire une
              réclamation auprès de la Commission Nationale de l&apos;Informatique et
              des Libertés (CNIL) — www.cnil.fr.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            9. Coordonnées
          </h2>
          <div className="space-y-1 text-sm">
            <p>Maître Sharon MAMAN</p>
            <p>16, rue Washington – 75008 Paris (France)</p>
            <p>Site web : https://www.sharonmaman-avocat.fr/</p>
            <p>E-mail : Sharonmaman.law@gmail.com</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
