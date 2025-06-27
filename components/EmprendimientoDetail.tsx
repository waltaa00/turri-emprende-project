"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Instagram, Facebook, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SubscriptionForm from "./SubscriptionForm"
import ImageGallery from "./ImageGallery"
import type { Emprendimiento } from "@/lib/data-manager"

interface Props {
  emprendimiento: Emprendimiento
}

export default function EmprendimientoDetail({ emprendimiento }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Header with back button */}
      <nav
        className={`flex mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        aria-label="Navegación principal"
      >
        <Button 
          variant="ghost" 
          asChild 
          className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 hover:bg-white hover:text-gray-700 shadow-sm border border-teal-200 hover:border-gray-100"
        >
          <Link href="/catalogo">
            <ArrowLeft className="w-4 h-4" />
            Volver al Catálogo
          </Link>
        </Button>
      </nav>

      {/* Hero Section */}
      <header
        id="emprendimiento-hero"
        className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <figure className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-6">
          <Image
            src={emprendimiento.imagen.url || "/placeholder.svg"}
            alt={emprendimiento.imagen.url 
              ? emprendimiento.imagen.alt
              : `Imagen no disponible para el emprendimiento ${emprendimiento.nombre}`
            }
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <figcaption className="absolute bottom-6 left-6 text-white">
            <Badge className="bg-teal-600 text-white mb-3">{emprendimiento.categoria}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{emprendimiento.nombre}</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{emprendimiento.descripcion}</p>
          </figcaption>
        </figure>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-2 space-y-8">
          {/* Historia */}
          <section
            id="emprendimiento-historia"
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            aria-labelledby="historia-heading"
          >
            <header className="p-6 pb-0">
              <h2 id="historia-heading" className="flex items-center gap-2 text-2xl text-gray-900 font-bold">
                <Star className="w-6 h-6 text-teal-600" />
                Nuestra Historia
              </h2>
            </header>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-lg">{emprendimiento.historia}</p>
            </div>
          </section>

          {/* Galería */}
          <section
            id="emprendimiento-gallery"
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            aria-labelledby="galeria-heading"
          >
            <header className="p-6 pb-0">
              <h2 id="galeria-heading" className="text-2xl text-gray-900 font-bold">Galería</h2>
            </header>
            <div className="p-6">
              <ImageGallery images={emprendimiento.galeria} nombre={emprendimiento.nombre} />
            </div>
          </section>

          {/* Productos y Servicios */}
          <div id="emprendimiento-productos" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              aria-labelledby="productos-heading"
            >
              <header className="p-6 pb-0">
                <h2 id="productos-heading" className="text-xl text-gray-900 font-bold">Productos</h2>
              </header>
              <div className="p-6">
                <ul className="space-y-3">
                  {emprendimiento.productos.map((producto, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{producto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              aria-labelledby="servicios-heading"
            >
              <header className="p-6 pb-0">
                <h2 id="servicios-heading" className="text-xl text-gray-900 font-bold">Servicios</h2>
              </header>
              <div className="p-6">
                <ul className="space-y-3">
                  {emprendimiento.servicios.map((servicio, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{servicio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Información de Contacto */}
          <section
            id="emprendimiento-contact"
            className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            aria-labelledby="contacto-heading"
          >
            <header className="p-6 pb-0">
              <h2 id="contacto-heading" className="text-xl text-gray-900 font-bold">Contacto</h2>
            </header>
            <div className="p-6 space-y-4">
              <address className="flex items-center gap-3 not-italic">
                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">{emprendimiento.ubicacion}</span>
              </address>

              <address className="flex items-center gap-3 not-italic">
                <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${emprendimiento.telefono}`}
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  {emprendimiento.telefono}
                </a>
              </address>

              {/* Redes Sociales */}
              <nav className="pt-4 border-t" aria-label="Redes sociales">
                <h3 className="font-semibold text-gray-900 mb-3">Síguenos</h3>
                <ul className="flex gap-3">
                  {emprendimiento.redes_sociales?.instagram && (
                    <li>
                      <Button variant="outline" size="icon" asChild className="hover:bg-pink-50 hover:border-pink-300">
                        <a
                          href={`https://instagram.com/${emprendimiento.redes_sociales.instagram.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Síguenos en Instagram"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      </Button>
                    </li>
                  )}
                  {emprendimiento.redes_sociales?.facebook && (
                    <li>
                      <Button variant="outline" size="icon" asChild className="hover:bg-blue-50 hover:border-blue-300">
                        <a
                          href={`https://facebook.com/${emprendimiento.redes_sociales.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Síguenos en Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                      </Button>
                    </li>
                  )}
                  {emprendimiento.redes_sociales?.whatsapp && (
                    <li>
                      <Button variant="outline" size="icon" asChild className="hover:bg-green-50 hover:border-green-300">
                        <a
                          href={`https://wa.me/${emprendimiento.redes_sociales.whatsapp.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Contáctanos por WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </Button>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </section>

          {/* Formulario de Suscripción */}
          <section
            id="emprendimiento-notifications"
            className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <SubscriptionForm emprendimientoNombre={emprendimiento.nombre} />
          </section>
        </aside>
      </div>
    </main>
  )
}
