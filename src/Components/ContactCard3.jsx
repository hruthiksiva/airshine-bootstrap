// ContactUs.jsx
import React from 'react';

const ContactCard3 = () => {
  return (
    <section className="py-5 px-3">
      <div className="container">
        <div className="row g-4">
          {/* Text Content */}
          <div className="col-md-6">
            <h1 className="mb-3">Contact Us</h1>
            <p className="mb-3">
              Reach out to us for your modern website and tech solutions. We're here to elevate your brand and discuss innovative digital experiences.
            </p>
            
            <div className="mb-3">
              <p><strong>Location</strong></p>
              <p>Bharathipuram Neighborhood in Thiruverumbur, Tamil Nadu</p>
              
              <p><strong>Hours</strong></p>
              <p>All 24 hrs available</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-md-6">
            <div className="ratio ratio-4x3 bg-light rounded">
              {/* This would typically be an embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.38620730716!2d78.83174907484965!3d10.76967605973115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa97e2f5b2b5b9%3A0x6e5e7c0b9b0b0b0b!2sBharathipuram%2C%20Thiruverumbur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1677654321!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map of Bharathipuram, Thiruverumbur"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard3;