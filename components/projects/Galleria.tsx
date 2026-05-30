"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import SectionBadge from "../layout/SectionBadge";

const galleryImages = [
  { id: 1, src: "/images/projects/alag-ashtapad/4.jpeg", size: "large" },
  { id: 2, src: "/images/projects/72-parksyde/2.jpeg", size: "small" },
  { id: 3, src: "/images/projects/ranjitha-palace/2.jpeg", size: "small" },
  { id: 4, src: "/images/projects/prince-tower/6.jpeg", size: "small" },
  { id: 5, src: "/images/projects/route-86/5.jpeg", size: "wide" },
  { id: 6, src: "/images/projects/hdfc-bank/3.jpeg", size: "wide" },
  { id: 7, src: "/images/projects/72-parksyde/7.jpeg", size: "small" },
  { id: 8, src: "/images/projects/72-parksyde/4.jpeg", size: "small" },
  { id: 9, src: "/images/projects/207-sh/3.jpeg", size: "small" },
  { id: 10, src: "/images/projects/kabra-samriddhi/6.jpeg", size: "small" },
  { id: 11, src: "/images/projects/ami-polymer/4.jpeg", size: "small" },
  { id: 12, src: "/images/projects/cutting-edge/3.jpeg", size: "wide" },
  { id: 13, src: "/images/projects/route-86/2.jpeg", size: "wide" },
  { id: 14, src: "/images/projects/empire-industries/4.jpeg" },
  { id: 15, src: "/images/projects/kalpatru-lobby/1.jpeg", size: "large" },
  { id: 16, src: "/images/projects/207-sh/5.jpeg", size: "small" },
  { id: 17, src: "/images/projects/prince-tower/1.jpeg", size: "small" },
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
                  alt="Gallery"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                    <Plus className="text-white" size={26} />
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
    </section>
  );
}
