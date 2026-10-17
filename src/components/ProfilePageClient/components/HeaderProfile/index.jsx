import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/utils/formatDate";
import { X } from "lucide-react";
import { Save } from "lucide-react";
import { Loader2 } from "lucide-react";
import { Edit3 } from "lucide-react";

const HeaderProfile = ({
  currentData,
  isEditing,
  isLoading,
  onCancelEdit,
  onSetEditMode,
  onSaveData,
}) => {
  return (
    <Card className="md:col-span-3 2xl:row-span-1">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-y-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-2xl">
                  {currentData?.firstName?.[0]}
                  {currentData?.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              {/* <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const base64 = await fileToBase64(file);
                      handleChangeUserInfo("profileImage", {
                        name: file.name,
                        type: file.type,
                        data: base64,
                      });
                      setImageProfilePreview(URL.createObjectURL(file));
                    }
                  }}
                />

                {isEditing && currentData?.role === "adulte/ado" && (
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full p-0"
                    onClick={handleClickOpenInputFile}
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div> */}
            </div>
            <div>
              <CardTitle className="text-2xl">
                {currentData?.firstName} {currentData?.lastName}
              </CardTitle>
              <CardDescription className="mt-1 flex items-center gap-2">
                <Badge
                  variant={
                    currentData?.role === "parent" ? "secondary" : "default"
                  }
                >
                  {currentData?.role === "parent" ? "Parent" : "Adhérent"}
                </Badge>
                {currentData?.category && (
                  <Badge variant="outline">
                    {currentData?.category === "competiteur"
                      ? "Compétiteur"
                      : "Loisir"}
                  </Badge>
                )}
                {currentData.role === "adulte/ado" &&
                  currentData?.licences &&
                  Object.entries(currentData?.licences) // Ca affiche 0, 1, 2 car licence n'est qu'une string donc chaque caractère est indexé, créer un tableau (peut etre)
                    .map((key) =>
                      key[1] ? (
                        <Badge key={key} variant="outline">
                          {key[0].toUpperCase()}
                        </Badge>
                      ) : null,
                    )
                    .filter(Boolean)}
              </CardDescription>
              <p className="text-muted-foreground mt-2 text-sm">
                Membre depuis le {formatDate(currentData?.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {!isEditing ? (
              <Button onClick={onSetEditMode} variant="outline" size="sm">
                <Edit3 className="mr-2 h-4 w-4" />
                Modifier
              </Button>
            ) : (
              <>
                <Button
                  onClick={onSaveData}
                  size="sm"
                  className="min-w-[140px]"
                >
                  {isLoading.save ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Sauvegarder
                    </>
                  )}
                </Button>
                <Button onClick={onCancelEdit} variant="outline" size="sm">
                  <X className="mr-2 h-4 w-4" />
                  Annuler
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default HeaderProfile;
