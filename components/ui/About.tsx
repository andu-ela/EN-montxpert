"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Target, Users, Award } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);

  return (
    <div
      ref={ref}
      className="min-h-screen bg-[#0a0c10] text-white overflow-hidden relative"
    >
      {/* ✨ Parallax Glow Background */}
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#ff7828]/25 to-[#ff5014]/10 blur-[150px] rounded-full pointer-events-none"
      />

      {/* === HERO SECTION === */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
        {/* Animated rotating outlines */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute w-[700px] h-[700px] rounded-full border border-[#ff7828]/20 blur-[1px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="font-[family-name:var(--font-orbitron)] text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            À PROPOS DE NOUS
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            L’ingénierie de précision rencontre l’excellence suisse. Nous sommes{" "}
            <span className="text-[#ff7828] font-semibold">EN MONTXPERT</span>,
            votre partenaire de confiance pour des solutions industrielles de
            classe mondiale.
          </motion.p>
        </motion.div>
      </section>

      {/* === STORY & MISSION SECTION === */}
      <section className="relative py-28 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff7828] to-[#ff5014] rounded flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">NOTRE HISTOIRE</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fondée sur les principes de la précision suisse et de l’excellence
              en ingénierie, EN MONTXPERT s’est imposée comme un leader dans la
              fabrication industrielle et les solutions techniques.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Avec des décennies d’expertise combinée, nous unissons le
              savoir-faire traditionnel et la technologie de pointe pour livrer
              des solutions qui dépassent les standards du secteur.
            </p>
          </motion.div>

          {/* Right - Mission */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff7828] to-[#ff5014] rounded flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">NOTRE MISSION</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fournir des solutions d’ingénierie inégalées qui permettent aux
              industries du monde entier d’exceller.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nous croyons en la précision, la fiabilité et l’innovation comme
              piliers de chaque projet.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* === CORE VALUES === */}
      <section className="relative py-28 text-center bg-gradient-to-b from-[#0f1115] via-[#0a0c10] to-[#0f1115] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#e1e4ea] mb-10">
            NOS VALEURS FONDAMENTALES
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto mb-16" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[ 
              { icon: Users, title: "ÉQUIPE EXPERTE", desc: "Des professionnels certifiés avec des décennies d’expérience." },
              { icon: Award, title: "QUALITÉ AVANT TOUT", desc: "Des processus certifiés ISO assurant l’excellence." },
              { icon: Target, title: "FOCUS CLIENT", desc: "Des solutions sur mesure conçues autour de vos besoins." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.06, rotateY: 2 }}
                className="p-8 border border-[#1f2429] bg-[#101215]/80 backdrop-blur-sm rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,120,40,0.25)] transition-all"
              >
                <item.icon className="w-12 h-12 text-[#ff7828] mx-auto mb-4" />
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* === CTA SECTION === */}
      <section className="relative py-28 text-center bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] overflow-hidden">
        <motion.div
          style={{ y: glowY }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff782820_0%,transparent_70%)] blur-3xl opacity-30 pointer-events-none"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="font-[family-name:var(--font-orbitron)] text-5xl md:text-7xl font-black text-[#e1e4ea] mb-6"
          >
            PRÊTS À <span className="text-[#ff7828]">COLLABORER</span> ?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mb-10 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-[#8a8d93] text-lg leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Discutons de la manière dont{" "}
            <span className="text-[#ff7828] font-semibold">EN MONTXPERT</span>{" "}
            peut transformer vos idées en solutions concrètes, alliant{" "}
            <span className="text-white">précision</span>,{" "}
            <span className="text-white">sécurité</span> et{" "}
            <span className="text-white">performance durable</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button className="px-8 py-3 bg-[#ff7828] text-black font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-[#ffa556] transition">
              CONTACTEZ-NOUS
            </button>
            <button className="px-8 py-3 border border-white/40 text-white font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-white hover:text-black transition">
              EN SAVOIR PLUS
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
