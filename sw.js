// =============================================================================
// SERVICE WORKER FOR FRAPPE 80-DAYS TRACKER (PWA & MOBILE NOTIFICATIONS)
// =============================================================================

const CACHE_NAME = "frappe-80days-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.svg",
  "./icon-512.svg"
];

// 1. INSTALL SERVICE WORKER & CACHE ASSETS
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching app assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// 2. ACTIVATE & CLEAN OLD CACHES
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH OFFLINE FIRST
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    }).catch(() => {
      // Fallback to index.html if offline
      return caches.match("./index.html");
    })
  );
});

// 4. SHOW NOTIFICATION ON MOBILE PHONE (TRIGGERED FROM APP VIA POSTMESSAGE OR PUSH)
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "TRIGGER_ALARM_NOTIFICATION") {
    const { title, body, day } = event.data;

    self.registration.showNotification(title || "⏰ UTHO! Frappe Study Time!", {
      body: body || "Aapka aaj ka topic pending hai. Utho aur pura karo!",
      icon: "./icon-192.svg",
      badge: "./icon-192.svg",
      tag: "frappe-daily-alarm",
      renotify: true,
      requireInteraction: true,
      vibrate: [300, 100, 300, 100, 400, 100, 400], // Phone vibration like real alarm!
      actions: [
        { action: "open", title: "📖 Open App" },
        { action: "dismiss", title: "🔇 Dismiss" }
      ],
      data: { day: day, url: "./index.html" }
    });
  }
});

// 5. HANDLE NOTIFICATION CLICKS (OPENS APP ON PHONE)
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "dismiss") {
    return;
  }

  // Focus open tab or open new window
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("./index.html");
      }
    })
  );
});
