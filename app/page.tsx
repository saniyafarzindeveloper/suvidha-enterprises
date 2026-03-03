import { About } from "@/components/landing-page/About";
// import { BrandShowcase} from '@/components/landing-page/BrandShowcase'
import { Hero } from "@/components/landing-page/Hero";
import Services from "@/components/landing-page/Services";
import VerticalShowcase from "@/components/landing-page/VerticalShowcase";
import Galleria from "@/components/landing-page/Galleria"
import CTA from "@/components/layout/CTA";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Galleria />
      {/* <CTA /> */}
      {/* <VerticalShowcase /> */}
    </>
  );
};

export default Page;
