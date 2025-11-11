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
      className="relative py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-[url('/steel-texture.png')] bg-cover bg-center opacity-[0.05] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#d4d7dd] mb-6 text-shadow-heavy">
            NOS RÉALISATIONS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto ember-glow" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer border border-white/5 hover:border-[#ff7828]/50 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image with subtle parallax zoom */}
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Info content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? 0 : 10,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="inline-block px-3 py-1 bg-[#ff7828]/20 border border-[#ff7828]/50 mb-3">
                    <span className="text-xs text-[#ff7828] font-[family-name:var(--font-orbitron)] font-bold tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </motion.div>

                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-2xl text-[#d4d7dd] mb-2 text-shadow-heavy">
                  {project.title}
                </h3>
                <p className="text-[#8a8d93] text-sm tracking-wide">{project.location}</p>

                {/* Chrome sweep */}
                <motion.div
                  animate={{
                    x: hoveredIndex === index ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut", repeat: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
              </div>

              {/* Corner frame */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff7828] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff7828] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff7828] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff7828] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
