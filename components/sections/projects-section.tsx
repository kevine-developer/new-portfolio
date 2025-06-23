"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Users, LucideArrowRightCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { useProjects } from "@/hooks/use-cms-data"
import { Project } from "@/types/cms"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center"
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.02, rotateY: 2 }}
        className={`relative ${isEven ? "lg:order-first" : "lg:order-last"} order-first`}
      >
        <div className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl group">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`}
          />
          <Image
            src={project.image || "/defaultImageProject.webp"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform group-hover:scale-105"
        
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

          {/* Overlay info */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">{project.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300">{project.description}</p>
              </div>
              <div className="flex space-x-1 sm:space-x-2 flex-shrink-0">
                {project.github && (
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-1 sm:p-2" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-1 sm:p-2" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className={`space-y-4 sm:space-y-6 ${isEven ? "lg:order-last" : "lg:order-first"} order-last`}>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-baseline sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
             <Badge
              variant="outline"
              className={`border-slate-700 bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-semibold w-fit`}
            >
              {project.type}
            </Badge>
            <span className="text-xs sm:text-sm text-slate-400">{project.status}</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3">{project.long_description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex items-center space-x-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{project.metrics}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">

              <Button
                size="sm"
                className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0 group w-full sm:w-auto`}
                asChild
              >
                <Link href={project.demo} target="_blank" className="mr-2 ">
                Détails
                  <LucideArrowRightCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const {data: Project , loading, error} = useProjects()
  return (
    <Section id="projets">
      <SectionHeader
        title="Projets Marquants"
        highlight="Marquants"
        subtitle="Du concept à la production, voici mes réalisations les plus impactantes"
      />

      <div className="space-y-12 sm:space-y-16 lg:space-y-20">
        {Project.filter((p) => p.featured).map((projects, index) => (
          <ProjectCard key={projects.id} project={projects} index={index} />
        ))}
      </div>
    </Section>
  )
}
