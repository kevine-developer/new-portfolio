"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Database, CheckCircle, X, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { isSupabaseConfigured } from "@/lib/supabase"

export function CMSStatus() {
  if (process.env.NODE_ENV === "production") return null // ⛔️ Ne rien afficher en prod

  const [isConfigured, setIsConfigured] = useState(false)
  const [showStatus, setShowStatus] = useState(true)

  useEffect(() => {
    const configured = isSupabaseConfigured()
    setIsConfigured(configured)
  }, [])

  if (!showStatus) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-20 left-4 right-4 z-40 max-w-md mx-auto"
      >
        <div
          className={`${
            isConfigured ? "bg-green-500/10 border-green-500/30" : "bg-blue-500/10 border-blue-500/30"
          } rounded-lg p-3 backdrop-blur-sm`}
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              {isConfigured ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <Database className="w-5 h-5 text-blue-400" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <Settings className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white">
                  {isConfigured ? "CMS Connecté" : "Mode Démo"}
                </span>
              </div>

              <p className="text-xs text-slate-300">
                {isConfigured
                  ? "Données chargées depuis Supabase CMS"
                  : "Portfolio fonctionnel avec données intégrées. Configurez Supabase pour le CMS dynamique."}
              </p>

              <div className="mt-2 flex items-center space-x-2">
                <Badge
                  variant="outline"
                  className={`${
                    isConfigured ? "border-green-500/30 text-green-400" : "border-blue-500/30 text-blue-400"
                  } text-xs`}
                >
                  {isConfigured ? "Dynamique" : "Statique"}
                </Badge>
                {!isConfigured && (
                  <Badge variant="outline" className="border-slate-500/30 text-slate-400 text-xs">
                    Prêt à l'emploi
                  </Badge>
                )}
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowStatus(false)}
              className="flex-shrink-0 text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
