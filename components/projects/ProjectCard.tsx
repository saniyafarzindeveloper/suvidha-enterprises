"use client";

import Image from "next/image";

const projects = [
  {
    title: "Serene Space Studio",
    location: "Germany",
    year: "2025",
    image: "/images/gallery/galleria3.png",
  },
  {
    title: "Modern Living Suite",
    location: "Dubai",
    year: "2024",
    image: "/images/gallery/galleria9.png",
  },
  {
    title: "Minimal Bedroom Concept",
    location: "London",
    year: "2024",
    image: "/images/gallery/galleria7.png",
  },
  {
    title: "Luxury Lounge Interior",
    location: "Paris",
    year: "2023",
    image: "/images/gallery/galleria10.png",
  },
  {
    title: "Contemporary Kitchen",
    location: "New York",
    year: "2023",
    image: "/images/gallery/galleria18.png",
  },
  {
    title: "Architectural Residence",
    location: "Tokyo",
    year: "2022",
    image: "/images/gallery/galleria25.png",
  },
];

export default function ProjectsCard() {
  return (
    <section className="bg-[#f7f4e8] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-sm tracking-[0.25em] text-[#8A7650] uppercase">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1E1E1E] mt-4">
            Featured Projects
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-[320px] sm:h-[340px] lg:h-[360px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* TEXT CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 text-white">

                <h3 className="text-xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <div className="flex items-center gap-3 text-sm text-white/80 mt-2">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 bg-[#8A7650] rounded-full"></span>
                  <span>{project.year}</span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}