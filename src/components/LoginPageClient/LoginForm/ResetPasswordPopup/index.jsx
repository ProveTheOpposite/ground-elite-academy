import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { ArrowLeft, X } from "lucide-react";

import { auth } from "@/server/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import toast, { ToastBar, Toaster } from "react-hot-toast";

const schema = yup.object({
  email: yup.string().email("Email invalide").required("Email requis"),
});

const ResetPasswordPopup = ({ showPopup, setShowPopup }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const resetPassword = async (data) => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, data.email);
      toast.success(
        "Un email de réinitialisation a été envoyé à votre adresse email.",
      );
      reset();
    } catch (e) {
      console.log(e);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <Toaster position="top-center" reverseOrder={false}>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button onClick={() => toast.dismiss(t.id)}>
                    <X className="h-4 w-4 cursor-pointer" />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center text-2xl">
            Mot de passe oublié ?
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            <span>
              Pas d'inquiétude, vous pouvez le réinitialiser en suivant les
              instructions ci-dessous.
            </span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(resetPassword)}>
          <div>
            <Input
              {...register("email")}
              type="email"
              placeholder="Entrez votre email"
            />
            {errors.email && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="mt-6 w-full bg-[#b0181c] p-2 text-white hover:bg-[#7d2a2d]"
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </form>

        <div
          onClick={() => setShowPopup(false)}
          className="mt-6 flex cursor-pointer items-center justify-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la page de connexion
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordPopup;
