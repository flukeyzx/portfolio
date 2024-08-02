import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="py-6 px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold flex items-center gap-2 cursor-pointer">
          <span className="gradient-letter text-3xl">{"</>  "}</span>
        </h2>
        <div className="flex items-center gap-8">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border-2 border-primary rounded-2xl"
          >
            {theme === "dark" ? <FaSun /> : <IoMoon />}
          </button>
          <div className="flex gap-2 text-lg cursor-pointer max-sm:hidden">
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
