import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TurriEmprende - Emprendimientos de Turrialba",
  description: "Descubre y apoya los emprendimientos locales de Turrialba",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Skip link for accessibility */}
        
        {children}
      </body>
    </html>
  )
}
