// src/components/MallMap.jsx
import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network/standalone/umd/vis-network.min.js';
import 'vis-network/styles/vis-network.min.css';

const MallMap = ({ fromId, toId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/stores/shortest-path/${fromId}/${toId}`);
        const path = await response.json();

        const nodes = new vis.DataSet(
          path.map((node, index) => ({
            id: index,
            label: node.name,
          }))
        );

        const edges = new vis.DataSet(
          path.slice(1).map((node, index) => ({
            from: index,
            to: index + 1,
            arrows: 'to',
            label: `Cost: ${node.cost}`,
          }))
        );

        const data = {
          nodes,
          edges,
        };

        const options = {
          physics: false,
          edges: {
            smooth: {
              type: 'cubicBezier',
              forceDirection: 'horizontal',
              roundness: 0.4,
            },
          },
        };

        new Network(containerRef.current, data, options);
      } catch (error) {
        console.error('Error fetching the shortest path:', error);
      }
    };

    fetchData();
  }, [fromId, toId]);

  return <div ref={containerRef} style={{ height: '600px' }} />;
};

export default MallMap;
