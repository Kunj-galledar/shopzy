/*=====================
    Add to Install Js
==========================*/
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    document.getElementById('add-to-home').style.display = 'block';
});

document.getElementById('add-to-home').addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const {
            outcome
        } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        deferredPrompt = null;
    }
});