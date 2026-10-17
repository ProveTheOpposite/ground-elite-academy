import { Controller } from "react-hook-form";

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const CheckboxField = ({ name, control, label, mandatory = false }) => {
  return (
    <div className="flex items-center gap-x-3">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Checkbox
            id={name}
            checked={field.value || false}
            onCheckedChange={field.onChange}
            className={`border-gray-300 accent-[#b0181c] ${fieldState.error ? "border-red-500" : ""}`}
          />
        )}
      />
      <Label
        htmlFor={name}
        className={`cursor-pointer text-sm leading-relaxed font-${mandatory ? "medium" : "normal"}`}
      >
        {label}
        {mandatory && <span className="text-red-500">*</span>}
      </Label>
    </div>
  );
};

export default CheckboxField;
