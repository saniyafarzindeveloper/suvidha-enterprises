"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Consultation", desc: "Understanding your space and vision." },
  { title: "Concept Design", desc: "Moodboards and spatial planning." },
  { title: "Execution", desc: "Crafting the interiors with precision." },
  { title: "Final Reveal", desc: "Delivering the finished space." },
];

export default function ProcessHorizontal() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="bg-[#f7f4e8] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-[#1E1E1E] text-center md:text-left">
          Our <span className="text-[#8A7650]">Design Process</span>
        </h2>

        <div className="relative">

          {/* DESKTOP TIMELINE */}
          <motion.div
            style={{ scaleX: lineScale }}
            className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-[#8A7650]/40 origin-left"
          />

          {/* MOBILE TIMELINE */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute md:hidden left-1/2 top-0 bottom-0 w-[2px] bg-[#8A7650]/40 -translate-x-1/2 origin-top"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >

                {/* step dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-[#8A7650] text-white rounded-full flex items-center justify-center mx-auto mb-6 z-10 shadow-lg"
                >
                  {i + 1}
                </motion.div>

                <h3 className="text-lg font-semibold text-[#1E1E1E]">
                  {step.title}
                </h3>

                <p className="text-sm text-[#1E1E1E]/70 mt-2">
                  {step.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}