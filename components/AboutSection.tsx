"use client"

import { useState, useEffect, useRef, forwardRef } from "react"
import { Heart, Users, Lightbulb, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Pasión Local",
    description: "Cada emprendimiento nace del amor por nuestra tierra y tradiciones",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Fortalecemos los lazos comunitarios apoyando el talento local",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Combinamos tradición con ideas frescas y sostenibles",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento",
    description: "Impulsamos el desarrollo económico de nuestra región",
  },
]

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
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
      ref={(node) => {
        sectionRef.current = node
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      }}
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿Por qué elegir emprender en Turrialba?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Turrialba es una tierra fértil no solo para la agricultura, sino también para las ideas. Nuestra comunidad
            abraza la innovación mientras honra sus raíces, creando el ambiente perfecto para que florezcan los
            emprendimientos auténticos y sostenibles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"

export default AboutSection
