"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export function BrandShowcase() {
  return (
    <section className="relative min-h-225 flex items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/bg.jpg"
        alt="Background Interior"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gold Light Gradient Accent */}
      <div className="absolute inset-0 bg-linear-to-br from-[#8A7650]/20 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A7650]">
              Established 1991
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              Where Spaces Inspire, &{" "}
              <span className="text-[#8A7650]">
                Design Comes Alive
              </span>
            </h2>

            {/* Feature bullets */}
            <div className="mt-10 grid grid-cols-2 gap-y-4 text-white/90">

              <div className="flex items-center gap-3">
                <Check size={18} className="text-[#8A7650]" />
                Latest Technologies
              </div>

              <div className="flex items-center gap-3">
                <Check size={18} className="text-[#8A7650]" />
                High-Quality Designs
              </div>

              <div className="flex items-center gap-3">
                <Check size={18} className="text-[#8A7650]" />
                5 Years Warranty
              </div>

              <div className="flex items-center gap-3">
                <Check size={18} className="text-[#8A7650]" />
                Residential & Commercial
              </div>

            </div>

            <p className="mt-8 text-white/70 max-w-lg leading-relaxed">
              Whether it&apos;s your home, office, or commercial space,
              we create environments that reflect purpose, elegance,
              and timeless sophistication.
            </p>

            <button className="mt-10 flex items-center gap-3 bg-[#8A7650] text-white px-8 py-4 rounded-lg hover:bg-[#6f5f40] transition-all duration-500">
              MORE ABOUT US
              <ArrowUpRight size={18} />
            </button>
          </motion.div>

          {/* RIGHT FLOATING IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
              <Image
                src="/images/sample.jpg"
                alt="Luxury Interior"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* STATS */}
        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-white/10 pt-14 text-white">

          <Stat number="30+" label="Years of Experience" />
          <Stat number="450+" label="Projects Completed" />
          <Stat number="380+" label="Clients Satisfied" />
          <Stat number="120+" label="Landscapes Transformed" />

        </div>

      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-semibold text-[#8A7650]">
        {number}
      </div>
      <p className="mt-3 text-sm uppercase tracking-widest text-white/70">
        {label}
      </p>
    </div>
  );
}