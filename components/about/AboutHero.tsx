"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [showFloating, setShowFloating] = useState(true);

  // Toggle floating elements every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFloating((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-[95vh] overflow-hidden">

      {/* Background */}
      <Image
        src="/images/g3.png"
        alt="Interior"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-center">

        

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white max-w-4xl"
        >
          The Art of{" "}
          <span className="text-[#8A7650]">Timeless</span> Interior Design
        </motion.h1>

        <p className="mt-8 text-white/80 max-w-xl text-base md:text-lg leading-relaxed">
          We craft refined environments that balance emotion,
          functionality, and architectural precision.
        </p>

       

        {/* FLOATING GROUP  */}
      <AnimatePresence>
  {showFloating && (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="absolute right-6 md:right-20 bottom-10 md:bottom-24"
    >
      <div className="flex gap-6 items-stretch">

        {/* SHARED HEIGHT WRAPPER */}
        <div className="h-65 md:h-80 flex gap-6">

          {/* STAT CARD */}
          <div
            className="
             w-65 md:w-75
              h-full
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              rounded-3xl
              p-8
              text-white
              shadow-2xl
              flex flex-col justify-center
            "
          >
            <h3 className="text-4xl font-bold text-[#8A7650]">
              360+
            </h3>

            <p className="mt-2 text-white/80">
              Successful Projects
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p>• Tech Specifications</p>
              <p>• Design Projects</p>
              <p>• 3D Visualization</p>
            </div>
          </div>

          {/* IMAGE CARD */}
          <div
            className="
              relative
              w-55 md:w-65
              h-full
              rounded-3xl
              overflow-hidden
              shadow-2xl
              border border-white/20
            "
          >
            <Image
              src="/images/g3.png"
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </section>
  );
}