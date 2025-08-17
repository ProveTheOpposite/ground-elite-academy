import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff } from "lucide-react";

const FormEmailPassword = ({ typePerson, register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className={`gap-4 space-y-5 ${typePerson === "parent" ? "md:grid md:grid-cols-2" : ""}`}
    >
      {typePerson === "parent" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="lastNameParent">
              Nom parent<span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("lastNameParent")}
              id="lastNameParent"
              type="text"
              placeholder="Entrez votre nom"
              className={errors.lastNameParent ? "border-red-500" : ""}
            />
            {errors.lastNameParent && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.lastNameParent.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstNameParent">
              Prénom parent<span className="text-red-500">*</span>
            </Label>
            <Input
              {...register("firstNameParent")}
              id="firstNameParent"
              type="text"
              placeholder="Entrez votre prénom"
              className={errors.firstNameParent ? "border-red-500" : ""}
            />
            {errors.firstNameParent && (
              <p className="mt-2 pl-2 text-sm text-red-500">
                {errors.firstNameParent.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">
              Numéro de téléphone parent<span className="text-red-500">*</span>
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
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">
          Email<span className="text-red-500">*</span>
        </Label>
        <Input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Entrez votre email"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="mt-2 pl-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">
          Mot de passe<span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            {...register("password")}
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Créez un mot de passe"
            className={errors.password ? "border-red-500" : ""}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
        {errors.password && (
          <p className="mt-2 pl-2 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">
          Confirmer le mot de passe<span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirmer le mot de passe"
            className={errors.confirmPassword ? "border-red-500" : ""}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
        {errors.confirmPassword && (
          <p className="mt-2 pl-2 text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormEmailPassword;
