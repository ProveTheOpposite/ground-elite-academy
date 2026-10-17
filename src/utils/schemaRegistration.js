import * as yup from "yup";

export const getSchema = (isAdult) => {
  return [
    // Step 1
    yup.object({
      email: yup.string().email("Email invalide").required("Email requis"),
      password: yup
        .string()
        .required("Mot de passe requis")
        .min(2, "Minimum 2 caractères"),
      confirmPassword: yup
        .string()
        .required("Confirmer le mot de passe")
        .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),
    }),
    // Step 2
    yup.object({
      paymentMethod: yup.string().required("Choisissez un mode de paiement"),
      subscriptionType: yup
        .string()
        .required("Choisissez un type d'abonnement"),
      alreadyPaid: yup.string().required("Choisissez une réponse"),
    }),
    // Step 3
    isAdult
      ? [
          // sub step 1
          yup.object({
            firstName: yup.string().required("Prénom requis"),
            lastName: yup.string().required("Nom requis"),
            dateOfBirth: yup
              .date("Date de naissance invalide")
              .nullable()
              .required("Date de naissance requise"),
            placeOfBirth: yup.string().required("Lieu de naissance requis"),
            nationality: yup.string().required("Nationalité requise"),
          }),
          // sub step 2
          yup.object({
            address: yup.string().required("Adresse postale requise"),
            postalCode: yup.string().required("Code postal requis"),
            city: yup.string().required("Ville requise"),
            phoneNumber: yup.string().required("Numéro de téléphone requis"),
            contactEmergency: yup
              .string()
              .required("Personne d'urgence requise"),
            phoneNumberEmergency: yup
              .string()
              .required("Numéro de téléphone urgence requis"),
          }),
          // sub step 3
          yup.object({
            sexe: yup.string().required("Choisissez votre genre"),
            category: yup.string().required("Choisissez votre catégorie"),
            licences: yup
              .object({
                ffl: yup.boolean(),
                cfjjb: yup.boolean(),
              })
              .test(
                "at-least-one",
                "Vous devez sélectionner au moins une licence",
                (value) => {
                  return value.ffl || value.cfjjb;
                },
              ),
          }),
        ]
      : yup.object({
          firstName: yup.string().required("Prénom requis"),
          lastName: yup.string().required("Nom requis"),
          phoneNumber: yup.string().required("Numéro de téléphone requis"),
          address: yup.string().required("Adresse requise"),
          postalCode: yup.string().required("Code postal requis"),
          city: yup.string().required("Ville requise"),
          children: yup
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
                placeOfBirthChild: yup
                  .string()
                  .required("Lieu de naissance de l'enfant requis"),
                nationalityChild: yup.string().required("Nationalité requise"),
                sexeChild: yup
                  .string()
                  .required("Choisissez le genre de l'enfant"),
                categoryChild: yup.string().required("Choisissez la catégorie"),
                licencesChild: yup
                  .object({
                    ffl: yup.boolean(),
                    cfjjb: yup.boolean(),
                  })
                  .test(
                    "at-least-one",
                    "Vous devez sélectionner au moins une licence",
                    (value) => {
                      return value.ffl || value.cfjjb;
                    },
                  ),
              }),
            )
            .min(1, "Ajoutez au moins un enfant"),
        }),
    // Step 4
    yup.object({
      rulesRegulations: yup
        .boolean()
        .oneOf(
          [true],
          "Vous devez accepter la charte d'utilisation pour continuer",
        ),
    }),
  ];
};
