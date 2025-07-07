import { Metadata } from "next"
import { obtenerEmprendimientoPorId } from "@/lib/data-manager"
import EmprendimientoPageClient from "@/components/EmprendimientoPageClient"

interface Props {
  params: {
    id: string
  }
}

// Generar metadatos dinámicamente para cada emprendimiento
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const emprendimiento = obtenerEmprendimientoPorId(params.id)

  if (!emprendimiento) {
    return {
      title: "Emprendimiento no encontrado | TurriEmprende",
      description: "El emprendimiento que buscas no existe o ha sido removido.",
    }
  }

  const title = `${emprendimiento.nombre} | TurriEmprende`
  const description = emprendimiento.descripcion.length > 160 
    ? emprendimiento.descripcion.substring(0, 157) + "..."
    : emprendimiento.descripcion

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://turriemprende.cr/emprendimiento/${params.id}`,
      siteName: "TurriEmprende",
      images: [
        {
          url: emprendimiento.imagen.url,
          width: 1200,
          height: 630,
          alt: emprendimiento.imagen.alt,
        },
      ],
      locale: "es_CR",
      type: "article",
      authors: [emprendimiento.nombre_contacto],
      publishedTime: emprendimiento.fecha_creacion,
      modifiedTime: emprendimiento.fecha_actualizacion,
      section: emprendimiento.categoria,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [emprendimiento.imagen.url],
      creator: "@TurriEmprende",
      site: "@TurriEmprende",
    },
    alternates: {
      canonical: `https://turriemprende.cr/emprendimiento/${params.id}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default function EmprendimientoPage({ params }: Props) {
  return <EmprendimientoPageClient id={params.id} />
}
