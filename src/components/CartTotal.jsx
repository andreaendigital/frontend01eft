const formatPrice = (price) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);

function CartTotal({ cart }) {
  const total = cart.reduce((sum, product) => sum + product.offerPrice, 0);

  return (
    <div className="cart-total mt-4 pt-3 border-top d-flex justify-content-between">
      <strong>Total acumulado</strong>
      <strong id="cartTotal">{formatPrice(total)}</strong>
    </div>
  );
}

export default CartTotal;
