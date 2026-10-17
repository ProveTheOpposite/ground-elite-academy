import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Target } from "lucide-react";

const InformationsPractice = ({ currentData, onChangeUserInfo, isEditing }) => {
  return (
    <Card className="gap-4 2xl:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="h-5 w-5 text-red-600" />
          Informations de pratique
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <Label>Objectif de pratique</Label>
          <RadioGroup
            value={currentData?.category}
            onValueChange={(value) => onChangeUserInfo("category", value)}
            disabled={!isEditing}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="competitor" id="competitor" />
              <Label className="cursor-pointer" htmlFor="competitor">
                Compétiteur
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="loisir" id="loisir" />
              <Label className="cursor-pointer" htmlFor="loisir">
                Loisir
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Licence</Label>

          <div className="flex items-center gap-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={currentData?.licences?.ffl}
                disabled
                id="ffl"
              />
              <Label htmlFor="ffl">FFL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={currentData?.licences?.cfjjb}
                disabled
                id="cfjjb"
              />
              <Label htmlFor="cfjjb">CFJJB</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InformationsPractice;
