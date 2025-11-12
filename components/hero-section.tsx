"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SteelButton } from "./steel-button";

const slides = [
  {
    image: "/home1.jpg",
    title: "CONSTRUCTION MÉTALLIQUE SUR-MESURE",
    subtitle: "Précision. Solidité. Excellence.",
  },
  {
    image: "/home2.jpg",
    title: "MONTAGE & DÉMONTAGE INDUSTRIEL",
    subtitle: "Rapidité & sécurité garanties",
  },
  {
    image: "/home3.jpg",
    title: "FAÇADES & STRUCTURES EN ACIER",
    subtitle: "Design moderne & qualité durable",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter(); // ✅ për navigim

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth scroll for in-page sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`,
            }}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-orbitron)] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-center text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            {slides[currentSlide].title}
          </h1>

          <p className="font-[family-name:var(--font-orbitron)] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-[#ff7828] mb-6">
            {slides[currentSlide].subtitle}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[#b8bbc1] max-w-2xl mx-auto mb-8 leading-relaxed">
       MontXpert EN est une entreprise suisse spécialisée en construction métallique sur-mesure,
structures en acier, façades industrielles et montage professionnel. Expertise, qualité
suisse et solutions durables pour vos projets.

          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Scrolls to devis section */}
            <SteelButton
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("devis")}
              className="text-[#ff7722] hover:text-[#ff8c33]"
            >
              DEMANDER UN DEVIS
            </SteelButton>

            {/* Navigates to /contact page */}
            <SteelButton
              variant="secondary"
              size="lg"
              onClick={() => router.push("/contact")}
            >
              CONTACT
            </SteelButton>
          </div>
        </div>
      </div>

      {/* Arrows */}
  {/* Arrows */}
{/* Desktop arrows only */}
<div className="hidden md:block">
  <button
    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-4 rounded-full transition-all duration-300"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>

  <button
    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-4 rounded-full transition-all duration-300"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>
</div>

{/* Mobile arrows centered under content */}
<div className="md:hidden absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
  <button
    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
    className="bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
  >
    <ChevronLeft className="w-5 h-5 text-white" />
  </button>

  <button
    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
    className="bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
  >
    <ChevronRight className="w-5 h-5 text-white" />
  </button>
</div>


    

      {/* Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[3px] sm:h-1 w-8 sm:w-12 transition-all rounded-full ${
              index === currentSlide ? "bg-[#ff7828]" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
