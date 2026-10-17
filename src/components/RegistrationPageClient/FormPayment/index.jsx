import { Controller } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Award, Ticket, FileText, CreditCard, Banknote } from "lucide-react";

import SelectField from "@/components/SelectField";

const FormPayment = ({ control, registrationType }) => {
  const paymentMethods = [
    { value: "espece", label: "Espèces", icon: Banknote },
    { value: "carte", label: "Carte bancaire", icon: CreditCard },
    { value: "cheque", label: "Chèque", icon: FileText },
    { value: "coupon-sport", label: "Coupon sport", icon: Ticket },
    { value: "pass-sport", label: "Pass'Sport", icon: Award },
  ];

  const subscriptionTypes = [
    {
      value: "monthly",
      label: "Mensuel",
      price: "50,00€/mois",
      isParent: registrationType === "parent" ? true : false,
    },
    {
      value: "fourFirstMonths",
      label: "4 premiers mois",
      price: `${registrationType === "parent" ? "100" : "150"},00€/sept-déc`,
    },
    {
      value: "quarterly",
      label: "Trimestriel",
      price: `${registrationType === "parent" ? "80" : "120"},00€/3 mois`,
    },
    {
      value: "annual",
      label: "Annuel",
      price: `${registrationType === "parent" ? "295" : "450"},00€/an`,
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="space-y-3">
        <Label>
          Mode de paiement <span className="text-red-500">*</span>
        </Label>
        <Controller
          control={control}
          name="paymentMethod"
          defaultValue="espece" // set default value to avoid warning "RadioGroup changing from uncontrolled to controlled"
          render={({ field, fieldState }) => (
            <RadioGroup
              className="space-y-2"
              value={field.value}
              onValueChange={field.onChange}
            >
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Label
                    key={method.value}
                    htmlFor={method.value}
                    className={`${
                      fieldState.error ? "border-red-500" : "border-border"
                    } hover:bg-muted/50 flex h-12 cursor-pointer items-center space-x-3 rounded-md border p-4 font-normal transition-colors`}
                  >
                    <RadioGroupItem
                      className="text-[#b0181c]"
                      value={method.value}
                      id={method.value}
                    />
                    <Icon className="text-muted-foreground h-5 w-5" />
                    {method.label}
                  </Label>
                );
              })}

              {fieldState.error && (
                <p className="text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </RadioGroup>
          )}
        />
      </div>

      <SelectField
        label="Type d'abonnement"
        id="subscriptionType"
        defaultValue="monthly"
        placeholder="Sélectionnez un abonnement"
        options={subscriptionTypes
          .filter((type) => !type.isParent)
          .map((type) => ({
            value: type.value,
            label: `${type.label} - ${type.price}`,
          }))}
        control={control}
      />

      <SelectField
        label="Avez-vous déjà payé votre abonnement ?"
        id="alreadyPaid"
        defaultValue="yes"
        placeholder="Sélectionnez une réponse"
        options={[
          { value: "yes", label: "Oui" },
          { value: "no", label: "Non" },
        ]}
        control={control}
      />
    </div>
  );
};

export default FormPayment;
