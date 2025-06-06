import SkillsSection from "./SkillsSection";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center mb-20 md:px-12 px-4"
    >
      <h2 className="text-3xl md:text-4xl max-sm:text-2xl font-bold">
        Skills & Expertise
      </h2>

      <div className="flex max-md:flex-col bg-base-content/10 items-center justify-between gap-8 w-full max-w-4xl xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-2xl max-sm:max-w-xs max-sm:px-6 mx-10 px-10 py-12 rounded-2xl mt-10">
        <SkillsSection />
      </div>
    </div>
  );
};

export default Skills;
