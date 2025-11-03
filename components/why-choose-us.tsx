import { Shield, Zap, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "QUALITÉ & SÉCURITÉ",
    description: "Travail conforme aux exigences suisses, normes strictes de sécurité et contrôle qualité permanent.",
  },
  {
    icon: Award,
    title: "EXPERTISE CERTIFIÉE",
    description: "Techniciens, soudeurs et monteurs qualifiés avec expérience solide dans l'industrie métallique.",
  },
  {
    icon: Zap,
    title: "EFFICACITÉ & PRÉCISION",
    description: "Montage et démontage rapides, propres et parfaitement coordonnés sur site.",
  },
  {
    icon: Users,
    title: "PARTENAIRE DE CONFIANCE",
    description: "Accompagnement complet: conseil, réalisation, suivi. Fiabilité et transparence garanties.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10]">
      {/* Steel separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl text-[#d4d7dd] mb-6 text-shadow-heavy text-balance">
          POURQUOI TRAVAILLER AVEC NOUS?

          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto ember-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="steel-texture group relative p-8 border border-white/10 hover:border-[#ff7828]/50 transition-all duration-500 hover:scale-105"
            >
              {/* Ember glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7828]/0 to-[#ff7828]/0 group-hover:from-[#ff7828]/5 group-hover:to-[#ff5014]/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#2a2d35] to-[#1a1d24] border border-white/10 group-hover:border-[#ff7828]/50 transition-all">
                  <feature.icon className="w-10 h-10 text-[#ff7828]" strokeWidth={1.5} />
                </div>

                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-xl text-[#d4d7dd] mb-4 tracking-wide">
                  {feature.title}
                </h3>

                <p className="text-[#8a8d93] leading-relaxed text-pretty">{feature.description}</p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff7828]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff7828]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Steel separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93] to-transparent" />
    </section>
  )
}
