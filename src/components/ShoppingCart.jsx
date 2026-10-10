import { useState } from "react";
import CartTotal from "./CartTotal";
import Counter from "./Counter";
import ProductList from "./ProductList";
import UserStatus from "./UserStatus";

function ShoppingCart({
  products,
  loadingProducts,
  productsError,
  onCountChange,
}) {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    const uniqueId = `${product.id}-${Date.now()}-${Math.random()}`;
    const nextCart = [...cart, { ...product, uniqueId }];
    setCart(nextCart);
    onCountChange(nextCart.length);
  };

  const removeFromCart = (uniqueId) => {
    const nextCart = cart.filter((product) => product.uniqueId !== uniqueId);
    setCart(nextCart);
    onCountChange(nextCart.length);
  };

  return (
    <>
      <section id="productos" aria-labelledby="products-title">
        <div className="text-center mb-4">
          <p className="eyebrow mb-2">Selección Pixel Arcade</p>
          <h2 id="products-title" className="display-6 fw-bold">
            Productos destacados
          </h2>
          <p className="lead text-secondary">
            Elige el equipo que llevará tus partidas al siguiente nivel.
          </p>
        </div>
        <form
          className="row g-2 mb-4"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="col-12 col-md-9">
            <label className="visually-hidden" htmlFor="searchInput">
              Buscar productos
            </label>
            <input
              id="searchInput"
              className="form-control"
              type="search"
              placeholder="Buscar por nombre o descripción"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className="col-12 col-md-3">
            <button className="btn btn-primary w-100" type="submit">
              Buscar productos
            </button>
          </div>
        </form>
        <UserStatus
          count={products.length}
          loading={loadingProducts}
          error={productsError}
        />
        {!loadingProducts && !productsError && (
          <ProductList
            products={products}
            cart={cart}
            onAddToCart={addToCart}
            searchTerm={searchTerm}
          />
        )}
      </section>

      <aside
        id="carrito"
        className="cart-section mt-5"
        aria-labelledby="cart-title"
      >
        <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
          <div>
            <p className="eyebrow mb-2">Compra rápida</p>
            <h2 id="cart-title" className="h3 mb-1">
              Tu carrito
            </h2>
          </div>
          <span id="cartSummary" className="text-secondary">
            {cart.length} producto{cart.length === 1 ? "" : "s"}
          </span>
        </div>
        <div id="cartItems" className="cart-items mt-4" aria-live="polite">
          {cart.length === 0 ? (
            <p className="text-secondary mb-0">Tu carrito está vacío.</p>
          ) : (
            cart.map((product) => (
              <div
                className="cart-item d-flex justify-content-between align-items-center gap-3 py-2"
                key={product.uniqueId}
              >
                <div>
                  <strong>{product.name}</strong>
                  <small className="d-block text-secondary">
                    {product.offerPrice.toLocaleString("es-CL")} CLP
                  </small>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-warning"
                  onClick={() => removeFromCart(product.uniqueId)}
                >
                  Quitar
                </button>
              </div>
            ))
          )}
        </div>
        <CartTotal cart={cart} />
      </aside>
    </>
  );
}

export default ShoppingCart;
