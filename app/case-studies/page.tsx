import CaseStudiesList from '@/components/case-studies/CaseStudiesList'
import { caseStudies } from '@/data/caseStudies'

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