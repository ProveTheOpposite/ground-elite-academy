import useAuthState from "@/hooks/useAuthState";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, Heart } from "lucide-react";

import { currentStepAtom } from "@/state/atoms/currentStep";

const SuccessRegistrationPopup = ({
  registrationType,
  showCongratulations,
  setShowCongratulations,
  userEmail,
}) => {
  const { user } = useAuthState();

  const setCurrentStep = useSetAtom(currentStepAtom);

  const [isVerified, setIsVerified] = useState(user?.emailVerified);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  console.log("Email vérifié ? ", user?.emailVerified);

  const handleRefresh = async () => {
    if (!user) return;
    setLoading(true);
    await user.reload(); // recharge les infos Firebase
    setIsVerified(user.emailVerified);
    setLoading(false);
  };

  return (
    <Dialog
      open={showCongratulations}
      onOpenChange={(open) => {
        setShowCongratulations(open);
        if (!open && isVerified) {
          router.push("/profile");
        } else if (!open && !isVerified) {
          router.push("/login");
        }
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl text-green-700">
            Félicitations ! 🎉
          </DialogTitle>
          <DialogDescription className="space-y-5 text-base">
            <span className="text-foreground block font-medium">
              {registrationType === "adult"
                ? "Vous êtes maintenant inscrit(e) dans notre club !"
                : "Votre/Vos enfant(s) sont maintenant inscrit(s) dans notre club !"}
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

            {!isVerified && (
              <span className="text-muted-foreground mt-4 italic">
                Nous avons envoyé un email de vérification à{" "}
                <strong>{userEmail}</strong>.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center gap-y-4 pt-4">
          <Button
            onClick={() => {
              setShowCongratulations(false);
              setCurrentStep(1);
              router.push("/profile");
            }}
            className={`w-full bg-[#b0181c] px-8 hover:bg-[#7d2a2d] ${!isVerified ? "cursor-not-allowed" : ""}`}
            disabled={!isVerified}
          >
            {isVerified
              ? "Accéder à mon profil"
              : "En attente de vérification..."}
          </Button>

          {!isVerified && (
            <Button
              onClick={handleRefresh}
              variant="outline"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Vérification en cours..." : "Rafraîchir l'état"}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessRegistrationPopup;
