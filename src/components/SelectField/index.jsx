import { Controller } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

const SelectField = ({
  label,
  id,
  defaultValue,
  placeholder,
  options,
  control,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} <span className="text-red-500">*</span>
      </Label>

      <Controller
        control={control}
        name={id}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger
              id={id}
              className={`h-12! w-full ${fieldState.error ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  className="h-10"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>

            {/* Equivalent to errors.[key] - Used it to use an another way to display the error with Controller */}
            {fieldState.error && (
              <p className="text-sm text-red-500">{fieldState.error.message}</p>
            )}
          </Select>
        )}
      />
    </div>
  );
};

export default SelectField;
