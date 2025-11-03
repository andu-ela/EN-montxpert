"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface SteelButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "md" | "lg"
  className?: string
  onClick?: () => void
}

export function SteelButton({ children, variant = "primary", size = "md", className, onClick }: SteelButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "chrome-button font-[family-name:var(--font-orbitron)] font-bold tracking-wider uppercase transition-all",
        size === "lg" && "px-10 py-5 text-base",
        size === "md" && "px-8 py-4 text-sm",
        variant === "primary" && "text-[#0a0c10] bg-gradient-to-br from-[#d4d7dd] to-[#8a8d93]",
        variant === "secondary" && "text-[#d4d7dd]",
        className,
      )}
    >
      {children}
    </button>
  )
}
