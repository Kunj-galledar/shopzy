const toggleSwitch = document.getElementById('dark');
const body = document.body;

// Check localStorage for the dark mode setting
const darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});


document.getElementById('rtl').addEventListener('change', function () {
    // Get the current stylesheet
    const stylesheet = document.querySelector('link[rel="stylesheet"]');

    // Toggle between two stylesheets based on the checkbox state
    if (this.checked) {
        stylesheet.setAttribute('href', './assets/css/vendor/bootstrap.rtl.css');
    } else {
        stylesheet.setAttribute('href', './assets/css/vendor/bootstrap.css');
    }
});

document.getElementById('rtl').addEventListener('change', function () {
    // Apply RTL if the checkbox is checked, otherwise LTR
    document.body.dir = this.checked ? 'rtl' : 'ltr';
});