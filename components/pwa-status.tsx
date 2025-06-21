"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Wifi, WifiOff, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { usePWA } from "@/hooks/use-pwa"

export default function PWAStatus() {
  const { isInstalled, isOnline, updateAvailable, updateApp } = usePWA()

  return (
    <div className="fixed top-20 right-4 z-40 space-y-2">
      {/* Statut d'installation */}
      <AnimatePresence>
        {isInstalled && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}>
            <Badge
              variant="secondary"
              className="flex items-center space-x-1 bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
            >
              <Download className="w-3 h-3" />
              <span>App installée</span>
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mise à jour disponible */}
      <AnimatePresence>
        {updateAvailable && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}>
            <Button size="sm" onClick={updateApp} className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
              <RefreshCw className="w-3 h-3 mr-1" />
              Mettre à jour
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Indicateur en ligne */}
      <motion.div animate={{ opacity: isOnline ? 1 : 0.3 }} className="flex items-center justify-end">
        <div className="flex items-center space-x-1 text-xs text-slate-400">
         {isOnline ?  <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
          <span>{isOnline ? "En ligne" : "Hors ligne"}</span>
        </div>
      </motion.div>
    </div>
  )
}
