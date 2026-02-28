"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [count, setCount] = useState(0);
  const target = 23;

  // Animated counter
  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const incrementTime = 40;
    const step = target / (duration / incrementTime);

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#ffffff] overflow-hidden py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/*  LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1E1E1E]">
              We Shape{" "}
              <span className="text-[#8A7650]">Interior Designs</span>, Crafting{" "}
              <span className="text-[#8A7650]">Timeless</span> And Inspiring Spaces
            </h1>

            {/* Experience Block */}
            <div className="flex items-end gap-6">

              <div className="text-[90px] md:text-[120px] lg:text-[150px] font-bold text-[#8A7650] leading-none">
                {count}
              </div>

              <div className="pb-6 text-[#1E1E1E]">
                <p className="text-lg font-medium">Years Of</p>
                <p className="text-lg font-medium">Experience</p>
              </div>

            </div>

            {/* Supporting Paragraph */}
            <p className="max-w-xl text-[#8A7650]/80 leading-relaxed text-base md:text-lg">
              With over two decades of expertise, we transform ideas into
              thoughtfully designed spaces that reflect clarity, warmth, and
              architectural precision.
            </p>

            {/* Left Image */}
            <div className="relative h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/interior.jpg"
                alt="Interior space"
                fill
                className="object-cover"
              />
            </div>

          </motion.div>

          {/*  RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-8"
          >

            {/* Main Image */}
            <div className="relative h-[450px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bg2.jpg"
                alt="Modern Architecture"
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-[#8A7650]/80 leading-relaxed text-base md:text-lg">
              We believe that every space has the power to inspire. Our mission
              is to craft environments that evoke emotion, enhance function,
              and reflect the individuality of those who inhabit them.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}