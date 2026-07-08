"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionBadge from "../layout/SectionBadge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4e8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <SectionBadge
                text="elevating spaces"
                textColor="text-[#C6A76A]"
                borderColor="border-[#C6A76A]"
                dotColor="bg-[#C6A76A]"
              />
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.05em] text-[#1E1E1E]">
              Transforming
              <br />
              Spaces
              {/* <br />
              Enhancing Homes. */}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1E1E1E]/70">
              Suvidha Enterprises is a complete, turnkey interior solutions
              provider. From the first design concept to the final coat of
              paint, our in-house team of designers, architects, carpenters, and
              electricians handles every stage.
            </p>

            {/* CTA */}
            <Link href="#service-list">
             <Button
              className="
    group
    mt-10
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-[#8A7650]
    px-7
    py-6
    text-white
    transition-all
    duration-300
    hover:bg-[#6f6144]
    cursor-pointer
  "
            >
              Explore Services
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Button>
            </Link>
           
          </div>

          {/* RIGHT COLLAGE */}
          <div className="relative h-[650px] hidden lg:block">
            {/* MAIN IMAGE */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-16
                left-20

                h-[520px]
                w-[420px]

                overflow-hidden
                rounded-[36px]

                shadow-2xl
              "
            >
              <Image
                src="/images/projects/72-parksyde/6.jpeg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            {/* TOP CARD */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-0
                right-0

                h-[240px]
                w-[220px]

                overflow-hidden
                rounded-[30px]

                border-8
                border-[#f7f4e8]

                shadow-xl
              "
            >
              <Image
                src="/images/projects/72-parksyde/5.jpeg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            {/* BOTTOM CARD */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-0
                left-0

                h-[220px]
                w-[280px]

                overflow-hidden
                rounded-[30px]

                border-8
                border-[#f7f4e8]

                shadow-xl
              "
            >
              <Image
                src="/images/projects/72-parksyde/4.jpeg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            {/* GOLD ACCENT */}
            <div
              className="
                absolute
                right-16
                bottom-24

                h-24
                w-24

                rounded-full

                bg-[#8A7650]/15

                blur-xl
              "
            />
          </div>

          {/* MOBILE COLLAGE */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[320px] overflow-hidden rounded-[28px]">
                <Image
                  src="/images/projects/72-parksyde/6.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="relative h-[150px] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/projects/72-parksyde/5.jpeg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-[150px] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/projects/72-parksyde/4.jpeg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
