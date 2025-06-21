"use client"

import { useState, useEffect } from "react"
import type {
  Skill,
  Project,
  TimelineItem,
  Testimonial,
  SocialLink,
  HeroSettings,
  ContactSettings,
  DevEngalereStats,
  AlternanceSearchCriterion, // Added
  AlternanceStrength, // Added
} from "@/types/cms"
import {
  getSkills,
  getFeaturedProjects,
  getTimelineItems,
  getTestimonials,
  getSocialLinks,
  getHeroSettings,
  getContactSettings,
  getDevEngalereStats,
  getAlternanceSearchCriteria, // Added
  getAlternanceStrengths, // Added
} from "@/lib/cms"

// Hook générique pour les données CMS
function useCMSData<T>(fetchFunction: () => Promise<T>, defaultValue: T, dependencies: any[] = []) {
  const [data, setData] = useState<T>(defaultValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchFunction()

        if (isMounted) {
          setData(result)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Une erreur est survenue")
          console.error("Error fetching CMS data:", err)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, dependencies)

  return { data, loading, error }
}

// Hooks spécifiques pour chaque type de données
export function useSkills() {
  return useCMSData<Skill[]>(getSkills, [])
}

export function useProjects() {
  return useCMSData<Project[]>(getFeaturedProjects, [])
}

export function useTimelineItems() {
  return useCMSData<TimelineItem[]>(getTimelineItems, [])
}

export function useTestimonials() {
  return useCMSData<Testimonial[]>(getTestimonials, [])
}

export function useSocialLinks() {
  return useCMSData<SocialLink[]>(getSocialLinks, [])
}

// New hooks for Alternance Section
export function useAlternanceSearchCriteria() {
  return useCMSData<AlternanceSearchCriterion[]>(getAlternanceSearchCriteria, [
    {
      id: "1",
      icon: "Briefcase",
      label: "Poste",
      value: "Développeur Fullstack JS",
      color: "text-emerald-400",
      order_index: 1,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "2",
      icon: "Clock",
      label: "Rythme",
      value: "3 semaines entreprise / 1 semaine école",
      color: "text-blue-400",
      order_index: 2,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "3",
      icon: "Calendar",
      label: "Durée",
      value: "12 mois (Oct 2025 - Oct 2026)",
      color: "text-purple-400",
      order_index: 3,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "4",
      icon: "MapPin",
      label: "Lieu",
      value: "France • Remote friendly",
      color: "text-yellow-400",
      order_index: 4,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "5",
      icon: "GraduationCap",
      label: "Formation",
      value: "CDA RNCP 6 chez Simplon",
      color: "text-pink-400",
      order_index: 5,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
  ])
}

export function useAlternanceStrengths() {
  return useCMSData<AlternanceStrength[]>(getAlternanceStrengths, [
    {
      id: "1",
      icon: "Star",
      label: "Autonomie",
      value: "Projets menés de A à Z",
      color: "text-emerald-400",
      order_index: 1,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "2",
      icon: "Rocket",
      label: "Créativité",
      value: "Solutions innovantes et éco-conçues",
      color: "text-blue-400",
      order_index: 2,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "3",
      icon: "🔧",
      label: "Polyvalence",
      value: "Stack complète maîtrisée",
      color: "text-purple-400",
      order_index: 3,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "4",
      icon: "🌱",
      label: "Éco-conception",
      value: "Développement durable et responsable",
      color: "text-green-400",
      order_index: 4,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "5",
      icon: "😊",
      label: "Humain",
      value: "Esprit d'équipe et bonne humeur",
      color: "text-yellow-400",
      order_index: 5,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
  ])
}

export function useHeroSettings() {
  return useCMSData<HeroSettings>(getHeroSettings, {
    typing_texts: [
      "Développeur Fullstack JS",
      "Créateur DevEnGalère",
      "Étudiant CDA chez Simplon",
      "Prêt pour l'alternance",
    ],
    title: "Salut, je suis Kevine",
    description:
      "Je crée des applications web et mobile modernes et éco-conçues. Passionné par le code propre, l'UX et l'humour tech via DevEnGalère 🚀",
  })
}

export function useContactSettings() {
  return useCMSData<ContactSettings>(getContactSettings, {
    email: "yvesnarsonkevine@gmail.com",
    availability_date: "Octobre 2025",
    location: "France • Remote OK",
  })
}

export function useDevEngalereStats() {
  return useCMSData<DevEngalereStats>(getDevEngalereStats, {
    followers: "100+",
    views: "5000+",
    videos: "20+",
  })
}

// Hook pour récupérer toutes les données en une fois
export function useAllCMSData() {
  const skills = useSkills()
  const projects = useProjects()
  const timeline = useTimelineItems()
  const testimonials = useTestimonials()
  const socialLinks = useSocialLinks()
  const alternanceSearchCriteria = useAlternanceSearchCriteria() // Added
  const alternanceStrengths = useAlternanceStrengths() // Added
  const heroSettings = useHeroSettings()
  const contactSettings = useContactSettings()
  const devEngalereStats = useDevEngalereStats()

  const loading = [
    skills.loading,
    projects.loading,
    timeline.loading,
    testimonials.loading,
    socialLinks.loading,
    alternanceSearchCriteria.loading, // Added
    alternanceStrengths.loading, // Added
    heroSettings.loading,
    contactSettings.loading,
    devEngalereStats.loading,
  ].some(Boolean)

  const error = [
    skills.error,
    projects.error,
    timeline.error,
    testimonials.error,
    socialLinks.error,
    alternanceSearchCriteria.error, // Added
    alternanceStrengths.error, // Added
    heroSettings.error,
    contactSettings.error,
    devEngalereStats.error,
  ].find(Boolean)

  return {
    data: {
      skills: skills.data,
      projects: projects.data,
      timeline: timeline.data,
      testimonials: testimonials.data,
      socialLinks: socialLinks.data,
      alternanceSearchCriteria: alternanceSearchCriteria.data, // Added
      alternanceStrengths: alternanceStrengths.data, // Added
      heroSettings: heroSettings.data,
      contactSettings: contactSettings.data,
      devEngalereStats: devEngalereStats.data,
    },
    loading,
    error,
  }
}