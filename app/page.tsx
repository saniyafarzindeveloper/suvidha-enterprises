import { About } from "@/components/landing-page/About";
// import { BrandShowcase} from '@/components/landing-page/BrandShowcase'
import { Hero } from "@/components/landing-page/Hero";
import Services from "@/components/landing-page/Services";
import VerticalShowcase from "@/components/landing-page/VerticalShowcase";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <VerticalShowcase />
    </>
  );
};

export default Page;
