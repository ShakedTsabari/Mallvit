import React from 'react';
import './StoresPage.css'; 

const StoresPage = ({ stores }) => {
    return (
        <div className="store-container">
            {stores.map((store, index) => (
                <div className="store-card" key={index}>
                    <div className="store-logo">
                        {/* Assuming store.logoUrl is the URL to the store's logo */}
                        <img src={store.logoUrl} alt={store.name} />
                    </div>
                    <div className="store-details">
                        <h3 className="store-name">{store.name}</h3>
                        <p className="store-hours"><strong>Opening Hours:</strong> {store.openingHours}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoresPage;
