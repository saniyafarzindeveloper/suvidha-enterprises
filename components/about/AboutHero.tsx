"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/gallery/galleria14.png" // replace with your image
        alt="Interior"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-white/80 border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
            Trusted Design Partner
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl
            font-bold
            leading-[1.05]
            text-white
            max-w-6xl
          "
        >
          Find Your Inspired
          <br />
          <span className="text-white">
            Interior Design
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="
            mt-8
            text-white/80
            max-w-2xl
            text-sm sm:text-base md:text-lg
            leading-relaxed
          "
        >
          Transform your vision into reality with our innovative designs,
          creating modern spaces that blend functionality,
          aesthetics, and sustainability.
        </motion.p>

        {/* Circular CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <Button
            className="
              w-28 h-28 md:w-32 md:h-32
              rounded-full
              bg-white/20
              backdrop-blur-md
              text-white
              cursor-pointer
              font-semibold
              text-sm md:text-base
              flex items-center justify-center
              border border-white/30
              transition-all duration-300
              hover:bg-[#8A7650]
              hover:border-[#8A7650]
            "
          >
            Know 
            <br />
            More
          </Button>
        </motion.div>

      </div>
    </section>
  );
}