import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { calculateAge } from "@/utils/calculateAge";
import { formatDate } from "@/utils/formatDate";

import { FileText } from "lucide-react";
import { CalendarDays } from "lucide-react";

const ChildInformations = ({ child, onChangeUserInfo, isEditing }) => {
  return (
    <div className="bg-card rounded-lg border p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="text-sm">
              {child?.firstNameChild[0]}
              {child?.lastNameChild[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-base font-medium">
              {child?.firstNameChild} {child?.lastNameChild}
            </h4>
            <p className="text-muted-foreground text-sm">
              {calculateAge(child?.dateOfBirthChild)} ans
            </p>
          </div>
        </div>
        <Badge variant="outline" className="ml-2">
          {child?.categoryChild === "competitor" ? "Compétiteur" : "Loisir"}
        </Badge>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <CalendarDays className="text-muted-foreground h-4 w-4" />
          <span>Né(e) le {formatDate(child?.dateOfBirthChild)}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-4 w-4 items-center justify-center">
            <div
              className={`h-2 w-2 rounded-full ${child?.sexeChild === "male" ? "bg-blue-500" : "bg-pink-500"}`}
            />
          </div>
          <span>{child?.sexeChild === "male" ? "Masculin" : "Féminin"}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-4 w-4 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-gray-400" />
          </div>
          <span>Nationalité: {child?.nationalityChild}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-4 w-4 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-gray-400" />
          </div>
          <span>
            Licences:{" "}
            {child?.licencesChild &&
              Object.entries(child?.licencesChild)
                .map((key) => (key[1] ? key[0].toUpperCase() : null))
                .filter(Boolean)
                .join(" et ")}
          </span>
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex items-start gap-2">
            <FileText className="text-muted-foreground mt-0.5 h-4 w-4 shrink-0" />
            <div className="w-full space-y-2">
              <Label className="text-sm font-medium">Note médicale</Label>
              {isEditing ? (
                <Textarea
                  value={child.noteMedical}
                  onChange={(e) =>
                    onChangeUserInfo("noteMedical", e.target.value)
                  }
                  placeholder="Allergies, traitements, conditions particulières..."
                  className="min-h-[60px] resize-none text-sm"
                />
              ) : (
                <p className="text-muted-foreground text-sm">
                  {child.noteMedical || "Aucune note médicale renseignée"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildInformations;
