import React from 'react';
import hero1 from '../assets/images/home/hero-1.jpg';

const TestimonialSection = () => {
  return (
    <div className='domestic-section'>
      <div className="text-center p-4">
        <h1 className="mb-3 display-1">What Our Travelers Say</h1> 
        <p>Real experiences from happy travelers who explored the world with us.</p>
      </div>

      <div className="container-fluid col-11 px-5 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <div className="badge fw-normal bg-hero py-2 px-3 rounded-pill mb-2" style={{ backgroundColor: '#c8dcf4', color: '#002147' }}>
              TRAVEL STORIES&nbsp;
            </div>
            <h2 className="display-7 fw-bold lh-2 mb-3 text-justify">An Unforgettable Bali Adventure!</h2>
            <p className="fs-6 mb-4 text-justify">
              From the moment I booked my trip with Airshine, everything was seamless. The itinerary was perfectly tailored, and the team was incredibly supportive throughout my journey. Exploring Bali’s breathtaking beaches, temples, and hidden gems felt effortless, thanks to their expertise. A truly unforgettable experience!
            </p>
            <p className="fw-bold">— Akansha Tirupati</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="/international" className="explore-btn text-decoration-none">
            Plan Your Trip
              </a>

            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6">
            <img src={hero1} className="d-block mx-lg-auto img-fluid" alt="Traveler in Bali" loading="lazy" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;