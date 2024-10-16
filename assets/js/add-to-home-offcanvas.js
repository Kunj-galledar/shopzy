/*=====================
    Offcanvas Js
==========================*/
window.addEventListener("load", (event) => {
    setTimeout(() => {
        var myOffcanvas = document.getElementById("addToCartcanvas");
        var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
        bsOffcanvas.show();
    }, 5000); // 5000 milliseconds = 5 seconds
});