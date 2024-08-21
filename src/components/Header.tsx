import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <nav className="py-6 px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold flex items-center gap-2 cursor-pointer">
          <span className="gradient-letter text-3xl max-sm:text-lg">
            {"<Portfolio/>  "}
          </span>
        </h2>
        <div className="flex items-center gap-8">
          <ThemeController />
          <div className="flex gap-2 text-lg cursor-pointer max-sm:hidden">
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
      </div>
    </nav>
  );
};

export default Header;
