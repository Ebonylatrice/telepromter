// Network first, saved copy as a fallback.
// Edits to script.txt always win when there's a connection; if the venue
// Wi-Fi drops, the last version that loaded still opens.
const CACHE = 'toolkit-v1';
const SHELL = ['./', './index.html', './practice.txt', './checklists.txt', './watchlist.txt'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.all(SHELL.map((url) => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const key = req.url.split('?')[0];
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(key, copy)).catch(() => null);
        }
        return res;
      })
      .catch(async () => {
        const hit = await caches.match(req, { ignoreSearch: true });
        if (!hit) return Response.error();
        // Tag it so the page can say "offline copy" instead of "loaded".
        const headers = new Headers(hit.headers);
        headers.set('X-Offline-Copy', '1');
        return new Response(await hit.blob(), { status: hit.status, statusText: hit.statusText, headers });
      })
  );
});
