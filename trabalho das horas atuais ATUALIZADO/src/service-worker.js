self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icone-192.png",
        "icon-512.png",
        "ConexãoOfline.js",
        "horasDoDia.css",
        "horasDoDia.js",
        "paisagemDeFundo.jpg",
        "madrugada.mp4",
        "manha.mp4",
        "noite.mp4",
        "tarde.mp4"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
