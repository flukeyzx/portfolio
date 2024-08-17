/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  daisyui: {
    themes: [
      "dark",
      "winter",
      "halloween",
      "cupcake",
      "emerald",
      "retro",
      "cyberpunk",
      "coffee",
      "aqua",
      "synthwave",
      "luxury",
      "dracula",
    ],
  },
  plugins: [require("daisyui")],
};
