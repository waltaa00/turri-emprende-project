"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()

  // No mostrar footer en páginas legales para evitar redundancia
  if (pathname === "/politica-privacidad" || pathname === "/terminos-condiciones") {
    return null
  }

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center gap-8 mb-6">
            <Link
              href={`/terminos-condiciones?from=${encodeURIComponent(pathname)}`}
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200 underline"
            >
              Términos y condiciones
            </Link>
            <Link
              href={`/politica-privacidad?from=${encodeURIComponent(pathname)}`}
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200 underline"
            >
              Política de privacidad
            </Link>
          </div>
          <div className="text-center text-gray-500 text-sm">© 2025 TurriEmprende. Todos los derechos reservados.</div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          <div className="flex justify-center items-center gap-8">
            <Link
              href={`/politica-privacidad?from=${encodeURIComponent(pathname)}`}
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200 underline text-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              href={`/terminos-condiciones?from=${encodeURIComponent(pathname)}`}
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200 underline text-sm"
            >
              Términos y condiciones
            </Link>
          </div>
          <div className="text-center text-gray-500 text-sm">© 2025 TurriEmprende. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  )
}
