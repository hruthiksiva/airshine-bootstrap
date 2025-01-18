import { useState } from 'react';
import trips from '../assets/data/trips.json';
import ContactCard from '../Components/ContactCard';

const DomesticPage = () => {
  const tripsData = trips.domestic;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrips = tripsData.filter(trip =>
    trip.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="container mt-4">
      <h1 className="display-4 mb-4 text-center">Domestic Trips</h1>
      <p className="lead mb-4 text-center">
        Explore our exclusive domestic trips. Use the search bar to find your next adventure.
      </p>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by location..."
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredTrips.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredTrips.map(trip => (
            <div key={trip.id} className="col">
              <div className="card h-100">
                <img src={trip.image} alt={trip.location} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{trip.location}</h5>
                  <p className="card-text">{trip.duration}</p>
                  <a href={trip.link} className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-4">
          <p className="h5 mb-4">
            No trips found. Contact us to get the best offers for the state you want to visit.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      )}
    </div>
    <ContactCard />
    </>
    
  );
};

export default DomesticPage;
