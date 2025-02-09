import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div
      className="hero-section text-white text-center d-flex flex-column justify-content-center align-items-center position-relative"
      style={{
        backgroundImage: `url('src/assets/images/body-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
    >
      {/* Dark Overlay */}
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      <div className="z-1 container position-relative">
        <h1 className="hero-title display-4 fw-bold">Welcome to Airshine Tours & Travels</h1>
        <p className="hero-subtitle fs-4">Discover Extraordinary Destinations</p>
      </div>

      {/* Search Bar */}
      <SearchBar />
    </div>
  );
};

export default HeroSection;
