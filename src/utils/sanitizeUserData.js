export const sanitizeUserData = (data) => {
  const forbiddenFields = ["id", "createdAt"]; // champs jamais modifiables

  const cleanData = { ...data };

  forbiddenFields.forEach((field) => {
    if (field in cleanData) {
      delete cleanData[field];
    }
  });

  return cleanData;
};
