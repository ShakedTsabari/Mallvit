import React from 'react';
import './mallCard.css';
import { useNavigate } from 'react-router-dom';
import { useMall } from '../../../../context/MallContext'; // Make sure to import useMall correctly

export default function MallCard({ mall }) {
    const navigate = useNavigate(); // Hook to get the navigate function
    const { setMall } = useMall(); // Correct use of the useMall hook

    function handleClick() {
        setMall(mall);
        navigate(`/mall/${mall.name.replace(/\s+/g, '-').toLowerCase()}`);
    }

    return (
        <div className="card" onClick={handleClick} style={{ backgroundImage: `url(${mall.src})` }}>
            <h2>{mall.name}</h2>
            <div className="card-header">
                <p>{mall.address}</p>
            </div>
            <div className="card-actions">
                <button>Add to Favorites</button>
            </div>
        </div>
    );
}
