"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroProps {
  onLearnMoreClick?: () => void
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleLearnMore = () => {
    if (onLearnMoreClick) {
      onLearnMoreClick()
    }
  }

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium">Emprendimientos de Turrialba</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Turri</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Emprende
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-teal-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Descubre y apoya los emprendimientos locales que están transformando nuestra comunidad con pasión,
            innovación y tradición.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-teal-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation"
            >
              <Link href="/catalogo" className="flex items-center justify-center gap-2">
                Explorar Catálogo
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleLearnMore}
              className="w-full sm:w-auto border-white/30 text-gray-900 bg-white/90 hover:bg-white backdrop-blur-sm transition-all duration-300 font-medium touch-manipulation"
              aria-label="Conocer más sobre emprendimiento en Turrialba"
            >
              <span className="flex items-center justify-center gap-2">
                Conoce Más
                <ChevronDown className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
