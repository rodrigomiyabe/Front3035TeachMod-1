
function addToCart(productName, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));

    const cartMessage = document.getElementById('cart-message');
    cartMessage.textContent = `${productName} foi adicionado ao carrinho de compras!`;

    const notification = document.getElementById('cart-notification');
    const messageElement = notification.querySelector('.message');

    messageElement.textContent = `${productName} foi adicionado ao carrinho de compras!`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Remover a classe 'show' após 3 segundos (3000 ms)
}