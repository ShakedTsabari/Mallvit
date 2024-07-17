import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './MallPage.css';
import MallHeader from './sections/Header/MallHeader';
import { useMall } from '../../../context/MallContext';
import StoresSection from './sections/body/Stores/StoresSection';
import MapSection from './sections/body/Map/MapSection';
import ReviewsSection from './sections/body/Reviews/ReviewsSection';
import NavBar from './sections/navBar/NavBar';
import ForumSection from './sections/body/Forum/ForumSection';
import Hostages from '../AppHomePage/Hostages';
import { fetchMallObject } from '../../../api/mall';

const MallPage = () => {
  const { mall } = useMall();
  const [mallObject, setMallObject] = useState({});

  useEffect(() => {
    const getMallData = async () => {
      if (mall && mall.title) {
        const partialUrl = encodeURIComponent(mall.title);
        const data = await fetchMallObject(partialUrl);
        if (data) {
          setMallObject(data);
      }}};
    getMallData();
  }, [mall]);

  return (
    <div>
      <NavBar mall={mallObject} />
      <MallHeader mall={mallObject} />
      <Hostages sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto' }} />
      <div className="content-container-mall">
        <Routes>
          <Route path="/" element={<ForumSection mall={mallObject} />} />
          <Route path="stores" element={<StoresSection mall={mallObject} />} />
          <Route path="map" element={<MapSection mapSrc={mallObject.mapUrl} />} />
        </Routes>
      </div>
    </div>
  );
};

export default MallPage;
