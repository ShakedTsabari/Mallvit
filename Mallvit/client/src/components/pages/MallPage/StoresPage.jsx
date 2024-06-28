import React from 'react';
import './StoresPage.css'; 
import MallHeader from './partials/MallHeader';

const StoresPage = ({ mall }) => {
    return (
        <div>
            <div className="store-container">
            {mall.stores.map((store, index) => (
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
        </div>

    );
}

export default StoresPage;
