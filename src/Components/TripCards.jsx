import tripData from '../assets/data/trips.json';

const TripCards = ({ trips }) => {
  let filteredTrips = {};
  if (trips === 'Domestic') {
    filteredTrips = tripData.domestic;
  } else if (trips === 'International') {
    filteredTrips = tripData.international;
  } else {
    filteredTrips = tripData.popular;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {filteredTrips.map((trip) => (
        <div key={trip.id} className="col">
          <div className="card h-100">
            <img
              src={trip.image}
              alt={trip.location}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{trip.location}</h5>
              <p className="card-text">{trip.duration}</p>
              <a href="/tourdetails" className="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripCards;