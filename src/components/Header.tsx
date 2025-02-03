import ThemeController from "./ThemeController";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="py-6 px-8 xl:px-28 lg:px-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div className="flex items-center max-sm:justify-center max-sm:hidden gap-8">
          <div className="flex gap-4 text-xl max-lg:hidden cursor-pointer">
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
          <button className="hover:bg-primary max-sm:hidden transition-all border-2 border-primary px-5 py-2 rounded-md text-primary hover:text-neutral font-bold">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
