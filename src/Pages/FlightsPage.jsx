import flight1 from '../assets/images/services2/flight-1.jpg';
import flight2 from '../assets/images/services2/flight-2.jpg';
import ContactSection from '../Components/ContactSection';
import FormsSection from '../Components/FormsSection'

const FlightsPage = () => {
  return (
    <>
      <section className="py-5">
        <div className="container mt-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <div className="mb-4">
                <h1 className="h1 fw-bold text-start">Flight Booking Services</h1>
              </div>

              <div className="row mt-4 align-items-start">
                <div className="col-md-6">
                  <p className="mb-4">
                    Airshine provides a seamless flight booking service to ensure that you get the best deals on both domestic and international flights. Whether you’re flying for business or leisure, we offer a range of options to suit your travel needs.
                  </p>
                  <p>
                    Our flight experts work tirelessly to find you the best routes, timings, and prices to guarantee a hassle-free travel experience.
                  </p>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <img src={flight1} alt="Flight Booking Services" className="img-fluid rounded shadow-sm" />
                </div>
              </div>

              <div className="row mt-4 align-items-start">
                <div className="col-md-6 order-2 order-md-1 mt-4 mt-md-0">
                  <img src={flight2} alt="Flight Options" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <p className="mb-4">
                    Just enter your travel details including your preferred departure city, destination, and travel dates. We will provide real-time flight options with instant booking confirmations, allowing you to secure your flight within minutes.
                  </p>
                  <p>
                    For any assistance, feel free to contact us at{' '}
                    <a href="mailto:contact@airshineonline.in" className="text-primary text-decoration-underline">
                      contact@airshineonline.in
                    </a>{' '}
                    or reach out through WhatsApp. Our customer support team is always here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
      <FormsSection />
      <ContactSection />
    </>
  );
};

export default FlightsPage;
