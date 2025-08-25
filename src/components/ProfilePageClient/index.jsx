"use client";

import useAuthState from "@/hooks/useAuthState";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import {
  CalendarDays,
  Camera,
  CheckCircle,
  Edit3,
  Key,
  Loader2,
  Save,
  Shield,
  Target,
  User,
  UserCheck,
  Users,
  X,
} from "lucide-react";

import { Alert, AlertDescription } from "../ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";

import { auth } from "@/server/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import { formatDate } from "@/utils/formatDate";

import toast, { ToastBar, Toaster } from "react-hot-toast";

import ProfileSkeleton from "./ProfileSkeleton";

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
  const [imageProfilePreview, setImageProfilePreview] = useState(null);
  const [isPasswordResetSuccess, setIsPasswordResetSuccess] = useState(false);

  const fileInputRef = useRef(null);

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
              revalidate: 172800,
            },
          },
        );
        const data = await res.json();
        setAdherentData(data);
      } catch (err) {
        console.error("Erreur récupération user:", err);
      } finally {
        setLoadingState("fetch", false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleResetPassword = async () => {
    try {
      setLoadingState("resetPassword", true);
      await sendPasswordResetEmail(auth, user.email);
      setIsPasswordResetSuccess(true);
    } catch (err) {
      console.error("Erreur lors de la réinitialisation du mot de passe:", err);
    } finally {
      setLoadingState("resetPassword", false);
    }
  };

  const handleEdit = () => {
    setEditedData(adherentData);
    setIsEditing(true);
  };

  const handleSaveData = async () => {
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
    }
  };

  const handleCancelEdit = () => {
    setEditedData(adherentData);
    setIsEditing(false);
    setImageProfilePreview(null);
  };

  // function generic to update user info
  const handleChangeUserInfo = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth.seconds * 1000);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleClickOpenInputFile = () => {
    fileInputRef.current.click();
  };

  // function to convert file to base64 for image profile while updating profile
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]); // enlève "data:image/png;base64,"
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const currentData = isEditing ? editedData : adherentData;

  return isLoading.fetch || loading ? (
    <ProfileSkeleton />
  ) : (
    <div className="mx-auto max-w-4xl space-y-6 px-4">
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

      {/* Header Profile */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-y-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    className="w-full"
                    src={imageProfilePreview || currentData?.profileImage}
                    alt="Photo de profil"
                  />
                  <AvatarFallback className="text-2xl">
                    {currentData?.role === "parent"
                      ? `${currentData?.firstNameParent?.[0]}${currentData?.lastNameParent?.[0]}`
                      : `${currentData?.firstName?.[0]}${currentData?.lastName?.[0]}`}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const base64 = await fileToBase64(file);
                        handleChangeUserInfo("profileImage", {
                          name: file.name,
                          type: file.type,
                          data: base64,
                        });
                        setImageProfilePreview(URL.createObjectURL(file));
                      }
                    }}
                  />

                  {isEditing && currentData?.role === "adulte/ado" && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full p-0"
                      onClick={handleClickOpenInputFile}
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
              <div>
                <CardTitle className="text-2xl">
                  {currentData?.role === "parent"
                    ? `${currentData?.firstNameParent} ${currentData?.lastNameParent}`
                    : `${currentData?.firstName} ${currentData?.lastName}`}
                </CardTitle>
                <CardDescription className="mt-1 flex items-center gap-2">
                  <Badge
                    variant={
                      currentData?.role === "parent" ? "secondary" : "default"
                    }
                  >
                    {currentData?.role === "parent" ? "Parent" : "Adhérent"}
                  </Badge>
                  {currentData?.category && (
                    <Badge variant="outline">
                      {currentData?.category === "competiteur"
                        ? "Compétiteur"
                        : "Loisir"}
                    </Badge>
                  )}
                  {currentData.role === "adulte/ado" &&
                    currentData?.licence &&
                    Object.entries(currentData?.licence)
                      .map((key) =>
                        key[1] ? (
                          <Badge key={key} variant="outline">
                            {key[0].toUpperCase()}
                          </Badge>
                        ) : null,
                      )
                      .filter(Boolean)}
                </CardDescription>
                <p className="text-muted-foreground mt-2 text-sm">
                  Membre depuis le {formatDate(currentData?.createdAt)}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {!isEditing ? (
                <Button onClick={handleEdit} variant="outline" size="sm">
                  <Edit3 className="mr-2 h-4 w-4" />
                  Modifier
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handleSaveData}
                    size="sm"
                    className="min-w-[140px]"
                  >
                    {isLoading.save ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Sauvegarder
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                    size="sm"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Annuler
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Card Informations personnelles */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-lg">
              <User className="h-5 w-5 text-red-600" />
              <CardTitle>Mes informations</CardTitle>
            </div>
          </div>
          <CardDescription>
            Vos informations personnelles de contact
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Alert className="border-blue-200 bg-blue-50">
            <AlertDescription className="text-blue-800">
              <strong className="mb-1 text-base">
                Besoin de modifier des informations protégées ?
              </strong>
              <div>
                Certains champs ne peuvent pas être modifiés directement. Si
                vous devez les mettre à jour, veuillez nous contacter via notre{" "}
                <Link
                  href="/contact-us"
                  className="underline hover:text-blue-900"
                >
                  page de contact
                </Link>
                .
              </div>
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="lastNameParent">Nom</Label>
              <Input
                id="lastNameParent"
                value={currentData?.lastNameParent || currentData?.lastName}
                onChange={(e) =>
                  handleChangeUserInfo("lastNameParent", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstNameParent">Prénom</Label>
              <Input
                id="firstNameParent"
                value={currentData?.firstNameParent || currentData?.firstName}
                onChange={(e) =>
                  handleChangeUserInfo("firstNameParent", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className={`space-y-2 ${currentData?.role === "parent" ? "md:col-span-2" : ""}`}
            >
              <Label htmlFor="adressPostale">Adresse postale</Label>
              <Input
                id="adressPostale"
                value={currentData?.adressPostale}
                onChange={(e) =>
                  handleChangeUserInfo("adressPostale", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>

            {currentData?.role === "adulte/ado" && (
              <div className="space-y-2">
                <Label htmlFor="sexe">Sexe</Label>

                <Select value={currentData?.sexe} disabled>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Masculin">Masculin</SelectItem>
                    <SelectItem value="Féminin">Féminin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {currentData?.role === "adulte/ado" && (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nationalityAdherent">Nationalité</Label>
                  <Input
                    id="nationalityAdherent"
                    value={currentData?.nationalityAdherent}
                    onChange={(e) =>
                      handleChangeUserInfo(
                        "nationalityAdherent",
                        e.target.value,
                      )
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date de naissance</Label>
                  <Input
                    id="dateOfBirth"
                    value={formatDate(currentData?.dateOfBirth)}
                    onChange={(e) =>
                      handleChangeUserInfo("dateOfBirth", e.target.value)
                    }
                    disabled
                  />
                </div>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Numéro de téléphone</Label>
              <Input
                id="phoneNumber"
                value={currentData?.phoneNumber}
                onChange={(e) =>
                  handleChangeUserInfo("phoneNumber", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={currentData?.email}
                disabled
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reset password */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Key className="mr-2 h-5 w-5 text-red-600" />
            Sécurité du compte
          </CardTitle>
          <CardDescription>Gérez la sécurité de votre compte</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-y-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h4 className="font-medium">Réinitialiser le mot de passe</h4>
                <p className="text-muted-foreground text-sm">
                  Changez votre mot de passe pour sécuriser votre compte
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full bg-transparent md:w-[118px]"
              onClick={handleResetPassword}
              disabled={isLoading.resetPassword}
            >
              {isLoading.resetPassword ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi...
                </>
              ) : (
                "Réinitialiser"
              )}
            </Button>
          </div>

          {isPasswordResetSuccess && (
            <div className="mt-3 flex items-center rounded-md bg-green-100 p-3 text-sm text-green-700">
              <CheckCircle className="mr-2 h-5 w-5" />
              Un email de réinitialisation a été envoyé à votre adresse email.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Parent = Children | Adulte/Ado = contact urgent et information pratique */}
      {currentData?.role === "parent" && currentData?.children ? (
        <Card>
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
                <div key={index} className="bg-card rounded-lg border p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="text-sm">
                          {child?.firstNameChild[0]}
                          {child?.lastNameChild[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-base font-medium">
                          {child?.firstNameChild} {child?.lastNameChild}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {calculateAge(child?.dateOfBirthChild)} ans
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {child?.categoryChild === "competiteur"
                        ? "Compétiteur"
                        : "Loisir"}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="text-muted-foreground h-4 w-4" />
                      <span>
                        Né(e) le {formatDate(child?.dateOfBirthChild)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 items-center justify-center">
                        <div
                          className={`h-2 w-2 rounded-full ${child?.sexeChild === "M" ? "bg-blue-500" : "bg-pink-500"}`}
                        />
                      </div>
                      <span>
                        {child?.sexeChild === "M" ? "Masculin" : "Féminin"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-gray-400" />
                      </div>
                      <span>Nationalité: {child?.nationalityChild}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-gray-400" />
                      </div>
                      <span>
                        Licence:{" "}
                        {currentData?.licence &&
                          Object.entries(currentData?.licence)
                            .map((key) =>
                              key[1] ? key[0].toUpperCase() : null,
                            )
                            .filter(Boolean)
                            .join(" et ")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-4 md:flex-row">
          <Card className="flex-1 gap-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-red-600" />
                Contact d'urgence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmergency">Personne à contacter</Label>
                  <Input
                    id="contactEmergency"
                    value={currentData?.contactEmergency}
                    onChange={(e) =>
                      handleChangeUserInfo("contactEmergency", e.target.value)
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumberContactEmergency">
                    Numéro de téléphone
                  </Label>
                  <Input
                    id="phoneNumberContactEmergency"
                    value={currentData?.phoneNumberContactEmergency}
                    onChange={(e) =>
                      handleChangeUserInfo(
                        "phoneNumberContactEmergency",
                        e.target.value,
                      )
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 gap-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-red-600" />
                Informations de pratique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Label>Objectif de pratique</Label>
                <RadioGroup
                  value={currentData?.category}
                  onValueChange={(value) =>
                    handleChangeUserInfo("category", value)
                  }
                  disabled={!isEditing}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="competiteur" id="competiteur" />
                    <Label htmlFor="competiteur">Compétiteur</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="loisir" id="loisir" />
                    <Label htmlFor="loisir">Loisir</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Licence</Label>

                <div className="flex items-center gap-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={currentData?.licence?.fflutte}
                      disabled
                      id="fflutte"
                    />
                    <Label htmlFor="fflutte">FFLutte</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={currentData?.licence?.cfjjb}
                      disabled
                      id="cfjjb"
                    />
                    <Label htmlFor="cfjjb">CFJJB</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Consentements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <UserCheck className="h-5 w-5 text-red-600" />
            Consentements
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Label
                  htmlFor="nonRespectRulesRegulations"
                  className="text-base"
                >
                  Conséquences du non-respect
                </Label>
                <p className="text-muted-foreground mt-1 text-sm">
                  J'accepte les conséquences en cas de non-respect du règlement
                  intérieur du club, ainsi qu'en cas d'urgence.
                </p>
              </div>
              {isEditing ? (
                <Switch
                  id="nonRespectRulesRegulations"
                  checked={currentData?.nonRespectRulesRegulations}
                  onCheckedChange={(checked) =>
                    setEditedData({
                      ...editedData,
                      nonRespectRulesRegulations: checked,
                    })
                  }
                />
              ) : (
                <Badge
                  variant={
                    currentData?.nonRespectRulesRegulations
                      ? "default"
                      : "destructive"
                  }
                >
                  {currentData?.nonRespectRulesRegulations
                    ? "Accepté"
                    : "Non accepté"}
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <Label htmlFor="medical" className="text-base">
                  Médicale / Chirurgicale
                </Label>
                <p className="text-muted-foreground mt-1 text-sm">
                  J'accepte le médical / chirurgicale en cas de nécessité.
                </p>
              </div>
              {isEditing ? (
                <Switch
                  id="medical"
                  checked={currentData?.medical}
                  onCheckedChange={(checked) =>
                    setEditedData({ ...editedData, medical: checked })
                  }
                />
              ) : (
                <Badge
                  variant={currentData?.medical ? "default" : "destructive"}
                >
                  {currentData?.medical ? "Accepté" : "Non accepté"}
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <Label htmlFor="sharePhotosHimself" className="text-base">
                  Partage de photos
                </Label>
                <p className="text-muted-foreground mt-1 text-sm">
                  J'autorise le partage de photos me concernant auprès de mes
                  partenaires, des compétitions, et des éventuels supports
                  internet utilisés par le club.
                </p>
              </div>
              {isEditing ? (
                <Switch
                  id="sharePhotosHimself"
                  checked={currentData?.sharePhotosHimself}
                  onCheckedChange={(checked) =>
                    setEditedData({
                      ...editedData,
                      sharePhotosHimself: checked,
                    })
                  }
                />
              ) : (
                <Badge
                  variant={
                    currentData?.sharePhotosHimself ? "default" : "secondary"
                  }
                >
                  {currentData?.sharePhotosHimself
                    ? "Autorisé"
                    : "Non autorisé"}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePageClient;
