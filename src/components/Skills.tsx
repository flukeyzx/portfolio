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
      <h2 className="text-4xl max-sm:text-2xl font-bold">
        Skills & Qualification
      </h2>
      <div className="mt-8 flex items-center gap-2">
        <button
          className={`w-32 px-6 py-2 rounded-full text-center ${
            activeButton === "Skills"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveButton("Skills")}
        >
          Skills
        </button>
        <button
          className={`w-32 px-6 py-2 rounded-full text-center ${
            activeButton === "Education"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveButton("Education")}
        >
          Education
        </button>
      </div>
      <div className="flex max-md:flex-col items-center mt-4 justify-between gap-8 dark:bg-slate-800 bg-gray-300 w-full max-w-4xl max-lg:max-w-3xl max-md:max-w-2xl max-sm:max-w-xs max-sm:px-6 mx-10 px-12 py-8 rounded-2xl">
        {activeButton === "Skills" ? <SkillsSection /> : <Education />}
      </div>
    </div>
  );
};

export default Skills;
