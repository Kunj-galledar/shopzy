/*=====================
    Skeleton Loader Js
==========================*/
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    setTimeout(function() {
        loader.style.display = 'none'; 
    }, 3000);
});