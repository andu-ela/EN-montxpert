import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06080c] border-t border-white/10 pt-20 pb-10">

      {/* Top grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + tagline */}
        <div>
      <div className="mb-5">
  <img 
    src="/logoen.png" 
    alt="Montxpert Logo" 
    className="w-20 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,120,40,0.35)]" 
  />
</div>

          <p className="text-[#9ca1a8] text-sm leading-relaxed tracking-wide">
            Fabrication métallique sur mesure, structures en acier,  
            montage industriel & ingénierie haute précision.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-[family-name:var(--font-orbitron)] text-white/90 font-bold text-lg mb-5">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-[#9ca1a8]">
            <li className="flex items-center gap-3"><MapPin size={16}/> Muttacherstrasse 12, 1712 Tafers</li>
            <li className="flex items-center gap-3"><Phone size={16}/> +41 76 7004586</li>
            <li className="flex items-center gap-3"><Mail size={16}/> Info@en-montxpert.com</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-[family-name:var(--font-orbitron)] text-white/90 font-bold text-lg mb-5">
            Liens rapides
          </h4>
          <ul className="space-y-3 text-sm text-[#9ca1a8]">
            <li><a className="hover:text-[#ff7a2e] transition">Accueil</a></li>
            <li><a className="hover:text-[#ff7a2e] transition">Services</a></li>
            <li><a className="hover:text-[#ff7a2e] transition">Projets</a></li>
            <li><a className="hover:text-[#ff7a2e] transition">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-[family-name:var(--font-orbitron)] text-white/90 font-bold text-lg mb-5">
            Suivez-nous
          </h4>
          <div className="flex gap-5">
            <a className="text-[#d4d7dd] hover:text-[#ff7a2e] transition"><Instagram size={22}/></a>
            <a className="text-[#d4d7dd] hover:text-[#ff7a2e] transition"><Facebook size={22}/></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-[#8a8d93] mt-14 pt-6 border-t border-white/5 tracking-[0.2em] uppercase">
        © 2025 Montxpert — Swiss Steel Engineering. Tous droits réservés.
      </div>

    </footer>
  );
}
