import React from 'react';
import SearchBar from './SearchBar';

// Custom CSS for fonts and colors

const HeroSection = () => {
  return (
    <>
      <div
        className="hero-section text-white text-center d-flex flex-column justify-content-center align-items-center position-relative"
        style={{
          backgroundImage: `url('src/assets/images/body-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
        }}
      >
        <div
          className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
        ></div>

        <div className="z-1 container" style={{ marginTop: '-80px' }}>
          <h1 className="hero-title">Welcome to Airshine Tours & Travels</h1>
          <p className="hero-subtitle">Discover Extraordinary Destinations</p>
        </div>

        
          <SearchBar/>

      </div>
    </>
  );
};

export default HeroSection;