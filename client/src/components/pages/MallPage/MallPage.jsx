import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './MallPage.css';
import MallHeader from './sections/Header/MallHeader';
import { useMall } from '../../../context/MallContext';
import StoresSection from './sections/body/Stores/StoresSection';
import MapSection from './sections/body/Map/MapSection';
import ForumSection from './sections/body/Forum/ForumSection';
import NavBar from './sections/navBar/NavBar';
import Hostages from '../AppHomePage/partials/Hostages';
import { fetchMallObject } from '../../../api/mall';

const MallPage = () => {
  const { mall } = useMall();
  const [mallObject, setMallObject] = useState({});
  const location = useLocation();

  useEffect(() => {
    const getMallData = async () => {
      if (mall && mall.title) {
        const partialUrl = encodeURIComponent(mall.title);
        const data = await fetchMallObject(partialUrl);
        if (data) {
          setMallObject(data);
        }
      }
    };
    getMallData();
  }, [mall]);

  const isHomePage = location.pathname === `/malls/${encodeURIComponent(mallObject.title)}`;

  return (
    <div>
      <NavBar mall={mallObject} isOpen={isHomePage} isHomePage={isHomePage} />
      {!isHomePage && <MallHeader mall={mallObject} homePage={isHomePage} />}
      <Hostages sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto' }} />
      <div className={isHomePage ? "home-content-container" : "content-container-mall"}>
        <Routes>
          <Route path="/" element={<MallHeader mall={mallObject} homePage />} />
          <Route path="forum" element={<ForumSection mall={mallObject} />} />
          <Route path="stores" element={<StoresSection mall={mallObject} />} />
          <Route path="map" element={<MapSection mapSrc={mallObject.mapUrl} />} />
        </Routes>
      </div>
    </div>
  );
};

export default MallPage;
