"use client";

import { useRouter } from "next/navigation";
import useAuthState from "@/hooks/useAuthState";
import { useEffect, useState } from "react";

import { Users, X } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { auth } from "@/server/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import toast, { ToastBar, Toaster } from "react-hot-toast";

import ProfileSkeleton from "./components/ProfileSkeleton";
import HeaderProfile from "./components/HeaderProfile";
import MyInformations from "./components/MyInformations";
import ResetPassword from "./components/ResetPassword";
import Consents from "./components/Consents";
import ChildInformations from "./components/ChildInformations";
import EmergencyContact from "./components/EmergencyContact";
import InformationsPractice from "./components/InformationsPractice";
import SubscriptionPayment from "./components/SubscriptionPayment";
import MedicalNote from "./components/MedicalNote";

import { sanitizeUserData } from "@/utils/sanitizeUserData";

const ProfilePageClient = () => {
  const { user, loading } = useAuthState();

  const [adherentData, setAdherentData] = useState({});
  const [editedData, setEditedData] = useState(adherentData);
  const [isLoading, setIsLoading] = useState({
    fetch: false,
    save: false,
    resetPassword: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordResetSuccess, setIsPasswordResetSuccess] = useState(false);

  const router = useRouter();

  // Helper function to update loading state
  const setLoadingState = (key, value) =>
    setIsLoading((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    if (!user?.uid) return;

    const fetchUserData = async () => {
      try {
        setLoadingState("fetch", true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${user.uid}`,
          {
            next: {
              revalidate: 10,
            },
          },
        );
        const data = await res.json();
        setAdherentData(data);
      } catch (err) {
        console.error(
          "Erreur lors de la récupération des données utilisateur:",
          err,
        );
      } finally {
        setLoadingState("fetch", false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleClickResetPassword = async () => {
    try {
      setLoadingState("resetPassword", true);
      await sendPasswordResetEmail(auth, user.email);
      setIsPasswordResetSuccess(true);
      router.push("/login");
    } catch (err) {
      console.error("Erreur lors de la réinitialisation du mot de passe:", err);
    } finally {
      setLoadingState("resetPassword", false);
    }
  };

  const handleClickSetEditMode = () => {
    setEditedData(adherentData);
    setIsEditing(true);
  };

  const handleClickSaveDataFromEditMode = async () => {
    const { id, createdAt, ...safeData } = editedData;

    try {
      setLoadingState("save", true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${user.uid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(safeData),
        },
      );

      if (!res.ok)
        throw new Error(
          `Erreur lors de la sauvegarde du user ${adherentData.id}`,
        );

      const updatedUser = await res.json();
      setAdherentData(updatedUser);
      setIsEditing(false);
      toast.success("Profil modifié avec succès");
    } catch (err) {
      console.error("Erreur sauvegarde user:", err);
      toast.error("Erreur lors de la sauvegarde. Réessayez");
    } finally {
      setLoadingState("save", false);
      setIsEditing(false);
    }
  };

  // function to cancel the edition mode
  const handleClickCancelEdit = () => {
    setEditedData(adherentData);
    setIsEditing(false);
  };

  // function generic on change to update user info
  const handleChangeUserInfo = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const currentData = isEditing
    ? sanitizeUserData(editedData, ["id"])
    : sanitizeUserData(adherentData, ["id"]);

  console.log(currentData);

  return isLoading.fetch || loading ? (
    <ProfileSkeleton />
  ) : (
    <div className="mx-auto max-w-4xl px-4 2xl:max-w-7xl">
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

      <div
        className={`grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3 ${currentData?.role === "adult" ? "2xl:grid-rows-[auto_auto_1fr_auto_auto]" : "2xl:grid-rows-[auto_auto_1fr_auto_auto]"}`}
      >
        {/* Header Profile */}
        <HeaderProfile
          currentData={currentData}
          isEditing={isEditing}
          isLoading={loading}
          onCancelEdit={handleClickCancelEdit}
          onSetEditMode={handleClickSetEditMode}
          onSaveData={handleClickSaveDataFromEditMode}
        />

        {/* Card Informations personnelles */}
        <MyInformations
          currentData={currentData}
          isEditing={isEditing}
          onChangeUserInfo={handleChangeUserInfo}
        />

        {/* Card Abonnement et paiement */}
        <SubscriptionPayment
          currentData={currentData}
          isEditing={isEditing}
          onChangeUserInfo={handleChangeUserInfo}
        />

        {/* Reset password */}
        <ResetPassword
          onClickResetPassword={handleClickResetPassword}
          isPasswordResetSuccess={isPasswordResetSuccess}
          isLoading={isLoading}
          isAdult={currentData?.role === "adult"}
        />

        {/* Card Note médicale */}
        {currentData?.role !== "parent" && (
          <MedicalNote
            currentData={currentData}
            isEditing={isEditing}
            onChangeUserInfo={handleChangeUserInfo}
          />
        )}

        {/* Parent = Child(ren) | Adulte/Ado = contact urgent et information pratique */}
        {currentData?.role === "parent" && currentData?.children ? (
          <Card className="md:col-span-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-red-600" />
                Enfants inscrits ({currentData?.children.length})
              </CardTitle>
              <CardDescription>
                Informations des enfants inscrits au club
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {currentData?.children.map((child, index) => (
                  <ChildInformations
                    key={index}
                    child={child}
                    onChangeUserInfo={handleChangeUserInfo}
                    isEditing={isEditing}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:col-span-full md:grid-cols-2 2xl:col-span-3">
            <EmergencyContact
              currentData={currentData}
              isEditing={isEditing}
              onChangeUserInfo={handleChangeUserInfo}
            />

            <InformationsPractice
              currentData={currentData}
              isEditing={isEditing}
              onChangeUserInfo={handleChangeUserInfo}
            />
          </div>
        )}

        {/* Consentements */}
        <Consents
          currentData={currentData}
          isEditing={isEditing}
          onChangeUserInfo={handleChangeUserInfo}
        />
      </div>
    </div>
  );
};

export default ProfilePageClient;
