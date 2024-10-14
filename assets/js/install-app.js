/*========================
 Manifest js
 ==========================*/
// window.onload = () => {
//     "use strict";
//     if ("serviceWorker" in navigator) {
//         navigator.serviceWorker.register("service-worker.js");
//     }
// };

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js').then(() => {
//         console.log('Service Worker Registered');
//     });
// }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
}