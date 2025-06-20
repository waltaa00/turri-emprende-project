"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Grid3X3 } from "lucide-react"

const navItems = [
  {
    href: "/",
    icon: Home,
    label: "Inicio",
    id: "home",
  },
  {
    href: "/catalogo",
    icon: Grid3X3,
    label: "Catálogo",
    id: "catalog",
  },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200/50 z-40 md:hidden safe-area-pb"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="flex items-center justify-around py-3 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center gap-2 py-3 px-6 rounded-xl transition-all duration-200 min-w-[80px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                active
                  ? "text-teal-600 bg-teal-50 scale-105 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <Icon className={`w-6 h-6 ${active ? "scale-110" : ""} transition-transform duration-200`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
