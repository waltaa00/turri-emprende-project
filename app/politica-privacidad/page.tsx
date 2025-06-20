import BackButton from "@/components/BackButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header con botón de regreso */}
        <div className="mb-8">
          <BackButton className="mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
          <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
        </div>

        <div className="space-y-6">
          {/* Introducción */}
          <Card>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">2. Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="font-semibold">2.1 Información Personal</h4>
              <p>Recopilamos información que usted nos proporciona directamente, incluyendo:</p>
              <ul>
                <li>Nombre completo y información de contacto</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información sobre su emprendimiento (nombre, descripción, ubicación)</li>
                <li>Imágenes y contenido multimedia relacionado con su negocio</li>
              </ul>

              <h4 className="font-semibold mt-4">2.2 Información de Uso</h4>
              <p>Automáticamente recopilamos cierta información cuando utiliza nuestro sitio:</p>
              <ul>
                <li>Dirección IP y ubicación geográfica aproximada</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Fuente de referencia al sitio web</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cómo usamos la información */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">3. Cómo Usamos su Información</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Utilizamos la información recopilada para:</p>
              <ul>
                <li>Mostrar y promover emprendimientos locales en nuestra plataforma</li>
                <li>Facilitar la comunicación entre emprendedores y clientes potenciales</li>
                <li>Enviar notificaciones sobre novedades y actualizaciones (solo con su consentimiento)</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir con obligaciones legales y resolver disputas</li>
                <li>Prevenir fraudes y garantizar la seguridad de la plataforma</li>
              </ul>
            </CardContent>
          </Card>

          {/* Compartir información */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">4. Compartir su Información</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes
                circunstancias:
              </p>
              <ul>
                <li>
                  <strong>Con su consentimiento:</strong> Cuando usted autoriza específicamente el intercambio
                </li>
                <li>
                  <strong>Información pública:</strong> Los datos de emprendimientos se muestran públicamente en la
                  plataforma
                </li>
                <li>
                  <strong>Proveedores de servicios:</strong> Con terceros que nos ayudan a operar la plataforma
                </li>
                <li>
                  <strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o autoridades competentes
                </li>
                <li>
                  <strong>Protección de derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seguridad */}
          <Card>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">6. Sus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Usted tiene derecho a:</p>
              <ul>
                <li>
                  <strong>Acceso:</strong> Solicitar una copia de la información personal que tenemos sobre usted
                </li>
                <li>
                  <strong>Rectificación:</strong> Solicitar la corrección de información inexacta o incompleta
                </li>
                <li>
                  <strong>Eliminación:</strong> Solicitar la eliminación de su información personal
                </li>
                <li>
                  <strong>Portabilidad:</strong> Solicitar la transferencia de sus datos a otro servicio
                </li>
                <li>
                  <strong>Oposición:</strong> Oponerse al procesamiento de su información para ciertos fines
                </li>
                <li>
                  <strong>Limitación:</strong> Solicitar la limitación del procesamiento de sus datos
                </li>
              </ul>
              <p>
                Para ejercer estos derechos, contáctenos en: <strong>privacidad@turriemprende.cr</strong>
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">7. Cookies y Tecnologías Similares</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Las cookies
                nos ayudan a:
              </p>
              <ul>
                <li>Recordar sus preferencias y configuraciones</li>
                <li>Analizar el tráfico y uso del sitio web</li>
                <li>Personalizar contenido y anuncios</li>
                <li>Proporcionar funciones de redes sociales</li>
              </ul>
              <p>Puede controlar las cookies a través de la configuración de su navegador.</p>
            </CardContent>
          </Card>

          {/* Cambios a la política */}
          <Card>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">9. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Si tiene preguntas, comentarios o inquietudes sobre esta Política de Privacidad o nuestras prácticas de
                privacidad, puede contactarnos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>TurriEmprende</strong>
                </p>
                <p>Email: privacidad@turriemprende.cr</p>
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
