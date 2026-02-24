"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#1A1814] text-[#ECE7D1] overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">

        <div className="flex flex-col gap-16 md:grid md:grid-cols-3 md:gap-12">

          {/* Left */}
          <div className="text-center md:text-left space-y-3 text-sm text-[#DBCEA5]/70">
            <p>Studio 12, Clerkenwell</p>
            <p>London, United Kingdom</p>

            <p className="pt-6 uppercase tracking-widest text-xs text-[#8E977D]">
              Interior
            </p>
          </div>

          {/* Center */}
          <div className="text-center space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
              +44 20 7946 0892
            </p>

            <Link
              href="mailto:hello@renova.studio"
              className="block text-xl sm:text-2xl md:text-3xl font-light hover:text-[#8E977D] transition-colors wrap-break-word"
            >
              hello@renova.studio
            </Link>

            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-[#DBCEA5]/60 pt-6">
              Crafted Interior Spaces
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right space-y-3 text-sm text-[#DBCEA5]/70">
            <p className="uppercase tracking-widest text-xs text-[#8E977D]">
              Architecture
            </p>

            <div className="pt-6">
              <p>2026 Suvidha Enterprises.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Large Background Branding */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none">
        <h1
          className="
            font-semibold 
            tracking-tight 
            text-[#ECE7D1]/8 
            leading-none
            whitespace-nowrap
            text-[clamp(3rem,12vw,12rem)]
          "
        >
          SUVIDHA ENTERPRISES
        </h1>
      </div>

    </footer>
  );
}