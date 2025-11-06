"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SteelButton } from "./steel-button"
import { SparkParticles } from "./spark-particles"

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
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Cinematic Slider */}
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

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        </div>
      ))}

      <SparkParticles />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="
            metal-text spark-reflect
            font-[family-name:var(--font-orbitron)]
            font-black
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            tracking-tight mb-4 text-center
          ">
            {slides[currentSlide].title}
          </h1>

          <p className="
            font-[family-name:var(--font-orbitron)]
            font-bold
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            tracking-tight text-[#ff7828] mb-6
          ">
            {slides[currentSlide].subtitle}
          </p>

          <p className="
            text-base sm:text-lg md:text-xl text-[#b8bbc1]
            max-w-2xl mx-auto mb-8 leading-relaxed
          ">
            Experts en construction métallique, montage industriel et structures en acier.
            Qualité suisse, délais respectés et solutions durables pour vos projets professionnels.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <SteelButton variant="primary" size="lg" className="text-[#ff7722] hover:text-[#ff8c33]">
              DEMANDER UN DEVIS
            </SteelButton>

            <SteelButton variant="secondary" size="lg">
              CONTACT
            </SteelButton>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 chrome-button p-3 sm:p-4">
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4d7dd]" />
      </button>

      <button onClick={nextSlide} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 chrome-button p-3 sm:p-4">
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4d7dd]" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[3px] sm:h-1 w-8 sm:w-12 transition-all ${
              index === currentSlide ? "bg-[#ff7828] ember-glow" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
