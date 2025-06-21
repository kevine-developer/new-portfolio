import { supabase, isSupabaseConfigured } from "./supabase"
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

// Données de fallback statiques
const FALLBACK_SKILLS: Skill[] = [
  {
    id: "1",
    name: "React",
    level: 95,
    color: "from-blue-400 to-blue-600",
    icon: "⚛️",
    category: "frontend",
    order_index: 1,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "2",
    name: "Next.js",
    level: 90,
    color: "from-gray-400 to-gray-600",
    icon: "▲",
    category: "frontend",
    order_index: 2,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "3",
    name: "TypeScript",
    level: 85,
    color: "from-blue-500 to-blue-700",
    icon: "📘",
    category: "frontend",
    order_index: 3,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    level: 90,
    color: "from-cyan-400 to-cyan-600",
    icon: "🎨",
    category: "frontend",
    order_index: 4,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "5",
    name: "PHP/Laravel",
    level: 80,
    color: "from-red-400 to-red-600",
    icon: "🔧",
    category: "backend",
    order_index: 5,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "6",
    name: "Node.js",
    level: 75,
    color: "from-green-400 to-green-600",
    icon: "🟢",
    category: "backend",
    order_index: 6,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "7",
    name: "Supabase",
    level: 85,
    color: "from-emerald-400 to-emerald-600",
    icon: "🗄️",
    category: "backend",
    order_index: 7,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "8",
    name: "React Native",
    level: 75,
    color: "from-purple-400 to-purple-600",
    icon: "📱",
    category: "mobile",
    order_index: 8,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
]

const FALLBACK_PROJECTS: Project[] = [
  {
    id: "easytri",
    slug: "easytri",
    title: "Easytri",
    description: "Application mobile de tri sélectif avec IA",
    long_description:
      "Application mobile complète développée en React Native avec reconnaissance d'objets par IA, géolocalisation des points de collecte, et système de gamification pour encourager le tri sélectif.",
    tech: ["React Native", "Supabase", "TensorFlow.js", "Expo", "TypeScript"],
    type: "Production",
    status: "🚀 En production",
    image_url: "/placeholder.svg?height=300&width=400",
    color: "from-emerald-500 to-teal-600",
    github_url: "https://github.com/kevine/easytri",
    demo_url: "https://easytri.app",
    metrics: "5k+ utilisateurs actifs",
    is_featured: true,
    order_index: 1,
    is_active: true,
    created_at: "",
    updated_at: "",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/kevine/easytri",
    demo: "https://easytri.app",
    featured: true,
  },
  {
    id: "telolabz",
    slug: "telolabz",
    title: "TeloLabz - Missions Freelance",
    description: "Développement d'applications sur mesure",
    long_description:
      "Série de projets freelance incluant des sites e-commerce, applications web, et APIs. Développement fullstack avec Laravel/PHP côté backend et React/Next.js côté frontend.",
    tech: ["Next.js", "Laravel", "MySQL", "Stripe", "Tailwind CSS"],
    type: "Freelance",
    status: "💼 15+ projets livrés",
    image_url: "/placeholder.svg?height=300&width=400",
    color: "from-purple-500 to-indigo-600",
    github_url: "https://github.com/kevine/telolabz-projects",
    demo_url: "https://telolabz.com",
    metrics: "15+ clients satisfaits",
    is_featured: true,
    order_index: 2,
    is_active: true,
    created_at: "",
    updated_at: "",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/kevine/telolabz-projects",
    demo: "https://telolabz.com",
    featured: true,
  },
  {
    id: "devengalere",
    slug: "devengalere",
    title: "DevEnGalère",
    description: "Contenu tech humoristique sur les réseaux",
    long_description:
      "Création de contenu éducatif et humoristique sur le développement web via TikTok et Instagram. Vulgarisation de concepts techniques complexes avec une approche décalée.",
    tech: ["Next.js", "MDX", "Vercel", "Figma", "Premiere Pro"],
    type: "Personnel",
    status: "🔥 10k+ followers",
    image_url: "/placeholder.svg?height=300&width=400",
    color: "from-yellow-500 to-orange-600",
    github_url: "https://github.com/kevine/devengalere",
    demo_url: "https://devengalere.fr",
    metrics: "10k+ followers, 500k+ vues",
    is_featured: true,
    order_index: 3,
    is_active: true,
    created_at: "",
    updated_at: "",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/kevine/devengalere",
    demo: "https://devengalere.fr",
    featured: true,
  },
]

const FALLBACK_TIMELINE: TimelineItem[] = [
  {
    id: "1",
    date_range: "Oct 2025 - Oct 2026",
    title: "Concepteur Développeur d'Applications",
    company: "Simplon",
    description: "Formation RNCP 6 en alternance - Spécialisation développement fullstack JavaScript",
    type: "formation",
    status: "🎯 En cours",
    icon: "🎓",
    order_index: 1,
    is_active: true,
    created_at: "",
    updated_at: "",
    date: "Oct 2025 - Oct 2026",
  },
  {
    id: "2",
    date_range: "2024",
    title: "Développeur Web - RNCP 5",
    company: "OpenClassrooms",
    description: "Formation certifiante validée avec mention. Projets React, Node.js, et bases de données.",
    type: "formation",
    status: "✅ Validé avec mention",
    icon: "📚",
    order_index: 2,
    is_active: true,
    created_at: "",
    updated_at: "",
    date: "2024",
  },
]

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Martin",
    role: "Formatrice OpenClassrooms",
    company: "OpenClassrooms",
    content:
      "Kevine a montré une progression remarquable et une capacité d'autonomie exceptionnelle. Ses projets témoignent d'une vraie compréhension des enjeux techniques et UX.",
    avatar_url: "/placeholder.svg?height=60&width=60",
    order_index: 1,
    is_active: true,
    created_at: "",
    updated_at: "",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const FALLBACK_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "1",
    name: "GitHub",
    url: "https://github.com/kevine",
    icon: "Github",
    color: "hover:text-gray-400",
    order_index: 1,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "2",
    name: "LinkedIn",
    url: "https://linkedin.com/in/kevine-dev",
    icon: "Linkedin",
    color: "hover:text-blue-400",
    order_index: 2,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "3",
    name: "TikTok",
    url: "https://tiktok.com/@devengalere",
    icon: "Music",
    color: "hover:text-pink-400",
    order_index: 3,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "4",
    name: "Instagram",
    url: "https://instagram.com/devengalere",
    icon: "Instagram",
    color: "hover:text-purple-400",
    order_index: 4,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "5",
    name: "Email",
    url: "mailto:kevine.dev@gmail.com",
    icon: "Mail",
    color: "hover:text-emerald-400",
    order_index: 5,
    is_active: true,
    created_at: "",
    updated_at: "",
  },
]

