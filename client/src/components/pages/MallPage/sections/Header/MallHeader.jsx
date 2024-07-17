import React from 'react';
import './MallHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function MallHeader({ mall, homePage }) {
  return (
    <>
      <div className={`hero-section-mall ${homePage ? 'home-hero-section' : ''}`}>
        <div className="hero-image-mall">
          <picture>
            <img src={mall.img} alt={mall.title} />
          </picture>
        </div>
        <div className={`hero-text-mall ${homePage ? 'home-hero-text' : ''}`}>
          <h1 className="hero-heading-mall">{mall.title}</h1>
          <p className="hero-description-mall">Welcome to the mall</p>
          {homePage && (
            <div className="home-hero-details-container">
              <div className="home-hero-details">
                <div className="home-hero-hours">
                  <FontAwesomeIcon icon={faClock} className="icon" />
                  <div>
                    <h3>Opening Hours</h3>
                    {Array.isArray(mall.hours) ? (
                      mall.hours.map((hour, index) => (
                        <p key={index} className="hero-hour-item">{hour}</p>
                      ))
                    ) : (
                      <p>No hours available</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="home-hero-details">
                <div className="home-hero-address">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  <div>
                    <h3>Address</h3>
                    <p>{mall.address}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
