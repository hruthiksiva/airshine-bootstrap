import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkedAlt, 
  faHandsHelping, 
  faWallet, 
} from '@fortawesome/free-solid-svg-icons';

const MetricsSection = () => {
  return (
    <>
    <section className="metric-section">
            <div className="container2">
              <div className="text-center mb-5">
                <h2 className="h1">
                   <span>Our Stellar Records</span>
                </h2>
                <p className="mx-auto">
                With decades of experience, millions of happy travelers, and countless unforgettable journeys, we are your ultimate travel partner. Explore the world with confidence and comfort!
                </p>
              </div>
    
              <div className="row g-4">
                {[
                  {
                    icon: faMapMarkedAlt,
                    title: "30+ Years of Experience",
                    text: "Incorporated on November 3rd 1995, Airshine will always be our client’s ‘Trusted Travel Partner’.",
                    link: "Explore Tours",
                    linkid: "/international"
                  },
                  {
                    icon: faHandsHelping,
                    title: "2 Million + Satisfied Clients",
                    text: "Airshine is the #1 Choice for our loyal clients in all their adventures.",
                    link: "Contact Us",
                    linkid: "/contact"
                  },
                  {
                    icon: faWallet,
                    title: "100,000+ Outbound Tours",
                    text: "One stop shop for Domestic & International outbound tours.Tailor made to your preferred destinations.",
                    link: "View Packages",
                    linkid: "/international"
                  },

                ].map((feature, index) => (
                  <div key={index} className="col-md-6 col-lg-4 ">
                    <div className=" p-4 metric-sub-section">
                      <FontAwesomeIcon icon={feature.icon} size="2x" className="feature-icon" />
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-text">{feature.text}</p>
                      <a href={feature.linkid} className="feature-link">
                        {feature.link} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    </>
  );
};


export default MetricsSection;
