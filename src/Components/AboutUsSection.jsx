import React from 'react'
import hero1 from '../assets/images/home/hero-1.jpg'

const StatsCard = ({ icon, title, text, color }) => {
    return (
      <div className="col">
        <div className="card h-100 text-center shadow">
          <div className="card-body">
            <div className={`display-4 ${color} mb-2`}>
              <i className={`bi ${icon}`}></i>
            </div>
            <h2 className="card-title mb-3">{title}</h2>
            <p className="card-text text-muted">{text}</p>
          </div>
        </div>
      </div>
    );
  };

const AboutUsSection = () => {
  return (
    <div>
      <div className="container-fluid col-11 px-5 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-md-12 col-sm-12 col-lg-6" >
           <img src={hero1} className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" loading="lazy" style={{width:'100%'}} />
          {/* <div style={{position:'absolute',right:'0px', width:'300px', height:'300px'}} className="rounded-circle bg-dark">‎</div> */}
      </div>
      <div className="col-lg-6">
         {/* <p className=" fw-normal rounded-2">Every client growing 5X</p> */}
         <div className="badge fw-normal bg-hero py-2 px-3 rounded-pill mb-2" style={{backgroundColor: '#c8dcf4', color: '#002147'}}>
              ABOUT US&nbsp;
        </div>
        <h2 className="display-7 fw-bold lh-2 mb-3 text-justify">Your Portal to Global Travel Insipration</h2>
        <p className="fs-6 mb-4 text-justify">Airshine is your ultimate travel companion, offering personalised itineraies and unforgettable experiences. Whether you are seeking adventure, relaxation, or cultural exploration, Airhsine crafts journeys that cater to your unique preferences.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <div className="d-grid d-md-flex">
            <a className="btn px-4 py-2 contact-us" href="/contact">
              Start Exploring
            </a>
        </div>
        </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        <StatsCard 
          icon="bi-people" 
          title="1,234" 
          text="Active Users" 
          color="text-primary" 
        />
        <StatsCard 
          icon="bi-graph-up" 
          title="56%" 
          text="Growth Rate" 
          color="text-success" 
        />
        <StatsCard 
          icon="bi-star" 
          title="4.8" 
          text="Average Rating" 
          color="text-warning" 
        />
        <StatsCard 
          icon="bi-clock-history" 
          title="98.3%" 
          text="Uptime" 
          color="text-danger" 
        />
      </div>
    </div>

      </div>
    </div>
  </div>
  )
}

export default AboutUsSection