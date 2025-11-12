"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { title: "HANGAR INDUSTRIEL", location: "Genève", image: "/hangar.jpg", category: "Structures" },
  { title: "FAÇADE MÉTALLIQUE", location: "Lausanne", image: "/metal-fasade.jpg", category: "Façades" },
  { title: "CHARPENTE ACIER", location: "Zurich", image: "/steel1.jpg", category: "Charpentes" },
  { title: "ESCALIER MÉTALLIQUE", location: "Berne", image: "/industrial-steel-staircase-modern-metal-architectu.jpg", category: "Structures" },
  { title: "PASSERELLE ACIER", location: "Fribourg", image: "/2.jpg", category: "Ouvrages" },
  { title: "HALL INDUSTRIEL", location: "Neuchâtel", image: "/3.jpg", category: "Structures" },
];

export function ProjectsGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.1]);

  return (
 <section
  ref={ref}
  id="realisations"
  className="relative py-20 sm:py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] overflow-hidden"
>
  {/* Title Section */}
  <motion.div
    className="text-center mb-12 sm:mb-20 px-2"
  >
    <h2 className="font-[family-name:var(--font-orbitron)] font-black text-3xl sm:text-5xl md:text-7xl text-[#d4d7dd] mb-4 sm:mb-6 text-shadow-heavy">
      NOS RÉALISATIONS
    </h2>
    <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto ember-glow" />
  </motion.div>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="group relative aspect-[16/12] sm:aspect-[4/3] overflow-hidden cursor-pointer border border-white/5 hover:border-[#ff7828]/50 transition-all duration-500 rounded-lg sm:rounded-none"
      >
        {/* Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay and Info */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
          <motion.div
            className="inline-block px-2 py-1 bg-[#ff7828]/20 border border-[#ff7828]/50 mb-2 sm:mb-3"
          >
            <span className="text-[10px] sm:text-xs text-[#ff7828] font-[family-name:var(--font-orbitron)] font-bold tracking-wider">
              {project.category}
            </span>
          </motion.div>

          <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-lg sm:text-2xl text-[#d4d7dd] mb-1 sm:mb-2 text-shadow-heavy">
            {project.title}
          </h3>
          <p className="text-[#8a8d93] text-xs sm:text-sm tracking-wide">{project.location}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

  );
}
