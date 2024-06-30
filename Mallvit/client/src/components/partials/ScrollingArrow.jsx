// src/components/ScrollArrow.jsx
import React from 'react';
import './ScrollingArrow.css';

const ScrollingArrow = ({ targetId, tooltip }) => {
    const handleScroll = (e) => {
        e.preventDefault();
        const nextSection = document.getElementById(targetId);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="scroll-arrow" href={`#${targetId}`} title={tooltip} onClick={handleScroll}>
            <div className="scroll-arrow-circle" >
                {targetId == "section1" ? 
                <svg role="img" aria-label="Scroll Down" width="32" height="32" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z" />
                </svg>
                :
                <svg role="img" aria-label="Scroll Down" width="32" height="32" viewBox="0 0 24 24" style={{fill : 'black'}}>
                <path d="M12 16l-6-6h12z" />
                </svg>
                }           
            </div>
        </div>
    );
};

export default ScrollingArrow;
