export const scrollToElement = (elementId) => {
  const domElement = document.getElementById(elementId);
  if (domElement) {
    domElement.scrollIntoView({ behavior: "smooth" });
  }
};
