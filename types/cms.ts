// Types pour le CMS avec fallback sur les types originaux
export interface Skill {
  id: string
  name: string
  level: number
  color: string
  icon: string
  category: "frontend" | "backend" | "mobile" | "tools"
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  long_description: string
  tech: string[]
  type: "Production" | "Freelance" | "Personnel"
  status: string
  image_url: string | null
  color: string
  github_url: string | null
  demo_url: string | null
  metrics: string | null
  is_featured: boolean
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
  // Propriétés compatibles avec l'ancien format
  image: string
  github: string
  demo: string
  featured: boolean
}

export interface TimelineItem {
  id: string
  date_range: string
  title: string
  company: string
  description: string
  type: "formation" | "experience" | "projet"
  status: string
  icon: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
  // Propriété compatible avec l'ancien format
  date: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar_url: string | null
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
  // Propriété compatible avec l'ancien format
  avatar: string
}

export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
  color: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

// Nouvelle interface pour les critères de recherche d'alternance
export interface AlternanceSearchCriterion {
  id: string
  icon: string
  label: string
  value: string
  color: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

// Nouvelle interface pour les forces/atouts de l'alternant
export interface AlternanceStrength {
  id: string
  icon: string
  label: string
  value: string
  color: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

// Types pour les paramètres du site
export interface HeroSettings {
  typing_texts: string[]
  title: string
  description: string
}

export interface ContactSettings {
  email: string
  availability_date: string
  location: string
}

export interface DevEngalereStats {
  followers: string
  views: string
  videos: string
}