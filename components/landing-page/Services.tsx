"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Imported Wallpapers",
    image: "/images/service-images/services1.jpg",
    description:
      "Premium imported wallpapers curated to elevate residential and commercial interiors.",
  },
  {
    id: 2,
    title: "All Types of Blinds",
    image: "/images/service-images/services2.jpg",
    description:
      "Custom blinds that balance light control, privacy, and aesthetic harmony.",
  },
  {
    id: 3,
    title: "Wooden Flooring",
    image: "/images/service-images/services3.jpg",
    description:
      "Elegant wooden flooring solutions crafted for warmth and durability.",
  },
  {
    id: 4,
    title: "Suncontrol Film",
    image: "/images/service-images/services4.png",
    description:
      "Advanced sun control films designed to reduce heat and enhance comfort.",
  },
  {
    id: 5,
    title: "Vinyl Flooring",
    image: "/images/service-images/services5.jpg",
    description:
      "Durable and stylish vinyl flooring solutions for modern interiors.",
  },
  {
    id: 6,
    title: "Decorative Film",
    image: "/images/service-images/services6.jpg",
    description:
      "Decorative films that add privacy and elegance to glass surfaces.",
  },
  {
    id: 7,
    title: "All Interior Works",
    image: "/images/service-images/services7.jpg",
    description:
      "Complete interior solutions delivered with precision and craftsmanship.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="bg-[#f7f4e8] py-28" id="services">
      <div className="mx-auto max-w-7xl px-6">

        {/* SECTION HEADING */}
        <div className="max-w-3xl mb-10">
          <p className="uppercase tracking-[0.25em] text-xs text-[#8E977D]">
            What We Offer
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1E1E1E]">
          Explore Our Wide Range of <span className="text-[#8A7650]">Services</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — IMAGE PANEL */}
          <div className="relative h-140 rounded-3xl overflow-hidden shadow-xl">

            <Image
              key={activeService.image}
              src={activeService.image}
              alt={activeService.title}
              fill
              className="object-cover transition-opacity duration-500"
            />

            {/* Overlay Intro */}
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-white p-6 rounded-2xl max-w-md transition-all duration-300">
              <p className="text-sm leading-relaxed">
                {activeService.description}
              </p>
            </div>

          </div>

          {/* RIGHT — SERVICES LIST */}
          <div className="space-y-6">

            {services.map((service, index) => {
              const isActive = activeService.id === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  className="group flex items-center justify-between py-4 border-b border-[#8A7650]/20 cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center gap-6">

                    <span className="text-[#8A7650]/50 text-sm font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`text-2xl md:text-3xl font-semibold transition-colors duration-300 ${
                        isActive
                          ? "text-[#8A7650]"
                          : "text-[#1E1E1E] group-hover:text-[#8A7650]"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-[#8A7650]"
                        : "text-[#1E1E1E]/40 group-hover:text-[#8A7650]"
                    }`}
                  />
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}