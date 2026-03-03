"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    id: 1,
    value: "360+",
    label: "Successful Projects",
    bullets: [
      "Tech Specifications",
      "Design Projects",
      "3D Visualization",
    ],
    image: "/images/g3.png",
  },
  {
    id: 2,
    value: "23+",
    label: "Years Of Experience",
    bullets: [
      "Residential Interiors",
      "Commercial Spaces",
      "Turnkey Execution",
    ],
    image: "/images/g2.png",
  },
  {
    id: 3,
    value: "250+",
    label: "Happy Clients",
    bullets: [
      "Client Satisfaction",
      "Long-Term Partnerships",
      "Premium Finishes",
    ],
    image: "/images/g4.png",
  },
];

export default function AboutHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === stats.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeStat = stats[activeIndex];

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

        {/* Heading */}
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

        {/* FLOATING GROUP */}
        <div className="absolute right-6 md:right-20 bottom-10 md:bottom-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="flex gap-6 items-stretch"
            >
              {/* SHARED HEIGHT WRAPPER */}
              <div className="h-[180px] md:h-[280px] flex gap-6">

                {/* STAT CARD */}
                <div
                  className="
                    w-[260px] md:w-[300px]
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
                  <h3 className="text-5xl font-extrabold text-[#8A7650]">
                    {activeStat.value}
                  </h3>

                  <p className="mt-2 font-medium text-white/80">
                    {activeStat.label}
                  </p>

                  <div className="mt-12 space-y-2 font-bold text-white">
                    {activeStat.bullets.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>

                {/* IMAGE CARD */}
                <div
                  className="
                    relative
                    w-[220px] md:w-[260px]
                    h-full
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    border border-white/20
                  "
                >
                  <Image
                    src={activeStat.image}
                    alt={activeStat.label}
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}