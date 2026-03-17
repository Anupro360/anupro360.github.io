/**
 * NYC STREET ENGLISH PRO - SERVICE WORKER
 * Versión: 2.0 (Master Edition)
 */

const CACHE_NAME = 'nyc-street-master-v2';

// Archivos críticos para funcionamiento Offline
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './data.js',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/197/197484.png'
];

// INSTALACIÓN: Guarda los archivos en la caché local
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('PWA: Archivos cacheados con éxito');
        return cache.addAll(urlsToCache);
      })
  );
  // Fuerza al SW a tomar el control de inmediato
  self.skipWaiting();
});

// ACTIVACIÓN: Limpia cachés antiguas (v1, etc.) para evitar conflictos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('PWA: Borrando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Reclama el control de los clientes activos
  self.clients.claim();
});

// ESTRATEGIA DE CARGA: "Stale-while-revalidate"
// Muestra lo que hay en caché rápido (para velocidad offline)
// pero intenta descargar la versión nueva en segundo plano.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // Si la respuesta es válida, actualizamos la caché en segundo plano
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        }).catch(() => {
          // Si no hay red y no hay caché, aquí podrías retornar una página offline personalizada
        });

        // Retorna la versión cacheada si existe, de lo contrario espera a la red
        return cachedResponse || fetchPromise;
      })
  );
});