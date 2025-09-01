"use client";

import { motion } from "framer-motion";
import { useState } from "react"; 
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CardContent } from "@/components/ui/card";
import { useSkills } from "@/hooks/use-cms-data";
import type { Skill } from "@/types/cms";
import Image from "next/image";
import { cn } from "@/lib/utils"; 
const defaultImageIcon =
  "https://res.cloudinary.com/dhe585mze/image/upload/v1753542723/Photoroom-20250726_170936555_owiyd3.png";
interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <AnimatedCard delay={index * 0.1}>
      <CardContent className="relative p-1 group overflow-hidden border-none">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 border-none bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated Border Glow */}
        <div className="absolute inset-0 border-none bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm -z-10" />

        {/* Content Container */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Icon Container with Modern Effects */}
            {skill.icon && (
              <div className="relative group/icon">
                {/* Icon Wrapper */}
                <div className="relative bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-slate-600/50 group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={skill.icon || defaultImageIcon}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="w-4 h-4 sm:w-5 sm:h-5 filter drop-shadow-lg"
                  />
                </div>
              </div>
            )}
            {/* Skill Name with Modern Typography */}

            <h3 className="font-bold text-white text-xs md:text-md  truncate tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
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
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "frontend" | "backend" | "mobile" | "tools"
  >("all"); 

  const categories = [
    { value: "all", label: "Toutes" },
    { value: "frontend", label: "Front-end" },
    { value: "backend", label: "Back-end" },
    { value: "mobile", label: "Mobile" },
    { value: "tools", label: "Outils" },
  ];

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

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory); 

  return (
    <Section id="competences" containerSize="lg">
      <SectionHeader
        title="Stack Technique"
        highlight="Technique"
        subtitle="Technologies modernes pour des solutions durables et performantes"
      />
      
      
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <motion.button
            key={category.value}
            onClick={() => setSelectedCategory(category.value as any)}
            className={cn(
              "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer",
              selectedCategory === category.value
                ? "bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700/50 hover:text-white"
            )}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

     {loading ? (
  <SkillsLoading />
) : filteredSkills.length === 0 ? (
  <div className="text-center text-slate-400 py-10">
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-sm sm:text-base"
    >
       Aucune compétence trouvée dans cette catégorie pour le moment.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="text-xs sm:text-sm mt-2 text-slate-500"
    >
      Revenez bientôt, j'explore de nouvelles compétences!
    </motion.p>
  </div>
) : (
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
    {filteredSkills.map((skill, index) => (
      <SkillCard key={skill.id} skill={skill} index={index} />
    ))}
  </div>
)}

    </Section>
  );
}