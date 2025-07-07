"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-teal-700/10 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 animate-fadeIn">
      <div className="absolute inset-0 bg-black/10"></div>
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center gap-3">
          <Link 
            href="/" 
            className="-m-1.5 p-1.5 transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <span className="sr-only">TurriEmprende</span>
            <Image
              className="h-8 w-auto drop-shadow-md transition-all duration-300 hover:drop-shadow-xl"
              src="/logoTurriEmprende2.png"
              alt="Logo de TurriEmprende: Muestra la silueta de un volcán integrado con una red que simboliza el emprendimiento en la comunidad de Turrialba."
              width={32}
              height={32}
              priority
            />
            <span className="text-white font-semibold text-lg">
              <span className="text-white">Turri</span>
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Emprende</span>
            </span>
          </Link>
        </div>

        {/* Desktop menu - hidden on mobile */}
        <div className="hidden md:flex gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-semibold leading-6 py-1 transition-all duration-200 hover:scale-105 active:scale-95
                ${pathname === item.href
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:rounded-full after:shadow-glow"
                  : "text-teal-50 hover:text-white"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
} 