import './homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="content-container hero-container">
          <div className="hero-content">
            <h1>Innovative Housing Solutions for America's Veterans</h1>
            <p>We partner with government agencies to provide high-quality housing and support services for veterans across the nation.</p>
            <div className="hero-buttons">
              <a href="/services" className="btn-primary">Our Services</a>
              <a href="/contact" className="btn-secondary">Contact Us</a>
            </div>
          </div>
          <div className="hero-image">
            {/* This would be an image in production */}
            <div className="placeholder-image"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="content-container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive solutions for veterans' housing and support needs</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon program-icon"></div>
              <h3>Program & Project Management</h3>
              <p>Expert management of housing programs from planning to implementation, ensuring timely and cost-effective delivery of services.</p>
              <a href="/services/program-management" className="service-link">Learn More</a>
            </div>
            
            <div className="service-card">
              <div className="service-icon hud-icon"></div>
              <h3>HUD VASH</h3>
              <p>Specialized support for the HUD-VASH program, combining housing vouchers with comprehensive case management and clinical services.</p>
              <a href="/services/hud-vash" className="service-link">Learn More</a>
            </div>
            
            <div className="service-card">
              <div className="service-icon vocational-icon"></div>
              <h3>Vocational Services</h3>
              <p>Career development and employment support services designed specifically for veterans transitioning to civilian workforce.</p>
              <a href="/services/vocational" className="service-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="content-container">
          <div className="about-content">
            <div className="about-text">
              <h2>Committed to Excellence in Veteran Housing</h2>
              <p>With over a decade of experience working with government agencies, we understand the unique challenges in providing quality housing solutions for veterans.</p>
              <p>Our dedicated team combines expertise in government contracting, veteran affairs, and housing management to deliver exceptional results for our partners and the veterans we serve.</p>
              <a href="/about" className="btn-primary">About Our Company</a>
            </div>
            <div className="about-image">
              {/* This would be an image in production */}
              <div className="placeholder-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="content-container">
          <div className="cta-content">
            <h2>Ready to Partner with Us?</h2>
            <p>Let's work together to create sustainable housing solutions for veterans.</p>
            <a href="/contact" className="btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
