import Image from "next/image";

const companies = [
  { name: "UrbanBuild", logo: "/images/logo.png" },
  { name: "GreenScape", logo: "/images/logo.png" },
  { name: "Axis Interiors", logo: "/images/logo.png" },
  { name: "Horizon Realty", logo: "/images/logo.png" },
  { name: "StoneCraft", logo: "/images/logo.png" },
  { name: "Elite Developments", logo: "/images/logo.png" },
];

export function CompaniesWorkedWith() {
  return (
    <section className="bg-[#DBCEA5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-[#8E977D]">
            Trusted By
          </p>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-[#8A7650]">
            Brands & Developers We’ve Worked With
          </h2>

          <div className="mt-6 h-[2px] w-16 bg-[#DBCEA5] mx-auto" />
        </div>

        {/* Logo Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">

          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={140}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}