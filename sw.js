/* GeoOnline service worker — © 2026 Devnetra Consultancy, MIT License
   - app shell + data: network first (always the latest deploy), cached copy when offline
   - map tiles (Esri): cache-first, so India/Asia tiles downloaded once never wait on the network again
   - "pack" message: pre-downloads the India + Asia tile set for one basemap */
const VER = 'v4';
const APP = 'geo-app-' + VER, TILES = 'geo-tiles-v1', TILE_MAX = 6000;
const CORE_GEO = ['data/geo/states.js', 'data/geo/borders.js', 'data/geo/clabels.js', 'data/geo/cities.js'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(APP);
    const html = await (await fetch('./', { cache: 'no-cache' })).text();
    const refs = [...html.matchAll(/(?:src|href)="([^"#:]+\.(?:js|css|svg|png|json))"/g)].map(m => m[1]);
    const urls = ['./', ...new Set(refs), ...CORE_GEO];
    await Promise.all(urls.map(u => c.add(new Request(u, { cache: 'no-cache' })).catch(() => {})));
    // fonts listed inside fonts.css
    try { const css = await (await fetch('vendor/fonts/fonts.css')).text(); await Promise.all([...css.matchAll(/url\(([^)]+\.woff2)\)/g)].map(m => c.add('vendor/fonts/' + m[1].replace(/^\.\//, '').replace(/["']/g, '')).catch(() => {}))); } catch (er) {}
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('geo-app-') && k !== APP) await caches.delete(k);
    await self.clients.claim();
  })());
});

const isTile = u => /arcgisonline\.com\/ArcGIS\/rest\/services\/.+\/tile\//.test(u);
let puts = 0;
async function trimTiles() {
  const c = await caches.open(TILES), ks = await c.keys();
  for (let i = 0; i < ks.length - TILE_MAX; i++) await c.delete(ks[i]);
}
async function tileFirst(req) {
  const c = await caches.open(TILES), hit = await c.match(req.url);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok && res.type !== 'opaque') { c.put(req.url, res.clone()); if (++puts % 200 === 0) trimTiles(); }
  return res;
}
async function appNet(e) {   // network first (fresh after every deploy), cache when offline or slow (> 4 s)
  const c = await caches.open(APP), req = e.request, key = req.mode === 'navigate' ? './' : req;
  const net = fetch(req).then(res => { if (res.ok && res.type === 'basic') c.put(key, res.clone()); return res; });
  net.catch(() => {});
  const slow = new Promise(r => setTimeout(r, 4000)).then(() => c.match(key, { ignoreSearch: true }));
  try { return (await Promise.race([net, slow])) || await net; }
  catch (er) { return (await c.match(key, { ignoreSearch: true })) || new Response('offline', { status: 503 }); }
}
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = req.url;
  if (isTile(u)) { e.respondWith(tileFirst(req).catch(() => fetch(req))); return; }
  if (new URL(u).origin === self.location.origin) e.respondWith(appNet(e));
});

// ---- offline tile pack: India (z3–7) + Asia (z3–5) for one basemap ----
function lon2x(lon, z) { return Math.floor((lon + 180) / 360 * 2 ** z); }
function lat2y(lat, z) { const r = lat * Math.PI / 180; return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2 ** z); }
function tilesFor(tpl, maxNative) {
  const out = [], add = (b, z0, z1) => { for (let z = z0; z <= Math.min(z1, maxNative); z++) for (let x = lon2x(b[1], z); x <= lon2x(b[3], z); x++) for (let y = lat2y(b[2], z); y <= lat2y(b[0], z); y++) out.push(tpl.replace('{z}', z).replace('{x}', x).replace('{y}', y)); };
  add([-12, 25, 56, 150], 2, 5);   // Asia: [south, west, north, east]
  add([5, 66, 38, 99], 6, 7);      // India detail
  return [...new Set(out)];
}
self.addEventListener('message', e => {
  const d = e.data || {}; if (d.type !== 'pack') return;
  const src = e.source;
  e.waitUntil((async () => {
    const c = await caches.open(TILES), list = tilesFor(d.tpl, d.max || 7);
    let done = 0, fail = 0, i = 0;
    const tell = fin => src && src.postMessage({ type: 'pack', base: d.base, done, fail, total: list.length, fin });
    async function worker() {
      while (i < list.length) {
        const u = list[i++];
        try { if (!(await c.match(u))) { const r = await fetch(u, { mode: 'cors' }); if (r.ok) await c.put(u, r); else fail++; } } catch (er) { fail++; }
        if (++done % 20 === 0) tell(false);
      }
    }
    await Promise.all([worker(), worker(), worker(), worker(), worker(), worker()]);
    tell(true);
  })());
});
