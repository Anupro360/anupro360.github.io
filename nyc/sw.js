const CACHE_NAME = 'nyc-street-master-v1';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './data.js',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/197/197484.png'
];

// Instalación: Guarda todo en el teléfono
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache OK');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación: Borra versiones viejas automáticamente para actualizar
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Estrategia Offline: Intenta red, si falla usa el caché del teléfono
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});