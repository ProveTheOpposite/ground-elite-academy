import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import { FileText } from "lucide-react";

const MedicalNote = ({ currentData, onChangeUserInfo, isEditing }) => {
  return (
    <Card className="md:col-span-full">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-red-600" />
          <CardTitle>Note médicale</CardTitle>
        </div>
        <CardDescription>Informations médicales importantes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Textarea
            id="noteMedical"
            value={currentData.noteMedical}
            onChange={(e) => onChangeUserInfo("noteMedical", e.target.value)}
            disabled={!isEditing}
            placeholder="Allergies, traitements en cours, conditions particulières..."
            className="min-h-[110px] resize-y"
          />
          <p className="text-muted-foreground text-xs">
            Informations confidentielles utilisées uniquement en cas de besoin
            médical.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalNote;
