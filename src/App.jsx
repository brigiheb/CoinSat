import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import './styles/App.css';
import Products from './Components/Products';
const App = () => {
  const logos = [
    '/assets/logos/logo1.png',
    '/assets/logos/logo2.png',
    '/assets/logos/logo3.png',
    '/assets/logos/logo4.png',
    '/assets/logos/logo5.png',
  ];

  const bigCards = [
    '/assets/pub/bigCard1.png',
    '/assets/pub/BigCard2.png',
    '/assets/pub/BigCard3.png',
  ];

  return (
    <div className="app">
      <Navbar />
      <Hero />
      
      {/* Logo Row */}
      <div className="logo-row">
        {logos.map((logo, index) => (
          <div className="logo-card" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Big Cards Row */}
      <div className="big-card-row">
        {bigCards.map((card, index) => (
          <div className="big-card" key={index}>
            <img src={card} alt={`Big Card ${index + 1}`} className="big-card-image" />
          </div>
        ))}
      </div>
      <Products />

    </div>
  );
};

export default App;
