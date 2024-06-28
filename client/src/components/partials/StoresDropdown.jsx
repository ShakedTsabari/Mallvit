import React, { useEffect, useState, useRef } from 'react';
import { malls, graph} from '../../utils/data';
import dijkstra from 'graphology-shortest-path/dijkstra'; 
import { isGraph } from 'graphology-utils';
import sigma from 'sigma';
import './StoresDropdown.css'


export default function StoresDropdown ({userInput}){
    const [selectedMall, setMall] = useState('');
    const [sourceStore, setSourceStore] = useState('');
    const [targetStore, setTargetStore] = useState('');
    const [storesInPath, setStoresInPath] = useState([]);
    const [shortestPath, setShortestPath] = useState('');
    const [numberOfStores, setNumberOfStores] = useState(0);
    const [showGraph, setShowGraph] = useState(false); // New state to control graph rendering
    const containerRef = useRef(null); // Ref for the graph container

    useEffect(() => {
      // Render graph when showGraph is true and the graph container is ready
      if (showGraph && containerRef.current && isGraph(graph)) {
          const renderer = new sigma(graph, containerRef.current);
          return () => renderer.dispose();
      }
    }, [showGraph]); // Re-run effect when showGraph changes

    function handleNumberOfStoresChange(event) {
        setNumberOfStores(parseInt(event.target.value));
    }

    function handleAddStore(newStoreInPath){
        setStoresInPath((prevStores) => {
            return [
                ...prevStores,
                newStoreInPath
            ]
        })
    }
    function handleSubmit() {
        if (isGraph(graph) && sourceStore && targetStore) { // Ensure graph is valid and stores are selected
            try {
                let finalPath = [];
                if (storesInPath.length === 0) {
                    // If no additional stores are added, find path from source to target directly
                    const paths = dijkstra.singleSource(graph, sourceStore, { weight: 'weight' });
                    if (paths && paths[targetStore]) {
                        finalPath = paths[targetStore];
                    } else {
                        setShortestPath('No path found');
                        setShowGraph(false);
                        return;
                    }
                } else {
                    // If additional stores are added, calculate path including those stores
                    let currentStore = sourceStore;
                    for (let i = 0; i < storesInPath.length; i++) {
                        const paths = dijkstra.singleSource(graph, currentStore, { weight: 'weight' });
                        if (paths && paths[storesInPath[i]]) {
                            finalPath = finalPath.concat(paths[storesInPath[i]].slice(1));
                            currentStore = storesInPath[i];
                        } else {
                            setShortestPath('No path found');
                            setShowGraph(false);
                            return;
                        }
                    }
                    const paths1 = dijkstra.singleSource(graph, currentStore, { weight: 'weight' });
                    if (paths1 && paths1[targetStore]) {
                        finalPath = finalPath.concat(paths1[targetStore].slice(1));
                    } else {
                        setShortestPath('No path found');
                        setShowGraph(false);
                        return;
                    }
                }
                
                const pathString = finalPath.join(' -> ');
                setShortestPath(pathString);
                setShowGraph(true); // Trigger graph rendering
            } catch (error) {
                console.error('Error calculating shortest path:', error);
                setShortestPath('Error calculating path');
                setShowGraph(false);
            }
        }
    }
      
    return (
        <>
        <div className="single-dropdown">
            <select id="mallDropdown" onChange={(e) => setMall(e.target.value)}>
            <option value="">Select a Mall</option>
            {malls.map(mall => (
            <option key={mall.name} value={mall.name}>{mall.name}</option>
            ))}
            </select>
        </div>
        <div className="multiple-dropdowns">
            <select id="storeDropdown" onChange={(e) => setSourceStore(e.target.value)}>
                <option value="">Source Store</option>
                {selectedMall && malls.find(mall => mall.name === selectedMall).stores &&
                Object.keys(malls.find(mall => mall.name === selectedMall).stores).map(storeName => (
                    <option key={storeName} value={storeName}>{storeName}</option>
                ))}
            </select>

            <select id="storeDropdown" onChange={(e) => setTargetStore(e.target.value)}>
                <option value="">Destination Store</option>
                {selectedMall && malls.find(mall => mall.name === selectedMall).stores &&
                Object.keys(malls.find(mall => mall.name === selectedMall).stores).map(storeName => (
                    <option key={storeName} value={storeName}>{storeName}</option>
                ))}
             </select>
        </div>
        <div>
            {/* Input to specify the number of stores */}
            <label htmlFor="numberOfStoresInput">How many stores do you want to stop on your path?  </label>
            <br></br>
            <input className = "input-field" type="number" value={numberOfStores} onChange={handleNumberOfStoresChange} />

            {/* Render dropdowns based on the number of stores */}
            {numberOfStores > 0 && (
                Array.from({ length: numberOfStores }, (_, index) => (
                    <div key={index} className="single-dropdown">
                        <select id={`storeDropdown-${index}`} onChange={(e) => handleAddStore(e.target.value)}>
                            <option value="">Select store {index + 1}</option>
                            {selectedMall && malls.find(mall => mall.name === selectedMall).stores &&
                                Object.keys(malls.find(mall => mall.name === selectedMall).stores).map(storeName => (
                                    <option key={storeName} value={storeName}>{storeName}</option>
                                ))}
                        </select>
                    </div>
                ))
            )}
        </div>
        <button onClick={handleSubmit} className="submit-button">Submit</button>
        {shortestPath && <p>Shortest path from {sourceStore} to {targetStore} is: {shortestPath}</p>}
        <div ref={containerRef} id="sigma-container" style={{ height: "600px", width: "100%" }} /> {/* Ensure this div is rendered */}
        {showGraph && <div ref={containerRef} style={{ height: "600px", width: "100%" }} />}


        </>
    )
}

