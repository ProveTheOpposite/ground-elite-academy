import { useState } from "react";

import FormField from "@/components/FormField";

const FormEmailPassword = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col gap-8 md:gap-x-4 md:gap-y-8">
      <FormField
        label="Email"
        id="email"
        type="email"
        placeholder="Entrez votre email"
        register={register}
        errors={errors.email}
      />

      <FormField
        label="Mot de passe"
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="Créez un mot de passe"
        register={register}
        errors={errors.password}
        showPassword={showPassword}
        onClick={() => setShowPassword(!showPassword)}
      />

      <FormField
        label="Confirmer le mot de passe"
        id="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirmer le mot de passe"
        register={register}
        errors={errors.confirmPassword}
        showPassword={showConfirmPassword}
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      />
    </div>
  );
};

export default FormEmailPassword;
