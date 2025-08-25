import { useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDownIcon, Info, Plus, Trash2 } from "lucide-react";

const FormPersonalInformationKid = ({ register, errors, control }) => {
  // for calendars
  const [openIndex, setOpenIndex] = useState(null);
  const [showLicenceInfo, setShowLicenceInfo] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "children",
  });

  return (
    <div className="space-y-6">
      {fields.map((child, index) => (
        <Card key={child.id} className="border-border border-2 border-dashed">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Enfant {index + 1}</CardTitle>
              {fields.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardHeader>

          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Prénom */}
            <div className="space-y-2">
              <Label htmlFor={`children.${index}.firstNameChild`}>
                Prénom<span className="text-red-500">*</span>
              </Label>
              <Input
                {...register(`children.${index}.firstNameChild`)}
                id={`children.${index}.firstNameChild`}
                placeholder="Prénom de l'enfant"
                className={
                  errors.children?.[index]?.firstNameChild
                    ? "border-red-500"
                    : ""
                }
              />
              {errors.children?.[index]?.firstNameChild && (
                <p className="mt-2 pl-2 text-sm text-red-500">
                  {errors.children[index].firstNameChild.message}
                </p>
              )}
            </div>

            {/* Nom */}
            <div className="space-y-2">
              <Label htmlFor={`children.${index}.lastNameChild`}>
                Nom<span className="text-red-500">*</span>
              </Label>
              <Input
                {...register(`children.${index}.lastNameChild`)}
                id={`children.${index}.lastNameChild`}
                placeholder="Nom de l'enfant"
                className={
                  errors.children?.[index]?.lastNameChild
                    ? "border-red-500"
                    : ""
                }
              />
              {errors.children?.[index]?.lastNameChild && (
                <p className="mt-2 pl-2 text-sm text-red-500">
                  {errors.children[index].lastNameChild.message}
                </p>
              )}
            </div>

            {/* Date de naissance */}
            <div className="space-y-2">
              <Label>
                Date de naissance<span className="text-red-500">*</span>
              </Label>
              <Controller
                name={`children.${index}.dateOfBirthChild`}
                control={control}
                render={({ field }) => (
                  <Popover
                    open={openIndex === index}
                    onOpenChange={(open) => setOpenIndex(open ? index : null)}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`text-muted-foreground mb-0 w-full justify-between font-normal md:text-sm ${
                          errors.children?.[index]?.dateOfBirthChild
                            ? "border-red-500"
                            : ""
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
                  </Popover>
                )}
              />
              {errors.children?.[index]?.dateOfBirthChild && (
                <p className="mt-2 pl-2 text-sm text-red-500">
                  {errors.children[index].dateOfBirthChild.message}
                </p>
              )}
            </div>

            {/* Catégorie */}
            <div className="space-y-2">
              <Label htmlFor={`children.${index}.categoryChild`}>
                Catégorie<span className="text-red-500">*</span>
              </Label>
              <Controller
                name={`children.${index}.categoryChild`}
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id={`children.${index}.categoryChild`}
                      className={`w-full text-base md:text-sm ${
                        errors.children?.[index]?.categoryChild
                          ? "border-red-500"
                          : ""
                      }`}
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
              {errors.children?.[index]?.categoryChild && (
                <p className="mt-2 pl-2 text-sm text-red-500">
                  {errors.children[index].categoryChild.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="nationalityChild">
                Nationalité<span className="text-red-500">*</span>
              </Label>
              <Input
                {...register(`children.${index}.nationalityChild`)}
                id="nationalityChild"
                type="text"
                placeholder="Entrez votre nationalité"
                className={
                  errors.children?.[index]?.nationalityChild
                    ? "border-red-500"
                    : ""
                }
              />
              {errors.children?.[index]?.nationalityChild && (
                <p className="mt-2 pl-2 text-sm text-red-500">
                  {errors.children[index].nationalityChild.message}
                </p>
              )}
            </div>

            {/* Sexe */}
            <div className="space-y-2">
              <Label>
                Sexe<span className="text-red-500">*</span>
              </Label>
              <Controller
                name={`children.${index}.sexeChild`}
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    className="flex items-end pt-2.5"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="Masculin"
                        id={`children.${index}.masc`}
                        className={
                          errors.children?.[index]?.sexeChild
                            ? "border-red-500"
                            : ""
                        }
                      />
                      <Label htmlFor={`children.${index}.masc`}>Masculin</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="Feminin"
                        id={`children.${index}.fem`}
                        className={
                          errors.children?.[index]?.sexeChild
                            ? "border-red-500"
                            : ""
                        }
                      />
                      <Label htmlFor={`children.${index}.fem`}>Feminin</Label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.children?.[index]?.sexeChild && (
                <p className="mt-4 text-sm text-red-500">
                  {errors.children[index].sexeChild.message}
                </p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label className="mb-3">
                Licence
                <span
                  onMouseEnter={() => setShowLicenceInfo(true)}
                  onMouseLeave={() => setShowLicenceInfo(false)}
                  className="relative cursor-pointer"
                >
                  {showLicenceInfo && (
                    <div className="absolute -right-32 bottom-[150%] z-10 w-64 rounded-md bg-white p-4 shadow-lg">
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

              <div className="flex gap-2">
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
                    Fédération Française de Lutte & Disciplines Associées
                    (FFLutte)
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
              </div>

              {errors.licence && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.licence.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Bouton ajouter un enfant */}
      <Button
        type="button"
        variant="outline"
        onClick={() =>
          append({
            firstNameChild: "",
            lastNameChild: "",
            dateOfBirthChild: null,
            sexeChild: "",
            categoryChild: "",
          })
        }
        className="w-full border-2 border-dashed bg-transparent py-5 hover:border-[#b0181c] hover:bg-[#b0181c]/5"
      >
        <Plus className="mr-2 h-4 w-4" />
        Ajouter un autre enfant
      </Button>
    </div>
  );
};

export default FormPersonalInformationKid;
