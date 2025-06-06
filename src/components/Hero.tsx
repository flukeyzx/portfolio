import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { pageAnimation, animText } from "../utils/animation";
import document from "../assets/resume.pdf";
import heroImage from "../assets/hero.svg";

const Hero = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-16 px-4 xl:px-28 lg:px-20"
    >
      <motion.div
        variants={animText}
        className="flex flex-col gap-6 text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
          <span className="gradient-letter block">Hi! I'm Abdul Ahad</span>
          <span className="text-xl sm:text-xl 2xl:text-2xl text-base-content/80 block mt-3 font-semibold">
            A Full Stack Software Engineer with a passion for building fast, and
            scalable software.
          </span>
        </h1>

        <div className="flex items-center gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            className="flex border-2 border-l-secondary gap-4 btn max-sm:px-6 px-8 max-sm:text-sm xl:px-8 xl:pb-8 xl:pt-5 py-2 rounded-lg hover:-translate-y-1 hover:opacity-85 hover:border-l-secondary transition-transform"
          >
            View Projects
            <FaArrowUpRightFromSquare />
          </a>
          <a
            href={document}
            target="_blank"
            download="CV"
            className="flex gap-4 items-center cursor-pointer btn btn-primary px-8 py-2 max-sm:px-6 max-sm:text-sm xl:px-8 xl:pb-8 xl:pt-5 rounded-lg hover:-translate-y-1 hover:opacity-85 transition-transform"
          >
            Download CV
            <FaDownload />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="lg:w-1/2 bg-transparent "
      >
        <img
          src={heroImage}
          alt="Hero"
          className="max-w-full h-auto rounded-lg text-primary"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
