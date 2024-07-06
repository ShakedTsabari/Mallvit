import React from 'react';
import './StoresSection.css'; 

export default function StoresSection ({ mall }) {
    return (
        <div>
            <div className="store-container">
            {mall.stores.map((store, index) => (
                <div className="store-card" key={index}>
                    <div className="store-logo">
                        {/* Assuming store.logoUrl is the URL to the store's logo */}
                        <img src={store.img} alt={store.name} />
                    </div>
                    <div className="store-details">
                        <h3 className="store-name">{store.name}</h3>
                        {store.phoneNumber? 
                        <p className="store-phone-number"><strong>phone number:</strong> {store.phoneNumber}</p> 
                        : null}
                        <p className="store-phone-number"><strong>floor:</strong> {store.floor}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>

    );
}