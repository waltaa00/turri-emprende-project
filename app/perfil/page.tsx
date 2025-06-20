import BottomNavigation from "@/components/BottomNavigation"
import { User } from "lucide-react"

export default function PerfilPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Mi Perfil</h1>
          <p className="text-gray-600 mt-2">Gestiona tu cuenta y preferencias</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-16">
          <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Perfil en desarrollo</h2>
          <p className="text-gray-600">Esta sección estará disponible próximamente</p>
        </div>
      </section>

      <BottomNavigation />
    </main>
  )
}
