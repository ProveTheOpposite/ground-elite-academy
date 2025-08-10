import Link from "next/link";

import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Termes et Conditions - Ground Elite Academy",
  description: "Découvrez les termes et conditions de notre site web.",
  openGraph: {
    title: "Termes et Conditions - Ground Elite Academy",
    description: "Découvrez les termes et conditions de notre site web.",
    siteName: "Ground Elite Academy",
    domain: "groundeliteacademy.fr",
    type: "website",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Termes et Conditions - Ground Elite Academy",
    description: "Découvrez les termes et conditions de notre site web.",
    images: ["/seo-image.jpg"],
    domain: "groundeliteacademy.fr",
  },
};

const TermsAndConditionsPage = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: (
        <>
          Bienvenue sur{" "}
          <strong className="text-[#b0181c]">Ground Elite Academy</strong>. En
          accédant et en utilisant ce site web, vous acceptez d&apos;être lié
          par les présents termes et conditions. Si vous n&apos;acceptez pas ces
          termes, veuillez ne pas utiliser ce site.
        </>
      ),
    },
    {
      title: "2. Accès au site",
      content:
        "L'accès au site est gratuit. Toutefois, nous nous réservons le droit de restreindre ou de suspendre l'accès à certaines parties du site à tout moment et sans préavis.",
    },
    {
      title: "3. Utilisation du site",
      content:
        "Vous acceptez d'utiliser ce site uniquement à des fins légales et de manière à ne pas violer les droits, limiter ou empêcher l'utilisation et la jouissance de ce site par d'autres. Les comportements interdits incluent le harcèlement ou la transmission de contenu obscène ou offensant.",
    },
    {
      title: "4. Propriété intellectuelle",
      content: (
        <>
          Tous les contenus, y compris les textes, images, graphiques, logos, et
          logiciels présents sur ce site sont la propriété exclusive de{" "}
          <strong className="text-[#b0181c]">Ground Elite Academy</strong> ou
          sont utilisés avec l&apos;autorisation de leurs propriétaires
          respectifs. Toute reproduction, distribution, modification ou
          utilisation du contenu à des fins commerciales est strictement
          interdite sans autorisation préalable.
        </>
      ),
    },
    {
      title: "5. Liens vers d'autres sites",
      content:
        "Ce site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu de ces sites et vous y accédez à vos propres risques. L'inclusion de ces liens ne signifie pas que nous approuvons les sites concernés.",
    },
    {
      title: "6. Modifications des termes et conditions",
      content:
        "Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les modifications seront effectives dès leur publication sur ce site. Il est de votre responsabilité de consulter régulièrement ces termes pour rester informé des changements.",
    },
    {
      title: "7. Loi applicable",
      content:
        "Ces termes et conditions sont régis par les lois de la France. Tout litige relatif à ces termes sera soumis à la juridiction exclusive des tribunaux de la France.",
    },
    {
      title: "8. Contact",
      content: (
        <>
          Si vous avez des questions concernant ces termes et conditions,
          veuillez nous contacter sur notre{" "}
          <Link href="/contact-us" className="underline">
            page de contact
          </Link>{" "}
          ou à l&apos;adresse suivante : <strong>geanice934@gmail.com</strong> .
        </>
      ),
    },
    {
      title: "9. Limitation de responsabilité",
      content: (
        <>
          <strong className="text-[#b0181c]">Ground Elite Academy</strong> ne
          pourra être tenu responsable des dommages directs ou indirects, y
          compris, mais sans s&apos;y limiter, la perte de profits, de données,
          ou autres pertes intangibles résultant de l&apos;utilisation ou de
          l&apos;impossibilité d&apos;utiliser ce site, même si nous avons été
          informés de la possibilité de tels dommages. Vous utilisez ce site à
          vos propres risques.
        </>
      ),
    },
    {
      title: "10. Confidentialité",
      content: (
        <>
          En soumettant des informations via notre formulaire de contact, vous
          consentez à ce que{" "}
          <strong className="text-[#b0181c]">Ground Elite Academy</strong>{" "}
          collecte et traite vos données personnelles. Ces informations sont
          utilisées uniquement pour répondre à vos demandes et ne seront pas
          partagées avec des tiers sans votre consentement. Pour plus de détails
          sur la manière dont nous protégeons vos données, veuillez consulter
          notre{" "}
          <Link href="/privacy-policy" className="underline">
            politique de confidentialité
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="mt-[68px] px-2 py-5 md:px-8 md:pt-7 md:pb-10 lg:flex lg:flex-col lg:items-center xl:mt-[78px]">
      <h1 className="mb-7 text-center text-3xl font-bold lg:mb-10 xl:text-4xl">
        Termes et Conditions
      </h1>

      <Card className="rounded-xl bg-white px-6 py-4 shadow-md lg:w-[800px] xl:w-[950px]">
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

export default TermsAndConditionsPage;
