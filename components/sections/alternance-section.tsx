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
  const searchCriteria = [
    {
      icon: Briefcase,
      label: "Poste",
      value: "Développeur Fullstack JS",
      color: "text-emerald-400",
    },
    {
      icon: Clock,
      label: "Rythme",
      value: "3 semaines entreprise / 1 semaine école",
      color: "text-blue-400",
    },
    {
      icon: Calendar,
      label: "Durée",
      value: "12 mois (Oct 2025 - Oct 2026)",
      color: "text-purple-400",
    },
    {
      icon: MapPin,
      label: "Lieu",
      value: "France • Remote friendly",
      color: "text-yellow-400",
    },
    {
      icon: GraduationCap,
      label: "Formation",
      value: "CDA RNCP 6 chez Simplon",
      color: "text-pink-400",
    },
  ];

  const strengths = [
    {
      icon: Star,
      label: "Autonomie",
      value: "Projets menés de A à Z",
      color: "text-emerald-400",
    },
    {
      icon: Rocket,
      label: "Créativité",
      value: "Solutions innovantes et éco-conçues",
      color: "text-blue-400",
    },
    {
      icon: "🔧",
      label: "Polyvalence",
      value: "Stack complète maîtrisée",
      color: "text-purple-400",
    },
    {
      icon: "🌱",
      label: "Éco-conception",
      value: "Développement durable et responsable",
      color: "text-green-400",
    },
    {
      icon: "😊",
      label: "Humain",
      value: "Esprit d'équipe et bonne humeur",
      color: "text-yellow-400",
    },
  ];

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
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={"https://calendar.app.google/exMCxhM4tLJycwBP7"}>
            {" "}
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0 group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Disponible dès octobre 2025
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Télécharger mon CV
          </Button>
        </div>

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
