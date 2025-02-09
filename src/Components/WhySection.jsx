import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkedAlt, 
  faHandsHelping, 
  faWallet, 
  faSmile, 
  faShieldAlt, 
  faCalendarCheck 
} from '@fortawesome/free-solid-svg-icons';

const WhySection = () => {
  return (
    <>
      <section className="why-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="why-section-title">
              Why <span>Choose Us</span>
            </h2>
            <p className="section-description mx-auto">
              At Airshine Tours and Travels, we are dedicated to making your travel experience unforgettable. 
              With a focus on personalized service, safety, and affordability, we ensure every journey is seamless and memorable.
              <div className="highlight-text">
                Let us take you on the adventure of a lifetime. Your dream vacation starts here.
              </div>
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: faMapMarkedAlt,
                title: "Expertly Curated Itineraries",
                text: "Our travel experts design unique and personalized itineraries to ensure you experience the best of every destination, tailored to your preferences.",
                link: "Explore Tours",
                linkid: "/international"
              },
              {
                icon: faHandsHelping,
                title: "24/7 Customer Support",
                text: "Our dedicated support team is available around the clock to assist you with any queries or concerns, ensuring a hassle-free travel experience.",
                link: "Contact Us",
                linkid: "/contact"
              },
              {
                icon: faWallet,
                title: "Affordable Packages",
                text: "We offer a wide range of budget-friendly travel packages without compromising on quality, making your dream vacation accessible to everyone.",
                link: "View Packages",
                linkid: "/international"
              },
              {
                icon: faSmile,
                title: "Memorable Experiences",
                text: "From hidden gems to iconic landmarks, we create unforgettable travel experiences that leave you with lifelong memories.",
                link: "Discover More",
                linkid: "/international"
              },
              {
                icon: faShieldAlt,
                title: "Safety and Security",
                text: "Your safety is our top priority. We partner with trusted vendors and follow strict safety protocols to ensure a secure and worry-free journey.",
                link: "Learn More",
                linkid: "/international"
              },
              {
                icon: faCalendarCheck,
                title: "On-Time Services",
                text: "We value your time. Our punctual and reliable services ensure that every aspect of your trip runs smoothly and on schedule.",
                link: "Book Now",
                linkid: "/contact"
              }
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
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

export default WhySection;