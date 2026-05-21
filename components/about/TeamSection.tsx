
"use client";

import { motion } from "framer-motion";

const team = [
  {
    initials: "MS",
    name: "Mayur Soni",
    role: "Co-Founder",
    description:
      "Leading creative direction, project strategy, and client relationships.",
  },
  {
    initials: "BS",
    name: "Bhoomi Savla",
    role: "Interior Designer",
    description:
      "Crafting refined spaces with a balance of functionality and elegance.",
  },
  {
    initials: "NK",
    name: "Nidhi Kanungo",
    role: "Interior Designer",
    description:
      "Focused on modern aesthetics, detailing, and spatial harmony.",
  },
  {
    initials: "AS",
    name: "Aarya Soni",
    role: "Interior Designer",
    description:
      "Designing thoughtful interiors tailored to lifestyle and experience.",
  },
  {
    initials: "NS",
    name: "Nimrit Soni",
    role: "Supervisor",
    description:
      "Ensuring flawless on-site execution and quality craftsmanship.",
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4e8] py-28">

      {/* background typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="text-[120px] md:text-[220px] font-bold text-black/[0.03] tracking-tight">
          TEAM
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* badge */}
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#8A7650] mb-6">
          <span className="w-1.5 h-1.5 bg-[#8A7650] rounded-full"></span>
          Our Team
        </div>

        {/* heading */}
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight">
            The People Behind The{" "}
            <span className="text-[#8A7650]">
              Spaces We Create
            </span>
          </h2>

          <p className="mt-6 text-[#1E1E1E]/70 max-w-2xl leading-relaxed">
            A collective of designers, visionaries, and execution experts
            dedicated to crafting timeless interiors with precision and care.
          </p>
        </div>

        {/* grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {team.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#8A7650]/15
                bg-white/40
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#8A7650]/5 to-transparent"></div>

              {/* initials */}
              <div
                className="
                  relative
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#8A7650]/20
                  bg-[#8A7650]/10
                  text-3xl
                  font-bold
                  text-[#8A7650]
                  shadow-sm
                "
              >
                {member.initials}
              </div>

              {/* content */}
              <div className="relative mt-8">

                <span className="text-xs uppercase tracking-[0.25em] text-[#8A7650]">
                  {member.role}
                </span>

                <h3 className="mt-3 text-2xl font-semibold text-[#1E1E1E]">
                  {member.name}
                </h3>

                {/* underline */}
                <div className="mt-5 h-[2px] w-12 bg-[#8A7650] transition-all duration-500 group-hover:w-24"></div>

                <p className="mt-5 text-sm leading-relaxed text-[#1E1E1E]/70">
                  {member.description}
                </p>

              </div>

              {/* decorative number */}
              <div className="absolute bottom-4 right-6 text-7xl font-bold text-black/[0.03]">
                0{index + 1}
              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

