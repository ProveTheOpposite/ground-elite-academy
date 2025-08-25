export const formatDate = (dateInput) => {
  if (!dateInput) return "Date inconnue";

  let date;

  // Cas Firestore Timestamp
  if (dateInput.seconds !== undefined && dateInput.nanoseconds !== undefined) {
    date = new Date(dateInput.seconds * 1000);
    console.log("Cas Firestore Timestamp");
  }
  // Cas Firestore Timestamp avec méthode toDate()
  else if (typeof dateInput.toDate === "function") {
    date = dateInput.toDate();
    console.log("Cas Firestore Timestamp avec méthode toDate()");
  }
  // Cas Date native
  else if (dateInput instanceof Date) {
    date = dateInput;
    console.log("Cas Date native");
  }
  // Cas string (ex: ISO)
  else if (typeof dateInput === "string") {
    date = new Date(dateInput);
    console.log("Cas string (ex: ISO)");
  } else {
    return "Format de date inconnu";
  }

  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
