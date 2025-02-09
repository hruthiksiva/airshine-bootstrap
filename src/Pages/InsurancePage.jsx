import insurance1 from '../assets/images/services2/insurance-1.jpg';
import ContactSection from '../Components/ContactSection';
import FormsSection from '../Components/FormsSection';
// import insurance2 from '../assets/images/insurance-2.jpg'

const InsurancePage = () => {
  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="card shadow">
            <div className="card-body">
              <div className="mb-4">
                <h3 className="h3 text-left fw-bold">Travel Insurance Services</h3>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col-md-6">
                  <img
                    src={insurance1}
                    alt="Insurance Providers"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <p className="mb-3">
                    Be it a trip with family or friends, safety and assurance are always at the back
                    of our heads. It might be the sudden need for a medical emergency abroad or the
                    loss of valuable items in your luggage.
                  </p>
                  <p>
                    For that very reason, we have partnered with the best insurance providers in
                    town to offer you optimal travel insurance policies to safeguard you from losses
                    at affordable rates so that you can have a peaceful trip without worry.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p>
                  We are just a query away from getting your issues resolved. Please do inbox us at{' '}
                  <a
                    href="mailto:contact@airshineonline.com"
                    className="text-primary text-decoration-underline"
                  >
                    contact@airshineonline.com
                  </a>{' '}
                  or contact us via WhatsApp to voice away your concerns!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            
          </div>
        </div>
      </section>
      <FormsSection />
            <ContactSection />
    </>
  );
};

export default InsurancePage;
