export const formatDate = (dateString) => {
  const dataString = dateString.seconds * 1000;
  const date = new Date(dataString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
