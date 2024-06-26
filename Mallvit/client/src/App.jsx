import './App.css';
import React from 'react';
import AppHomePage from './components/pages/AppHomePage/AppHomePage ';
import MallPage from './components/pages/MallPage/MallPage';
import StoresPage from './components/pages/MallPage/StoresPage';
// import DiningPage from './DiningPage';
import MapPage from './components/pages/MallPage/MapPage'; // This will display the map
// import DealsPage from './DealsPage';
// import NewsEventsPage from './NewsEventsPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Stores from './components/pages/MallPage/StoresPage';
import { MallProvider } from './context/MallContext';

function App() {
  // const [mall, setMall] = useState("");
  return (
    <Router>
      <MallProvider>
      <Routes>
        <Route path="/" element={<AppHomePage/>} />
        <Route path="/mall/:mallName" element={<MallPage />} />
        {/* <Route path="/mall/:mallName/stores" element={<StoresPage />} />
        <Route path="/mall/:mallName/dining" element={<DiningPage />} />
        <Route path="/mall/:mallName/map" element={<MapPage />} />
        <Route path="/mall/:mallName/deals" element={<DealsPage />} /> */}
        {/* <Route path="/mall/:mallName/news-events" element={<NewsEventsPage />} /> */}
      </Routes>
      </MallProvider>
    </Router>
  );
}

export default App;
