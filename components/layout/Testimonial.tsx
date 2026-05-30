"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionBadge from "./SectionBadge";

const testimonials = [
  {
    name: "Mayur Shah",
    role: "Residential Interior • Mumbai",
    feedback:
      "Suvidha transformed our apartment into something timeless and elegant. Every detail felt thoughtfully designed and executed.",
  },

  {
    name: "Ritika Mehta",
    role: "Commercial Interior • Ghatkopar",
    feedback:
      "From planning to execution, the process felt seamless. The team delivered beyond expectations with incredible professionalism.",
  },

  {
    name: "Arjun Patel",
    role: "Office Space • Gujarat",
    feedback:
      "The final outcome perfectly reflected our vision. Clean aesthetics, premium finishes, and excellent coordination throughout.",
  },

  {
    name: "Neha Kapoor",
    role: "Luxury Residence • Powai",
    feedback:
      "Their eye for detail and design sensibility completely elevated our living experience. Highly recommended.",
  },
];

export default function EditorialCarouselTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#f7f4e8] py-20">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8A7650]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADING */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs">
            <SectionBadge
              text="hear it from the clients"
              textColor="text-[#C6A76A]"
              borderColor="border-[#C6A76A]"
              dotColor="bg-[#C6A76A]"
            />
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-[#1E1E1E]">
            Spaces Designed With Precision.
            <br />
            Experiences Remembered With{" "}
            <span className="text-[#8A7650]">Emotion.</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative mt-28 min-h-[420px] md:min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{
                duration: 0.7,
              }}
              className="absolute inset-0"
            >
              {/* HUGE QUOTE */}
              <div
                className="
                  absolute
                  -top-28
                  left-0

                  text-[180px]
                  md:text-[260px]

                  leading-none

                  text-[#8A7650]/6

                  font-serif

                  pointer-events-none
                  select-none
                "
              >
                ”
              </div>

              {/* STARS */}
              <div className="relative z-10 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#8A7650] text-[#8A7650]"
                  />
                ))}
              </div>

              {/* FEEDBACK */}
              <div className="relative z-10 mt-10">
                <p
                  className="
                    max-w-5xl

                    text-2xl
                    md:text-3xl

                    font-semibold

                    leading-[1.2]

                    tracking-[-0.04em]

                    text-[#1E1E1E]
                  "
                >
                  “{activeTestimonial.feedback}”
                </p>
              </div>

              {/* FOOTER */}
              <div
                className="
                  relative
                  z-10

                  mt-14

                  flex
                  flex-col
                  md:flex-row

                  md:items-center
                  md:justify-between

                  gap-8
                "
              >
                <div>
                  <h4 className="text-2xl font-semibold text-[#1E1E1E]">
                    {activeTestimonial.name}
                  </h4>

                  <p className="mt-2 text-sm tracking-[0.2em] uppercase text-[#8A7650]">
                    {activeTestimonial.role}
                  </p>
                </div>

                {/* EDITORIAL LINE */}
                <div className="hidden md:flex items-center gap-4">
                  <div className="h-[1px] w-24 bg-[#8A7650]/30" />

                  <span className="text-[11px] tracking-[0.3em] uppercase text-[#8A7650]/70">
                    Verified Client
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="mt-5 flex items-center justify-between">
          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="
              flex
              items-center
              justify-center
              cursor-pointer
              h-14
              w-14

              rounded-full

              border
              border-[#8A7650]/15

              bg-white/60
              backdrop-blur-md

              text-[#1E1E1E]

              transition-all
              duration-300

              hover:bg-[#8A7650]
              hover:text-white
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* INDICATORS */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  rounded-full
                  transition-all
                  duration-500
                  cursor-pointer
                  ${
                    activeIndex === index
                      ? "w-12 h-2 bg-[#8A7650]"
                      : "w-2 h-2 bg-[#8A7650]/30"
                  }
                `}
              />
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="
              flex
              items-center
              justify-center
              cursor-pointer
              h-14
              w-14
              rounded-full
              border
              border-[#8A7650]/15
              bg-white/60
              backdrop-blur-md
              text-[#1E1E1E]

              transition-all
              duration-300

              hover:bg-[#8A7650]
              hover:text-white
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
