"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "../layout/SectionBadge";

const images = [
  "/images/projects/kalpatru-aura/1.jpeg",
  "/images/projects/wadhwa-anmol/9.png",
  "/images/projects/prince-tower/2.jpeg",
  "/images/projects/ami-polymer/1.jpeg",
];

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
          <SectionBadge
            text="Trusted Design Partner"
            textColor="text-white/80"
            borderColor="border-white/20"
            dotColor="bg-[#C6A76A]"
          />

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
