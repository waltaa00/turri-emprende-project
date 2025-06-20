"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el usuario haya bajado 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Throttle para mejor rendimiento
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // Anunciar para lectores de pantalla
    const announcement = "Volviendo al inicio de la página"
    const ariaLiveRegion = document.createElement("div")
    ariaLiveRegion.setAttribute("aria-live", "polite")
    ariaLiveRegion.setAttribute("aria-atomic", "true")
    ariaLiveRegion.className = "sr-only"
    ariaLiveRegion.textContent = announcement
    document.body.appendChild(ariaLiveRegion)
    setTimeout(() => document.body.removeChild(ariaLiveRegion), 1000)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      scrollToTop()
    }
  }

  return (
    <Button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className={`fixed z-40 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
        isMobile ? "bottom-24 right-2 w-10 h-10" : "bottom-6 right-6 w-12 h-12"
      } ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"}`}
      aria-label="Volver al inicio de la página"
      title="Volver arriba"
    >
      <ArrowUp className={`${isMobile ? "w-4 h-4" : "w-5 h-5"}`} aria-hidden="true" />
    </Button>
  )
}
