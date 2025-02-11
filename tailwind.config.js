/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  safelist: [
    "bg-first-article",
    "bg-second-article",
    "bg-third-article",
    "bg-fourth-article",
    "bg-fifth-article",
  ],
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
