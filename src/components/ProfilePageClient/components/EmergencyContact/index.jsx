import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import UserDataField from "../UserDataField";

const EmergencyContact = ({ currentData, isEditing, onChangeUserInfo }) => {
  return (
    <Card className="gap-4 2xl:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Shield className="h-5 w-5 text-red-600" />
          Contact d'urgence
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col space-y-4">
          <UserDataField
            id="contactEmergency"
            label="Personne à contacter"
            value={currentData?.contactEmergency}
            onChange={(e) =>
              onChangeUserInfo("contactEmergency", e.target.value)
            }
            disabled={!isEditing}
          />
          <UserDataField
            id="phoneNumberEmergency"
            label="Numéro de téléphone"
            value={currentData?.phoneNumberEmergency}
            onChange={(e) =>
              onChangeUserInfo("phoneNumberEmergency", e.target.value)
            }
            disabled={!isEditing}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContact;
