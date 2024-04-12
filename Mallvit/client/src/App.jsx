import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import StoresDropdown from './components/StoresDropdown';


function App() {

  // const fetchShortestPath = async (store1, store2) => {
  //   try {
  //     const response = await fetch(`/api/shortest-path?store1=${store1}&store2=${store2}`);
  //     const data = await response.json();
  //     setShortestPath(data.shortestPath);
  //   } catch (error) {
  //     console.error('Error fetching shortest path:', error);
  //   }
  // };

  return (
    <>
    <Header/>
    <div className='container'>
    <StoresDropdown/>
    
      
      {/* <p> 
      <input
        className='input-field'
        type="text"
        placeholder="First store"
        value={store1}
        onChange={(e) => setStore1(e.target.value)}
      />
      <input
        className='input-field'
        type="text"
        placeholder="Second store"
        value={store2}
        onChange={(e) => setStore2(e.target.value)}
      />
      </p> */}
    </div>
    </>
  );
}

export default App;
