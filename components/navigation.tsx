"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    if (pathname === "/") {
      const section = document.querySelector(targetId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/" + targetId);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0c10]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/logoen.png"
              alt="EN Logo"
              width={64}
              height={64}
              className="object-contain scale-125 group-hover:scale-[1.3] transition-transform duration-300"
            />
          </div>
          <div>
            <div className="font-[family-name:var(--font-orbitron)] font-bold text-lg tracking-wider text-[#d4d7dd] group-hover:text-white transition-colors">
              MONTXPERT
            </div>
            <div className="text-[10px] text-[#8a8d93] tracking-widest uppercase">
              Swiss Steel Engineering
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] transition-colors tracking-wide uppercase cursor-pointer"
          >
            Services
          </a>
          <a
            href="#realisations"
            onClick={(e) => handleNavClick(e, "#realisations")}
            className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] transition-colors tracking-wide uppercase cursor-pointer"
          >
            Réalisations
          </a>
          <Link
            href="/about"
            className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] transition-colors tracking-wide uppercase"
          >
            À Propos
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] transition-colors tracking-wide uppercase"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#d4d7dd] hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <div
        className={`md:hidden bg-[#0a0c10]/95 backdrop-blur-md border-t border-white/5 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-4 transition-opacity duration-500">
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] uppercase"
          >
            Services
          </a>
          <a
            href="#realisations"
            onClick={(e) => handleNavClick(e, "#realisations")}
            className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] uppercase"
          >
            Réalisations
          </a>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] uppercase"
          >
            À Propos
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-[#b8bbc1] hover:text-[#d4d7dd] uppercase"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
