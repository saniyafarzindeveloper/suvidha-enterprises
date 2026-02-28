"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <section className="relative bg-[#f7f4e8] py-32 overflow-hidden">


      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[0.25em] text-xs text-[#8E977D]">
              Under Development
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1E1E1E]">
              Something <span className="text-[#8A7650]">Beautiful</span> Is
              Taking Shape
            </h2>

            <p className="mt-8 text-[#8A7650]/80 max-w-lg leading-relaxed">
              We’re currently crafting this space with the same attention to
              detail and precision that defines our work. Stay tuned —
              something exceptional is coming soon.
            </p>

            {/* Notify Form */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                placeholder="Enter your email"
                className="h-12 border-[#DBCEA5] focus-visible:ring-[#8A7650]"
              />
              <Button className="h-12 bg-[#8A7650] text-white hover:bg-[#6f5f40] px-8">
                Notify Me
              </Button>
            </div>

          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="relative h-112.5 rounded-3xl overflow-hidden shadow-xl">

            <Image
              src="/images/interior.jpg"
              alt="Coming Soon"
              fill
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Center Glass Panel */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-12 py-8 text-center">

                <span className="text-white/70 text-sm tracking-widest uppercase">
                  Coming Soon
                </span>

                <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                  New Collection Launch
                </h3>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}