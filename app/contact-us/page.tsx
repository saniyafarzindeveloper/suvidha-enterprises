"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ContactUsForm from "@/components/contact-us/ContactUsForm";

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-100 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/galleria2.png"
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">
          Let&apos;s Build Something Exceptional
          </h1>

          <div className="mt-6 text-sm tracking-widest uppercase text-white/80">
          Have a project in mind? Whether it&apos;s residential, commercial, or landscape transformation — we&apos;d love to hear about your vision.
          </div>
        </div>

      </section>

      {/* MAIN SECTION */}
      <section className="relative bg-[#ffffff] py-20 overflow-hidden">

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-start py-20">

            {/* RIGHT SIDE — IMAGE + CONTACT DETAILS */}
      <div className="flex flex-col items-start">

        {/* Image */}
        <div className="relative w-full h-125 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src="/images/gallery/galleria2.png"
            alt="Studio Interior"
            fill
            className="object-cover"
          />
        </div>

        {/* Contact Details Below Image */}
        <div className="mt-8 space-y-3 text-black font-medium">

          <p>
            📍 Ghatkopar (W), L.B.S. Marg, Mumbai
          </p>

          <p>
            📞 +91 98207 48592 / +91 98198 52331
          </p>

          <p>
            ✉️ hello@suvidhaenterprises.com
          </p>

        </div>

      </div>

            {/* RIGHT FORM CARD */}
            <ContactUsForm />

          </div>

          {/* MAP SECTION */}
          <div className="mt-5 pt-10">
            <div className="rounded-3xl overflow-hidden border border-[#8A7650]/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Ghatkopar%20LBS%20Marg%20Mumbai&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

