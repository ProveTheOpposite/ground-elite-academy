"use client";

import { useScreenSize } from "@/hooks/useScreenSize";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ArrowLeft,
  ArrowRight,
  CircleAlert,
  CircleAlertIcon,
  CreditCard,
  Loader2,
  Mail,
  Newspaper,
  User,
} from "lucide-react";

import FormEmailPassword from "./FormEmailPassword";
import FormPersonalInformationKid from "./FormPersonalInformationKid";
import FormPersonalInformationsAdulte from "./FormPersonalInformationsAdulte";
import FormRulesRegulations from "./FormRulesRegulations";
import StepBar from "./StepBar";
import SuccessRegistrationPopup from "./SuccessRegistrationPopup";

import { Button } from "@/components/ui/button";
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
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { currentStepAtom } from "@/state/atoms/currentStep";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

let currentStepContent;

const RegistrationPageClient = ({ typePerson }) => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);

  const [showCongratulations, setShowCongratulations] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const screenSize = useScreenSize();

  const getSchema = (isAdult) => {
    return [
      yup.object({
        firstNameParent: isAdult
          ? yup.string().optional()
          : yup.string().required("Prénom parent requis"),
        lastNameParent: isAdult
          ? yup.string().optional()
          : yup.string().required("Nom parent requis"),
        adressPostale: isAdult
          ? yup.string().optional()
          : yup.string().required("Adresse postale requise"),
        phoneNumber: isAdult
          ? yup.string().optional()
          : yup.string().required("Numéro de téléphone requis"),
        email: yup.string().email("Email invalide").required("Email requis"),
        password: yup
          .string()
          .required("Mot de passe requis")
          .min(6, "Minimum 6 caractères"),
        confirmPassword: yup
          .string()
          .required("Confirmer le mot de passe")
          .oneOf(
            [yup.ref("password")],
            "Les mots de passe ne correspondent pas",
          ),
      }),
      yup.object({
        firstNameAdherent: isAdult
          ? yup.string().required("Prénom requis")
          : yup.string().optional(),
        lastNameAdherent: isAdult
          ? yup.string().required("Nom requis")
          : yup.string().optional(),
        phoneNumber: isAdult
          ? yup.string().required("Numéro de téléphone requis")
          : yup.string().optional(),
        categoryAdherent: isAdult
          ? yup.string().required("Choisissez votre catégorie")
          : yup.string().optional(),
        dateOfBirthAdherent: isAdult
          ? yup
              .date("Date de naissance invalide")
              .nullable()
              .required("Date de naissance requise")
          : yup.date().nullable().optional(),
        adressPostale: isAdult
          ? yup.string().required("Adresse postale requise")
          : yup.string().optional(),
        nationalityAdherent: isAdult
          ? yup.string().required("Nationalité requise")
          : yup.string().optional(),
        contactEmergency: isAdult
          ? yup.string().required("Personne d'urgence requise")
          : yup.string().optional(),
        phoneNumberContactEmergency: isAdult
          ? yup.string().required("Numéro de téléphone requis")
          : yup.string().optional(),
        sexeAdherent: isAdult
          ? yup.string().required("Choisissez votre genre")
          : yup.string().optional(),
        licence: yup
          .object({
            fflutte: yup.boolean(),
            cfjjb: yup.boolean(),
          })
          .test(
            "at-least-one",
            "Vous devez sélectionner au moins une licence",
            (value) => {
              return value.fflutte || value.cfjjb;
            },
          ),
        children: isAdult
          ? yup
              .array()
              .of(
                yup.object({
                  firstNameChild: yup.string().optional(),
                  lastNameChild: yup.string().optional(),
                  dateOfBirthChild: yup.date().nullable().optional(),
                  nationalityChild: yup.string().optional(),
                  sexeChild: yup.string().optional(),
                  categoryChild: yup.string().optional(),
                }),
              )
              .optional()
          : yup
              .array()
              .of(
                yup.object({
                  firstNameChild: yup
                    .string()
                    .required("Prénom de l'enfant requis"),
                  lastNameChild: yup
                    .string()
                    .required("Nom de l'enfant requis"),
                  dateOfBirthChild: yup
                    .date()
                    .nullable()
                    .required("Date de naissance de l'enfant requise"),
                  nationalityChild: yup
                    .string()
                    .required("Nationalité requise"),
                  sexeChild: yup
                    .string()
                    .required("Choisissez le genre de l'enfant"),
                  categoryChild: yup
                    .string()
                    .required("Choisissez la catégorie"),
                }),
              )
              .min(1, "Ajoutez au moins un enfant"),
      }),
      yup.object({
        rulesRegulations: yup
          .boolean()
          .oneOf([true], "Veuillez accepter les règles et réglementations"),
      }),
    ];
  };

  const stepSchemas = getSchema(typePerson === "adulte");

  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepSchemas[currentStep - 1]),
    defaultValues: {
      firstNameParent: "",
      lastNameParent: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumberContactEmergency: "",
      contactEmergency: "",
      firstNameAdherent: "",
      lastNameAdherent: "",
      categoryAdherent: "",
      dateOfBirthAdherent: null,
      adressPostale: "",
      nationalityAdherent: "",
      sexeAdherent: "",
      profileImageAdherent: null,
      licence: {
        fflutte: false,
        cfjjb: false,
      },
      nonRespectRulesRegulations: false,
      medical: false,
      sharePhotosHimself: false,
      rulesRegulations: false,
      children: [
        {
          firstNameChild: "",
          lastNameChild: "",
          dateOfBirthChild: null,
          nationalityChild: "",
          sexeChild: "",
          categoryChild: "",
        },
      ],
    },
  });

  useEffect(() => {
    setErrorMessage("");
  }, [currentStep]);

  const steps =
    typePerson === "adulte"
      ? [
          {
            id: 1,
            title: "Compte",
            description: "Créez votre compte",
            icon: Mail,
          },
          {
            id: 2,
            title: "Profil",
            description: "Information Personnelle",
            icon: User,
          },
          {
            id: 3,
            title: "Règlement",
            description: "Règlement intérieur",
            icon: Newspaper,
          },
          // {
          //   id: 4,
          //   title: "Paiement",
          //   description: "Informations de paiement",
          //   icon: CreditCard,
          // },
        ]
      : [
          {
            id: 1,
            title: "Compte",
            description: "Informations Parent",
            icon: Mail,
          },
          {
            id: 2,
            title: "Profil",
            description: "Informations Enfant(s)",
            icon: User,
          },
          {
            id: 3,
            title: "Règlement",
            description: "Règlement intérieur",
            icon: Newspaper,
          },
          // {
          //   id: 4,
          //   title: "Paiement",
          //   description: "Informations de paiement",
          //   icon: CreditCard,
          // },
        ];

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  switch (currentStep) {
    case 1:
      currentStepContent = (
        <FormEmailPassword
          typePerson={typePerson}
          register={register}
          errors={errors}
        />
      );
      break;
    case 2:
      currentStepContent =
        typePerson === "adulte" ? (
          <FormPersonalInformationsAdulte
            register={register}
            errors={errors}
            trigger={trigger}
            control={control}
          />
        ) : (
          <FormPersonalInformationKid
            register={register}
            errors={errors}
            control={control}
          />
        );
      break;
    case 3:
      currentStepContent = (
        <FormRulesRegulations control={control} errors={errors} />
      );
      break;
    default:
      currentStepContent = (
        <FormEmailPassword register={register} errors={errors} />
      );
  }

  const onSubmit = async (data) => {
    try {
      if (currentStep < stepSchemas.length) {
        setCurrentStep((prev) => prev + 1);
      } else {
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
              typePerson,
            }),
          },
        );


        setShowCongratulations(true);
      }
    } catch (error) {
      console.log("Erreur lors de la création du user : ", error);
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("L'adresse email est invalide.");
          break;
        case "auth/too-many-requests":
          setErrorMessage("Trop de tentatives. Veuillez réessayer plus tard.");
          break;
        case "auth/user-disabled":
          setErrorMessage("Ce compte a été désactivé.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("L'email est déjà utilisé par un utilisateur");
          break;
        default:
          setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  console.log("registration");

  return (
    <div className="mt-[68px] flex flex-1 justify-center px-5 py-8 lg:mt-[78px]">
      <SuccessRegistrationPopup
        typePerson={typePerson}
        showCongratulations={showCongratulations}
        setShowCongratulations={setShowCongratulations}
        userEmail={userEmail}
      />

      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Inscription {typePerson === "adulte" ? "Ado/Adulte" : "Enfant"}
          </h1>

          <p>
            {typePerson === "adulte"
              ? "Complétez vos informations personnelles"
              : "Inscrivez-vous et ajoutez vos enfants"}
          </p>
        </div>

        {/* Step bar */}
        <StepBar steps={steps} />

        {/* Card */}
        <form className="mx-auto max-w-4xl" onSubmit={handleSubmit(onSubmit)}>
          <Card className="border-0 bg-white/80 pb-10 shadow-xl backdrop-blur-sm">
            <CardHeader className="pb-6 text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Informations du {steps[currentStep - 1].title.toLowerCase()}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>

            <CardContent
              className={`${screenSize === "mobile" ? "pb-14" : ""} `}
            >
              <p className="mb-6">
                Les champs marqués par un astérisque (
                <span className="text-red-500">*</span>) sont obligatoires.
              </p>
              <div className="space-y-4">{currentStepContent}</div>

              {errorMessage && (
                <p className="mt-6 flex items-center gap-2 font-bold text-red-500">
                  <CircleAlert className="h-5 w-5" />
                  {errorMessage}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Buttons Navigation */}
          <div
            className={`mt-6 flex items-center justify-between ${
              screenSize === "mobile"
                ? "fixed right-0 bottom-0 left-0 border-t bg-white p-4 shadow-lg"
                : ""
            }`}
          >
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 border-gray-300 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </Button>

            <Button
              type="submit"
              className="flex min-w-[100px] items-center gap-2 bg-[#b0181c] hover:bg-[#7d2a2d]"
            >
              {isLoading ? (
                <Loader2 className="!h-5 !w-5 animate-spin" />
              ) : (
                <>
                  {currentStep === stepSchemas.length ? "Valider" : "Suivant"}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPageClient;
