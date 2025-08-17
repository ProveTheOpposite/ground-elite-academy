"use client";

import { useScreenSize } from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { User, Users } from "lucide-react";

export default function RegistrationPopup({ setMobileMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const screenSize = useScreenSize();

  const handleNavigate = (typePerson) => {
    router.push(`/registration/${typePerson}`);
    setIsOpen(false);
    setMobileMenuOpen?.(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <span>Inscription</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choisissez le type d'inscription</DialogTitle>
          <DialogDescription>
            Veuillez sélectionner comment vous souhaitez vous inscrire.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Card
            className="hover:bg-accent/50 hover:border-primary/50 cursor-pointer border-2 transition-colors"
            onClick={() => handleNavigate("adulte")}
          >
            <CardHeader className="pb-2 text-center">
              <div className="bg-primary/10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full">
                <User className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Inscription Ado/Adulte</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardDescription className="text-[15px]">
                S'inscrire en tant qu'utilisateur adulte individuel (à partir de
                14 ans)
              </CardDescription>
            </CardContent>
          </Card>

          <Card
            className="hover:bg-accent/50 hover:border-primary/50 cursor-pointer border-2 transition-colors"
            onClick={() => handleNavigate("parent")}
          >
            <CardHeader className="pb-2 text-center">
              <div className="bg-primary/10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full">
                <Users className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Inscription Enfant</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardDescription className="text-[15px]">
                S'inscrire en tant que parent pour inscrire votre/vos enfant(s)
                (à partir de 5 ans)
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
