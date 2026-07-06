"use client";

import { Hammer, Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="min-h-screen bg-[#f7f4e8] flex items-center justify-center px-6 mt-5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A76A]/40 bg-white/50 backdrop-blur-md px-5 py-2">
          <Sparkles className="w-4 h-4 text-[#8A7650]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8A7650]">
            Coming Soon
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-10 text-5xl md:text-7xl font-bold leading-tight text-[#1E1E1E]">
          Our Detailed
          <br />
          <span className="text-[#8A7650]">Case Studies</span>
          <br />
          Are On The Way.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-[#8A7650]/80">
          We&apos;re carefully documenting our completed projects to showcase the
          design journey, challenges, material selections, execution process,
          and the final transformation of every space.
        </p>

        {/* Card */}
        <div className="mt-14 rounded-[32px] border border-[#DBCEA5] bg-white/40 backdrop-blur-xl p-10 shadow-xl">
          <div className="flex flex-col items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#8A7650]/10">
              <Hammer className="h-10 w-10 text-[#8A7650]" />
            </div>

            <h2 className="text-2xl font-semibold text-[#1E1E1E]">
              We&apos;re Building Something Special
            </h2>

            <p className="max-w-xl text-[#8A7650]/80 leading-relaxed">
              Every case study will provide an in-depth look into our design
              philosophy, planning process, material palette, execution
              strategy, and the finished interiors that define Suvidha
              Enterprises.
            </p>

            <Link
              href="/projects"
              className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-[#8A7650] px-7 py-4 text-white transition-all duration-300 hover:bg-[#6f5f40]"
            >
              Explore Our Projects

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-sm uppercase tracking-[0.25em] text-[#8A7650]/60">
          Launching Soon • Stay Tuned
        </p>
      </div>
    </section>
  );
}