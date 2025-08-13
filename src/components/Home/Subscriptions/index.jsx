"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import DecorativeSvg from "@/components/DecorativeSvg";
import SubscriptionCard from "./SubscriptionCard";

import { Phone } from "lucide-react";

const subscriptions = {
  month: [
    {
      id: "indisponible",
      title: "Enfant",
      ageRange: "5-13 ans",
      price: "50,00 €",
      period: "/mois",
      description: "Abonnement enfant non disponible en mensuel",
      benefits: [
        "Accès aux deux disciplines (lutte et grappling)",
        "Encadrement par des professionnels qualifiés",
        "Accès aux compétitions",
      ],
      notIncluded: [
        "Tenue de sport GEA non incluse",
        "Frais d'adhésion en supplément",
      ],
      feeNote: "+50,00€ de frais d'adhésion",
      isPopular: false,
    },
    {
      title: "Adulte",
      ageRange: "14+ ans",
      price: "50,00 €",
      period: "/mois",
      description: "L'abonnement adulte : 14 ans et plus",
      benefits: [
        "Accès aux deux disciplines (lutte et grappling)",
        "Encadrement par des professionnels qualifiés",
        "Accès aux compétitions",
      ],
      notIncluded: [
        "Tenue de sport GEA non incluse",
        "Frais d'adhésion en supplément",
      ],
      feeNote: "+50,00€ de frais d'adhésion",
      isPopular: true,
    },
  ],
  fourFirstMonths: [
    {
      title: "Enfant",
      ageRange: "5-13 ans",
      price: "100,00 €",
      period: "/sept-déc",
      description: "L'abonnement enfant : de 5 à 13 ans",
      benefits: [
        "Accès aux deux disciplines (lutte et grappling)",
        "Encadrement par des professionnels qualifiés",
        "Accès aux compétitions",
      ],
      notIncluded: [
        "Tenue de sport GEA non incluse",
        "Frais d'adhésion en supplément",
      ],
      feeNote: "+50,00€ de frais d'adhésion",
      isPopular: true,
    },
    {
      title: "Adulte",
      ageRange: "14+ ans",
      price: "150,00 €",
      period: "/sept-déc",
      description: "L'abonnement adulte : 14 ans et plus",
      benefits: [
        "Accès aux deux disciplines (lutte et grappling)",
        "Encadrement par des professionnels qualifiés",
        "Accès aux compétitions",
      ],
      notIncluded: [
        "Tenue de sport GEA non incluse",
        "Frais d'adhésion en supplément",
      ],
      feeNote: "+50,00€ de frais d'adhésion",
      isPopular: false,
    },
  ],
  trimester: [
    {
      title: "Enfant",
      ageRange: "5-13 ans",
      price: "80,00 €",
      period: "/3 mois",
      description: "L'abonnement enfant : de 5 à 13 ans",
      benefits: [
        "Accès aux deux disciplines (lutte et grappling)",
        "Encadrement par des professionnels qualifiés",
        "Accès aux compétitions",
      ],
      notIncluded: [
        "Tenue de sport GEA non incluse",
        "Frais d'adhésion en supplément",
      ],
      feeNote: "+50,00€ de frais d'adhésion",
      isPopular: false,
    },
    {
      title: "Adulte",
      ageRange: "14+ ans",
      price: "120,00 €",
      period: "/3 mois",
      description: "L'abonnement adulte : 14 ans et plus",
      benefits: [
        "Accès aux deux disciplines (lutte et grappling)",
        "Encadrement par des professionnels qualifiés",
        "Accès aux compétitions",
      ],
      notIncluded: [
        "Tenue de sport GEA non incluse",
        "Frais d'adhésion en supplément",
      ],
      feeNote: "+50,00€ de frais d'adhésion",
      isPopular: false,
    },
  ],
  year: [
    {
      title: "Enfant",
      ageRange: "5-13 ans",
      price: "295,00 €",
      period: "/an",
      description: "L'abonnement enfant : de 5 à 13 ans",
      benefits: [
        "Accès aux deux disciplines (lutte et grappling)",
        "Encadrement par des professionnels qualifiés",
        "Accès aux compétitions",
        "Tenue de sport GEA offerte",
        "Frais d'adhésion compris",
      ],
      feeNote: "+0,00€ de frais d'adhésion",
      isPopular: true,
    },
    {
      title: "Adulte",
      ageRange: "14+ ans",
      price: "450,00 €",
      period: "/an",
      description: "L'abonnement adulte : 14 ans et plus",
      benefits: [
        "Accès aux deux disciplines (lutte et grappling)",
        "Encadrement par des professionnels qualifiés",
        "Accès aux compétitions",
        "Tenue de sport GEA offerte",
        "Frais d'adhésion compris",
      ],
      feeNote: "+0,00€ de frais d'adhésion",
      isPopular: true,
    },
  ],
};

const Subscriptions = () => {
  const router = useRouter();

  const [period, setPeriod] = useState("month");

  const periodLabels = {
    month: "Mensuelle",
    fourFirstMonths: "4 premiers mois",
    trimester: "3 mois",
    year: "Annuelle",
  };

  const btnsNav = Object.keys(subscriptions).map((key) => ({
    key,
    label: periodLabels[key],
    onClick: () => setPeriod(key),
  }));

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
            Les paiements se font directement au club avec les fiches
            d'inscription. De plus, l'abonnement comprend les deux disciplines
            (lutte et grappling). Et le montant doit être payant entre le 1er et
            le 9ème jour du mois courant.
          </p>

          <div className="flex flex-col justify-center gap-5 md:flex-row 2xl:mx-auto 2xl:w-[900px]">
            {btnsNav.map((btn) => (
              <button
                key={btn.key}
                onClick={btn.onClick}
                className={`relative flex-1 rounded-full px-6 py-3 font-medium transition-colors duration-75 ${
                  period === btn.key
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/25"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {btn.label}
                {btn.key === "year" && (
                  <div className="absolute -top-2 -right-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 text-xs font-semibold text-white shadow-lg">
                    Populaire
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {subscriptions[period].map((sub, idx) => (
            <SubscriptionCard
              key={idx}
              id={sub.id || "disponible"}
              title={sub.title}
              ageRange={sub.ageRange}
              price={sub.price}
              period={sub.period}
              description={sub.description}
              benefits={sub.benefits}
              notIncluded={sub.notIncluded}
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
