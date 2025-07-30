import emailjs from "@emailjs/browser";

// initialisation of emailJS
export const initEmailJs = () => {
  emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
  });
};
