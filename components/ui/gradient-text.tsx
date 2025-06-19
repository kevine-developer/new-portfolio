import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export function GradientText({
  children,
  className,
  gradient = "from-emerald-400 via-cyan-400 to-green-400 ",
}: GradientTextProps) {
  return <span className={cn(`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`, className)}>{children}</span>
}
