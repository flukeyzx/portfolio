const Footer = () => {
  return (
    <footer className="mt-10 py-8 bg-primary-content/80 text-primary text-sm">
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h2 className="font-bold text-lg">Abdul Ahad</h2>
          <p className="mt-2">
            Building web experiences with code and creativity.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:abdulahad_dm@outlook.com"
                className="hover:underline"
              >
                abdulahad_dm@outlook.com
              </a>
            </li>
            <li>
              Phone: <span>+92 312 4527029</span>
            </li>
            <li>Location: Multan, Pakistan</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Me</h3>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/flukeyzx"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdulahad710/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/d7_fluke"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center border-t border-base-300 pt-4 text-xs">
        <span>&copy; 2024 Abdul Ahad. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
