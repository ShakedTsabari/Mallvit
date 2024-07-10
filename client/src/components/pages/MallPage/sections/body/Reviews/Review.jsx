// Review.js
import React from 'react';
import './Review.css';

const Review = ({ review }) => {
  return (
    <div className="review-container">
      <div className="review-header">
        {/* <img src={review.picture} alt={`${review.title} image`} className="review-image" /> */}
        <h3>{review.name}</h3>
        <h3>{review.subject}</h3>
      </div>
      <div className="review-content">
        <p>{review.content}</p>
        <span className="review-timestamp">{new Date(review.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
}; 

export default Review;
