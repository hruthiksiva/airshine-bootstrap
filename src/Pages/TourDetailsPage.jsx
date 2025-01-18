import React from 'react';
import dubai1 from '../assets/images/trips/dubai/dubai-1.jpeg';
import dubai2 from '../assets/images/trips/dubai/dubai-2.jpeg';

const TourDetailsPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center display-4 mb-5">Dubai</h1>

      <div className="row g-4">
        {/* Carousel Section */}
        <div className="col-md-8">
          <div id="tourCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={dubai1} className="d-block w-100 rounded" alt="Place 1" />
              </div>
              <div className="carousel-item">
                <img src={dubai2} className="d-block w-100 rounded" alt="Place 2" />
              </div>
              <div className="carousel-item">
                <img src={dubai1} className="d-block w-100 rounded" alt="Place 3" />
              </div>
              <div className="carousel-item">
                <img src={dubai2} className="d-block w-100 rounded" alt="Place 4" />
              </div>
              <div className="carousel-item">
                <img src={dubai1} className="d-block w-100 rounded" alt="Place 5" />
              </div>
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
          {[...Array(5)].map((_, i) => (
            <div key={i} className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h5 card-title">Day {i + 1}</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  </p>
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
                <li className="list-group-item">Accommodation</li>
                <li className="list-group-item">Meals</li>
                <li className="list-group-item">Transportation</li>
                <li className="list-group-item">Guided Tours</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4 card-title">Excluded</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Flights</li>
                <li className="list-group-item">Travel Insurance</li>
                <li className="list-group-item">Personal Expenses</li>
                <li className="list-group-item">Gratuities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsPage;
