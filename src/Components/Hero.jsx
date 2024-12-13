import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="/assets/hero.jpg" // Update this path to match your actual image location
        alt="E-Commerce Banner"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1>Welcome to CoinSat Store</h1>
        <p>Discover amazing products tailored just for you.</p>
      </div>
    </div>
  );
};

export default Hero;
