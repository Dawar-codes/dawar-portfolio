"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  TbChevronLeft,
  TbChevronRight,
  TbX,
  TbArrowsMaximize,
} from "react-icons/tb";

import type { ProjectSlide } from "@/app/data/data";

const AUTOPLAY_MS = 4000;
const SWIPE_THRESHOLD = 50;

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

interface ImageSliderProps {
  slides: ProjectSlide[];
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides, className }) => {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const paginate = useCallback(
    (dir: number) =>
      setState(([i]) => [(i + dir + slides.length) % slides.length, dir]),
    [slides.length],
  );

  const goTo = (i: number) => setState(([cur]) => [i, i > cur ? 1 : -1]);

  // Auto-play, paused on hover and while the lightbox is open
  useEffect(() => {
    if (paused || lightbox) return;
    const id = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, lightbox, paginate, index]);

  // Keyboard controls + scroll lock in the lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, paginate]);

  const slide = slides[index];

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-bg/70 border border-[#5C8374]/40 text-text hover:text-white hover:bg-surface transition cursor-pointer";

  const dots = (
    <div className="flex justify-center gap-1.5">
      {slides.map((s, i) => (
        <button
          key={s.src}
          type="button"
          aria-label={`Show slide ${i + 1}: ${s.caption}`}
          onClick={(e) => {
            e.stopPropagation();
            goTo(i);
          }}
          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
            i === index ? "w-5 bg-accent" : "w-1.5 bg-[#5C8374]/40 hover:bg-[#5C8374]"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-40 w-full overflow-hidden rounded-xl bg-[#121212] group/slider">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
              else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
            }}
            onTap={() => setLightbox(true)}
            className="absolute inset-0 cursor-zoom-in"
          >
            <Image
              src={slide.src}
              alt={slide.caption}
              fill
              sizes="360px"
              draggable={false}
              className="object-contain select-none pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => paginate(-1)}
          className={`${arrowClass} left-2 w-7 h-7 opacity-80 md:opacity-0 md:group-hover/slider:opacity-100`}
        >
          <TbChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => paginate(1)}
          className={`${arrowClass} right-2 w-7 h-7 opacity-80 md:opacity-0 md:group-hover/slider:opacity-100`}
        >
          <TbChevronRight />
        </button>

        <button
          type="button"
          aria-label="View full screen"
          onClick={() => setLightbox(true)}
          className="absolute top-2 right-2 z-20 flex items-center gap-1 rounded-md bg-bg/70 border border-[#5C8374]/40 px-1.5 py-0.5 text-[10px] text-text hover:text-white transition cursor-pointer"
        >
          <TbArrowsMaximize /> {index + 1}/{slides.length}
        </button>
      </div>

      <p className="mt-2 text-xs text-center text-text truncate">
        {slide.caption}
      </p>
      <div className="mt-1.5">{dots}</div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {lightbox && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
                onClick={() => setLightbox(false)}
                role="dialog"
                aria-modal="true"
                aria-label={slide.caption}
              >
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setLightbox(false)}
                  className="absolute top-4 right-4 text-3xl text-text hover:text-white cursor-pointer"
                >
                  <TbX />
                </button>

                <div
                  className="relative w-full max-w-7xl h-[70vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    key={slide.src}
                    src={slide.src}
                    alt={slide.caption}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                <div
                  className="mt-4 flex flex-col items-center gap-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-base md:text-lg text-white text-center">
                    {slide.caption}{" "}
                    <span className="text-text text-sm">
                      ({index + 1}/{slides.length})
                    </span>
                  </p>
                  {dots}
                </div>

                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(-1);
                  }}
                  className={`${arrowClass} left-2 md:left-6 w-10 h-10 text-2xl`}
                >
                  <TbChevronLeft />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(1);
                  }}
                  className={`${arrowClass} right-2 md:right-6 w-10 h-10 text-2xl`}
                >
                  <TbChevronRight />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
};

export default ImageSlider;
