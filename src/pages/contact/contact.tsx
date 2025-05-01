import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiFlag } from 'react-icons/fi';
import './contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  error: boolean;
  message: string | null;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: false,
    message: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    try {
      const response = await fetch('https://formspree.io/f/mqaqevev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: true,
          message: data.error || 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Network error. Please check your connection and try again.'
      });
    }
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="content-container">
          <h1>Get in Touch</h1>
          <p>We're here to answer your questions and provide the support you need</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="content-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out to us using any of the contact methods below. We're committed to responding to all inquiries promptly.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="icon-wrapper">
                    <FiMapPin />
                  </div>
                  <div className="info-content">
                    <h3>Headquarters</h3>
                    <p>Baltimore, MD 21217</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="icon-wrapper">
                    <FiPhone />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+1 443-808-0537</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="icon-wrapper">
                    <FiMail />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>info@madison-support.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="icon-wrapper">
                    <FiClock />
                  </div>
                  <div className="info-content">
                    <h3>Business Hours</h3>
                    <p>Monday-Friday: 9AM-5PM EST</p>
                  </div>
                </div>
              </div>
              
              <div className="social-connect">
                <h3>Connect With Us</h3>
                <a href="https://linkedin.com/company/madison-avenue-support-services" target="_blank" rel="noopener noreferrer" className="social-button">
                  <span>Find us on LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send a Message</h2>
              
              {formStatus.submitted ? (
                <div className="success-message">
                  <h3>Thank you for your message!</h3>
                  <p>We have received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mqaqevev">
                  {formStatus.error && (
                    <div className="error-message">
                      <p>{formStatus.message}</p>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your name"
                      required 
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="HUD VASH Services">HUD-VASH Services</option>
                      <option value="Vocational Services">Vocational Services</option>
                      <option value="Program Management">Program & Project Management</option>
                      <option value="Partnership Opportunities">Partnership Opportunities</option>
                      <option value="Employment">Employment</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange}
                      placeholder="How can we help you today?" 
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={formStatus.submitting}
                  >
                    <FiSend />
                    <span>{formStatus.submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="locations-section">
        <div className="content-container">
          <h2 className="section-title">Our Locations</h2>
          <div className="locations-grid">
            <div className="location-card">
              <div className="location-icon">
                <FiMapPin size={22} />
              </div>
              <h3>San Francisco, CA <span className="flag"><FiFlag /></span></h3>
              <p>Our presence in this iconic city reflects our dedication to being at the forefront of innovation.</p>
            </div>
            
            <div className="location-card">
              <div className="location-icon">
                <FiMapPin size={22} />
              </div>
              <h3>Baltimore, MD <span className="flag"><FiFlag /></span></h3>
              <p>Our company leverages the city's rich history and global influence to drive forward-thinking solutions.</p>
            </div>
            
            <div className="location-card">
              <div className="location-icon">
                <FiMapPin size={22} />
              </div>
              <h3>Los Angeles, CA <span className="flag"><FiFlag /></span></h3>
              <p>With its diverse talent pool and growing ecosystem, our presence ignites collaboration.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="content-container">
          <div className="cta-content">
            <h2>Join Our Team</h2>
            <p>At Madison Avenue Support Services, we're always looking for talented individuals who share our commitment to excellence and compassionate service.</p>
            <div className="cta-buttons">
              <a href="/careers" className="btn-primary">View Openings</a>
              <a href="mailto:careers@madison-support.com" className="btn-secondary">Email Your Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
