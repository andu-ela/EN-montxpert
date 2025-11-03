"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  delay: number
  duration: number
}

export function SparkParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#ff7828] rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `spark ${particle.duration}s ease-out ${particle.delay}s infinite`,
            boxShadow: "0 0 4px #ff7828, 0 0 8px #ff5014",
          }}
        />
      ))}
    </div>
  )
}
