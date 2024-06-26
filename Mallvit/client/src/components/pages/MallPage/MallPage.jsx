// src/pages/MallPage.jsx
import React, { useState, Routes, Route, Outlet} from 'react';
import './MallPage.css';
import { malls } from '../../../utils/data';
import MallHeader from './partials/MallHeader';
import {useMall} from '../../../context/MallContext'
import StoresPage from './StoresPage';
import MapPage from './MapPage';
// import { useState} from 'react';


const MallPage = () => {
  const { mall } = useMall(); // Correct use of the useMall hook
  const ayalonMall = malls.find(mall => mall.name === "Ayalon Mall");
  const handleScroll = (e) => {
    e.preventDefault();
    const nextSection = document.getElementById('next-section');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <MallHeader mall={ayalonMall}></MallHeader>    
        <main className="mall-content">
        <div id="shops" className="shops-section">
          <h3>Shops List</h3>
          <ul>
            {Object.values(ayalonMall.stores).map(store => (
              <li key={store.id}>{store.name}</li>
            ))}
          </ul>
        </div>
      </main>

      {/* <main className="mall-content"> */}
        {/* <Routes> */}
          {/* <Route index element={<div>Select a section</div>} /> */}
          {/* <Route path="/mall/:mallName/stores" element={<StoresPage />} /> */}
          {/* <Route path="dining" element={<DiningPage />} /> */}
          {/* <Route path="/mall/:mallName/map" element={<MapPage />} /> */}
          {/* <Route path="deals" element={<DealsPage />} /> */}
        {/* </Routes> */}
      {/* </main> */}
    </div>
  );
};

export default MallPage;