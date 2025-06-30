"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  images: {
    url: string
    alt: string
  }[]
  nombre: string
}

export default function ImageGallery({ images, nombre }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  const openModal = (index: number) => {
    setSelectedImage(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal()
    if (e.key === "ArrowRight") setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    if (e.key === "ArrowLeft") setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {/* Grid de miniaturas */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4" aria-label="Galería de imágenes">
        {images.map((image, index) => (
          <figure
            key={index}
            className="aspect-square relative rounded-lg overflow-hidden cursor-pointer group touch-manipulation"
            onClick={() => openModal(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openModal(index)}
            aria-label={`Ver imagen ${index + 1} de ${nombre}`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" aria-hidden="true" />
          </figure>
        ))}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center touch-none"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Controles de navegación */}
          <nav className="absolute inset-x-4 top-4 flex justify-between items-center z-50" aria-label="Controles de galería">
            <span className="text-white text-sm">
              {selectedImage + 1} / {images.length}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
              className="text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Cerrar galería"
            >
              <X className="w-8 h-8" />
            </button>
          </nav>

          {/* Navegación de imágenes */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-50"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-50"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Contenedor de imagen */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
              <Image
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                quality={100}
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
