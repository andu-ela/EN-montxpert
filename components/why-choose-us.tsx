"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "QUALITÉ & SÉCURITÉ",
    description:
      "Travail conforme aux exigences suisses, normes strictes de sécurité et contrôle qualité permanent.",
  },
  {
    icon: Award,
    title: "EXPERTISE CERTIFIÉE",
    description:
      "Techniciens, soudeurs et monteurs qualifiés avec expérience solide dans l'industrie métallique.",
  },
  {
    icon: Zap,
    title: "EFFICACITÉ & PRÉCISION",
    description:
      "Montage et démontage rapides, propres et parfaitement coordonnés sur site.",
  },
  {
    icon: Users,
    title: "PARTENAIRE DE CONFIANCE",
    description:
      "Accompagnement complet: conseil, réalisation, suivi. Fiabilité et transparence garanties.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);

  // Parallax background scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Stronger, visible parallax + scale
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.1]);

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] overflow-hidden"
    >
      {/* 🔥 Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-[url('/steel-texture.png')] bg-cover bg-center opacity-[0.07] pointer-events-none"
      />

      {/* Steel separator top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#d4d7dd] mb-6 tracking-tight text-shadow-heavy"
          >
            POURQUOI TRAVAILLER AVEC NOUS?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto ember-glow origin-center"
          />
        </div>

        {/* Features with reversible scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="steel-texture group relative p-8 border border-white/10 hover:border-[#ff7828]/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7828]/0 to-[#ff7828]/0 group-hover:from-[#ff7828]/5 group-hover:to-[#ff5014]/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#2a2d35] to-[#1a1d24] border border-white/10 group-hover:border-[#ff7828]/50 transition-all">
                  <feature.icon className="w-10 h-10 text-[#ff7828]" strokeWidth={1.5} />
                </div>

                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-xl text-[#d4d7dd] mb-4 tracking-wide">
                  {feature.title}
                </h3>

                <p className="text-[#8a8d93] leading-relaxed">{feature.description}</p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff7828]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff7828]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Steel separator bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />
    </section>
  );
}
