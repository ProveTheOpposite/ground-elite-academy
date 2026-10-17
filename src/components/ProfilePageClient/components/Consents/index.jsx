import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { UserCheck } from "lucide-react";

const Consents = ({ currentData, isEditing, onChangeUserInfo }) => {
  return (
    <Card className="md:col-span-full 2xl:col-span-3 2xl:row-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <UserCheck className="h-5 w-5 text-red-600" />
          Consentements
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Label htmlFor="nonRespectRules" className="text-base">
                Conséquences du non-respect
              </Label>
              <p className="text-muted-foreground mt-1 text-sm">
                J'accepte les conséquences en cas de non-respect du règlement
                intérieur du club, ainsi qu'en cas d'urgence.
              </p>
            </div>
            {isEditing ? (
              <Switch
                id="nonRespectRules"
                checked={currentData?.nonRespectRules}
                onCheckedChange={(checked) =>
                  onChangeUserInfo("nonRespectRules", checked)
                }
              />
            ) : (
              <Badge
                className={currentData?.nonRespectRules ? "bg-[#44bd32]" : ""}
                variant={currentData?.nonRespectRules ? "" : "destructive"}
              >
                {currentData?.nonRespectRules ? "Accepté" : "Non accepté"}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <Label htmlFor="medical" className="text-base">
                Médicale / Chirurgicale
              </Label>
              <p className="text-muted-foreground mt-1 text-sm">
                J'accepte le médical / chirurgicale en cas de nécessité.
              </p>
            </div>
            {isEditing ? (
              <Switch
                id="medical"
                checked={currentData?.medical}
                onCheckedChange={(checked) =>
                  onChangeUserInfo("medical", checked)
                }
              />
            ) : (
              <Badge
                className={currentData?.medical ? "bg-[#44bd32]" : ""}
                variant={currentData?.medical ? "" : "destructive"}
              >
                {currentData?.medical ? "Accepté" : "Non accepté"}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <Label htmlFor="diffusePhotosHimself" className="text-base">
                Partage de photos
              </Label>
              <p className="text-muted-foreground mt-1 text-sm">
                J'autorise le partage de photos me concernant auprès de mes
                partenaires, des compétitions, et des éventuels supports
                internet utilisés par le club.
              </p>
            </div>
            {isEditing ? (
              <Switch
                id="diffusePhotosHimself"
                checked={currentData?.diffusePhotosHimself}
                onCheckedChange={(checked) =>
                  onChangeUserInfo("diffusePhotosHimself", checked)
                }
              />
            ) : (
              <Badge
                className={
                  currentData?.diffusePhotosHimself ? "bg-[#44bd32]" : ""
                }
                variant={currentData?.diffusePhotosHimself ? "" : "destructive"}
              >
                {currentData?.diffusePhotosHimself
                  ? "Autorisé"
                  : "Non autorisé"}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Consents;
