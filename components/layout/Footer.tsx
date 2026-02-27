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
            <p>Shop number 5, Lakhani Estate</p>
            <p>Near new life hospital, L.B.S Marg,</p>
            <p>Ghatkopar (W), Mumbai - 400086</p>
          </div>

          {/* Center */}
          <div className="text-center space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
              +91 98207 48592
            </p>

            <Link
              href="mailto:hello@renova.studio"
              className="block text-xl sm:text-2xl md:text-3xl font-light hover:text-[#8E977D] transition-colors wrap-break-word"
            >
              hello@suvidha.enterprises
            </Link>
          </div>

          {/* Right */}
          <div className="text-center md:text-right space-y-3 text-sm text-[#DBCEA5]/70">
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
