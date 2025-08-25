import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import ResetPasswordPopup from "./ResetPasswordPopup";

import { app, auth } from "@/server/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Eye, EyeOff } from "lucide-react";

const schema = yup.object({
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis"),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const login = async (data) => {
    setErrorMessage(null);

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push("/profile");
    } catch (error) {
      console.log("Erreur login : ", error);

      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("L'adresse email est invalide.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage(
            "L'email que vous avez renseigné est déjà utilisé par un utilisateur",
          );
          break;
        case "auth/user-not-found":
          setErrorMessage("Aucun utilisateur trouvé avec cet email.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Mot de passe incorrect.");
          break;
        case "auth/too-many-requests":
          setErrorMessage("Trop de tentatives. Veuillez réessayer plus tard.");
          break;
        case "auth/invalid-credential":
          setErrorMessage("Email ou mot de passe invalide.");
          break;
        default:
          setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showPopup && (
        <ResetPasswordPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      )}

      <form
        className="flex w-full flex-col space-y-6"
        onSubmit={handleSubmit(login)}
      >
        <div>
          <Input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2"
          />
          {errors.email && (
            <p className="mt-2 pl-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative">
          <Input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            className="mb-2 border border-gray-300 p-2"
          />
          <span
            onClick={() => setShowPopup(true)}
            className="block cursor-pointer pr-2 text-right text-sm hover:underline"
          >
            Mot de passe oublié ?
          </span>

          {errors.password && (
            <p className="absolute bottom-0 left-0 mt-2 pl-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute top-0 right-0 h-[36px] px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <Button
          type="submit"
          className="bg-[#b0181c] p-2 text-white hover:bg-[#7d2a2d]"
          disabled={loading}
        >
          {loading ? "Connexion en cours..." : "Se connecter"}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
