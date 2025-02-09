import { useState } from 'react';
import trips from '../assets/data/database.json';
import ContactCard from '../Components/ContactCard';
import '../DomesticPage.css';

const DomesticPage = () => {
  // Filter trips to include only international ones based on "tag"
  const domesticTrips = trips.filter(trip => trip.tag === 'domestic');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter trips based on search input
  const filteredTrips = domesticTrips.filter(trip =>
    trip.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container-fluid p-0">
        {/* Hero Section */}
        <div className="domestic-hero">
          <div className="hero-overlay">

            <h1 className="hero-title">Domestic Trips</h1>
            <p className="hero-subtitle">
              Explore our exclusive domestic trips. Use the search bar to find your next adventure.
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
                Contact Us to get the best offers and customised package for the destinations you want to visit.
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

export default DomesticPage;