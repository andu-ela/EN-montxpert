"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaDraftingCompass, FaCogs, FaClipboardCheck, FaHardHat,
  FaTools, FaCheckCircle, FaProjectDiagram, FaRulerCombined, FaWrench
} from "react-icons/fa";

const steps = [
  { icon: <FaDraftingCompass />, title: "Étude & Diagnostic", desc: "Analyse du site et étude de faisabilité." },
  { icon: <FaCogs />, title: "Conception Structurelle", desc: "Modélisation 3D & calculs selon normes EN/Eurocodes." },
  { icon: <FaClipboardCheck />, title: "Planification", desc: "Coordination, sécurité et conformité." },
  { icon: <FaHardHat />, title: "Fabrication", desc: "Production CNC & traitements certifiés." },
  { icon: <FaTools />, title: "Installation", desc: "Assemblage sur site avec précision." },
  { icon: <FaCheckCircle />, title: "Contrôle Final", desc: "Essais, documentation et validation." },
  { icon: <FaProjectDiagram />, title: "Suivi de Chantier", desc: "Supervision et gestion continue." },
  { icon: <FaRulerCombined />, title: "Contrôle Qualité", desc: "Tests et validation technique." },
  { icon: <FaWrench />, title: "Maintenance", desc: "Support et maintenance durable." },
];

export default function Methodology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);

  return (
    <section
      ref={ref}
      id="methodology"
      className="relative py-28 bg-[#090b0d] overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff772240_0%,transparent_70%)] blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-orbitron)] text-5xl md:text-7xl font-black text-[#e1e4ea] mb-3 tracking-tight">
            NOTRE MÉTHODOLOGIE
          </h2>
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto" />
        </motion.div>

        {/* Responsive Timeline */}
        <div className="relative flex flex-col md:flex-row md:justify-center md:items-start gap-12 md:gap-10">
          {/* Line (vertical on mobile, horizontal on desktop) */}
          <div className="absolute md:top-1/2 md:left-0 md:right-0 md:h-[3px] md:w-full bg-gradient-to-r from-transparent via-[#ff7828]/60 to-transparent md:mx-auto top-0 left-[22px] h-full w-[3px] bg-gradient-to-b from-[#ff7828]/60 to-transparent md:transform md:-translate-y-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex md:flex-col items-start md:items-center text-left md:text-center md:w-[240px]"
            >
              {/* Icon Circle */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0f1114] border border-[#ff7828]/50 flex items-center justify-center text-[#ff7828] text-2xl md:text-3xl shadow-[0_0_15px_rgba(255,120,40,0.3)] mx-auto mb-4 md:mb-8">
                {step.icon}
              </div>

              {/* Card */}
              <div className="bg-[#101214]/90 border border-[#1f2429] rounded-xl p-5 md:p-6 hover:border-[#ff7828]/60 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,120,40,0.25)] w-full md:w-[230px]">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
