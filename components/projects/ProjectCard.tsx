"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: "01",
    title: "72 Parksyde",
    category: "Residential",
    cover: "/images/projects/72-parksyde/6.jpeg",
    images: [
      "/images/projects/72-parksyde/4.jpeg",
      "/images/projects/72-parksyde/5.jpeg",
      "/images/projects/72-parksyde/1.jpeg",
      "/images/projects/72-parksyde/2.jpeg",
      "/images/projects/72-parksyde/7.jpeg",
      "/images/projects/72-parksyde/8.jpeg",
    ],
  },

  {
    id: "02",
    title: "Hotel Ranjitha Palace",
    category: "Hospitality",
    cover: "/images/projects/ranjitha-palace/2.jpeg",
    images: [
      "/images/projects/ranjitha-palace/1.jpeg",
      "/images/projects/ranjitha-palace/3.jpeg",
    ],
  },

  {
    id: "03",
    title: "Route 86 Ghatkopar",
    category: "Hospitality",
    cover: "/images/projects/route-86/3.jpeg",
    images: [
      "/images/projects/route-86/1.jpeg",
      "/images/projects/route-86/2.jpeg",
      "/images/projects/route-86/4.jpeg",
      "/images/projects/route-86/5.jpeg",
    ],
  },

  {
    id: "04",
    title: "HDFC Bank Bhiloda Gujrat",
    category: "Commercial",
    cover: "/images/projects/hdfc-bank/1.jpeg",
    images: [
      "/images/projects/hdfc-bank/2.jpeg",
      "/images/projects/hdfc-bank/3.jpeg",
      "/images/projects/hdfc-bank/4.jpeg",
    ],
  },

  {
    id: "05",
    title: "Kalpatru Aura",
    category: "Residential",
    cover: "/images/projects/kalpatru-aura/5.jpeg",
    images: [
      "/images/projects/kalpatru-aura/1.jpeg",
      "/images/projects/kalpatru-aura/2.jpeg",
      "/images/projects/kalpatru-aura/3.jpeg",
      "/images/projects/kalpatru-aura/4.jpeg",
    ],
  },

  {
    id: "06",
    title: "Kalpatru Aura Lobby",
    category: "Residential amenity",
    cover: "/images/projects/kalpatru-lobby/1.jpeg",
    images: [
      "/images/projects/kalpatru-lobby/2.jpeg",
      "/images/projects/kalpatru-lobby/3.jpeg",
      "/images/projects/kalpatru-lobby/4.jpeg",
      "/images/projects/kalpatru-lobby/5.jpeg",
      "/images/projects/kalpatru-lobby/6.jpeg",
    ],
  },

  {
    id: "07",
    title: "Wadhwa Anmol",
    category: "Residential",
    cover: "/images/projects/wadhwa-anmol/1.jpeg",
    images: [
      "/images/projects/wadhwa-anmol/2.jpeg",
      "/images/projects/wadhwa-anmol/3.jpeg",
      "/images/projects/wadhwa-anmol/4.jpeg",
      "/images/projects/wadhwa-anmol/5.jpeg",
      "/images/projects/wadhwa-anmol/6.jpeg",
      "/images/projects/wadhwa-anmol/7.jpeg",
    ],
  },

  {
    id: "08",
    title: "Sandu Sanskar",
    category: "Residential",
    cover: "/images/projects/sandu/1.jpeg",
    images: [
      "/images/projects/sandu/2.jpeg",
      "/images/projects/sandu/3.jpeg",
      "/images/projects/sandu/4.jpeg",
      "/images/projects/sandu/5.jpeg",
    ],
  },

  {
    id: "09",
    title: "Prince Tower Terrace",
    category: "Residential amenity",
    cover: "/images/projects/prince-tower/3.jpeg",
    images: [
      "/images/projects/prince-tower/1.jpeg",
      "/images/projects/prince-tower/2.jpeg",
      "/images/projects/prince-tower/4.jpeg",
      "/images/projects/prince-tower/5.jpeg",
      "/images/projects/prince-tower/6.jpeg",
      "/images/projects/prince-tower/7.jpeg",
    ],
  },

  {
    id: "10",
    title: "Wadhwa Wise City",
    category: "Residential",
    cover: "/images/projects/wadhwa-wise-city/2.jpeg",
    images: [
      "/images/projects/wadhwa-wise-city/1.jpeg",
      "/images/projects/wadhwa-wise-city/4.jpeg",
      "/images/projects/wadhwa-wise-city/3.jpeg",
    ],
  },

  {
    id: "11",
    title: "Anmol Apartments",
    category: "Residential",
    cover: "/images/projects/anmol/4.jpeg",
    images: [
      "/images/projects/anmol/1.jpeg",
      "/images/projects/anmol/2.jpeg",
      "/images/projects/anmol/3.jpeg",
    ],
  },
  {
    id: "12",
    title: "Ztekin",
    category: "Residential amenity",
    cover: "/images/projects/zketin/1.jpeg",
    images: [
      "/images/projects/zketin/2.jpeg",
      "/images/projects/zketin/3.jpeg",
      "/images/projects/zketin/4.jpeg",
    ],
  },
  {
    id: "13",
    title: "Gokul Apartments",
    category: "Residential",
    cover: "/images/projects/gokul/1.jpeg",
    images: ["/images/projects/gokul/2.jpeg", "/images/projects/gokul/3.jpeg"],
  },
  {
    id: "14",
    title: "Alag Ashtapad",
    category: "Residential",
    cover: "/images/projects/alag-ashtapad/5.jpeg",
    images: [
      "/images/projects/alag-ashtapad/1.jpeg",
      "/images/projects/alag-ashtapad/2.jpeg",
      "/images/projects/alag-ashtapad/3.jpeg",
      "/images/projects/alag-ashtapad/4.jpeg",
      "/images/projects/alag-ashtapad/6.jpeg",
    ],
  },
  {
    id: "15",
    title: "Empire Industries",
    category: "industrial landscape",
    cover: "/images/projects/empire-industries/1.jpeg",
    images: [
     "/images/projects/empire-industries/2.jpeg",
     "/images/projects/empire-industries/3.jpeg",
     "/images/projects/empire-industries/4.jpeg",
    ],
  },
  {
    id: "16",
    title: "Cutting Edge",
    category: "Commercial",
    cover: "/images/projects/cutting-edge/1.jpeg",
    images: [
     "/images/projects/cutting-edge/2.jpeg",
     "/images/projects/cutting-edge/3.jpeg",
     "/images/projects/cutting-edge/4.jpeg",
    ],
  },
  {
    id: "17",
    title: "Ami Polymer Pvt Ltd",
    category: "Commercial",
    cover: "/images/projects/ami-polymer/1.jpeg",
    images: [
     "/images/projects/ami-polymer/2.jpeg",
     "/images/projects/ami-polymer/7.jpeg",
     "/images/projects/ami-polymer/3.jpeg",
     "/images/projects/ami-polymer/5.jpeg",
     "/images/projects/ami-polymer/7.jpeg",
     "/images/projects/ami-polymer/6.jpeg",
    ],
  },
   {
    id: "18",
    title: "207 SH",
    category: "Residential",
    cover: "/images/projects/207-sh/1.jpeg",
    images: [
    "/images/projects/207-sh/2.jpeg",
    "/images/projects/207-sh/3.jpeg",
    "/images/projects/207-sh/4.jpeg",
    "/images/projects/207-sh/6.jpeg",
    "/images/projects/207-sh/5.jpeg",
    ],
  },
   {
    id: "19",
    title: "Kabra Samriddhi",
    category: "Residential",
    cover: "/images/projects/kabra-samriddhi/1.jpeg",
    images: [
   "/images/projects/kabra-samriddhi/2.jpeg",
   "/images/projects/kabra-samriddhi/3.jpeg",
   "/images/projects/kabra-samriddhi/5.jpeg",
   "/images/projects/kabra-samriddhi/6.jpeg",
   "/images/projects/kabra-samriddhi/7.jpeg",
   "/images/projects/kabra-samriddhi/4.jpeg",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="bg-[#f7f4e8] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADING */}
        <div className="mb-20">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#8A7650]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A7650]" />
            Our Work
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1E1E1E] max-w-4xl">
            Crafted Spaces That{" "}
            <span className="text-[#8A7650]">Reflect Vision</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
              }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="
                break-inside-avoid
                relative
                cursor-pointer
                overflow-hidden
                rounded-[32px]
                group
              "
            >
              {/* IMAGE */}
              <div
                className={`
                  relative
                  overflow-hidden
                  rounded-[32px]

                  ${index % 3 === 1 ? "h-[520px]" : "h-[380px]"}

                  md:${index % 3 === 1 ? "h-[620px]" : "h-[420px]"}
                `}
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* NUMBER */}
                <div className="absolute top-6 left-6 text-white text-3xl md:text-4xl font-bold">
                  {project.id}
                </div>

                {/* VIEW BUTTON */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                >
                  <div
                    className="
                      w-28
                      h-28
                      rounded-full
                      bg-black/50
                      backdrop-blur-md
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-white
                      text-sm
                      tracking-[0.2em]
                      uppercase
                    "
                  >
                    View
                  </div>
                </div>

                {/* TEXT */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs tracking-[0.25em] uppercase text-[#DBCEA5]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DIALOG */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent
          className="
            border-none
            bg-transparent
            shadow-none
            p-0

            w-[95vw]
            max-w-5xl

            overflow-hidden
          "
        >
          <DialogTitle className="not-sr-only">
            {selectedProject && (
              <AutoProjectDialog
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function AutoProjectDialog({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div
      className="
        bg-[#f7f4e8]
        rounded-[32px]
        overflow-hidden
        relative
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          w-full

          h-[55vh]
          md:h-[72vh]
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImage]}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CATEGORY */}
        <div className="absolute top-6 left-6 z-20">
          <p
            className="
              text-white/80
              uppercase
              tracking-[0.35em]
              text-[10px]
              md:text-xs
            "
          >
            {project.category}
          </p>
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
    absolute
    top-5
    right-5
    z-20

    w-11
    h-11

    rounded-full
    bg-black/30
    backdrop-blur-md

    flex
    items-center
    justify-center

    text-white

    hover:bg-black/50
    transition
  "
        >
          <X size={24} />
        </button>

        {/* TITLE */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0

            z-20

            p-6
            md:p-10
          "
        >
          <h2
            className="
              text-white

              text-4xl
              sm:text-5xl
              md:text-7xl

              font-bold
              leading-[0.92]
              tracking-[-0.05em]

              max-w-4xl
            "
          >
            {project.title}
          </h2>
        </div>
      </div>

      {/* INDICATORS */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-3

          py-6
        "
      >
        {project.images.map((_, index) => (
          <div
            key={index}
            className={`
              rounded-full
              transition-all
              duration-500

              ${
                currentImage === index
                  ? "w-10 h-2 bg-[#8A7650]"
                  : "w-2 h-2 bg-[#8A7650]/30"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
