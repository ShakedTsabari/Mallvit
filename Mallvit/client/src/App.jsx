import './App.css';
import React from 'react';
import AppHomePage from './components/pages/AppHomePage ';
import MallPage from './components/pages/MallPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Stores from './components/pages/Stores';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppHomePage />} />
        <Route path="/mall/:mallName" element={<MallPage />} />
          {/* <Route path="/mall/:mallName/stores" element={<Stores />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
