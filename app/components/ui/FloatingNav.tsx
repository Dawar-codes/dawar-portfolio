"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Start as visible
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  useMotionValueEvent(scrollYProgress, "change", () => {
    const currentScrollY = window.scrollY; // Get the current scroll position

    if (currentScrollY < 50) {
      // Always show the navbar when near the top
      setVisible(true);
    } else if (currentScrollY > lastScrollY) {
      // Hide the navbar when scrolling down
      setVisible(false);
    } else if (currentScrollY < lastScrollY - 20) {
      // Show the navbar when scrolling up after a certain threshold
      setVisible(true);
    }

    setLastScrollY(currentScrollY); // Update the last scroll position
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
       initial={{
        opacity: 0,
        y: -100, // Start off-screen above the viewport
      }}
      animate={{
        opacity: 1,
        y: visible ? 0 : -100, // Move out of view when not visible
      }}
      exit={{
        opacity: 0,
        y: -100, // Exit animation when removed
      }}
      transition={{
        duration: 0.5, // Adjust the duration for smooth animation
      }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] bg-black/50 backdrop-blur-md rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-3 md:py-3 md:px-4 lg:px-8 md:gap-4 items-center justify-center space-x-4",
          
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "text-cyan-50 items-center flex space-x-1 hover:text-text  transition-colors duration-200 ease-in-out",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" inline-block bg-transparent text-sm md:text-base lg:text-lg !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        
      </motion.div>
    </AnimatePresence>
  );
};