const CACHE_NAME = "sales-tracker-v1";
const ASSETS = [
  "./",
  "./index.html",
  "https://unpkg.com/dexie/dist/dexie.js",
  "https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});