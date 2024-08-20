import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { pageAnimation, animText } from "../utils/animation";
import document from "../assets/CV.pdf";
import Services from "./Services";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex flex-col gap-6 justify-center items-center mt-32"
    >
      <motion.div
        variants={animText}
        className="text-5xl xl:text-7xl max-sm:text-3xl font-semibold text-center max-sm:px-2"
      >
        <span className="gradient-letter">Hello!</span> I am{" "}
        <span className="gradient-letter"></span>Abdul Ahad <br /> A Full Stack{" "}
        <span className="gradient-letter">Software Engineer.</span>
      </motion.div>
      <div className="flex items-center gap-4">
        <a
          href="#projects"
          className="flex gap-4 btn max-sm:px-6 px-10 max-sm:text-sm xl:px-16 xl:pb-12 xl:pt-6 xl:text-lg py-3 rounded-lg hover:-translate-y-1 hover:opacity-85 transition-transform"
        >
          View Projects
          <FaArrowUpRightFromSquare />
        </a>
        <a
          href={document}
          target="_blank"
          download="CV"
          className="flex gap-4 items-center cursor-pointer btn btn-primary px-10 py-3 max-sm:px-6 max-sm:text-sm xl:px-16 xl:pb-12 xl:pt-6 xl:text-lg rounded-lg hover:-translate-y-1 hover:opacity-85 transition-transform"
        >
          Download CV
          <FaDownload />
        </a>
      </div>
      <Services />
    </motion.div>
  );
};

export default About;
