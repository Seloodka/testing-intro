function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, qty) {
  if (qty === 0) {
    throw new RangeError("Нельзя добавить нулевое количество");
  }

  let cartProduct = cart.find((cartProduct) => cartProduct.id === product.id);

  if (!cartProduct) {
    cartProduct = { ...product };
    cart.push(cartProduct);
  }

  if (!cartProduct.quantity) {
    cartProduct.quantity = 0;
  }

  if (
    cartProduct.quantity + qty > cartProduct.stock ||
    qty > cartProduct.stock
  ) {
    throw new RangeError("Нельзя добавить товаров больше, чем есть на складе");
  }

  cartProduct.quantity += qty;

  return cart;
}

function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
