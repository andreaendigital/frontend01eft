import { useEffect, useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productsError, setProductsError] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}products.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Error ${response.status}`);
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        setProductsError(true);
        console.error("No se pudo cargar el catálogo", error);
      })
      .finally(() => setLoadingProducts(false));
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark arcade-navbar"
          aria-label="Navegación principal"
        >
          <div className="container">
            <a
              className="navbar-brand d-flex align-items-center gap-2 fw-bold"
              href="#inicio"
            >
              Pixel Arcade
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavigation"
              aria-label="Abrir menú de navegación"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#inicio">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#productos">
                    Productos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#carrito">
                    Carrito <Counter count={cartCount} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main id="inicio" className="container my-5">
        <section className="mb-5" aria-labelledby="hero-title">
          <div
            id="heroCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner rounded-3 overflow-hidden">
              <div className="carousel-item active">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682141878168-5dace8e1785d?w=1200"
                  className="d-block w-100 carousel-image"
                  alt="Setup gamer completo"
                />
                <div className="carousel-caption text-start">
                  <h1 id="hero-title">Tu próximo nivel comienza aquí</h1>
                  <p>
                    Encuentra tecnología, accesorios y experiencias para mejorar
                    tu forma de jugar.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1200"
                  className="d-block w-100 carousel-image"
                  alt="Persona jugando"
                />
                <div className="carousel-caption text-start">
                  <h2>Potencia para cada partida</h2>
                  <p>
                    Componentes y periféricos seleccionados para jugar con
                    comodidad y precisión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ShoppingCart
          products={products}
          loadingProducts={loadingProducts}
          productsError={productsError}
          onCountChange={setCartCount}
        />

        <section
          id="contacto"
          className="contact-section text-center mt-5"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title" className="h3">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p>
            Visítanos en Santiago o escríbenos para recibir orientación sobre tu
            próximo setup.
          </p>
          <form
            className="contact-form text-start"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              className="form-control"
              placeholder="Ej. Juan Pérez"
              required
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              className="form-control"
              type="email"
              placeholder="nombre@correo.com"
              required
            />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" className="form-control" rows="4" required />
            <button type="submit" className="btn btn-primary w-100">
              Enviar mensaje
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-dark text-white py-4 mt-auto arcade-footer">
        <div className="container text-center">
          <p className="mb-1 fw-bold">Pixel Arcade</p>
          <p className="mb-0 small text-white-50">
            © 2026 Pixel Arcade. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