const FALLBACK_ALTERNANCE_SEARCH_CRITERIA: AlternanceSearchCriterion[] = [
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
]
const FALLBACK_HERO_SETTINGS: HeroSettings = {
  typing_texts: [
    "Développeur Fullstack JS",
    "Créateur DevEnGalère",
    "Étudiant CDA chez Simplon",
    "Passionné d'éco-conception",
    "Prêt pour l'alternance",
  ],
  title: "Salut, je suis Kevine",
  description:
    "Je crée des applications web et mobile modernes et éco-conçues. Passionné par le code propre, l'UX et l'humour tech via DevEnGalère 🚀",
}

const FALLBACK_CONTACT_SETTINGS: ContactSettings = {
  email: "kevine.dev@gmail.com",
  availability_date: "Octobre 2025",
  location: "France • Remote OK",
}

const FALLBACK_DEVENGALERE_STATS: DevEngalereStats = {
  followers: "10k+",
  views: "500k+",
  videos: "50+",
}
const FALLBACK_ALTERNANCE_STRENGTHS: AlternanceStrength[] = [
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
]

// Cache simple en mémoire
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  return null
}

function setCachedData<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() })
}

// Fonctions pour récupérer les données avec fallback

export async function getSkills(): Promise<Skill[]> {
  const cacheKey = "skills"
  const cached = getCachedData<Skill[]>(cacheKey)
  if (cached) return cached

  // Si Supabase n'est pas configuré, utiliser les données de fallback
  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for skills")
    setCachedData(cacheKey, FALLBACK_SKILLS)
    return FALLBACK_SKILLS
  }

  try {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true })

    if (error) {
      console.error("Error fetching skills:", error)
      return FALLBACK_SKILLS
    }

    setCachedData(cacheKey, data || [])
    return data || []
  } catch (error) {
    console.error("Error fetching skills:", error)
    return FALLBACK_SKILLS
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const cacheKey = "featured-projects"
  const cached = getCachedData<Project[]>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for featured projects")
    setCachedData(cacheKey, FALLBACK_PROJECTS)
    return FALLBACK_PROJECTS
  }

  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("is_active", true)
      .eq("is_featured", true)
      .order("order_index", { ascending: true })

    if (error) {
      console.error("Error fetching featured projects:", error)
      return FALLBACK_PROJECTS
    }

    const projects = (data || []).map((project) => ({
      ...project,
      tech: Array.isArray(project.tech) ? (project.tech as string[]) : [],
      image: project.image_url || "/placeholder.svg?height=300&width=400",
      github: project.github_url || "#",
      demo: project.demo_url || "#",
      featured: project.is_featured,
    })) as Project[]

    setCachedData(cacheKey, projects)
    return projects
  } catch (error) {
    console.error("Error fetching featured projects:", error)
    return FALLBACK_PROJECTS
  }
}

