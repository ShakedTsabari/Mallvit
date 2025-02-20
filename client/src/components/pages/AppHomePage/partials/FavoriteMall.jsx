import React from 'react';
import './FavoriteMall.css';
import { useNavigate } from 'react-router-dom';
import { useMall } from '../../../../context/MallContext';

export default function FavoriteMall({ favorite }) {
    const { setMall } = useMall(); 
    const navigate = useNavigate();

    function handleClick() {
        setMall(favorite);
        navigate(`/malls/${favorite.title}`);
    }

    return (
        <div className="favorite-section">
            {favorite ? (
                <button className="favorite-button"onClick={handleClick}> {favorite.title} ★ </button>
            ): 
            <div className="favorite-mall"></div>}
        </div>
    );
}
