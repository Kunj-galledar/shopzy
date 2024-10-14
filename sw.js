var cacheName = "shopzy-app";
var filesToCache = [
  "./",
  "./index.html",
  "./assets/css/vendor/bootstrap.css",
  "./assets/css/vendor/bootstrap.rtl.css",
  "./assets/css/vendor/remixicon.css",
  "./assets/css/vendor/swiper.css",
  "./assets/css/main.css",
  "./assets/js/vendor/bootstrap.js",
  "./assets/js/vendor/custom-swiper.js",
  "./assets/js/vendor/swiper.js",
  "./assets/js/homescreen-popup.js",
  "./assets/js/install-app.js",
  "./assets/js/location.js",
  "./assets/js/nouislider.js",
  "./assets/js/otp.js",
  "./assets/js/product-count.js",
  "./assets/js/quick-timer.js",
  "./assets/js/range-slider.js",
  "./assets/js/theme-option.js",
];

/* Start the service worker and cache all of the app's content */
setTimeout(() => {
  self.addEventListener("install", function (e) {
    e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        return cache.addAll(filesToCache);
      })
    );
    self.skipWaiting();
  });
}, 500);
