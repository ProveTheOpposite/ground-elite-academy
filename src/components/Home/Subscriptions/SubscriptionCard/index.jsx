import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Check, Clock, Info, X } from "lucide-react";

const SubscriptionCard = ({
  id,
  title,
  ageRange,
  price,
  period,
  description,
  benefits,
  notIncluded,
  feeNote,
  isPopular,
}) => {
  return id === "indisponible" ? (
    <Card className="relative border-2 border-dashed border-gray-300 bg-gray-50 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-gray-500">
            Enfant
          </CardTitle>
          <Badge
            variant="outline"
            className="border-gray-300 text-sm text-gray-500"
          >
            5-13 ans
          </Badge>
        </div>
        <p className="mt-2 text-gray-500">
          Abonnement enfant non disponible en mensuel.
        </p>
      </CardHeader>
      <CardContent className="space-y-6 text-center">
        <div className="py-8">
          <Clock className="mx-auto mb-4 h-16 w-16 text-gray-400" />
          <h3 className="mb-2 text-lg font-semibold text-gray-600">
            Bientôt disponible
          </h3>
          <p className="mb-6 text-sm text-gray-500">
            Nous travaillons sur cette option. En attendant, découvrez nos
            autres formules.
          </p>
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card
      className={`relative rounded-lg border bg-white pt-7 shadow-lg transition-shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl ${
        isPopular ? "border-2 border-red-600" : "border border-gray-200"
      }`}
    >
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-lg bg-red-600 px-4 py-1 text-sm text-white">
          Populaire
        </Badge>
      )}

      <CardHeader>
        <div className="mb-2 flex items-start justify-between">
          <CardTitle className="text-2xl font-bold text-gray-900">
            {title}
          </CardTitle>
          <Badge
            variant="outline"
            className="border-red-200 bg-red-50 text-sm text-red-600"
          >
            {ageRange}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 lg:text-base">{description}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-6">
          <div className="mb-1 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gray-900 lg:text-5xl">
              {price}
            </span>
            <span className="text-lg text-gray-500">{period}</span>
          </div>
        </div>

        <div className="mb-6 space-y-3 lg:text-[15px]">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="h-[22px] w-[22px] flex-shrink-0 rounded-full bg-green-100 p-1 text-green-500" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
          {notIncluded?.length > 0 &&
            notIncluded.map((notIncluded, i) => (
              <div key={i} className="flex items-center gap-3">
                <X className="h-[22px] w-[22px] flex-shrink-0 rounded-full bg-red-100 p-1 text-red-500" />
                <span className="text-gray-700">{notIncluded}</span>
              </div>
            ))}
        </div>

        <div className="mb-6 flex items-center gap-2 border-t border-slate-100 pt-2">
          <Info className="h-[22px] w-[22px] rounded-full bg-slate-100 p-1 text-gray-300" />
          <span className="text-sm text-gray-600 lg:text-base">{feeNote}</span>
        </div>

        <a href="/fiche_d_inscription_gea.pdf" download>
          <Button className="w-full rounded-md bg-red-600 py-3 font-medium text-white hover:bg-red-700">
            S'inscrire maintenant
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
