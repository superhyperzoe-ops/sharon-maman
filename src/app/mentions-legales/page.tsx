import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du cabinet Sharon Maman, avocate à Paris en droit des affaires.",
  keywords: ["mentions légales", "avocat Paris", "Sharon Maman"],
};

export default function MentionsLegalesPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Mentions légales
          </h1>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            1. Éditeur du site
          </h2>
          <div className="space-y-3 text-sm text-ink/80">
            <p>
              Le présent site web, accessible à l&apos;adresse URL
              {" https://www.sharonmaman-avocat.fr/ "}(
              ci-après « le Site »), est édité par Maître Sharon MAMAN, avocat au
              Barreau de Paris (ci-après « l&apos;Éditeur »), dont le cabinet est
              domicilié 16, rue Washington – 75008 Paris.
            </p>
            <p>SIRET : 879 484 459 00026</p>
            <p>APE : Activités juridiques (6910Z)</p>
            <p>Numéro de téléphone : 06.35.41.74.67</p>
            <p>Adresse e-mail : Sharonmaman.law@gmail.com</p>
            <p>La directrice de la publication est Maître Sharon MAMAN.</p>
            <p>
              Son exercice est soumis au Règlement Intérieur du Barreau de Paris
              et au Règlement Intérieur National dans leur version en vigueur,
              ainsi qu&apos;aux dispositions législatives et réglementaires relatives à
              la profession d&apos;avocat.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            2. Hébergement du site
          </h2>
          <p className="text-sm text-ink/80">
            Le Site est hébergé par : OVH – 2 rue de Kellermann, 59100 Roubaix,
            France – RCS Lille n° 424 761 419 0004.
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            3. Responsabilité
          </h2>
          <div className="space-y-3 text-sm text-ink/80">
            <p>
              L&apos;Éditeur met tout en œuvre pour offrir aux utilisateurs des
              informations, ainsi que des outils disponibles et vérifiés.
              Néanmoins, l&apos;Éditeur ne saurait être tenu(e) responsable des
              erreurs, d&apos;une absence de disponibilité des informations et/ou de
              la présence de virus ou autres infections logiques sur le Site.
            </p>
            <p>
              Il appartient à l&apos;utilisateur de prendre toutes les mesures
              appropriées de façon à protéger ses propres données et/ou logiciels
              de contamination par d&apos;éventuels virus circulant sur le réseau
              Internet.
            </p>
            <p>
              L&apos;utilisateur du Site reconnaît avoir pris connaissance des
              présentes mentions légales et s&apos;engage à les respecter. Il reconnaît
              utiliser les informations et outils disponibles sur le Site sous sa
              responsabilité exclusive.
            </p>
            <p>
              L&apos;Éditeur se réserve le droit de modifier ou de corriger le contenu
              du Site et les présentes mentions légales à tout moment et sans
              préavis.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            4. Propriété intellectuelle
          </h2>
          <div className="space-y-3 text-sm text-ink/80">
            <p>
              L&apos;Éditeur est titulaire des droits de propriété intellectuelle du
              Site pris dans sa globalité, ainsi que de chacun des éléments qui
              le composent (y compris, de manière non exhaustive : sa charte
              graphique, son arborescence, ses interfaces de navigation, ses bases
              de données, les contenus incluant les textes, articles, images
              fixes ou animées, fichiers, etc.).
            </p>
            <p>
              L&apos;ensemble de ce Site relève des législations française et
              internationale sur les droits d&apos;auteur et la propriété
              intellectuelle. Toute représentation totale ou partielle du Site
              ou d&apos;un de ses éléments sans l&apos;autorisation expresse de l&apos;Éditeur
              est interdite et constituerait une contrefaçon sanctionnée par les
              articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            <p>
              Les bases de données figurant sur le site sont protégées par les
              articles L.341-1 et suivants du Code de la propriété intellectuelle.
              Toute extraction ou réutilisation qualitativement ou quantitativement
              substantielle du contenu des bases de données est sanctionnée.
            </p>
            <p>
              Les marques et logotypes figurant sur le site sont des marques
              déposées par l&apos;Éditeur ou par des tiers. Toute reproduction,
              imitation ou usage, total ou partiel, de ces signes distinctifs sans
              autorisation expresse engage la responsabilité de son auteur en
              application des articles L.713-2 et suivants du Code de la propriété
              intellectuelle et de l&apos;article 1240 du Code civil.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            5. Liens hypertextes et droit de réponse
          </h2>
          <div className="space-y-3 text-sm text-ink/80">
            <p>
              Les liens hypertextes mis en place dans le cadre du présent Site en
              direction d&apos;autres ressources présentes sur le réseau Internet ont
              fait l&apos;objet d&apos;une autorisation préalable, expresse et écrite.
              L&apos;Éditeur affirme que, conformément à l&apos;article 10.5 alinéa 5 du
              Règlement Intérieur National, tous les liens hypertextes permettant
              d&apos;accéder directement ou indirectement à des sites tiers sont
              conformes aux Principes Essentiels de la profession d&apos;avocat.
            </p>
            <p>
              L&apos;Éditeur se réserve le droit de supprimer tout lien vers un site
              tiers si celui-ci devenait contraire aux principes essentiels de la
              profession d&apos;avocat, tels qu&apos;énoncés dans le Règlement Intérieur du
              Barreau de Paris.
            </p>
            <p>
              Les utilisateurs du Site ne peuvent établir de lien profond en
              direction de ce Site sans l&apos;autorisation préalable et écrite de
              l&apos;Éditeur. Toute personne citée sur le site peut faire valoir un
              droit de réponse ; une simple demande sera adressée par courrier.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            6. Protection des données à caractère personnel
          </h2>
          <div className="space-y-3 text-sm text-ink/80">
            <p>
              En application des articles 13 et 14 du Règlement général sur la
              protection des données (RGPD – Règlement UE 2016/679) et de l&apos;article
              32 de la loi Informatique et Libertés du 6 janvier 1978 modifiée,
              l&apos;Éditeur vous informe de ce qui suit :
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Le responsable du traitement est Maître Sharon MAMAN. L&apos;ensemble
                de vos données personnelles est protégé dans le cadre du traitement
                de votre dossier, qu&apos;il s&apos;agisse d&apos;un dossier juridique, judiciaire
                ou d&apos;arbitrage.
              </li>
              <li>
                Vos données sont traitées et conservées dès votre première prise
                de contact. Elles sont conservées pendant une durée maximale de
                5 ans à compter du dernier acte juridique ou judiciaire réalisé,
                dans un système informatique protégé et sécurisé.
              </li>
              <li>
                Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
                de limitation, de portabilité et d&apos;opposition concernant vos
                données personnelles.
              </li>
              <li>
                Vous disposez également de la faculté de donner des directives à
                l&apos;Éditeur sur le sort de vos données après votre décès.
              </li>
            </ul>
            <p>
              Pour exercer vos droits, vous pouvez adresser votre demande par
              courrier électronique à l&apos;adresse email : sharonmaman.law@gmail.com
              ou par courrier postal à l&apos;adresse du cabinet, accompagné d&apos;une
              copie d&apos;un titre d&apos;identité comportant votre signature.
            </p>
            <p>
              L&apos;Éditeur répondra dans les meilleurs délais, sous réserve que la
              demande soit suffisamment précise et comporte tous les éléments
              nécessaires pour y répondre.
            </p>
            <p>
              En cas de réclamation concernant le traitement de vos données, vous
              disposez du droit de saisir la Commission Nationale de l&apos;Informatique
              et des Libertés (CNIL) : www.cnil.fr.
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            7. Médiateur à la consommation
          </h2>
          <div className="space-y-3 text-sm text-ink/80">
            <p>
              Conformément aux dispositions des articles L.612-1 et suivants du
              Code de la consommation, le client consommateur est informé de la
              possibilité de recourir, en cas de litige relatif aux présentes, à
              une procédure de médiation conventionnelle ou à tout autre mode
              alternatif de règlement des différends.
            </p>
            <p>
              À cet effet, après avoir tenté de résoudre le litige directement
              auprès du cabinet, le client consommateur peut saisir le Médiateur
              à la consommation de la profession d&apos;avocat :
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Médiateur à la consommation de la profession d&apos;avocat – 180
                boulevard Haussmann, 75008 Paris
              </li>
              <li>Site internet : https://mediateur-consommation-avocat.fr/</li>
              <li>E-mail : mediateur@mediateur-consommation-avocat.fr</li>
              <li>
                Formulaire en ligne :
                {" https://mediateur-consommation-avocat.fr/contacter-le-mediateur/ "}
              </li>
            </ul>
            <p>
              Le client consommateur est informé que ne peuvent être soumis au
              médiateur les litiges manifestement infondés ou abusifs, déjà
              examinés par un autre médiateur ou par un tribunal, ou introduits
              plus d&apos;un an après la réclamation écrite initiale auprès du cabinet.
            </p>
            <p>
              Le cabinet informe également le client consommateur de l&apos;existence
              de la plateforme européenne de Règlement en Ligne des Litiges (RLL),
              accessible à l&apos;adresse : http://ec.europa.eu/consumers/odr/
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            8. Loi applicable
          </h2>
          <p className="text-sm text-ink/80">
            Le présent Site et les présentes mentions légales sont régis par la
            loi française. En cas de litige, les tribunaux français seront seuls
            compétents.
          </p>
        </div>
      </Container>
    </Section>
  );
}
