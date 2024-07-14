import React from 'react';
import './PostCard.css';

const PostCard = ({ post, onClick, isSelected }) => {
  const subjectColors = {
    Sales: 'lightblue',
    Traffic: 'lightcoral',
    Events: 'lightgreen',
    Food: 'lightpink',
    Parking: 'lightgray',
    Other: 'lightgoldenrodyellow'
  };

  const { name, title, store, subject, body, timestamp, animalIcon } = post;
  const curTimestamp = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="post-card-container" onClick={onClick}>
      <div className={`post-card ${isSelected ? 'selected' : ''}`}>
        <div className="post-card-front" style={{ borderLeft: `7px solid ${subjectColors[subject]}`, padding: '10px' }}>
          <div className="post-header">
            <div className="post-info">
              <span className="post-author">{name}</span>
              <span className="post-time">{curTimestamp}</span>
            </div>
            <div className="post-actions">
              <span className="post-icon animal-icon">{animalIcon}</span>
            </div>
          </div>
          <div className="post-content">
            <h4 className="post-title">{title}</h4>
            <p className="post-body">{body}</p>
          </div>
          <div className="post-footer">
            <span className="post-store">{store}</span>
            <span className="post-subject">{subject}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
