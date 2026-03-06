"use client";

import { useEffect, useRef, useState } from "react";
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

function Counter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 3000;
    let startTime: number | null = null;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOut(progress);

      setCount(Math.floor(target * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

  }, [start, target]);

  return <span>{count}</span>;
}


export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#f7f4e8] py-22">
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* STATS */}
          <div className="grid grid-cols-2 gap-10">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  visible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* NUMBER */}
                <motion.h3
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  animate={
                    visible
                      ? { filter: "blur(0px)", opacity: 1 }
                      : {}
                  }
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold text-[#8a7650]"
                >
                  <Counter target={stat.value} start={visible} />
                  {stat.suffix}
                </motion.h3>

                {/* GOLD LINE */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={visible ? { width: 48 } : {}}
                 transition={{ duration: 1.6, delay: 0.4 }}
                  className="h-0.5 bg-[#3c3323] my-4"
                />

                <h4 className="text-lg font-semibold text-[#1E1E1E]">
                  {stat.title}
                </h4>

                <p className="mt-2 text-sm text-[#1E1E1E]/70 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}

          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
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