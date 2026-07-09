import type { Metadata } from "next";
import ListOfServices from "@/components/our-services/ListOfServices";
import ServicesHero from "@/components/our-services/ServicesHero";

export const metadata: Metadata = {
  title: "Interior Design & Turnkey Services in Mumbai | Suvidha",

  description:
    "Complete turnkey interior solutions in Mumbai — residential &amp; commercial design, civil work, modular furniture, flooring, ceilings, electrical, wallpapers &amp; landscaping.",

  alternates: {
    canonical: "/services",
  },
};

const Page = () => {
  return (
    <>
      <ServicesHero />
      <ListOfServices />
    </>
  );
};

export default Page;
