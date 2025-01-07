// hook
import { useRecoilValue } from "recoil";
// react router dom
import { Link } from "react-router-dom";
// atom
import { languageState } from "src/recoil";
// assets
import translations from "src/language/translations";

const TermsAndConditions = () => {
  const language = useRecoilValue(languageState);

  const sections = [
    {
      title: language === "fr" ? "1. Introduction" : "1. Introduction",
      content:
        language === "fr" ? (
          <>
            Bienvenue sur{" "}
            <strong className="text-[#b0181c]">
              Ground Elite Academy - GEA
            </strong>
            . En accédant et en utilisant ce site web, vous acceptez d&apos;être
            lié par les présents termes et conditions. Si vous n&apos;acceptez
            pas ces termes, veuillez ne pas utiliser ce site.
          </>
        ) : (
          <>
            Welcome to{" "}
            <strong className="text-[#b0181c]">
              Ground Elite Academy - GEA
            </strong>
            . By accessing and using this website, you agree to be bound by
            these terms and conditions. If you do not agree with these terms,
            please do not use this site.
          </>
        ),
    },
    {
      title: language === "fr" ? "2. Accès au site" : "2. Site Access",
      content:
        language === "fr"
          ? "L'accès au site est gratuit. Toutefois, nous nous réservons le droit de restreindre ou de suspendre l'accès à certaines parties du site à tout moment et sans préavis."
          : "Access to the site is free. However, we reserve the right to restrict or suspend access to certain parts of the site at any time without notice.",
    },
    {
      title:
        language === "fr" ? "3. Utilisation du site" : "3. Use of the Site",
      content:
        language === "fr"
          ? "Vous acceptez d'utiliser ce site uniquement à des fins légales et de manière à ne pas violer les droits, limiter ou empêcher l'utilisation et la jouissance de ce site par d'autres. Les comportements interdits incluent le harcèlement ou la transmission de contenu obscène ou offensant."
          : "You agree to use this site only for lawful purposes and in a way that does not violate the rights, limit, or inhibit the use and enjoyment of this site by others. Prohibited behavior includes harassing or transmitting obscene or offensive content.",
    },
    {
      title:
        language === "fr"
          ? "4. Propriété intellectuelle"
          : "4. Intellectual Property",
      content:
        language === "fr" ? (
          <>
            Tous les contenus, y compris les textes, images, graphiques, logos,
            et logiciels présents sur ce site sont la propriété exclusive de{" "}
            <strong className="text-[#b0181c]">
              Ground Elite Academy - GEA
            </strong>{" "}
            ou sont utilisés avec l&apos;autorisation de leurs propriétaires
            respectifs. Toute reproduction, distribution, modification ou
            utilisation du contenu à des fins commerciales est strictement
            interdite sans autorisation préalable.
          </>
        ) : (
          <>
            All content, including text, images, graphics, logos, and software
            on this site is the exclusive property of{" "}
            <strong className="text-[#b0181c]">
              Ground Elite Academy - GEA
            </strong>{" "}
            or is used with permission from the respective owners. Any
            reproduction, distribution, modification, or use of the content for
            commercial purposes is strictly prohibited without prior
            authorization.
          </>
        ),
    },
    {
      title:
        language === "fr"
          ? "5. Liens vers d'autres sites"
          : "5. Links to Other Sites",
      content:
        language === "fr"
          ? "Ce site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu de ces sites et vous y accédez à vos propres risques. L'inclusion de ces liens ne signifie pas que nous approuvons les sites concernés."
          : "This site may contain links to third-party websites. We are not responsible for the content of these sites and you access them at your own risk. The inclusion of these links does not imply our endorsement of the sites in question.",
    },
    {
      title:
        language === "fr"
          ? "6. Modifications des termes et conditions"
          : "6. Changes to Terms and Conditions",
      content:
        language === "fr"
          ? "Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les modifications seront effectives dès leur publication sur ce site. Il est de votre responsabilité de consulter régulièrement ces termes pour rester informé des changements."
          : "We reserve the right to change these terms and conditions at any time. Changes will be effective as soon as they are posted on this site. It is your responsibility to regularly review these terms to stay informed of any updates.",
    },
    {
      title: language === "fr" ? "7. Loi applicable" : "7. Applicable Law",
      content:
        language === "fr"
          ? "Ces termes et conditions sont régis par les lois de la France. Tout litige relatif à ces termes sera soumis à la juridiction exclusive des tribunaux de la France."
          : "These terms and conditions are governed by the laws of France. Any dispute relating to these terms will be subject to the exclusive jurisdiction of the courts of France.",
    },
    {
      title: language === "fr" ? "8. Contact" : "8. Contact",
      content:
        language === "fr" ? (
          <>
            Si vous avez des questions concernant ces termes et conditions,
            veuillez nous contacter sur notre{" "}
            <Link to="/contact-us" className="underline">
              page de contact
            </Link>{" "}
            ou à l&apos;adresse suivante : <strong>geanice934@gmail.com</strong>{" "}
            .
          </>
        ) : (
          <>
            If you have any questions regarding these terms and conditions,
            please contact us at: <strong>geanice934@gmail.com</strong>.
          </>
        ),
    },
    {
      title:
        language === "fr"
          ? "9. Limitation de responsabilité"
          : "9. Limitation of Liability",
      content:
        language === "fr" ? (
          <>
            Ground Elite Academy - GEA ne pourra être tenu responsable des
            dommages directs ou indirects, y compris, mais sans s&apos;y
            limiter, la perte de profits, de données, ou autres pertes
            intangibles résultant de l&apos;utilisation ou de
            l&apos;impossibilité d&apos;utiliser ce site, même si nous avons été
            informés de la possibilité de tels dommages. Vous utilisez ce site à
            vos propres risques.
          </>
        ) : (
          <>
            Ground Elite Academy - GEA cannot be held responsible for direct or
            indirect damages, including but not limited to loss of profits,
            data, or other intangible losses resulting from the use or inability
            to use this site, even if we have been informed of the possibility
            of such damages. You use this site at your own risk.
          </>
        ),
    },
    {
      title: language === "fr" ? "10. Confidentialité" : "10. Privacy",
      content:
        language === "fr" ? (
          <>
            En soumettant des informations via notre formulaire de contact, vous
            consentez à ce que Ground Elite Academy - GEA collecte et traite vos
            données personnelles. Ces informations sont utilisées uniquement
            pour répondre à vos demandes et ne seront pas partagées avec des
            tiers sans votre consentement. Pour plus de détails sur la manière
            dont nous protégeons vos données, veuillez consulter notre{" "}
            <Link to="/privacy-policy" className="underline">
              politique de confidentialité
            </Link>
          </>
        ) : (
          <>
            By submitting information through our contact form, you consent to
            Ground Elite Academy - GEA collecting and processing your personal
            data. This information is used solely to respond to your inquiries
            and will not be shared with third parties without your consent. For
            more details on how we protect your data, please refer to our{" "}
            <Link to="/privacy-policy" className="underline">
              privacy policy
            </Link>
          </>
        ),
    },
  ];

  return (
    <div className="mt-[68px] px-2 py-5 md:px-8 md:pb-10 md:pt-7 lg:flex lg:flex-col lg:items-center xl:mt-[78px]">
      <h1 className="mb-7 text-center text-3xl font-bold lg:mb-10 xl:text-4xl">
        {translations[language].termsAndConditions.title}
      </h1>

      <main className="rounded-xl bg-white px-6 py-4 shadow-md lg:w-[800px] xl:w-[950px]">
        {sections.map((section, index) => (
          <div key={index} className="mb-5 md:mb-8">
            <h2 className="mb-3 text-xl font-bold lg:mb-5 lg:text-2xl">
              {section.title}
            </h2>

            <p className="text-justify lg:text-lg">{section.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TermsAndConditions;
