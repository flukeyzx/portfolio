/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  daisyui: {
    themes: [
      "forest",
      "night",
      "emerald",
      "halloween",
      "retro",
      "cyberpunk",
      "luxury",
    ],
  },
  plugins: [require("daisyui")],
};
