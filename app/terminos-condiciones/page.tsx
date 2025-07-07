"use client"

import { useState, useEffect } from "react"
import BackButton from "@/components/BackButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TerminosCondicionesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header con botón de regreso */}
        <div className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
          <BackButton className="mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Términos y Condiciones</h1>
          <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
        </div>

        <div className="space-y-6">
          {/* Aceptación de términos */}
          <Card className={`transition-all duration-700 delay-100 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">1. Aceptación de los Términos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Bienvenido a TurriEmprende. Estos Términos y Condiciones ("Términos") rigen su uso de nuestro sitio web
                y servicios. Al acceder o utilizar TurriEmprende, usted acepta estar sujeto a estos Términos en su
                totalidad.
              </p>
              <p>Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.</p>
            </CardContent>
          </Card>

          {/* Descripción del servicio */}
          <Card className={`transition-all duration-700 delay-200 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">2. Descripción del Servicio</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                TurriEmprende es una plataforma digital que conecta emprendedores locales de Turrialba con la comunidad,
                proporcionando:
              </p>
              <ul className="space-y-2">
                {[
                  "Un catálogo en línea de emprendimientos locales",
                  "Información detallada sobre productos y servicios",
                  "Herramientas de contacto y comunicación",
                  "Recursos y apoyo para emprendedores",
                  "Promoción de la economía local"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 delay-${(index + 1) * 100} hover:translate-x-2`}
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Registro y cuentas */}
          <Card className={`transition-all duration-700 delay-300 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">3. Registro y Cuentas</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Para registrar un emprendimiento en nuestra plataforma:</p>
              <ul className="space-y-2">
                {[
                  "Debe ser mayor de edad",
                  "Proporcionar información precisa y veraz",
                  "Mantener la información actualizada",
                  "Proteger sus credenciales de acceso",
                  "Notificar cualquier uso no autorizado"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 delay-${(index + 1) * 100} hover:translate-x-2`}
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contenido y conducta */}
          <Card className={`transition-all duration-700 delay-400 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">4. Contenido y Conducta</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none hover:prose-a:text-teal-600">
              <p>Los usuarios son responsables del contenido que publican y deben cumplir con nuestras normas de conducta.</p>
              <p>No se permite contenido que sea:</p>
              <ul className="space-y-2">
                {[
                  "Ilegal o que promueva actividades ilegales",
                  "Difamatorio o calumnioso",
                  "Infractor de derechos de propiedad intelectual",
                  "Engañoso o fraudulento",
                  "Dañino o malicioso"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 delay-${(index + 1) * 100} hover:translate-x-2`}
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Propiedad intelectual */}
          <Card className={`transition-all duration-700 delay-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">5. Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Todo el contenido original de TurriEmprende está protegido por derechos de autor y otras leyes de
                propiedad intelectual.
              </p>
              <ul className="space-y-2">
                {[
                  "Logotipos y marcas registradas",
                  "Diseños y gráficos",
                  "Textos y contenido editorial",
                  "Código fuente y software",
                  "Bases de datos y compilaciones"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 delay-${(index + 1) * 100} hover:translate-x-2`}
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Moderación y eliminación de contenido */}
          <Card className={`transition-all duration-700 delay-600 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">6. Moderación y Eliminación de Contenido</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Nos reservamos el derecho de revisar, moderar, rechazar o eliminar cualquier contenido que:</p>
              <ul className="space-y-2">
                {[
                  "Viole estos Términos y Condiciones",
                  "Sea inapropiado, ofensivo o ilegal",
                  "Infrinja derechos de terceros",
                  "No cumpla con nuestros estándares de calidad",
                  "Represente un riesgo para otros usuarios"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 delay-${(index + 1) * 100} hover:translate-x-2`}
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Limitación de responsabilidad */}
          <Card className={`transition-all duration-700 delay-700 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">7. Limitación de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                TurriEmprende no se hace responsable de:
              </p>
              <ul className="space-y-2">
                {[
                  "Contenido generado por usuarios",
                  "Pérdidas o daños indirectos",
                  "Interrupciones del servicio",
                  "Acciones de terceros",
                  "Problemas técnicos o de conectividad"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 delay-${(index + 1) * 100} hover:translate-x-2`}
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Cambios a los términos */}
          <Card className={`transition-all duration-700 delay-800 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">8. Modificaciones</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios significativos
                serán notificados a través de nuestro sitio web o por correo electrónico.
              </p>
              <p>
                Su uso continuado de nuestros servicios después de la publicación de cambios constituye su aceptación de
                los nuevos términos.
              </p>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className={`transition-all duration-700 delay-900 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">9. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4 hover:bg-gray-100 transition-colors duration-300">
                <p>
                  <strong>TurriEmprende</strong>
                </p>
                <p>Email: legal@turriemprende.cr</p>
                <p>Teléfono: +506 2558-0000</p>
                <p>Dirección: Turrialba, Cartago, Costa Rica</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
