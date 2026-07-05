"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "../layout/SectionBadge";

const services = [
  {
    id: 1,
    title: "Residential Interior Design",
    image: "/images/projects/72-parksyde/6.jpeg",
    description:
      "End-to-end design and execution for homes and apartments, from single-room makeovers to full turnkey fit-outs.",
  },
  {
    id: 2,
    title: "Commercial Interior Design",
    image: "/images/projects/ami-polymer/1.jpeg",
    description:
      "Functional, on-brand interiors for offices, banks, retail, and hospitality spaces.",
  },
  {
    id: 3,
    title: "Imported Wallpapers & Wall Finishes",
    image: "/images/projects/72-parksyde/8.jpeg",
    description:
      "Premium imported wallpapers curated to elevate residential and commercial interiors.",
  },
  {
    id: 4,
    title: "Interior Consultation, 2D/3D Visualization",
    image: "/images/service-images/services7.jpg",
    description:
      "Professional guidance on concepts, colour, and materials, with realistic 3D visuals before work begins.",
  },
  {
    id: 5,
    title: "Modular Furniture & Carpentary",
    image: "/images/projects/wadhwa-anmol/5.jpeg",
    description:
      "Imported wallpapers, textures, and feature-wall finishes that add character to any room.",
  },
  {
    id: 6,
    title: "Renovation And Remodeling",
    image: "/images/projects/kalpatru-lobby/1.jpeg",
    description: "Reworking and modernising existing spaces to improve flow, function, and aesthetics.",
  },
  {
    id: 7,
    title: "Outdoor & Landscape Design",
    image: "/images/projects/prince-tower/2.jpeg",
    description: "Gardens, terraces, patios, and decks designed as considered extensions of your interiors.",
    
  },
  {
    id: 8,
    title: "Complete Turnkey Execution",
    description: "Full civil and finishing works handled in-house — masonry, tiling, flooring, false ceilings, and electrical.",
    image: "/images/projects/anmol/3.jpeg",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeService = services[activeIndex];

  // AUTO ROTATE
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-[#f7f4e8] py-10" id="services">
      <div className="mx-auto max-w-7xl px-6">
        {/* SECTION HEADING */}
        <div className="max-w-3xl mb-14">
          <SectionBadge
            text="what we offer"
            textColor="text-[#C6A76A]"
            borderColor="border-[#C6A76A]"
            dotColor="bg-[#C6A76A]"
          />

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1E1E1E]">
            Explore Our Wide Range of{" "}
            <span className="text-[#8A7650]">Services</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-15 items-center">
          {/* LEFT IMAGE PANEL */}
          <div
            className="
              relative
              h-[420px]
              sm:h-[500px]
              lg:h-[700px]
              rounded-[32px]
              overflow-hidden
              shadow-xl
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* DESCRIPTION */}
            <motion.div
              key={activeService.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                absolute
                bottom-6
                left-6
                right-6

                bg-black/40
                backdrop-blur-md

                text-white

                p-6
                rounded-2xl
              "
            >
              <p className="text-sm md:text-base leading-relaxed max-w-md">
                {activeService.description}
              </p>
            </motion.div>
          </div>

          {/* RIGHT SERVICES */}
          <div
            className="space-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="
  group
  relative

  px-6
  md:px-8

  py-7
  md:py-8

  border-b
  border-[#8A7650]/15

  cursor-pointer
  overflow-hidden

  rounded-[28px]

  transition-all
  duration-300
"
                >
                  {/* ACTIVE BG */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="
                      absolute
                      inset-0
                      bg-[#8A7650]/5
                      rounded-2xl
                    "
                  />

                  {/* PROGRESS LINE */}
                  {/* {isActive && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 3.5,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        bg-[#8A7650]
                      "
                    />
                  )} */}

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {/* NUMBER */}
                      <span
                        className={`
                          text-sm
                          font-medium
                          transition-all
                          duration-300

                          ${isActive ? "text-[#8A7650]" : "text-[#8A7650]/40"}
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* TITLE */}
                      <h3
                        className={`
                          text-lg
                          md:text-xl
                          font-semibold
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "text-[#8A7650] translate-x-2"
                              : "text-[#1E1E1E] group-hover:text-[#8A7650]"
                          }
                        `}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* ICON */}
                    <ArrowUpRight
                      size={22}
                      className={`
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "text-[#8A7650] rotate-45"
                            : "text-[#1E1E1E]/30 group-hover:text-[#8A7650]"
                        }
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
