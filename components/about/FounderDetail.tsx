"use client";

import Image from "next/image";

export default function FounderDetail() {
  return (
    <section className="bg-[#f7f4e8] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT — STICKY IMAGE */}
          <div className="relative">

            <div className="lg:sticky lg:top-24">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dummyFounder.png"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* RIGHT — SCROLLABLE CONTENT */}
          <div className="space-y-16">

            {/* HEADER */}
            <div>
              <h2 className="text-4xl md:text-7xl font-bold text-[#1E1E1E]">
                Vishal Soni
              </h2>

              <p className="mt-3 text-[#8A7650] uppercase tracking-widest text-sm">
                Co-Founder & CEO
              </p>

              <p className="mt-8 text-[#8A7650]/80 leading-relaxed">
                Mark Jackson brings over two decades of expertise in
                architectural design and interior transformation.
                His philosophy blends precision, creativity, and functional
                elegance.
              </p>
            </div>

            {/* DETAILS */}
            <div className="space-y-8">

              <div>
                <p className="text-sm text-[#8A7650]/60 uppercase tracking-widest">
                  Responsibility
                </p>
                <p className="mt-2 text-xl font-semibold text-[#1E1E1E]">
                  Head of the Company
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8A7650]/60 uppercase tracking-widest">
                  Experience
                </p>
                <p className="mt-2 text-xl font-semibold text-[#1E1E1E]">
                  23 Years
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8A7650]/60 uppercase tracking-widest">
                  Email
                </p>
                <p className="mt-2 text-xl font-semibold text-[#1E1E1E]">
                  hello@suvidhaenterprises.com
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8A7650]/60 uppercase tracking-widest">
                  Contact
                </p>
                <p className="mt-2 text-xl font-semibold text-[#000000]">
                  +91 98207 48592
                </p>
              </div>

            </div>

            {/* EDUCATION */}
            <div>
              <h3 className="text-3xl font-bold text-[#1E1E1E]">
                Educational Qualification
              </h3>

              <p className="mt-6 text-[#8A7650]/80 leading-relaxed">
                Our team brings unparalleled creativity and technical
                proficiency to the world of interior design.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Quality Assurance And Site Inspections",
                  "Lighting Design And Ambiance Creation",
                  "Space Planning And Layout Optimization",
                  "Color Theory And Palette Development",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#8A7650] text-lg">✔</span>
                    <span className="text-[#1E1E1E] font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PROFESSIONAL SKILLS */}
            <div>
              <h3 className="text-3xl font-bold text-[#1E1E1E]">
                Professional Skills
              </h3>

              <p className="mt-6 text-[#8A7650]/80 leading-relaxed">
                Strategic planning, execution management, and high-end
                material selection form the foundation of our design
                excellence.
              </p>

              <div className="mt-10 space-y-8">

                {[
                  { label: "Specialized Design Areas", percent: 85 },
                  { label: "Styles And Trends", percent: 95 },
                  { label: "Design Principles", percent: 65 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#1E1E1E]">
                        {skill.label}
                      </span>
                      <span className="text-[#8A7650] font-semibold">
                        {skill.percent}%
                      </span>
                    </div>

                    <div className="mt-3 h-[3px] bg-[#DBCEA5] rounded-full">
                      <div
                        className="h-full bg-[#8A7650] rounded-full"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}