import React from 'react';




const AboutUsSection = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <img
                src="src/assets/images/services/service-3.jpg"
                className="about-image img-fluid w-100"
                alt="Airshine Tours Experience"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="section-badge badge rounded-pill px-3 py-2 mb-3">
                ABOUT US
              </div>
              <h2 className="section-title mb-4">
                Your Portal to Global Travel Inspiration
              </h2>
              <p className="section-text mb-5">
                Airshine is your ultimate travel companion, offering personalized 
                itineraries and unforgettable experiences. Whether you're seeking 
                adventure, relaxation, or cultural exploration, we craft journeys 
                that cater to your unique preferences and transform your travel 
                dreams into reality.
              </p>
              <a href="/contact" className="explore-btn text-decoration-none">
                Start Exploring
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;