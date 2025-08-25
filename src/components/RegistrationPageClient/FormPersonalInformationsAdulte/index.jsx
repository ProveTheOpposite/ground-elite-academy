import { useState } from "react";

import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ArrowLeft, ArrowRight, ChevronDownIcon, Info } from "lucide-react";

const FormPersonalInformationsAdulte = ({
  register,
  errors,
  trigger,
  control,
}) => {
  const [open, setOpen] = useState(false);
  const [subStep, setSubStep] = useState(0);
  const [showLicenceInfo, setShowLicenceInfo] = useState(false);

  console.log("subStep", subStep);

  // Champs associés à chaque sous-step
  const fieldsPerSubStep = [
    [
      "lastNameAdherent",
      "firstNameAdherent",
      "phoneNumber",
      "categoryAdherent",
      "dateOfBirthAdherent",
      "adressPostale",
    ],
    [
      "nationalityAdherent",
      "contactEmergency",
      "phoneNumberContactEmergency",
      "sexeAdherent",
      "licence.fflda",
      "licence.cfjjb",
      "profileImage",
    ],
  ];

  const handleNext = async () => {
    // Valider seulement les champs du sous-step courant
    const isValid = await trigger(fieldsPerSubStep[subStep], {
      shouldFocus: true,
    });
    if (isValid) {
      setSubStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setSubStep((prev) => prev - 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex w-full transition-transform duration-600 ease-in-out`}
        style={{ transform: `translateX(-${subStep * 100}%)` }}
      >
        <div className="w-full shrink-0 space-y-6 md:grid md:grid-cols-2 md:gap-x-4">
          <div className="space-y-2">
            <Label htmlFor="lastNameAdherent">
              Nom<span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("lastNameAdherent")}
              id="lastNameAdherent"
              type="text"
              placeholder="Entrez votre nom"
              className={errors.lastNameAdherent ? "border-red-500" : ""}
            />
            {errors.lastNameAdherent && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.lastNameAdherent.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstNameAdherent">
              Prénom<span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("firstNameAdherent")}
              id="firstNameAdherent"
              type="text"
              placeholder="Entrez votre prénom"
              className={errors.firstNameAdherent ? "border-red-500" : ""}
            />
            {errors.firstNameAdherent && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.firstNameAdherent.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">
              Numéro de téléphone<span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("phoneNumber")}
              id="phoneNumber"
              type="tel"
              placeholder="Entrez votre numéro de téléphone"
              className={errors.phoneNumber ? "border-red-500" : ""}
            />
            {errors.phoneNumber && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="categoryAdherent">
              Catégorie<span className="text-red-500">*</span>
            </Label>
            <Controller
              name="categoryAdherent"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    id="categoryAdherent"
                    className={`w-full text-base md:text-sm ${errors.categoryAdherent ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Selectionnez votre catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Catégorie</SelectLabel>
                      <SelectItem value="loisir">Loisir</SelectItem>
                      <SelectItem value="competiteur">Compétiteur</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.categoryAdherent && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.categoryAdherent.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirthAdherent">
              Date de naissance<span className="text-red-500">*</span>
            </Label>
            <Controller
              name="dateOfBirthAdherent"
              control={control}
              render={({ field }) => (
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="dateOfBirthAdherent"
                      className={`text-muted-foreground mb-0 w-full justify-between font-normal md:text-sm ${errors.dateOfBirthAdherent ? "border-red-500" : ""}`}
                    >
                      {field.value
                        ? field.value.toLocaleDateString()
                        : "Sélectionnez une date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        field.onChange(date);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.dateOfBirthAdherent && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.dateOfBirthAdherent.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="adressPostale">
              Adresse Postale<span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("adressPostale")}
              id="adressPostale"
              type="text"
              placeholder="Entrez votre adresse postale"
              className={errors.adressPostale ? "border-red-500" : ""}
            />
            {errors.adressPostale && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.adressPostale.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full shrink-0 space-y-6 md:grid md:grid-cols-2 md:gap-x-4">
          <div className="space-y-2">
            <Label htmlFor="nationalityAdherent">
              Nationalité<span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("nationalityAdherent")}
              id="nationalityAdherent"
              type="text"
              placeholder="Entrez votre nationalité"
              className={errors.nationalityAdherent ? "border-red-500" : ""}
            />
            {errors.nationalityAdherent && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.nationalityAdherent.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactEmergency">
              Personne à contacter en cas d'urgence
              <span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("contactEmergency")}
              id="contactEmergency"
              type="text"
              placeholder="Entrez le nom de la personne à contacter en cas d'urgence"
              className={errors.contactEmergency ? "border-red-500" : ""}
            />
            {errors.contactEmergency && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.contactEmergency.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumberContactEmergency">
              Numéro de la personne à contacter en cas d'urgence
              <span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("phoneNumberContactEmergency")}
              id="phoneNumberContactEmergency"
              type="tel"
              placeholder="Entrez le numéro de téléphone de la personne"
              className={
                errors.phoneNumberContactEmergency ? "border-red-500" : ""
              }
            />
            {errors.phoneNumberContactEmergency && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.phoneNumberContactEmergency.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              Sexe<span className="text-red-500">*</span>
            </Label>
            <Controller
              name="sexeAdherent"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger
                    className={`w-full ${errors.sexeAdherent ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Masculin">Masculin</SelectItem>
                    <SelectItem value="Féminin">Féminin</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.sexeAdherent && (
              <p className="mt-2 text-sm text-red-500">
                {errors.sexeAdherent.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="mb-3">
              Licence
              <span
                onMouseEnter={() => setShowLicenceInfo(true)}
                onMouseLeave={() => setShowLicenceInfo(false)}
                className="relative cursor-pointer"
              >
                {showLicenceInfo && (
                  <div className="absolute -top-16 left-4 z-50 w-64 rounded-md bg-white p-4 shadow-lg">
                    <p className="text-sm">
                      La licence est l'adhésion officielle à une fédération
                      sportive. Elle est obligatoire pour participer aux
                      entraînements, compétitions et bénéficier de l'assurance
                      en cas de blessure.
                    </p>
                  </div>
                )}
                <Info className="h-3.5 w-3.5" />
              </span>
              <span className="text-red-500">*</span>
            </Label>

            <div className="mb-2 flex items-center">
              <Controller
                name="licence.fflutte"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="fflutte"
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    className={errors.licence ? "border-red-500" : ""}
                  />
                )}
              />
              <Label htmlFor="fflutte" className="ml-2 font-normal">
                Fédération Française de Lutte & Disciplines Associées (fflutte)
              </Label>
            </div>

            <div className="flex items-center">
              <Controller
                name="licence.cfjjb"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="cfjjb"
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    className={errors.licence ? "border-red-500" : ""}
                  />
                )}
              />
              <Label htmlFor="cfjjb" className="ml-2 font-normal">
                Confédération Française de Jiu-Jitsu Brésilien (CFJJB)
              </Label>
            </div>

            {errors.licence && (
              <p className="mt-2 text-sm text-red-500">
                {errors.licence.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Photo de vous</Label>
            <Input
              {...register("profileImage")}
              id="profileImage"
              type="file"
              accept="image/*"
              className={errors.profileImage ? "border-red-500" : ""}
            />
            {errors.profileImage && (
              <p className="mt-2 text-sm text-red-500">
                {errors.profileImage.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="relative col-span-2 mt-10 h-6 w-full md:mt-4">
        {/* <button
          type="button"
          className={`group absolute -top-2 flex items-center gap-2 rounded-md bg-amber-600 px-2 py-1.5 text-sm text-white transition-all duration-500 hover:bg-amber-700 ${step ? "left-0" : "sm:left-[74%] md:left-[78%] lg:left-[80%]"}`}
          onClick={() =>
            trigger([
              "lastNameAdherent",
              "firstNameAdherent",
              "phoneNumber",
              "categoryAdherent",
              "dateOfBirthAdherent",
              "adressPostale",
              "nationalityAdherent",
            ])
          }
        >
          <ArrowLeft
            className={`h-4 w-4 transition-all group-hover:-translate-x-1 ${step ? "" : "hidden"}`}
          />
          {step ? "Retour" : "Suite du formulaire"}
          <ArrowRight
            className={`h-4 w-4 transition-all group-hover:translate-x-1 ${step ? "hidden" : ""}`}
          />
        </button> */}
        {subStep > 0 && (
          <Button
            type="button"
            onClick={handlePrev}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        )}

        {subStep < fieldsPerSubStep.length - 1 ? (
          <Button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700"
          >
            Suite du formulaire
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default FormPersonalInformationsAdulte;
