"use client"

import { useState } from "react"

const projects = [
  {
    title: "HANGAR INDUSTRIEL",
    location: "Genève",
    image: "/large-industrial-steel-warehouse-construction-nigh.jpg",
    category: "Structures",
  },
  {
    title: "FAÇADE MÉTALLIQUE",
    location: "Lausanne",
    image: "/modern-steel-building-facade-architectural-metal-p.jpg",
    category: "Façades",
  },
  {
    title: "CHARPENTE ACIER",
    location: "Zurich",
    image: "/steel-beam-framework-construction-site-crane-indus.jpg",
    category: "Charpentes",
  },
  {
    title: "ESCALIER MÉTALLIQUE",
    location: "Berne",
    image: "/industrial-steel-staircase-modern-metal-architectu.jpg",
    category: "Structures",
  },
  {
    title: "PASSERELLE ACIER",
    location: "Fribourg",
    image: "/steel-bridge-walkway-industrial-construction-metal.jpg",
    category: "Ouvrages",
  },
  {
    title: "HALL INDUSTRIEL",
    location: "Neuchâtel",
    image: "/massive-industrial-hall-steel-construction-factory.jpg",
    category: "Structures",
  },
]

export function ProjectsGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="realisations" className="relative py-32 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#d4d7dd] mb-6 text-shadow-heavy text-balance">
            NOS RÉALISATIONS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto ember-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div
                  className={`transform transition-all duration-500 ${
                    hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <div className="inline-block px-3 py-1 bg-[#ff7828]/20 border border-[#ff7828]/50 mb-3">
                    <span className="text-xs text-[#ff7828] font-[family-name:var(--font-orbitron)] font-bold tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-2xl text-[#d4d7dd] mb-2 text-shadow-heavy">
                  {project.title}
                </h3>

                <p className="text-[#8a8d93] text-sm tracking-wide">{project.location}</p>

                {/* Chrome sweep effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ${
                    hoveredIndex === index ? "translate-x-full" : "-translate-x-full"
                  }`}
                />
              </div>

              {/* Corner frame */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff7828] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff7828] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff7828] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff7828] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
