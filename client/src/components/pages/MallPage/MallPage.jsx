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

const MallPage = () => {
  const { mall } = useMall();
  // const [posts, setPosts] = useState([]);
  const [mallObject, setMallObject] = useState({});
  const baseUrl = 'http://localhost:3000/malls/';

  useEffect(() => {
    if (mall && mall.title) {
      const fetchMallObject = async () => {
        try {
          const url = `${baseUrl}${encodeURIComponent(mall.title)}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch mall: ${response.statusText}`);
          }
          const data = await response.json();
          setMallObject(data);
        } catch (error) {
          console.error('Failed to fetch mall:', error);
        }
      };

      fetchMallObject();
    }
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
          <Route path="/r" element={<ReviewsSection mall={mallObject} />} />
        </Routes>
      </div>
    </div>
  );
};

export default MallPage;
