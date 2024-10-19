/*=====================
    Notification Js
==========================*/
const notifyBoxes = document.querySelectorAll('.notify-box');
const notificationBox = document.getElementById('alert-box');
const notificationText = notificationBox.querySelector('p');

notifyBoxes.forEach(notifyBox => {
    notifyBox.addEventListener('click', function () {
        const heartIcon = notifyBox.querySelector('i');

        if (heartIcon.classList.contains('ri-heart-line')) {
            heartIcon.classList.remove('ri-heart-line');
            heartIcon.classList.add('ri-heart-fill');

            notificationText.textContent = "Success! We have moved your product to the wishlist.";
        } else {
            heartIcon.classList.remove('ri-heart-fill');
            heartIcon.classList.add('ri-heart-line');

            notificationText.textContent = "Success! We have removed your product from the wishlist.";
        }

        notificationBox.classList.add('show');

        setTimeout(() => {
            notificationBox.classList.remove('show');
        }, 5000);
    });
});