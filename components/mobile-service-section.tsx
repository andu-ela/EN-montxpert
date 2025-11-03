"use client"
import { Truck, HardHat, Shield } from "lucide-react"

export default function MobileServiceSection() {
  return (
<section id="brand-mobile" className="relative w-full py-48 bg-black overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0">
    <video
      autoPlay loop muted playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-45"
    >
      <source src="/moving.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center px-6">

    {/* UPDATED TITLE BLOCK */}
    <div className="text-center mb-14">
      <h2
        className="
          font-[family-name:var(--font-orbitron)]
          font-black text-5xl md:text-7xl 
          text-[#d4d7dd] uppercase tracking-tight text-shadow-heavy text-balance
        "
      >
        INTERVENTION SUR SITE
      </h2>

      {/* glowing separator */}
      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto ember-glow mt-4" />
    </div>

    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-5 leading-relaxed">
      Déploiement rapide d’équipes spécialisées pour montage métallique, 
      maintenance industrielle et installation de structures sur chantier.
    </p>

    {/* Key Points */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="flex flex-col items-center text-gray-200">
        <Truck size={38} className="mb-4 text-[#ff7828]" />
        <h4 className="font-bold font-[family-name:var(--font-orbitron)] text-lg">Mobilité Totale</h4>
        <p className="text-sm text-gray-400 mt-2">Unité mobile équipée pour interventions partout en Suisse.</p>
      </div>

      <div className="flex flex-col items-center text-gray-200">
        <HardHat size={38} className="mb-4 text-[#ff7828]" />
        <h4 className="font-bold font-[family-name:var(--font-orbitron)] text-lg">Équipes Certifiées</h4>
        <p className="text-sm text-gray-400 mt-2">Soudeurs, monteurs et techniciens qualifiés et expérimentés.</p>
      </div>

      <div className="flex flex-col items-center text-gray-200">
        <Shield size={38} className="mb-4 text-[#ff7828]" />
        <h4 className="font-bold font-[family-name:var(--font-orbitron)] text-lg">Sécurité Prioritaire</h4>
        <p className="text-sm text-gray-400 mt-2">Procédures strictes, conformité et normes suisses.</p>
      </div>

    </div>
  </div>

</section>
  );
}
