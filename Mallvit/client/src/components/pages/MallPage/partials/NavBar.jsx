import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ mall }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to={`/mall/${mall.name}/stores`}>STORES</Link></li>
        <li><Link to={`/mall/${mall.name}/dining`}>DINING</Link></li>
        <li><Link to={`/mall/${mall.name}/map`}>MAP</Link></li>
        <li><Link to={`/mall/${mall.name}/deals`}>DEALS</Link></li>
        <li><Link to={`/mall/${mall.name}/news-events`}>NEWS & EVENTS</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
