"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Calendar, Send, Github, Linkedin, Music, Instagram } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import type { ContactForm } from "@/types"
import { useSocialLinks } from "@/hooks/use-cms-data"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yvesnarsonkevine@gmail.com",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "France • Remote OK",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
  },
  {
    icon: Calendar,
    label: "Disponibilité",
    value: "Octobre 2025",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
  },
]

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Music,
  Instagram,
  Mail,
};


export function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { data: socialLinks, loading, error } = useSocialLinks();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

  
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    alert("Message envoyé ! Je vous réponds sous 24h 🚀")
  }

  return (
    <Section id="contact">
      <SectionHeader
        title="Racontez-moi votre Projet"
        highlight="Projet"
        subtitle="Une idée ? Un besoin ? Une alternance ? Je suis tout ouïe ! 👂"
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <AnimatedCard direction="left">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-lg sm:text-xl">Informations de contact</CardTitle>
            <CardDescription className="text-slate-400 text-sm sm:text-base">
              Plusieurs moyens de me joindre rapidement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${info.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${info.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-medium text-sm sm:text-base">{info.label}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 sm:pt-6 border-t border-slate-800">
              <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">Retrouvez-moi aussi sur :</p>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon];
              return (
                <div key={social.name} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white group w-full justify-center ${social.color}`}
                      asChild
                    >
                      <Link href={social.url} target="_blank" rel="noopener noreferrer" className="text-2xl">
                        {Icon && <Icon className="w-4 h-4  group-hover:rotate-12 transition-transform" />}
                        {social.name}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              );
            })}
          </div>
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Contact Form */}
        <AnimatedCard direction="right">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-lg sm:text-xl">Envoyez-moi un message</CardTitle>
            <CardDescription className="text-slate-400 text-sm sm:text-base">
              Je vous réponds rapidement, promis ! ⚡
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-300">
                    Nom *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-emerald-500 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-300">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-emerald-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs sm:text-sm font-medium text-slate-300">
                  Sujet *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Alternance, projet, collaboration..."
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-emerald-500 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-300">
                  Racontez-moi votre projet *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Décrivez votre besoin, votre idée, ou simplement dites bonjour ! 👋"
                  rows={4}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-emerald-500 resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                disabled
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0 group py-3 disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </CardContent>
        </AnimatedCard>
      </div>
    </Section>
  )
}
