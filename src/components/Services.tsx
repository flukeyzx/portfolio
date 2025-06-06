import { FaQuidditch } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-20 relative md:px-12 2xl:px-20 px-4">
      <h2 className="text-3xl md:text-4xl max-sm:text-2xl font-bold">
        Services I Offer
      </h2>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-6 w-full mt-10 p-8 mb-32">
        <div className="px-6 py-8 rounded-2xl hover:-translate-y-1 shadow-md shadow-secondary hover:shadow-lg hover:shadow-secondary transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-secondary flex gap-2 items-center xl:text-xl font-semibold mb-2">
            <FaQuidditch className="xl:size-6" />
            UI/UX Design & Frontend Development
          </h2>
          <p className="max-xl:text-sm">
            Crafting intuitive, accessible, and visually appealing interfaces
            with user flows and wireframes that prioritize seamless navigation
            and usability across devices.
          </p>
        </div>

        <div className=" px-6 py-8 rounded-2xl shadow-md shadow-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-accent flex gap-2 items-center xl:text-xl text-lg font-semibold mb-2">
            <MdOutlineWeb className="xl:size-6" />
            Full Stack Web Development
          </h2>
          <p className="max-xl:text-sm">
            Developing scalable, full-stack web applications with clean backend
            logic, secure authentication, and responsive front-end interfaces
            for a smooth and consistent user experience.
          </p>
        </div>

        <div className="px-6 py-8 rounded-2xl shadow-warning shadow-md hover:-translate-y-1 hover:shadow-lg hover:shadow-warning transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-warning flex gap-2 items-center xl:text-xl font-semibold mb-2">
            <AiFillApi className="xl:size-6" />
            API Development & Integration
          </h2>
          <p className="max-xl:text-sm">
            Seamlessly integrating third-party RESTful or GraphQL APIs to extend
            functionality, automate workflows, and streamline data flow between
            services and systems.
          </p>
        </div>

        <div className="px-6 py-8 rounded-2xl shadow-info shadow-md hover:-translate-y-1 hover:shadow-lg hover:shadow-info transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-info flex gap-2 items-center xl:text-xl font-semibold mb-2">
            <MdSupportAgent className="xl:size-6" />
            Maintenance & Support
          </h2>
          <p className="max-xl:text-sm">
            Providing ongoing support, performance monitoring, bug fixes, and
            feature updates to keep applications secure, efficient, and running
            smoothly at all times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
