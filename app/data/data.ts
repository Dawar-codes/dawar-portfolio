import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiPostgresql,
    SiTypescript,
  } from "react-icons/si";
  import { BiLogoMongodb } from "react-icons/bi";
  import { DiNodejs } from "react-icons/di";

  import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

  export const socials = [
    { name: "GitHub", icon: FaGithub, link: "https://github.com/Dawar-codes" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/muhammaddawar/" },
    { name: "Gmail", icon: FaEnvelope, link: "mailto:dawar.malik29@gmail.com" },
  ];


  export const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const techStack = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
    { name: "Typescript", icon: SiTypescript, color: "text-[#2b64a9]" },
    { name: "Node.js", icon: DiNodejs, color: "text-[#54a244]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "MongoDB", icon: BiLogoMongodb, color: "text-[#00e661]" },
  ];

  export const projectData = [
    {
      url: "https://yak-leather.netlify.app/",
      title: "Yak-Leather",
      hashtags: "#React #Node.js #PostgreSQL #TailwindCSS",
      src: "/images/yak-leather.png",
      description:
        "A full-stack e-commerce website built with React, Express, and PostgreSQL. Features product listing, cart functionality, form validation, and a clean responsive layout using Tailwind CSS v4.",
    },
    {
      url: "https://airstay-psi.vercel.app/",
      title: "Airbnb Clone",
      hashtags: "#Next.js #NextAuth #MongoDB #TailwindCSS",
      src: "/images/airbnb.png",
      description:
        "An Airbnb-inspired full-stack application where users can list, explore, and book stays. Built with Next.js App Router, integrated with MongoDB and NextAuth for authentication. Includes dynamic routing, filtering by location, date & guest, and secure user accounts.",
    },
    {
      title: "Book Notes Archive",
      hashtags: "#EJS #Node.js #Express.js #PostgreSQL #TailwindCSS",
      src: "/images/book-notes-archive.png",
      description:
        "A personal web app to archive and search summarized notes of books. Features include Google OAuth, full CRUD operations, book search, and a clean EJS-powered UI with TailwindCSS for responsiveness.",
    },
    {
      title: "Tech Blog Application",
      hashtags: "EJS #Node.js #Express.js #Axios #TailwindCSS",
      src: "/images/tech-blog-app.png",
      description:
        "A blog platform for posting and reading developer articles. Uses Node.js and Express for the backend, EJS for templating, and Axios for async API requests. Includes post creation, editing, deletion, and a responsive TailwindCSS-based layout.",
    },
  ];
  
  