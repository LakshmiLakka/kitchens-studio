import './App.css'
import logo from './logo.png.jpeg'

function App() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Kitchen Studio Logo" className="logo-img" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Transforming Kitchens Into Elegant Spaces</h1>
          <p>Modern Designs. Smart Living.</p>
          <button>View Our Projects</button>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          The Kitchens Studio specializes in modern and modular kitchen interiors
          designed for comfort, elegance, and functionality.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <h3>Modular Kitchen Design</h3>
            <p>Customized layouts that maximize space and beauty.</p>
          </div>
          <div className="card">
            <h3>Interior Renovation</h3>
            <p>Modern upgrades with premium materials and finishes.</p>
          </div>
          <div className="card">
            <h3>Custom Storage Solutions</h3>
            <p>Smart storage systems designed for convenience.</p>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Our Projects</h2>
        <div className="project-grid">
          <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba" alt="" />
          <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" alt="" />
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="" />
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="" />
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Ready to transform your kitchen? Let’s build something beautiful together.</p>
        <button className="contact-btn">Get In Touch</button>
      </section>

      <footer className="footer">
        <p>© 2026 The Kitchens Studio | Modern Interior Designs</p>
      </footer>
    </>
  )
}

export default App