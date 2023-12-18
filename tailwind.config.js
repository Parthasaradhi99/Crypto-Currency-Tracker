/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        text_primary: "#000",
        bgPrimary: "#fff",
        bgSecondary: "#F9F9F9",
        pink: "#0071bd",
        light_blue: "#e6f7ff",
        border: "#d9d9d9",
        blue_nav :"rgb(0, 21, 41)"
      },
    },
  },
  plugins: [],
};
