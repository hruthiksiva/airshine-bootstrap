import React from 'react'
import TripCards from "./TripCards";


const PopularPackageSection = () => {
  return (
    <div>
            <div className="container py-4">


{/* Popular Packages Section */}
<section className="my-5">
    <h2 className="display-7 fw-bold lh-2 mb-3 text-justify">Popular Destination</h2>
    <p className="fs-6 mb-4 text-justify">Airshine is your ultimate travel companion, offering personalised itineraies and unforgettable experiences. Whether you are seeking adventure, relaxation, or cultural exploration, Airhsine crafts journeys that cater to your unique preferences.</p>


  <TripCards trip="Popular" />
  <div className="text-center mt-4">
    <a
      href="/popular"
      className="btn btn-dark px-4 py-2"
    >
      View All Popular Packages
    </a>
  </div>
</section>
</div>
    </div>
  )
}

export default PopularPackageSection