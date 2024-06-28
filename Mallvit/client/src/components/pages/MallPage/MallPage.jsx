import { Routes, Route } from 'react-router-dom';
import './MallPage.css';
import { malls } from '../../../utils/data';
import MallHeader from './partials/MallHeader';
import { useMall } from '../../../context/MallContext';
import StoresPage from './StoresPage';
import MapPage from './MapPage';
import NavBar from './partials/NavBar';

const MallPage = () => {
  const { mall } = useMall();
  const ayalonMall = malls.find(mall => mall.name === 'Ayalon Mall');
  const handleScroll = (e) => {
    e.preventDefault();
    const nextSection = document.getElementById('next-section');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <MallHeader mall={mall} />
      <a href="#next-section" className="scroll-arrow" onClick={handleScroll}>
        <div className="scroll-arrow-circle">
          <svg viewBox="0 0 24 24">
            <path d="M12 16l-6-6h12z" />
          </svg>
        </div>
      </a>
      <div id="next-section">
        <NavBar mall={mall} />
        <div className="content-container">
          <div id="about" className="about">
            <h2>{`About ${mall.name}`}</h2>
            <p>{mall.info}</p>
          </div>
          <main className="mall-content">
            <Routes>
              {/* <Route index element={<div>Select a section</div>} /> */}
              <Route path="stores" element={<StoresPage mall={mall} />} />
              <Route path="map" element={<MapPage mapSrc={mall.mapSrc} />} />
              {/* Additional nested routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MallPage;
