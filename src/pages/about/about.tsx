import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="content-container">
          <h1>About Us</h1>
          <p>Excellence through Commitment</p>
        </div>
      </section>

      <section className="section company-intro">
        <div className="content-container">
          <div className="intro-content">
            <div className="company-overview">
              <p className="highlight-text">Madison Avenue Support Services is a Women, minority and family-owned Small Business with its corporate headquarters located in Baltimore MD. We are a federal contracting company specializing in providing several niche services such as Social Services, particularly for HUD VASH, Vocational Services, particularly providing expert witness services and leasing properties to government agencies as well as heavy equipment.</p>
              
              <p>We have extensive experience with industries. We develop and implement customized integrated solutions for large multimillion-dollar IDIQ contracts and provide a broad array of services to our clients.</p>
              
              <p>Additionally, we are highly regarded due to our quality services and our commitment to being best-in-class. We are especially proud of attracting and retaining staff for each contract. We do not spread our staff thin by having them work various contracts simultaneously.</p>
              
              <div className="motto-box">
                <p>The unofficial motto of MASS is <strong>"Failure is not an option"</strong>. Once we take on a project (contract), we successfully complete it because <strong>TINA (There is no alternative)</strong>.</p>
                <p className="official-motto">The official motto of MASS is <strong>Excellence through Commitment</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="content-container">
          <div className="vision-content">
            <h2>Vision Statement</h2>
            <p className="vision-statement">To be the trusted partner for federal agencies, driving operational excellence and empowering organizations to achieve their missions with integrity and innovation.</p>
          </div>
        </div>
      </section>

      <section className="section company-history">
        <div className="content-container">
          <div className="history-content">
            <h2>Our History & Mission</h2>
            <p>Established in 2017, Madison Avenue Support Services, Inc. (MASS) is dedicated to delivering compassionate, high-quality support services across the United States. As an SBA-certified Economically Disadvantaged Woman-Owned Small Business (EDWOSB), we specialize in providing innovative solutions for federal agencies in need of program and/or project support.</p>
            
            <p>Our expertise spans mental health services, advocacy, and specialized program management. In every project, we are committed to improving the lives of those we serve by combining our deep understanding of complex systems with a personal touch.</p>
            
            <p>At MASS, we believe in the power of collaboration and are proud to work with federal, state, and local agencies, as well as trusted partners, to create lasting positive change for individuals and communities in need.</p>
            
            <p>Whether we are providing clinical support for firefighters, managing transitional housing programs, or delivering program management expertise, our mission is clear: to deliver results with compassion, innovation, and a steadfast commitment to the people we serve.</p>
          </div>
        </div>
      </section>

      <section className="section naics-section">
        <div className="content-container">
          <div className="naics-content">
            <h2>NAICS Codes</h2>
            <p>MASS operates under several applicable NAICS codes, including:</p>
            <ul className="naics-list">
              <li><span className="naics-code">621330:</span> Offices of Mental Health Practitioners (except Physicians)</li>
              <li><span className="naics-code">624229:</span> Other Community Housing Services</li>
              <li><span className="naics-code">624190:</span> Other Individual and Family Services</li>
              <li><span className="naics-code">561110:</span> Office Administrative Services</li>
              <li><span className="naics-code">561990:</span> All Other Support Services</li>
              <li><span className="naics-code">541116:</span> Administrative Management and General Management Services</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section leadership-section">
        <div className="content-container">
          <div className="leadership-content">
            <h2>Corporate Team</h2>
            <p className="team-intro">The corporate team at Madison Avenue Support Services, Inc. under the leadership of founder and CEO Gloria Aderinokun, oversees all company operations, develops the company's vision, and performs executive tasks that determine the overall direction of the organization. M.A.S.S. Inc was founded in 2017.</p>
            
            <div className="leadership-profiles">
              <div className="profile-card">
                <div className="profile-header">
                  <h3>Gloria Aderinokun</h3>
                  <p className="profile-title">CEO</p>
                  <p className="profile-education">B.S and MBA in Business Administration</p>
                </div>
                <div className="profile-description">
                  <p>As president and CEO of Madison Avenue Support Services, Inc., Gloria manages client and subcontractor relationships, defines project scopes, and implements action plans. She is particularly involved in identifying and acquiring the appropriate resources needed for each client program that we manage, and oversees contract negotiations with those resources.</p>
                  <p>She specializes in management of complex client and subcontractor relationships, overseeing highly successful programs at M.A.S.S. Inc. for the Social Security Administration, and the Department of State, and the Veterans Administration.</p>
                </div>
              </div>
              
              <div className="profile-card">
                <div className="profile-header">
                  <h3>Fatima Disu Reich</h3>
                  <p className="profile-title">COO</p>
                  <p className="profile-education">Ph.D. from Howard University in Nutrition</p>
                </div>
                <div className="profile-description">
                  <p>As president and CEO of Madison Avenue Support Services, Inc., Gloria manages client and subcontractor relationships, defines project scopes, and implements action plans. She is particularly involved in identifying and acquiring the appropriate resources needed for each client program that we manage, and oversees contract negotiations with those resources.</p>
                  <p>She specializes in management of complex client and subcontractor relationships, overseeing highly successful programs at M.A.S.S. Inc. for the Social Security Administration, and the Department of State, and the Veterans Administration.</p>
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
            <p>Ready to experience excellence through commitment? Contact us today to discuss how we can support your agency's mission and goals.</p>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
