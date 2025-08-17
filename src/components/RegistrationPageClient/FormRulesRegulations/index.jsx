import { Checkbox } from "@/components/ui/checkbox";
import { Controller } from "react-hook-form";

const FormRulesRegulations = ({ register, control, errors }) => {
  return (
    <div>
      <p>Vous autorisez le club à :</p>
      <div className="mb-10 flex flex-col gap-y-3 pt-3 pl-5">
        <div>
          <Controller
            name="nonRespectRulesRegulations"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className={
                  errors.nonRespectRulesRegulations ? "border-red-500" : ""
                }
              />
            )}
          />
          <span className="ml-2">
            À prendre toute disposition utile en cas de non-respect du règlement
            intérieur du club, ainsi qu'en cas d'urgence.
          </span>
        </div>

        <div>
          <Controller
            name="medical"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className={errors.medical ? "border-red-500" : ""}
              />
            )}
          />
          <span className="ml-2">Médicale / Chirurgicale</span>
        </div>

        <div>
          <Controller
            name="sharePhotosHimself"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className={errors.sharePhotosHimself ? "border-red-500" : ""}
              />
            )}
          />
          <span className="ml-2">
            À diffuser les photos auprès de ses partenaires, des compétitions,
            et des éventuels supports internet utilsés par le club.
          </span>
        </div>

        <div className="mt-5">
          <Controller
            name="rulesRegulations"
            control={control}
            render={({ field }) => (
              <div className="flex items-baseline">
                <Checkbox
                  checked={field.value || false}
                  onCheckedChange={field.onChange}
                  className={errors.rulesRegulations ? "border-red-500" : ""}
                />
                <span className="ml-2 font-bold">
                  Je certifie avoir pris connaissance des dispositions
                  ci-dessus, ainsi que du règlement intérieur de l'association
                  du club.
                  <span className="text-red-500">*</span>
                </span>
              </div>
            )}
          />
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
          <u>certificat médical d'aptitude de moins d'un mois</u>
        </strong>
      </p>
    </div>
  );
};

export default FormRulesRegulations;
