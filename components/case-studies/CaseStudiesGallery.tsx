"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  title: string;
};

export default function CaseStudyGallery({ images, title }: Props) {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mt-28">
      <div className="mx-auto max-w-6xl px-6">

      {/* <div className="flex items-end justify-between mb-10">
       

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={previous}
            className="h-12 w-12 rounded-full border border-[#DBCEA5] flex items-center justify-center hover:bg-[#8A7650] hover:text-white transition cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="h-12 w-12 rounded-full border border-[#DBCEA5] flex items-center justify-center hover:bg-[#8A7650] hover:text-white transition cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div> */}

      {/* Main Image */}

     <div
  className="
    relative
    overflow-hidden
    rounded-[36px]
    h-[260px]
    sm:h-[360px]
    md:h-[460px]
    lg:h-[560px]
    bg-[#ECE7D1]
  "
>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`${title} ${active + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter */}

        <div className="absolute bottom-6 right-6 rounded-full bg-black/55 backdrop-blur-md px-5 py-2 text-white text-sm">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>
      </div>

      {/* Thumbnails */}

     <div
  className="
    mt-10
    flex
    justify-center
    flex-wrap
    gap-5
  "
>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`relative shrink-0 h-28 w-40 overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
              active === index
                ? "border-[#8A7650] scale-[1.03]"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt={`${title} Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
      </div>
    </section>
  );
}