import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import Navbar from "./components/Navbar";
import { products as catalog } from "./assets/products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar cartCount={cartCount} />

      <main id="inicio" className="container my-5">
        <HeroCarousel />

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

      <Footer />
    </div>
  );
}

export default App;
