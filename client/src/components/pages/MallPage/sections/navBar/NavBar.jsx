import { Link } from 'react-router-dom';
import './NavBar.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMap, faStore, faSignOutAlt, faBars, faAddressBook, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ mall, isOpen }) => {
  const [navOpen, setNavOpen] = useState(isOpen);

  useEffect(() => {
    setNavOpen(isOpen);
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [isOpen]);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    document.body.classList.toggle('nav-open');
  };

  return (
    <>
      <nav className={`nav ${navOpen ? 'nav-open' : ''}`}>
        <div className="nav-links-container">
          <Link to={`/malls/${mall.title}`} className="nav__link" onClick={toggleNav}>
            <span className="link-container">
              <span className="link-title">Home</span>
            </span>
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
          <Link to={`/malls/${mall.title}/map`} className="nav__link" onClick={toggleNav}>
            <span className="link-container">
              <span className="link-title">Navigate</span>
            </span>
            <FontAwesomeIcon icon={faMap} size="lg" />
          </Link>
          <Link to={`/malls/${mall.title}/stores`} className="nav__link" onClick={toggleNav}>
            <span className="link-container">
              <span className="link-title">Stores</span>
            </span>
            <FontAwesomeIcon icon={faStore} size="lg" />
          </Link>
          <Link to={`/malls/${mall.title}/forum`} className="nav__link" onClick={toggleNav}>
            <span className="link-container">
              <span className="link-title">Forum</span>
            </span>
            <FontAwesomeIcon icon={faAddressBook} size="lg" />
          </Link>
          <Link to="/" className="nav__link" onClick={toggleNav}>
            <span className="link-container">
              <span className="link-title">Choose different mall</span>
            </span>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </Link>
        </div>
      </nav>
      <main className={`main ${navOpen ? 'main-open' : ''}`}>
        <button className="nav-open-button" onClick={toggleNav} title="navigation bar">
          {navOpen ? <FontAwesomeIcon icon={faArrowLeft} size="lg" /> : 
          <FontAwesomeIcon icon={faArrowRight} size="lg" />}
        </button>
      </main>
    </>
  );
};

export default NavBar;
