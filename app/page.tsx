"use client"

import { useRef } from "react"
import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import CatalogPreview from "@/components/CatalogPreview"
import JoinSection from "@/components/JoinSection"
import BottomNavigation from "@/components/BottomNavigation"
import SectionNavigation from "@/components/SectionNavigation"
import BackToTopButton from "@/components/BackToTopButton"
import Footer from "@/components/Footer"

export default function HomePage() {
  const aboutSectionRef = useRef<HTMLElement>(null)

  const handleLearnMoreClick = () => {
    aboutSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main id="main-content" className="flex-1">
        <Hero onLearnMoreClick={handleLearnMoreClick} />
        <AboutSection ref={aboutSectionRef} />
        <CatalogPreview />
        <JoinSection />
      </main>
      <Footer />
      <BottomNavigation />
      <SectionNavigation />
      <BackToTopButton />
    </div>
  )
}
