'use client';

import { BackgroundBeams } from "./ui/BackgroundBeams";
import Button from "./ui/Button";
import ScrollDownIcon from "./ui/ScrollDownIcon";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

import { motion } from "framer-motion";
import { TbDownload, TbPlayerPlay } from "react-icons/tb";

import { RESUME_URL, VIDEO_CV_URL } from "../data/data";

const words = "In the space between logic and light, I build.";

const secondaryBtn =
  "flex items-center gap-2 rounded-lg border border-[#5C8374]/50 bg-bg/60 px-4 sm:px-5 py-2 text-xs sm:text-sm md:text-base font-semibold text-text hover:text-emerald-200 hover:border-accent hover:bg-surface/40 transition-colors";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center sm:items-start justify-center px-4 overflow-hidden relative">

        <TextGenerateEffect
          words={words}
          className="text-4xl md:text-6xl text-center sm:text-start font-bold text-text"
          filter={true}
          duration={0.5}
        />

       {/* h2 motion */}
       <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="md:tracking-wider mb-6 text-lg md:text-2xl"
        >
          Hi, I am Dawar, a Full Stack AI Engineer
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="flex flex-wrap items-center justify-center sm:justify-start gap-3"
        >
          <a href="#projects">
            <Button title="Show my work" />
          </a>
          <a
            href={RESUME_URL}
            download
            className={secondaryBtn}
          >
            <TbDownload className="text-base" /> Resume
          </a>
          <a
            href={VIDEO_CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryBtn}
          >
            <TbPlayerPlay className="text-base" /> Video CV
          </a>
        </motion.div>

        
      </div>
      <BackgroundBeams className="-z-10" />
      <ScrollDownIcon />
    </>
  );
};

export default Hero;
