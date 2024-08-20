import { useState } from "react";
import SkillsSection from "./SkillsSection";
import Education from "./Education";

const Skills = () => {
  const [activeButton, setActiveButton] = useState<string>("Skills");

  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center mb-10"
    >
      <h2 className="text-4xl xl:text-5xl max-sm:text-2xl font-bold">
        Skills & Qualification
      </h2>
      <div className="mt-8 flex items-center gap-2">
        <button
          className={`w-32  px-6  py-2 rounded-full text-center xl:text-lg xl:w-44 ${
            activeButton === "Skills" ? "btn btn-primary" : "btn"
          }`}
          onClick={() => setActiveButton("Skills")}
        >
          Skills
        </button>
        <button
          className={`w-32 px-6 py-2 rounded-full text-center  xl:text-lg xl:w-44 ${
            activeButton === "Education" ? "btn btn-primary" : "btn"
          }`}
          onClick={() => setActiveButton("Education")}
        >
          Education
        </button>
      </div>
      <div className="flex max-md:flex-col items-center mt-8 justify-between gap-8 shadow-2xl shadow-primary w-full max-w-4xl xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-2xl max-sm:max-w-xs max-sm:px-6 mx-10 px-12 py-8 rounded-2xl">
        {activeButton === "Skills" ? <SkillsSection /> : <Education />}
      </div>
    </div>
  );
};

export default Skills;
