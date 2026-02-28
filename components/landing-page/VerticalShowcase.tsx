"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  {
    id: 1,
    title: "Renovation And Remodeling",
    subtitle: "Transforming outdated spaces into refined environments.",
    image: "/images/g1.png",
  },
  {
    id: 2,
    title: "Custom Design Consultation",
    subtitle: "Personalized design strategies tailored to your lifestyle.",
    image: "/images/g2.png",
  },
  {
    id: 3,
    title: "Space Planning And Layout",
    subtitle: "Optimizing flow, proportion, and spatial harmony.",
    image: "/images/g3.png",
  },
  {
    id: 4,
    title: "3D Design Visualization",
    subtitle: "Experience your space before it’s brought to life.",
    image: "/images/g4.png",
  },
];

export default function VerticalShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === features.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activeFeature = features[activeIndex];

  return (
    <section className="relative h-150 md:h-175 lg:h-187.5 overflow-hidden">

      {/* Background Image */}
      <Image
        key={activeFeature.image}
        src={activeFeature.image}
        alt={activeFeature.title}
        fill
        priority
        className="object-cover transition-all duration-700 ease-in-out"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* DESKTOP VERSION  */}
      <div className="relative z-10 h-full hidden md:flex">

        {features.map((feature, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={feature.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex-1 border-l border-white/10 flex items-end transition-all duration-500 cursor-pointer ${
                isActive ? "bg-black/30" : "bg-black/10 hover:bg-black/20"
              }`}
            >
              <div className="p-8 lg:p-12 text-white w-full">

                <span
                  className={`block text-xl font-extrabold text-[#caa05c] mb-4 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={`text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-50"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-4 text-white/80 max-w-xs transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {feature.subtitle}
                </p>

              </div>
            </div>
          );
        })}

      </div>

      {/* ================= MOBILE VERSION ================= */}
      <div className="relative z-10 h-full flex md:hidden items-end">

        <div className="p-8 text-white w-full">

          <span className="block text-sm mb-4 opacity-70">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <h3 className="text-2xl font-semibold">
            {activeFeature.title}
          </h3>

          <p className="mt-4 text-white/80 max-w-sm">
            {activeFeature.subtitle}
          </p>

          {/* Mobile Indicators */}
          <div className="flex gap-2 mt-6">
            {features.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-8 rounded-full transition-all cursor-pointer ${
                  index === activeIndex
                    ? "bg-[#8A7650]"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}