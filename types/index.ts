export interface Skill {
  name: string
  level: number
  color: string
  icon: string
  category: "frontend" | "backend" | "mobile" | "tools"
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  type: "Production" | "Freelance" | "Personnel"
  status: string
  image: string
  color: string
  github: string
  demo: string
  metrics: string
  featured?: boolean
}

export interface TimelineItem {
  id: string
  date: string
  title: string
  company: string
  description: string
  type: "formation" | "experience" | "projet"
  status: string
  icon: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
}
