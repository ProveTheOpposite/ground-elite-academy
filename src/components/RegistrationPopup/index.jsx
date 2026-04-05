"use client";

import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Clock } from "lucide-react";
import { User, Users, CreditCard } from "lucide-react";

export default function RegistrationPopup({ open, onOpenChange }) {
  const router = useRouter();

  const handleNavigate = (typePerson) => {
    router.push(`/registration/${typePerson}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choisissez le type d'inscription</DialogTitle>
          <DialogDescription>
            Veuillez sélectionner comment vous souhaitez vous inscrire.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg border-2 border-amber-200 bg-linear-to-r from-amber-50 to-orange-50 p-4">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-16 w-16 rounded-full bg-amber-100 opacity-50"></div>
            <div className="relative flex items-start gap-3">
              <div className="mt-0.5 shrink-0">
                <div className="rounded-full bg-amber-100 p-2">
                  <CreditCard className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-semibold tracking-wide text-amber-800 uppercase">
                    Bientôt disponible
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  <span className="font-medium">
                    Le système de paiement en ligne arrivera bientôt
                  </span>{" "}
                  pour faciliter vos transactions. En attendant, vous pouvez
                  régler votre due en vous rendant au club.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 py-2">
            <Card
              className="hover:bg-accent/50 hover:border-primary/50 cursor-pointer border-2 transition-colors"
              onClick={() => handleNavigate("adult")}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <User className="text-primary h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Inscription Ado/Adulte
                    </h3>
                    <p className="text-sm text-gray-600">
                      S'inscrire en tant qu'utilisateur adulte individuel (à
                      partir de 14 ans)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:bg-accent/50 hover:border-primary/50 cursor-pointer border-2 transition-colors"
              onClick={() => handleNavigate("parent")}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Users className="text-primary h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Inscription Enfant
                    </h3>
                    <p className="text-sm text-gray-600">
                      S'inscrire en tant que parent pour inscrire votre/vos
                      enfant(s) (à partir de 5 ans)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
