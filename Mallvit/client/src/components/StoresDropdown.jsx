import React, { useEffect, useState, useRef } from 'react';
import { malls, graph, renderer } from '../utils/data';
import dijkstra from 'graphology-shortest-path/dijkstra'; 
import { isGraph } from 'graphology-utils';
// import sigma from 'sigma';


export default function StoresDropdown ({userInput}){
    const [selectedMall, setMall] = useState('');
    const [sourceStore, setSourceStore] = useState('');
    const [targetStore, setTargetStore] = useState('');
    const [shortestPath, setShortestPath] = useState('');
    // const [showGraph, setShowGraph] = useState(false); // New state to control graph rendering
    // const containerRef = useRef(null); // Ref for the graph container

    // useEffect(() => {
    //   // Render graph when showGraph is true and the graph container is ready
    //   if (showGraph && containerRef.current && isGraph(graph)) {
    //       const renderer = new sigma(graph, containerRef.current);
    //       return () => renderer.dispose();
    //   }
    // }, [showGraph]); // Re-run effect when showGraph changes


    function handleSubmit() {
        if (isGraph(graph) && sourceStore && targetStore) { // Ensure graph is valid and stores are selected
          try {
            const paths = dijkstra.singleSource(graph, sourceStore, {weight: 'weight'});
            // Check if a path exists to the targetStore
            if (paths && paths[targetStore]) {
              // Join the path array into a string with ' -> ' as the separator
              const pathString = paths[targetStore].join(' -> ');
              setShortestPath(pathString);
            //   setShowGraph(true); // Trigger graph rendering

            } else {
              setShortestPath('No path found');
            //   setShowGraph(false);

            }
          } catch (error) {
            console.error('Error calculating shortest path:', error);
            setShortestPath('Error calculating path');
            // setShowGraph(false);

          }
        }
      }
      
  
    return (
        <>
        <div className="dropdown-field">
            <select id="mallDropdown" onChange={(e) => setMall(e.target.value)}>
            <option value="">Select a Mall</option>
            {malls.map(mall => (
            <option key={mall.name} value={mall.name}>{mall.name}</option>
            ))}
            </select>
        </div>
        <p>
        <ol className="dropdown-field">
            <select id="storeDropdown" onChange={(e) => setSourceStore(e.target.value)}>
                <option value="">Source Store</option>
                {selectedMall && malls.find(mall => mall.name === selectedMall).stores &&
            Object.keys(malls.find(mall => mall.name === selectedMall).stores).map(storeName => (
              <option key={storeName} value={storeName}>{storeName}</option>
            ))}
            </select>
        </ol>
        <ol className="dropdown-field">
            <select id="storeDropdown" onChange={(e) => setTargetStore(e.target.value)}>
                <option value="">Destination Store</option>
                {selectedMall && malls.find(mall => mall.name === selectedMall).stores &&
                Object.keys(malls.find(mall => mall.name === selectedMall).stores).map(storeName => (
                <option key={storeName} value={storeName}>{storeName}</option>
            ))}
            </select>
        </ol>
        </p>
        <button onClick={handleSubmit} className="submit-button">Submit</button>
        {shortestPath && <p>Shortest path from {sourceStore} to {targetStore} is: {shortestPath}</p>}
        {/* {showGraph && <div ref={containerRef} style={{ height: "600px", width: "100%" }} />} */}
        </>
    )
}

