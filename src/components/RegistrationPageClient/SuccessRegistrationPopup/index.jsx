import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, Heart } from "lucide-react";

const SuccessRegistrationPopup = ({
  typePerson,
  showCongratulations,
  setShowCongratulations,
}) => {
  const router = useRouter();

  return (
    <Dialog open={showCongratulations} onOpenChange={setShowCongratulations}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="font-serif text-2xl text-green-700">
            Félicitations ! 🎉
          </DialogTitle>
          <DialogDescription className="space-y-5 text-base">
            <span className="text-foreground block font-medium">
              {typePerson === "adulte"
                ? "Vous êtes maintenant inscrit(e) dans notre club !"
                : "Votre/Vos enfant(s) sont maintenant inscrit(es) dans notre club !"}
            </span>
            <span className="flex items-center justify-center gap-2 text-[#b0181c]">
              <Heart className="h-4 w-4" />
              <span className="font-medium">
                Vous êtes les bienvenus dans notre club
              </span>
              <Heart className="h-4 w-4" />
            </span>
            <span className="text-muted-foreground block">
              Le système de paiement en ligne arrivera bientôt pour faciliter
              vos transactions. En attendant, vous pouvez régler votre due en
              vous rendant au club.
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => {
              setShowCongratulations(false);
              router.push("/profile");
            }}
            className="bg-[#b0181c] px-8 hover:bg-[#7d2a2d]"
          >
            Parfait !
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessRegistrationPopup;
