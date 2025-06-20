"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, CheckCircle, Star, Users, TrendingUp, Heart, AlertCircle, Loader2 } from "lucide-react"
import { crearSolicitudEmprendimiento, contarEmprendimientos } from "@/lib/data-manager"

interface FormData {
  nombre: string
  descripcion: string
  categoria: string
  historia: string
  productos: string
  servicios: string
  ubicacion: string
  telefono: string
  email: string
  nombreContacto: string
  instagram: string
  facebook: string
  whatsapp: string
  imagenPrincipal: string
  galeria: string
}

interface FormErrors {
  [key: string]: string
}

const categorias = [
  "Gastronomía",
  "Artesanías",
  "Panadería",
  "Turismo",
  "Lácteos",
  "Textiles",
  "Tecnología",
  "Servicios",
  "Agricultura",
  "Otro",
]

const benefits = [
  {
    icon: Star,
    title: "Visibilidad Local",
    description: "Tu emprendimiento será visto por toda la comunidad de Turrialba",
  },
  {
    icon: Users,
    title: "Red de Contactos",
    description: "Conecta con otros emprendedores y potenciales clientes",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento",
    description: "Impulsa las ventas y el reconocimiento de tu marca",
  },
]

export default function JoinSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [totalEmprendimientos, setTotalEmprendimientos] = useState(6)
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    descripcion: "",
    categoria: "",
    historia: "",
    productos: "",
    servicios: "",
    ubicacion: "",
    telefono: "",
    email: "",
    nombreContacto: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    imagenPrincipal: "",
    galeria: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sectionRef] = useState(useRef<HTMLElement>(null))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Obtener el número actual de emprendimientos
    const total = contarEmprendimientos()
    setTotalEmprendimientos(total)
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Campos requeridos
    const requiredFields = {
      nombre: "El nombre del emprendimiento es requerido",
      descripcion: "La descripción es requerida",
      categoria: "Selecciona una categoría",
      historia: "La historia de tu emprendimiento es requerida",
      productos: "Describe tus productos o servicios",
      ubicacion: "La ubicación es requerida",
      telefono: "El teléfono es requerido",
      email: "El email es requerido",
      nombreContacto: "El nombre de contacto es requerido",
    }

    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!formData[field as keyof FormData].trim()) {
        newErrors[field] = message
      }
    })

    // Validación de email
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido"
    }

    // Validación de teléfono
    if (formData.telefono && !/^[+]?[\d\s\-()]{8,}$/.test(formData.telefono)) {
      newErrors.telefono = "Ingresa un teléfono válido"
    }

    // Validación de descripción (mínimo 50 caracteres)
    if (formData.descripcion && formData.descripcion.length < 50) {
      newErrors.descripcion = "La descripción debe tener al menos 50 caracteres"
    }

    // Validación de historia (mínimo 100 caracteres)
    if (formData.historia && formData.historia.length < 100) {
      newErrors.historia = "La historia debe tener al menos 100 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll al primer error
      const firstErrorField = Object.keys(errors)[0]
      const errorElement = document.getElementById(firstErrorField)
      errorElement?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }

    setIsSubmitting(true)

    try {
      // Preparar datos para envío
      const solicitudData = {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        categoria: formData.categoria,
        historia: formData.historia,
        productos: formData.productos
          .split(",")
          .map((p) => p.trim())
          .filter((p) => p !== ""),
        servicios: formData.servicios
          ? formData.servicios
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s !== "")
          : [],
        ubicacion: formData.ubicacion,
        telefono: formData.telefono,
        email: formData.email,
        nombre_contacto: formData.nombreContacto,
        imagen: formData.imagenPrincipal || undefined,
        galeria: formData.galeria
          ? formData.galeria
              .split(",")
              .map((img) => img.trim())
              .filter((img) => img !== "")
          : [],
        redes_sociales: {
          instagram: formData.instagram || undefined,
          facebook: formData.facebook || undefined,
          whatsapp: formData.whatsapp || undefined,
        },
      }

      const success = await crearSolicitudEmprendimiento(solicitudData)

      if (success) {
        setIsSubmitted(true)
        setShowForm(false)

        // Reset form después de 5 segundos
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            nombre: "",
            descripcion: "",
            categoria: "",
            historia: "",
            productos: "",
            servicios: "",
            ubicacion: "",
            telefono: "",
            email: "",
            nombreContacto: "",
            instagram: "",
            facebook: "",
            whatsapp: "",
            imagenPrincipal: "",
            galeria: "",
          })
        }, 5000)
      } else {
        setErrors({ general: "Hubo un error al enviar tu solicitud. Por favor intenta de nuevo." })
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error)
      setErrors({ general: "Hubo un error al enviar tu solicitud. Por favor intenta de nuevo." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¡Solicitud Enviada Exitosamente!</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Gracias por querer ser parte de TurriEmprende. Nuestro equipo revisará tu solicitud y te contactaremos en
              un plazo máximo de 5 días hábiles.
            </p>
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
              <p className="text-teal-800 font-medium">📧 Te enviaremos un email de confirmación a {formData.email}</p>
            </div>
            <Button onClick={() => setShowForm(true)} variant="outline" className="hover:bg-gray-50 touch-manipulation">
              Registrar Otro Emprendimiento
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-700"
      aria-labelledby="join-heading"
    >
      <div id="registro" className="max-w-7xl mx-auto px-4">
        {!showForm ? (
          // Landing de la sección
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Rocket className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-white">Únete a Nuestra Comunidad</span>
              </div>

              <h2 id="join-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
                ¿Tienes un Emprendimiento?
              </h2>

              <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
                Forma parte del catálogo de emprendimientos más importante de Turrialba. Conecta con tu comunidad y haz
                crecer tu negocio.
              </p>
            </div>

            {/* Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`text-center transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-teal-100">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Estadísticas */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{totalEmprendimientos}+</div>
                  <div className="text-teal-100 text-sm">Emprendimientos Activos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">1000+</div>
                  <div className="text-teal-100 text-sm">Visitantes Mensuales</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-teal-100 text-sm">Satisfacción</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24h</div>
                  <div className="text-teal-100 text-sm">Tiempo de Respuesta</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                onClick={() => setShowForm(true)}
                size="lg"
                className="bg-white text-teal-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation"
              >
                <Heart className="w-5 h-5 mr-2" />
                Registrar Mi Emprendimiento
              </Button>
              <p className="text-teal-100 mt-4 text-sm">Es gratis y solo toma 5 minutos</p>
            </div>
          </div>
        ) : (
          // Formulario
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Registra Tu Emprendimiento
                </CardTitle>
                <p className="text-gray-600">
                  Completa la información para que tu emprendimiento sea parte de TurriEmprende
                </p>
              </CardHeader>

              <CardContent>
                {errors.general && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errors.general}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Básica */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Información Básica</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                          Nombre del Emprendimiento *
                        </Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange("nombre", e.target.value)}
                          placeholder="Ej: Café Montaño"
                          className={`touch-manipulation ${errors.nombre ? "border-red-300" : ""}`}
                          aria-describedby={errors.nombre ? "nombre-error" : undefined}
                        />
                        {errors.nombre && (
                          <p id="nombre-error" className="text-red-600 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.nombre}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="categoria" className="text-sm font-medium text-gray-700">
                          Categoría *
                        </Label>
                        <Select
                          value={formData.categoria}
                          onValueChange={(value) => handleInputChange("categoria", value)}
                        >
                          <SelectTrigger className={`touch-manipulation ${errors.categoria ? "border-red-300" : ""}`}>
                            <SelectValue placeholder="Selecciona una categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categorias.map((categoria) => (
                              <SelectItem key={categoria} value={categoria}>
                                {categoria}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.categoria && (
                          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.categoria}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="descripcion" className="text-sm font-medium text-gray-700">
                        Descripción Corta * <span className="text-gray-500">(mínimo 50 caracteres)</span>
                      </Label>
                      <Textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={(e) => handleInputChange("descripcion", e.target.value)}
                        placeholder="Describe brevemente tu emprendimiento..."
                        rows={3}
                        className={`touch-manipulation ${errors.descripcion ? "border-red-300" : ""}`}
                      />
                      <div className="flex justify-between items-center mt-1">
                        {errors.descripcion && (
                          <p className="text-red-600 text-sm flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.descripcion}
                          </p>
                        )}
                        <span className="text-gray-500 text-sm ml-auto">{formData.descripcion.length}/50</span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="historia" className="text-sm font-medium text-gray-700">
                        Historia de tu Emprendimiento * <span className="text-gray-500">(mínimo 100 caracteres)</span>
                      </Label>
                      <Textarea
                        id="historia"
                        value={formData.historia}
                        onChange={(e) => handleInputChange("historia", e.target.value)}
                        placeholder="Cuéntanos la historia de tu emprendimiento, cómo comenzó, qué te motivó..."
                        rows={4}
                        className={`touch-manipulation ${errors.historia ? "border-red-300" : ""}`}
                      />
                      <div className="flex justify-between items-center mt-1">
                        {errors.historia && (
                          <p className="text-red-600 text-sm flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.historia}
                          </p>
                        )}
                        <span className="text-gray-500 text-sm ml-auto">{formData.historia.length}/100</span>
                      </div>
                    </div>
                  </div>

                  {/* Productos y Servicios */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Productos y Servicios</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="productos" className="text-sm font-medium text-gray-700">
                          Productos Principales * <span className="text-gray-500">(separados por comas)</span>
                        </Label>
                        <Textarea
                          id="productos"
                          value={formData.productos}
                          onChange={(e) => handleInputChange("productos", e.target.value)}
                          placeholder="Ej: Café tostado artesanal, Café molido premium, Granos verdes"
                          rows={3}
                          className={`touch-manipulation ${errors.productos ? "border-red-300" : ""}`}
                        />
                        {errors.productos && (
                          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.productos}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="servicios" className="text-sm font-medium text-gray-700">
                          Servicios Ofrecidos <span className="text-gray-500">(separados por comas)</span>
                        </Label>
                        <Textarea
                          id="servicios"
                          value={formData.servicios}
                          onChange={(e) => handleInputChange("servicios", e.target.value)}
                          placeholder="Ej: Tours de plantación, Catas de café, Talleres de barismo"
                          rows={3}
                          className="touch-manipulation"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Información de Contacto */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Información de Contacto</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombreContacto" className="text-sm font-medium text-gray-700">
                          Nombre de Contacto *
                        </Label>
                        <Input
                          id="nombreContacto"
                          value={formData.nombreContacto}
                          onChange={(e) => handleInputChange("nombreContacto", e.target.value)}
                          placeholder="Tu nombre completo"
                          className={`touch-manipulation ${errors.nombreContacto ? "border-red-300" : ""}`}
                        />
                        {errors.nombreContacto && (
                          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.nombreContacto}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="tu@email.com"
                          className={`touch-manipulation ${errors.email ? "border-red-300" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="telefono" className="text-sm font-medium text-gray-700">
                          Teléfono *
                        </Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange("telefono", e.target.value)}
                          placeholder="+506 2558-1234"
                          className={`touch-manipulation ${errors.telefono ? "border-red-300" : ""}`}
                        />
                        {errors.telefono && (
                          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.telefono}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="ubicacion" className="text-sm font-medium text-gray-700">
                          Ubicación *
                        </Label>
                        <Input
                          id="ubicacion"
                          value={formData.ubicacion}
                          onChange={(e) => handleInputChange("ubicacion", e.target.value)}
                          placeholder="Turrialba, Cartago, Costa Rica"
                          className={`touch-manipulation ${errors.ubicacion ? "border-red-300" : ""}`}
                        />
                        {errors.ubicacion && (
                          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.ubicacion}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Redes Sociales */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Redes Sociales <span className="text-gray-500 font-normal">(Opcional)</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="instagram" className="text-sm font-medium text-gray-700">
                          Instagram
                        </Label>
                        <Input
                          id="instagram"
                          value={formData.instagram}
                          onChange={(e) => handleInputChange("instagram", e.target.value)}
                          placeholder="@tu_usuario"
                          className="touch-manipulation"
                        />
                      </div>

                      <div>
                        <Label htmlFor="facebook" className="text-sm font-medium text-gray-700">
                          Facebook
                        </Label>
                        <Input
                          id="facebook"
                          value={formData.facebook}
                          onChange={(e) => handleInputChange("facebook", e.target.value)}
                          placeholder="Tu Página de Facebook"
                          className="touch-manipulation"
                        />
                      </div>

                      <div>
                        <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
                          WhatsApp
                        </Label>
                        <Input
                          id="whatsapp"
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                          placeholder="+506 8888-9999"
                          className="touch-manipulation"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Imágenes */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Imágenes <span className="text-gray-500 font-normal">(URLs de Cloudinary - Opcional)</span>
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="imagenPrincipal" className="text-sm font-medium text-gray-700">
                          Imagen Principal
                        </Label>
                        <Input
                          id="imagenPrincipal"
                          value={formData.imagenPrincipal}
                          onChange={(e) => handleInputChange("imagenPrincipal", e.target.value)}
                          placeholder="https://res.cloudinary.com/..."
                          className="touch-manipulation"
                        />
                        <p className="text-gray-500 text-sm mt-1">Sube tu imagen a Cloudinary y pega aquí la URL</p>
                      </div>

                      <div>
                        <Label htmlFor="galeria" className="text-sm font-medium text-gray-700">
                          Galería de Imágenes
                        </Label>
                        <Textarea
                          id="galeria"
                          value={formData.galeria}
                          onChange={(e) => handleInputChange("galeria", e.target.value)}
                          placeholder="https://res.cloudinary.com/imagen1.jpg, https://res.cloudinary.com/imagen2.jpg"
                          rows={3}
                          className="touch-manipulation"
                        />
                        <p className="text-gray-500 text-sm mt-1">Separa múltiples URLs con comas</p>
                      </div>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      className="flex-1 touch-manipulation"
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 touch-manipulation"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando...
                        </div>
                      ) : (
                        "Enviar Solicitud"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
