import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { Container } from "./container"

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  padding?: "sm" | "md" | "lg" | "xl"
  id?: string
}

const paddingSizes = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20",
  xl: "py-20 sm:py-24",
}

export function Section({ children, className, containerSize = "xl", padding = "lg", id }: SectionProps) {
  return (
    <section id={id} className={cn(paddingSizes[padding], className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}
