"use client";

import Image from "next/image";

import { techStack } from "../data/data";

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
          {/* Avatar - Reduced size on mobile */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group w-32 h-32 md:w-48 md:h-48 shrink-0"
          >
            <div className="absolute -inset-1.5 md:-inset-2 rounded-full bg-[#183D3D] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

            <Image
              src="/images/my-picture.jpg"
              width={512}
              height={512}
              alt="Dawar"
              className="w-full h-full rounded-full object-cover relative z-10 border-4 border-[#040D12]"
            />
          </motion.div>

          {/* About Text - Adjusted padding and font sizes */}
          <div className="relative bg-[#183D3D]/30 backdrop-blur-lg border border-[#5C8374]/30 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl md:shadow-2xl">
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-text">
              <TypingText smooth delay={25} repeat={false} text="I&apos;m a full-stack developer who thrives on building practical,
                powerful web applications. JavaScript and TypeScript are at the
                core of what I do—whether I&apos;m working with React, Next.js, or
                Node.js, I make sure everything functions smoothly and
                efficiently.
                I enjoy the process of transforming ideas into
                working products, from crafting clean front-end interfaces to
                developing robust back-end services. Every project is an
                opportunity to learn something new, and I approach each
                challenge with curiosity and precision.
                When I&apos;m not coding, I&apos;m focused on improving my craft and diving deeper into the
                technologies I use every day. Let&apos;s make something great
                together!" />
              <p>
                
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack - Adjusted grid and spacing */}
        <div className="mt-6 md:mt-8 bg-[#183D3D]/30 backdrop-blur-lg border border-[#5C8374]/30 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl md:shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-accent">
            Tech Stack
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 md:gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  className="group relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-xl md:rounded-2xl bg-[#183D3D]/50 border border-[#5C8374]/30 shadow-md md:shadow-lg transition-all duration-300 group-hover:bg-[#5C8374]/20 group-hover:scale-110">
                    <Icon className={`text-2xl md:text-3xl ${tech.color}`} />
                  </div>
                  <span className="mt-1 md:mt-2 text-xs md:text-sm text-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-5 md:-bottom-6">
                    {tech.name}
                  </span>
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
