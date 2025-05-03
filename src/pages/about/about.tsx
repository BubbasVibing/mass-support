import { useEffect, useRef } from 'react';
import { FiHome, FiStar, FiUsers } from 'react-icons/fi';
import './about.css';

const About = () => {
  const sectionRefs = {
    intro: useRef(null),
    vision: useRef(null),
    history: useRef(null),
    naics: useRef(null),
    leadership: useRef(null),
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(sectionRefs).forEach(
      (ref) => ref.current && observer.observe(ref.current)
    );

    return () => {
      Object.values(sectionRefs).forEach(
        (ref) => ref.current && observer.unobserve(ref.current)
      );
    };
  }, []);

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="header-overlay"></div>
        <div className="content-container">
          <h1 className="animate-title">About Us</h1>
          <p className="animate-subtitle">Excellence through Commitment</p>
        </div>
      </section>

      <section className="section company-intro" ref={sectionRefs.intro}>
        <div className="content-container">
          <div className="intro-content">
            <div className="company-overview">
              <h2 className="section-title">Our Company</h2>
              <p className="highlight-text">Madison Avenue Support Services is a Women, minority and family-owned Small Business with its corporate headquarters located in Baltimore MD.</p>
              
              <div className="key-points">
                <div className="key-point">
                  <span className="key-icon"><FiHome /></span>
                  <div className="key-content">
                    <h4>Federal Contracting</h4>
                    <p>Specialized in HUD VASH, Vocational Services, and expert witness services</p>
                  </div>
                </div>
                
                <div className="key-point">
                  <span className="key-icon"><FiStar /></span>
                  <div className="key-content">
                    <h4>Quality Solutions</h4>
                    <p>Custom solutions for multimillion-dollar IDIQ contracts</p>
                  </div>
                </div>
                
                <div className="key-point">
                  <span className="key-icon"><FiUsers /></span>
                  <div className="key-content">
                    <h4>Dedicated Teams</h4>
                    <p>Staff solely focused on your project for maximum quality</p>
                  </div>
                </div>
              </div>
              
              <div className="motto-box">
                <div className="motto-icon">
                  <img src="/images/commitment-icon.svg" alt="Commitment Icon" />
                </div>
                <div className="motto-content">
                  <p>Our unofficial motto: <strong>"Failure is not an option"</strong></p>
                  <p className="official-motto">Our official motto: <strong>Excellence through Commitment</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-section" ref={sectionRefs.vision}>
        <div className="content-container">
          <div className="vision-content">
            <h2>Vision Statement</h2>
            <div className="vision-divider"></div>
            <p className="vision-statement">To be the trusted partner for federal agencies, driving operational excellence and empowering organizations to achieve their missions with integrity and innovation.</p>
          </div>
        </div>
      </section>

      <section className="section company-history" ref={sectionRefs.history}>
        <div className="content-container">
          <div className="history-content">
            <div className="history-text">
              <h2>Our History & Mission</h2>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">2017</div>
                  <div className="timeline-content">
                    <h4>Company Founded</h4>
                    <p>MASS established as an SBA-certified Economically Disadvantaged Woman-Owned Small Business (EDWOSB)</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker">2019</div>
                  <div className="timeline-content">
                    <h4>Federal Partnerships</h4>
                    <p>Expanded services to include specialized program management for federal agencies</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker">Today</div>
                  <div className="timeline-content">
                    <h4>Nationwide Impact</h4>
                    <p>Delivering compassionate, high-quality support services across the United States</p>
                  </div>
                </div>
              </div>
              
              <div className="mission-statement">
                <h3>Our Mission</h3>
                <p>To deliver results with compassion, innovation, and a steadfast commitment to the people we serve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section naics-section" ref={sectionRefs.naics}>
        <div className="content-container">
          <div className="naics-content">
            <h2>NAICS Codes</h2>
            <p className="naics-intro">MASS operates under several applicable NAICS codes</p>
            <div className="naics-cards">
              <div className="naics-card">
                <div className="naics-code">621330</div>
                <div className="naics-description">Offices of Mental Health Practitioners</div>
              </div>
              <div className="naics-card">
                <div className="naics-code">624229</div>
                <div className="naics-description">Other Community Housing Services</div>
              </div>
              <div className="naics-card">
                <div className="naics-code">624190</div>
                <div className="naics-description">Other Individual and Family Services</div>
              </div>
              <div className="naics-card">
                <div className="naics-code">561110</div>
                <div className="naics-description">Office Administrative Services</div>
              </div>
              <div className="naics-card">
                <div className="naics-code">561990</div>
                <div className="naics-description">All Other Support Services</div>
              </div>
              <div className="naics-card">
                <div className="naics-code">541116</div>
                <div className="naics-description">Administrative Management Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section leadership-section" ref={sectionRefs.leadership}>
        <div className="content-container">
          <div className="leadership-content">
            <h2>Leadership Team</h2>
            <p className="team-intro">Our leadership team drives the mission and vision of Madison Avenue Support Services</p>
            
            <div className="leadership-profiles">
              <div className="profile-card">
                <div className="profile-header">
                  <h3>Gloria Aderinokun</h3>
                  <p className="profile-title">CEO</p>
                  <p className="profile-education">B.S and MBA in Business Administration</p>
                </div>
                <div className="profile-description">
                  <ul className="profile-bullets">
                    <li>Manages client and subcontractor relationships</li>
                    <li>Implements effective action plans</li>
                    <li>Oversees complex client relationships with SSA, DOS, and VA</li>
                  </ul>
                </div>
              </div>
              
              <div className="profile-card">
                <div className="profile-header">
                  <h3>Fatima Disu</h3>
                  <p className="profile-title">COO</p>
                  <p className="profile-education">MBA and MS in Nutrition</p>
                </div>
                <div className="profile-description">
                  <ul className="profile-bullets">
                    <li>Oversees administrative and operational functions</li>
                    <li>Specializes in streamlining operational processes</li>
                    <li>Ensures exceptional service delivery to clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="content-container">
          <div className="cta-content">
            <h2>Partner with MASS</h2>
            <p>Ready to experience excellence through commitment?</p>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
