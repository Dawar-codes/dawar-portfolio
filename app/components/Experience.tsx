"use client";

import { motion } from "framer-motion";
import { experiences } from "../data/data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-12 md:py-12 px-4 sm:px-6 lg:px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-20 text-accent">
        Experience.
        <motion.hr
          className="mt-2 h-[2px] bg-gradient-to-r from-accent to-secondary border-none"
          initial={{ width: "0%", scaleX: 0.8, opacity: 0 }}
          whileInView={{ width: "100%", scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-[#5C8374] to-transparent opacity-30" />

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="relative pl-12 md:pl-20 pb-12 md:pb-16 group"
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.2 + 0.3,
                ease: "backOut",
              }}
              className="absolute left-[7.5px] md:left-[21.5px] top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent border-4 border-[#040D12] shadow-lg group-hover:shadow-accent/50 transition-shadow duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-md animate-pulse" />
            </motion.div>

            {/* Content Card */}
            <div className="relative bg-[#183D3D]/30 backdrop-blur-lg border border-[#5C8374]/30 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl md:shadow-2xl transition-all duration-500 group-hover:bg-[#183D3D]/40 group-hover:border-[#5C8374]/50 group-hover:shadow-accent/10 group-hover:-translate-y-1">

              {/* Header */}
              <div className="mb-4 md:mb-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  className="text-xl md:text-2xl font-bold text-accent mb-1 md:mb-2 group-hover:text-secondary transition-colors duration-300"
                >
                  {experience.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
                >
                  <p className="text-base md:text-lg font-semibold text-text/90">
                    {experience.company}
                  </p>
                  <span className="hidden sm:inline text-[#5C8374]">•</span>
                  <p className="text-sm md:text-base text-text/70 font-medium">
                    {experience.duration}
                  </p>
                </motion.div>
              </div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                className="space-y-1 md:space-y-2"
              >
                {experience.responsibilities.map(
                  (responsibility, respIndex) => (
                    <motion.div
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.7 + respIndex * 0.05,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-3 md:gap-4 group/item"
                    >
                      {/* Custom Bullet */}
                      <div className="flex-shrink-0 mt-2 md:mt-2.5">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-br from-accent to-secondary group-hover/item:scale-125 transition-transform duration-300" />
                      </div>

                      {/* Responsibility Text */}
                      <div className="text-sm md:text-base text-text/80  group-hover/item:text-text/95 transition-colors duration-300">
                        {responsibility}
                      </div>
                    </motion.div>
                  ),
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
