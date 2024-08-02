import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";
import school from "../assets/bukhari.jpg";
import college from "../assets/millat.jpg";
import university from "../assets/uni.jpg";
import lingo1 from "../assets/project/Screenshot (131).png";
import lingo2 from "../assets/project/Screenshot (83).png";
import lingo3 from "../assets/project/Screenshot (84).png";
import lingo4 from "../assets/project/Screenshot (85).png";
import servis2 from "../assets/project/Screenshot (94).png";
import servis3 from "../assets/project/Screenshot (95).png";
import servis4 from "../assets/project/Screenshot (96).png";
import servis5 from "../assets/project/Screenshot (97).png";
import servis6 from "../assets/project/Screenshot (98).png";
import servis7 from "../assets/project/Screenshot (99).png";
import photography1 from "../assets/project/Screenshot (127).png";
import photography2 from "../assets/project/Screenshot (128).png";
import photography3 from "../assets/project/Screenshot (129).png";
import photography4 from "../assets/project/Screenshot (130).png";
import property1 from "../assets/project/Screenshot (102).png";
import property2 from "../assets/project/Screenshot (103).png";
import property3 from "../assets/project/Screenshot (104).png";
import property4 from "../assets/project/Screenshot (105).png";
import property5 from "../assets/project/Screenshot (106).png";
import property6 from "../assets/project/Screenshot (107).png";
import property7 from "../assets/project/Screenshot (108).png";
import property8 from "../assets/project/Screenshot (109).png";
import property9 from "../assets/project/Screenshot (110).png";
import property10 from "../assets/project/Screenshot (111).png";
import property11 from "../assets/project/Screenshot (112).png";
import property12 from "../assets/project/Screenshot (113).png";
import property13 from "../assets/project/Screenshot (114).png";
import property14 from "../assets/project/Screenshot (115).png";
import blog1 from "../assets/project/Screenshot (116).png";
import blog2 from "../assets/project/Screenshot (117).png";
import blog3 from "../assets/project/Screenshot (118).png";
import blog4 from "../assets/project/Screenshot (119).png";
import blog5 from "../assets/project/Screenshot (120).png";
import blog6 from "../assets/project/Screenshot (121).png";
import blog7 from "../assets/project/Screenshot (122).png";
import blog8 from "../assets/project/Screenshot (123).png";
import blog9 from "../assets/project/Screenshot (124).png";
import blog10 from "../assets/project/Screenshot (125).png";
import blog11 from "../assets/project/Screenshot (126).png";
import music1 from "../assets/project/Screenshot (86).png";
import music2 from "../assets/project/Screenshot (87).png";

export const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#f06529",
  },
  {
    name: "CSS",
    icon: FaCss3,
    color: "#264de4",
  },
  {
    name: "Javascript",
    icon: RiJavascriptFill,
    color: "#f0db4f",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    color: "#007acc",
  },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#06b6d4",
  },
  {
    name: "SASS",
    icon: FaSass,
    color: "#cd6799",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61dbfb",
  },
  {
    name: "redux",
    icon: SiRedux,
    color: "#764abc",
  },
  {
    name: "git",
    icon: FaGitAlt,
    color: "#f14e32",
  },
  {
    name: "github",
    icon: FaGithub,
    color: "",
  },
  {
    name: "vscode",
    icon: VscVscode,
    color: "#0078d7",
  },
  {
    name: "linux",
    icon: FcLinux,
    color: "",
  },
  {
    name: "mongodb",
    icon: SiMongodb,
    color: "#4DB33D",
  },
  {
    name: "SQL",
    icon: BiLogoPostgresql,
    color: "#008bb9",
  },
  {
    name: "node",
    icon: FaNode,
    color: "#6cc24a",
  },
  {
    name: "express",
    icon: SiExpress,
    color: "gray",
  },
];

