"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-16" id="hero">
      {/* Animated background glow */}
      <div
        className={cn(
          "absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-0 transition-opacity duration-1000",
          mounted && "opacity-30",
        )}
      ></div>

      <div
        className={cn(
          "text-center space-y-6 max-w-4xl px-4 opacity-0 transform translate-y-8 transition-all duration-1000",
          mounted && "opacity-100 translate-y-0",
        )}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Josef Johrel Medel
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light">
          Aspiring DevOps Engineer with Full Stack Background
        </p>
        <div className="pt-4 flex flex-wrap gap-4 justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-400 text-gray-900 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="/files/josef-johrel-medel-cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-gray-800/50 text-purple-400 border border-purple-500/30 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            <span>📄</span> Download CV
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-800/50 text-purple-400 border border-purple-500/30 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            <span>🎬</span> Video CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-purple-400 h-8 w-8" />
        </Link>
      </div>
    </section>
  )
}
