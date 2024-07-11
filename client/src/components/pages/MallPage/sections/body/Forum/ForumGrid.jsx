import React from 'react';
import './ForumGrid.css';

const ForumGrid = ({ selectedPost }) => {
  return (
    <div className="forum-grid-detail">
      {selectedPost ? (
        <div className="post-detail-content">
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.body}</p>
          <span className="post-detail-author">{selectedPost.author}</span>
          <span className="post-detail-time">{selectedPost.timeAgo}</span>
        </div>
      ) : (
        <div className="post-detail-placeholder">
          Select a post to view details
        </div>
      )}
    </div>
  );
};

export default ForumGrid;
