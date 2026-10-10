const formatPrice = (price) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);

function ProductList({ products, cart, onAddToCart, searchTerm = "" }) {
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  if (filteredProducts.length === 0) {
    return (
      <p className="text-warning">No encontramos productos con esa búsqueda.</p>
    );
  }

  return (
    <div className="row g-4">
      {filteredProducts.map((product) => (
        <div className="col-12 col-md-6 col-lg-4" key={product.id}>
          <article className="card product-card h-100">
            <img
              className="card-img-top"
              src={product.image}
              alt={product.alt}
              loading="lazy"
            />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title h4">{product.name}</h3>
              <p className="card-text">{product.description}</p>
              <p className="mb-1 text-secondary text-decoration-line-through">
                Precio normal: {formatPrice(product.price)}
              </p>
              <p className="product-price fw-bold mb-3">
                Precio oferta: {formatPrice(product.offerPrice)}
              </p>
              <button
                type="button"
                className="btn btn-primary mt-auto"
                onClick={() => onAddToCart(product)}
              >
                {cart.some((item) => item.id === product.id)
                  ? "En el carrito"
                  : "Agregar al carrito"}
              </button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
