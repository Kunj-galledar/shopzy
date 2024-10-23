/*=====================
    Notification Js
==========================*/
const wishlistButtons = document.querySelectorAll('.wishlist-btn-group .btn');

wishlistButtons.forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('alert-box').classList.add('show');

        setTimeout(() => {
            document.getElementById('alert-box').classList.remove('show');
        }, 3000);
    });
});