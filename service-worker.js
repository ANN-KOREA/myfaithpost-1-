const cacheName = 'faithpost-v1';
const precacheResources = [
    '/',
    '/index.html',
    '/question.html',
    '/response.html',
    '/generate.html',
    '/assets/css/styles.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(precacheResources))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
