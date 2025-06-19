"use client"

import { useState, useEffect } from "react"

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

  useEffect(() => {
    // Vérifier si l'app est installée
    const checkInstalled = () => {
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches
      const isInWebApp = (window.navigator as any).standalone === true
      setIsInstalled(isStandalone || isInWebApp)
    }

    // Vérifier le statut en ligne
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    // Gérer l'événement d'installation
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setCanInstall(true)

      const promptInstall = async () => {
        const beforeInstallPromptEvent = e as any
        try {
          await beforeInstallPromptEvent.prompt()
          const { outcome } = await beforeInstallPromptEvent.userChoice

          if (outcome === "accepted") {
            setCanInstall(false)
          }
        } catch (error) {
          console.warn("Install prompt failed:", error)
        }
      }

      setInstallPrompt(() => promptInstall)
    }

    // Gérer l'installation réussie
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setCanInstall(false)
      setInstallPrompt(null)
    }

    // Enregistrer le Service Worker avec gestion d'erreur améliorée
    const registerSW = async () => {
      if ("serviceWorker" in navigator && typeof window !== "undefined") {
        try {
          // Vérifier d'abord si on est en production ou si le SW existe
          const isProduction = process.env.NODE_ENV === "production"

          if (!isProduction) {
            console.log("Service Worker registration skipped in development")
            return
          }

          // Essayer de récupérer le fichier SW pour vérifier qu'il existe
          const swResponse = await fetch("/sw.js", {
            method: "HEAD",
            cache: "no-cache",
          })

          if (!swResponse.ok) {
            console.warn("Service Worker file not found, skipping registration")
            return
          }

          const reg = await navigator.serviceWorker.register("/sw.js", {
            scope: "/",
            updateViaCache: "none",
          })

          setRegistration(reg)

          // Vérifier les mises à jour
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

          console.log("Service Worker registered successfully")
        } catch (error) {
          console.warn("Service Worker registration failed:", error)
          // Ne pas bloquer l'application si le SW échoue
        }
      }
    }

    checkInstalled()
    updateOnlineStatus()

    // Délai pour éviter les erreurs de timing
    setTimeout(() => {
      registerSW()
    }, 1000)

    // Event listeners
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)
    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])

  const updateApp = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" })
      window.location.reload()
    }
  }

  return {
    isInstalled,
    isOnline,
    canInstall,
    installPrompt,
    updateAvailable,
    updateApp,
  }
}
