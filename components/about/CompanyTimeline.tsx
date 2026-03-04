"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timeline = [
  {
    year: "2003",
    title: "Company Founded",
    description:
      "Established with a vision to craft timeless interiors blending functionality and artistry.",
  },
  {
    year: "2008",
    title: "First Major Commercial Project",
    description:
      "Successfully delivered large-scale commercial interiors across Mumbai.",
  },
  {
    year: "2013",
    title: "Expansion & Growth",
    description:
      "Expanded into luxury residential interiors and turnkey solutions.",
  },
  {
    year: "2018",
    title: "200+ Projects Milestone",
    description:
      "Achieved a major milestone of delivering over 200 successful projects.",
  },
  {
    year: "2023",
    title: "20+ Years of Excellence",
    description:
      "Celebrating two decades of craftsmanship, innovation, and client trust.",
  },
];

export default function CompanyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === timeline.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeItem = timeline[activeIndex];

  return (
    <section className="bg-[#f7f4e8] py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-xs text-[#8E977D]">
            Our Journey
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-[#1E1E1E]">
            Since <span className="text-[#8A7650]">2003</span>
          </h2>
        </div>

        {/* Timeline Line */}
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#8A7650]/20 -translate-y-1/2" />

          <div className="relative flex justify-between">
            {timeline.map((item, index) => (
              <button
                key={item.year}
                onClick={() => setActiveIndex(index)}
                className="relative flex flex-col items-center group"
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#8A7650] scale-125"
                      : "bg-[#8A7650]/40 group-hover:bg-[#8A7650]"
                  }`}
                />

                <span
                  className={`mt-4 text-sm transition-colors duration-300 ${
                    index === activeIndex
                      ? "text-[#8A7650]"
                      : "text-[#1E1E1E]/50"
                  }`}
                >
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Content */}
        <div className="relative min-h-[180px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.year}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1E1E1E]">
                {activeItem.title}
              </h3>

              <p className="mt-6 text-[#1E1E1E]/70 leading-relaxed">
                {activeItem.description}
              </p>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}