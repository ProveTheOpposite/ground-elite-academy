import { useState } from "react";

import { Controller } from "react-hook-form";

import FormField from "@/components/FormField";
import SelectField from "@/components/SelectField";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ChevronDownIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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

const ChildForm = ({ control, register, errors, index }) => {
  // to open calendar
  const [openIndex, setOpenIndex] = useState(null);
  const [showLicenceInfo, setShowLicenceInfo] = useState(false);

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormField
          register={register}
          errors={errors.children?.[index]?.firstNameChild}
          id={`children.${index}.firstNameChild`}
          label="Prénom"
          placeholder="Alexis"
          type="text"
        />

        <FormField
          register={register}
          errors={errors.children?.[index]?.lastNameChild}
          id={`children.${index}.lastNameChild`}
          label="Nom"
          placeholder="Pascal"
          type="text"
        />
      </div>

      <div className="space-y-3">
        <Label>
          Date de naissance<span className="text-red-500">*</span>
        </Label>

        <Controller
          name={`children.${index}.dateOfBirthChild`}
          control={control}
          render={({ field, fieldState }) => (
            <Popover
              open={openIndex === index}
              onOpenChange={(open) => setOpenIndex(open ? index : null)}
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
                    setOpenIndex(null);
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
        errors={errors.children?.[index]?.placeOfBirthChild}
        id={`children.${index}.placeOfBirthChild`}
        placeholder="Paris, France"
        type="text"
        label="Lieu de naissance"
      />

      <FormField
        register={register}
        errors={errors.children?.[index]?.nationalityChild}
        id={`children.${index}.nationalityChild`}
        placeholder="Française"
        type="text"
        label="Nationalité"
      />

      <SelectField
        control={control}
        defaultValue=""
        label="Sexe"
        id={`children.${index}.sexeChild`}
        placeholder="Sélectionnez le sexe"
        options={[
          { value: "male", label: "Masculin" },
          { value: "female", label: "Féminin" },
        ]}
      />

      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> */}
      <SelectField
        control={control}
        defaultValue=""
        label="Catégorie"
        id={`children.${index}.categoryChild`}
        placeholder="Sélectionnez la catégorie"
        options={[
          { value: "loisir", label: "Loisir" },
          { value: "competitor", label: "Compétiteur" },
        ]}
      />

      {/* <SelectField
          control={control}
          defaultValue=""
          label="Licence"
          id={`children.${index}.licenceChild`}
          placeholder="Sélectionnez la licence"
          options={[
            { value: "ffl", label: "FFL" },
            { value: "cfjjb", label: "CFJJB" },
          ]}
        /> */}
      {/* </div> */}
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
                  <strong>bénéficier de l'assurance</strong> en cas de blessure.
                </p>
              </Card>
            )}
            <Info className="h-3.5 w-3.5" />
          </span>
          <span className="text-red-600">*</span>
        </Label>

        <div className="space-y-4 md:flex md:gap-3 md:space-y-0">
          {licences.map(({ value, label, subTitle }) => (
            <Label
              key={value}
              htmlFor={value}
              className="hover:bg-accent/50 flex flex-1 cursor-pointer items-center gap-x-3 rounded-md border px-3 py-2"
            >
              <Controller
                name={`children.${index}.licencesChild.${value}`}
                control={control}
                render={({ field, fieldState }) => {
                  console.log("Fieldstate", fieldState);

                  return (
                    <Checkbox
                      id={value}
                      checked={field.value || false}
                      onCheckedChange={field.onChange}
                      className={`border-gray-300 accent-[#b0181c] ${fieldState.error ? "border-red-500" : ""}`}
                    />
                  );
                }}
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

        {errors.children?.[index]?.licencesChild && (
          <p className="text-sm text-red-500">
            {errors.children[index].licencesChild.message}
          </p>
        )}
      </div>

      <FormField
        register={register}
        errors={errors.children?.[index]?.noteMedicalChild}
        id={`children.${index}.noteMedicalChild`}
        placeholder="Blessures, traitements en cours, etc..."
        type="text"
        label="Informations médicales particulières"
        mandatory={false}
      />
    </div>
  );
};

export default ChildForm;
