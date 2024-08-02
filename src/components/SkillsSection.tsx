import { skills } from "../utils/constants";
import { useState } from "react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <>
      <div className="flex-1">
        <h3 className="text-3xl max-sm:text-xl font-semibold">
          What are the tools and technologies <br /> included in my Tech Stack?
        </h3>
        <p className="mt-2 dark:text-gray-100 opacity-75 max-sm:text-sm">
          I have worked with various tools and technologies throughout my
          university curriculum as well as through self-taught learning. I have
          experience in responsive design, complex UI components, and backend
          development.
        </p>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-8 max-sm:grid-cols-5 gap-2 relative">
        {skills.map((s, index) => (
          <div
            key={index}
            className="cursor-help dark:bg-gray-600 bg-gray-100 p-4 rounded-lg relative"
            onMouseEnter={() => setHoveredSkill(s.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <s.icon
              color={s.color}
              size={"45"}
              className="max-md:size-8 max-sm:size-5"
            />
            {hoveredSkill === s.name && (
              <div className="absolute bottom-12 left-1/2 z-10 transform -translate-x-1/2 bg-black text-white text-xs p-2 rounded-md opacity-0 animate-fadeIn">
                {s.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsSection;
