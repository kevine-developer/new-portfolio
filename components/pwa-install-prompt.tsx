"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  readonly outcome: "accepted" | "dismissed";
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
  prompt(): Promise<void>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Détecter si l'appareil est iOS (iPhone, iPad, iPod)
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);

    // Vérifier si l'application est déjà installée en mode autonome
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;

    if (isStandalone || isInWebAppiOS) {
      setIsInstalled(true);
      return; // Sortir si déjà installé
    }

    // Gérer l'événement 'beforeinstallprompt' pour intercepter l'invitation d'installation
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Afficher l'invite seulement si elle n'a pas été ignorée pendant cette session
      if (!sessionStorage.getItem("pwa-prompt-dismissed")) {
        setTimeout(() => {
          setShowPrompt(true);
        }, 3000); // Délai de 3 secondes avant d'afficher l'invite
      }
    };

    // Gérer l'événement 'appinstalled' lorsque l'application est installée avec succès
    const handleAppInstalled = () => {
      console.log("PWA a été installée");
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
      sessionStorage.removeItem("pwa-prompt-dismissed"); // Nettoyer le drapeau de renvoi si installé
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Nettoyage : retirer les écouteurs d'événements
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []); // Le tableau vide assure que cet effet ne s'exécute qu'une fois au montage

  // Gérer le clic sur le bouton d'installation pour les navigateurs non-iOS
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        console.log("L'utilisateur a accepté l'installation");
      } else {
        console.log("L'utilisateur a refusé l'installation");
      }

      setDeferredPrompt(null);
      setShowPrompt(false);
    } catch (error) {
      console.error("Erreur lors de l'installation :", error);
    }
  };

  // Gérer le renvoi de l'invite (fermeture)
  const handleDismiss = () => {
    setShowPrompt(false);
    // Ne pas afficher à nouveau pendant cette session
    sessionStorage.setItem("pwa-prompt-dismissed", "true");
  };

  // Ne pas afficher si déjà installé ou si déjà refusé pendant cette session
  if (
    isInstalled ||
    (typeof window !== "undefined" &&
      sessionStorage.getItem("pwa-prompt-dismissed"))
  ) {
    return null;
  }

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm"
        >
          <Card className="bg-slate-900/95 border-slate-700 backdrop-blur-xl shadow-2xl">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                  {isIOS ? (
                    <Smartphone className="w-5 h-5 text-white" />
                  ) : (
                    <Monitor className="w-5 h-5 text-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Installer Kevine_dev
                  </h3>
                  <p className="text-xs text-slate-300 mb-3">
                    {isIOS
                      ? "Ajoutez ce portfolio à votre écran d'accueil pour un accès rapide"
                      : "Installez l'app pour une expérience optimale et un accès hors ligne"}
                  </p>

                  {isIOS ? (
                    <div className="text-xs text-slate-400 space-y-1">
                      <p>
                        1. Appuyez sur{" "}
                        <span className="font-mono bg-slate-800 px-1 rounded">
                          ⎘
                        </span>{" "}
                        (Partager)
                      </p>
                      <p>2. Sélectionnez "Sur l'écran d'accueil"</p>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={handleInstallClick}
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0 text-xs"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Installer
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleDismiss}
                        className="text-slate-400 hover:text-white text-xs"
                      >
                        Plus tard
                      </Button>
                    </div>
                  )}
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleDismiss}
                  className="flex-shrink-0 text-slate-400 hover:text-white p-1"
                  aria-label="fermer le modale"
                  title="fermer le modale d'installation"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