export const education = [
  {
    name: "Muhammad Nawaz Sharif University of Agriculture, Multan",
    marks: "3.74/4.00",
    degree: "BSIT",
    date: "2021-25",
    image: university,
  },
  {
    name: "Government Millat Degree College, Multan",
    marks: "1082/1100",
    degree: "ICS",
    date: "2019-2021",
    image: college,
  },
  {
    name: "Government Bukhari Public High School, Multan",
    marks: "883/1100",
    degree: "Computer Science",
    date: "2017-2019",
    image: school,
  },
];

export interface ProjectType {
  id: number;
  name: string;
  images: Array<string>;
  link?: string;
  github?: string;
  description: string;
  tech: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Lingo Language Learning",
    images: [lingo1, lingo2, lingo3, lingo4],
    link: "https://lingo-language-learning-rho.vercel.app/",
    github: "https://github.com/flukeyzx/language-learning-react",
    description:
      "I have created a basic language learning application named Lingo. This application has three major features. First, you can choose the language you want to learn, then eight random words with their meanings in English will appear. After that, you'll be given a quiz that contains the same words you have learned. Finally, a result page will appear displaying your score. If you score more than 50%, you will pass. This application is built using React and Redux Toolkit for state management.",
    tech: "React.js, ReduxToolKit, Material UI, Microsoft Translation API",
  },
  {
    id: 2,
    name: "Servis Shoes UI Design",
    images: [servis2, servis3, servis4, servis5, servis6, servis7],
    link: "https://servis-clone.netlify.app/",
    github: "https://github.com/flukeyzx/Servis-Shoes-Landing-Page",
    description:
      "I have created a Landing page of a famous shoe brand of my country called servis shoes. I have built the User Interface using tailwind css. This page only contains the static content. But the code is written with some sort of industry best practices like separte data arrays etc.",
    tech: "React.js, Tailwindcss",
  },
  {
    id: 3,
    name: "Photography Portfolio Website UI/UX",
    images: [photography1, photography2, photography3, photography4],
    link: "https://photography-contact.netlify.app/",
    github: "https://github.com/flukeyzx/Photography-Portfolio",
    description:
      "This website is created using framer-motion and styled components as this website contains animations and fully responsive design. The main motivation of starting out this project was that I wanted to build a UI/UX website that contains animations like text animations, page animations etc.",
    tech: "React.js, framer-motion, styled components",
  },
  {
    id: 4,
    name: "Full Stack Booking Application",
    images: [
      property1,
      property2,
      property3,
      property4,
      property5,
      property6,
      property7,
      property8,
      property9,
      property10,
      property11,
      property12,
      property13,
      property14,
    ],
    github: "https://github.com/flukeyzx/full-stack-property-booking-app",
    description:
      "This is the full stack property booking application, In which I have cloned some of the main features and functionalities of Airbnb. This application has authentication that uses jwt in the backend and context Api in the frontend for user authentication. The main features of this application are user authentication, image uploading on the server, creating updating a property, booking a property. This application uses various packages and libraries.",
    tech: "MongoDB, React.js, Tailwindcss, Express.js, Node.js",
  },
  {
    id: 5,
    name: "Full Stack Blog Application",
    images: [
      blog1,
      blog2,
      blog3,
      blog4,
      blog5,
      blog6,
      blog7,
      blog8,
      blog9,
      blog10,
      blog11,
    ],
    github: "https://github.com/flukeyzx/Blog-App-MERN",
    description:
      "This is a full stack blog application. The main features of this application are user authentication, Rich Text editor, dark and light theme, Searching and filtering, paggination Api, CRUD operations on blogs and image uploading on the server.",
    tech: "MongoDB, React.js, Tailwindcss, Express.js, Node.js",
  },
  {
    id: 6,
    name: "A basic Music player application",
    images: [music1, music2],
    link: "https://musicaly-react.netlify.app/",
    github: "https://github.com/flukeyzx/Music-App-using-React",
    description:
      "This is a basic Music player application build in React. This application has features like skipping song, and controlling the song in the middle of the play. This application has the controll player and it uses SASS for styling. I have used the audio files and images link from a thrid party website.",
    tech: "React.js, SASS",
  },
];
