import React from 'react';
import './mallCard.css';
import { useNavigate } from 'react-router-dom';
import { useMall } from '../../../../context/MallContext'; // Make sure to import useMall correctly

export default function MallCard({ mall }) {
    const navigate = useNavigate(); // Hook to get the navigate function
    const { setMall } = useMall(); // Correct use of the useMall hook

    function handleClick() {
        console.log(mall);
        setMall(mall);
        navigate(`/malls/${mall.title}`);
    }

    return (
        <div className="card" onClick={handleClick} style={{ backgroundImage: `url(${mall.img})` }}>
            <h2>{mall.title}</h2>
            <div className="card-header">
                <p>{mall.address}</p>
            </div>
            <div className="card-actions">
                <button>Add to Favorites</button>
            </div>
        </div>
    );
}
