import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero"
import CompanyTimeline from "@/components/about/CompanyTimeline"
import FounderDetail from "@/components/about/FounderDetail"
import TeamSection from "@/components/about/TeamSection"

export const metadata: Metadata = {
  title: "About Suvidha Enterprises | Interior Designers Since 2007",

  description:
    "Led by founder Vishal Soni (18+ years), Suvidha Enterprises is a Ghatkopar-based interior design & turnkey studio with an in-house team of designers, architects & craftsmen.",

  alternates: {
    canonical: "/about",
  },
};


const Page = () => {
  return (
    <>
    <AboutHero />
    <FounderDetail />
    <TeamSection />
    <CompanyTimeline />
    </>
  )
}

export default Page