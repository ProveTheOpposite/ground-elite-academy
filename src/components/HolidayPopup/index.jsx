"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function HolidayPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasBeenOpened = sessionStorage.getItem("holidayPopup");
    if (!hasBeenOpened) {
      setIsOpen(true);
      sessionStorage.setItem("holidayPopup", "true");
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Annonce importante</DialogTitle>
          <DialogDescription>
            Veuillez lire cette mise à jour importante concernant nos heures
            d'ouverture.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-3 pb-2 text-center">
          <p className="text-lg font-semibold">
            Nous sommes actuellement fermés pendant les vacances.
          </p>
          <p className="text-muted-foreground mt-2">
            Nous reprendrons nos cours en septembre. Merci de votre
            compréhension!
          </p>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Fermer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
