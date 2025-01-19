import TripCards from "./TripCards";

const DestinationSection = () => {
  return (
    <div className="container py-4">
      
      {/* International Trips Section */}
      <section className="my-5">
      <h2 className="display-7 fw-bold lh-2 mb-3 text-justify">International Trips</h2>
    <p className="fs-6 mb-4 text-justify">Airshine is your ultimate travel companion, offering personalised itineraies and unforgettable experiences. Whether you are seeking adventure, relaxation, or cultural exploration, Airhsine crafts journeys that cater to your unique preferences.</p>

        <TripCards trip="International" />
        <div className="text-center mt-4">
          <a
            href="/international"
            className="btn btn-dark px-4 py-2"
          >
            View All International Trips
          </a>
        </div>
      </section>

      {/* Domestic Trips Section */}
      <section className="my-5">
      <h2 className="display-7 fw-bold lh-2 mb-3 text-justify">Domestic Trips</h2>
    <p className="fs-6 mb-4 text-justify">Airshine is your ultimate travel companion, offering personalised itineraies and unforgettable experiences. Whether you are seeking adventure, relaxation, or cultural exploration, Airhsine crafts journeys that cater to your unique preferences.</p>

        <TripCards trip="Domestic" />
        <div className="text-center mt-4">
          <a
            href="/domestic"
            className="btn btn-dark px-4 py-2"
          >
            View All Domestic Trips
          </a>
        </div>
      </section>
    </div>
  );
};

export default DestinationSection;