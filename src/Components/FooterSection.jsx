import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <>
      <footer className="text-white" style={{ backgroundColor: '#343A40' }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-center align-items-center p-3" style={{ backgroundColor: '#0056B3' }}>
          {/* Left */}
          <div className="me-3">
            <span>Get connected with us on social networks:</span>
          </div>

          {/* Right */}
          <div>
            <NavLink to="https://facebook.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faFacebookF} />
            </NavLink>
            <NavLink to="https://twitter.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
            <NavLink to="https://google.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faGoogle} />
            </NavLink>
            <NavLink to="https://instagram.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
          </div>
        </section>

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row">
              {/* SubSection: Description */}
              <div className="col-md-3 mb-4">
                <h6 className="text-uppercase fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Airshine</h6>
                <hr className="mb-4 mt-0 w-50 mx-auto" style={{ height: "2px", backgroundColor: '#0056B3', border: 'none' }} />
                <p className="text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Discover Airshine Tours and Travels, your gateway to exploring the vibrant
                  culture and scenic beauty of Tamil Nadu. Specializing in
                  personalized tours, we offer unique experiences.
                </p>
              </div>

              {/* SubSection: Services */}
              <div className="col-md-2 mb-4">
                <h6 className="text-uppercase fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Services</h6>
                <hr className="mb-4 mt-0 w-50 mx-auto" style={{ height: "2px", backgroundColor: '#0056B3', border: 'none' }} />
                <p><NavLink to="/flights" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Flights</NavLink></p>
                <p><NavLink to="/hotels" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Hotels</NavLink></p>
                <p><NavLink to="/visa" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Visa</NavLink></p>
                <p><NavLink to="/insurance" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Insurance</NavLink></p>
                <p><NavLink to="/domestic" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Domestic</NavLink></p>
                <p><NavLink to="/international" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>International</NavLink></p>
              </div>

              {/* SubSection: About Us */}
              <div className="col-md-2 mb-4">
                <h6 className="text-uppercase fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>About Us</h6>
                <hr className="mb-4 mt-0 w-50 mx-auto" style={{ height: "2px", backgroundColor: '#0056B3', border: 'none' }} />
                <p><NavLink to="/" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Home</NavLink></p>
                <p><NavLink to="/about" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>About Us</NavLink></p>
                <p><NavLink to="/faq" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>FAQ</NavLink></p>
                <p><NavLink to="/ourservices" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Our Services</NavLink></p>
                <p><NavLink to="/testimonials" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Testimonials</NavLink></p>
              </div>

              {/* SubSection: Contact */}
              <div className="col-md-3 mb-4">
                <h6 className="text-uppercase fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Contact</h6>
                <hr className="mb-4 mt-0 w-50 mx-auto" style={{ height: "2px", backgroundColor: '#0056B3', border: 'none' }} />
                <p><NavLink to="/contact" className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Fill the Form</NavLink></p>
                <p><i className="fas fa-home me-2"></i> Trichy, Tamil Nadu.</p>
                <p><i className="fas fa-envelope me-2"></i> contact@airshineonline.com</p>
                <p><i className="fas fa-phone me-2"></i> +919585557593</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: '#343A40' }}>
          © {new Date().getFullYear()} Airshine. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default FooterSection;