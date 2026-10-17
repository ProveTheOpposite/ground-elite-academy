export const defaultValuesParent = {
  // step 1
  email: "",
  password: "",
  confirmPassword: "",
  // step 2
  paymentMethod: "",
  subscriptionType: "",
  alreadyPaid: "",
  // step 3
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  postalCode: "",
  city: "",
  children: [
    {
      firstNameChild: "",
      lastNameChild: "",
      dateOfBirthChild: null,
      placeOfBirthChild: "",
      nationalityChild: "",
      sexeChild: "",
      categoryChild: "", // Loisir ou Compétiteur
      licencesChild: {
        ffl: false,
        cfjjb: false,
      },
      noteMedicalChild: "", // medical or what else
    },
  ],
  // step 4
  nonRespectRules: false,
  medical: false,
  diffusePhotosHimself: false,
  rulesRegulations: false,
};
