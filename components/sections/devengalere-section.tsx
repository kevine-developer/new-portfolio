"use client"

import { motion } from "framer-motion"
import { Play, Users } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function DevEngalereSection() {
 
  return (
    <Section className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
          <CardContent className="relative p-6 sm:p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 ">
                  <div className="text-3xl sm:text-4xl">😅</div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">DevEnGalère</h3>
                    <p className="text-yellow-400 font-medium text-sm sm:text-base">
                      Le code, c'est sérieux... mais pas trop !
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Créateur de contenu tech humoristique qui rassemble{" "}
                  <span className="text-yellow-400 font-semibold">plusieurs développeurs</span> sur TikTok et Instagram. Je
                  vulgarise les concepts techniques avec humour, parce qu'un dev qui sait rire de ses bugs, c'est un dev
                  qui sait les résoudre ! 🐛✨
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-800">
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">80+</div>
                    <div className="text-xs sm:text-sm text-slate-400">Followers</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-800">
                    <div className="text-xl sm:text-2xl font-bold text-orange-400">5k+</div>
                    <div className="text-xs sm:text-sm text-slate-400">Vues</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-800 col-span-2 sm:col-span-1">
                    <div className="text-xl sm:text-2xl font-bold text-pink-400">20+</div>
                    <div className="text-xs sm:text-sm text-slate-400">Vidéos</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="outline"
                    className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 group"
                    asChild
                  >
                    <a href="https://tiktok.com/@dev_en_galere" target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Voir mes vidéos
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 group"
                    asChild
                  >
                    <a href="https://instagram.com/dev_en_galere" target="_blank" rel="noopener noreferrer">
                      <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Rejoindre la communauté
                    </a>
                  </Button>
                </div>
              </div>

              {/* Code mockup */}
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 sm:p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-slate-400 text-xs sm:text-sm ml-2">devengalere.js</span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm space-y-2">
                    <div className="text-slate-300">
                      <span className="text-purple-400">function</span> <span className="text-blue-400">debugCode</span>
                      () {"{"}
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">console.log</span>(
                      <span className="text-yellow-400">"Ça marche pas... 🤔"</span>);
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">console.log</span>(
                      <span className="text-yellow-400">"Ah si ça marche ! 🎉"</span>);
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-red-400">// Mais pourquoi ??</span>
                    </div>
                    <div className="text-slate-300">{"}"}</div>
                  </div>
                </motion.div>

               
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  )
}
