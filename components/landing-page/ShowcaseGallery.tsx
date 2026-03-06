"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const topRow = [
  { src: "/images/gallery/galleria11.png", w: 260, h: 160 },
  { src: "/images/gallery/galleria9.png", w: 520, h: 300 },
  { src: "/images/gallery/galleria18.png", w: 320, h: 220 },
  { src: "/images/gallery/galleria21.png", w: 200, h: 160 },
  { src: "/images/gallery/galleria11.png", w: 260, h: 160 },
  { src: "/images/gallery/galleria9.png", w: 520, h: 300 },
  { src: "/images/gallery/galleria18.png", w: 320, h: 220 },
  { src: "/images/gallery/galleria21.png", w: 200, h: 160 },
];

const bottomRow = [
  { src: "/images/gallery/galleria26.png", w: 420, h: 280 },
  { src: "/images/gallery/galleria15.png", w: 320, h: 200 },
  { src: "/images/gallery/galleria4.png", w: 520, h: 260 },
  { src: "/images/gallery/galleria19.png", w: 300, h: 200 },
  { src: "/images/gallery/galleria26.png", w: 420, h: 280 },
  { src: "/images/gallery/galleria15.png", w: 320, h: 200 },
  { src: "/images/gallery/galleria4.png", w: 520, h: 260 },
  { src: "/images/gallery/galleria19.png", w: 300, h: 200 },
];

export default function ShowcaseGallery() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const moveRight = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const moveLeft = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section ref={ref} className="bg-[#f7f4e8] py-24 md:py-32 overflow-hidden">
      <div className="space-y-10 md:space-y-12">
        {/* TOP ROW */}
        <motion.div
          style={{ x: moveRight }}
          className="flex items-center gap-6 md:gap-8 px-4 md:px-6"
        >
          {topRow.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-2xl overflow-hidden shadow-lg"
              style={{
                width: `clamp(180px, 40vw, ${img.w}px)`,
                height: `clamp(120px, 26vw, ${img.h}px)`,
              }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="(max-width:768px) 40vw, 520px"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div
          style={{ x: moveLeft }}
          className="flex items-center gap-6 md:gap-8 px-4 md:px-6"
        >
          {bottomRow.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-2xl overflow-hidden shadow-lg"
              style={{
                width: `clamp(180px, 40vw, ${img.w}px)`,
                height: `clamp(120px, 26vw, ${img.h}px)`,
              }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="(max-width:768px) 40vw, 520px"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
