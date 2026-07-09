import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero"

export const metadata: Metadata = {
  title: "Our Interior Design Projects in Mumbai | Suvidha Enterprises",

  description:
    "Explore 19+ residential, commercial &amp; hospitality interior projects by Suvidha Enterprises — turnkey design and execution across Mumbai. Every detail perfected.",

  alternates: {
    canonical: "/projects",
  },
};

const Page = () => {
  return (
    <>
   <ProjectsHero />
 
    </>
  )
}

export default Page