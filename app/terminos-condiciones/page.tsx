import BackButton from "@/components/BackButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header con botón de regreso */}
        <div className="mb-8">
          <BackButton className="mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Términos y Condiciones</h1>
          <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
        </div>

        <div className="space-y-6">
          {/* Aceptación de términos */}
          <Card>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">2. Descripción del Servicio</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                TurriEmprende es una plataforma digital que conecta emprendedores locales de Turrialba con la comunidad,
                proporcionando:
              </p>
              <ul>
                <li>Un catálogo en línea de emprendimientos locales</li>
                <li>Información detallada sobre productos y servicios</li>
                <li>Herramientas de contacto y comunicación</li>
                <li>Recursos y apoyo para emprendedores</li>
                <li>Promoción de la economía local</li>
              </ul>
            </CardContent>
          </Card>

          {/* Registro y cuentas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">3. Registro y Cuentas de Usuario</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="font-semibold">3.1 Elegibilidad</h4>
              <p>
                Para registrar un emprendimiento, debe ser mayor de edad y tener la autoridad legal para representar el
                negocio que está registrando.
              </p>

              <h4 className="font-semibold mt-4">3.2 Información Precisa</h4>
              <p>
                Se compromete a proporcionar información precisa, actual y completa durante el proceso de registro y a
                mantener actualizada dicha información.
              </p>

              <h4 className="font-semibold mt-4">3.3 Responsabilidad de la Cuenta</h4>
              <p>
                Es responsable de mantener la confidencialidad de cualquier información de acceso y de todas las
                actividades que ocurran bajo su cuenta.
              </p>
            </CardContent>
          </Card>

          {/* Uso aceptable */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">4. Uso Aceptable</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="font-semibold">4.1 Usos Permitidos</h4>
              <p>Puede utilizar TurriEmprende para:</p>
              <ul>
                <li>Promocionar legítimamente su emprendimiento local</li>
                <li>Buscar y contactar emprendimientos de interés</li>
                <li>Acceder a recursos educativos y de apoyo</li>
                <li>Participar en la comunidad emprendedora local</li>
              </ul>

              <h4 className="font-semibold mt-4">4.2 Usos Prohibidos</h4>
              <p>No puede utilizar nuestros servicios para:</p>
              <ul>
                <li>Publicar información falsa, engañosa o fraudulenta</li>
                <li>Violar derechos de propiedad intelectual de terceros</li>
                <li>Enviar spam o contenido no solicitado</li>
                <li>Interferir con el funcionamiento de la plataforma</li>
                <li>Realizar actividades ilegales o no éticas</li>
                <li>Acosar, amenazar o intimidar a otros usuarios</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contenido del usuario */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">5. Contenido del Usuario</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="font-semibold">5.1 Propiedad del Contenido</h4>
              <p>
                Usted conserva todos los derechos de propiedad sobre el contenido que envía a TurriEmprende, incluyendo
                textos, imágenes, y otra información sobre su emprendimiento.
              </p>

              <h4 className="font-semibold mt-4">5.2 Licencia de Uso</h4>
              <p>
                Al enviar contenido, nos otorga una licencia no exclusiva, mundial y libre de regalías para usar,
                mostrar, reproducir y distribuir dicho contenido en relación con nuestros servicios.
              </p>

              <h4 className="font-semibold mt-4">5.3 Responsabilidad del Contenido</h4>
              <p>
                Es completamente responsable del contenido que publica y garantiza que tiene todos los derechos
                necesarios para compartirlo en nuestra plataforma.
              </p>
            </CardContent>
          </Card>

          {/* Moderación */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">6. Moderación y Eliminación de Contenido</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Nos reservamos el derecho de revisar, moderar, rechazar o eliminar cualquier contenido que:</p>
              <ul>
                <li>Viole estos Términos y Condiciones</li>
                <li>Sea inapropiado, ofensivo o ilegal</li>
                <li>Infrinja derechos de terceros</li>
                <li>No cumpla con nuestros estándares de calidad</li>
                <li>Represente un riesgo para otros usuarios</li>
              </ul>
              <p>
                La moderación puede realizarse antes o después de la publicación, y no estamos obligados a proporcionar
                notificación previa.
              </p>
            </CardContent>
          </Card>

          {/* Limitación de responsabilidad */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">7. Limitación de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                TurriEmprende actúa como una plataforma de conexión entre emprendedores y clientes. No somos
                responsables de:
              </p>
              <ul>
                <li>La calidad, seguridad o legalidad de los productos/servicios ofrecidos</li>
                <li>La veracidad de la información proporcionada por los emprendedores</li>
                <li>Las transacciones realizadas entre usuarios</li>
                <li>Disputas entre emprendedores y clientes</li>
                <li>Daños directos, indirectos, incidentales o consecuentes</li>
              </ul>
              <p>Nuestros servicios se proporcionan "tal como están" sin garantías de ningún tipo.</p>
            </CardContent>
          </Card>

          {/* Propiedad intelectual */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">8. Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Todos los derechos de propiedad intelectual en TurriEmprende, incluyendo pero no limitado a:</p>
              <ul>
                <li>Diseño y funcionalidad del sitio web</li>
                <li>Logotipos, marcas comerciales y nombres comerciales</li>
                <li>Software y código fuente</li>
                <li>Contenido original creado por nosotros</li>
              </ul>
              <p>
                Son propiedad de TurriEmprende o nuestros licenciantes y están protegidos por las leyes de propiedad
                intelectual aplicables.
              </p>
            </CardContent>
          </Card>

          {/* Terminación */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">9. Terminación</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Podemos suspender o terminar su acceso a nuestros servicios en cualquier momento, con o sin causa, con o
                sin notificación previa, especialmente si:
              </p>
              <ul>
                <li>Viola estos Términos y Condiciones</li>
                <li>Proporciona información falsa o engañosa</li>
                <li>Participa en actividades fraudulentas o ilegales</li>
                <li>Abusa de la plataforma o de otros usuarios</li>
              </ul>
              <p>Usted también puede terminar su uso de nuestros servicios en cualquier momento.</p>
            </CardContent>
          </Card>

          {/* Ley aplicable */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">10. Ley Aplicable y Jurisdicción</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Estos Términos se rigen por las leyes de Costa Rica. Cualquier disputa relacionada con estos términos o
                el uso de nuestros servicios será resuelta en los tribunales competentes de Cartago, Costa Rica.
              </p>
            </CardContent>
          </Card>

          {/* Cambios a los términos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">11. Modificaciones</CardTitle>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">12. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
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
