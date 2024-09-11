document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.forEach(item => {
        const decrementButton = item.querySelector('.decrementButton');
        const incrementButton = item.querySelector('.incrementButton');
        const quantityElement = item.querySelector('.quantity');
        const itemPrice = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));

        decrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.value);
            if (quantity > 1) {
                quantity -= 1;
                quantityElement.value = quantity;
                updateTotal();
            }
        });

        incrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.value);
            quantity += 1;
            quantityElement.value = quantity;
            updateTotal();
        });
    });

    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const quantityElement = item.querySelector('.quantity');
            const itemPriceElement = item.querySelector('.item-price');

            if (quantityElement && itemPriceElement) {
                const quantity = parseInt(quantityElement.value);
                const price = parseFloat(itemPriceElement.textContent.replace('$', ''));

                if (!isNaN(quantity) && !isNaN(price)) {
                    total += quantity * price;
                }
            }
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    updateTotal(); // Initial call to display the correct total on page load
});