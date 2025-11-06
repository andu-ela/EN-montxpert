"use client";
import Image from "next/image";

export default function CTAConstruction() {
  return (
    <section className="relative w-full bg-[#0d0f13] py-10 overflow-hidden border-t border-white/10">
      {/* Soft grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* thin orange line left */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[#ff7a1a]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">
        
        {/* 🧱 LEFT TEXT SIDE */}
        <div className="relative text-center md:text-left md:pl-10 lg:pl-20 order-2 md:order-1">
          <p className="text-[#ff7a1a] text-xs uppercase tracking-[0.2em] mb-3">
            Expertise Suisse
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-orbitron)] font-extrabold text-white leading-tight">
            Construction Métallique <br />
            <span className="text-[#ff7a1a]">de Haute Précision</span>
          </h2>

          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed">
            Solutions structurelles pour projets industriels, montages métalliques,
            soudure certifiée & installations complexes.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a className="px-8 py-3 bg-[#ff7a1a] text-black font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-[#ffa556] transition">
              Demander un devis
            </a>
            <a className="px-8 py-3 border border-white/40 text-white font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-white hover:text-black transition">
              Contact direct
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6 tracking-wide">
            Réponse rapide • Intervention en Suisse
          </p>
        </div>

        {/* 🧱 RIGHT IMAGE SIDE */}
<div className="relative flex items-center justify-center order-1 md:order-2 scale-[1.2] md:scale-[1.45] md:translate-x-16 lg:translate-x-24 transition-transform duration-300">
          <div className="absolute w-[220px] h-[220px] md:w-[360px] md:h-[360px] bg-gradient-to-br from-[#ff7a1a]/70 to-[#ffb067]/50 blur-[90px]" />
          <div className="relative w-[95%] sm:w-[420px] md:w-[620px] h-[440px] sm:h-[560px] md:h-[680px] overflow-visible">
            <Image
              src="/sd.png"
              alt="Construction Worker"
              fill
              className="object-contain p-2 md:p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
