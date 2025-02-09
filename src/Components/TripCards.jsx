import React from 'react';
import tripData from '../assets/data/database.json';

const TripCards = ({ trips }) => {
  let filteredTrips = [];

  if (trips === 'Domestic') {
    filteredTrips = tripData.filter((trip) => trip.tag.toLowerCase() === 'domestic');
  } else if (trips === 'International') {
    filteredTrips = tripData.filter((trip) => trip.tag.toLowerCase() === 'international');
  } else {
    filteredTrips = tripData; // Show all trips if no filter is applied
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredTrips.map((trip) => (
          <div key={trip.id} className="col">
            <div className="trip-card card h-100">
              <div className="position-relative overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.location}
                  className="trip-image w-100"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h3 className="trip-location">{trip.location}</h3>
                <p className="trip-duration mb-4">{trip.duration}</p>
                <div className="mt-auto">
                  <a href={trip.link} className="explore-btn d-inline-block">
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TripCards;
