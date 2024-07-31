import React from 'react';
import './MapSection.css';

export default function MapPage({ mapSrc }) {
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="instructionBox">
          <h3 className="header">Map Functions:</h3>
          <p className="instructions">
            <strong>Left Click:</strong> Select a store, or drag the screen. <br />
            <strong>Right Click:</strong> Click and hold for map rotations. <br />
            <strong>Zoom In/Out:</strong> Use the scroll wheel or buttons to zoom. <br />
            <strong>Search:</strong> Use the search bar to find stores, facilities, or routes between 2 points. <br />
            <strong>Floor Button:</strong> Switch between different floors of the mall. <br />
            <strong>Accessible Button:</strong> Toggle accessible routes on and off. <br />
          </p>
        </div>
        <iframe
          src={mapSrc}
          title="Mappedin Map"
          allow="clipboard-write; web-share"
          scrolling="no"
          className="mapIframe"
        ></iframe>
      </div>
    </div>
  );
}




// import React from 'react';

// export default function MapPage({ mapSrc }) {
//   return (
//     <div style={styles.mainContainer}>
//       <div style={styles.contentContainer}>
//         <div style={styles.instructionBox}>
//           <h3 style={styles.header}>Map Functions:</h3>
//           <p style={styles.instructions}>
//             <strong>Left Click:</strong> Select a store, or drag the screen. <br />
//             <strong>Right Click:</strong> Click and hold for map rotations. <br />
//             <strong>Zoom In/Out:</strong> Use the scroll wheel or buttons to zoom. <br />
//             <strong>Search:</strong> Use the search bar to find stores, facilities, or routes between 2 points. <br />
//             <strong>Floor Button:</strong> Switch between different floors of the mall. <br />
//             <strong>Accessible Button:</strong> Toggle accessible routes on and off. <br />
//           </p>
//         </div>
//         <iframe
//           src={mapSrc}
//           title="Mappedin Map"
//           allow="clipboard-write; web-share"
//           scrolling="no"
//           style={{ width: '100%', height: '650px', border: 0 }}
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   mainContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//   },
//   contentContainer: {
//     width: '90%',
//     margin: '20px auto',
//     backgroundColor: '#fff',
//     padding: '20px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     top: '20px',
//     overflow: 'visible', // Ensure the button is not hidden
//   },
//   instructionBox: {
//     padding: '15px',
//     backgroundColor: '#fff',
//     marginBottom: '15px',
//     borderRadius: '8px',
//     border: '1px solid #ddd',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   header: {
//     color: '#333',
//     marginBottom: '10px',
//   },
//   instructions: {
//     color: '#666', 
//     fontSize: '14px',
//     lineHeight: '1.6',
//   },
// };
