"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    value: 23,
    suffix: "+",
    title: "Years Experience",
    description:
      "Improving homes with expert craftsmanship for years",
  },
  {
    value: 190,
    suffix: "+",
    title: "Projects Completed",
    description:
      "Successful projects delivered with quality and care",
  },
  {
    value: 260,
    suffix: "+",
    title: "Skilled Tradespeople",
    description:
      "Our expert team ensures exceptional project results",
  },
  {
    value: 328,
    suffix: "+",
    title: "Client Satisfaction",
    description:
      "Our clients trust us for consistent quality and service",
  },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    const interval = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
}

export default function Stats() {
  return (
    <section className="bg-[#f7f4e8] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#8A7650] uppercase">
            <span className="w-1.5 h-1.5 bg-[#8A7650] rounded-full"></span>
            Trusted Experience
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-tight">
            Behind Every <span className="text-[#8A7650]">Statistic</span>
            <br />
            Pulses A Human Story
          </h2>

          <p className="mt-6 text-[#1E1E1E]/70 leading-relaxed">
            We believe every space tells a story. Our journey began with a
            simple yet powerful mission: transforming ordinary spaces into
            extraordinary experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* STATS LEFT */}
          <div className="grid grid-cols-2 gap-10">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#1E1E1E]">
                  <Counter target={stat.value} />
                  {stat.suffix}
                </h3>

                <div className="w-12 h-[2px] bg-[#8A7650] my-4"></div>

                <h4 className="text-lg font-semibold text-[#1E1E1E]">
                  {stat.title}
                </h4>

                <p className="mt-2 text-sm text-[#1E1E1E]/70 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}

          </div>

          {/* IMAGE RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/gallery/galleria24.png"
              alt="Interior"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}