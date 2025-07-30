import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Politique de confidentialité - Ground Elite Academy",
  description:
    "Découvrez notre politique de confidentialité pour protéger vos données personnelles.",
  openGraph: {
    title: "Politique de confidentialité - Ground Elite Academy",
    description:
      "Découvrez notre politique de confidentialité pour protéger vos données personnelles.",
  },
};

const PrivacyPolicyPage = () => {
  const lastUpdatedDate = "28/08/2024";
  const email = "geanice934@gmail.com";

  const sections = [
    {
      title: "1. Collecte des informations",
      content: (
        <>
          Lorsque vous remplissez le formulaire de contact sur notre site, nous
          collectons les informations suivantes :
          <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
            <li>Prénom</li>
            <li>Nom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Sujet du message ou de la demande</li>
            <li>Message ou contenu de la demande</li>
          </ul>
          Ces informations sont collectées pour nous permettre de répondre à vos
          demandes et de vous fournir le service demandé.
        </>
      ),
    },
    {
      title: "2. Utilisation des informations",
      content: (
        <>
          Les informations que vous fournissez via le formulaire de contact sont
          utilisées de la manière suivante :
          <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
            <li>Pour répondre à vos demandes, questions ou préoccupations.</li>

            <li>Pour améliorer notre service client et nos offres.</li>
          </ul>
          Nous utilisons EmailJs pour traiter et envoyer les formulaires de
          contact. EmailJs est un service tiers qui agit en tant que
          sous-traitant des données, et leurs politiques de sécurité et de
          confidentialité s&apos;appliquent à leur traitement des données.
        </>
      ),
    },
    {
      title: "3. Partage des informations",
      content: (
        <>
          Nous ne partageons pas, ne vendons pas et ne louons pas vos
          informations personnelles à des tiers sans votre consentement
          explicite, sauf dans les situations suivantes :
          <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
            <li>
              <strong>Conformité avec la loi</strong> : Nous pouvons divulguer
              vos informations si cela est requis par la loi ou pour répondre à
              une procédure judiciaire, à une ordonnance du tribunal ou à une
              demande légale.
            </li>

            <li>
              <strong>Prestataires de services</strong> : Nous pouvons partager
              vos informations avec des prestataires de services tiers, comme
              EmailJs, uniquement dans la mesure nécessaire pour fournir le
              service que vous avez demandé.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Sécurité des informations",
      content:
        "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucun système de transmission ou de stockage des données n'est totalement sécurisé, et nous ne pouvons garantir la sécurité absolue des informations transmises via Internet.",
    },
    {
      title: "5. Conservation des données",
      content:
        "Nous conservons vos informations personnelles uniquement pendant la durée nécessaire pour atteindre les objectifs décrits dans cette politique de confidentialité, sauf si une période de conservation plus longue est requise ou autorisée par la loi.",
    },
    {
      title: "6. Vos droits",
      content: (
        <>
          En vertu des lois applicables en matière de protection des données,
          vous avez le droit :
          <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
            <li>
              D&apos;accéder à vos informations personnelles que nous détenons.
            </li>

            <li>
              De demander la correction ou la suppression de vos informations
              personnelles.
            </li>

            <li>
              De vous opposer à l&apos;utilisation de vos informations
              personnelles pour des finalités spécifiques.
            </li>
          </ul>
          Pour exercer ces droits, veuillez nous contacter à l&apos;adresse
          suivante : <strong>{email}</strong>.
        </>
      ),
    },
    {
      title: "7. Modifications de la politique de confidentialité",
      content:
        "Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de la dernière mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé des modifications éventuelles.",
    },
    {
      title: "8. Contact",
      content: (
        <>
          Si vous avez des questions ou des préoccupations concernant cette
          politique de confidentialité, veuillez nous contacter à l&apos;adresse
          suivante : <strong>{email}</strong>.
        </>
      ),
    },
  ];

  return (
    <div className="mt-[68px] px-2 py-5 md:px-8 md:pt-7 md:pb-10 lg:flex lg:flex-col lg:items-center xl:mt-[78px]">
      <h1 className="mb-7 text-center text-3xl font-bold lg:mb-10 xl:text-4xl">
        Politique de Confidentialité
      </h1>

      <Card className="rounded-xl px-6 py-4 shadow-md lg:w-[800px] xl:w-[950px]">
        <p className="mb-4 text-justify lg:text-lg">
          Dernière mise à jour : <strong>{lastUpdatedDate}</strong>
        </p>

        <p className="mb-4 text-justify lg:text-lg">
          Chez <strong className="text-[#b0181c]">Ground Elite Academy</strong>,
          nous prenons la confidentialité de vos informations personnelles très
          au sérieux. Cette politique de confidentialité décrit comment nous
          collectons, utilisons, stockons et protégeons les informations que
          vous nous fournissez via notre site web.
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-5 md:mb-8">
            <h2 className="mb-3 text-xl font-bold lg:mb-5 lg:text-2xl">
              {section.title}
            </h2>

            <div className="text-justify lg:text-lg">{section.content}</div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default PrivacyPolicyPage;
