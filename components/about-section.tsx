"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // subtle parallax background
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section
      ref={ref}
      id="apropos"
      className="relative py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] overflow-hidden"
    >
      {/* Parallax steel texture background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('/steel-texture.png')] bg-cover bg-center opacity-[0.05] pointer-events-none"
      />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE — Image + Boxes */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mb-8">
              <div className="steel-texture relative aspect-video border-2 border-white/10 p-2 overflow-hidden">
                <motion.img
                  src="/about.jpg"
                  alt="Notre équipe"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* HUD boxes */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/80 border border-[#ff7828]/50 px-3 py-2">
                    <div className="text-[#ff7828] text-xs font-[family-name:var(--font-orbitron)] font-bold tracking-wider">
                      LIVE FEED
                    </div>
                  </div>
                  <div className="bg-black/80 border border-[#ff7828]/50 px-3 py-2">
                    <div className="text-[#ff7828] text-xs font-[family-name:var(--font-orbitron)] font-bold tracking-wider">
                      ATELIER PRINCIPAL
                    </div>
                  </div>
                </div>

                {/* Scan line */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#ff7828]/5 to-transparent opacity-20" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-[#ff7828]" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-[#ff7828]" />
            </div>

            {/* 3 Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "EXPERTISE", text: "Construction Métallique" },
                { title: "FIABILITÉ", text: "Montage Industriel Sécurisé" },
                { title: "QUALITÉ", text: "Standards Suisses" },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="steel-texture border border-white/10 p-4 lg:p-6 text-center"
                >
                  <div className="font-[family-name:var(--font-orbitron)] font-black text-2xl text-[#ff7828] mb-2">
                    {box.title}
                  </div>
                  <div className="text-sm text-[#8a8d93] uppercase tracking-wide">{box.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE — Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#d4d7dd] mb-8 text-shadow-heavy"
            >
              À PROPOS
            </motion.h2>

            <div className="space-y-6 text-[#b8bbc1] leading-relaxed">
              {[
                `Basée en Suisse, EN MONTXPERT est une entreprise spécialisée dans le montage industriel et la construction métallique. Nous accompagnons nos clients dans la réalisation de structures en acier durables, sécurisées et adaptées aux exigences modernes.`,
                `Nos domaines d'expertise comprennent le montage et démontage d’installations industrielles, structures métalliques, charpentes acier, façades métalliques, passerelles, escaliers industriels ainsi que hangars et bâtiments techniques.`,
                `Notre équipe qualifiée associe savoir-faire solide, précision suisse et technologies de pointe pour garantir des résultats fiables, conformes aux normes les plus strictes du secteur.`,
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className={`text-pretty ${i === 0 ? "text-lg" : ""}`}
                >
                  {text.includes("EN MONTXPERT") ? (
                    <>
                      Basée en Suisse,{" "}
                      <span className="text-[#ff7828] font-bold">EN MONTXPERT</span>{" "}
                      est une entreprise spécialisée dans le montage industriel et la construction métallique...
                    </>
                  ) : (
                    text
                  )}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />
    </section>
  );
}
