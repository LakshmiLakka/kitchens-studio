// import './App.css'
// import logo from './logo.png.jpeg'

// function App() {
//   return (
//     <>
//       <nav className="navbar">
//         <img src={logo} alt="Kitchen Studio Logo" className="logo-img" />
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </nav>

//       <section className="hero">
//         <div className="hero-content">
//           <h1>Transforming Kitchens Into Elegant Spaces</h1>
//           <p>Modern Designs. Smart Living.</p>
//           <button>View Our Projects</button>
//         </div>
//       </section>

//       <section className="about">
//         <h2>About Us</h2>
//         <p>
//           The Kitchens Studio specializes in modern and modular kitchen interiors
//           designed for comfort, elegance, and functionality.
//         </p>
//       </section>

//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="cards">
//           <div className="card">
//             <h3>Modular Kitchen Design</h3>
//             <p>Customized layouts that maximize space and beauty.</p>
//           </div>
//           <div className="card">
//             <h3>Interior Renovation</h3>
//             <p>Modern upgrades with premium materials and finishes.</p>
//           </div>
//           <div className="card">
//             <h3>Custom Storage Solutions</h3>
//             <p>Smart storage systems designed for convenience.</p>
//           </div>
//         </div>
//       </section>

//       <section className="projects">
//         <h2>Our Projects</h2>
//         <div className="project-grid">
//           <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba" alt="" />
//           <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" alt="" />
//           <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="" />
//           <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="" />
//         </div>
//       </section>

//       <section className="contact">
//         <h2>Contact Us</h2>
//         <p>Ready to transform your kitchen? Let’s build something beautiful together.</p>
//         <button className="contact-btn">Get In Touch</button>
//       </section>

//       <footer className="footer">
//         <p>© 2026 The Kitchens Studio | Modern Interior Designs</p>
//       </footer>
//     </>
//   )
// }

// export default App

import './App.css'
import logo from './logo.png.jpeg'

function App() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Kitchen Studio Logo" className="logo-img" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Transforming Kitchens Into Elegant Spaces</h1>
          <p>Modern Designs. Smart Living.</p>
          <a href="#projects" className="hero-btn">View Our Projects</a>
        </div>
      </section>

       {/* <section className="about" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              The Kitchens Studio is a modern interior design company
              specializing in modular kitchens and elegant interiors.
            </p>
            <p>
              We combine quality craftsmanship with innovative design to
              create beautiful and functional kitchen spaces.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Kitchen Interior"
            />
          </div>
        </div>
      </section>  */}
      <section className="about" id="about">
  <div className="about-container">
    <div className="about-text">
      <h2>About Us</h2>
      <p>
        The Kitchens Studio is a modern interior design company specializing in
        modular kitchens, elegant interiors, and smart space planning solutions.
      </p>
      <p>
        With years of design expertise and a passion for innovation, we transform
        ordinary kitchens into sophisticated, highly functional spaces tailored
        to your lifestyle. Every project is crafted with precision, quality materials,
        and attention to detail.
      </p>
      <p>
        Our approach combines contemporary aesthetics with practical design
        strategies, ensuring that your kitchen is not only beautiful but also
        efficient and durable for everyday use.
      </p>
      <p>
        From concept to completion, our team works closely with clients to deliver
        customized solutions that reflect personality, comfort, and modern living.
      </p>
    </div>

    <div className="about-image">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Kitchen Interior"
      />
    </div>
  </div>
</section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba" alt="" />
            <h3>Modular Kitchen Design</h3>
            <p>Modern and space-efficient kitchen layouts.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" alt="" />
            <h3>Interior Renovation</h3>
            <p>Elegant and contemporary home transformations.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="" />
            <h3>Smart Storage</h3>
            <p>Creative storage solutions for organized spaces.</p>
          </div>
        </div>
      </section>

      {/* <section className="projects" id="projects">
        <h2>Our Projects</h2>
        <div className="project-grid">
          <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba" alt="" />
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="" />
          <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" alt="" />
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="" />
        </div>
      </section> */}
      <section className="projects" id="projects">
  <h2>Our Projects</h2>

  <p className="projects-description">
    We take pride in delivering beautifully designed kitchen spaces that blend
    functionality with elegance. Each project showcases our commitment to
    craftsmanship, innovation, and attention to detail.
  </p>

  <div className="project-grid">
    <div className="project-item">
      <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba" alt="Modern Kitchen" />
      <h3>Modern Minimal Kitchen</h3>
      <p>Clean lines, neutral tones, and smart storage solutions.</p>
    </div>

    <div className="project-item">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Luxury Kitchen" />
      <h3>Luxury Contemporary Kitchen</h3>
      <p>Premium materials with a refined and elegant finish.</p>
    </div>

    <div className="project-item">
      <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" alt="Compact Kitchen" />
      <h3>Compact Smart Kitchen</h3>
      <p>Optimized layouts designed for maximum space efficiency.</p>
    </div>

    <div className="project-item">
      <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="Classic Kitchen" />
      <h3>Classic Wooden Finish</h3>
      <p>Timeless wooden textures combined with modern comfort.</p>
    </div>
  </div>
</section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        © 2026 The Kitchens Studio
      </footer>
    </>
  )
}

export default App