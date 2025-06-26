"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search } from "lucide-react"

const links = [
  {
    href: "/",
    label: "Inicio",
    icon: Home,
  },
  {
    href: "/catalogo",
    label: "Catálogo",
    icon: Search,
  },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden"
      aria-label="Navegación principal móvil"
      role="navigation"
    >
      <div className="flex justify-around items-center h-16">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
              }`}
              aria-current={isActive ? "page" : undefined}
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" aria-hidden="true" />
              <span className="text-xs mt-1">{link.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
