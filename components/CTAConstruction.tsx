"use client";
import Image from "next/image";

export default function CTAConstruction() {
  return (
    <section className="relative w-full bg-[#0d0f13] py-[6px] overflow-hidden border-t border-white/10">

      {/* Soft grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* thin orange line left */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[#ff7a1a]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">

        {/* LEFT IMAGE SIDE */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[420px] h-[420px] bg-gradient-to-br from-[#ff7a1a]/70 to-[#ffb067]/50 blur-[100px]" />

          <div className="relative w-[480px] h-[580px]  overflow-hidden ">
            <Image
              src="/cta.png"
              alt="Construction Worker"
              fill
              className="object-cover "
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 " />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="relative">
          <p className="text-[#ff7a1a] text-xs uppercase tracking-[0.2em] mb-3">
            Expertise Suisse
          </p>

          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-orbitron)] font-extrabold text-white leading-tight">
            Construction Métallique <br />
            <span className="text-[#ff7a1a]">de Haute Précision</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-md leading-relaxed">
            Solutions structurelles pour projets industriels, montages métalliques, soudure certifiée & installations complexes.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
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
      </div>
    </section>
  );
}
