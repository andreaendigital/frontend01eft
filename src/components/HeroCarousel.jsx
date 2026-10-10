function HeroCarousel() {
  return (
    <section className="mb-5" aria-label="Galería promocional">
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
              alt="Plants vs. Zombies: Garden Warfare"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn-image-f3580964b8e711e5b95f2ff191a1c838.baas.nintendo.com/1/53dca67ca19602ce"
              className="d-block w-100 carousel-image"
              alt="Videojuegos de Nintendo"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image.api.playstation.com/vulcan/ap/rnd/202407/0200/aac40cfde55b67abf081d5d9ebcc5e3e08aaa65a4c99424e.jpg"
              className="d-block w-100 carousel-image"
              alt="Videojuegos de PlayStation 5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
