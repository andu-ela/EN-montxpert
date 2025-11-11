"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTAConstruction() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax + 3D depth transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "6deg"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);

  // 📍 Scroll to specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0d0f13] py-20 overflow-hidden border-t border-white/10"
    >
      {/* 🔳 Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Thin orange accent line */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[#ff7a1a]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">
        {/* 🧱 LEFT — Text Block with motion */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center md:text-left md:pl-10 lg:pl-20 order-2 md:order-1"
        >
          <p className="text-[#ff7a1a] text-xs uppercase tracking-[0.2em] mb-3">
            Expertise Suisse
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-orbitron)] font-extrabold text-white leading-tight drop-shadow-[0_0_25px_rgba(255,120,40,0.2)]">
            Construction Métallique <br />
            <span className="text-[#ff7a1a]">de Haute Précision</span>
          </h2>

          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed">
            Solutions structurelles pour projets industriels, montages métalliques,
            soudure certifiée & installations complexes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            {/* 🔸 Scroll to section */}
            <button
              onClick={() => scrollToSection("devis")}
              className="px-8 py-3 bg-[#ff7a1a] text-black font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-[#ffa556] transition"
            >
              Demander un devis
            </button>

            {/* 🔸 Go to Contact page */}
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/40 text-white font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-white hover:text-black transition text-center"
            >
              Contact direct
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-6 tracking-wide">
            Réponse rapide • Intervention en Suisse
          </p>
        </motion.div>

        {/* 🧱 RIGHT — Image with floating parallax + glow */}
        <motion.div
          style={{ y: imageY, rotate }}
          className="relative flex items-center justify-center order-1 md:order-2 scale-[1.15] md:scale-[1.35] md:translate-x-12 lg:translate-x-20"
        >
          {/* Orange glow behind worker */}
          <motion.div
            style={{ y: glowY, opacity: glowOpacity }}
            className="absolute w-[220px] h-[220px] md:w-[360px] md:h-[360px] bg-gradient-to-br from-[#ff7a1a]/70 to-[#ffb067]/40 blur-[90px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-[95%] sm:w-[420px] md:w-[620px] h-[440px] sm:h-[560px] md:h-[680px] overflow-visible will-change-transform"
          >
            <Image
              src="/sd.png"
              alt="Construction Worker"
              fill
              priority
              className="object-contain p-2 md:p-4 drop-shadow-[0_0_25px_rgba(255,120,40,0.15)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
