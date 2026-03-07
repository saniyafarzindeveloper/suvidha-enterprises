
import Services from "@/components/landing-page/Services";
import Stats from "@/components/landing-page/Stats";
import WorkingProcess from "@/components/landing-page/WorkingProcess";
import ShowcaseGallery from "@/components/landing-page/ShowcaseGallery";
import MainHero from "@/components/landing-page/MainHero";

const Page = () => {
  return (
    <>
     <MainHero />
      <Stats />

      <Services />

      <WorkingProcess />
      <ShowcaseGallery />
    </>
  );
};

export default Page;
