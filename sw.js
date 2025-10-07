self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  // Let requests pass through (Figma content stays live).
  event.respondWith(fetch(event.request));
});