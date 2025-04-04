import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <footer className="text-white bg-dark w-100">
      {/* Section: Social media */}
      <section className="d-flex flex-column justify-content-center align-items-center p-4 bg-primary text-center">
        <div>
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="mt-2">
          <NavLink to="https://facebook.com" className="text-white mx-2">
            <FontAwesomeIcon icon={faFacebookF} />
          </NavLink>
          <NavLink to="https://twitter.com" className="text-white mx-2">
            <FontAwesomeIcon icon={faTwitter} />
          </NavLink>
          <NavLink to="https://www.google.com" className="text-white mx-2">
            <FontAwesomeIcon icon={faGoogle} />
          </NavLink>
          <NavLink to="https://instagram.com" className="text-white mx-2">
            <FontAwesomeIcon icon={faInstagram} />
          </NavLink>
        </div>
      </section>

      {/* Section: Links */}
      <section className="container text-center mt-5">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Airshine</h6>
            <hr className="mb-4 mt-0 mx-auto bg-primary border-0" style={{ height: "2px", width: "50%" }} />
            <p>Discover Airshine Tours and Travels, your gateway to exploring the vibrant culture and scenic beauty of Tamil Nadu.</p>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">Services</h6>
            <hr className="mb-4 mt-0 mx-auto bg-primary border-0" style={{ height: "2px", width: "50%" }} />
            <p><NavLink to="/flights" className="text-white">Flights</NavLink></p>
            <p><NavLink to="/hotels" className="text-white">Hotels</NavLink></p>
            <p><NavLink to="/visa" className="text-white">Visa</NavLink></p>
            <p><NavLink to="/insurance" className="text-white">Insurance</NavLink></p>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">About Us</h6>
            <hr className="mb-4 mt-0 mx-auto bg-primary border-0" style={{ height: "2px", width: "50%" }} />
            <p><NavLink to="/about" className="text-white">About Us</NavLink></p>
            <p><NavLink to="/faq" className="text-white">FAQ</NavLink></p>
            <p><NavLink to="/testimonials" className="text-white">Testimonials</NavLink></p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 mx-auto bg-primary border-0" style={{ height: "2px", width: "50%" }} />
            <p><NavLink to="/contact" className="text-white">Fill the Form</NavLink></p>
            <p>Trichy, Tamil Nadu.</p>
            <p>contact@airshineonline.com</p>
            <p>+919585557593</p>
          </div>
        </div>
      </section>

      {/* Section: Copyright */}
      <div className="text-center p-3 bg-dark w-100">
        &copy; {new Date().getFullYear()} Airshine. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
