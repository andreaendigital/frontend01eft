const formatPrice = (price) => {
  if (price === null) return "Precio no disponible";
  return `$${price.toLocaleString("es-CL", {
    minimumFractionDigits: price < 100 ? 2 : 0,
    maximumFractionDigits: price < 100 ? 2 : 0,
  })}`;
};

function ProductList({
  products,
  cart,
  onAddToCart,
  searchTerm = "",
  selectedCategory = "Todas",
}) {
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "Todas" ||
      product.category === selectedCategory),
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
              <span className="badge text-bg-secondary align-self-start mb-2">
                {product.category}
              </span>
              <p className="card-text">{product.description}</p>
              <p className="product-price fw-bold mb-3">
                Precio: {formatPrice(product.price)}
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
