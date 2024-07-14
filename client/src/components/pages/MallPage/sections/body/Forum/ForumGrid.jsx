import React from 'react';
import './ForumGrid.css';

const ForumGrid = ({ selectedPost }) => {
  if (!selectedPost) {
    return (
      <div className="forum-grid-detail">
        <div className="post-detail-placeholder">
          Select a post to view details
        </div>
      </div>
    );
  }

  const curTimestamp = new Date(selectedPost.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Add dummy comments for testing
  const dummyComments = [
    { author: 'Alice', body: 'Great post!' },
    { author: 'Bob', body: 'Very informative, thank you.' },
    { author: 'Charlie', body: 'I have a question about this.' },
    { author: 'Dana', body: 'Can you provide more details?' },
    { author: 'Eve', body: 'Interesting perspective.' },
    { author: 'Frank', body: 'This is very helpful, thanks!' }
  ];

  const postWithComments = { ...selectedPost, comments: dummyComments };

  return (
    <div className="forum-grid-detail">
      <div className="post-detail-content">
        <h3>{postWithComments.title}</h3>
        <p>{postWithComments.body}</p>
        <span className="post-detail-author">{postWithComments.name}</span>
        <span className="post-detail-time">{curTimestamp}</span>
      </div>
      {/* <div className="comments-section">
        <h4>Comments</h4>
        <div className="comments-list">
          {postWithComments.comments && postWithComments.comments.length > 0 ? (
            postWithComments.comments.map((comment, index) => (
              <div key={index} className="comment">
                <span className="comment-author">{comment.author}</span>
                <p className="comment-body">{comment.body}</p>
              </div>
            ))
          ) : (
            <div className="no-comments">No comments yet</div>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default ForumGrid;
