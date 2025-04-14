import { Link } from 'react-router-dom';
import './services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="content-container">
          <h1>Our Services</h1>
          <p>Comprehensive housing and support solutions for veterans</p>
        </div>
      </section>

      <section className="section services-overview">
        <div className="content-container">
          <div className="services-grid">
            <div className="service-card">
              <h2>Program & Project Management</h2>
              <p>Expert oversight and execution of housing initiatives from start to finish. Our team ensures timely and cost-effective delivery of veteran housing solutions.</p>
              <Link to="/services/program-management" className="btn-primary">Learn More</Link>
            </div>

            <div className="service-card">
              <h2>HUD VASH</h2>
              <p>Specialized support for the HUD-VA Supportive Housing program, helping veterans find permanent housing while providing clinical and supportive services.</p>
              <Link to="/services/hud-vash" className="btn-primary">Learn More</Link>
            </div>

            <div className="service-card">
              <h2>Vocational Services</h2>
              <p>Comprehensive employment support designed to help veterans transition to civilian careers, including job training, placement assistance, and ongoing career development.</p>
              <Link to="/services/vocational-services" className="btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
