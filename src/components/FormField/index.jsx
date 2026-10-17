import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { EyeOff, Eye } from "lucide-react";

const FormField = ({
  label,
  id,
  type,
  placeholder,
  register,
  errors,
  showPassword = false, // for password fields
  onClick = () => {}, // for password fields
  mandatory = true, // for mandatory fields
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {mandatory && <span className="text-red-500">*</span>}
      </Label>

      <div className="relative">
        <Input
          {...register(id)}
          id={id}
          type={type}
          placeholder={placeholder}
          className={`${errors ? "border-red-500" : ""} mb-0 h-12`}
        />
        {(id === "password" || id === "confirmPassword") && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={onClick}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
      {errors && <p className="text-sm text-red-500">{errors.message}</p>}
    </div>
  );
};

export default FormField;
