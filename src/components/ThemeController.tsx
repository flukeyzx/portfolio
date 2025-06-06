import { useEffect, useState } from "react";

const ThemeController = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "emerald"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
  };

  return (
    <div className="dropdown relative inline-block">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content absolute right-0 mt-2 z-50 w-52 bg-base-300 rounded-box shadow-2xl max-h-64 overflow-y-auto p-2"
      >
        <li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Emerald"
              value="emerald"
              checked={theme === "emerald"}
              onChange={handleThemeChange}
            />
          </li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Night"
            value="night"
            checked={theme === "night"}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Forest"
            value="forest"
            checked={theme === "forest"}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Halloween"
            value="halloween"
            checked={theme === "halloween"}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            checked={theme === "retro"}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            checked={theme === "cyberpunk"}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Luxury"
            value="luxury"
            checked={theme === "luxury"}
            onChange={handleThemeChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default ThemeController;
