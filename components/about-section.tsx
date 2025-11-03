export function AboutSection() {
  return (
    <section id="apropos" className="relative py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10]">
      {/* Steel separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Foto + kutitë (majtas) */}
          <div className="relative">
            {/* Foto */}
            <div className="relative  mb-8">
              <div className="steel-texture relative aspect-video border-2 border-white/10 p-2">
                <img
                  src="/industrial-workers-welding-steel-in-factory-team-c.jpg"
                  alt="Notre équipe"
                  className="w-full h-full object-cover"
                />

                {/* HUD */}
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
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#ff7828]/5 to-transparent opacity-20"
                  style={{ backgroundSize: "100% 4px" }}
                />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-[#ff7828]" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-[#ff7828]" />
            </div>

            {/* ✅ 3 kutitë poshtë fotos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="steel-texture border border-white/10 p-4 lg:p-6 text-center">
                <div className="font-[family-name:var(--font-orbitron)] font-black text-2xl text-[#ff7828] mb-2">
                  EXPERTISE
                </div>
                <div className="text-sm text-[#8a8d93] uppercase tracking-wide">Construction Métallique</div>
              </div>

              <div className="steel-texture border border-white/10 p-4 lg:p-6 text-center">
                <div className="font-[family-name:var(--font-orbitron)] font-black text-2xl text-[#ff7828] mb-2">
                  FIABILITÉ
                </div>
                <div className="text-sm text-[#8a8d93] uppercase tracking-wide">Montage Industriel Sécurisé</div>
              </div>

              <div className="steel-texture border border-white/10 p-4 lg:p-6 text-center">
                <div className="font-[family-name:var(--font-orbitron)] font-black text-2xl text-[#ff7828] mb-2">
                  QUALITÉ
                </div>
                <div className="text-sm text-[#8a8d93] uppercase tracking-wide">Standards Suisses</div>
              </div>
            </div>
          </div>

          {/* ✅ Teksti në të djathtë — i plotë dhe pa ndryshime */}
          <div>
            <h2 className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#d4d7dd] mb-8 text-shadow-heavy">
              À PROPOS
            </h2>

            <div className="space-y-6 text-[#b8bbc1] leading-relaxed">
              
              <p className="text-lg text-pretty">
                Basée en Suisse, <span className="text-[#ff7828] font-bold">EN MONTXPERT</span> est une entreprise spécialisée
                dans le montage industriel et la construction métallique. Nous accompagnons nos clients dans la réalisation de
                structures en acier durables, sécurisées et adaptées aux exigences modernes.
              </p>

              <p className="text-pretty">
                Nos domaines d'expertise comprennent le montage et démontage d’installations industrielles, 
                structures métalliques, charpentes acier, façades métalliques, passerelles, escaliers industriels 
                ainsi que hangars et bâtiments techniques. Nous intervenons également sur des systèmes de ventilation
                industrielle et installations métalliques spécifiques.
              </p>

              <p className="text-pretty">
                Notre équipe qualifiée associe savoir-faire solide, précision suisse et technologies de pointe 
                pour garantir des résultats fiables, conformes aux normes les plus strictes du secteur.
                Chaque projet est réalisé avec rigueur, sécurité et engagement total envers la qualité.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* Steel separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />
    </section>
  );
}
