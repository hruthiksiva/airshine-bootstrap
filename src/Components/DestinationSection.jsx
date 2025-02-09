import TripCards from "./TripCards";

const DestinationSection = () => {
  return (
    <div className="container py-5">
      
      {/* International Trips Section */}
      <section className="my-5">
        <h2 className="display-5 fw-bold lh-base mb-4 text-center">International Trips</h2>
        <p className="fs-5 text-muted text-center px-md-5">Experience the world with Airshine, your ultimate travel companion. Whether you seek adventure, relaxation, or cultural exploration, we craft unforgettable journeys tailored to your desires.</p>

        <TripCards trips="International" />
        <div className="text-center mt-5">
          <a href="/international" className="btn btn-primary px-4 py-3 rounded-pill shadow-sm">
            View All International Trips
          </a>
        </div>
      </section>
      

      {/* Domestic Trips Section */}
      <section className="my-5">
        <h2 className="display-5 fw-bold lh-base mb-4 text-center">Domestic Trips</h2>
        <p className="fs-5 text-muted text-center px-md-5">Explore the beauty of your own land with Airshine. From hidden gems to popular destinations, we curate experiences that bring you closer to the culture and charm of your country.</p>

        <TripCards trips="Domestic" />
        <div className="text-center mt-5">
          <a href="/domestic" className="btn btn-primary px-4 py-3 rounded-pill shadow-sm">
            View All Domestic Trips
          </a>
        </div>
      </section>
    </div>
  );
};

export default DestinationSection;
