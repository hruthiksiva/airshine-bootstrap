import { useState } from 'react';
import trips from '../assets/data/trips.json';
import ContactCard from '../Components/ContactCard';

const InternationalPage = () => {
  const tripsData = trips.international;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrips = tripsData.filter(trip =>
    trip.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="container mt-4">
      <h1 className="display-4 mb-4">International Trips</h1>
      <p className="mb-4">Explore our exclusive international trips. Use the search bar to find your next adventure.</p>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by location..."
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredTrips.length > 0 ? (
        <div className="row g-4">
          {filteredTrips.map((trip) => (
            <div key={trip.id} className="col-md-4">
              <div className="card shadow-sm">
                <img src={trip.image} alt={trip.location} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{trip.location}</h5>
                  <p className="card-text">{trip.duration}</p>
                  <a href="/tourdetails" className="btn btn-link">More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="h5 mb-4">No trips found. Contact us to get the best offers for the country you want to go.</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      )}
    </div>
    <ContactCard />
    </>
    
    
  );
};

export default InternationalPage;
