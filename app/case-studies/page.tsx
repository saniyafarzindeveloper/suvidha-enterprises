import type { Metadata } from "next";
import CaseStudiesList from '@/components/case-studies/CaseStudiesList'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: "Case Studies Suvidha Enterprises | Interior Designers Since 2007",

  description:
    "Explore 19+ residential, commercial &amp; hospitality interior projects by Suvidha Enterprises — turnkey design and execution across Mumbai. Every detail perfected.",

  alternates: {
    canonical: "/case-studies",
  },
};

const Page = () => {
  return (
    <main className="bg-[#f7f4e8]">
      {caseStudies.map((project) => (
        <CaseStudiesList
         key={project.id}
          project={project}
        />
      ))}

      
    </main>
  )
}

export default Page