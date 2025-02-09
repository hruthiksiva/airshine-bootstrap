import hotel1 from '../assets/images/services2/hotel-1.jpg';
import hotel2 from '../assets/images/services2/hotel-2.jpg';
import ContactSection from '../Components/ContactSection';
import FormsSection from '../Components/FormsSection';

const HotelsPage = () => {
  return (
    <>
      <section className="py-5">
        <div className="container mt-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <div className="mb-4">
                <h1 className="h1 fw-bold text-start">Hotel Booking Services</h1>
              </div>

              <div className="row mt-4 align-items-start">
                <div className="col-md-6">
                  <p className="mb-4">
                    Airshine offers an exclusive range of luxury hotel bookings to elevate your travel experience. From budget to luxury stays, we cater to all types of travelers looking for comfort and convenience.
                  </p>
                  <p>
                    Our hotel booking experts are committed to ensuring that you get the best deals at your preferred destination, whether you're traveling for business or leisure.
                  </p>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <img src={hotel1} alt="Hotel Booking Services" className="img-fluid rounded shadow-sm" />
                </div>
              </div>

              <div className="row mt-4 align-items-start">
                <div className="col-md-6 order-2 order-md-1 mt-4 mt-md-0">
                  <img src={hotel2} alt="Hotel Rooms" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <p className="mb-4">
                    Simply choose your travel dates, location, and room preference, and we’ll handle the rest. We provide real-time availability and instant booking confirmations to make your travel experience seamless.
                  </p>
                  <p>
                    Our customer support team is available 24/7 to assist you with any queries. Reach us via email at{' '}
                    <a href="mailto:contact@airshineonline.in" className="text-primary text-decoration-underline">
                      contact@airshineonline.in
                    </a>{' '}
                    or through our dedicated WhatsApp support.
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

export default HotelsPage;
