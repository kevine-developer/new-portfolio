"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CardContent } from "@/components/ui/card";
import { useSkills } from "@/hooks/use-cms-data";
import type { Skill } from "@/types/cms";
import Image from "next/image";
const defaultImageIcon =
  "https://res.cloudinary.com/dhe585mze/image/upload/v1753542723/Photoroom-20250726_170936555_owiyd3.png";
interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <AnimatedCard delay={index * 0.1}>
      <CardContent className="relative p-2 group overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm -z-10" />

        {/* Content Container */}
        <div className="relative z-10">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Icon Container with Modern Effects */}
              {skill.icon && (
                <div className="relative group/icon">
                  {/* Icon Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-md group-hover/icon:blur-lg transition-all duration-300" />

                  {/* Icon Wrapper */}
                  <div className="relative bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-slate-600/50 group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src={skill.icon || defaultImageIcon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 sm:w-7 sm:h-7 filter drop-shadow-lg"
                    />
                  </div>
                </div>
              )}
              {/* Skill Name with Modern Typography */}
              <div className="space-y-1">
                <h3 className="font-bold text-white text-md  truncate tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </AnimatedCard>
  );
}

function SkillsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-slate-800 rounded-lg p-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-slate-700 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-slate-700 rounded mb-2"></div>
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SkillsSection() {
  const { data: skills, loading, error } = useSkills();

  if (error) {
    return (
      <Section id="competences" containerSize="lg">
        <SectionHeader
          title="Stack Technique"
          highlight="Technique"
          subtitle="Une erreur est survenue lors du chargement des compétences"
        />
        <div className="text-center text-slate-400">
          <p>
            Impossible de charger les compétences. Veuillez réessayer plus tard.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="competences" containerSize="lg">
      <SectionHeader
        title="Stack Technique"
        highlight="Technique"
        subtitle="Technologies modernes pour des solutions durables et performantes"
      />

      {loading ? (
        <SkillsLoading />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      )}
    </Section>
  );
}
