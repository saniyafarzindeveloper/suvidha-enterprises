"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectsCard from "./ProjectCard";

export default function ProjectsHero() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#131313] pt-38 pb-18 overflow-visible">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/gallery/galleria4.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Find Your Inspired
                <br />
                <span className="text-[#8A7650]">Interior Design</span>
              </h1>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="lg:pt-10"
            >
              <p className="text-white/70 leading-relaxed max-w-md">
                Whether it&lsquo;s your home, office, or a commercial project,
                we are always dedicated to bringing your vision to life.
              </p>

              <button className="mt-8 inline-flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full text-white hover:bg-[#8A7650] hover:border-[#8A7650] transition-all duration-300">
                Get Our Services
                <span className="w-8 h-8 flex items-center justify-center bg-[#8A7650] rounded-full">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </motion.div>
          </div>

          {/* IMAGE (OVERFLOWING HERO) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-20 -mb-52"
          >
            <div className="relative h-[280px] md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/galleria26.png"
                alt="Interior"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHT SECTION BELOW */}
      <section className="bg-[#f7f4e8] pt-40 pb-20">
       <ProjectsCard />
      </section>
    </>
  );
}
