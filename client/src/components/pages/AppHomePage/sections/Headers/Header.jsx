import React from 'react';
import Slider from 'react-slick';
import ScrollingArrow from '../../../../partials/ScrollingArrow';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Header.css';

export default function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h2 className="hero-heading">Mallvit</h2>
        <p className="hero-description">Finding your desires ASAP</p>
      </div>
      <Slider {...settings} className="hero-image">
        <div>
          <img src="https://www.azrieligroup.com/wp-content/uploads/2021/01/az_header.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://www.azrieligroup.com/wp-content/uploads/2022/01/Azrieli-azrieli-center-mall-header-copy-copy.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://www.azrieligroup.com/wp-content/uploads/2021/12/8-h2-1.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="https://www.azrieligroup.com/wp-content/uploads/2021/12/5-h.jpg" alt="Image 4" />
        </div>
      </Slider>
      <ScrollingArrow targetId="section1" tooltip="find center" />
    </div>
  );
}
