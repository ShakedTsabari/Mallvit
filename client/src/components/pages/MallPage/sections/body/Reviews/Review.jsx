import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    // Print the review object for debugging

    // Ensure review has all the necessary properties
    const subject = review.subject ;
    const name = review.name ;
    const body = review.body;
    const timestamp = new Date(review.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <div className="review-container">
            <div className="review-header">
                <h3><strong>{subject}</strong> | {name}</h3>
            </div>
            <div className="review-content">{body}</div>
            <div className="review-timestamp">{timestamp}</div>
        </div>
    );
};

export default Review;