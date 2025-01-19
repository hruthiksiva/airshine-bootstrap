import service1 from "../assets/images/services/service-1.jpg"
import service2 from "../assets/images/services/service-2.jpg"
import service3 from "../assets/images/services/service-3.jpg"
import service4 from "../assets/images/services/service-4.jpg"
import service5 from "../assets/images/services/service-5.jpg"
import service6 from "../assets/images/services/service-6.jpg"

const OurServices = () => {
    return (
      <>
        <div className="container-fluid px-0 ">
          <section className="hero-section bg-light">
            <div
                  className="hero-section text-white text-center d-flex flex-column justify-content-center align-items-center position-relative"
                  style={{
                    backgroundImage: `url(${service1})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '90vh',
                  }}
                >
                  <div
                    className="overlay position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                  ></div>
            
                  <div className="z-1">
                    <h1 className="display-3 fw-bold">Services Principle</h1>
                    <p className="fs-4">Your Journey Starts Here</p>
                  </div>
            
                  <div
                    className="search-box position-absolute bottom-0 start-50 translate-middle-x w-100 p-4 bg-white rounded shadow-lg"
                    style={{ maxWidth: '1100px', marginBottom: '50px' }}
                  >
                    <form className="row g-4 align-items-center">
                      <div className="col-md-3">
                        <label htmlFor="destination" className="form-label fw-bold text-secondary">
                          Location
                        </label>
                        <select
                          id="destination"
                          className="form-select form-control-lg"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Choose your destination
                          </option>
                          <option value="paris">Paris</option>
                          <option value="dubai">Dubai</option>
                          <option value="maldives">Maldives</option>
                          <option value="tokyo">Tokyo</option>
                        </select>
                      </div>
            
                      <div className="col-md-2">
                        <label htmlFor="fromDate" className="form-label fw-bold text-secondary">
                          From Date
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="fromDate"
                          required
                        />
                      </div>
            
                      <div className="col-md-2">
                        <label htmlFor="toDate" className="form-label fw-bold text-secondary">
                          To Date
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="toDate"
                          required
                        />
                      </div>
            
                      <div className="col-md-2">
                        <label htmlFor="people" className="form-label fw-bold text-secondary">
                          Persons
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="people"
                          placeholder="1"
                          min="1"
                          required
                        />
                      </div>
            
                      <div className="col-md-3 d-grid">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Consult
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
          </section>
  
          <section className="hero-section py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 className="h4 fw-semibold">Inbound and Outbound Tours</h2>
                  <p className="mt-2">Time to cross out your dream destinations off your bucket list!</p>
                  <ul className="list-unstyled ms-3">
                    <li>International Tours</li>
                    <li>Domestic Tours</li>
                    <li>Local Tours</li>
                  </ul>
                  <p className="mt-3">
                    Book Domestic & International flights that best suit your interest. Bag exciting offers and deals. We also cover other modes of transportation like Flights, Ships, Trains, Buses, etc.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src={service1} alt="Inbound and Outbound Tours" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </section>
  
          <section className="hero-section bg-light py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 order-md-1">
                  <img src={service2} alt="Tour Packages" className="img-fluid rounded" />
                </div>
                <div className="col-md-6 order-md-2">
                  <h2 className="h4 fw-semibold">Tour Packages</h2>
                  <ul className="list-unstyled ms-3">
                    <li>Student Tour Packages</li>
                    <li>Family Tour Packages</li>
                    <li>Group Tour Packages</li>
                    <li>Pilgrimage Tour Packages</li>
                    <li>Honeymoon Tour Packages</li>
                  </ul>
                  <p className="mt-3">
                    Don't worry about numbers. Airshine has successfully orchestrated trips with groups of more than 200 passengers. Get onboard and have a delightful journey.
                  </p>
                </div>
              </div>
            </div>
          </section>
  
          <section className="hero-section py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 className="h4 fw-semibold">Hospitality Services</h2>
                  <ul className="list-unstyled ms-3">
                    <li>Hotel Bookings</li>
                    <li>Meal Deals</li>
                    <li>Activities Planning</li>
                    <li>Tour Guides</li>
                  </ul>
                  <p className="mt-3">
                    Yummy food, cozy beds, a stunning pool, and adrenaline-pumping activities. Sounds good? You can get all that and more using our hospitality services.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src={service3} alt="Hospitality Services" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </section>
  
          <section className="hero-section bg-light py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 order-md-1">
                  <img src={service4} alt="Professional Services" className="img-fluid rounded" />
                </div>
                <div className="col-md-6 order-md-2">
                  <h2 className="h4 fw-semibold">Professional Services</h2>
                  <ul className="list-unstyled ms-3">
                    <li>Travel Consultation</li>
                    <li>Travel Planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
  
          <section className="hero-section py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 className="h4 fw-semibold">Ancillary Services</h2>
                  <p className="mt-2">
                    You don't have to worry anymore about the verification of your travel documents & travel insurance. We can take care of that through our ancillary services.
                  </p>
                  <ul className="list-unstyled ms-3">
                    <li>Passports New Issue/Renewal</li>
                  </ul>
                  <p className="mt-3">
                    We are just a query away from getting your issues resolved. Please do inbox us at <a href="mailto:email@example.com" className="text-primary text-decoration-underline">email@example.com</a>.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src={service5} alt="Ancillary Services" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </section>
  
          <section className="hero-section bg-light py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 order-md-1">
                  <img src={service6} alt="MICE" className="img-fluid rounded" />
                </div>
                <div className="col-md-6 order-md-2">
                  <h2 className="h4 fw-semibold">MICE</h2>
                  <p><strong>M</strong> – Meeting</p>
                  <p><strong>I</strong> – Incentives</p>
                  <p><strong>C</strong> – Conferences/Convention</p>
                  <p><strong>E</strong> – Education/Exhibition</p>
                  <p className="mt-3">
                    Travel arrangements will be made by our office for all kinds of MICE Tourism, including Air Tickets, Visa Process, Airport Transfers, and Hotel Bookings.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  };
  
  export default OurServices;
  