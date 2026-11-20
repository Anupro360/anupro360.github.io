const CACHE_NAME = 'ingles-rapido-v2';
const ASSETS = [
  './',
  './index.html',
  './data_p1.js',
  './data_p2.js',
  './data_p3.js',
  './data_p4.js',
  './data_p5.js',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});