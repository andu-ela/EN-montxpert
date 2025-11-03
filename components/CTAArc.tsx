"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CtaSteelClean() {
  return (
    <section className="relative py-32 overflow-hidden bg-[linear-gradient(140deg,#e3e6ea,#c3c8cf,#9da2a8)] text-center">

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#1d1f21] tracking-wide">
          Transformons Votre{" "}
          <span className="text-orange-600 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-orange-500 after:animate-pulse">
            Projet Métallique
          </span>
        </h2>

        <p className="mt-5 text-lg text-[#2b2f33] opacity-90 font-light tracking-wide">
          Du concept à la réalisation — précision, innovation et excellence industrielle.
        </p>

        {/* CTA button */}
        <button className="group relative mt-10 px-14 py-4 font-semibold uppercase tracking-wide 
          bg-gradient-to-b from-[#363636] to-black text-white border border-gray-700 
          hover:border-orange-500 transition-all overflow-hidden shadow-[0_0_20px_rgba(255,115,0,0.15)]
          hover:shadow-[0_0_35px_rgba(255,115,0,0.45)]"
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            Contactez-nous
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>

          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
        </button>
      </div>
    </section>
  );
}
