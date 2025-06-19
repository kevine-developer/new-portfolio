"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  highlight?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, highlight, className, centered = true }: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("mb-8 sm:mb-12 lg:mb-16", centered && "text-center", className)}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-emerald-400">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
