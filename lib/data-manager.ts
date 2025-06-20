import emprendimientosData from "@/data/emprendimientos.json"

// Tipos para TypeScript
export interface Emprendimiento {
  id: string
  nombre: string
  descripcion: string
  categoria: string
  imagen: string
  galeria: string[]
  historia: string
  productos: string[]
  servicios: string[]
  redes_sociales?: {
    instagram?: string
    facebook?: string
    whatsapp?: string
  }
  ubicacion: string
  telefono: string
  email: string
  nombre_contacto: string
  aprobado: boolean
  fecha_creacion: string
  fecha_actualizacion: string
}

export interface SolicitudEmprendimiento {
  id: string
  nombre: string
  descripcion: string
  categoria: string
  imagen?: string
  galeria?: string[]
  historia: string
  productos: string[]
  servicios?: string[]
  redes_sociales?: {
    instagram?: string
    facebook?: string
    whatsapp?: string
  }
  ubicacion: string
  telefono: string
  email: string
  nombre_contacto: string
  estado: "pendiente" | "aprobado" | "rechazado"
  fecha_solicitud: string
  notas_admin?: string
}

export interface Suscripcion {
  id: string
  nombre: string
  email: string
  emprendimiento_nombre: string
  emprendimiento_id?: string
  fecha_suscripcion: string
  activa: boolean
}

// Funciones para obtener datos
export function obtenerEmprendimientos(): Emprendimiento[] {
  // Force a fresh import by deleting the require cache
  delete require.cache[require.resolve("@/data/emprendimientos.json")]
  const emprendimientosData = require("@/data/emprendimientos.json")
  return emprendimientosData.emprendimientos.filter((emp: Emprendimiento) => emp.aprobado)
}

export function obtenerEmprendimientoPorId(id: string): Emprendimiento | null {
  // Force a fresh import by deleting the require cache
  delete require.cache[require.resolve("@/data/emprendimientos.json")]
  const emprendimientosData = require("@/data/emprendimientos.json")
  const emprendimiento = emprendimientosData.emprendimientos.find((emp: Emprendimiento) => emp.id === id && emp.aprobado)
  return emprendimiento || null
}

export function contarEmprendimientos(): number {
  return emprendimientosData.emprendimientos.filter((emp) => emp.aprobado).length
}

// Función para generar ID único
function generarId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Función para generar slug único
function generarSlug(nombre: string): string {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remover acentos
    .replace(/[^a-z0-9\s-]/g, "") // Remover caracteres especiales
    .replace(/\s+/g, "-") // Reemplazar espacios con guiones
    .replace(/-+/g, "-") // Remover guiones múltiples
    .trim()
}

// Funciones para manejar solicitudes de emprendimientos
export async function crearSolicitudEmprendimiento(datos: {
  nombre: string
  descripcion: string
  categoria: string
  historia: string
  productos: string[]
  servicios?: string[]
  ubicacion: string
  telefono: string
  email: string
  nombre_contacto: string
  imagen?: string
  galeria?: string[]
  redes_sociales?: {
    instagram?: string
    facebook?: string
    whatsapp?: string
  }
}): Promise<boolean> {
  try {
    const nuevaSolicitud: SolicitudEmprendimiento = {
      id: generarId(),
      ...datos,
      estado: "pendiente",
      fecha_solicitud: new Date().toISOString(),
    }

    // En un entorno real, esto se enviaría a una API
    // Por ahora, simulamos el guardado
    console.log("Nueva solicitud de emprendimiento:", nuevaSolicitud)

    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return true
  } catch (error) {
    console.error("Error al crear solicitud:", error)
    return false
  }
}

// Funciones para manejar suscripciones
export async function crearSuscripcion(datos: {
  nombre: string
  email: string
  emprendimiento_nombre: string
  emprendimiento_id?: string
}): Promise<boolean> {
  try {
    const nuevaSuscripcion: Suscripcion = {
      id: generarId(),
      ...datos,
      fecha_suscripcion: new Date().toISOString(),
      activa: true,
    }

    // En un entorno real, esto se enviaría a una API
    // Por ahora, simulamos el guardado
    console.log("Nueva suscripción:", nuevaSuscripcion)

    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return true
  } catch (error) {
    console.error("Error al crear suscripción:", error)
    return false
  }
}

// Función para obtener estadísticas
export function obtenerEstadisticas() {
  const emprendimientos = obtenerEmprendimientos()
  const categorias = [...new Set(emprendimientos.map((emp) => emp.categoria))]

  return {
    total_emprendimientos: emprendimientos.length,
    categorias: categorias.length,
    emprendimientos_por_categoria: categorias.map((categoria) => ({
      categoria,
      cantidad: emprendimientos.filter((emp) => emp.categoria === categoria).length,
    })),
  }
}

// Función para buscar emprendimientos
export function buscarEmprendimientos(termino: string): Emprendimiento[] {
  const emprendimientos = obtenerEmprendimientos()
  const terminoLower = termino.toLowerCase()

  return emprendimientos.filter(
    (emp) =>
      emp.nombre.toLowerCase().includes(terminoLower) ||
      emp.descripcion.toLowerCase().includes(terminoLower) ||
      emp.categoria.toLowerCase().includes(terminoLower) ||
      emp.ubicacion.toLowerCase().includes(terminoLower),
  )
}

// Función para filtrar por categoría
export function filtrarPorCategoria(categoria: string): Emprendimiento[] {
  const emprendimientos = obtenerEmprendimientos()
  return emprendimientos.filter((emp) => emp.categoria === categoria)
}

// Función para obtener emprendimientos recientes
export function obtenerEmprendimientosRecientes(limite = 3): Emprendimiento[] {
  const emprendimientos = obtenerEmprendimientos()
  return emprendimientos
    .sort((a, b) => new Date(b.fecha_creacion).getTime() - new Date(a.fecha_creacion).getTime())
    .slice(0, limite)
}
