import { Hero } from "@/components/landing-page/Hero";
import Services from "@/components/landing-page/Services";

import Stats from "@/components/landing-page/Stats";
import WorkingProcess from "@/components/landing-page/WorkingProcess";
import ShowcaseGallery from "@/components/landing-page/ShowcaseGallery";

const Page = () => {
  return (
    <>
      <Hero />
      <Stats />

      <Services />

      <WorkingProcess />
      <ShowcaseGallery />
    </>
  );
};

export default Page;
