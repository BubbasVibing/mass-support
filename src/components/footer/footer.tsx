import { Link } from 'react-router-dom';
import { 
  FiPhone, 
  FiMail
} from 'react-icons/fi';
import massLogo from '../../assets/images/mass-logeeo-final.png';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="content-container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <img src={massLogo} alt="MASS Solutions Logo" className="footer-logo-image" />
                <p>Quality management and support services for government agencies.</p>
              </div>
            </div>
            
            <div className="footer-links-container">
              <div className="footer-column">
                <h3>Services</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/services/program-management">Program & Project Management</Link>
                  </li>
                  <li>
                    <Link to="/services/hud-vash">HUD VASH</Link>
                  </li>
                  <li>
                    <Link to="/services/vocational-services">Vocational Services</Link>
                  </li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>Company</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>Contact</h3>
                <ul className="footer-links">
                  <li className="contact-item">
                    <FiPhone className="contact-icon" />
                    <span>+1 443-808-0537</span>
                  </li>
                  <li className="contact-item">
                    <FiMail className="contact-icon" />
                    <span>info@madison-support.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="content-container">
          <p>© {currentYear} Madison Avenue Support Services, Inc. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
