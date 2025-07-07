"use client"

import { useState, useEffect } from "react"
import BackButton from "@/components/BackButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PoliticaPrivacidadPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
          <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
        </div>

        <div className="space-y-6">
          {/* Introducción */}
          <Card className={`transition-all duration-700 delay-100 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">1. Introducción</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                En TurriEmprende, nos comprometemos a proteger y respetar su privacidad. Esta Política de Privacidad
                explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestro sitio
                web y servicios relacionados.
              </p>
              <p>Al acceder o utilizar nuestros servicios, usted acepta las prácticas descritas en esta política.</p>
            </CardContent>
          </Card>

          {/* Información que recopilamos */}
          <Card className={`transition-all duration-700 delay-200 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">2. Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="font-semibold">2.1 Información Personal</h4>
              <p>Recopilamos información que usted nos proporciona directamente, incluyendo:</p>
              <ul className="space-y-2">
                {[
                  "Nombre completo y información de contacto",
                  "Dirección de correo electrónico",
                  "Número de teléfono",
                  "Información sobre su emprendimiento (nombre, descripción, ubicación)",
                  "Imágenes y contenido multimedia relacionado con su negocio"
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

              <h4 className="font-semibold mt-4">2.2 Información de Uso</h4>
              <p>Automáticamente recopilamos cierta información cuando utiliza nuestro sitio:</p>
              <ul className="space-y-2">
                {[
                  "Dirección IP y ubicación geográfica aproximada",
                  "Tipo de navegador y dispositivo",
                  "Páginas visitadas y tiempo de permanencia",
                  "Fuente de referencia al sitio web"
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

          {/* Cómo usamos la información */}
          <Card className={`transition-all duration-700 delay-300 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">3. Cómo Usamos su Información</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="space-y-2">
                {[
                  "Mostrar y promover emprendimientos locales en nuestra plataforma",
                  "Facilitar la comunicación entre emprendedores y clientes potenciales",
                  "Enviar notificaciones sobre novedades y actualizaciones (solo con su consentimiento)",
                  "Mejorar nuestros servicios y experiencia del usuario",
                  "Cumplir con obligaciones legales y resolver disputas",
                  "Prevenir fraudes y garantizar la seguridad de la plataforma"
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

          {/* Compartir información */}
          <Card className={`transition-all duration-700 delay-400 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">4. Compartir su Información</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes
                circunstancias:
              </p>
              <ul className="space-y-2">
                {[
                  "Con su consentimiento: Cuando usted autoriza específicamente el intercambio",
                  "Información pública: Los datos de emprendimientos se muestran públicamente en la plataforma",
                  "Proveedores de servicios: Con terceros que nos ayudan a operar la plataforma",
                  "Cumplimiento legal: Cuando sea requerido por ley o autoridades competentes",
                  "Protección de derechos: Para proteger nuestros derechos, propiedad o seguridad"
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

          {/* Seguridad */}
          <Card className={`transition-all duration-700 delay-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">5. Seguridad de la Información</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger su
                información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
              <p>
                Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
                Aunque nos esforzamos por proteger su información, no podemos garantizar su seguridad absoluta.
              </p>
            </CardContent>
          </Card>

          {/* Sus derechos */}
          <Card className={`transition-all duration-700 delay-600 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">6. Sus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Usted tiene derecho a:</p>
              <ul className="space-y-2">
                {[
                  "Acceder a su información personal",
                  "Corregir datos inexactos",
                  "Solicitar la eliminación de sus datos",
                  "Oponerse al procesamiento de su información",
                  "Retirar su consentimiento en cualquier momento"
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

          {/* Cookies */}
          <Card className={`transition-all duration-700 delay-700 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">7. Cookies y Tecnologías Similares</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Las cookies
                nos ayudan a:
              </p>
              <ul className="space-y-2">
                {[
                  "Recordar sus preferencias y configuraciones",
                  "Analizar el tráfico y uso del sitio web",
                  "Personalizar contenido y anuncios",
                  "Proporcionar funciones de redes sociales"
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
              <p>Puede controlar las cookies a través de la configuración de su navegador.</p>
            </CardContent>
          </Card>

          {/* Cambios a la política */}
          <Card className={`transition-all duration-700 delay-800 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">8. Cambios a esta Política</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios
                significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "última
                actualización".
              </p>
              <p>
                Le recomendamos revisar esta política periódicamente para mantenerse informado sobre cómo protegemos su
                información.
              </p>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className={`transition-all duration-700 delay-900 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">9. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos:</p>
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
