"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import type { TimelineItem } from "@/types"
import { useTimelineItems } from "@/hooks/use-cms-data"

interface TimelineItemProps {
  item: TimelineItem
  index: number
}

function TimelineItemComponent({ item, index }: TimelineItemProps) {

  const typeColors = {
    formation: "text-blue-400 border-blue-400/30",
    experience: "text-emerald-400 border-emerald-400/30",
    projet: "text-purple-400 border-purple-400/30",
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative flex items-start space-x-4 sm:space-x-6"
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center relative z-10">
        <span className="text-xl sm:text-2xl">{item.icon}</span>
      </div>

      {/* Content */}
      <AnimatedCard delay={index * 0.1} className="flex-1">
        <CardContent className="p-4 md:p-6 md:w-[40em]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 space-y-2 sm:space-y-0">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-emerald-400 font-medium text-sm sm:text-base">{item.company}</p>
            </div>
            <div className="flex flex-col sm:items-end space-y-2">
              <Badge variant="outline" className={`${typeColors[item.type]} text-xs sm:text-sm w-fit`}>
                {item.date}
              </Badge>
            </div>
          </div>

          <p className="text-slate-300 mb-3 text-sm sm:text-base leading-relaxed">{item.description}</p>

          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
              {item.status}
            </Badge>
            <Badge variant="outline" className={`${typeColors[item.type]} text-xs`}>
              {item.type}
            </Badge>
          </div>
        </CardContent>
      </AnimatedCard>
    </motion.div>
  )
}
function TimelineLoading() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {Array.from({ length: 3 }).map((_, index) => ( // Adjust length based on how many loading skeletons you want to show
        <div key={index} className="relative flex items-start space-x-4 sm:space-x-6 animate-pulse">
          {/* Timeline dot skeleton */}
          <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-slate-800 rounded-full"></div>

          {/* Content skeleton */}
          <div className="flex-1 bg-slate-800 rounded-lg p-4 md:p-6 md:w-[40em]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 space-y-2 sm:space-y-0">
              <div className="flex-1">
                <div className="h-6 bg-slate-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2"></div>
              </div>
              <div className="flex flex-col sm:items-end space-y-2">
                <div className="h-5 bg-slate-700 rounded w-20"></div>
              </div>
            </div>
            <div className="h-4 bg-slate-700 rounded mb-3 w-full"></div>
            <div className="h-4 bg-slate-700 rounded w-5/6"></div>

            <div className="flex items-center justify-between mt-4">
              <div className="h-5 bg-slate-700 rounded w-24"></div>
              <div className="h-5 bg-slate-700 rounded w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function TimelineSection() {
  const { data: timelineItems, loading, error } = useTimelineItems()

  if (error) {
    return (
      <Section id="parcours" containerSize="lg">
        <SectionHeader
          title="Mon Parcours"
          highlight="Parcours"
          subtitle="De la formation aux projets concrets, voici mon évolution"
        />
        <div className="text-red-500 text-center">Une erreur s'est produite lors du chargement de votre parcours. Veuillez réessayer plus tard.</div>
      </Section>
    )
  }

  return (
    <Section id="parcours" containerSize="lg">
      <SectionHeader
        title="Mon Parcours"
        highlight="Parcours"
        subtitle="De la formation aux projets concrets, voici mon évolution"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500" />

        {loading ? (
          <TimelineLoading />
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {timelineItems.map((item, index) => (
              <TimelineItemComponent key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}