export const defaultValuesAdult = {
  // step 1
  email: "",
  password: "",
  confirmPassword: "",
  // step 2
  paymentMethod: "",
  subscriptionType: "",
  alreadyPaid: false,
  // step 3
  // subStep 1
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  placeOfBirth: "",
  nationality: "",
  // subStep 2
  address: "",
  postalCode: "",
  city: "",
  phoneNumber: "",
  contactEmergency: "",
  phoneNumberEmergency: "",
  // subStep 3
  sexe: "",
  category: "", // Loisir ou Compétiteur
  licences: {
    ffl: false,
    cfjjb: false,
  },
  noteMedical: "", // medical or what else
  // step 4
  nonRespectRules: false,
  medical: false,
  diffusePhotosHimself: false,
  rulesRegulations: false,
};
