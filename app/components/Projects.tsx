"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import ProjectCard from "./ui/ProjectCard";
import { projectData, projectFilters, type ProjectCategory } from "../data/data";

const Projects = () => {
  const hrRef = useRef(null);
  const isInView = useInView(hrRef, { once: true });
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const visible =
    filter === "all" ? projectData : projectData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-accent">
        Projects.
        <motion.hr
          ref={hrRef}
          className="mt-2 h-[2px] bg-gradient-to-r from-accent to-secondary border-none"
          initial={{ width: "0%", scaleX: 0.8, opacity: 0 }}
          animate={isInView ? { width: "100%", scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
        {projectFilters.map(({ key, label }) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`relative rounded-full px-4 py-1.5 text-sm md:text-base transition-colors cursor-pointer border ${
                active
                  ? "text-white border-accent"
                  : "text-text border-[#5C8374]/30 hover:text-white hover:border-[#5C8374]/60"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-surface/70"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid justify-center gap-6 max-w-6xl mx-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
        }}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
