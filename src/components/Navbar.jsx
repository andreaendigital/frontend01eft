import Counter from "./Counter";

function Navbar({ cartCount }) {
  return (
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
  );
}

export default Navbar;
