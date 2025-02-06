import { useState } from 'react';
import trips from '../assets/data/trips.json';
import ContactCard from '../Components/ContactCard';
import '../InternationalPage.css'; // Import custom CSS for additional styling

const InternationalPage = () => {
  const tripsData = trips.international;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrips = tripsData.filter(trip =>
    trip.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container-fluid p-0">
        {/* Hero Section */}
        <div className="international-hero">
          <div className="hero-overlay">
            <h1 className="hero-title">International Trips</h1>
            <p className="hero-subtitle">
              Explore our exclusive international trips. Use the search bar to find your next adventure.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Search by location..."
                className="form-control search-input"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Trip Cards */}
        <div className="container mt-5">
          {filteredTrips.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredTrips.map(trip => (
                <div key={trip.id} className="col">
                  <div className="card h-100 trip-card">
                    <img src={trip.image} alt={trip.location} className="card-img-top trip-image" />
                    <div className="card-body">
                      <h5 className="card-title">{trip.location}</h5>
                      <p className="card-text">{trip.duration}</p>
                      <a href={trip.link} className="btn btn-primary btn-more">
                        More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-5">
              <p className="h5 mb-4">
                No trips found. Contact us to get the best offers for the country you want to visit.
              </p>
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          )}
        </div>
      </div>
      <ContactCard />
    </>
  );
};

export default InternationalPage;