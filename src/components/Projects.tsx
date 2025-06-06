import { projects } from "../utils/constants";
import { useEffect, useState } from "react";
import { ProjectType } from "../utils/constants";
import { FaWindowClose } from "react-icons/fa";

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [data, setData] = useState<ProjectType[] | null>(null);

  useEffect(() => {
    if (selectedId !== null) {
      const filtered = projects.filter((project) => project.id === selectedId);
      setData(filtered);
    } else {
      setData(null);
    }
  }, [selectedId]);

  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [data]);

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center mt-20 relative md:px-12 px-4"
    >
      <h2 className="text-3xl md:text-4xl max-sm:text-2xl font-bold">
        Featured Work
      </h2>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-10 px-4 md:px-10 py-4 w-full mb-10 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-gradient-to-tl from-primary/15 via-neutral/10 to-secondary/20 gap-3 px-5 pt-5 pb-6 rounded-2xl cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-linear w-full max-w-sm"
            onClick={() => setSelectedId(project.id)}
          >
            <div className="overflow-hidden">
              <img
                src={
                  project.images[0] ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={project.name}
                className="object-cover"
              />
            </div>
            <h2 className="font-bold text-xl text-primary/80 mt-2">
              {project.name}
            </h2>
            <p className="text-sm text-base-content/80 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => setSelectedId(project.id)}
                className="bg-primary px-4 py-2 font-semibold text-primary-content rounded-lg text-sm hover:bg-primary/80 transition"
              >
                View Details
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-l-2 bg-base-content/20 font-semibold border-l-secondary px-4 py-2 rounded-lg text-sm hover:border-l-2 hover:border-l-secondary hover:bg-base-content/30 hover:opacity-90 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {data && (
        <div
          onClick={() => setSelectedId(null)}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral text-neutral-content w-full max-w-3xl max-h-[90vh] p-6 sm:p-10 rounded-lg shadow-lg relative overflow-y-auto"
          >
            <FaWindowClose
              className="absolute right-6 top-4 sm:right-10 sm:top-6 text-secondary cursor-pointer"
              size={30}
              onClick={() => setSelectedId(null)}
            />
            <h2 className="text-2xl sm:text-3xl text-primary font-bold mb-4">
              {data[0].name}
            </h2>
            <h3 className="text-sm sm:text-lg font-bold mb-1">Introduction</h3>
            <p className="text-sm sm:text-base">{data[0].description}</p>
            <h3 className="font-bold text-sm sm:text-lg mt-4">
              Functionalities
            </h3>
            <ul className="mt-1 pl-2 list-disc list-inside text-sm sm:text-base">
              {data[0].features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <h3 className="text-sm sm:text-lg font-bold mb-1 mt-4">
              Technologies
            </h3>
            <p className="font-semibold text-sm sm:text-lg">
              <div className="flex flex-wrap gap-2 text-sm font-normal">
                {data[0].tech.map((s) => (
                  <span
                    key={s}
                    className="border-2 border-primary/80 bg-gradient-to-br from-primary/35 via-neutral/15 to-primary/30 cursor-pointer rounded-xl px-4 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </p>
            {data[0].link && (
              <p className="font-semibold text-sm sm:text-lg mt-4">
                Deployment Link:{" "}
                <a
                  href={data[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  {data[0].link}
                </a>
              </p>
            )}
            <p className="font-semibold text-sm sm:text-lg mt-4">
              Github Link:{" "}
              <a
                href={data[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                {data[0].github}
              </a>
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {data[0].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={data[0].name}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
