import React from 'react'
import TripCards from "./TripCards";


const PopularPackageSection = () => {
  return (
    <div>
            <div className="container py-4">


{/* Popular Packages Section */}
<section className="my-5">
  <h1 className="fw-bold mb-4">Popular Packages</h1>
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