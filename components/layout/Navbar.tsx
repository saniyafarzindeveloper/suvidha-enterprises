"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {  Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#ECE7D1]/95 backdrop-blur-md shadow-md border-b border-[#DBCEA5]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-[#8A7650]" : "text-white"
          }`}
        >
          SUVIDHA ENTERPRISES
        </Link>

        {/* Desktop Menu */}
       <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {["SERVICES", "PROJECTS", "ABOUT US"].map((item) => (
            <Link
              key={item}
              href="/"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-[#8A7650] hover:text-[#8E977D]"
                  : "text-white hover:text-[#DBCEA5]"
              }`}
            >
              {item}
            </Link>
          ))}

         <Button
  className={`rounded-lg px-6 transition-all duration-300 cursor-pointer flex items-center gap-2 ${
    scrolled
      ? "bg-[#8A7650] text-[#ECE7D1] hover:bg-[#66563a]"
      : "bg-[#8A7650] text-white hover:bg-[#66563a]"
  }`}
>
  CONTACT US
  <ArrowUpRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Button>
        </nav>

        {/* Mobile */}
       <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`transition-colors ${
                  scrolled ? "text-[#8A7650]" : "text-white"
                }`}
              >
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#ECE7D1] border-l border-[#DBCEA5]">
              <div className="m-10 flex flex-col gap-6 text-lg font-medium text-[#8A7650]">
                <Link href="/">SERVICES</Link>
                <Link href="/">PROJECTS</Link>
                <Link href="/">ABOUT US</Link>
               <Button
  className={`rounded-lg px-6 transition-all duration-300 cursor-pointer flex items-center gap-2 ${
    scrolled
      ? "bg-[#8A7650] text-[#ECE7D1] hover:bg-[#66563a]"
      : "bg-[#8A7650] text-white hover:bg-[#66563a]"
  }`}
>
  CONTACT US
  <ArrowUpRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}