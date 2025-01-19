import React from 'react';
import image1 from '../assets/images/hero-section.jpg'

const HeroSection = () => {
  return (
    <div
      className="hero-section text-white text-center d-flex flex-column justify-content-center align-items-center position-relative"
      style={{
        backgroundImage: `url(${image1})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
    >
      <div
        className="overlay position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      ></div>

      <div className="z-1">
        <h1 className="display-3 fw-bold">Explore the World with Us</h1>
        <p className="fs-4">Your Journey Starts Here</p>
      </div>

      <div
        className="search-box position-absolute bottom-0 start-50 translate-middle-x w-100 p-4 bg-white rounded shadow-lg"
        style={{ maxWidth: '1100px', marginBottom: '50px' }}
      >
        <form className="row g-4 align-items-center">
          <div className="col-md-3">
            <label htmlFor="destination" className="form-label fw-bold text-secondary">
              Location
            </label>
            <select
              id="destination"
              className="form-select form-control-lg"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Choose your destination
              </option>
              <option value="paris">Paris</option>
              <option value="dubai">Dubai</option>
              <option value="maldives">Maldives</option>
              <option value="tokyo">Tokyo</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="fromDate" className="form-label fw-bold text-secondary">
              From Date
            </label>
            <input
              type="date"
              className="form-control form-control-lg"
              id="fromDate"
              required
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="toDate" className="form-label fw-bold text-secondary">
              To Date
            </label>
            <input
              type="date"
              className="form-control form-control-lg"
              id="toDate"
              required
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="people" className="form-label fw-bold text-secondary">
              Persons
            </label>
            <input
              type="number"
              className="form-control form-control-lg"
              id="people"
              placeholder="1"
              min="1"
              required
            />
          </div>

          <div className="col-md-3 d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Consult
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;

