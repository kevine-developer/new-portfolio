"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/HeroSection/hero-section";
import { SkillsSection } from "@/components/sections/SkillSection/skills-section";
import { ProjectsSection } from "@/components/sections/ProjectSection/projects-section";
import { TimelineSection } from "@/components/sections/TimelineSection/timeline-section";
import { AlternanceSection } from "@/components/sections/AlternanceSection/alternance-section";
import { ContactSection } from "@/components/sections/ContactSection/contact-section";
import PWAInstallPrompt from "@/components/pwa-install-prompt";
import PWAStatus from "@/components/pwa-status";
import { CMSStatus } from "@/components/ui/cms-status";
import DevEngalereSection from "@/components/sections/DevengalereSection/devengalereSection";


export default function ModernPortfolio() {

  return (
    <main
      tabIndex={1}
      className="min-h-screen transition-all duration-500 bg-slate-950 text-white relative overflow-hidden "
    >
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
      <Footer />
    </main>
  );
}
