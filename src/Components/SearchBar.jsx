import React, { useState, useEffect } from 'react';
import tripsData from '../assets/data/database.json';

const SearchBar = () => {
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    destination: '',
    fromDate: '',
    toDate: '',
    people: '',
    phone: ''
  });

  const [showModal, setShowModal] = useState(false);

  // Load locations dynamically from JSON
  useEffect(() => {
    const allLocations = tripsData.map(trip => trip.location); // Extract locations
    setLocations([...new Set(allLocations)]); // Remove duplicates
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Show modal when "Plan Your Journey" is clicked
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.destination || !formData.fromDate || !formData.toDate || !formData.people) {
      alert('Please fill all fields before proceeding.');
      return;
    }

    setShowModal(true);
  };

  // Send email once phone number is entered
  const handleSendEmail = () => {
    if (!formData.phone) {
      alert('Please enter your phone number.');
      return;
    }

    const emailBody = `
      Destination: ${formData.destination}
      Check-in: ${formData.fromDate}
      Check-out: ${formData.toDate}
      Travelers: ${formData.people}
      Phone Number: ${formData.phone}
    `;

    window.location.href = `mailto:contact@airshine.com?subject=New Travel Inquiry&body=${encodeURIComponent(emailBody)}`;
    
    setShowModal(false); // Close modal after sending email
    alert('Your request has been sent! We will contact you soon.');
  };

  return (
    <div className="container position-relative w-100 mt-5">
      <div 
        className="search-box bg-white p-4 rounded shadow mx-auto"
        style={{ maxWidth: '1000px', padding: '30px' }}
      >
        <form className="row g-3 align-items-center" onSubmit={handleFormSubmit}>
          <div className="col-12 col-md-3">
            <label htmlFor="destination" className="form-label fw-semibold">Destination</label>
            <select id="destination" className="form-select form-control-lg" onChange={handleChange} required>
              <option value="">Select your destination</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="col-6 col-md-2">
            <label htmlFor="fromDate" className="form-label fw-semibold">Check In</label>
            <input type="date" className="form-control form-control-lg" id="fromDate" onChange={handleChange} required />
          </div>

          <div className="col-6 col-md-2">
            <label htmlFor="toDate" className="form-label fw-semibold">Check Out</label>
            <input type="date" className="form-control form-control-lg" id="toDate" onChange={handleChange} required />
          </div>

          <div className="col-6 col-md-2">
            <label htmlFor="people" className="form-label fw-semibold">Travelers</label>
            <input type="number" className="form-control form-control-lg" id="people" placeholder="2" min="1" onChange={handleChange} />
          </div>

          <div className="col-12 col-md-3 d-grid">
            <button type="submit" className="btn btn-primary btn-lg">Plan Your Journey</button>
          </div>
        </form>
      </div>

      {/* Modal for Phone Number */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Phone Number</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" onChange={handleChange} required />
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleSendEmail}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal Overlay */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default SearchBar;
