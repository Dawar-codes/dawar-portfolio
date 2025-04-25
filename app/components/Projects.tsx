"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectCard from "./ui/ProjectCard";
import { projectData } from "../data/data";

const Projects = () => {
  const hrRef = useRef(null);
  const isInView = useInView(hrRef, { once: true });

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-20 text-accent">
        Projects.
        <motion.hr
          ref={hrRef}
          className="mt-2 h-[2px] bg-gradient-to-r from-accent to-secondary border-none"
          initial={{ width: "0%", scaleX: 0.8, opacity: 0 }}
          animate={isInView ? { width: "100%", scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </h2>
      <div
        className="grid justify-center gap-6 max-w-6xl mx-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
