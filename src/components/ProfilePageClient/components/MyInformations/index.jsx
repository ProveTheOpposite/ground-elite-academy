import Link from "next/link";

import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import UserDataField from "../UserDataField";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { formatDate } from "@/utils/formatDate";

const MyInformations = ({ currentData, isEditing, onChangeUserInfo }) => {
  return (
    <Card className="md:col-span-full 2xl:col-span-2 2xl:row-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-lg">
            <User className="h-5 w-5 text-red-600" />
            <CardTitle>Mes informations</CardTitle>
          </div>
        </div>
        <CardDescription>
          Vos informations personnelles de contact
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert className="border-blue-200 bg-blue-50">
          <AlertDescription className="text-blue-800">
            <strong className="mb-1 text-base">
              Besoin de modifier des informations protégées ?
            </strong>
            <div>
              Certains champs ne peuvent pas être modifiés directement. Si vous
              devez les mettre à jour, veuillez nous contacter via notre{" "}
              <Link
                href="/contact-us"
                className="underline hover:text-blue-900"
              >
                page de contact
              </Link>
              .
            </div>
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <UserDataField
            id="lastName"
            label="Nom"
            value={currentData?.lastName}
            onChange={(e) => onChangeUserInfo("lastName", e.target.value)}
            disabled={!isEditing}
          />

          <UserDataField
            label="Prénom"
            id="firstName"
            value={currentData?.firstName}
            onChange={(e) => onChangeUserInfo("firstName", e.target.value)}
            disabled={!isEditing}
          />
        </div>

        {currentData?.role === "parent" ? (
          <>
            <UserDataField
              className={currentData?.role === "parent" ? "md:col-span-2" : ""}
              id="address"
              label="Adresse postale"
              value={currentData?.address}
              onChange={(e) => onChangeUserInfo("address", e.target.value)}
              disabled={!isEditing}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <UserDataField
                id="postalCode"
                label="Code postal"
                value={currentData?.postalCode}
                onChange={(e) => onChangeUserInfo("postalCode", e.target.value)}
                disabled={!isEditing}
              />
              <UserDataField
                label="Ville"
                id="city"
                value={currentData?.city}
                onChange={(e) => onChangeUserInfo("city", e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <UserDataField
                id="address"
                label="Adresse postale"
                value={currentData?.address}
                onChange={(e) => onChangeUserInfo("address", e.target.value)}
                disabled={!isEditing}
              />

              <UserDataField
                id="postalCode"
                label="Code postal"
                value={currentData?.postalCode}
                onChange={(e) => onChangeUserInfo("postalCode", e.target.value)}
                disabled={!isEditing}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <UserDataField
                label="Ville"
                id="city"
                value={currentData?.city}
                onChange={(e) => onChangeUserInfo("city", e.target.value)}
                disabled={!isEditing}
              />
              <div className="space-y-2">
                <Label htmlFor="sexe">Sexe</Label>
                <Select value={currentData?.sexe} disabled>
                  <SelectTrigger className="h-11! w-full">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Masculin</SelectItem>
                    <SelectItem value="female">Féminin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        {currentData?.role === "adulte/ado" && (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <UserDataField
                id="nationality"
                label="Nationalité"
                value={currentData?.nationality}
                onChange={(e) =>
                  onChangeUserInfo("nationality", e.target.value)
                }
                disabled={!isEditing}
              />

              <UserDataField
                inputClassName="cursor-not-allowed"
                id="dateOfBirth"
                label="Date de naissance"
                value={formatDate(currentData?.dateOfBirth)}
                disabled
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <UserDataField
            id="phoneNumber"
            label="Numéro de téléphone"
            value={currentData?.phoneNumber}
            onChange={(e) => onChangeUserInfo("phoneNumber", e.target.value)}
            disabled={!isEditing}
          />

          <UserDataField
            id="email"
            label="Email"
            value={currentData?.email}
            disabled
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MyInformations;
