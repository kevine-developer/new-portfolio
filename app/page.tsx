"use client"

import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { DevEngalereSection } from "@/components/sections/devengalere-section"
import { AlternanceSection } from "@/components/sections/alternance-section"
import { ContactSection } from "@/components/sections/contact-section"
import PWAInstallPrompt from "@/components/pwa-install-prompt"
import PWAStatus from "@/components/pwa-status"
import { CMSStatus } from "@/components/ui/cms-status"


export default function ModernPortfolio() {

  return (
    <main className={`min-h-screen transition-all duration-500 bg-slate-950 text-white relative `}>
    
        {/* Status Components */}
        <PWAStatus />
        <PWAInstallPrompt />
        <CMSStatus />

        {/* Navigation */}
        <Navigation />

        {/* Sections */}
        <HeroSection /> 
        <AlternanceSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection /> 
        
        <DevEngalereSection />
      
        <ContactSection />

        {/** footer */}
        <Footer/>

</main>)
  }