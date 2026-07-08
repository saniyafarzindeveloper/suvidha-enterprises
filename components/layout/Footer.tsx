"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1A1814] text-[#ECE7D1]">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">

        {/* Information Grid */}

        <div className="overflow-hidden rounded-[32px] border border-[#8A7650]/15">

          <div className="grid lg:grid-cols-3">

            {/* Address */}

            <div className="px-10 py-12">

              <p className="text-xs uppercase tracking-[0.35em] text-[#8A7650]">
                Visit Us
              </p>

              <div className="mt-8 space-y-3 text-lg leading-8 text-[#DBCEA5]/75">

                <p>Shop No. 5, Lakhani Estate</p>

                <p>Near New Life Hospital</p>

                <p>L.B.S Marg, Ghatkopar (West)</p>

                <p>Mumbai - 400086</p>

              </div>

            </div>

            {/* Contact */}

            <div className="border-y lg:border-y-0 lg:border-x border-[#8A7650]/15 px-10 py-12">

              <p className="text-xs uppercase tracking-[0.35em] text-[#8A7650]">
                Contact
              </p>

              <div className="mt-8">

                <a
                  href="tel:+918419911555"
                  className="
                    block
                    text-4xl
                    font-light
                    tracking-tight
                    transition-colors
                    hover:text-[#8A7650]
                  "
                >
                  +91 84199 11555
                </a>

                <a
                  href="mailto:suvidhaenterprises@ymail.com"
                  className="
                    mt-6
                    block
                    text-lg
                    text-[#DBCEA5]/75
                    break-all
                    transition-colors
                    hover:text-[#ECE7D1]
                  "
                >
                  suvidhaenterprises@ymail.com
                </a>

              </div>

            </div>

            {/* Quick Links */}

            <div className="px-10 py-12">

              <p className="text-xs uppercase tracking-[0.35em] text-[#8A7650]">
                Quick Links
              </p>

              <div className="mt-8 flex flex-col gap-4">

                {[
                  {
                    title: "Services",
                    href: "/our-services",
                  },
                  {
                    title: "Projects",
                    href: "/projects",
                  },
                  {
                    title: "About Us",
                    href: "/about",
                  },
                  {
                    title: "Case Studies",
                    href: "/case-studies",
                  },
                  {
                    title: "Contact Us",
                    href: "/contact-us",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      justify-between
                      text-lg
                      text-[#DBCEA5]/75
                      transition-all
                      duration-300
                      hover:text-[#ECE7D1]
                    "
                  >
                    {item.title}

                    <ArrowUpRight
                      size={16}
                      className="
                        opacity-0
                        -translate-x-2
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                      "
                    />
                  </Link>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-[#8A7650]/15 pt-8">

          <div className="flex flex-col items-center gap-4 text-center">

            <p className="text-sm text-[#DBCEA5]/55">
              © {new Date().getFullYear()} Suvidha Enterprises.
              All rights reserved.
            </p>

            <Link
              href="https://www.linkedin.com/in/saniya-farzin/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#8A7650]/20
                bg-[#ECE7D1]/5
                px-6
                py-3
                text-sm
                text-[#DBCEA5]/70
                transition-all
                duration-300
                hover:border-[#8A7650]
                hover:bg-[#ECE7D1]/10
                hover:text-[#ECE7D1]
              "
            >
              Designed & Developed by

              <span className="font-semibold text-[#ECE7D1]">
                Saniya Farzin
              </span>

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>

        </div>

      </div>

      {/* Watermark */}

      <div className="pointer-events-none absolute bottom-[-20px] left-1/2 -translate-x-1/2 select-none">

        <h1
          className="
            whitespace-nowrap
            text-[clamp(4rem,13vw,12rem)]
            font-semibold
            tracking-[-0.08em]
            text-[#ECE7D1]/4
          "
        >
          SUVIDHA ENTERPRISES
        </h1>

      </div>

    </footer>
  );
}