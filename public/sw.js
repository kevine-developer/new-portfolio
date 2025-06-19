// Vérification de l'environnement
if (typeof self === "undefined") {
  throw new Error("Service Worker must run in a Service Worker context")
}

const CACHE_NAME = "kevine-portfolio-v1.0.0"
const STATIC_CACHE_NAME = "kevine-static-v1.0.0"
const DYNAMIC_CACHE_NAME = "kevine-dynamic-v1.0.0"

// Assets à mettre en cache immédiatement
const STATIC_ASSETS = ["/", "/manifest.json", "/icons/icon-192x192.png", "/icons/icon-512x512.png"]

// URLs à mettre en cache dynamiquement
const CACHE_URLS = ["/", "/#projets", "/#parcours", "/#alternance", "/#contact"]

// Installation du Service Worker
self.addEventListener("install", (event) => {
  console.log("[SW] Installing Service Worker...")

  event.waitUntil(
    caches
      .open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log("[SW] Caching static assets")
        // Essayer de mettre en cache, mais ne pas échouer si certains assets ne sont pas disponibles
        return Promise.allSettled(
          STATIC_ASSETS.map((asset) =>
            cache.add(asset).catch((err) => {
              console.warn(`[SW] Failed to cache ${asset}:`, err)
              return null
            }),
          ),
        )
      })
      .then(() => {
        console.log("[SW] Static assets cached successfully")
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error("[SW] Error caching static assets:", error)
      }),
  )
})

// Activation du Service Worker
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating Service Worker...")

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME && cacheName !== CACHE_NAME) {
              console.log("[SW] Deleting old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        console.log("[SW] Service Worker activated")
        return self.clients.claim()
      }),
  )
})

// Stratégie de cache pour les requêtes
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Ignorer les requêtes non-HTTP et les requêtes vers d'autres domaines
  if (!request.url.startsWith("http") || url.origin !== self.location.origin) {
    return
  }

  // Stratégie Cache First pour les assets statiques
  if (
    request.destination === "image" ||
    request.destination === "script" ||
    request.destination === "style" ||
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.includes("/icons/")
  ) {
    event.respondWith(
      caches
        .match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse
          }

          return fetch(request).then((response) => {
            // Ne pas mettre en cache les réponses d'erreur
            if (!response || response.status !== 200 || response.type !== "basic") {
              return response
            }

            const responseToCache = response.clone()
            caches.open(STATIC_CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache).catch((err) => {
                console.warn("[SW] Failed to cache response:", err)
              })
            })

            return response
          })
        })
        .catch(() => {
          // Fallback pour les images
          if (request.destination === "image") {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#1e293b"/><text x="100" y="100" text-anchor="middle" fill="#64748b" font-family="Arial" font-size="14">Image non disponible</text></svg>',
              { headers: { "Content-Type": "image/svg+xml" } },
            )
          }
        }),
    )
    return
  }

  // Stratégie Network First pour les pages HTML
  if (request.destination === "document" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Mettre en cache la réponse si elle est valide
          if (response && response.status === 200) {
            const responseToCache = response.clone()
            caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache).catch((err) => {
                console.warn("[SW] Failed to cache page:", err)
              })
            })
          }
          return response
        })
        .catch(() => {
          // Fallback vers le cache
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse
            }

            // Page offline de fallback
            return new Response(
              `<!DOCTYPE html>
                <html lang="fr">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Kevine.dev - Hors ligne</title>
                  <style>
                    body { 
                      font-family: system-ui, -apple-system, sans-serif; 
                      background: #0f172a; 
                      color: white; 
                      display: flex; 
                      align-items: center; 
                      justify-content: center; 
                      min-height: 100vh; 
                      margin: 0; 
                      text-align: center;
                    }
                    .offline-container {
                      max-width: 400px;
                      padding: 2rem;
                    }
                    .emoji { font-size: 4rem; margin-bottom: 1rem; }
                    h1 { color: #10b981; margin-bottom: 1rem; }
                    p { color: #94a3b8; line-height: 1.6; }
                    button {
                      background: linear-gradient(to right, #10b981, #3b82f6);
                      border: none;
                      color: white;
                      padding: 0.75rem 1.5rem;
                      border-radius: 0.5rem;
                      cursor: pointer;
                      margin-top: 1rem;
                      font-weight: 500;
                    }
                    button:hover { opacity: 0.9; }
                  </style>
                </head>
                <body>
                  <div class="offline-container">
                    <div class="emoji">📱</div>
                    <h1>Mode hors ligne</h1>
                    <p>Vous êtes actuellement hors ligne. Cette page sera rechargée automatiquement dès que votre connexion sera rétablie.</p>
                    <button onclick="window.location.reload()">Réessayer</button>
                  </div>
                  <script>
                    // Auto-reload quand la connexion revient
                    window.addEventListener('online', () => {
                      window.location.reload()
                    })
                  </script>
                </body>
                </html>`,
              {
                headers: { "Content-Type": "text/html" },
                status: 200,
              },
            )
          })
        }),
    )
    return
  }

  // Stratégie Network First pour les autres requêtes
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseToCache = response.clone()
          caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache).catch((err) => {
              console.warn("[SW] Failed to cache request:", err)
            })
          })
        }
        return response
      })
      .catch(() => {
        return caches.match(request)
      }),
  )
})

// Gestion des notifications push (optionnel)
self.addEventListener("push", (event) => {
  console.log("[SW] Push message received")

  if (!event.data) return

  const options = {
    body: event.data.text() || "Nouveau message de Kevine.dev",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-72x72.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Voir le portfolio",
      },
      {
        action: "close",
        title: "Fermer",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification("Kevine.dev", options))
})

// Gestion des clics sur les notifications
self.addEventListener("notificationclick", (event) => {
  console.log("[SW] Notification click received")

  event.notification.close()

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"))
  } else if (event.action === "close") {
    // Ne rien faire, juste fermer
  } else {
    // Clic sur la notification principale
    event.waitUntil(clients.openWindow("/"))
  }
})

// Synchronisation en arrière-plan (optionnel)
self.addEventListener("sync", (event) => {
  console.log("[SW] Background sync triggered")

  if (event.tag === "contact-form") {
    event.waitUntil(
      // Logique pour envoyer les formulaires en attente
      syncContactForms(),
    )
  }
})

async function syncContactForms() {
  try {
    console.log("[SW] Syncing contact forms...")
    // Implémentation future pour la synchronisation des formulaires
  } catch (error) {
    console.error("[SW] Error in syncContactForms:", error)
  }
}

// Mise à jour du cache quand une nouvelle version est disponible
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})
