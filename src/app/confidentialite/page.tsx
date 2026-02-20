import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du cabinet Sharon Maman, avocate à Paris.",
  keywords: ["confidentialité", "RGPD", "avocat Paris", "Sharon Maman"],
};

export default function ConfidentialitePage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="space-y-6 text-ink/80">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="text-base leading-relaxed text-ink/80">
            Dernière mise à jour : 20/02/2026
          </p>
          <p className="text-base leading-relaxed">
            La présente politique de confidentialité a pour objectif d’informer
            les utilisateurs du site sharonmaman.vercel.app des modalités de collecte,
            d’utilisation et de protection de leurs données personnelles,
            conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à
            la loi Informatique et Libertés.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            1. Responsable du traitement
          </h2>
          <div className="space-y-1 text-sm">
            <p>Le responsable du traitement des données est :</p>
            <p>Maître Sharon Maman</p>
            <p>Avocate au Barreau de Paris</p>
            <p>16 rue Washington - 75008 Paris</p>
            <p>Email : sharonmaman.law@gmail.com</p>
            <p>Téléphone : +33 6 35 41 74 67</p>
            <p>SIRET : à compléter</p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            2. Données personnelles collectées
          </h2>
          <p className="text-sm">
            Dans le cadre de l’utilisation du site, les données suivantes
            peuvent être collectées :
          </p>
          <div className="space-y-2 text-sm">
            <p>a) Données transmises via le formulaire de contact</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (le cas échéant)</li>
              <li>Contenu du message</li>
            </ul>
            <p>b) Données collectées automatiquement</p>
            <p>Lors de la navigation sur le site :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Adresse IP</li>
              <li>Données de connexion</li>
              <li>Type de navigateur</li>
              <li>Pages consultées</li>
              <li>Cookies (voir section dédiée)</li>
            </ul>
          </div>
          <p className="text-sm text-ink/70">
            Les informations communiquées via le formulaire peuvent contenir
            des données sensibles (notamment relatives à des procédures
            judiciaires). Il est recommandé de ne transmettre que les
            informations strictement nécessaires à la prise de contact.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            3. Finalités du traitement
          </h2>
          <p className="text-sm">Les données personnelles sont collectées pour :</p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Répondre aux demandes effectuées via le formulaire de contact</li>
            <li>Organiser des rendez-vous</li>
            <li>Assurer le suivi des échanges</li>
            <li>
              Respecter les obligations légales et déontologiques de la
              profession d’avocat
            </li>
            <li>Améliorer le fonctionnement du site</li>
          </ul>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            4. Base légale du traitement
          </h2>
          <p className="text-sm">Les traitements reposent sur :</p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              Le consentement de l’utilisateur (formulaire de contact, cookies
              non essentiels)
            </li>
            <li>L’exécution de mesures précontractuelles ou contractuelles</li>
            <li>Le respect d’obligations légales</li>
            <li>
              L’intérêt légitime du responsable du traitement (sécurité du site,
              prévention des abus)
            </li>
          </ul>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            5. Durée de conservation des données
          </h2>
          <p className="text-sm">Les données sont conservées pour :</p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Données issues du formulaire sans suite : maximum 3 ans</li>
            <li>
              Données relatives aux clients : durée légale applicable à la
              conservation des dossiers (notamment obligations professionnelles)
            </li>
            <li>Données techniques et cookies : 13 mois maximum</li>
          </ul>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            6. Destinataires des données
          </h2>
          <p className="text-sm">Les données personnelles sont destinées :</p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>À Maître Sharon Maman</li>
            <li>
              Aux éventuels prestataires techniques (hébergement, maintenance,
              messagerie, outils de statistiques)
            </li>
            <li>
              Aux partenaires strictement nécessaires à la gestion des services
              proposés
            </li>
          </ul>
          <p className="text-sm">
            Les données ne sont en aucun cas vendues ou cédées à des tiers.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            7. Transferts hors Union européenne
          </h2>
          <p className="text-sm">
            Certains outils utilisés (ex : hébergement, messagerie, outils
            statistiques) peuvent impliquer un transfert de données hors de
            l’Union européenne.
          </p>
          <p className="text-sm">
            Dans ce cas, des garanties appropriées sont mises en place
            conformément au RGPD (clauses contractuelles types ou mécanismes
            reconnus par la Commission européenne).
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            8. Sécurité des données
          </h2>
          <p className="text-sm">
            Le site met en œuvre des mesures techniques et organisationnelles
            appropriées afin d’assurer la sécurité et la confidentialité des
            données personnelles, notamment :
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Site sécurisé via protocole HTTPS</li>
            <li>Accès restreint aux données</li>
            <li>Protection contre les accès non autorisés</li>
          </ul>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            9. Droits des utilisateurs
          </h2>
          <p className="text-sm">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Droit d’accès</li>
            <li>Droit de rectification</li>
            <li>Droit d’effacement</li>
            <li>Droit de limitation</li>
            <li>Droit d’opposition</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p className="text-sm">
            Vous pouvez exercer vos droits en adressant une demande à :
          </p>
          <p className="text-sm">sharonmaman.law@gmail.com</p>
          <p className="text-sm">
            En cas de litige, vous pouvez saisir la CNIL : www.cnil.fr
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            10. Cookies
          </h2>
          <p className="text-sm">
            Le site peut utiliser des cookies nécessaires à son bon
            fonctionnement ainsi que, le cas échéant, des cookies de mesure
            d’audience ou tiers.
          </p>
          <p className="text-sm">
            À ce jour, aucun bandeau de gestion des cookies n’est proposé car le
            site n’utilise pas d’outils de mesure d’audience ou de cookies
            publicitaires.
          </p>
          <p className="text-sm">
            Les cookies sont conservés pour une durée maximale de 13 mois.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            11. Absence de relation avocat-client
          </h2>
          <p className="text-sm">
            La consultation du site et l’envoi d’un message via le formulaire de
            contact ne créent aucune relation avocat-client.
          </p>

        </div>
      </Container>
    </Section>
  );
}
