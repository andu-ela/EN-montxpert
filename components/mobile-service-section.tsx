"use client";
import { Truck, HardHat, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MobileServiceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax movement for the glowing layer
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const features = [
    {
      icon: Truck,
      title: "Mobilité Totale",
      text: "Unité mobile équipée pour interventions partout en Suisse.",
    },
    {
      icon: HardHat,
      title: "Équipes Certifiées",
      text: "Soudeurs, monteurs et techniciens qualifiés et expérimentés.",
    },
    {
      icon: Shield,
      title: "Sécurité Prioritaire",
      text: "Procédures strictes, conformité et normes suisses.",
    },
  ];

  return (
    <section
      ref={ref}
      id="brand-mobile"
      className="relative w-full py-48 bg-black overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        >
          <source src="/moving.mp4" type="video/mp4" />
        </video>

        {/* Parallax glow overlay */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff782820_0%,transparent_70%)] blur-3xl pointer-events-none"
        />

        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* ⚙️ Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2
            className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#d4d7dd] uppercase tracking-tight text-shadow-heavy text-balance"
          >
            INTERVENTION SUR SITE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto ember-glow mt-4" />
        </motion.div>

        {/* Subtitle paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-5 leading-relaxed"
        >
          Déploiement rapide d’équipes spécialisées pour montage métallique,
          maintenance industrielle et installation de structures sur chantier.
        </motion.p>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 120, 40, 0.3)",
              }}
              className="flex flex-col items-center text-gray-200 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-500"
            >
              <f.icon size={42} className="mb-4 text-[#ff7828]" />
              <h4 className="font-bold font-[family-name:var(--font-orbitron)] text-lg mb-2">
                {f.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
