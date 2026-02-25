"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Compass, Ruler, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Architectural Vision",
    description:
      "We transform concepts into structured, functional environments that balance aesthetics with precision engineering.",
    icon: Compass,
  },
  {
    title: "Interior Mastery",
    description:
      "From material selection to lighting harmony, we curate spaces that feel intentional, refined, and deeply personal.",
    icon: Layers,
  },
  {
    title: "Precision Planning",
    description:
      "Every measurement, material, and layout decision is refined to ensure seamless project execution.",
    icon: Ruler,
  },
];

export function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Multi-plane parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="relative bg-[#ECE7D1] py-36 overflow-hidden">
      {/* Depth Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Depth Glow */}
        <motion.div
          style={{ y: bgY }}
          className="absolute -top-40 -left-40
               h-[400px] w-[400px]
               rounded-full
               bg-[#795107]/35
               blur-[50px]"
        />

        {/* Bottom Right Depth Glow */}
        <motion.div
          style={{ y: bgY }}
          className="absolute -bottom-24 -right-24
               h-[350px] w-[350px]
               rounded-full
               bg-[#8d610e]/35
               blur-[70px]"
        />

        {/* Soft radial center wash */}
        <div
          className="absolute inset-0
                  bg-linear-to-br
                  from-white/10
                  via-transparent
                  to-[#8A7650]/10"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* LEFT TEXT */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-[#8E977D]">
              WHO WE ARE
            </p>

            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-[#1E1E1E]">Experience</span>{" "}
              <span className="text-[#8A7650]">The Art Of Interior</span>{" "}
              <span className="text-[#1E1E1E]">Design</span>
            </h2>

            <p className="mt-10 text-lg text-[#8A7650]/80 max-w-xl leading-relaxed">
              We specialize in transforming architectural visions into tangible
              experiences. Every line, texture, and proportion is curated to
              create environments defined by clarity and elegance.
            </p>

            <Button className="mt-12 rounded-lg bg-[#8A7650] text-[#ECE7D1] hover:bg-[#453c2a] px-10 py-6">
              LEARN MORE
            </Button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/interior.jpg"
              alt="Interior Studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Architectural frame */}
            <div
              className="absolute -bottom-6 -right-6 
                            h-full w-full 
                            border border-[#8A7650]/25 
                            rounded-2xl -z-10"
            />
          </motion.div>
        </div>

        {/* CARDS */}
        <motion.div
          className="mt-32 grid md:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0.3, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                }}
                className="
                  bg-white/60
                  backdrop-blur-md
                  border border-[#8A7650]/15
                  rounded-2xl
                  p-12
                  transition-all
                  duration-500
                  hover:shadow-xl
                "
              >
                <div className="flex items-center gap-4">
                  <Icon className="text-[#8A7650]" size={24} />
                  <h3 className="text-xl font-semibold text-[#8A7650] tracking-wide">
                    {card.title}
                  </h3>
                </div>

                <div className="mt-6 h-px w-14 bg-[#8A7650]/30" />

                <p className="mt-6 text-[#8A7650]/80 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
