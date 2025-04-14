import './hudvash.css';

const HudVash = () => {
  return (
    <div className="hudvash-page">
      <section className="page-header">
        <div className="content-container">
          <h1>HUD-VASH Program Support</h1>
          <p>Connecting veterans with housing vouchers and supportive services</p>
        </div>
      </section>

      <section className="section service-details">
        <div className="content-container">
          <div className="service-info">
            <h2>Our Mission</h2>
            <p className="mission-statement">To provide innovative and compassionate support services to vulnerable populations, including veterans and special needs communities, by delivering high-quality case management, behavioral health, and housing solutions. We are committed to enhancing the lives of those we serve through expertise, advocacy, and tailored support.</p>
            
            <div className="program-overview">
              <h2>About HUD-VASH</h2>
              <p>The HUD-VASH program is a partnership between the U.S. Department of Housing and Urban Development (HUD) and the Department of Veterans Affairs (VA) that helps homeless veterans secure stable housing.</p>
              
              <div className="program-details">
                <h3>How HUD-VASH Works</h3>
                <p>HUD provides housing vouchers that cover a portion of rent in privately owned housing, with veterans paying the rest based on their income. VA offers supportive services, such as case management, healthcare, and counseling, to help veterans maintain housing stability and address challenges like mental health, substance abuse, or employment issues.</p>
                
                <p>Madison Avenue Support Services, Inc. (MASS) plays a vital role in supporting this program by offering specialized case management and behavioral health services, especially in California where they have a strong presence. MASS helps veterans navigate the complexities of the program, ensuring they receive the necessary resources and advocacy to remain stably housed while also addressing their unique needs. This comprehensive approach allows veterans to rebuild their lives with both housing and personalized support.</p>
              </div>
            </div>
            
            <div className="our-approach">
              <h2>Our Approach</h2>
              <p>With a strong track record of success in programs like HUD-VASH, we focus on helping homeless veterans secure stable housing while offering comprehensive support services. Our expertise extends to a wide range of areas, including mental health services, beneficiary advocacy, and specialized program management. In every project, we are committed to improving the lives of those we serve by combining our deep understanding of complex systems with a personal touch.</p>
            </div>
            
            <div className="staff-structure">
              <h2>Staff Structure</h2>
              
              <div className="team-card">
                <h3>Housing Team</h3>
                <ul>
                  <li>Develops relationships with property providers to source new units</li>
                  <li>Maintains existing housing units</li>
                </ul>
              </div>
              
              <div className="team-card">
                <h3>Tenancy Support Team</h3>
                <ul>
                  <li>Provides housing retention services to participants</li>
                  <li>Facilitates move-in process</li>
                  <li>Liaises between the participant, case manager, and property manager to resolve all tenant-specific, housing-related issues</li>
                </ul>
              </div>
            </div>
            
            <div className="cta-box">
              <h3>Join Our Mission to Support Veterans</h3>
              <p>If you're interested in helping us support our brave veterans, we encourage you to reach out. Please send your resume and/or contact information to our email, and let's work together to make a difference.</p>
              <a href="/contact" className="btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HudVash;
