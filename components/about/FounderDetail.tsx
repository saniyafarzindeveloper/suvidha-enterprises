"use client";

import Image from "next/image";

export default function FounderDetail() {
  return (
    <section className="bg-[#f7f4e8] py-24" id="founder">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT — STICKY IMAGE */}
          <div className="relative">

            <div className="lg:sticky lg:top-24">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/vishal soni.png"
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
                Founder & CEO
              </p>

              <p className="mt-8 text-[#8A7650]/80 leading-relaxed">
                Vishal Soni brings over 18 years of expertise in
                architectural design and interior transformation.
                His philosophy blends precision, creativity, and functional
                elegance.
              </p>
            </div>

            {/* DETAILS */}
            <div className="space-y-8">

           

              <div>
                <p className="text-sm text-[#8A7650]/60 uppercase tracking-widest">
                  Experience
                </p>
                <p className="mt-2 text-xl font-semibold text-[#1E1E1E]">
                  18+ Years
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8A7650]/60 uppercase tracking-widest">
                  Email
                </p>
                <p className="mt-2 text-xl font-semibold text-[#1E1E1E]">
                suvidhaenterprises@ymail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8A7650]/60 uppercase tracking-widest">
                  Contact
                </p>
                <p className="mt-2 text-xl font-semibold text-[#000000]">
                 +91 84199 11555
                </p>
              </div>

            </div>

            {/* EDUCATION */}
            <div>
              <h3 className="text-3xl font-bold text-[#1E1E1E]">
                Area of Expertise
              </h3>


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

           {/* LEADERSHIP & EXECUTION */}
<div>
  <h3 className="text-3xl font-bold text-[#1E1E1E]">
    Leadership & Execution
  </h3>

  <p className="mt-6 text-[#8A7650]/80 leading-relaxed max-w-xl">
    Every project is personally guided from initial consultation to final
    handover, ensuring thoughtful planning, seamless coordination, premium
    material selection, and uncompromised execution quality.
  </p>

  <div className="mt-10 space-y-8">
    {[
      {
        label: "Project Planning & Strategy",
        percent: 100,
      },
      {
        label: "Site Supervision & Execution",
        percent: 98,
      },
      {
        label: "Client Consultation",
        percent: 96,
      },
      {
        label: "Material Selection & Quality Control",
        percent: 95,
      },
    ].map((item, index) => (
      <div key={index}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-semibold text-[#1E1E1E]">
            {item.label}
          </span>

          <span className="text-[#8A7650] font-semibold text-base">
            {item.percent}%
          </span>
        </div>

        <div className="relative h-[6px] rounded-full bg-[#DBCEA5]/60 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[#8A7650] transition-all duration-700"
            style={{ width: `${item.percent}%` }}
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