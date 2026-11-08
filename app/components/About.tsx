"use client";

import Image from "next/image";

import { skillGroups, stats } from "../data/data";

import { motion } from "framer-motion";
import TypingText from "./ui/TypingText";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-20 text-accent">
        About Me.
        <motion.hr
          className="mt-2 h-[2px] bg-gradient-to-r from-accent to-secondary border-none"
          initial={{ width: "0%", scaleX: 0.8, opacity: 0 }}
          whileInView={{ width: "100%", scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </h2>

      <div className="max-w-6xl mx-auto py-6 md:py-10 flex flex-col gap-8 md:gap-12">
        {/* Avatar & Text Container */}
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group w-32 h-32 md:w-48 md:h-48 shrink-0"
          >
            <div className="absolute -inset-1.5 md:-inset-2 rounded-full bg-[#183D3D] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

            <Image
              src="/images/my-dp.png"
              width={512}
              height={512}
              alt="Dawar"
              className="w-full h-full rounded-full object-cover relative z-10 border-4 border-[#040D12]"
            />
          </motion.div>

          <div className="relative bg-[#183D3D]/30 backdrop-blur-lg border border-[#5C8374]/30 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl md:shadow-2xl">
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-text">
              <TypingText
                smooth
                alwaysVisibleCount={0}
                delay={25}
                repeat={false}
                text="I'm a Full Stack AI Engineer at Emergi Mentors, where I build fast, modern web apps with Next.js, React and Node.js and connect them to AI. I've shipped an AI Resume Analyzer that became the company's highest-traffic page, rebuilt a legacy PHP admin panel in Next.js, and built n8n workflows that automate lead generation, personalized outreach and a RAG-powered chatbot. I also make sure things don't break, with end-to-end test suites in Playwright and Pytest. I care about clean, scalable code and turning ideas into products people actually use. Let's build something great together!"
              />
            </div>
          </div>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#183D3D]/30 backdrop-blur-lg border border-[#5C8374]/30 rounded-2xl p-4 md:p-5 text-center hover:border-[#5C8374]/60 transition-colors"
            >
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#7fb8a5] to-emerald-200 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-text">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-[#183D3D]/30 backdrop-blur-lg border border-[#5C8374]/30 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl md:shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-accent">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {skillGroups.map((group, index) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                  className="rounded-xl md:rounded-2xl bg-[#183D3D]/40 border border-[#5C8374]/30 p-4 md:p-5 hover:border-[#5C8374]/60 hover:bg-[#183D3D]/60 transition-colors"
                >
                  <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                    <GroupIcon className="text-accent text-xl md:text-2xl" />
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className="flex items-center gap-1.5 rounded-lg bg-bg/60 border border-[#5C8374]/25 px-2.5 py-1 text-xs md:text-sm text-text hover:text-white hover:scale-105 transition"
                        >
                          {Icon && <Icon className={skill.color} />}
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