export async function getTimelineItems(): Promise<TimelineItem[]> {
  const cacheKey = "timeline"
  const cached = getCachedData<TimelineItem[]>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for timeline")
    setCachedData(cacheKey, FALLBACK_TIMELINE)
    return FALLBACK_TIMELINE
  }

  try {
    const { data, error } = await supabase
      .from("timeline_items")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true })

    if (error) {
      console.error("Error fetching timeline items:", error)
      return FALLBACK_TIMELINE
    }

    const timelineItems = (data || []).map((item) => ({
      ...item,
      date: item.date_range,
    })) as TimelineItem[]

    setCachedData(cacheKey, timelineItems)
    return timelineItems
  } catch (error) {
    console.error("Error fetching timeline items:", error)
    return FALLBACK_TIMELINE
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const cacheKey = "testimonials"
  const cached = getCachedData<Testimonial[]>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for testimonials")
    setCachedData(cacheKey, FALLBACK_TESTIMONIALS)
    return FALLBACK_TESTIMONIALS
  }

  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true })

    if (error) {
      console.error("Error fetching testimonials:", error)
      return FALLBACK_TESTIMONIALS
    }

    const testimonials = (data || []).map((testimonial) => ({
      ...testimonial,
      avatar: testimonial.avatar_url || "/placeholder.svg?height=60&width=60",
    })) as Testimonial[]

    setCachedData(cacheKey, testimonials)
    return testimonials
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return FALLBACK_TESTIMONIALS
  }
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  const cacheKey = "social-links"
  const cached = getCachedData<SocialLink[]>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for social links")
    setCachedData(cacheKey, FALLBACK_SOCIAL_LINKS)
    return FALLBACK_SOCIAL_LINKS
  }

  try {
    const { data, error } = await supabase
      .from("social_links")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true })

    if (error) {
      console.error("Error fetching social links:", error)
      return FALLBACK_SOCIAL_LINKS
    }

    setCachedData(cacheKey, data || [])
    return data || []
  } catch (error) {
    console.error("Error fetching social links:", error)
    return FALLBACK_SOCIAL_LINKS
  }
}

// New functions for Alternance Section
export async function getAlternanceSearchCriteria(): Promise<AlternanceSearchCriterion[]> {
  const cacheKey = "alternance-search-criteria"
  const cached = getCachedData<AlternanceSearchCriterion[]>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for alternance search criteria")
    setCachedData(cacheKey, FALLBACK_ALTERNANCE_SEARCH_CRITERIA)
    return FALLBACK_ALTERNANCE_SEARCH_CRITERIA
  }

  try {
    const { data, error } = await supabase
      .from("alternance_search_criteria")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true })

    if (error) {
      console.error("Error fetching alternance search criteria:", error)
      return FALLBACK_ALTERNANCE_SEARCH_CRITERIA
    }

    setCachedData(cacheKey, data || [])
    return data || []
  } catch (error) {
    console.error("Error fetching alternance search criteria:", error)
    return FALLBACK_ALTERNANCE_SEARCH_CRITERIA
  }
}

export async function getAlternanceStrengths(): Promise<AlternanceStrength[]> {
  const cacheKey = "alternance-strengths"
  const cached = getCachedData<AlternanceStrength[]>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for alternance strengths")
    setCachedData(cacheKey, FALLBACK_ALTERNANCE_STRENGTHS)
    return FALLBACK_ALTERNANCE_STRENGTHS
  }

  try {
    const { data, error } = await supabase
      .from("alternance_strengths")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true })

    if (error) {
      console.error("Error fetching alternance strengths:", error)
      return FALLBACK_ALTERNANCE_STRENGTHS
    }

    setCachedData(cacheKey, data || [])
    return data || []
  } catch (error) {
    console.error("Error fetching alternance strengths:", error)
    return FALLBACK_ALTERNANCE_STRENGTHS
  }
}

