"use client"

import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import EmprendimientoCard from "@/components/EmprendimientoCard"
import BottomNavigation from "@/components/BottomNavigation"
import LoadingSkeleton from "@/components/LoadingSkeleton"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { obtenerEmprendimientos, type Emprendimiento } from "@/lib/data-manager"
import BackToTopButton from "@/components/BackToTopButton"

export default function CatalogoPage() {
  const [emprendimientos, setEmprendimientos] = useState<Emprendimiento[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cargarEmprendimientos = async () => {
      try {
        setLoading(true)
        // Simular delay de carga
        await new Promise((resolve) => setTimeout(resolve, 500))
        const data = obtenerEmprendimientos()
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main id="main-content" className="flex-1 pb-20">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center mb-2">
              <Button variant="ghost" asChild className="flex items-center gap-2 hover:bg-gray-100">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4" />
                  Volver al Inicio
                </Link>
              </Button>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Catálogo de Emprendimientos</h1>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 py-8">
          <Suspense fallback={<LoadingSkeleton />}>
            {loading ? (
              <LoadingSkeleton />
            ) : emprendimientos.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">No hay emprendimientos disponibles</h2>
                <p className="text-gray-600">Pronto tendremos más emprendimientos para mostrar.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emprendimientos.map((emprendimiento) => (
                  <EmprendimientoCard key={emprendimiento.id} emprendimiento={emprendimiento} />
                ))}
              </div>
            )}
          </Suspense>
        </section>
      </main>

      <Footer />
      <BottomNavigation />
      <BackToTopButton />
    </div>
  )
}
