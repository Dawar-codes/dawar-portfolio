'use client';

import { BackgroundBeams } from "./ui/BackgroundBeams";
import Button from "./ui/Button";
import ScrollDownIcon from "./ui/ScrollDownIcon";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

import { motion } from "framer-motion";

const words = "In the space between logic and light, I build.";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-start justify-center px-4 overflow-hidden relative">

        <TextGenerateEffect
          words={words}
          className="text-4xl md:text-6xl font-bold text-text"
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
          Hi, I am Dawar, a Full Stack Developer
        </motion.h2>

        {/* Button motion */}
        <motion.a href="#projects"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          <Button title="Show my work" />
        </motion.a>

        
      </div>
      <BackgroundBeams className="-z-10" />
      <ScrollDownIcon />
    </>
  );
};

export default Hero;
