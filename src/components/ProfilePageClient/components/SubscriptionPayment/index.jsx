import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { CreditCard } from "lucide-react";

const SubscriptionPayment = ({ currentData, isEditing, onChangeUserInfo }) => {
  return (
    <Card className="md:col-span-full 2xl:col-span-1 2xl:row-span-1">
      <CardHeader>
        <div className="flex items-center space-x-2 text-lg">
          <CreditCard className="h-5 w-5 text-red-600" />
          <CardTitle>Abonnement et paiement</CardTitle>
        </div>
        <CardDescription>
          Informations relatives à votre abonnement
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-1">
          <div className="space-y-2">
            <Label htmlFor="subscriptionType">Type d'abonnement</Label>
            <Select value={currentData?.subscriptionType} disabled>
              <SelectTrigger className="h-12! w-full">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Mensuel</SelectItem>
                <SelectItem value="quarterly">Trimestriel</SelectItem>
                <SelectItem value="annual">Annuel</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="paymentMethod">Mode de paiement</Label>
            <Select
              value={currentData?.paymentMethod}
              onValueChange={(value) =>
                onChangeUserInfo("paymentMethod", value)
              }
              disabled={!isEditing}
            >
              <SelectTrigger className="h-12! w-full">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="espece">Espèces</SelectItem>
                <SelectItem value="carte">Carte bancaire</SelectItem>
                <SelectItem value="cheque">Chèque</SelectItem>
                <SelectItem value="coupon-sport">Coupon sport</SelectItem>
                <SelectItem value="pass-sport">Pass sport</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div
              className={`h-3 w-3 rounded-full ${currentData?.alreadyPaid ? "bg-green-500" : "bg-amber-500"}`}
            />
            <div>
              <Label htmlFor="alreadyPaid" className="text-sm">
                Statut du paiement
              </Label>
              <p className="text-muted-foreground text-xs">
                {currentData?.alreadyPaid
                  ? "Cotisation à jour"
                  : "Paiement en attente"}
              </p>
            </div>
          </div>
          <Badge
            variant={currentData?.alreadyPaid ? "" : "secondary"}
            className={currentData?.alreadyPaid ? "bg-[#44bd32]" : ""}
          >
            {currentData.alreadyPaid ? "Payé" : "Non payé"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionPayment;
