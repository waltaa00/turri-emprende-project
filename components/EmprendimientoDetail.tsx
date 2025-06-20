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

interface Emprendimiento {
  id: string
  nombre: string
  descripcion: string
  categoria: string
  imagen: string
  galeria: string[]
  historia: string
  productos: string[]
  servicios: string[]
  redes_sociales?: {
    instagram?: string
    facebook?: string
    whatsapp?: string
  }
  ubicacion: string
  telefono: string
}

interface Props {
  emprendimiento: Emprendimiento
}

export default function EmprendimientoDetail({ emprendimiento }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header with back button */}
      <div
        className={`flex items-center mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <Button variant="ghost" asChild className="flex items-center gap-2 hover:bg-gray-100">
          <Link href="/catalogo">
            <ArrowLeft className="w-4 h-4" />
            Volver al Catálogo
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div
        id="emprendimiento-hero"
        className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-6">
          <Image
            src={emprendimiento.imagen || "/placeholder.svg"}
            alt={`Vista principal del emprendimiento ${emprendimiento.nombre} - ${emprendimiento.descripcion}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="bg-teal-600 text-white mb-3">{emprendimiento.categoria}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{emprendimiento.nombre}</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{emprendimiento.descripcion}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Historia */}
          <Card
            id="emprendimiento-historia"
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                <Star className="w-6 h-6 text-teal-600" />
                Nuestra Historia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">{emprendimiento.historia}</p>
            </CardContent>
          </Card>

          {/* Galería */}
          <Card
            id="emprendimiento-gallery"
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Galería</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageGallery images={emprendimiento.galeria} nombre={emprendimiento.nombre} />
            </CardContent>
          </Card>

          {/* Productos y Servicios */}
          <div id="emprendimiento-productos" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Productos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {emprendimiento.productos.map((producto, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{producto}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Servicios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {emprendimiento.servicios.map((servicio, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{servicio}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Información de Contacto */}
          <Card
            id="emprendimiento-contact"
            className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">{emprendimiento.ubicacion}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <a
                  href={`tel:${emprendimiento.telefono}`}
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  {emprendimiento.telefono}
                </a>
              </div>

              {/* Redes Sociales */}
              <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-900 mb-3">Síguenos</h4>
                <div className="flex gap-3">
                  {emprendimiento.redes_sociales?.instagram && (
                    <Button variant="outline" size="icon" asChild className="hover:bg-pink-50 hover:border-pink-300">
                      <a
                        href={`https://instagram.com/${emprendimiento.redes_sociales.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {emprendimiento.redes_sociales?.facebook && (
                    <Button variant="outline" size="icon" asChild className="hover:bg-blue-50 hover:border-blue-300">
                      <a
                        href={`https://facebook.com/${emprendimiento.redes_sociales.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {emprendimiento.redes_sociales?.whatsapp && (
                    <Button variant="outline" size="icon" asChild className="hover:bg-green-50 hover:border-green-300">
                      <a
                        href={`https://wa.me/${emprendimiento.redes_sociales.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulario de Suscripción */}
          <div
            id="emprendimiento-notifications"
            className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <SubscriptionForm emprendimientoNombre={emprendimiento.nombre} />
          </div>
        </div>
      </div>
    </div>
  )
}
