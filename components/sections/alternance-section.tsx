"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Download,
  Rocket,
  Star,
  MapPin,
  Clock,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useAlternanceSearchCriteria, useAlternanceStrengths } from "@/hooks/use-cms-data";


export function AlternanceSection() {

  const {data:AlternanceSearchCriterion, loading:searchLoading, error:searchError } = useAlternanceSearchCriteria()
  
 const {data:AlternanceStrength, loading:strengthLoading, error:strengthError } = useAlternanceStrengths()

  return (
    <Section id="alternance">
      <SectionHeader
        title="Je cherche une Alternance ! 🎯"
        highlight="Alternance"
        subtitle="Prêt à rejoindre votre équipe pour créer des solutions innovantes ensemble"
      />

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Ce que je recherche */}
        <AnimatedCard direction="left">
          <CardHeader>
            <CardTitle className="flex items-center text-emerald-400">
              <Rocket className="w-5 h-5 mr-2" />
              Ce que je recherche
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {AlternanceSearchCriterion.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div
                    className={`w-2 h-2 ${item.color.replace(
                      "text-",
                      "bg-"
                    )} rounded-full mt-2 flex-shrink-0`}
                  />
                  <div className="min-w-0">
                    <span className="text-white font-medium text-sm sm:text-base">
                      {item.label} :
                    </span>
                    <span className="text-slate-300 ml-2 text-sm sm:text-base">
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Ce que j'apporte */}
        <AnimatedCard direction="right">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-400">
              <Star className="w-5 h-5 mr-2" />
              Ce que j'apporte
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {AlternanceStrength.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div
                    className={`w-2 h-2 ${item.color.replace(
                      "text-",
                      "bg-"
                    )} rounded-full mt-2 flex-shrink-0`}
                  />
                  <div className="min-w-0">
                    <span className="text-white font-medium text-sm sm:text-base">
                      {item.label} :
                    </span>
                    <span className="text-slate-300 ml-2 text-sm sm:text-base">
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </AnimatedCard>
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4">
            Discutons ensemble ? Je vous réponds sous{" "}
            <span className="text-emerald-400 font-bold">24h</span>, parole de
            Dev ! 🤝
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-slate-400">
            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-400"
            >
              Motivé
            </Badge>
            <Badge
              variant="outline"
              className="border-blue-500/30 text-blue-400"
            >
              Autonome
            </Badge>
            <Badge
              variant="outline"
              className="border-purple-500/30 text-purple-400"
            >
              Créatif
            </Badge>
            <Badge
              variant="outline"
              className="border-yellow-500/30 text-yellow-400"
            >
              Éco-responsable
            </Badge>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
