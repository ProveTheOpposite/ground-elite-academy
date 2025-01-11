// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// react helmet
import { Helmet } from "react-helmet-async";
// assets
import translations from "src/language/translations";

const PrivacyAndPolicy = () => {
  const language = useRecoilValue(languageState);

  const lastUpdatedDate = "28/08/2024";
  const email = "geanice934@gmail.com";

  const sections = [
    {
      title:
        language === "fr"
          ? "1. Collecte des informations"
          : "1. Information Collection",
      content:
        language === "fr" ? (
          <>
            Lorsque vous remplissez le formulaire de contact sur notre site,
            nous collectons les informations suivantes :
            <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
              <li>Prénom</li>
              <li>Nom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Sujet du message ou de la demande</li>
              <li>Message ou contenu de la demande</li>
            </ul>
            Ces informations sont collectées pour nous permettre de répondre à
            vos demandes et de vous fournir le service demandé.
          </>
        ) : (
          <>
            When you fill out the contact form on our website, we collect the
            following information:
            <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
              <li>First name</li>
              <li>Last name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Subject of the message or request</li>
              <li>Message or request content</li>
            </ul>
            This informations are collected to enable us to respond to your
            requests and to provide the requested service.
          </>
        ),
    },
    {
      title:
        language === "fr"
          ? "2. Utilisation des informations"
          : "2. Use of Information",
      content:
        language === "fr" ? (
          <>
            Les informations que vous fournissez via le formulaire de contact
            sont utilisées de la manière suivante :
            <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
              <li>
                Pour répondre à vos demandes, questions ou préoccupations.
              </li>

              <li>Pour améliorer notre service client et nos offres.</li>
            </ul>
            Nous utilisons EmailJs pour traiter et envoyer les formulaires de
            contact. EmailJs est un service tiers qui agit en tant que
            sous-traitant des données, et leurs politiques de sécurité et de
            confidentialité s&apos;appliquent à leur traitement des données.
          </>
        ) : (
          <>
            The information you provide through the contact form is used in the
            following ways:
            <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
              <li>To respond to your inquiries, questions, or concerns.</li>

              <li>To improve our customer service and offerings.</li>
            </ul>
            We use EmailJs to process and send contact forms. EmailJs is a
            third-party service that acts as a data processor, and their
            security and privacy policies apply to their handling of data.
          </>
        ),
    },
    {
      title:
        language === "fr"
          ? "3. Partage des informations"
          : "3. Information Sharing",
      content:
        language === "fr" ? (
          <>
            Nous ne partageons pas, ne vendons pas et ne louons pas vos
            informations personnelles à des tiers sans votre consentement
            explicite, sauf dans les situations suivantes :
            <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
              <li>
                <strong>Conformité avec la loi</strong> : Nous pouvons divulguer
                vos informations si cela est requis par la loi ou pour répondre
                à une procédure judiciaire, à une ordonnance du tribunal ou à
                une demande légale.
              </li>

              <li>
                <strong>Prestataires de services</strong> : Nous pouvons
                partager vos informations avec des prestataires de services
                tiers, comme EmailJs, uniquement dans la mesure nécessaire pour
                fournir le service que vous avez demandé.
              </li>
            </ul>
          </>
        ) : (
          <>
            We do not share, sell, or rent your personal information to third
            parties without your explicit consent, except in the following
            situations:
            <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
              <li>
                <strong>Compliance with the Law</strong>: We may disclose your
                information if required by law or to respond to a legal process,
                court order, or legal request.
              </li>

              <li>
                <strong>Service Providers</strong>: We may share your
                information with third-party service providers, such as EmailJs,
                only to the extent necessary to provide the service you have
                requested.
              </li>
            </ul>
          </>
        ),
    },
    {
      title:
        language === "fr"
          ? "4. Sécurité des informations"
          : "4. Information Security",
      content:
        language === "fr"
          ? "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucun système de transmission ou de stockage des données n'est totalement sécurisé, et nous ne pouvons garantir la sécurité absolue des informations transmises via Internet."
          : "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no data transmission or storage system is completely secure, and we cannot guarantee the absolute security of information transmitted over the Internet.",
    },
    {
      title:
        language === "fr" ? "5. Conservation des données" : "5. Data Retention",
      content:
        language === "fr"
          ? "Nous conservons vos informations personnelles uniquement pendant la durée nécessaire pour atteindre les objectifs décrits dans cette politique de confidentialité, sauf si une période de conservation plus longue est requise ou autorisée par la loi."
          : "We retain your personal information only for as long as necessary to fulfill the purposes described in this privacy policy, unless a longer retention period is required or permitted by law.",
    },
    {
      title: language === "fr" ? "6. Vos droits" : "6. Your Rights",
      content:
        language === "fr" ? (
          <>
            En vertu des lois applicables en matière de protection des données,
            vous avez le droit :
            <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
              <li>
                D&apos;accéder à vos informations personnelles que nous
                détenons.
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
        ) : (
          <>
            Under applicable data protection laws, you have the right to:
            <ul className="my-3 flex list-disc flex-col gap-y-1 pl-6">
              <li>Access your personal information that we hold.</li>

              <li>
                Request the correction or deletion of your personal information.
              </li>

              <li>
                Object to the use of your personal information for specific
                purposes.
              </li>
            </ul>
            To exercise these rights, please contact us at the following
            address: <strong>{email}</strong>.
          </>
        ),
    },
    {
      title:
        language === "fr"
          ? "7. Modifications de la politique de confidentialité"
          : "7. Changes to the Privacy Policy",
      content:
        language === "fr"
          ? "Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de la dernière mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé des modifications éventuelles."
          : "We reserve the right to update this privacy policy at any time. Any changes will be posted on this page with the date of the last update. We encourage you to regularly review this page to stay informed about any changes.",
    },
    {
      title: language === "fr" ? "8. Contact" : "8. Contact",
      content:
        language === "fr" ? (
          <>
            Si vous avez des questions ou des préoccupations concernant cette
            politique de confidentialité, veuillez nous contacter à
            l&apos;adresse suivante : <strong>{email}</strong>.
          </>
        ) : (
          <>
            If you have any questions or concerns regarding this privacy policy,
            please contact us at the following address: <strong>{email}</strong>
            .
          </>
        ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - Ground Elite Academy</title>
      </Helmet>

      <div className="mt-[68px] px-2 py-5 md:px-8 md:pb-10 md:pt-7 lg:flex lg:flex-col lg:items-center xl:mt-[78px]">
        <h1 className="mb-7 text-center text-3xl font-bold lg:mb-10 xl:text-4xl">
          {translations[language].privacyAndPolicy.title}
        </h1>

        <main className="rounded-xl bg-white px-6 py-4 shadow-md lg:w-[800px] xl:w-[950px]">
          <p className="mb-4 text-justify lg:text-lg">
            {language === "fr" ? (
              <>
                Dernière mise à jour : <strong>{lastUpdatedDate}</strong>
              </>
            ) : (
              <>
                Last Updated : <strong>{lastUpdatedDate}</strong>
              </>
            )}
          </p>

          <p className="mb-4 text-justify lg:text-lg">
            {language === "fr" ? (
              <>
                Chez{" "}
                <strong className="text-[#b0181c]">
                  Ground Elite Academy - GEA
                </strong>
                , nous prenons la confidentialité de vos informations
                personnelles très au sérieux. Cette politique de confidentialité
                décrit comment nous collectons, utilisons, stockons et
                protégeons les informations que vous nous fournissez via notre
                site web.
              </>
            ) : (
              <>
                At{" "}
                <strong className="text-[#b0181c]">
                  Ground Elite Academy - GEA
                </strong>
                , we take the privacy of your personal information very
                seriously. This privacy policy outlines how we collect, use,
                store, and protect the information you provide to us through our
                website.
              </>
            )}
          </p>

          {sections.map((section, index) => (
            <div key={index} className="mb-5 md:mb-8">
              <h2 className="mb-3 text-xl font-bold lg:mb-5 lg:text-2xl">
                {section.title}
              </h2>

              <div className="text-justify lg:text-lg">{section.content}</div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default PrivacyAndPolicy;
