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
    name: "Muhammad Nawaz Sharif University, Multan",
    marks: "3.74",
    degree: "BSIT",
    date: "2021-25",
    image: university,
  },
  {
    name: "Government Millat Degree College, Multan",
    marks: "98%",
    degree: "ICS",
    date: "2019-2021",
    image: college,
  },
  {
    name: "Government Bukhari Public High School, Multan",
    marks: "80%",
    degree: "CS",
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
  tech: string[];
  features: string[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Joblix - Job Portal (Final Year Project)",
    images: [
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147572/YWp5ZjJlemd0MDlkdzR5bWdkeXY=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147925/ejEzeDVzZWw2bGdja2VxY3RjY3E=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147691/Y3NwMnlvdzF2d25yM25sa2s5M20=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147959/YWNlZnZoa3c1cWlvdno4azhuamw=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147991/bGY4bm1wem05bTh3YTVvdXl5ZXA=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749149555/eXkzaXlqc2xtanV4bDh1b3VxM3E=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749149620/dTFpY2FrNnR1azZseDB2bm9ndGs=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147753/ZzNscjFud2xmOG5rMnNpdmVtZ3g=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147721/bnJwOGt6bnY2eWs5cGV4OHJ6dTg=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147784/d3VlMnE2b2U4OHR5anhva2swcGk=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749149755/dXBoeHV2c2J6eGtzdnV4dWkydHQ=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147814/dndxbXNhY3Z6c3J1bmVkd2NoaDM=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147841/eXpuNmdkcnN6a2d2OGdhdmI0Ymg=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147892/eXVid2hnb2dvNWxvZ3NnMDhva3Q=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749147899/ZHZxY3dmOWZlenV5Y2k2Nzlvd3Q=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749148018/dmR0bXRuamRvZ3RzeWZqcmFoaWE=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749148489/eHF5Z2p6dnByNndycXlkZGxlYWk=/drilldown",
    ],
    link: "",
    github: "https://github.com/flukeyzx/fyp",
    description:
      "Joblix is a full-stack job portal designed to connect job seekers with employers. Key features include user authentication, profile customization, resume upload, job posting and application tracking systems, personalized dashboards, and role-based access for recruiters and applicants.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "React Query",
      "Postgresql",
      "Prisma ORM",
      "Node.js",
      "Express.js",
      "Google Gemini API",
    ],
    features: [
      "JWT-based user authentication with google Oauth, OTP, forgot & rest passwords",
      "Custom Email DNS (.tech) connected via Mailgun for sending Emails",
      "Job posting, searching & filtering, and application workflows",
      "Profile customization upload avatar & resume, edit profile data",
      "AI features like Complete profile with AI, get ATS score, generate job description",
      "Rich text editor and complex forms for creating companies & jobs",
      "Notifications system for recruiters and applicants",
    ],
  },
  {
    id: 2,
    name: "A Social Media Application - (X Clone)",
    images: [
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749207792/n3tvvga1djs33gzysc2r.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749207685/rzce0jmqlhbl31eswy18.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749207913/jinjzngeypten5rdhfq1.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749208042/qmqnjvvyjy4aq6yom5gn.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749208079/mg74rfxifw0swzkqtfaf.png",
    ],
    link: "",
    github: "https://github.com/flukeyzx/twitter",
    description:
      "A social media app inspired by X (Twitter), simulating social interactions with a clean UI and scalable backend. Users can post content and network with people while customizing there profile.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
    features: [
      "Post, like, comment, and reply system",
      "Notiications System for likes, follows and comments",
      "JWT-authenticated user sessions",
      "Image uploads, and follow system",
      "Clean, mobile-first responsive UI",
    ],
  },
  {
    id: 3,
    name: "Property Rental Platform - (Airbnb Clone)",
    images: [
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749148719/YjVnNWdxNnh2YmlmeTV5dTV6ODg=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749148752/cXlsNTJkMGJhenZtcWYxZ2JicGw=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749148782/dGJubzk2aXB6dXZxYXBibDFmNGY=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749148823/eXp1MHdnYzRmb2NzMmt6M2g4enA=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749148859/dTVmZmU2cWh1M25tbGUydHIxbnM=/drilldown",
      "https://res-console.cloudinary.com/dvmyuuouh/thumbnails/v1/image/upload/v1749148894/bmtxY2dhamh2eGF0N3lwZm8zMXc=/drilldown",
    ],
    github: "https://github.com/flukeyzx/airbnb-clone",
    description:
      "A full-stack Airbnb-style app for booking and managing rental properties with authentication and image uploads. Users can list there rental properties through complex forms and manage them. Interested users can book these properties and create orders.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    features: [
      "JWT-based auth system",
      "Cloudinary for storing assets",
      "Property creation/edit/delete with image upload",
      "Booking workflow with availability logic",
      "Responsive UI design",
    ],
  },
  {
    id: 4,
    name: "MERN Blog Platform - Blog Stream",
    images: [
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749146377/Screenshot_63_nwgfot.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749148958/ewyjgy4lfqeaihyszcsi.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749148963/ml67bjipaxw4rqeubamt.png",
    ],
    github: "https://github.com/flukeyzx/Blog-App-MERN",
    description:
      "A blogging platform with a markdown editor, theming, pagination, and full CRUD capabilities. Pagination & filtering API for efficient access of blogs.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    features: [
      "Rich text editor with image upload",
      "Dark/light theme toggle",
      "Paginated and searchable blogs",
      "Filteration and search features",
      "Responsive UI Design",
    ],
  },
  {
    id: 5,
    name: "Photography Portfolio with Animations",
    images: [
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209481/Screenshot_127_fn5vyi.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209481/Screenshot_128_mlcwte.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209481/Screenshot_129_pnfhkb.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209480/Screenshot_130_a5gt4x.png",
    ],
    link: "",
    github: "https://github.com/flukeyzx/Photography-Portfolio",
    description:
      "A visually engaging photography portfolio using React and Framer Motion, designed for creative professionals.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Styled Components"],
    features: [
      "Smooth scroll-based animations",
      "Photo gallery with modal preview",
      "Responsive and elegant layout",
      "Creative hover effects and transitions",
    ],
  },
  {
    id: 6,
    name: "Servis Local Shoes Brand UI/UX Design",
    images: [
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209603/Screenshot_94_jugdwz.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209604/Screenshot_95_botp0b.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209603/Screenshot_96_xjugw7.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209605/Screenshot_97_tyzveu.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209604/Screenshot_98_ijklca.png",
      "https://res.cloudinary.com/dvmyuuouh/image/upload/v1749209604/Screenshot_99_vk9x9r.png",
    ],
    link: "",
    github: "https://github.com/flukeyzx/Servis-Shoes-Landing-Page",
    description:
      "A responsive e-commerce UI for a shoe store inspired by Servis Shoes, built with clean component structure and modern UI/UX.",
    tech: ["React.js", "Tailwind CSS"],
    features: [
      "Hero section with carousel",
      "Product grid with filtering options",
      "Category-based navigation",
      "Add to cart UI flow with animation",
    ],
  },
];
