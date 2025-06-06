import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FcAbout,
  FcTimeline,
  FcGraduationCap,
  FcSportsMode,
} from "react-icons/fc";

const sections = [
  {
    title: "About Me",
    icon: <FcAbout className="text-xl shrink-0" />,
    content: (
      <>
        <p>
          I'm a Full Stack Software Engineer from Pakistan with a passion for
          building meaningful, user-focused applications. My journey began in
          university, where I discovered my love for turning ideas into real
          software.
        </p>

        <p>
          Starting with small web projects, I gradually mastered the MERN stack
          and learned how to solve real-world problems through clean design and
          scalable code. I believe in continuous learning and enjoy exploring
          new technologies, building side projects, and creative
          problem-solving.
        </p>

        <p>
          Beyond coding, I'm driven by growth, curiosity, and making a positive
          impact through what I build.
        </p>
      </>
    ),
  },
  {
    title: "My Journey",
    icon: <FcTimeline className="text-xl shrink-0" />,
    content: (
      <>
        <p>
          I started my coding journey in university, initially exploring C++ and
          basic data structures. Soon after, I dove into web development and
          discovered a passion for building beautiful UIs with React and
          powerful APIs with Node.js.
        </p>
        <p>
          Over the past 2 years, I've built various full-stack projects — from
          job portals to AI-integrated platforms. I've also worked with real
          clients, helping local businesses establish their online presence.
        </p>
        <p>
          Today, I'm focusing on AI integrations, Next.js, and building
          intuitive user experiences. My goal is to create impactful software,
          get international exposure, work with global clients and never stop
          learning.
        </p>
      </>
    ),
  },
  {
    title: "Acedemic Record",
    icon: <FcGraduationCap className="text-xl shrink-0" />,
    content: (
      <>
        <>
          <ul className="list-disc list-inside space-y-2">
            Graduated with a Bachelor's degree in Information Technology from{" "}
            <strong>MNSUAM, Pakistan</strong>.
            <li>
              Achieved an outstanding <strong>CGPA of 3.89</strong>.
            </li>
            <li>
              Explored a wide range of subjects including programming,
              databases, networking, and software engineering.
            </li>
            <li>
              Took part in side projects, freelancing, and participated in local
              tech communities.
            </li>
            <li>
              Gained exposure to teamwork, colaboration and real-world
              problem-solving through coursework and extracurricular activities.
            </li>
          </ul>
        </>
      </>
    ),
  },
  {
    title: "Interest & Hobbies",
    icon: <FcSportsMode className="text-xl shrink-0" />,
    content: (
      <>
        <div className="flex flex-col gap-1">
          <p>
            🎮 Enjoy both competitive and casual story-mode gaming — it helps me
            relax and stay sharp.
          </p>
          <p>
            ⚽ Passionate about watching football, especially top leagues and
            international tournaments.
          </p>
          <p>
            💻 Love working on side coding projects to experiment, learn, and
            build new ideas.
          </p>
          <p>
            📚 Interested in reading philosophy and religion to explore deeper
            perspectives on life.
          </p>
          <p>
            🎧 Frequently listen to podcasts on tech, self-improvement, and
            thought-provoking topics.
          </p>
        </div>
      </>
    ),
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="md:px-12 px-4 mb-10">
      <section id="about" className="py-20 md:px-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl max-sm:text-2xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row  gap-12 relative">
          <div className="flex max-sm:flex-wrap pt-6 md:flex-col gap-4 items-center w-full md:w-1/4 relative">
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative group w-full py-3 px-4 text-left rounded-xl font-semibold transition-all duration-300 overflow-hidden
                ${
                  idx === activeIndex
                    ? "text-primary-content"
                    : "text-base-content/60 hover:text-primary"
                }
              `}
              >
                {idx === activeIndex && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary rounded-xl z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-all duration-200">
                  {section.icon}
                  {section.title}
                </span>
              </button>
            ))}

            <div className="hidden md:block absolute right-[-24px] top-0 h-full w-1 rounded-full bg-primary/60 transition-all ease-in-out duration-200"></div>
          </div>

          <div className="w-full md:w-3/5 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 leading-relaxed p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {sections[activeIndex].title}
                </h3>
                <div className="text-lg">{sections[activeIndex].content}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
