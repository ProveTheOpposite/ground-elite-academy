import { useState } from "react";

import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import FormField from "@/components/FormField";
import SelectField from "@/components/SelectField";

import { ChevronDownIcon, Info } from "lucide-react";

const licences = [
  {
    label: "FFL",
    value: "ffl",
    subTitle: "Fédération Française de Lutte",
  },
  {
    label: "CFJJB",
    value: "cfjjb",
    subTitle: "Confédération Française de Jiu-Jitsu Brésilien",
  },
];

const FormPersonalInformationsAdult = ({
  register,
  errors,
  control,
  currentSubStep,
}) => {
  const [open, setOpen] = useState(false);
  const [showLicenceInfo, setShowLicenceInfo] = useState(false);

  console.log("subStep", currentSubStep);

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Substep 1 */}
      {currentSubStep === 1 && (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            <FormField
              register={register}
              errors={errors.firstName}
              name="firstName"
              label="Prénom"
              id="firstName"
              placeholder="Marcus"
              type="text"
            />
            <FormField
              register={register}
              errors={errors.lastName}
              name="lastName"
              label="Nom"
              id="lastName"
              placeholder="Lilo"
              type="text"
            />
          </div>

          <div className="space-y-3">
            <Label>
              Date de naissance<span className="text-red-500">*</span>
            </Label>

            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field, fieldState }) => (
                <Popover
                  open={open === 0}
                  onOpenChange={(open) => setOpen(open ? 0 : null)}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`mb-0 h-12 w-full justify-between bg-transparent font-normal md:text-sm ${field.value ? "text-black" : "text-muted-foreground"} ${
                        fieldState.error ? "border-red-500" : ""
                      }`}
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

                  {fieldState.error && (
                    <p className="mt-2 text-sm text-red-500">
                      {fieldState.error.message}
                    </p>
                  )}
                </Popover>
              )}
            />
          </div>

          <FormField
            register={register}
            errors={errors.placeOfBirth}
            name="placeOfBirth"
            label="Lieu de naissance"
            id="placeOfBirth"
            placeholder="Nice, France"
            type="text"
          />

          <FormField
            register={register}
            errors={errors.nationality}
            name="nationality"
            label="Nationalité"
            id="nationality"
            placeholder="Française"
            type="text"
          />
        </>
      )}

      {/* Substep 2 */}
      {currentSubStep === 2 && (
        <>
          <FormField
            errors={errors.address}
            id="address"
            label="Adresse"
            placeholder="123 rue de la Paix"
            type="text"
            register={register}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            <FormField
              errors={errors.postalCode}
              id="postalCode"
              label="Code postal"
              placeholder="75001"
              type="text"
              register={register}
            />

            <FormField
              errors={errors.city}
              id="city"
              label="Ville"
              placeholder="Paris"
              type="text"
              register={register}
            />
          </div>

          <FormField
            errors={errors.phoneNumber}
            id="phoneNumber"
            label="Numéro de téléphone (à vous)"
            placeholder="06 12 34 56 78"
            type="text"
            register={register}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            <FormField
              errors={errors.contactEmergency}
              id="contactEmergency"
              label="Contact d'urgence"
              placeholder="Jean Dupont"
              type="text"
              register={register}
            />

            <FormField
              errors={errors.phoneNumberEmergency}
              id="phoneNumberEmergency"
              label="Numéro de téléphone d'urgence"
              placeholder="06 12 34 56 78"
              type="text"
              register={register}
            />
          </div>
        </>
      )}

      {/* Substep 3 */}
      {currentSubStep === 3 && (
        <>
          <SelectField
            control={control}
            defaultValue=""
            label="Sexe"
            id="sexe"
            placeholder="Sélectionnez le sexe"
            options={[
              { value: "male", label: "Masculin" },
              { value: "female", label: "Féminin" },
            ]}
          />

          <SelectField
            control={control}
            defaultValue=""
            label="Catégorie"
            id="category"
            placeholder="Sélectionnez la catégorie"
            options={[
              { value: "loisir", label: "Loisir" },
              { value: "competitor", label: "Compétiteur" },
            ]}
          />

          <div className="flex flex-col gap-2">
            <Label>
              Licence(s) souhaitée(s){" "}
              <span
                onMouseEnter={() => setShowLicenceInfo(true)}
                onMouseLeave={() => setShowLicenceInfo(false)}
                className="relative cursor-pointer"
              >
                {showLicenceInfo && (
                  <Card className="absolute top-1/2 left-4.5 z-50 w-64 -translate-y-1/2 border-[1.5px] p-4">
                    <p className="text-justify text-sm font-normal">
                      La licence est l'adhésion officielle à une fédération
                      sportive. Elle est <strong>obligatoire</strong> pour
                      participer aux <strong>entraînements</strong>,{" "}
                      <strong>compétitions</strong> et{" "}
                      <strong>bénéficier de l'assurance</strong> en cas de
                      blessure.
                    </p>
                  </Card>
                )}
                <Info className="h-3.5 w-3.5" />
              </span>
              <span className="text-red-600">*</span>
            </Label>

            <div className="flex gap-6">
              {licences.map(({ value, label, subTitle }) => (
                <Label
                  key={value}
                  htmlFor={value}
                  className="hover:bg-accent/50 flex flex-1 cursor-pointer items-center gap-x-3 rounded-md border px-3 py-2"
                >
                  <Controller
                    name={`licences.${value}`}
                    control={control}
                    render={({ field, fieldState }) => (
                      <Checkbox
                        id={value}
                        checked={field.value || false}
                        onCheckedChange={field.onChange}
                        className={`border-gray-300 accent-[#b0181c] ${fieldState.error ? "border-red-500" : ""}`}
                      />
                    )}
                  />
                  <div>
                    <span className="text-sm leading-relaxed font-medium">
                      {label}
                    </span>{" "}
                    <br />
                    <span className="text-muted-foreground text-xs">
                      {subTitle}
                    </span>
                  </div>
                </Label>
              ))}
            </div>

            {errors.licences && (
              <p className="text-sm text-red-500">{errors.licences.message}</p>
            )}
          </div>

          <FormField
            errors={errors.noteMedical}
            id="noteMedical"
            label="Note médicale"
            placeholder="Blessures, traitements en cours, etc..."
            type="text"
            register={register}
            mandatory={false}
          />
        </>
      )}
    </div>
  );
};

export default FormPersonalInformationsAdult;
