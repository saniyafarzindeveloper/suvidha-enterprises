"use client";

import CaseStudyGallery from "./CaseStudiesGallery";

type CaseStudyProps = {
  project: {
    id: number;
    title: string;
    subtitle: string;
    location: string;
    configuration: string;
    scope: string;
    duration: string;
    strategy: string;
    designDetails: string;
    year: string;
    coverImage: string;
    overview: string;
    totalArea: string;
    projectType: string;
    challenge: string;
    materials: string[];
    clientQuote?: string;
    gallery: string[];
  };
};

export default function CaseStudiesList({ project }: CaseStudyProps) {
  return (
    <section className="bg-[#f7f4e8] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.35em] text-xs text-[#8A7650]">
            Case Study
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl font-bold leading-[0.95] text-[#1E1E1E]">
            {project.title}
          </h2>

          <p className="mt-4 text-xl text-[#8A7650]">{project.subtitle}</p>
        </div>

        {/* Hero Image */}

        {/* <div className="relative mt-16 aspect-[16/9] overflow-hidden rounded-[40px]"> */}

        <CaseStudyGallery images={project.gallery} title={project.title} />

        {/* </div> */}

        {/* Project Details */}

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Overview */}

          {/* LEFT CONTENT */}
          <div className="space-y-14">
            {/* Project Overview */}
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-[#8A7650]">
                Project Overview
              </p>

              <p className="mt-6 text-lg leading-9 text-[#1E1E1E]/80">
                {project.overview}
              </p>
            </div>

            {/* Design Challenge */}
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-[#8A7650]">
                Design Challenge
              </p>

              <p className="mt-6 text-lg leading-9 text-[#1E1E1E]/80">
                {project.challenge}
              </p>
            </div>

            {/* Materials & Finishes */}
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-[#8A7650]">
                Materials & Finishes
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.materials.map((material) => (
                  <div
                    key={material}
                    className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-[#DBCEA5]
            bg-white/40
            px-5
            py-4
          "
                  >
                    <div className="h-2 w-2 rounded-full bg-[#8A7650]" />

                    <span className="text-[#1E1E1E] font-medium">
                      {material}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Info */}

          <div className="rounded-[32px] border border-[#DBCEA5] bg-white/60 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold text-[#1E1E1E]">
              Project Information
            </h3>

            <div className="mt-8 space-y-6">
              {[
                {
                  label: "Location",
                  value: project.location,
                },
                {
                  label: "Configuration",
                  value: project.configuration,
                },
                {
                  label: "Scope",
                  value: project.scope,
                },
                {
                  label: "Duration",
                  value: project.duration,
                },
                {
                  label: "Completed",
                  value: project.year,
                },
                {
                  label: "Project Type",
                  value: project.projectType,
                },
                {
                  label: "Design Strategy",
                  value: project.strategy,
                },
                {
                  label: "Total Area",
                  value: project.totalArea,
                },
                {
                  label: "Design Details",
                  value: project.designDetails,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-6 border-b border-[#DBCEA5] pb-4 last:border-none last:pb-0"
                >
                  <span className="text-[#8A7650]">{item.label}</span>

                  <span className="text-right font-medium text-[#1E1E1E]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
