import './App.css'

function App() {
  const whatsappUrl = "https://wa.me/5491112345678?text=Hola!%20Quiero%20reservar%20una%20mesa%20en%20Malva%20Cocina"

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="brand-logo">Malva Cocina</h2>
        <div className="nav-links">
          <a href="#menu">Menú</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">COCINA ARGENTINA</p>
          <h1>
            Sabores que se
            <br />
            sienten como casa.
          </h1>
          <p className="hero-description">
            Una experiencia gastronómica argentina,
            hecha con productos de estación y mucho amor.
          </p>
          <a href="#menu" className="btn-primary">Ver nuestro menú</a>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
            alt="Interior de Malva Cocina"
          />
        </div>

        <div className="about-content">
          <p className="section-label">NUESTRA HISTORIA</p>
          <h2>
            Cocina argentina,
            <br />
            sin apuro.
          </h2>
          <p>
            Malva nació de una idea simple: recuperar el placer de sentarse
            a comer bien, compartir una mesa y disfrutar de los sabores de
            nuestra tierra.
          </p>
          <p>
            Trabajamos con productores locales y productos de estación para
            crear platos que combinan tradición y una mirada contemporánea.
          </p>
          <a href="#contacto" className="btn-secondary">Conocé nuestra historia</a>
        </div>
      </section>

      {/* MENÚ */}
      <section id="menu" className="menu-section">
        <div className="menu-header">
          <p className="section-label">NUESTROS FAVORITOS</p>
          <h2>Delicias de Malva</h2>
        </div>

        <div className="menu-grid">
          <article className="menu-card">
            <div className="menu-card-header">
              <h3>Empanadas de carne</h3>
              <span className="price">$8.500</span>
            </div>
            <p>Carne cortada a cuchillo, cebolla y especias.</p>
          </article>

          <article className="menu-card">
            <div className="menu-card-header">
              <h3>Ojo de bife</h3>
              <span className="price">$18.500</span>
            </div>
            <p>Con papas rústicas y salsa criolla.</p>
          </article>

          <article className="menu-card">
            <div className="menu-card-header">
              <h3>Flan de la casa</h3>
              <span className="price">$6.500</span>
            </div>
            <p>Flan casero con dulce de leche y crema.</p>
          </article>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="gallery">
        <div className="gallery-header">
          <p className="section-label">MALVA COCINA</p>
          <h2>Un lugar para disfrutar</h2>
        </div>

        <div className="gallery-grid">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80"
            alt="Plato gourmet"
          />
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80"
            alt="Comida argentina"
          />
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80"
            alt="Plato casero"
          />
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80"
            alt="Ambiente de restaurante"
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contact">
        <div className="contact-content">
          <p className="section-label">VISITANOS</p>
          <h2>Te esperamos en Malva</h2>
          <p className="contact-desc">
            Vení a disfrutar una experiencia gastronómica diferente
            en el corazón de Buenos Aires.
          </p>

          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Dirección</h3>
              <p>Palermo, Buenos Aires</p>
            </div>
            <div className="info-card">
              <h3>🕐 Horarios</h3>
              <p>
                Martes a Domingo
                <br />
                12:00 — 00:00
              </p>
            </div>
          </div>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>Malva Cocina</h2>
            <p>
              Cocina argentina, productos de estación
              y momentos para compartir.
            </p>
          </div>

          <div className="footer-links">
            <a href="#menu">Menú</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Malva Cocina. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App