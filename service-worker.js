// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open('my-cache').then((cache) => {
//       return cache.addAll([
//         '/',
//         '/index.html',
//         '/assets/css/vendor/bootstrap.css',
//         '/assets/css/vendor/bootstrap.rtl.css',
//         '/assets/css/vendor/remixicon.css',
//         '/assets/css/vendor/swiper.css',
//         '/assets/css/main.css',
//         '/assets/css/nouislider.css',
//         '/assets/js/vendor/bootstrap.js',
//         '/assets/js/vendor/custom-swiper.js',
//         '/assets/js/vendor/swiper.js',
//         '/assets/js/add-to-home-offcanvas.js',
//         '/assets/js/add-to-install.js',
//         '/assets/js/location.js',
//         '/assets/js/notify.js',
//         '/assets/js/nouislider.js',
//         '/assets/js/otp.js',
//         '/assets/js/product-count.js',
//         '/assets/js/quick-timer.js',
//         '/assets/js/range-slider.js',
//         '/assets/js/skeleton-loader.js',
//         '/assets/js/sw-setup.js',
//         '/assets/js/theme-option.js',
//       ]);
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });