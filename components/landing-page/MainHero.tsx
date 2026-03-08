"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/gallery/galleria14.png",
 
  "/images/gallery/galleria26.png",
   "/images/gallery/galleria15.png",
  "/images/gallery/galleria20.png",
  
];

//26, 14, 20

export default function MainHero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => prev * -1); // alternate direction
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden">
      {/* Background images */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Interior"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          {/* badge */}
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase border border-white/20 rounded-full px-4 py-2 text-white/80 mb-6">
            <span className="w-1.5 h-1.5 bg-[#C6A76A] rounded-full"></span>
            Trusted Design Partner
          </div>

          {/* heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Find Your <span className="text-[#C6A76A]">Inspired</span>
            <br />
            <span className="text-[#C6A76A]">Interior</span> Design
          </h1>

          {/* description */}
          <p className="mt-6 text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            Transform your vision into reality with our innovative designs,
            creating modern spaces that blend functionality, aesthetics, and
            sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
