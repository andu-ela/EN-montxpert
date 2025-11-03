"use client";

import { motion } from "framer-motion";
import { 
  FaDraftingCompass, FaHardHat, FaCogs, FaClipboardCheck, FaTools, FaCheckCircle 
} from "react-icons/fa";
import React from "react";

const steps = [
  {
    icon: <FaDraftingCompass className="text-orange-500 text-4xl" />,
    title: "Étude & Diagnostic Technique",
    desc: "Analyse du site, relevés laser, étude de faisabilité et lecture des plans architecturaux.",
  },
  {
    icon: <FaCogs className="text-orange-500 text-4xl" />,
    title: "Conception & Calcul Structurel",
    desc: "Modélisation 3D, plans d’exécution, calculs selon normes EN/Eurocodes et choix des matériaux.",
  },
  {
    icon: <FaClipboardCheck className="text-orange-500 text-4xl" />,
    title: "Planification & Organisation",
    desc: "Planification du chantier, coordination, logistique, sécurité et conformité réglementaire.",
  },
  {
    icon: <FaHardHat className="text-orange-500 text-4xl" />,
    title: "Fabrication de Haute Précision",
    desc: "Production certifiée, découpe CNC, soudures contrôlées, traitement anticorrosion.",
  },
  {
    icon: <FaTools className="text-orange-500 text-4xl" />,
    title: "Installation & Assemblage",
    desc: "Montage sur site, levage, boulonnage, alignement, finitions industrielles.",
  },
  {
    icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
    title: "Contrôle Final & Livraison",
    desc: "Contrôles, essais, documentation technique, formation & maintenance.",
  },
];

const Methodology = () => {
  return (
    <section 
      id="methodology"
      className="py-28 bg-gradient-to-b from-[#0a0c0e] via-[#0c0f13] to-[#08090b] 
      relative border-t border-[#1b1e22]"
    >

      {/* Steel texture subtle overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/steel-texture.png')] bg-cover" />

      <div className="container mx-auto px-6 relative">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
          className="text-center mb-14"
        >
          <h2 className="
            font-[family-name:var(--font-orbitron)]
            font-black text-5xl md:text-7xl uppercase tracking-tight text-[#e1e4ea]
            drop-shadow-[0_0_25px_rgba(255,120,40,0.12)]
          ">
            NOTRE MÉTHODOLOGIE
          </h2>

          <div className="w-36 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto mt-4 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg"
        >
          Une approche certifiée, rigoureuse et maîtrisée — de la conception à la livraison finale.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
              viewport={{ once: false, margin: "-35% 0px -35% 0px" }}
              className="bg-[#101215]/90 backdrop-blur-sm p-8 rounded-xl border border-[#1f2429] hover:border-[#ff7828] transition-all duration-300 shadow-[0_0_18px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_22px_rgba(255,120,40,0.22)] hover:-translate-y-2"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
