import { FaQuidditch } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";

const Services = () => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 w-full mt-32 p-8 mb-32">
      <div className="bg-secondray px-6 py-8 rounded-2xl shadow-primary shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary cursor-pointer">
        <h2 className="flex gap-2 items-center xl:text-2xl font-semibold mb-2">
          <FaQuidditch className="xl:size-8" />
          UI/UX
        </h2>
        <p>
          I offer professional UI/UX development services focused on creating
          visually appealing, responsive and user-friendly digital
          experiences.Designing user flows and wireframes that prioritize smooth
          navigation, functionality, and accessibility to enhance overall user
          satisfaction.
        </p>
      </div>
      <div className="bg-secondray px-6 py-8 rounded-2xl shadow-primary shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary cursor-pointer">
        <h2 className="flex gap-2 items-center xl:text-2xl font-semibold mb-2">
          <MdOutlineWeb className="xl:size-8" />
          Web Applications
        </h2>
        <p>
          I offer web application development services focused on building
          scalable full stack digital solutions. Developing full stack
          applications with efficient backend code, authentication best
          practices and responsive front-end interfaces that provide seamless
          user experiences across all devices.
        </p>
      </div>
      <div className="bg-secondray px-6 py-8 rounded-2xl shadow-primary shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary cursor-pointer">
        <h2 className="flex gap-2 items-center xl:text-2xl font-semibold mb-2">
          <AiFillApi className="xl:size-8" />
          Api Integration
        </h2>
        <p>
          I offer API integration services focused on connecting applications
          seamlessly with third-party platforms and their API's. Integrating
          RESTful and GraphQL APIs to enhance functionality, automate workflows,
          and streamline data exchange between different systems, and efficient
          digital experience.
        </p>
      </div>
      <div className="bg-secondray px-6 py-8 rounded-2xl shadow-primary shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary cursor-pointer">
        <h2 className="flex gap-2 items-center xl:text-2xl font-semibold mb-2">
          <MdSupportAgent className="xl:size-8" />
          Maintainance & Support
        </h2>
        <p>
          I offer maintenance services focused on keeping apps secure and
          up-to-date. Providing regular updates, performance monitoring, and bug
          fixes to ensure smooth operation, while also offering feature
          enhancements and prompt troubleshooting to address any issues,
          ensuring a reliable digital experience.
        </p>
      </div>
    </div>
  );
};

export default Services;
