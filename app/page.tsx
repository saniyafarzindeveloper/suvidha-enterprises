import Services from "@/components/landing-page/Services";
import Stats from "@/components/landing-page/Stats";
import WorkingProcess from "@/components/landing-page/WorkingProcess";
import MainHero from "@/components/landing-page/MainHero";
import Galleria from "@/components/projects/Galleria";


const Page = () => {
  return (
    <>
      <MainHero />
      <Stats />
      <Services />
      <WorkingProcess />
      <Galleria />
    </>
  );
};

export default Page;
