"use client";

import { useScreenSize } from "@/hooks/useScreenSize";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import FormEmailPassword from "./FormEmailPassword";
import FormPersonalInformationParent from "./FormPersonalInformationParent";
import FormPersonalInformationsAdult from "./FormPersonalInformationsAdult";
import FormRulesRegulations from "./FormRulesRegulations";
import FormPayment from "./FormPayment";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { auth, db, storage } from "@/server/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { currentStepAtom, currentSubstepAtom } from "@/state/atoms/currentStep";
import { registrationTypeAtom } from "@/state/atoms/registrationType";

import { yupResolver } from "@hookform/resolvers/yup";

import { defaultValuesAdult } from "@/utils/defaultValuesAdult";
import { defaultValuesParent } from "@/utils/defaultvaluesParent";
import { getSchema } from "@/utils/schemaRegistration";

import { Mail, Newspaper, User, Users } from "lucide-react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { Check } from "lucide-react";
import { ChevronRight } from "lucide-react";
import SuccessRegistrationPopup from "./SuccessRegistrationPopup";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertTriangle } from "lucide-react";

const RegistrationPageClient = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [currentSubStep, setCurrentSubStep] = useAtom(currentSubstepAtom);
  const [registrationType, setRegistrationType] = useAtom(registrationTypeAtom);

  const [showCongratulations, setShowCongratulations] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const screenSize = useScreenSize();

  const router = useRouter();
  console.log(registrationType);

  const stepSchemas = getSchema(registrationType === "adult");

  const {
    register,
    handleSubmit,
    trigger,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      currentStep === 3 && registrationType === "adult"
        ? stepSchemas[2][currentSubStep - 1]
        : stepSchemas[currentStep - 1],
    ),
    defaultValues:
      registrationType === "adult" ? defaultValuesAdult : defaultValuesParent,
  });

  console.log(errors);

  // Reset error message when step changes
  useEffect(() => {
    setErrorMessage("");
  }, [currentStep, currentSubStep]);

  const totalSteps = 4;
  const totalSubSteps = 3; // subSteps for step 3 (adult)

  const steps = [
    {
      id: 0,
      title: "Créez votre compte",
    },
    {
      id: 1,
      title: "Informations de paiement",
    },
    {
      id: 2,
      title:
        registrationType === "adult"
          ? "Informations personnelles"
          : "Informations du parent et des enfants",
    },
    {
      id: 3,
      title: "Règlement et autorisations",
    },
  ];

  // display the content of the current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <FormEmailPassword register={register} errors={errors} />;
      case 2:
        return (
          <FormPayment control={control} registrationType={registrationType} />
        );
      case 3:
        return registrationType === "adult" ? (
          <FormPersonalInformationsAdult
            register={register}
            errors={errors}
            trigger={trigger}
            control={control}
            currentSubStep={currentSubStep}
          />
        ) : (
          <FormPersonalInformationParent
            register={register}
            errors={errors}
            control={control}
          />
        );
      case 4:
        return <FormRulesRegulations control={control} errors={errors} />;
      default:
        return <FormEmailPassword register={register} errors={errors} />;
    }
  };

  const handleClickChangeRegistrationType = (type) => {
    setRegistrationType(type);
  };

  console.log("step", currentStep);

  // function to submit the form to create the user with Auth, then send email verification, then create user in firestore
  const onSubmit = async (data) => {
    try {
      if (
        registrationType === "adult" &&
        currentStep === 3 &&
        currentSubStep < totalSubSteps
      ) {
        setCurrentSubStep((prev) => prev + 1);
      } else if (currentStep < stepSchemas.length) {
        setCurrentStep((prev) => prev + 1);
        setCurrentSubStep(1);
      } else {
        console.log(data);
        setIsLoading(true);

        // 1. create user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );
        const user = userCredential.user;
        setUserEmail(user.email);

        // 2. send email verification
        await sendEmailVerification(user);

        // 3. create user in firestore
        await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${user.uid}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...data,
              registrationType,
            }),
          },
        );

        setShowCongratulations(true);
        setCurrentStep(1);
      }
    } catch (error) {
      console.log("Erreur lors de la création du user : ", error);
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("L'adresse email est syntaxiquement invalide.");
          break;
        case "auth/too-many-requests":
          setErrorMessage("Trop de tentatives. Veuillez réessayer plus tard.");
          break;
        case "auth/user-disabled":
          setErrorMessage(
            "Ce compte a été désactivé par notre administrateur. Veuillez nous contacter.",
          );
          break;
        case "auth/email-already-in-use":
          setErrorMessage(
            "L'email est déjà utilisé par un utilisateur. Veuillez choisir un autre email.",
          );
          break;
        default:
          setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickPrevStep = () => {
    if (
      currentStep === 3 &&
      registrationType === "adult" &&
      currentSubStep > 1
    ) {
      setCurrentSubStep((prev) => Math.max(prev - 1, 1));
    } else if (currentStep > 1) {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
      if (currentStep - 1 === 3 && registrationType === "adult") {
        setCurrentSubStep(totalSubSteps);
      }
    }
  };

  return (
    <div className="mt-[68px] flex flex-1 items-center justify-center px-5 py-8 lg:mt-[78px]">
      <SuccessRegistrationPopup
        registrationType={registrationType}
        showCongratulations={showCongratulations}
        setShowCongratulations={setShowCongratulations}
        userEmail={userEmail}
      />

      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl">
          {/* Header of the form */}
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-bold text-balance">
                Inscription{" "}
                {currentStep !== 1 // Ajouter currentSubStep si problème d'affichage
                  ? registrationType === "adult"
                    ? ": Adulte"
                    : ": Enfant"
                  : ""}
              </CardTitle>

              <span className="text-muted-foreground text-sm">
                Étape {currentStep} sur {totalSteps}{" "}
                {currentStep === 3 &&
                  registrationType === "adult" &&
                  `(${currentSubStep}/${totalSubSteps})`}
              </span>
            </div>

            <CardDescription className="text-base">
              Créez votre compte en quelques étapes simples
            </CardDescription>

            {currentStep === 1 && (
              <div className="bg-muted flex gap-2 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => handleClickChangeRegistrationType("adult")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                    registrationType === "adult"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <User className="h-4 w-4" />
                  Inscription Adulte
                </button>
                <button
                  type="button"
                  onClick={() => handleClickChangeRegistrationType("parent")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                    registrationType === "parent"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Users className="h-4 w-4" />
                  Inscription Enfant
                </button>
              </div>
            )}

            {/* Progress indicator */}
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    index + 1 < currentStep
                      ? "bg-[#b0181c]"
                      : index + 1 === currentStep
                        ? "bg-[#b0181c]"
                        : "bg-muted"
                  }`}
                />
              ))}
            </div>

            {currentStep === 3 && registrationType === "adult" && (
              <div className="flex gap-2 pt-2">
                {Array.from({ length: totalSubSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      index + 1 <= currentSubStep
                        ? "bg-[#b0181c]/60"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            )}
          </CardHeader>

          {/* Content of the form */}
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Title of the step */}
              <div className="mb-6 flex items-center gap-3">
                <div className="text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full bg-[#b0181c] font-semibold">
                  {currentStep}
                </div>
                <h3 className="text-xl font-semibold">
                  {steps[currentStep - 1].title}
                </h3>
              </div>

              {/* Content of the step */}
              {renderStepContent()}

              {/* Error message */}
              {errorMessage && (
                <Alert
                  variant="destructive"
                  className="mt-6 border-red-200 bg-red-50/80 backdrop-blur-sm"
                >
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="flex">
                    {errorMessage}
                  </AlertDescription>
                </Alert>
              )}

              {/* Navigation buttons */}
              <div
                className={`${
                  screenSize === "mobile"
                    ? "fixed right-0 bottom-0 left-0 bg-white p-3"
                    : "border-border mt-6 border-t pt-6"
                } flex gap-3 text-sm`}
              >
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClickPrevStep}
                  disabled={currentStep === 1} // rajouter && currentSubStep === 1 si l'effet n'est pas bien géré
                  className="h-11 flex-1 bg-transparent"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Précédent
                </Button>
                <Button
                  type="submit"
                  // disabled={!isStepValid()}
                  className="h-11 flex-1 bg-[#b0181c] hover:bg-[#b0181c]/90"
                >
                  {currentStep === totalSteps ? (
                    <>
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Terminer
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      Suivant
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationPageClient;
