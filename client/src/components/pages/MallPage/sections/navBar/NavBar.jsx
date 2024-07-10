import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ mall }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to={`/malls/${mall.title}`}>Home</Link></li>
        <li><Link to={`/malls/${mall.title}/stores`}>Stores</Link></li>
        <li><Link to={`/malls/${mall.title}/map`}>Navigate</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
