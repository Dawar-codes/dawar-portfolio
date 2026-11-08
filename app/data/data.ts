import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiTypescript,
  SiHtml5,
  SiFramer,
  SiBootstrap,
  SiExpress,
  SiPrisma,
  SiGooglegemini,
  SiPython,
  SiPytest,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import {
  TbLayout,
  TbServer,
  TbDatabase,
  TbRobot,
  TbTestPipe,
  TbTools,
  TbTopologyStar3,
  TbMail,
  TbBinaryTree,
  TbWebhook,
} from "react-icons/tb";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const RESUME_URL = "/Muhammad-Dawar-Resume.pdf";
export const VIDEO_CV_URL = "https://www.youtube.com/watch?v=IwEX0SMATxI";

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

export const stats = [
  { value: "70%", label: "less manual outreach with n8n + AI" },
  { value: "80%", label: "engagement boost from the Resume Analyzer" },
  { value: "60%", label: "faster regression testing with Playwright" },
  { value: "40%", label: "better retrieval accuracy with RAG" },
];

type Skill = { name: string; icon?: IconType; color?: string };
export type SkillGroup = { title: string; icon: IconType; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: TbLayout,
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
      { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-400" },
    ],
  },
  {
    title: "Backend",
    icon: TbServer,
    skills: [
      { name: "Node.js", icon: DiNodejs, color: "text-[#54a244]" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-white" },
    ],
  },
  {
    title: "Databases",
    icon: TbDatabase,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "MongoDB", icon: BiLogoMongodb, color: "text-[#00e661]" },
    ],
  },
  {
    title: "AI & Automation",
    icon: TbRobot,
    skills: [
      { name: "n8n", icon: TbTopologyStar3, color: "text-[#ea4b71]" },
      { name: "Gemini API", icon: SiGooglegemini, color: "text-blue-300" },
      { name: "RAG / Pinecone", icon: TbBinaryTree, color: "text-emerald-300" },
      { name: "Email Automation", icon: TbMail, color: "text-amber-300" },
      { name: "Webhooks & APIs", icon: TbWebhook, color: "text-rose-300" },
    ],
  },
  {
    title: "Testing & QA",
    icon: TbTestPipe,
    skills: [
      { name: "Playwright", icon: TbTestPipe, color: "text-green-400" },
      { name: "Python", icon: SiPython, color: "text-yellow-300" },
      { name: "Pytest", icon: SiPytest, color: "text-sky-300" },
      { name: "Jest", icon: SiJest, color: "text-red-400" },
      {
        name: "React Testing Library",
        icon: SiTestinglibrary,
        color: "text-red-300",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: TbTools,
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Bitbucket", icon: SiBitbucket, color: "text-blue-400" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "Figma", icon: SiFigma, color: "text-pink-400" },
    ],
  },
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

export type ProjectCategory = "web" | "ai";

export type ProjectSlide = { src: string; caption: string };

export type Project = {
  title: string;
  hashtags: string;
  description: string;
  category: ProjectCategory;
  /** Single thumbnail. Omit to show a styled placeholder. */
  src?: string;
  /** Multiple screenshots render as a slider instead of a single thumbnail. */
  slides?: ProjectSlide[];
  live?: string;
  github?: string;
  /** Built at work: shows a badge and explains the missing repo. */
  company?: string;
};

export const projectFilters: { key: "all" | ProjectCategory; label: string }[] =
  [
    { key: "all", label: "All" },
    { key: "web", label: "Web Apps" },
    { key: "ai", label: "AI & Automation" },
  ];

export const projectData: Project[] = [
  {
    title: "Airbnb Clone",
    hashtags: "#Next.js #TypeScript #MongoDB #Prisma #NextAuth #Zustand",
    src: "/images/airbnb.png",
    category: "web",
    live: "https://airstay-psi.vercel.app/",
    github: "https://github.com/Dawar-codes/Airbnb-Clone",
    description:
      "A full-stack Airbnb clone with server-side rendering and API routes. MongoDB with Prisma ORM, NextAuth for secure authentication and Zustand for state management. Features dynamic listings, filtering by location, date & guests, user profiles and bookings.",
  },
  {
    title: "AI Resume Analyzer",
    hashtags: "#Next.js #TypeScript #GeminiAPI #TailwindCSS #FramerMotion",
    category: "ai",
    company: "Emergi Mentors",
    live: "https://emergimentors.com.au/online-resume-analyser",
    description:
      "An online resume analyzer that uses Next.js API routes to process LLM requests. Calculates an ATS score for the target job title, suggests quick wins, compares resumes against FAANG benchmarks and highlights strong and weak areas. Became the highest-traffic page on the site.",
  },
  {
    title: "AI Automation with n8n",
    hashtags: "#n8n #GeminiAPI #Pinecone #Apify #GoogleSheets #Gmail",
    category: "ai",
    company: "Emergi Mentors",
    slides: [
      {
        src: "/images/n8n/lead-generation.png",
        caption: "Lead Generation & AI Email Generation",
      },
      {
        src: "/images/n8n/rag-chatbot.png",
        caption: "Emergi Assistant: RAG Chatbot",
      },
      {
        src: "/images/n8n/email-sender.png",
        caption: "Email Sender with Dynamic 3–5 min Delay",
      },
      {
        src: "/images/n8n/follow-ups.png",
        caption: "Automated Follow-ups",
      },
      {
        src: "/images/n8n/reply-detection.png",
        caption: "Reply & Draft Detection",
      },
      {
        src: "/images/n8n/unsubscribe-handler.png",
        caption: "Unsubscribe / Opt-out Handler",
      },
    ],
    description:
      "Production n8n workflows: an outreach system that scrapes leads via Apify, generates personalized AI emails, sends them with human-like delays, and handles follow-ups, replies and opt-outs. Plus Emergi Assistant, a RAG chatbot using Gemini embeddings and Pinecone.",
  },
  {
    title: "Yak-Leather",
    hashtags: "#React #Redux #Node.js #Express #PostgreSQL #Prisma",
    src: "/images/yak-leather.png",
    category: "web",
    live: "https://yak-leather.netlify.app/",
    github: "https://github.com/Dawar-codes/Ecom-Project-React",
    description:
      "A full-stack e-commerce website with React and Redux on the frontend and Node.js/Express on the backend, using PostgreSQL with Prisma ORM. Features dynamic product listings, cart, secure authentication and order processing.",
  },
  {
    title: "Book Notes Archive",
    hashtags: "#EJS #Node.js #Express.js #PostgreSQL #TailwindCSS",
    src: "/images/book-notes-archive.png",
    category: "web",
    github: "https://github.com/Dawar-codes/book-notes-archive-with-auth",
    description:
      "A personal web app to archive and search summarized notes of books. Features Google OAuth, full CRUD operations, book search, and a clean EJS-powered UI with TailwindCSS.",
  },
];
