"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { obtenerEmprendimientoPorId, type Emprendimiento } from "@/lib/data-manager"
import EmprendimientoDetail from "@/components/EmprendimientoDetail"
import BottomNavigation from "@/components/BottomNavigation"
import Footer from "@/components/Footer"
import SectionNavigation from "@/components/SectionNavigation"
import BackToTopButton from "@/components/BackToTopButton"

interface Props {
  id: string
}

export default function EmprendimientoPageClient({ id }: Props) {
  const [emprendimiento, setEmprendimiento] = useState<Emprendimiento | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cargarEmprendimiento = async () => {
      try {
        setLoading(true)
        // Simular delay de carga
        await new Promise((resolve) => setTimeout(resolve, 300))
        const data = obtenerEmprendimientoPorId(id)
        setEmprendimiento(data)
      } catch (error) {
        console.error("Error al cargar emprendimiento:", error)
      } finally {
        setLoading(false)
      }
    }

    cargarEmprendimiento()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main id="main-content" className="flex-1 pb-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-64 bg-gray-200 rounded mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="h-32 bg-gray-200 rounded"></div>
                  <div className="h-48 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-6">
                  <div className="h-48 bg-gray-200 rounded"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <BottomNavigation />
      </div>
    )
  }

  if (!emprendimiento) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main id="main-content" className="flex-1 pb-20">
        <EmprendimientoDetail emprendimiento={emprendimiento} />
      </main>
      <Footer />
      <BottomNavigation />
      <SectionNavigation />
      <BackToTopButton />
    </div>
  )
} 