import React from 'react';


const StatsCard = ({ icon, number, label, color }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="stats-card p-4 h-100 text-center">
        <div className={`mb-3 ${color}`}>
          <i className={`bi ${icon} fs-1`}></i>
        </div>
        <div className="stats-number">{number}</div>
        <div className="stats-label">{label}</div>
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <img
                src="/api/placeholder/600/400"
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

              <div className="row mt-5">
                <StatsCard 
                  icon="bi-globe2" 
                  number="50+" 
                  label="Destinations" 
                  color="text-primary"
                />
                <StatsCard 
                  icon="bi-people-fill" 
                  number="10k+" 
                  label="Happy Travelers" 
                  color="text-success"
                />
                <StatsCard 
                  icon="bi-star-fill" 
                  number="4.9" 
                  label="Average Rating" 
                  color="text-warning"
                />
                <StatsCard 
                  icon="bi-trophy-fill" 
                  number="15+" 
                  label="Years Experience" 
                  color="text-info"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;