import React, { useState } from 'react';
import './mallCard.css';
import { useNavigate } from 'react-router-dom';
import { useMall } from '../../../../../context/MallContext';

export default function MallCard({ mall, isFavorite, onFavorite }) {
    const navigate = useNavigate();
    const { setMall } = useMall(); 

    function handleClick() {
        setMall(mall);
        navigate(`/malls/${mall.title}`);
    }

    function handleFavoriteClick(e) {
        e.stopPropagation(); // Prevent triggering the card click
        onFavorite(mall); // Set the selected mall as favorite
    }

    return (
        <div className="card" onClick={handleClick} style={{ backgroundImage: `url(${mall.img})` }}>
            <div className={`favorite-icon ${isFavorite ? 'favorite' : ''}`} onClick={handleFavoriteClick}>
                {isFavorite ? '★' : '☆'}
            </div>
            <h2>{mall.title}</h2>
            <div className="card-header">
                <p>{mall.address}</p>
            </div>
            <div className="card-actions">
                <div><br></br></div>
            </div>
        </div>
    );
}
