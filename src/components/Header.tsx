import ThemeController from "./ThemeController";
import Logo from "./Logo";
import { FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="py-6 px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div className="flex items-center max-sm:justify-center max-sm:hidden gap-8">
          <div className="flex gap-4 text-lg max-lg:text-base cursor-pointer">
            <a href="#home" className="hover:text-primary">
              Home
            </a>
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
        <div className="flex gap-6 justify-between items-center max-sm:w-full max-sm:justify-center">
          <ThemeController />
          <a
            href="https://github.com/flukeyzx"
            target="_blank"
            className="flex gap-2 items-center hover:bg-primary max-lg:hidden transition-all border-2 border-primary px-5 py-2 rounded-md text-primary hover:text-neutral font-bold"
          >
            <FaGithub />
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
