"use client";

import DecorativeSvg from "@/components/DecorativeSvg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import SubscriptionCard from "./SubscriptionCard";

const subscriptionsData = [
  {
    title: "Enfant",
    ageRange: "5-13 ans",
    price: "75,00 €",
    period: "/trimestre",
    description: "L'abonnement enfant concerne les enfants de 5 à 13 ans.",
    benefits: [
      "Accès aux deux disciplines (lutte et grappling)",
      "Encadrement par des professionnels qualifiés",
      "Accès aux vestiaires",
    ],
    feeNote: "+50,00€ de frais d'adhésion",
    isPopular: false,
  },
  {
    title: "Adulte",
    ageRange: "14+ ans",
    price: "40,00 €",
    period: "/mois",
    description:
      "L'abonnement adulte concerne les personnes d'au moins 14 ans.",
    benefits: [
      "Accès aux deux disciplines (lutte et grappling)",
      "Encadrement par des professionnels qualifiés",
      "Accès aux vestiaires",
      "Accès aux compétitions",
    ],
    feeNote: "+50,00€ de frais d'adhésion",
    isPopular: true,
  },
];

const Subscriptions = () => {
  const router = useRouter();

  return (
    <section
      id="subscriptions"
      className="relative flex min-h-screen flex-col justify-center px-5 py-20 xl:py-24"
    >
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="mb-8 text-4xl font-bold text-gray-900 uppercase lg:text-5xl">
            Nos <span className="text-[#b0181c]">Abonnements</span>
          </h2>
          <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-600">
            Les paiements se font en espèces directement au club avec les fiches
            d'inscription. De plus, l'abonnement prend en compte les deux
            disciplines (lutte et grappling). Et le montant doit être payant
            entre le 1er et le 9ème jour du mois courant.
          </p>

          <h3 className="text-3xl font-semibold text-gray-900">Abonnements</h3>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {subscriptionsData.map((sub, idx) => (
            <SubscriptionCard
              key={idx}
              title={sub.title}
              ageRange={sub.ageRange}
              price={sub.price}
              period={sub.period}
              description={sub.description}
              benefits={sub.benefits}
              feeNote={sub.feeNote}
              isPopular={sub.isPopular}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => router.push("/contact-us")}
            size="xl"
            className="border bg-[#b0181c] font-semibold text-white hover:border-[#b0181c] hover:bg-gray-50 hover:text-[#b0181c] lg:text-base"
          >
            <Phone className="mr-2 h-5 w-5 lg:h-8 lg:w-8" />
            Contactez-nous
          </Button>
        </div>
      </div>

      <DecorativeSvg />
    </section>
  );
};

export default Subscriptions;
