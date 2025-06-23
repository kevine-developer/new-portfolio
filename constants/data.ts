import type { Skill, Project, TimelineItem, SocialLink } from "@/types/"

export const SKILLS: Skill[] = [
  { name: "React", level: 95, color: "from-blue-400 to-blue-600", icon: "⚛️", category: "frontend" },
  { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600", icon: "▲", category: "frontend" },
  { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700", icon: "📘", category: "frontend" },
  { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-cyan-600", icon: "🎨", category: "frontend" },
  { name: "PHP/Laravel", level: 80, color: "from-red-400 to-red-600", icon: "🔧", category: "backend" },
  { name: "Node.js", level: 75, color: "from-green-400 to-green-600", icon: "🟢", category: "backend" },
  { name: "Supabase", level: 85, color: "from-emerald-400 to-emerald-600", icon: "🗄️", category: "backend" },
  { name: "React Native", level: 75, color: "from-purple-400 to-purple-600", icon: "📱", category: "mobile" },
  { name: "UX/UI Design", level: 80, color: "from-pink-400 to-pink-600", icon: "✨", category: "tools" },
  { name: "Éco-conception", level: 90, color: "from-green-500 to-emerald-500", icon: "🌱", category: "tools" },
  { name: "Accessibilité", level: 85, color: "from-indigo-400 to-indigo-600", icon: "♿", category: "tools" },
  { name: "Git/GitHub", level: 85, color: "from-gray-500 to-gray-700", icon: "🔀", category: "tools" },
]

export const PROJECTS: Project[] = [
  {
    id: "easytri",
    title: "Easytri",
    description: "Application mobile de tri sélectif avec IA",
    long_description:
      "Application mobile complète développée en React Native avec reconnaissance d'objets par IA, géolocalisation des points de collecte, et système de gamification pour encourager le tri sélectif. Intégration d'une base de données Supabase et d'APIs de géolocalisation.",
    tech: ["React Native", "Supabase", "TensorFlow.js", "Expo", "TypeScript"],
    type: "Production",
    status: "🚀 En production",
    image: "/defaultImageProject.webp?height=300&width=400",
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/kevine/easytri",
    demo: "https://easytri.app",
    metrics: "5k+ utilisateurs actifs",
    featured: true,
  },
  {
    id: "telolabz",
    title: "TeloLabz - Missions Freelance",
    description: "Développement d'applications sur mesure",
    long_description:
      "Série de projets freelance incluant des sites e-commerce, applications web, et APIs. Développement fullstack avec Laravel/PHP côté backend et React/Next.js côté frontend. Gestion complète des projets de la conception à la livraison.",
    tech: ["Next.js", "Laravel", "MySQL", "Stripe", "Tailwind CSS"],
    type: "Freelance",
    status: "💼 15+ projets livrés",
    image: "/defaultImageProject.webp?height=300&width=400",
    color: "from-purple-500 to-indigo-600",
    github: "https://github.com/kevine/telolabz-projects",
    demo: "https://telolabz.com",
    metrics: "15+ clients satisfaits",
    featured: true,
  },
  {
    id: "devengalere",
    title: "DevEnGalère",
    description: "Contenu tech humoristique sur les réseaux",
    long_description:
      "Création de contenu éducatif et humoristique sur le développement web via TikTok et Instagram. Vulgarisation de concepts techniques complexes avec une approche décalée. Communauté engagée de développeurs francophones.",
    tech: ["Next.js", "MDX", "Vercel", "Figma", "Premiere Pro"],
    type: "Personnel",
    status: "🔥 10k+ followers",
    image: "/defaultImageProject.webp?height=300&width=400",
    color: "from-yellow-500 to-orange-600",
    github: "https://github.com/kevine/devengalere",
    demo: "https://devengalere.fr",
    metrics: "10k+ followers, 500k+ vues",
    featured: true,
  },
]

export const TIMELINE: TimelineItem[] = [
  {
    id: "cda-simplon-2025",
    date: "Oct 2025 - Oct 2026",
    title: "Concepteur Développeur d'Applications",
    company: "Simplon",
    description: "Formation RNCP 6 en alternance - Spécialisation développement fullstack JavaScript",
    type: "formation",
    status: "🎯 En cours",
    icon: "🎓",
  },
  {
    id: "openclassrooms-2024",
    date: "2024",
    title: "Développeur Web - RNCP 5",
    company: "OpenClassrooms",
    description: "Formation certifiante validée avec mention. Projets React, Node.js, et bases de données.",
    type: "formation",
    status: "✅ Validé avec mention",
    icon: "📚",
  },
  {
    id: "freelance-telolabz-2024",
    date: "2024",
    title: "Développeur Freelance",
    company: "TeloLabz & Clients divers",
    description: "Développement d'applications web et mobile sur mesure. Gestion de projets en autonomie complète.",
    type: "experience",
    status: "💼 15+ projets réalisés",
    icon: "💻",
  },
  {
    id: "easytri-2024",
    date: "2024",
    title: "Lead Developer",
    company: "Easytri (Projet pro)",
    description: "Conception et développement complet d'une app mobile de tri sélectif avec IA.",
    type: "experience",
    status: "🚀 5k+ utilisateurs",
    icon: "📱",
  },
  {
    id: "devengalere-2023",
    date: "2023 - Présent",
    title: "Créateur de Contenu Tech",
    company: "DevEnGalère",
    description: "Création de contenu éducatif et humoristique sur le développement web.",
    type: "projet",
    status: "🔥 10k+ followers",
    icon: "🎬",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/kevine", icon: "Github", color: "hover:text-gray-400" },
  { name: "LinkedIn", url: "https://linkedin.com/in/kevine-dev", icon: "Linkedin", color: "hover:text-blue-400" },
  { name: "TikTok", url: "https://tiktok.com/@devengalere", icon: "Music", color: "hover:text-pink-400" },
  { name: "Instagram", url: "https://instagram.com/devengalere", icon: "Instagram", color: "hover:text-purple-400" },
  { name: "Email", url: "mailto:kevine.dev@gmail.com", icon: "Mail", color: "hover:text-emerald-400" },
]

export const TYPING_TEXTS = [
  "Développeur Fullstack JS",
  "Créateur DevEnGalère",
  "Étudiant CDA chez Simplon",
  "Passionné d'éco-conception",
  "Prêt pour l'alternance",
]

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Martin",
    role: "Formatrice OpenClassrooms",
    company: "OpenClassrooms",
    content:
      "Kevine a montré une progression remarquable et une capacité d'autonomie exceptionnelle. Ses projets témoignent d'une vraie compréhension des enjeux techniques et UX.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "2",
    name: "Thomas Dubois",
    role: "CTO",
    company: "TeloLabz",
    content:
      "Collaboration parfaite sur nos projets. Kevine livre toujours dans les temps avec un code propre et bien documenté. Son approche éco-responsable est un vrai plus.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "3",
    name: "Marie Leroy",
    role: "Product Owner",
    company: "Easytri",
    content:
      "Kevine a su transformer notre vision en une app fonctionnelle et intuitive. Son expertise technique et sa créativité ont été déterminantes pour le succès du projet.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]
