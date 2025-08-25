import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

const FormRulesRegulations = ({ control, errors }) => {
  return (
    <div>
      <p>Vous autorisez le club à :</p>
      <div className="mb-10 flex flex-col gap-y-3 pt-3 pl-5">
        <div className="flex items-baseline">
          <Controller
            name="nonRespectRulesRegulations"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="nonRespectRulesRegulations"
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className={
                  errors.nonRespectRulesRegulations ? "border-red-500" : ""
                }
              />
            )}
          />
          <Label
            htmlFor="nonRespectRulesRegulations"
            className="ml-2 text-base font-normal"
          >
            À prendre toute disposition utile en cas de non-respect du règlement
            intérieur du club, ainsi qu'en cas d'urgence.
          </Label>
        </div>

        <div className="flex items-baseline">
          <Controller
            name="medical"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="medical"
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className={errors.medical ? "border-red-500" : ""}
              />
            )}
          />
          <Label htmlFor="medical" className="ml-2 text-base font-normal">
            Médicale / Chirurgicale en cas de nécessité.
          </Label>
        </div>

        <div className="flex items-baseline">
          <Controller
            name="sharePhotosHimself"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="sharePhotosHimself"
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className={errors.sharePhotosHimself ? "border-red-500" : ""}
              />
            )}
          />
          <Label
            htmlFor="sharePhotosHimself"
            className="ml-2 text-base font-normal"
          >
            À diffuser les photos auprès de ses partenaires, des compétitions,
            et des éventuels supports internet utilisés par le club.
          </Label>
        </div>

        <div className="mt-5">
          <div className="flex items-baseline">
            <Controller
              name="rulesRegulations"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="rulesRegulations"
                  checked={field.value || false}
                  onCheckedChange={field.onChange}
                  className={errors.rulesRegulations ? "border-red-500" : ""}
                />
              )}
            />
            <Label
              htmlFor="rulesRegulations"
              className="ml-2 inline items-baseline text-base font-bold"
            >
              Je certifie avoir pris connaissance des dispositions ci-dessus,
              ainsi que du règlement intérieur de l'association du club.
              <span className="text-red-500">*</span>
            </Label>
          </div>
          {errors.rulesRegulations && (
            <p className="mt-2 text-red-500">
              {errors.rulesRegulations.message}
            </p>
          )}
        </div>
      </div>
      <p>
        <strong className="text-[#b0181c]">Obligatoire :</strong>{" "}
        <strong>
          <u>
            certificat médical d'aptitude de moins d'un mois à présenter au club
          </u>
        </strong>
      </p>

      <p className="mt-5">
        Vous devrez valider votre adresse email pour finaliser votre
        inscription.
      </p>
    </div>
  );
};

export default FormRulesRegulations;
