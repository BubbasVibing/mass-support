import './programmanagement.css';

const ProgramManagement = () => {
  return (
    <div className="program-management-page">
      <section className="page-header">
        <div className="content-container">
          <h1>Program & Project Management</h1>
          <p>Streamlining Operations for Success</p>
        </div>
      </section>

      <section className="section service-details">
        <div className="content-container">
          <div className="service-info">
            <div className="intro-section">
              <p>At Madison Avenue Support Services, Inc. (MASS), we specialize in providing Administrative Management and General Management Services, with a focus on program management and project management to federal agencies and organizations. With a commitment to excellence, we help streamline operations, enhance productivity, and drive organizational success.</p>
            </div>
            
            <div className="why-choose-section">
              <h2>Why Choose MASS?</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>Customized Solutions</h3>
                  <p>We understand that every organization is unique. Our tailored services address your specific administrative and management challenges, ensuring optimal efficiency.</p>
                </div>
                
                <div className="benefit-card">
                  <h3>Experienced Professionals</h3>
                  <p>Our team consists of seasoned professionals with extensive experience in managing complex administrative functions and general management processes.</p>
                </div>
                
                <div className="benefit-card">
                  <h3>Proven Track Record</h3>
                  <p>We have successfully partnered with various federal agencies, delivering effective management solutions that result in improved operational performance.</p>
                </div>
              </div>
            </div>
            
            <div className="services-section">
              <h2>Our Services Include:</h2>
              <div className="services-list">
                <div className="service-item">
                  <h3>Administrative Management</h3>
                  <p>We provide services that enhance the effectiveness of your administrative operations, including policy development, process optimization, and resource allocation.</p>
                </div>
                
                <div className="service-item">
                  <h3>Project Management</h3>
                  <p>We offer expert project management services to ensure that your initiatives are executed on time, within budget, and meet organizational objectives.</p>
                </div>
                
                <div className="service-item">
                  <h3>Change Management Consulting</h3>
                  <p>Supporting federal agencies in managing organizational change, including transitions to new technologies or processes, to ensure smooth implementation and staff buy-in.</p>
                </div>
                
                <div className="service-item">
                  <h3>Administrative Coordination Services</h3>
                  <p>Providing administrative support, such as scheduling, meeting coordination, and documentation management, to streamline day-to-day operations.</p>
                </div>
              </div>
            </div>
            
            <div className="cta-box">
              <h3>Ready to streamline your operations?</h3>
              <p>Contact us today to learn how our program and project management services can help your organization achieve its goals efficiently and effectively.</p>
              <a href="/contact" className="btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramManagement;
