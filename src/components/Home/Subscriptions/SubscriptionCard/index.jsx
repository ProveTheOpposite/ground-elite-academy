import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Check, Info } from "lucide-react";

const SubscriptionCard = ({
  title,
  ageRange,
  price,
  period,
  description,
  benefits,
  feeNote,
  isPopular,
}) => {
  return (
    <>
      <Card
        className={`relative overflow-hidden rounded-lg border ${
          isPopular ? "border-2 border-red-600" : "border border-gray-200"
        } bg-white pt-7 shadow-lg transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl`}
      >
        {isPopular && (
          <div className="absolute top-0 -right-0.5 rounded-se-lg bg-red-600 px-2 py-1 text-sm font-medium text-white">
            Populaire
          </div>
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
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mb-6 flex items-center gap-2">
            <Info className="h-4 w-4 text-gray-300" />
            <span className="text-sm text-gray-600 lg:text-base">
              {feeNote}
            </span>
          </div>

          <a href="/fiche_d_inscription_gea.pdf" download>
            <Button className="w-full rounded-md bg-red-600 py-3 font-medium text-white hover:bg-red-700">
              S'inscrire maintenant
            </Button>
          </a>
        </CardContent>
      </Card>
    </>
  );
};

export default SubscriptionCard;
