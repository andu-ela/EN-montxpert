"use client";
import { motion } from "framer-motion";
import { Wrench, HardHat, Shield } from "lucide-react";

export default function SiteWorkSection() {
  const features = [
    {
      icon: Wrench,
      title: "Intervention Rapide",
      text: "Nos équipes se déplacent sur site pour garantir une mise en œuvre efficace et une résolution rapide des besoins techniques.",
    },
    {
      icon: HardHat,
      title: "Équipes Certifiées",
      text: "Techniciens et monteurs qualifiés, formés selon les normes suisses et européennes les plus strictes.",
    },
    {
      icon: Shield,
      title: "Qualité & Sécurité",
      text: "Toutes nos interventions respectent des protocoles rigoureux de sécurité, de conformité et de qualité durable.",
    },
  ];

  return (
    <section
      id="travaux-site"
      className="relative bg-gradient-to-br from-[#090b0d] via-[#101214] to-[#0a0b0d] py-28 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20 px-6">
        {/* 🧱 TITULLI & TEKSTI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-52"
        >
          {/* TITULLI MAJTAS */}
          <h2 className="font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-6xl lg:text-7xl text-[#e1e4ea] uppercase tracking-tight leading-tight max-w-xl mb-8">
            Travaux <span className="text-[#ff7828]">Sur Site</span>
          </h2>

          {/* TEKSTI DJATHTAS */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mt-2 md:mt-0">
            Nous intervenons directement sur vos chantiers pour le montage,<br/> la maintenance et 
            l’assemblage industriel, avec rapidité, précision et respect absolu des normes. 
            Nos équipes assurent un travail fiable, durable et parfaitement adapté à vos besoins.
          </p>
        </motion.div>

        {/* 🧩 FEATURES & VIDEO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* FEATURES */}
          <div>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-5 mb-8 group"
              >
                <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-[#0f1114] border border-[#ff7828]/40 text-[#ff7828] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_25px_rgba(255,120,40,0.2)]">
                  <f.icon size={30} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white font-[family-name:var(--font-orbitron)] mb-1">
                    {f.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🎥 VIDEO */}
          <div className="relative rounded-3xl overflow-hidden border border-[#1f2429] shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_55px_rgba(255,120,40,0.2)] transition-all duration-700 mt-8">
            <div className="aspect-[16/10] w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-[1.45] md:scale-[1.25] xl:scale-[1.15]"
              >
                <source src="/moving.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 md:left-10 text-white">
              <p className="text-sm uppercase tracking-wider text-[#ff7828] mb-1">
                Intervention sur site
              </p>
              <h5 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] leading-snug">
                Opérations industrielles
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
