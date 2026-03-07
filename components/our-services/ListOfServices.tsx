"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
    img: "/images/gallery/galleria4.png",
    size: "small",
  },
  {
    id: "02",
    title: "Commercial Interior Design",
    desc: "Designing functional and attractive interiors for businesses including offices, retail spaces and hospitality venues.",
    img: "/images/gallery/galleria18.png",
    size: "large",
  },
  {
    id: "03",
    title: "Interior Design Consultation",
    desc: "Providing professional advice on concepts, color schemes & material selection.",
    img: "/images/gallery/galleria9.png",
    size: "small",
  },
  {
    id: "04",
    title: "Outdoor & Landscape Design",
    desc: "Extending design services to outdoor spaces such as gardens, patios and decks.",
    img: "/images/gallery/galleria21.png",
    size: "large",
  },
  {
    id: "05",
    title: "Renovation And Remodeling",
    desc: "Overhauling existing spaces to modernize and improve functionality and aesthetics.",
    img: "/images/gallery/galleria26.png",
    size: "small",
  },
  {
    id: "06",
    title: "Interior 2D / 3D Layouts",
    desc: "Realistic 3D visualizations to help you envision your space before it's built.",
    img: "/images/gallery/galleria11.png",
    size: "large",
  },
];

export default function ListOfServices() {
  return (
    <section className="bg-[#f7f4e8] py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* badge */}
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#8A7650] mb-6">
          <span className="w-1.5 h-1.5 bg-[#8A7650] rounded-full"></span>
          Our Services
        </div>

        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] max-w-4xl leading-tight">
          Explore Our{" "}
          <span className="text-[#8A7650]">
            Comprehensive Interior Design
          </span>{" "}
          Services
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mt-16">

          {services.map((service, index) => {

            const imageHeight =
              service.size === "large"
                ? "h-[320px]"
                : "h-[220px]";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >

                {/* image */}
                <div
                  className={`relative w-full ${imageHeight} rounded-3xl overflow-hidden shadow-md`}
                >

                  {/* number */}
                  <span className="absolute top-4 left-4 text-white text-xl font-semibold z-10">
                    {service.id}
                  </span>

                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                {/* title */}
                <h3 className="mt-6 text-xl font-semibold text-[#1E1E1E]">
                  {service.title}
                </h3>

                {/* description */}
                <p className="mt-2 text-sm text-[#1E1E1E]/70 leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}