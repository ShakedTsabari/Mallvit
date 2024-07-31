// import './App.css';
import React from 'react';
import AppHomePage from './components/pages/AppHomePage/AppHomePage ';
import MallPage from './components/pages/MallPage/MallPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MallProvider } from './context/MallContext';

function App() {
  return (
    <Router>
      <MallProvider>
      <Routes>
        <Route path="/" element={<AppHomePage/>} />
        <Route path="/malls/:mallName/*" element={<MallPage />} />
      </Routes>
      </MallProvider>
    </Router>
  );
}

export default App;
