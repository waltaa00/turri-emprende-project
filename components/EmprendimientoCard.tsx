"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Emprendimiento {
  id: string
  nombre: string
  descripcion: string
  categoria: string
  imagen: string
  ubicacion: string
}

interface Props {
  emprendimiento: Emprendimiento
}

export default function EmprendimientoCard({ emprendimiento }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-0 shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={imageError ? "/placeholder.svg?height=300&width=400" : emprendimiento.imagen}
            alt={imageError 
              ? `Imagen no disponible para ${emprendimiento.nombre}` 
              : `Imagen principal del emprendimiento ${emprendimiento.nombre} - ${emprendimiento.categoria} en ${emprendimiento.ubicacion}`
            }
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="absolute top-4 left-4">
          <span className="inline-block bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {emprendimiento.categoria}
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
          {emprendimiento.nombre}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{emprendimiento.descripcion}</p>

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <MapPin className="w-4 h-4 mr-1 text-teal-600" />
          <span>{emprendimiento.ubicacion}</span>
        </div>

        <Button
          asChild
          className={`w-full bg-teal-600 hover:bg-teal-700 transition-all duration-300 ${isHovered ? "transform scale-105" : ""}`}
        >
          <Link href={`/emprendimiento/${emprendimiento.id}`} className="flex items-center justify-center gap-2">
            Conocer Más
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
