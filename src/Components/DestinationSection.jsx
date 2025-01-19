import TripCards from "./TripCards";

const DestinationSection = () => {
  return (
    <div className="container py-4">
      
      {/* International Trips Section */}
      <section className="my-5">
        <h1 className="fw-bold mb-4">International Trips</h1>
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
        <h1 className="fw-bold mb-4">Domestic Trips</h1>
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