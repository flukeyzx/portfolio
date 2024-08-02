import { useState, useEffect } from "react";
import { education } from "../utils/constants";

const Education = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(education[0]);

  useEffect(() => {
    if (count >= 0 && count < education.length) {
      setData(education[count]);
    }
  }, [count]);

  const handleSlider = (value: number) => {
    setCount((prevCount) => {
      const newCount = prevCount + value;
      if (newCount < 0) {
        return education.length - 1;
      } else if (newCount >= education.length) {
        return 0;
      } else {
        return newCount;
      }
    });
  };

  return (
    <>
      <div className="flex-1">
        <h3 className="text-3xl max-sm:text-xl font-semibold">
          What is the record of my formal academic education? <br />
        </h3>
        <p className="mt-2 dark:text-gray-100 opacity-75 max-sm:text-sm">
          I am currently pursuing a Bachelor's degree in Information Technology
          at Muhammad Nawaz Sharif University of Agriculture, Multan. I
          completed my Intermediate studies in ICS at Government Millat College,
          Multan, and my matriculation at Government Bukhari Public High School,
          Multan. Born and raised in Multan, I have completed all my formal
          education in this city.
        </p>
      </div>
      <div>
        {data && (
          <div className="flex flex-col justify-center items-center max-w-72 bg-gray-200 dark:bg-slate-700 p-4 rounded-xl">
            <img
              src={data.image}
              alt={data.name}
              width={200}
              className="object-cover aspect-square rounded-xl"
            />
            <h3 className="mt-2 font-semibold text-center leading-5">
              {data.name}
            </h3>
            <div className="mt-2 flex flex-col justify-center items-center text-gray-600 dark:text-gray-400 text-xs">
              <p className="">Batch: {data.date}</p>
              <p>Degree: {data.degree}</p>
              <p>Marks: {data.marks}</p>
            </div>
            <div className="flex justify-center items-center mt-4 gap-4">
              <button
                onClick={() => handleSlider(-1)}
                className="bg-gray-100 dark:text-black rounded-full px-4 py-2 text-xl hover:opacity-75"
              >
                {"<"}
              </button>
              <button
                onClick={() => handleSlider(1)}
                className="bg-gray-100 dark:text-black rounded-full px-4 py-2 text-xl hover:opacity-75"
              >
                {">"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
