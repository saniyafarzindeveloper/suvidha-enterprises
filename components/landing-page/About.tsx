import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="bg-[#ECE7D1] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="text-sm tracking-widest uppercase text-[#8E977D]">
              About Us
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#8A7650] leading-tight">
              Designing Spaces That Reflect
              <span className="block"> Your Story & Lifestyle</span>
            </h2>

            <div className="mt-6 h-0.5 w-20 bg-[#DBCEA5]" />

            <p className="mt-8 text-lg text-[#8A7650]/80 leading-relaxed">
              For over two decades, we have crafted refined interiors that
              balance function and beauty. Our approach blends timeless
              aesthetics with thoughtful detailing to create environments that
              feel warm, intentional, and uniquely personal.
            </p>

            <p className="mt-6 text-lg text-[#8A7650]/80 leading-relaxed">
              From residential sanctuaries to contemporary commercial spaces,
              we focus on materiality, proportion, and atmosphere — ensuring
              every project feels cohesive and enduring.
            </p>

            <Button className="mt-10 rounded-lg cursor-pointer bg-[#8A7650] text-[#ECE7D1] hover:bg-[#453c2a] px-8">
              LEARN MORE
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-125 w-full">
            <Image
              src="/images/interior.jpg"
              alt="Interior Design Studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl"
            />

            {/* Soft overlay accent */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-[#DBCEA5] rounded-2xl -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}