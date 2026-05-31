"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import SectionBadge from "../layout/SectionBadge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Alag Ashtapad",
    src: "/images/projects/alag-ashtapad/4.jpeg",
    size: "large",
  },
  {
    id: 2,
    title: "72 Parksyde",
    src: "/images/projects/72-parksyde/2.jpeg",
    size: "small",
  },
  {
    id: 3,
    title: "Ranjitha Palace",
    src: "/images/projects/ranjitha-palace/2.jpeg",
    size: "small",
  },
  {
    id: 4,
    title: "Prince Tower",
    src: "/images/projects/prince-tower/6.jpeg",
    size: "small",
  },
  {
    id: 5,
    title: "Route 86",
    src: "/images/projects/route-86/5.jpeg",
    size: "wide",
  },
  {
    id: 6,
    title: "HDFC Bank",
    src: "/images/projects/hdfc-bank/3.jpeg",
    size: "wide",
  },
  {
    id: 7,
    title: "72 Parksyde",
    src: "/images/projects/72-parksyde/7.jpeg",
    size: "small",
  },
  {
    id: 8,
    title: "72 Parksyde",
    src: "/images/projects/72-parksyde/4.jpeg",
    size: "small",
  },
  {
    id: 9,
    title: "207 SH",
    src: "/images/projects/207-sh/3.jpeg",
    size: "small",
  },
  {
    id: 10,
    title: "Kabra Samriddhi",
    src: "/images/projects/kabra-samriddhi/6.jpeg",
    size: "small",
  },
  {
    id: 11,
    title: "AMI Polymer",
    src: "/images/projects/ami-polymer/4.jpeg",
    size: "small",
  },
  {
    id: 12,
    title: "Cutting Edge",
    src: "/images/projects/cutting-edge/3.jpeg",
    size: "wide",
  },
  {
    id: 13,
    title: "Route 86",
    src: "/images/projects/route-86/2.jpeg",
    size: "wide",
  },
  {
    id: 14,
    title: "Empire Industries",
    src: "/images/projects/empire-industries/4.jpeg",
  },
  {
    id: 15,
    title: "Kalpataru Lobby",
    src: "/images/projects/kalpatru-lobby/1.jpeg",
    size: "large",
  },
  {
    id: 16,
    title: "207 SH",
    src: "/images/projects/207-sh/5.jpeg",
    size: "small",
  },
  {
    id: 17,
    title: "Prince Tower",
    src: "/images/projects/prince-tower/1.jpeg",
    size: "small",
  },
];

export default function Galleria() {
  const [selected, setSelected] = useState<string | null>(null);

  // ESC close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-[#f7f4e8] pb-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <SectionBadge
            text="our portfolio"
            textColor="text-[#C6A76A]"
            borderColor="border-[#C6A76A]"
            dotColor="bg-[#C6A76A]"
          />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1E1E1E]">
            A glance at our <span className="text-[#8A7650]">Projects</span>
          </h2>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[260px]">
          {galleryImages.map((img) => {
            let gridClass = "";

            if (img.size === "large") {
              gridClass = "md:col-span-2 md:row-span-2";
            } else if (img.size === "wide") {
              gridClass = "md:col-span-2";
            }

            return (
              <div
                key={img.id}
                onClick={() => setSelected(img.src)}
                className={`relative group cursor-pointer rounded-3xl overflow-hidden ${gridClass}`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Permanent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Project Name */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                    {img.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                    <Plus
                      className="text-white transition-transform duration-300 group-hover:rotate-90"
                      size={26}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-8 right-8 text-white hover:text-[#8A7650] transition cursor-pointer"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-6xl h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={selected}
              alt="Expanded"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
      <div className="mt-16 flex justify-center">
        <Link
          href="/projects"
          className="
      group
      inline-flex
      items-center
      gap-3

      rounded-full

      bg-[#8A7650]
      px-8
      py-4

      text-white
      font-medium

      transition-all
      duration-300

      hover:bg-[#6f6144]
    "
        >
          View All Projects
          <ArrowUpRight
            size={18}
            className="
        transition-transform
        duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
          />
        </Link>
      </div>
    </section>
  );
}
