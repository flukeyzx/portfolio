/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
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
  plugins: [daisyui],
};
