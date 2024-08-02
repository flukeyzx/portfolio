import {
  createContext,
  ReactNode,
  FC,
  useState,
  useEffect,
  useContext,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  let storedTheme = (localStorage.getItem("theme") as Theme) || null;
  if (!storedTheme) {
    storedTheme = "light";
  }
  const [theme, setTheme] = useState(storedTheme);
  const html = document.querySelector("html")?.classList!;

  useEffect(() => {
    html.add(theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      html.add("dark");
      html.remove("light");
    } else {
      html.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be within the ThemeProvider");
  }

  return context;
};

export default ThemeProvider;
