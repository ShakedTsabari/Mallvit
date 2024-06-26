import React from 'react';
import ReactDOM from 'react-dom/client';
import { getMapData, show3dMap } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/index.css";
import './index.css'
import App from './App.jsx'

const options = {
  key: '65ca6d27d53f21f234ae6395',
  secret: '0b25fc24d564c644443663d0b4d083605090d349975d0983fc96e06a5b1934dd',
  mapId: '66756578e4dd09000bf2ad00'
};

async function init() {
  const mapData = await getMapData(options);
  const mapView = await show3dMap(document.getElementById('mappedin-map'), mapData);
}

init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);