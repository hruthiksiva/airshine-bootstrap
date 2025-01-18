import visa1 from '../assets/images/services2/visa-1.jpg';
import visa2 from '../assets/images/services2/visa-2.jpg';
import ContactSection from '../Components/ContactSection';
import FormsSection from '../Components/FormsSection';

const VisaPage = () => {
  return (
    <>
      <section className="py-5">
        <div className="container mt-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <div className="mb-4">
                <h1 className="h1 fw-bold text-start">Visa Services</h1>
              </div>

              <div className="row mt-4 align-items-start">
                <div className="col-md-6">
                  <p className="mb-4">
                    Airshine values Visa service as it is the most crucial gateway for experiencing international adventures. Sometimes, Visa seems to be the most suspenseful part of an international trip. It can make or break our plans.
                  </p>
                  <p>
                    Our Visa experts are up to date with Visa regulations of all the hotspot destinations in the world to ensure that you get your Visas approved without any delays.
                  </p>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <img src={visa1} alt="Visa Services" className="img-fluid rounded shadow-sm" />
                </div>
              </div>

              <div className="row mt-4 align-items-start">
                <div className="col-md-6 order-2 order-md-1 mt-4 mt-md-0">
                  <img src={visa2} alt="Visa Experts" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <p className="mb-4">
                    You just have to enter your personal details, upload the required documents, and we will take care of the rest. We will verify the documents and ensure that it is error-free. You will receive your Visa within a week!
                  </p>
                  <p>
                    Dedicated staff members are always at your disposal to solve any queries. Please do inbox us at{' '}
                    <a href="mailto:contact@airshineonline.in" className="text-primary text-decoration-underline">
                      contact@airshineonline.in
                    </a>{' '}
                    or contact us via WhatsApp and let us know more about your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FormsSection />
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export default VisaPage;
