"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"


export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0c10]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center">
  <Image
    src="/logoen.png"
    alt="EN Logo"
    width={64}
    height={64}
    className="object-contain scale-125"
  />
</div>


            <div>
              <div className="font-[family-name:var(--font-orbitron)] font-bold text-lg tracking-wider text-[#d4d7dd]">
                MONTXPERT
              </div>
              <div className="text-[10px] text-[#8a8d93] tracking-widest uppercase">Swiss Steel Engineering</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] transition-colors tracking-wide uppercase"
            >
              Services
            </Link>
            <Link
              href="#realisations"
              className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] transition-colors tracking-wide uppercase"
            >
              Réalisations
            </Link>
            <Link
              href="#apropos"
              className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] transition-colors tracking-wide uppercase"
            >
              À Propos
            </Link>
            <Link
              href="#contact"
              className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] transition-colors tracking-wide uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
