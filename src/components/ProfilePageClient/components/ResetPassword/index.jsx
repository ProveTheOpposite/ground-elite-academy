import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Key, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle } from "lucide-react";

const ResetPassword = ({
  onClickResetPassword,
  isPasswordResetSuccess,
  isLoading,
  isAdult,
}) => {
  return (
    <Card
      className={`md:col-span-full ${isAdult ? "2xl:row-span-1" : "2xl:col-span-1"}`}
    >
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Key className="mr-2 h-5 w-5 text-red-600" />
          Sécurité du compte
        </CardTitle>
        <CardDescription>Gérez la sécurité de votre compte</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`flex flex-col gap-y-4 rounded-lg border p-4 ${isAdult ? "md:flex-row md:items-center md:justify-between" : ""}`}
        >
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <div>
              <h4 className="font-medium">Réinitialiser le mot de passe</h4>
              <p className="text-muted-foreground text-sm">
                Changez votre mot de passe pour sécuriser votre compte
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className={`w-full bg-transparent ${isAdult ? "md:w-[118px]" : ""}`}
            onClick={onClickResetPassword}
            disabled={isLoading.resetPassword}
          >
            {isLoading.resetPassword ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Envoi...
              </>
            ) : (
              "Réinitialiser"
            )}
          </Button>
        </div>

        {isPasswordResetSuccess && (
          <div className="mt-3 flex items-center rounded-md bg-green-100 p-3 text-sm text-green-700">
            <CheckCircle className="mr-2 h-5 w-5" />
            Un email de réinitialisation a été envoyé à votre adresse email.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
