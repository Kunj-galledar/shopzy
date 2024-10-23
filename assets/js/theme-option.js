/*=====================
    Theme Setting Js
==========================*/
const darkToggle = document.getElementById('dark');
const rtlToggle = document.getElementById('rtl');
const body = document.body;
const html = document.documentElement;
let bootstrapLink = document.querySelector('link[href*="bootstrap"]');

function applySavedSettings() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkToggle) darkToggle.checked = true;
    }

    if (localStorage.getItem('rtlMode') === 'enabled') {
        html.setAttribute('dir', 'rtl');
        bootstrapLink.href = './assets/css/vendor/bootstrap.rtl.css';
        if (rtlToggle) rtlToggle.checked = true;
    }
}

// Load saved settings from localStorage on page load
window.onload = applySavedSettings;

// Dark Mode Toggle
if (darkToggle) {
    darkToggle.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.removeItem('darkMode');
        }
    });
}

// RTL Mode Toggle
if (rtlToggle) {
    rtlToggle.addEventListener('change', function () {
        if (this.checked) {
            html.setAttribute('dir', 'rtl');
            bootstrapLink.href = './assets/css/vendor/bootstrap.rtl.css';
            localStorage.setItem('rtlMode', 'enabled');
        } else {
            html.removeAttribute('dir');
            bootstrapLink.href = './assets/css/vendor/bootstrap.css';
            localStorage.removeItem('rtlMode');
        }
    });
}