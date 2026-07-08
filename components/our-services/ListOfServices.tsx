"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionBadge from "../layout/SectionBadge";

const services = [
  {
    id: "01",
    title: "Residential Interior Design",
    desc: "End-to-end design and execution for homes and apartments, from single-room makeovers to full turnkey fit-outs.",
    img: "/images/projects/wadhwa-wise-city/4.jpeg",
  },
  {
    id: "02",
    title: "Commercial Interior Design",
    desc: "Functional, on-brand interiors for offices, banks, retail, and hospitality spaces.",
    img: "/images/projects/hdfc-bank/3.jpeg",
  },
  {
    id: "03",
    title: "Complete Turnkey Execution",
    desc: "Full civil and finishing works handled in-house — masonry, tiling, flooring, false ceilings, and electrical.",
    img: "/images/projects/anmol/3.jpeg",
  },
  {
    id: "04",
    title: "Outdoor & Landscape Design",
    desc: "Gardens, terraces, patios, and decks designed as considered extensions of your interiors.",
    img: "/images/projects/prince-tower/2.jpeg",
  },
  {
    id: "05",
    title: "Renovation And Remodeling",
    desc: "Reworking and modernising existing spaces to improve flow, function, and aesthetics.",
    img: "/images/projects/kalpatru-lobby/1.jpeg",
  },
  {
    id: "06",
    title: "Interior Consultation, 2D/3D Visualization",
    desc: "Professional guidance on concepts, colour, and materials, with realistic 3D visuals before work begins.",
    img: "/images/service-images/3D.jpeg",
  },
  {
    id: "07",
    title: "Wallpapers & Wall Finishes",
    desc: "Imported wallpapers, textures, and feature-wall finishes that add character to any room.",
    img: "/images/projects/72-parksyde/8.jpeg",
  },
  {
    id: "08",
    title: "Modular Furniture & Carpentry",
    desc: "Imported wallpapers, textures, and feature-wall finishes that add character to any room.",
    img:  "/images/projects/wadhwa-anmol/5.jpeg",
  },
];

export default function ServicesHorizontalScroll() {
  const duplicated = [...services, ...services];

  return (
    <section className="bg-[#f7f4e8] py-12 overflow-hidden relative" id="service-list">
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
