import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Controller } from "react-hook-form";

const FormPersonalInformationsAdulte = ({ register, errors, control }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex w-full gap-x-1 transition-transform duration-600 ease-in-out`}
        style={{ transform: `translateX(-${(step ? 1 : 0) * 100}%)` }}
      >
        <div className="w-full shrink-0 gap-4 space-y-5 md:grid md:grid-cols-2">
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
            <Label htmlFor="adressPostaleAdherent">
              Adresse Postale<span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("adressPostaleAdherent")}
              id="adressPostaleAdherent"
              type="text"
              placeholder="Entrez votre adresse postale"
              className={errors.adressPostaleAdherent ? "border-red-500" : ""}
            />
            {errors.adressPostaleAdherent && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.adressPostaleAdherent.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full shrink-0 gap-4 space-y-5 md:grid md:grid-cols-2">
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
            <Label>Image de profil</Label>
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

          <div className="space-y-2">
            <Label>
              Sexe<span className="text-red-500">*</span>
            </Label>
            <Controller
              name="sexeAdherent"
              control={control}
              render={({ field }) => (
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="Masculin"
                      id="masc"
                      className={errors.sexeAdherent ? "border-red-500" : ""}
                    />
                    <Label htmlFor="masc">Masculin</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="Feminin"
                      id="fem"
                      className={errors.sexeAdherent ? "border-red-500" : ""}
                    />
                    <Label htmlFor="fem">Feminin</Label>
                  </div>
                </RadioGroup>
              )}
            />
            {errors.sexeAdherent && (
              <p className="mt-2 text-sm text-red-500">
                {errors.sexeAdherent.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="relative col-span-2 mt-10 h-6 w-full md:mt-4">
        <button
          type="button"
          className={`group absolute -top-2 flex items-center gap-2 rounded-md bg-amber-600 px-2 py-1.5 text-sm text-white transition-all duration-500 hover:bg-amber-700 ${step ? "left-2" : "sm:left-[74%] md:left-[78%] lg:left-[80%]"}`}
          onClick={() => setStep((prev) => !prev)}
        >
          <ArrowLeft
            className={`h-4 w-4 transition-all group-hover:-translate-x-1 ${step ? "" : "hidden"}`}
          />
          {step ? "Retour" : "Suite du formulaire"}
          <ArrowRight
            className={`h-4 w-4 transition-all group-hover:translate-x-1 ${step ? "hidden" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default FormPersonalInformationsAdulte;
