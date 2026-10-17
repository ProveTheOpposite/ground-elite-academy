import CheckboxField from "@/components/CheckboxField";

const FormRulesRegulations = ({ control, errors }) => {
  return (
    <div className="space-y-6">
      <div className="mb-4 rounded-lg border border-amber-500/50 bg-amber-500/10 p-4">
        <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
          ⚠️ Important : Vous devrez présenter un certificat médical de moins
          d'un mois lors de votre première visite.
        </p>
      </div>

      <div className="border-border bg-muted/30 space-y-6 rounded-lg border p-6">
        <CheckboxField
          name="nonRespectRules"
          control={control}
          label="J'autorise le club à prendre toute disposition utile en cas de non-respect du règlement intérieur du club, ainsi qu'en cas d'urgence"
        />

        <CheckboxField
          name="medical"
          control={control}
          label="Médicale / Chirurgicale en cas de nécessité"
        />

        <CheckboxField
          name="diffusePhotosHimself"
          control={control}
          label="J'autorise le club à diffuser les photos auprès de ses partenaires, des compétitions, et des éventuels supports internet utilisés par le club"
        />

        <CheckboxField
          name="rulesRegulations"
          control={control}
          label="J'ai lu et j'accepte les mesures mises en place par le club"
          mandatory
        />
      </div>

      {errors.rulesRegulations && (
        <p className="text-destructive text-sm">
          {errors.rulesRegulations.message}
        </p>
      )}

      <div className="border-border bg-muted/30 rounded-lg border p-4">
        <p className="text-muted-foreground text-sm">
          Après validation, vous serez redirigé vers la page de connexion pour
          accéder à votre compte.
        </p>
      </div>
    </div>
  );
};

export default FormRulesRegulations;
