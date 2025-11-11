"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaDraftingCompass, FaHardHat, FaCogs, FaClipboardCheck, FaTools, FaCheckCircle,
  FaProjectDiagram, FaRulerCombined, FaWrench
} from "react-icons/fa";
import React, { useRef } from "react";

const steps = [
  {
    icon: <FaDraftingCompass className="text-[#ff7828] text-4xl" />,
    title: "Étude & Diagnostic Technique",
    desc: "Analyse du site, relevés laser, étude de faisabilité et lecture des plans architecturaux.",
  },
  {
    icon: <FaCogs className="text-[#ff7828] text-4xl" />,
    title: "Conception & Calcul Structurel",
    desc: "Modélisation 3D, plans d’exécution, calculs selon normes EN/Eurocodes et choix des matériaux.",
  },
  {
    icon: <FaClipboardCheck className="text-[#ff7828] text-4xl" />,
    title: "Planification & Organisation",
    desc: "Planification du chantier, coordination, logistique, sécurité et conformité réglementaire.",
  },
  {
    icon: <FaHardHat className="text-[#ff7828] text-4xl" />,
    title: "Fabrication de Haute Précision",
    desc: "Production certifiée, découpe CNC, soudures contrôlées, traitement anticorrosion.",
  },
  {
    icon: <FaTools className="text-[#ff7828] text-4xl" />,
    title: "Installation & Assemblage",
    desc: "Montage sur site, levage, boulonnage, alignement, finitions industrielles.",
  },
  {
    icon: <FaCheckCircle className="text-[#ff7828] text-4xl" />,
    title: "Contrôle Final & Livraison",
    desc: "Contrôles, essais, documentation technique, formation & maintenance.",
  },
  {
    icon: <FaProjectDiagram className="text-[#ff7828] text-4xl" />,
    title: "Suivi de Chantier",
    desc: "Supervision continue du chantier, gestion des imprévus et respect strict du calendrier.",
  },
  {
    icon: <FaRulerCombined className="text-[#ff7828] text-4xl" />,
    title: "Contrôle Qualité",
    desc: "Vérification de conformité, tests de résistance et validation technique des ouvrages.",
  },
  {
    icon: <FaWrench className="text-[#ff7828] text-4xl" />,
    title: "Maintenance & Assistance",
    desc: "Support post-livraison, maintenance préventive et accompagnement technique durable.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50, rotateX: 8 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Methodology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Section-wide parallax + depth transforms
  const sectionY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);

  return (
    <section
      ref={ref}
      id="methodology"
      className="relative py-28 bg-gradient-to-b from-[#0a0c0e] via-[#0c0f13] to-[#08090b] border-t border-[#1b1e22] overflow-hidden"
    >
      {/* 🩶 Subtle parallax steel texture */}
      <motion.div
        style={{ y: sectionY }}
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('/steel-texture.png')] bg-cover bg-center"
      />

      {/* 🔥 Moving orange glow */}
      <motion.div
        style={{ x: glowX, opacity: glowOpacity }}
        className="absolute -top-20 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#ff7828]/30 to-[#ff5014]/20 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <h2
            className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl uppercase tracking-tight text-[#e1e4ea]
            drop-shadow-[0_0_25px_rgba(255,120,40,0.12)]"
          >
            NOTRE MÉTHODOLOGIE
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg"
        >
          Une approche certifiée, rigoureuse et maîtrisée — de la conception à la livraison finale.
        </motion.p>

        {/* 🧱 3D Grid of Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-25% 0px -20% 0px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{
                scale: 1.05,
                rotateX: 2,
                boxShadow: "0 0 30px rgba(255,120,40,0.3)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-[#101215]/90 backdrop-blur-sm p-8 rounded-xl border border-[#1f2429] 
              hover:border-[#ff7828] transition-all duration-300 
              shadow-[0_0_18px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,120,40,0.25)]
              group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
