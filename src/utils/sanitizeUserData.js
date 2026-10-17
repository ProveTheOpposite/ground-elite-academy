export const sanitizeUserData = (data, excludeFields = []) => {
  const forbiddenFields = ["id", ...excludeFields]; // champs jamais modifiables

  const cleanData = { ...data };

  forbiddenFields.forEach((field) => {
    if (field in cleanData) {
      delete cleanData[field];
    }
  });

  return cleanData; // recevoir les données sans id et les champs exclus
};
