import { motion } from "framer-motion";

import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useAlternanceSearchCriteria,
  useAlternanceStrengths,
} from "@/hooks/use-cms-data";
import Cta from "./ui/Cta";

export function AlternanceSection() {
  const {
    data: AlternanceSearchCriterion,
    loading: searchLoading,
    error: searchError,
  } = useAlternanceSearchCriteria();

  const {
    data: AlternanceStrength,
    loading: strengthLoading,
    error: strengthError,
  } = useAlternanceStrengths();

  return (
    <Section id="alternance">
      <SectionHeader
        title="Je cherche une Alternance !"
        highlight="Alternance"
        subtitle="Prêt à rejoindre votre équipe pour créer des solutions  ensemble"
      />

      <div className="grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
        {/* Ce que je recherche */}
        <AnimatedCard direction="left" className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center text-emerald-400">
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
        <AnimatedCard direction="right" className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-400">
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
      <Cta />
    </Section>
  );
}
