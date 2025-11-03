import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "EN MONTXPERT — Construction Métallique Suisse",
  description:
    "Construction métallique de haute précision. Structures en acier, façades métalliques, hangars industriels et montage avec expertise suisse.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${rajdhani.variable} ${orbitron.variable} font-sans antialiased`}>
        <div className="grain-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
