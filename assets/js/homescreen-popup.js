// /*==========================
//  add to home screen popup js
//  ==========================*/
// let deferredPrompt;

// window.addEventListener("beforeinstallprompt", (e) => {
//   deferredPrompt = e;
// });

// const installapp = document.getElementById("installapp");

// installapp.addEventListener("click", async () => {
//   if (deferredPrompt !== null) {
//     deferredPrompt.prompt();
//     const {
//       outcome
//     } = await deferredPrompt.userChoice;
//     if (outcome === "accepted") {
//       deferredPrompt = null;
//     }
//   }
// });




// let deferredPrompt = null;

// window.addEventListener("beforeinstallprompt", (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();
//   // Store the event so it can be triggered later
//   deferredPrompt = e;
//   console.log("beforeinstallprompt event was fired.");
// });

// // Install button click handler
// const installapp = document.getElementById("installapp");

// installapp.addEventListener("click", async () => {
//   if (deferredPrompt) {
//     try {
//       // Show the install prompt
//       deferredPrompt.prompt();
//       // Wait for the user to respond to the prompt
//       const {
//         outcome
//       } = await deferredPrompt.userChoice;
//       console.log(`User response to the install prompt: ${outcome}`);
//       // Reset the deferredPrompt variable
//       deferredPrompt = null;
//     } catch (err) {
//       console.error('Error triggering prompt:', err);
//     }
//   } else {
//     console.log("The beforeinstallprompt event hasn't fired yet.");
//   }
// });

// // Optional: Log install event
// window.addEventListener("appinstalled", () => {
//   console.log("PWA was installed.");
// });








let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can install the PWA
  const installButton = document.getElementById('installapp');
  installButton.style.display = 'block';

  installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const {
        outcome
      } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    }
  });
});

// Optionally, hide the install button if the app is already installed
window.addEventListener('appinstalled', () => {
  console.log('App installed');
  const installButton = document.getElementById('installapp');
  installButton.style.display = 'none';
});
