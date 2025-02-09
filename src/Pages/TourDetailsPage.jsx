import React from 'react';
import { useParams } from 'react-router-dom'; // For dynamic routing
import tourData from '../assets/data/database.json'; // Import the JSON file

const TourDetailsPage = () => {
  const { id } = useParams(); // Get the tour ID from the URL
  const tour = tourData.find((tour) => tour.order === id); // Find the tour by ID

  if (!tour) {
    return <div className="container mt-4">Tour not found!</div>;
  }

  return (
    <div className="container mt-4 mb-5">
      <h1 className="text-center display-4 mb-5">{tour.title}</h1>

      <div className="row g-4">
        {/* Carousel Section */}
        <div className="col-md-8">
          <div id="tourCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              
              {tour.images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={image} className="d-block w-100 rounded" alt={`Place ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#tourCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#tourCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title h4 mb-4">Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email (Optional)</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Comments</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="mt-5">
        <h2 className="h3 mb-4">Itinerary</h2>
        <div className="row g-4">
          {tour.itinerary.map((day, index) => (
            <div key={index} className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h5 card-title">Day {index + 1}</h3>
                  <p className="card-text">{day}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Included & Excluded */}
      <div className="row mt-5 g-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4 card-title">Included</h2>
              <ul className="list-group list-group-flush">
                {tour.included.map((item, index) => (
                  <li key={index} className="list-group-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4 card-title">Excluded</h2>
              <ul className="list-group list-group-flush">
                {tour.excluded.map((item, index) => (
                  <li key={index} className="list-group-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsPage;