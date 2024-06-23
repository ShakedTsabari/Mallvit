// src/pages/MallPage.jsx
import React from 'react';
import './MallPage.css';
import { malls } from '../../utils/data';
import NavBar from '../NavBar';


const MallPage = () => {
  const ayalonMall = malls.find(mall => mall.name === "Ayalon Mall");

  return (
    <div>
      <div className="hero-section">
        <div className="hero-image">
          <picture>
            <source srcSet="https://www.azrieligroup.com/wp-content/uploads/2021/01/az_header.jpg" type="image/jpg" />
            <img src="https://www.azrieligroup.com/wp-content/uploads/2021/01/az_header.jpg" alt="Ayalon Mall" />
          </picture>
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">Ayalon Mall</h1>
          <p className="hero-description">Welcome to the Ayalon Mall</p>
          <a href="#about" className="hero-button">Learn More</a>
        </div>
        <a href="#about" className="scroll-arrow">
          <div className="scroll-arrow-circle">
            <svg viewBox="0 0 24 24">
              <path d="M12 16l-6-6h12z" />
            </svg>
          </div>
        </a>
      </div>
      <div id="about" className="about">
        <h2 >About Ayalon Mall</h2>
        <p>Ayalon Mall is a large shopping mall located in Ramat Gan, Israel. It is the first mall in Israel to have a large shopping complex outside the city center with a parking lot surrounding it.<br /> 
          Ayalon Mall is also notable for its owner, David Azrieli, inventing the word for “mall” in Hebrew for this mall, “kanyon”.</p>
      </div>
        <NavBar mall={ayalonMall} />
      <main className="mall-content">
        <div id="shops" className="shops-section">
          <h3>Shops List</h3>
          <ul>
            {Object.values(ayalonMall.stores).map(store => (
              <li key={store.id}>{store.name}</li>
            ))}
          </ul>
        </div>
        {/* Add other sections like Restaurants List, Mall Map, Parking Information here */}
      </main>
    </div>
  );
};

export default MallPage;