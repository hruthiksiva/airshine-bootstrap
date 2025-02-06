import React from 'react';
import about1 from "../assets/images/about/about-1.jpg";
import about2 from "../assets/images/about/about-2.jpg";
import about3 from "../assets/images/about/about-3.jpg";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="about-section">
        <h1 className="section-title">About Us</h1>
        <div className="image-container">
          <img src={about1} alt="Our Team" className="about-image" />
        </div>
        <div className="about-text">
          <p>Trichy Airshine Tours and Travels (P) Ltd, established in 1995 by Managing Director Mr. G. Mohan and Executive Director PMJF Lion G. Ravichandran, has grown from humble beginnings in Trichy to become a leading travel agency...</p>
          <p>With over 30 years of industry expertise, Trichy Airshine is now a veteran in the travel sector. We are proud to be accredited by the International Air Transport Association (IATA) and the Travel Agents Association of India (TAAI).</p>
          <p>Our success is built on core principles: dynamic leadership, creativity, integrity, vision for the future, and an unwavering commitment to excellence...</p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="vision-box">
          <h2 className="section-subtitle">Vision</h2>
          <p>We strive to be a Leading Travel Company that offers a One Stop Solution to all the travel needs of our clients...</p>
        </div>
        <div className="mission-box">
          <h2 className="section-subtitle">Mission</h2>
          <p>Our aim is to create unforgettable journeys by offering personalised, innovative travel solutions...</p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="leader-box">
          <h2 className="section-subtitle">Managing Director’s Desk</h2>
          <img src={about2} alt="Managing Director" className="leader-image" />
          <p>With decades of experience comes exceptional judgement. At Trichy Airshine Tours & Travels, we understand the luxury and comfort you deserve while travelling...</p>
          <p><strong>G. Mohan<br />Managing Director</strong></p>
        </div>
        <div className="leader-box">
          <h2 className="section-subtitle">Executive Director’s Desk</h2>
          <img src={about3} alt="Executive Director" className="leader-image" />
          <p>“Excellence is a result of high intention, sincere effort, and intelligent execution.”...</p>
          <p><strong>PMJF Lion G Ravichandran<br />Executive Director</strong></p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;