"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  images: string[]
  nombre: string
}

export default function ImageGallery({ images, nombre }: Props) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Manejar el scroll lock de manera segura
  useEffect(() => {
    if (selectedImage !== null) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [selectedImage])

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal()
    if (e.key === "ArrowRight") nextImage(e as any)
    if (e.key === "ArrowLeft") prevImage(e as any)
  }

  return (
    <>
      {/* Grid de miniaturas */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className="aspect-square relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openModal(index)}
            aria-label={`Ver imagen ${index + 1} de ${nombre}`}
          >
            <Image
              src={image}
              alt={`Fotografía detallada ${index + 1} del emprendimiento ${nombre} - Vista en miniatura`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
          onKeyDown={handleKeyDown}
        >
          {/* Fondo con blur */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Botón cerrar */}
          <button
              onClick={closeModal}
            className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/75 transition-colors"
            aria-label="Cerrar visor"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Botones de navegación */}
          <button
              onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/75 transition-colors"
              aria-label="Imagen anterior"
            >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
              onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/75 transition-colors"
              aria-label="Siguiente imagen"
            >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Contador de imágenes */}
          <div className="absolute top-4 left-4 z-50">
            <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} de {images.length}
            </span>
          </div>

          {/* Contenedor de la imagen principal */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[selectedImage]}
                alt={`Fotografía detallada ${selectedImage + 1} del emprendimiento ${nombre} - Vista ampliada`}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
