import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import Counter from "./components/Counter";
import ContactForm from "./components/ContactForm";
import { products as catalog } from "./assets/products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

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
                  src="https://w0.peakpx.com/wallpaper/154/78/HD-wallpaper-plants-vs-zombies-garden-warfare.jpg"
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
                  src="https://m.media-amazon.com/images/S/stores-image-uploads-fe-prod/d/AmazonStores/A39IBJ37TRP1C6/60fe6d7eb4f67f5b495d77e9ce5ade9b.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg"
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
              <div className="carousel-item">
                <img
                  src="https://image.api.playstation.com/vulcan/ap/rnd/202407/0200/aac40cfde55b67abf081d5d9ebcc5e3e08aaa65a4c99424e.jpg"
                  className="d-block w-100 carousel-image"
                  alt="Videojuegos de PlayStation 5"
                />
                <div className="carousel-caption text-start">
                  <h2>Una aventura para cada jugador</h2>
                  <p>
                    Descubre nuevos mundos y disfruta tus videojuegos favoritos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ShoppingCart
          products={catalog}
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
          <ContactForm />
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
