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
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/muhammaddawar/",
  },
  { name: "Gmail", icon: FaEnvelope, link: "mailto:dawar.malik29@gmail.com" },
];

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
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

export const experiences = [
  {
    title: "Full Stack AI Engineer",
    company: "Emergi Mentors PTY LTD",
    duration: "May 2026 - Present",
    responsibilities: [
      "Own end-to-end delivery of AI-driven products, driving architecture decisions, development, and deployment independently across the full stack.",
      "Rebuilt the internal Admin Panel from a legacy PHP/Blade system to Next.js, delivering a significantly faster, modern UI with smooth animations, integrating a Video Factory, YouTube content generation pipeline, and automated long-video-to-Shorts repurposing system.",
      "Built and maintained an AI-powered email automation workflow covering lead generation, personalized outreach, auto follow-ups, and human-in-the-loop replies using n8n, Gemini AI, and Google Sheets, reducing manual outreach by 70%.",
      "Built a RAG-based chatbot using n8n, Pinecone vector storage, and Gemini API for embeddings and responses, replacing the existing third-party system and improving retrieval accuracy by 40%.",
      "Independently evaluated and proposed technical stack and architecture decisions, contributing directly to engineering direction alongside the lead engineer.",
    ],
  },
  {
    title: "Graduate Full Stack AI Engineer",
    company: "Emergi Mentors PTY LTD",
    duration: "May 2025 - May 2026",
    responsibilities: [
      "Developed and maintained core frontend features using Next.js and React.js, delivering high-performance, responsive UI with consistent bug fixes across the platform.",
      "Built the company's Resume Analyzer tool in Next.js, which became the highest-traffic page on the website, increasing overall engagement by 80% and contributing significantly to lead generation.",
      "Designed and implemented a QA automation suite using Playwright with Python and Pytest for end-to-end testing of booking, payment, and communication flows, reducing regression testing time by 60%.",
      "Built the Career Roadmaps platform in Next.js, integrating backend APIs to deliver structured roadmaps with real-time progress tracking across multiple career fields.",
    ],
  },
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
