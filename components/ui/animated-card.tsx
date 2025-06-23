"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
  direction?: "up" | "down" | "left" | "right"
}

const directionVariants = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
}

export function AnimatedCard({ children, className, delay = 0, hover = true, direction = "up" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionVariants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className="group w-full"
    >
      <Card
        className={cn(
          "bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm",
          className,
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}
