import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserDataField = ({
  className = "",
  id,
  label,
  value,
  onChange = () => {},
  disabled,
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        className="h-11"
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default UserDataField;
