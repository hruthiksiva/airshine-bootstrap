import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <>
      <footer className="text-white bg-dark">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center align-items-center p-3 bg-primary">
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
                <h6 className="text-uppercase fw-bold">Airshine</h6>
                <hr className="mb-4 mt-0 w-50 mx-auto bg-primary border-0" style={{ height: "2px" }} />
                <p className="text-left">
                  Discover Airshine Tours and Travels, your gateway to exploring the vibrant
                  culture and scenic beauty of Tamil Nadu. Specializing in
                  personalized tours, we offer unique experiences.
                </p>
              </div>

              {/* SubSection: Services */}
              <div className="col-md-2 mb-4">
                <h6 className="text-uppercase fw-bold">Services</h6>
                <hr className="mb-4 mt-0 w-50 mx-auto bg-primary border-0" style={{ height: "2px" }} />
                <p><NavLink to="/flights" className="text-white">Flights</NavLink></p>
                <p><NavLink to="/hotels" className="text-white">Hotels</NavLink></p>
                <p><NavLink to="/visa" className="text-white">Visa</NavLink></p>
                <p><NavLink to="/insurance" className="text-white">Insurance</NavLink></p>
                <p><NavLink to="/domestic" className="text-white">Domestic</NavLink></p>
                <p><NavLink to="/international" className="text-white">International</NavLink></p>
              </div>

              {/* SubSection: About Us */}
              <div className="col-md-2 mb-4">
                <h6 className="text-uppercase fw-bold">About Us</h6>
                <hr className="mb-4 mt-0 w-50 mx-auto bg-primary border-0" style={{ height: "2px" }} />
                <p><NavLink to="/" className="text-white">Home</NavLink></p>
                <p><NavLink to="/about" className="text-white">About Us</NavLink></p>
                <p><NavLink to="/faq" className="text-white">FAQ</NavLink></p>
                <p><NavLink to="/ourservices" className="text-white">Our Services</NavLink></p>
                <p><NavLink to="/testimonials" className="text-white">Testimonials</NavLink></p>
              </div>

              {/* SubSection: Contact */}
              <div className="col-md-3 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 w-50 mx-auto bg-primary border-0" style={{ height: "2px" }} />
                <p><NavLink to="/contact" className="text-white">Contact Us</NavLink></p>
                <p><i className="fas fa-home me-2"></i> Trichy, Tamil Nadu.</p>
                <p><i className="fas fa-envelope me-2"></i> contact@airshineonline.com</p>
                <p><i className="fas fa-phone me-2"></i> +919585557593</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Copyright */}
        <div className="text-center p-3 bg-dark">
          © {new Date().getFullYear()} Airshine. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
