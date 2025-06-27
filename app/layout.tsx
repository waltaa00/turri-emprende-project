import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TurriEmprende - Emprendimientos de Turrialba",
  description: "Descubre y apoya los emprendimientos locales de Turrialba",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon/favicon.ico" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {/* Skip link for accessibility */}
        
        {children}
      </body>
    </html>
  )
}
