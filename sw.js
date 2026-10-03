const CACHE='astronerve-v3';
const ASSETS=['./','./index.html','./about.html','./contact.html','./merch.html','./login.html','./styles.css','./app.js','./site-config.js','./manifest.webmanifest','./assets/logo.jpg','./assets/hero-home.jpg','./assets/hero-about.jpg','./assets/hero-contact.jpg','./assets/hero-merch.jpg','./assets/hoodie.jpg','./assets/tshirt.jpg','./assets/cap.jpg','./assets/mug.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))))});
