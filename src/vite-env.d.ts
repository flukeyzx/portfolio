/// <reference types="vite/client" />

type Theme = "emerald" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}
