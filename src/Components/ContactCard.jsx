import React from 'react';

const ContactCard = () => {
  return (
    <div className="container-fluid base px-5 py-5">
      <div className="row text-center bg-light rounded-4 py-5" style={{ minHeight: '400px' }}>
        <div className="col-12 fw-bold text-fluid" style={{ fontSize: '64px', fontFamily: "'Playfair Display', serif", color: '#002147' }}>
          Ready for Your Next Adventure?
        </div>
        <div className="col-12 px-5 mt-3 mb-4" style={{ fontSize: '20px', fontFamily: "'Inter', sans-serif", color: '#6C757D' }}>
          Let us craft a journey that’s unforgettable. Explore new destinations with seamless travel planning and personalized experiences.
        </div>
        <a className="col-12 fw-medium" style={{ textDecoration: 'none', color: '#0056B3', fontSize: '18px' }}>
          Plan Your Trip Today &gt;
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
