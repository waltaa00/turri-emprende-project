"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import EmprendimientoCard from "./EmprendimientoCard"
import { obtenerEmprendimientosRecientes, type Emprendimiento } from "@/lib/data-manager"

export default function CatalogPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [emprendimientos, setEmprendimientos] = useState<Emprendimiento[]>([])
  const [loading, setLoading] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cargarEmprendimientos = async () => {
      try {
        // Simular delay de carga
        await new Promise((resolve) => setTimeout(resolve, 300))
        const data = obtenerEmprendimientosRecientes(3)
        setEmprendimientos(data)
      } catch (error) {
        console.error("Error al cargar emprendimientos:", error)
      } finally {
        setLoading(false)
      }
    }

    cargarEmprendimientos()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-24 sm:pb-28 md:pb-32 bg-gray-50"
      aria-labelledby="catalog-heading"
    >
      <div id="emprendimientos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 id="catalog-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Conoce Nuestros Emprendimientos
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            Desde café artesanal hasta tours ecológicos, descubre la diversidad de talentos que hacen única a nuestra
            región.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                  <div className="h-8 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {emprendimientos.map((emprendimiento, index) => (
              <div
                key={emprendimiento.id}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <EmprendimientoCard emprendimiento={emprendimiento} />
              </div>
            ))}
          </div>
        )}

        <div
          className={`text-center transition-all duration-1000 delay-500 mb-8 sm:mb-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 touch-manipulation"
          >
            <Link href="/catalogo" className="flex items-center justify-center gap-2">
              Ver Todos los Emprendimientos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
