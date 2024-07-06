import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ mall }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to={`/malls/${mall.title}/stores`}>STORES</Link></li>
        <li><Link to={`/malls/${mall.title}/dining`}>DINING</Link></li>
        <li><Link to={`/malls/${mall.title}/map`}>MAP</Link></li>
        <li><Link to={`/malls/${mall.title}/deals`}>DEALS</Link></li>
        <li><Link to={`/malls/${mall.title}/news-events`}>NEWS & EVENTS</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
