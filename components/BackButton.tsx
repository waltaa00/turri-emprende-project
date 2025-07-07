"use client"

import { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
  defaultPath?: string
  className?: string
}

function BackButtonContent({ defaultPath = "/", className = "" }: BackButtonProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleBack = () => {
    const fromParam = searchParams.get("from")

    if (fromParam) {
      // Decodificar la URL de origen
      const decodedPath = decodeURIComponent(fromParam)
      router.push(decodedPath)
    } else {
      // Fallback al path por defecto
      router.push(defaultPath)
    }
  }

  const getBackLabel = () => {
    const fromParam = searchParams.get("from")

    if (fromParam) {
      const decodedPath = decodeURIComponent(fromParam)

      switch (decodedPath) {
        case "/":
          return "Volver al Inicio"
        case "/catalogo":
          return "Volver al Catálogo"
        default:
          if (decodedPath.startsWith("/emprendimiento/")) {
            return "Volver al Emprendimiento"
          }
          return "Volver"
      }
    }

    return "Volver al Inicio"
  }

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className={`flex items-center gap-2 bg-teal-50 text-teal-600 hover:bg-white hover:text-gray-700 shadow-sm border border-teal-200 hover:border-gray-100 ${className}`}
      aria-label={getBackLabel()}
    >
      <ArrowLeft className="w-4 h-4" aria-label="Flecha hacia la izquierda" role="img" />
      {getBackLabel()}
    </Button>
  )
}

export default function BackButton(props: BackButtonProps) {
  return (
    <Suspense fallback={
      <Button 
        variant="ghost" 
        className={`flex items-center gap-2 bg-teal-50 text-teal-600 hover:bg-white hover:text-gray-700 shadow-sm border border-teal-200 hover:border-gray-100 ${props.className}`}
        aria-label="Volver"
      >
        <ArrowLeft className="w-4 h-4" aria-label="Flecha hacia la izquierda" role="img" />
        Volver
      </Button>
    }>
      <BackButtonContent {...props} />
    </Suspense>
  )
}
