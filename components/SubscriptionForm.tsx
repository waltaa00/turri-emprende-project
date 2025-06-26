"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Bell, CheckCircle } from "lucide-react"
import { crearSuscripcion } from "@/lib/data-manager"

interface Props {
  emprendimientoNombre: string
}

export default function SubscriptionForm({ emprendimientoNombre }: Props) {
  const [email, setEmail] = useState("")
  const [nombre, setNombre] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; nombre?: string }>({})

  const validateForm = () => {
    const newErrors: { email?: string; nombre?: string } = {}

    if (!nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Por favor ingresa un email válido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const success = await crearSuscripcion({
        nombre,
        email,
        emprendimiento_nombre: emprendimientoNombre,
      })

      if (success) {
        setIsSubmitted(true)

        // Reset form after success message
        setTimeout(() => {
          setIsSubmitted(false)
          setEmail("")
          setNombre("")
        }, 1000000)
      } else {
        setErrors({ email: "Hubo un error al procesar tu suscripción. Intenta de nuevo." })
      }
    } catch (error) {
      console.error("Error al suscribirse:", error)
      setErrors({ email: "Hubo un error al procesar tu suscripción. Intenta de nuevo." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardContent className="p-6 text-center">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4"
            role="status"
            aria-live="polite"
          >
            <CheckCircle className="w-8 h-8" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">¡Suscripción Exitosa!</h3>
          <p className="text-gray-600">Te mantendremos informado sobre las novedades de {emprendimientoNombre}.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
          <Bell className="w-5 h-5 text-teal-600" aria-hidden="true" />
          Recibe Novedades
        </CardTitle>
        <p className="text-gray-600 text-sm">
          Suscríbete para recibir las últimas noticias y ofertas especiales de {emprendimientoNombre}.
        </p>
      </CardHeader>
      <CardContent>
        <form 
          onSubmit={handleSubmit} 
          className="space-y-4"
          aria-label={`Formulario de suscripción para ${emprendimientoNombre}`}
          noValidate
        >
          <div>
            <Label htmlFor="nombre" className="text-sm font-medium text-gray-700">
              Nombre completo
            </Label>
            <Input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre completo"
              className={`mt-1 ${errors.nombre ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-teal-500"}`}
              aria-describedby={errors.nombre ? "nombre-error" : undefined}
              aria-invalid={errors.nombre ? "true" : "false"}
              required
            />
            {errors.nombre && (
              <p id="nombre-error" className="text-red-600 text-sm mt-1" role="alert">
                {errors.nombre}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className={`mt-1 ${errors.email ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-teal-500"}`}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={errors.email ? "true" : "false"}
              required
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2" role="status">
                <div 
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                  aria-label="Cargando"
                />
                Suscribiendo...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Suscribirse
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
