"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionBadge from "../layout/SectionBadge";

const services = [
  {
    id: "01",
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
    img: "/images/projects/wadhwa-wise-city/4.jpeg",
  },
  {
    id: "02",
    title: "Commercial Interior Design",
    desc: "Designing functional and attractive interiors for businesses including offices, retail spaces and hospitality venues.",
    img: "/images/projects/hdfc-bank/3.jpeg",
  },
  {
    id: "03",
    title: "Interior Design Consultation",
    desc: "Providing professional advice on concepts, color schemes & material selection.",
    img: "/images/service-images/services7.jpg",
  },
  {
    id: "04",
    title: "Outdoor & Landscape Design",
    desc: "Extending design services to outdoor spaces such as gardens, patios and decks.",
    img: "/images/projects/prince-tower/2.jpeg",
  },
  {
    id: "05",
    title: "Renovation And Remodeling",
    desc: "Overhauling existing spaces to modernize and improve functionality and aesthetics.",
    img: "/images/projects/kalpatru-lobby/1.jpeg",
  },
  {
    id: "06",
    title: "Interior 2D / 3D Layouts",
    desc: "Realistic 3D visualizations to help you envision your space before it's built.",
    img: "/images/service-images/3D.jpeg",
  },
];

export default function ServicesHorizontalScroll() {
  const duplicated = [...services, ...services];

  return (
    <section className="bg-[#f7f4e8] py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* badge */}
        <div className="flex items-center gap-2 mb-4">
          <SectionBadge
            text="what we offer"
            textColor="text-[#C6A76A]"
            borderColor="border-[#C6A76A]"
            dotColor="bg-[#C6A76A]"
          />
        </div>

        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] max-w-4xl leading-tight">
          Explore Our <span className="text-[#8A7650]">Interior Design</span>{" "}
          Services
        </h2>
      </div>

      {/* gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f7f4e8] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f7f4e8] to-transparent z-10 pointer-events-none" />

      {/* scrolling track */}
      <motion.div
        className="flex gap-10 px-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((service, index) => (
          <div
            key={index}
            className="group relative w-[320px] sm:w-[360px] md:w-[420px] flex-shrink-0"
          >
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* large number */}
              <span className="absolute top-6 left-6 text-white text-4xl md:text-5xl font-bold tracking-wide">
                {service.id}
              </span>

              {/* text content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
