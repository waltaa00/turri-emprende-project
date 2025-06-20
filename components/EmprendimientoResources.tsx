"use client"

import { useState, useEffect, useRef } from "react"
import { BookOpen, Users2, Rocket, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const resources = [
  {
    icon: BookOpen,
    title: "Guías y Recursos",
    description: "Accede a herramientas prácticas para planificar y desarrollar tu idea de negocio",
    items: ["Plan de negocios", "Estudios de mercado", "Guías legales", "Recursos financieros"],
  },
  {
    icon: Users2,
    title: "Red de Mentores",
    description: "Conecta con emprendedores exitosos que pueden guiarte en tu camino",
    items: ["Mentorías personalizadas", "Grupos de apoyo", "Eventos de networking", "Talleres especializados"],
  },
  {
    icon: Rocket,
    title: "Programas de Aceleración",
    description: "Participa en programas diseñados para impulsar tu emprendimiento",
    items: ["Incubadoras locales", "Fondos de inversión", "Competencias", "Capacitaciones intensivas"],
  },
]

const stats = [
  { number: "50+", label: "Emprendimientos activos" },
  { number: "200+", label: "Empleos generados" },
  { number: "15", label: "Años de experiencia" },
  { number: "95%", label: "Tasa de satisfacción" },
]

export default function EmprendimientoResources() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-teal-50"
      aria-labelledby="resources-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
            <Target className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium">Recursos para Emprendedores</span>
          </div>

          <h2 id="resources-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Tu Camino al Éxito Empresarial
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En TurriEmprende no solo mostramos emprendimientos exitosos, también te brindamos las herramientas y el
            apoyo necesario para que tu idea se convierta en realidad.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Resources Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card
              key={resource.title}
              className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{resource.title}</h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-teal-50 group-hover:border-teal-300 transition-colors duration-300"
                  aria-label={`Conocer más sobre ${resource.title}`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Conocer Más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              ¿Listo para comenzar tu emprendimiento?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad de emprendedores y recibe apoyo personalizado para hacer realidad tu proyecto
              empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
                aria-label="Comenzar mi emprendimiento"
              >
                Comenzar Mi Emprendimiento
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto hover:bg-gray-50 transition-colors duration-300"
                aria-label="Contactar con un mentor"
              >
                Contactar Mentor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
