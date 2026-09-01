const CACHE_NAME = 'emprestimos-plus-v1';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './sw.js',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
