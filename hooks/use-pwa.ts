"use client"

import { useState, useEffect, useCallback } from "react"

interface PWAHook {
  isInstalled: boolean
  isOnline: boolean
  canInstall: boolean
  installPrompt: (() => Promise<void>) | null
  updateAvailable: boolean
  updateApp: () => void
}

export function usePWA(): PWAHook {
  const [isInstalled, setIsInstalled] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [canInstall, setCanInstall] = useState(false)
  const [installPrompt, setInstallPrompt] = useState<(() => Promise<void>) | null>(null)
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  // Mise à jour du statut en ligne
  const updateOnlineStatus = useCallback(() => {
    setIsOnline(navigator.onLine)
  }, [])

  // Détection de l'installation de l'application
  const checkInstalled = useCallback(() => {
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches
    const isIOSStandalone = (window.navigator as any).standalone === true
    setIsInstalled(isStandalone || isIOSStandalone)
  }, [])

  // Gestion de l'invitation à l'installation
  const handleBeforeInstallPrompt = useCallback((e: Event) => {
    e.preventDefault()
    setCanInstall(true)

    const event = e as any
    const promptInstall = async () => {
      try {
        await event.prompt()
        const { outcome } = await event.userChoice
        if (outcome === "accepted") {
          setCanInstall(false)
        }
      } catch (error) {
        console.warn("Prompt d'installation échoué :", error)
      }
    }

    setInstallPrompt(() => promptInstall)
  }, [])

  // Gestion de l'événement d'installation réussie
  const handleAppInstalled = useCallback(() => {
    setIsInstalled(true)
    setCanInstall(false)
    setInstallPrompt(null)
  }, [])

  // Enregistrement du Service Worker
  const registerSW = useCallback(async () => {
    if ("serviceWorker" in navigator && typeof window !== "undefined") {
      const isProduction = process.env.NODE_ENV === "production"

      if (!isProduction) {
        console.log("SW ignoré en développement")
        return
      }

      try {
        const swResponse = await fetch("/sw.js", {
          method: "HEAD",
          cache: "no-cache",
        })

        if (!swResponse.ok) {
          console.warn("Fichier SW introuvable, enregistrement ignoré")
          return
        }

        const reg = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        })

        setRegistration(reg)

        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
              }
            })
          }
        })

        console.log("Service Worker enregistré avec succès")
      } catch (error) {
        console.warn("Échec de l'enregistrement du SW :", error)
      }
    }
  }, [])

  // Fonction pour forcer la mise à jour
  const updateApp = useCallback(() => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" })
      window.location.reload()
    }
  }, [registration])

  // Initialisation du hook
  useEffect(() => {
    checkInstalled()
    updateOnlineStatus()

    const timeout = setTimeout(() => {
      registerSW()
    }, 1000)

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)
    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [checkInstalled, updateOnlineStatus, handleBeforeInstallPrompt, handleAppInstalled, registerSW])

  return {
    isInstalled,
    isOnline,
    canInstall,
    installPrompt,
    updateAvailable,
    updateApp,
  }
}
