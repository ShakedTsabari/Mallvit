import React from 'react';
import './mallCard.css';

export default function mallCard({ mall }) {
    return (
        <div className="card" style={{ backgroundImage: `url(${mall.src})` }}>
            <div className="card-header">
                <h4>{mall.name}</h4>
                <p>{mall.address}</p>
            </div>
            <div className="card-content">
                {/* Additional content can be added here */}
            </div>
            <div className="card-actions">
                <button>Add to Favorites</button>
            </div>
        </div>
    );
}
