import React from 'react';
import './PostCard.css';

const PostCard = ({ post, onClick, isSelected }) => {
  const categoryColors = {
    Sales: 'lightblue',
    Traffic: 'lightcoral',
    Events: 'lightgreen'
  };

  return (
    <div 
      className={`post-card ${isSelected ? 'selected' : ''}`} 
      style={{ borderLeft: `5px solid ${categoryColors[post.category]}` }} 
      onClick={onClick}
    >
      <div className="post-header">
        <div className="post-info">
          <span className="post-author">{post.author}</span>
          <span className="post-time">{post.timeAgo}</span>
        </div>
        <div className="post-actions">
          <span className="post-icon">★</span>
          <span className="post-icon">🗑</span>
          <span className="post-icon animal-icon">🐱</span>
        </div>
      </div>
      <div className="post-content">
        <h4 className="post-title">{post.title}</h4>
        <p className="post-body">{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
