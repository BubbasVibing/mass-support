import './gsaschedule.css';
import { useState, FormEvent, ChangeEvent } from 'react';
import { FiActivity, FiAlertCircle, FiBriefcase, FiList, FiCheck, FiDollarSign, FiCalendar, FiUser, FiTarget, FiCheck as FiCheckmark } from 'react-icons/fi';
import { BiBuildingHouse, BiAnalyse } from 'react-icons/bi';
import { HiOutlineDocumentReport, HiOutlinePresentationChartBar, HiOutlineUserGroup } from 'react-icons/hi';
import { FaRegHandshake } from 'react-icons/fa';

// Form input types
interface FormInputs {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

// Form status types
interface FormStatus {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
}

const GSASchedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  const [formInputs, setFormInputs] = useState<FormInputs>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.persist();
    setFormInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setFormStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      const res = await fetch('https://formspree.io/f/mqaqevev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInputs)
      });

      const data = await res.json();
      
      if (res.status === 200) {
        setFormStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Thank you for contacting us! We will get back to you soon.' }
        });
        setFormInputs({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        setFormStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || 'Something went wrong. Please try again later.' }
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Network error. Please check your connection and try again.' }
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form state when closing modal
    setFormStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  return (
    <div className="gsaschedule-page">
      {/* Hero Section */}
      <section className="gsa-hero">
        <div className="content-container">
          <div className="gsa-hero-content">
            <h1><FiActivity className="section-icon" /> MASS BD is LIVE: Start Winning on Your GSA Schedule</h1>
            <p className="gsa-hero-subtitle">You did the hard part — now let us help you win work.</p>
          </div>
        </div>
      </section>

      {/* Reality Section */}
      <section className="gsa-section reality-section">
        <div className="content-container">
          <h2><FiAlertCircle className="section-icon" /> The Reality</h2>
          <div className="reality-stats">
            <div className="stat-card">
              <h3>60%</h3>
              <p>of GSA Schedule holders have $0 in sales or haven't met the $25K minimum</p>
            </div>
            <div className="stat-card">
              <p>Most small businesses don't realize how much strategy and outreach it takes to succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet MASS BD Section */}
      <section className="gsa-section mass-bd-section">
        <div className="content-container">
          <h2><FaRegHandshake className="section-icon" /> Meet MASS BD</h2>
          
          <div className="mass-bd-intro">
            <div className="mass-bd-text">
              <p>At Madison Avenue Support Services (MASS), we've created a business development service designed specifically for small businesses on the GSA Schedule. Our mission is to transform your Schedule placement into tangible revenue through strategic government contracting expertise.</p>
              <p>Our comprehensive approach combines industry knowledge, targeted outreach, and relationship building to deliver measurable results for your business.</p>
            </div>
            <div className="mass-bd-image">
              <img src="/image/governmentimage.jpg" alt="US Government Building" className="govt-image" />
            </div>
          </div>
          
          <div className="services-features">
            <div className="services-header">
              <h3>Our Professional Services</h3>
              <p>A systematic approach to federal business development</p>
            </div>
            
            <div className="services-grid">
              <div className="service-feature">
                <div className="feature-icon-container">
                  <FiTarget className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h4>Strategic Pipeline Development</h4>
                  <p>Custom pipeline creation based on your NAICS codes, PSC, and business objectives</p>
                </div>
              </div>
              
              <div className="service-feature">
                <div className="feature-icon-container">
                  <BiAnalyse className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h4>Opportunity Analysis</h4>
                  <p>Professional bid/no-bid analysis to optimize your pursuit resources</p>
                </div>
              </div>
              
              <div className="service-feature">
                <div className="feature-icon-container">
                  <HiOutlinePresentationChartBar className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h4>Agency Representation</h4>
                  <p>Dedicated promotion of your services and attendance at agency industry days</p>
                </div>
              </div>
              
              <div className="service-feature">
                <div className="feature-icon-container">
                  <HiOutlineDocumentReport className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h4>Schedule Opportunity Identification</h4>
                  <p>SAM.gov opportunity evaluation to identify contracts suitable for Schedule conversion</p>
                </div>
              </div>
              
              <div className="service-feature">
                <div className="feature-icon-container">
                  <HiOutlineUserGroup className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h4>RFI Development</h4>
                  <p>Professional responses to RFIs with strategic use of small business set-aside advantages</p>
                </div>
              </div>
              
              <div className="service-feature">
                <div className="feature-icon-container">
                  <FiBriefcase className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h4>Contracting Officer Outreach</h4>
                  <p>Targeted research and relationship building with officers who procure your services</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="delivery-platform">
            <div className="platform-icon">
              <BiBuildingHouse className="platform-feature-icon" />
            </div>
            <div className="platform-details">
              <h4>Collaborative Delivery Platform</h4>
              <p>All services are delivered through a secure, private SharePoint environment shared between your team and your dedicated BD strategist, ensuring transparency and accountability throughout our partnership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="gsa-section pricing-section">
        <div className="content-container">
          <h2><FiDollarSign className="section-icon" /> Affordable, Transparent Pricing</h2>
          
          <div className="pricing-cards">
            <div className="pricing-card highlight">
              <div className="price-tag">
                <span className="price-label">First client:</span>
                <span className="price">$500</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            
            <div className="pricing-card">
              <div className="price-tag">
                <span className="price-label">Standard rate:</span>
                <span className="price">$1,000</span>
                <span className="price-period">/month</span>
              </div>
            </div>
          </div>
          
          <p className="pricing-note">When demand exceeds capacity, prices will rise — but your rate stays locked in for life.</p>
          
          <div className="testimonial">
            <p>"I built this to be accessible. My goal isn't to profit from your success — it's to help you achieve it."</p>
            <p className="testimonial-author">– Your Name, Founder of MASS</p>
          </div>
        </div>
      </section>

      {/* Right Fit Section */}
      <section className="gsa-section right-fit-section">
        <div className="content-container">
          <h2><FiCheck className="section-icon" /> Is MASS BD Right for You?</h2>
          
          <div className="fit-criteria">
            <div className="criteria-card">
              <FiList className="criteria-icon" />
              <p>You're on the GSA Schedule but not seeing results</p>
            </div>
            <div className="criteria-card">
              <FiDollarSign className="criteria-icon" />
              <p>You want affordable, reliable federal BD support</p>
            </div>
            <div className="criteria-card">
              <FiActivity className="criteria-icon" />
              <p>You're ready to grow and just need the right partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gsa-section cta-section">
        <div className="content-container">
          <h2><FiCalendar className="section-icon" /> Book Your Free 15-Minute Strategy Call</h2>
          <p>Let's talk about your goals and see if MASS BD is a fit for your business.</p>
          
          <div className="cta-buttons">
            <button 
              className="btn-primary cta-button"
              onClick={() => setIsModalOpen(true)}
            >
              Schedule a Free Call
            </button>
            <p className="email-cta">Or email us directly at <a href="mailto:info@madison-support.com">info@madison-support.com</a></p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            
            {formStatus.submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <FiCheckmark />
                </div>
                <h2>Thank You!</h2>
                <p>{formStatus.info.msg}</p>
                <button 
                  className="btn-primary cta-button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2><FiUser className="modal-icon" /> Schedule Your Free Strategy Call</h2>
                {formStatus.info.error && (
                  <div className="form-error-message">
                    <p>{formStatus.info.msg}</p>
                  </div>
                )}
                <form className="contact-form" onSubmit={handleOnSubmit} method="POST" action="https://formspree.io/f/mqaqevev">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formInputs.name}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formInputs.email}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formInputs.phone}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      required 
                      value={formInputs.company}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Tell us about your business</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formInputs.message}
                      onChange={handleOnChange}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GSASchedule;
