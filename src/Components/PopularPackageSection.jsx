import TripCards from "./TripCards";

const PopularPackageSection = () => {
  return (
    <div className="container py-5">
      
      {/* Popular Destinations Section */}
      <section className="my-5">
        <h2 className="display-5 fw-bold lh-base mb-4 text-center">Popular Destinations</h2>
        <p className="fs-5 text-muted text-center px-md-5">Discover Airshine's top-rated travel experiences. Whether you're looking for adventure, relaxation, or cultural immersion, we have the perfect itinerary crafted just for you.</p>

        <TripCards trip="Popular" />
        <div className="text-center mt-5">
          <a href="/international" className="btn btn-primary px-4 py-3 rounded-pill shadow-sm">
            View All Popular Packages
          </a>
        </div>
      </section>
    </div>
  );
};

export default PopularPackageSection;
