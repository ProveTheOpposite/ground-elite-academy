/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "390px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
