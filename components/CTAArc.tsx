"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SteelButton } from "./steel-button";

export default function CtaSteelClean() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] overflow-hidden text-center"
    >
      {/* Top steel separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />

      {/* Parallax steel glow background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff782820_0%,transparent_70%)] blur-3xl opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col items-center justify-center text-center">
        {/* Title with scroll animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#d4d7dd] mb-6 tracking-tight text-balance"
        >
          PRÊTS À <span className="text-[#ff7828]">COLLABORER</span> ?
        </motion.h2>

        {/* Gradient underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="origin-center w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto ember-glow mb-10"
        />

        {/* Paragraph with smooth fade-up */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#8a8d93] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Discutons de la manière dont{" "}
          <span className="text-[#ff7828] font-semibold">EN MONTXPERT</span> peut
          transformer vos idées en solutions concrètes, alliant{" "}
          <span className="text-white">précision</span>,{" "}
          <span className="text-white">sécurité</span> et{" "}
          <span className="text-white">performance durable</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
{/* CONTACT button → goes to contact page */}
<SteelButton
  variant="primary"
  size="lg"
  onClick={() => (window.location.href = "/contact")}
  className="text-[#ff7722] hover:text-[#ff8c33]"
>
  CONTACTEZ-NOUS
</SteelButton>

{/* EN SAVOIR PLUS → scrolls to About section */}
<SteelButton
  variant="secondary"
  size="lg"
  onClick={() => (window.location.href = "/about")}

>
  EN SAVOIR PLUS
</SteelButton>

        </motion.div>
      </div>

      {/* Bottom steel separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />
    </section>
  );
}
