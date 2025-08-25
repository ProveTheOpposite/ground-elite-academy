"use client";

import { useState } from "react";

import RegistrationPopup from "../RegistrationPopup";
import LoginForm from "./LoginForm";

const LoginPageClient = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex w-full flex-col items-center sm:max-w-[600px]">
      <h2 className="mb-4 text-4xl font-bold">Connexion</h2>

      <p className="mb-12">Connectez-vous à votre espace membre </p>

      <LoginForm />

      <p className="mt-6 text-center">
        Pas de compte ?{" "}
        <span
          onClick={() => setShowPopup(true)}
          className="cursor-pointer text-red-600 hover:underline"
        >
          S'inscrire
        </span>
      </p>

      <RegistrationPopup open={showPopup} onOpenChange={setShowPopup} />
    </div>
  );
};

export default LoginPageClient;
