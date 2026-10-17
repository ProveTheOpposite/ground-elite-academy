import { useFieldArray } from "react-hook-form";

import { Button } from "@/components/ui/button";

import ChildForm from "./ChildForm";
import FormField from "@/components/FormField";

import { Plus, Trash2 } from "lucide-react";

const FormPersonalInformationParent = ({ register, errors, control }) => {
  const { fields, append, remove } = useFieldArray({
    name: "children",
    control,
  });

  return (
    <>
      {/* Parent Infos */}
      <div className="border-border bg-muted/30 mb-6 rounded-lg border p-6">
        <h4 className="mb-5 text-lg font-semibold">Informations du parent</h4>

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              register={register}
              errors={errors.firstName}
              label="Prénom"
              id="firstName"
              type="text"
              placeholder="Marie"
            />

            <FormField
              register={register}
              errors={errors.lastName}
              label="Nom"
              id="lastName"
              type="text"
              placeholder="Pascal"
            />
          </div>

          <FormField
            register={register}
            errors={errors.phoneNumber}
            label="Numéro de téléphone"
            id="phoneNumber"
            type="text"
            placeholder="06 12 34 56 78"
          />

          <FormField
            register={register}
            errors={errors.address}
            label="Adresse"
            id="address"
            type="text"
            placeholder="123 Rue de la Paix"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              register={register}
              errors={errors.postalCode}
              label="Code postal"
              id="postalCode"
              type="text"
              placeholder="75001"
            />

            <FormField
              register={register}
              errors={errors.city}
              label="Ville"
              id="city"
              type="text"
              placeholder="Paris"
            />
          </div>
        </div>
      </div>

      {/* Child/Children Infos */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">Enfants à inscrire</h4>
          <Button
            type="button"
            onClick={() => {
              append({
                firstNameChild: "",
                lastNameChild: "",
                dateOfBirthChild: null,
                placeOfBirthChild: "",
                nationalityChild: "",
                sexeChild: "",
                categoryChild: "",
                licenceChild: "",
                noteMedicalChild: "",
              });
            }}
            variant="outline"
            size="lg"
            className="bg-transparent"
          >
            <Plus className="h-4 w-4" />
            Ajouter un enfant
          </Button>
        </div>

        {fields.map((_, i) => (
          <div
            key={i}
            className="border-border bg-muted/30 relative space-y-6 rounded-lg border p-6"
          >
            <div className="flex items-center justify-between">
              <h5 className="font-semibold">Enfant {i + 1}</h5>
              {fields.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(i)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>

            <ChildForm
              control={control}
              register={register}
              errors={errors}
              index={i}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FormPersonalInformationParent;
