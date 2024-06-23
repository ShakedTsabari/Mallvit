import React from 'react';
import './mallCard.css';
import { Link } from "react-router-dom";

export default function mallCard({ mall }) {
    return (
        <Link to={`/mall/${mall.name.replace(/\s+/g, '-').toLowerCase()}`} className="card-link">
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
        </Link>
    );
}
