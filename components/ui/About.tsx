import { Building2, Target, Users, Award } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-24 overflow-hidden text-left">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-6 sm:top-20 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 border border-orange-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-10 right-6 sm:bottom-20 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 border border-orange-500/20 rotate-12 animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              À PROPOS DE NOUS
            </span>
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-6 animate-slide-in"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed animate-fade-in-delay">
            L’ingénierie de précision rencontre l’excellence suisse. Nous sommes{" "}
            <span className="text-[#ff7828] font-semibold">EN MONTXPERT</span>,
            votre partenaire de confiance pour fournir des solutions industrielles de classe mondiale.
          </p>
        </div>
      </section>

      {/* STORY + MISSION */}
      <section className="px-4 sm:px-8 lg:px-24 py-16 md:py-20 text-left">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24 md:mb-32">
          {/* STORY */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center">
                <Building2 className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">NOTRE HISTOIRE</h2>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Fondée sur les principes de la précision suisse et de l’excellence en ingénierie,
              EN MONTXPERT s’est imposée comme un leader dans la fabrication industrielle et les solutions techniques.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Avec des décennies d’expertise combinée, nous unissons le savoir-faire traditionnel et la technologie
              de pointe pour livrer des solutions qui dépassent les standards du secteur.
            </p>
          </div>

          {/* MISSION */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center">
                <Target className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">NOTRE MISSION</h2>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Fournir des solutions d’ingénierie inégalées qui permettent aux industries du monde entier d’exceller.
              Nous croyons en la précision, la fiabilité et l’innovation comme piliers de chaque projet.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Notre engagement va au-delà de la livraison : nous bâtissons des partenariats durables fondés sur
              l’excellence, l’intégrité et l’amélioration continue.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] text-left">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-orbitron)] font-black text-4xl sm:text-6xl md:text-7xl text-[#d4d7dd] mb-6 text-shadow-heavy">
            NOS VALEURS FONDAMENTALES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mb-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "ÉQUIPE EXPERTE",
                desc: "Des professionnels certifiés avec des décennies d’expérience industrielle.",
              },
              {
                icon: Award,
                title: "QUALITÉ AVANT TOUT",
                desc: "Des processus certifiés ISO assurant l’excellence selon les standards suisses.",
              },
              {
                icon: Target,
                title: "FOCUS CLIENT",
                desc: "Des solutions sur mesure conçues autour de vos besoins spécifiques.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="steel-texture group relative p-8 border border-white/10 hover:border-[#ff7828]/50 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff7828]/0 to-[#ff7828]/0 group-hover:from-[#ff7828]/5 group-hover:to-[#ff5014]/5 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#2a2d35] to-[#1a1d24] border border-white/10 group-hover:border-[#ff7828]/50 transition-all">
                    <item.icon className="w-10 h-10 text-[#ff7828]" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-xl text-[#d4d7dd] mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#8a8d93] leading-relaxed">{item.desc}</p>
                </div>

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff7828]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff7828]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-4 sm:px-8 lg:px-24 py-16 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border-l-4 border-orange-500 rounded-lg text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">POURQUOI NOUS CHOISIR</h2>
        <div className="grid sm:grid-cols-2 gap-8 text-gray-300">
          <ul className="space-y-3">
            {[
              "Des normes de qualité sans compromis",
              "Des solutions d’ingénierie innovantes",
              "Une livraison des projets dans les délais",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {[
              "Un support technique complet",
              "Des modèles de tarification compétitifs",
              "Un réseau de service global",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] overflow-hidden text-left">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93]/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <h2 className="font-[family-name:var(--font-orbitron)] font-black text-4xl sm:text-6xl md:text-7xl text-[#d4d7dd] mb-6">
            PRÊTS À <span className="text-[#ff7828]">COLLABORER</span> ?
          </h2>
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mb-10" />

          <p className="text-[#8a8d93] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
            Discutons de la manière dont <span className="text-[#ff7828] font-semibold">EN MONTXPERT</span> peut
            transformer vos idées en solutions concrètes, alliant{" "}
            <span className="text-white">précision</span>, <span className="text-white">sécurité</span> et{" "}
            <span className="text-white">performance durable</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="/contact"
              className="relative group px-10 py-4 font-[family-name:var(--font-orbitron)] text-lg text-[#d4d7dd] border border-white/10 bg-gradient-to-br from-[#2a2d35] to-[#1a1d24] rounded-lg transition-all duration-500 hover:scale-105 hover:border-[#ff7828]/60"
            >
              <span className="relative z-10 group-hover:text-white">CONTACTEZ-NOUS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7828]/0 via-[#ff7828]/10 to-[#ff5014]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/about"
              className="relative group px-10 py-4 font-[family-name:var(--font-orbitron)] text-lg text-[#ff7828] border border-[#ff7828]/50 rounded-lg transition-all duration-500 hover:scale-105 hover:bg-[#ff7828]/10"
            >
              <span className="relative z-10 group-hover:text-white">EN SAVOIR PLUS</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93]/50 to-transparent" />
      </section>
    </div>
  );
}

export default About;
