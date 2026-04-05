import * as yup from "yup";

export const getSchema = (isAdult) => {
  return [
    yup.object({
      firstNameParent: isAdult
        ? yup.string().optional()
        : yup.string().required("Prénom parent requis"),
      lastNameParent: isAdult
        ? yup.string().optional()
        : yup.string().required("Nom parent requis"),
      adressPostale: isAdult
        ? yup.string().optional()
        : yup.string().required("Adresse postale requise"),
      phoneNumber: isAdult
        ? yup.string().optional()
        : yup.string().required("Numéro de téléphone requis"),
      email: yup.string().email("Email invalide").required("Email requis"),
      password: yup
        .string()
        .required("Mot de passe requis")
        .min(6, "Minimum 6 caractères"),
      confirmPassword: yup
        .string()
        .required("Confirmer le mot de passe")
        .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),
    }),
    yup.object({
      firstNameAdherent: isAdult
        ? yup.string().required("Prénom requis")
        : yup.string().optional(),
      lastNameAdherent: isAdult
        ? yup.string().required("Nom requis")
        : yup.string().optional(),
      phoneNumber: isAdult
        ? yup.string().required("Numéro de téléphone requis")
        : yup.string().optional(),
      categoryAdherent: isAdult
        ? yup.string().required("Choisissez votre catégorie")
        : yup.string().optional(),
      dateOfBirthAdherent: isAdult
        ? yup
            .date("Date de naissance invalide")
            .nullable()
            .required("Date de naissance requise")
        : yup.date().nullable().optional(),
      adressPostale: isAdult
        ? yup.string().required("Adresse postale requise")
        : yup.string().optional(),
      nationalityAdherent: isAdult
        ? yup.string().required("Nationalité requise")
        : yup.string().optional(),
      contactEmergency: isAdult
        ? yup.string().required("Personne d'urgence requise")
        : yup.string().optional(),
      phoneNumberContactEmergency: isAdult
        ? yup.string().required("Numéro de téléphone requis")
        : yup.string().optional(),
      sexeAdherent: isAdult
        ? yup.string().required("Choisissez votre genre")
        : yup.string().optional(),
      licence: yup
        .object({
          fflutte: yup.boolean(),
          cfjjb: yup.boolean(),
        })
        .test(
          "at-least-one",
          "Vous devez sélectionner au moins une licence",
          (value) => {
            return value.fflutte || value.cfjjb;
          },
        ),
      children: isAdult
        ? yup
            .array()
            .of(
              yup.object({
                firstNameChild: yup.string().optional(),
                lastNameChild: yup.string().optional(),
                dateOfBirthChild: yup.date().nullable().optional(),
                nationalityChild: yup.string().optional(),
                sexeChild: yup.string().optional(),
                categoryChild: yup.string().optional(),
              }),
            )
            .optional()
        : yup
            .array()
            .of(
              yup.object({
                firstNameChild: yup
                  .string()
                  .required("Prénom de l'enfant requis"),
                lastNameChild: yup.string().required("Nom de l'enfant requis"),
                dateOfBirthChild: yup
                  .date()
                  .nullable()
                  .required("Date de naissance de l'enfant requise"),
                nationalityChild: yup.string().required("Nationalité requise"),
                sexeChild: yup
                  .string()
                  .required("Choisissez le genre de l'enfant"),
                categoryChild: yup.string().required("Choisissez la catégorie"),
              }),
            )
            .min(1, "Ajoutez au moins un enfant"),
    }),
    yup.object({
      rulesRegulations: yup
        .boolean()
        .oneOf([true], "Veuillez accepter les règles et réglementations"),
    }),
  ];
};
