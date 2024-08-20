import { projects } from "../utils/constants";
import { useEffect, useState } from "react";
import { ProjectType } from "../utils/constants";
import { FaWindowClose } from "react-icons/fa";

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [data, setData] = useState<ProjectType[] | null>(null);

  useEffect(() => {
    if (selectedId !== null) {
      let data = projects.filter((project) => project.id === selectedId);
      setData(data);
    } else {
      setData(null);
    }
  }, [selectedId]);

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center mt-20 relative"
    >
      <h2 className="text-4xl max-sm:text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-8 px-10 py-4 w-full mb-10 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-1 bg-neutral text-neutral-content px-6 py-4 rounded-2xl cursor-pointer hover:-translate-y-1 transition-transform"
            onClick={() => setSelectedId(project.id)}
          >
            <div className="flex">
              <img
                src={project.images[0]}
                alt={project.name}
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="font-semibold mt-3 text-lg leading-6">
              {project.name}
            </h2>
          </div>
        ))}
      </div>
      {data && (
        <div
          onClick={() => setSelectedId(null)}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral text-neutral-content w-full max-w-3xl h-full p-10 rounded-lg shadow-lg relative overflow-y-auto custom-scrollbar"
          >
            <FaWindowClose
              className="absolute right-10 top-6 max-sm:right-5 max-sm:top-4 text-secondary cursor-pointer"
              size={35}
              onClick={() => setSelectedId(null)}
            />
            <h2 className="text-3xl max-sm:text-xl font-bold mb-4">
              {data[0].name}
            </h2>
            <p className="max-sm:text-sm">{data[0].description}</p>
            <p className="mt-4 font-semibold text-lg max-sm:text-md">
              Technologies: {data[0].tech}
            </p>
            {data[0].link && (
              <span className="font-semibold text-lg max-sm:text-md">
                Deployment Link:{" "}
                <a
                  href={data[0].link}
                  target="_blank"
                  className="underline text-primary"
                >
                  {" "}
                  {data[0].link}
                </a>
              </span>
            )}
            <p className="font-semibold text-lg max-sm:text-emerald-50">
              Github Link:{" "}
              <a
                href={data[0].github}
                target="_blank"
                className="underline text-primary"
              >
                {data[0].github}
              </a>
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {data[0].images.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt={data[0].name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
