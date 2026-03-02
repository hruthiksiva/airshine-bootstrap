import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/international" className="col-12 fw-medium text-decoration-none" style={{ color: '#0056B3', fontSize: '18px' }}>
          <span className="explore-btn">Plan Your Trip Today</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