export async function getHeroSettings(): Promise<HeroSettings> {
  const cacheKey = "hero-settings"
  const cached = getCachedData<HeroSettings>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for hero settings")
    setCachedData(cacheKey, FALLBACK_HERO_SETTINGS)
    return FALLBACK_HERO_SETTINGS
  }

  try {
    const { data: typingTextsData, error: typingTextsError } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "hero_typing_texts")
      .single()

    const { data: titleData, error: titleError } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "hero_title")
      .single()

    const { data: descriptionData, error: descriptionError } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "hero_description")
      .single()

    if (typingTextsError || titleError || descriptionError) {
      console.error("Error fetching hero settings:", typingTextsError || titleError || descriptionError)
      return FALLBACK_HERO_SETTINGS
    }

    const heroSettings: HeroSettings = {
      typing_texts: typingTextsData?.value || FALLBACK_HERO_SETTINGS.typing_texts,
      title: titleData?.value || FALLBACK_HERO_SETTINGS.title,
      description: descriptionData?.value || FALLBACK_HERO_SETTINGS.description,
    }

    setCachedData(cacheKey, heroSettings)
    return heroSettings
  } catch (error) {
    console.error("Error fetching hero settings:", error)
    return FALLBACK_HERO_SETTINGS
  }
}

export async function getContactSettings(): Promise<ContactSettings> {
  const cacheKey = "contact-settings"
  const cached = getCachedData<ContactSettings>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for contact settings")
    setCachedData(cacheKey, FALLBACK_CONTACT_SETTINGS)
    return FALLBACK_CONTACT_SETTINGS
  }

  try {
    const { data: emailData, error: emailError } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "contact_email")
      .single()

    const { data: availabilityDateData, error: availabilityDateError } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "availability_date")
      .single()

    const { data: locationData, error: locationError } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "location")
      .single()

    if (emailError || availabilityDateError || locationError) {
      console.error("Error fetching contact settings:", emailError || availabilityDateError || locationError)
      return FALLBACK_CONTACT_SETTINGS
    }

    const contactSettings: ContactSettings = {
      email: emailData?.value || FALLBACK_CONTACT_SETTINGS.email,
      availability_date: availabilityDateData?.value || FALLBACK_CONTACT_SETTINGS.availability_date,
      location: locationData?.value || FALLBACK_CONTACT_SETTINGS.location,
    }

    setCachedData(cacheKey, contactSettings)
    return contactSettings
  } catch (error) {
    console.error("Error fetching contact settings:", error)
    return FALLBACK_CONTACT_SETTINGS
  }
}

export async function getDevEngalereStats(): Promise<DevEngalereStats> {
  const cacheKey = "devengalere-stats"
  const cached = getCachedData<DevEngalereStats>(cacheKey)
  if (cached) return cached

  if (!isSupabaseConfigured() || !supabase) {
    console.log("Using fallback data for DevEnGalere stats")
    setCachedData(cacheKey, FALLBACK_DEVENGALERE_STATS)
    return FALLBACK_DEVENGALERE_STATS
  }

  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "devengalere_stats")
      .single()

    if (error) {
      console.error("Error fetching DevEnGalere stats:", error)
      return FALLBACK_DEVENGALERE_STATS
    }

    // Supabase returns the value as a JSONB object, so we cast it
    const stats = (data?.value || {}) as DevEngalereStats;

    setCachedData(cacheKey, stats)
    return stats
  } catch (error) {
    console.error("Error fetching DevEnGalere stats:", error)
    return FALLBACK_DEVENGALERE_STATS
  }
}


// Fonction pour vider le cache
export function clearCache(): void {
  cache.clear()
}

// Hook pour les données côté serveur
export async function getServerSideData() {
  const [
    skills,
    projects,
    timeline,
    testimonials,
    socialLinks,
    heroSettings,
    contactSettings,
    devEngalereStats,
    alternanceSearchCriteria, // Added
    alternanceStrengths, // Added
  ] = await Promise.all([
    getSkills(),
    getFeaturedProjects(),
    getTimelineItems(),
    getTestimonials(),
    getSocialLinks(),
    getHeroSettings(),
    getContactSettings(),
    getDevEngalereStats(),
    getAlternanceSearchCriteria(), // Added
    getAlternanceStrengths(), // Added
  ])

  return {
    skills,
    projects,
    timeline,
    testimonials,
    socialLinks,
    heroSettings,
    contactSettings,
    devEngalereStats,
    alternanceSearchCriteria, // Added
    alternanceStrengths, // Added
  }
}