"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CardContent } from "@/components/ui/card";
import { useSkills } from "@/hooks/use-cms-data";
import type { Skill } from "@/types/cms";
import Image from "next/image";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <AnimatedCard delay={index * 0.1}>
      <CardContent className="p-2 sm:p-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {skill.icon && (
              <Image
                src={skill.icon} 
                alt={skill.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            )}

            <h3 className="font-semibold text-white text-sm sm:text-base truncate">
              {skill.name}
            </h3>
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
          <div className="bg-slate-800 rounded-lg p-4 sm:p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-slate-700 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-slate-700 rounded mb-2"></div>
                <div className="h-3 bg-slate-700 rounded w-1/2"></div>
              </div>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded"></div>
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
