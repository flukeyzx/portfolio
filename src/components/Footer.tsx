const Footer = () => {
  return (
    <footer className="mt-10 py-8 dark:bg-gray-800 bg-gray-200">
      <div className="container px-10 flex items-center justify-between">
        <div className="text-center">
          <span>&copy; 2024 Abdul Ahad. All rights reserved.</span>
        </div>
        <div className="text-center flex justify-between gap-2 items-center text-sm max-sm:hidden">
          <a href="mailto:abdulahad_dm@outlook.com">abdulahad_dm@outlook.com</a>
          <span className="max-lg:hidden">
            Wallaytabad No.1 Street No. 1, Multan, Pakistan
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
