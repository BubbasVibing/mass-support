import './vocationalservices.css';

const VocationalServices = () => {
  return (
    <div className="vocational-services-page">
      <section className="page-header">
        <div className="content-container">
          <h1>Vocational Expert Witness Services</h1>
          <p>Supporting Social Security Administration disability hearings</p>
        </div>
      </section>

      <section className="section service-details">
        <div className="content-container">
          <div className="service-info">
            <div className="main-description">
              <p>M.A.S.S. Inc provides Expert Vocational Expert Witness Services to The Social Security Administration during Social Security disability hearings.</p>
            </div>
            
            <div className="service-description">
              <h2>Our Role in Disability Hearings</h2>
              <p>Social Security uses Vocational Experts (VEs) to provide evidence at hearings before an administrative law judge (ALJ). VEs provide services for SSA under a BPA to provide expert witness services for the Office of Hearings Operations (OHO).</p>
              <p>As a VE, you will provide impartial expert opinion evidence that an ALJ considers when making a decision about disability. You will review the provided exhibits prior to the scheduled hearing. You will usually testify in person at a hearing, although you may be asked to testify by video teleconferencing (VTC) or by telephone, and sometimes you may provide opinions in writing by answering written questions called interrogatories.</p>
            </div>
            
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              
              <div className="faq-item">
                <h3>Is a vocational expert an agent of Social Security Administration?</h3>
                <div className="faq-answer">
                  <p>A vocational expert is not an agent of the Social Security Administration. As an independent party, vocational experts are to remain completely objective and impartial in expressing their opinions.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <h3>What does a VE do for SSA?</h3>
                <div className="faq-answer">
                  <p>VEs provide services for SSA under a BPA to provide expert witness services for the Office of Hearings Operations (OHO). As a VE, you will provide impartial expert opinion evidence that an ALJ considers when making a decision about disability. You will review the provided exhibits prior to the scheduled hearing.</p>
                </div>
              </div>
            </div>
            
            <div className="expert-services">
              <h2>Our Expert Services Include</h2>
              <ul className="services-list">
                <li>
                  <span className="service-icon"></span>
                  <div>
                    <h4>Hearing Testimony</h4>
                    <p>Professional testimony at disability hearings before Administrative Law Judges</p>
                  </div>
                </li>
                <li>
                  <span className="service-icon"></span>
                  <div>
                    <h4>Case Review</h4>
                    <p>Comprehensive review of case exhibits prior to scheduled hearings</p>
                  </div>
                </li>
                <li>
                  <span className="service-icon"></span>
                  <div>
                    <h4>Remote Testimony</h4>
                    <p>Testimony via video teleconferencing or telephone when in-person appearance isn't possible</p>
                  </div>
                </li>
                <li>
                  <span className="service-icon"></span>
                  <div>
                    <h4>Written Opinions</h4>
                    <p>Response to written interrogatories with professional vocational assessments</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="cta-box">
              <h3>Need Vocational Expert Services?</h3>
              <p>Contact us to learn more about our vocational expert witness services for Social Security disability hearings.</p>
              <a href="/contact" className="btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VocationalServices;
