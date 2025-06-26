"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Home, Users, Heart, UserPlus, Star, ImageIcon, Package, Phone, Bell } from "lucide-react"

interface Section {
  id: string
  label: string
  icon: typeof Home
  ariaLabel: string
}

// Secciones para la página principal
const homeSections: Section[] = [
  {
    id: "hero",
    label: "Inicio",
    icon: Home,
    ariaLabel: "Ir a la sección de inicio",
  },
  {
    id: "about",
    label: "Nosotros",
    icon: Users,
    ariaLabel: "Ir a la sección sobre nosotros",
  },
  {
    id: "emprendimientos",
    label: "Emprendimientos",
    icon: Heart,
    ariaLabel: "Ir a la sección de emprendimientos destacados",
  },
  {
    id: "registro",
    label: "Registro",
    icon: UserPlus,
    ariaLabel: "Ir a la sección de registro de emprendimientos",
  },
]

// Secciones para páginas de detalle de emprendimientos (5 secciones)
const emprendimientoSections: Section[] = [
  {
    id: "emprendimiento-historia",
    label: "Nuestra Historia",
    icon: Star,
    ariaLabel: "Ir a la sección de historia",
  },
  {
    id: "emprendimiento-gallery",
    label: "Galería",
    icon: ImageIcon,
    ariaLabel: "Ir a la galería de imágenes",
  },
  {
    id: "emprendimiento-productos",
    label: "Productos y Servicios",
    icon: Package,
    ariaLabel: "Ir a productos y servicios",
  },
  {
    id: "emprendimiento-contact",
    label: "Contacto",
    icon: Phone,
    ariaLabel: "Ir a la información de contacto",
  },
  {
    id: "emprendimiento-notifications",
    label: "Recibe Notificaciones",
    icon: Bell,
    ariaLabel: "Ir al formulario de notificaciones",
  },
]

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  // Determinar qué secciones mostrar según la ruta
  const isHomePage = pathname === "/"
  const isEmprendimientoPage = pathname.startsWith("/emprendimiento/")
  const isCatalogoPage = pathname === "/catalogo"

  // No mostrar navegación en la página de catálogo ni en desktop para emprendimientos
  const shouldShowNavigation = isHomePage || (isEmprendimientoPage && isMobile)
  const sections = isHomePage ? homeSections : emprendimientoSections

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (shouldShowNavigation) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [shouldShowNavigation, pathname])

  useEffect(() => {
    if (!shouldShowNavigation) return

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -50% 0px",
      threshold: [0.1, 0.3, 0.5],
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observar todas las secciones relevantes
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sections, shouldShowNavigation])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      setActiveSection(sectionId)

      // Anunciar el cambio para lectores de pantalla
      const section = sections.find((s) => s.id === sectionId)
      if (section) {
        const announcement = `Navegando a ${section.label}`
        const ariaLiveRegion = document.createElement("div")
        ariaLiveRegion.setAttribute("aria-live", "polite")
        ariaLiveRegion.setAttribute("aria-atomic", "true")
        ariaLiveRegion.className = "sr-only"
        ariaLiveRegion.textContent = announcement
        document.body.appendChild(ariaLiveRegion)
        setTimeout(() => document.body.removeChild(ariaLiveRegion), 1000)
      }
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, sectionId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      scrollToSection(sectionId)
    }
  }

  if (!shouldShowNavigation) {
    return null
  }

  return (
    <nav
      className={`fixed right-2 top-1/2 -translate-y-1/2 z-30 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
      role="navigation"
      aria-label="Navegación por secciones de la página"
    >
      <div
        className={`${
          isMobile
            ? "bg-black/40 backdrop-blur-sm rounded-full px-1.5 py-2 shadow-lg w-6"
            : "bg-white/80 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/20"
        }`}
      >
        <ul className={`flex flex-col ${isMobile ? "gap-1.5" : "gap-2"} items-center`} role="list">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <li key={section.id} role="listitem">
                <button
                  onClick={() => scrollToSection(section.id)}
                  onKeyDown={(e) => handleKeyDown(e, section.id)}
                  className={`relative flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:ring-offset-1 border-0 p-0 ${
                    isMobile
                      ? `w-6 h-6 max-w-6 max-h-6 min-w-0 min-h-0 rounded-full ${isActive ? "scale-110" : "hover:scale-110 active:scale-95"}`
                      : `w-12 h-12 rounded-full ${
                          isActive
                            ? "bg-teal-600 text-white shadow-lg scale-110"
                            : "bg-white/90 text-gray-700 hover:bg-teal-50 hover:text-teal-600 hover:scale-105 active:scale-95 shadow-sm border border-gray-100"
                        }`
                  }`}
                  style={isMobile ? { width: "24px", height: "24px", maxWidth: "24px", maxHeight: "24px" } : {}}
                  aria-label={section.ariaLabel}
                  aria-current={isActive ? "true" : "false"}
                  tabIndex={0}
                >
                  {isMobile ? (
                    // Dot visual pequeño dentro del área de toque
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        isActive ? "bg-white scale-125" : "bg-white/40 group-hover:bg-white/70 group-hover:scale-110"
                      }`}
                      aria-hidden="true"
                    />
                  ) : (
                    // Icono completo en desktop
                    <Icon
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                      aria-hidden="true"
                    />
                  )}

                  {/* Tooltip solo en desktop */}
                  {!isMobile && (
                    <span
                      className={`absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none transition-all duration-200 ${
                        isActive ? "opacity-100" : "group-hover:opacity-100 group-focus:opacity-100"
                      }`}
                      role="tooltip"
                      aria-hidden="true"
                    >
                      {section.label}
                      <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
                    </span>
                  )}

                  {/* Indicador de progreso solo en desktop */}
                  {!isMobile && (
                    <span
                      className={`absolute -left-1 top-1/2 -translate-y-1/2 w-1 bg-teal-600 rounded-full transition-all duration-300 ${
                        isActive ? "h-8 opacity-100" : "h-0 opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Indicador de posición solo en desktop */}
        {!isMobile && (
          <div className="mt-3 pt-3 border-t border-white/30">
            <div className="flex justify-center">
              <span className="text-xs text-gray-500 font-medium" aria-live="polite" aria-atomic="true">
                {sections.findIndex((s) => s.id === activeSection) + 1} / {sections.length}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Región para anuncios de accesibilidad */}
      <div className="sr-only" aria-live="polite" aria-atomic="true" id="section-announcements"></div>
    </nav>
  )
}
