import React, { useState, useEffect } from 'react';
import './ForumGrid.css';
import { fetchComments } from '../../../../../../api/comments';

const ForumGrid = ({ selectedPost, mallName }) => {
  const [newComment, setNewComment] = useState({ name: '', body: '' });
  const [postWithComments, setPostWithComments] = useState(selectedPost || {});
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (selectedPost) {
      setPostWithComments(selectedPost);
    }
  }, [selectedPost]);

  if (!selectedPost) {
    return (
      <div className="forum-grid-detail">
        <div className="no-posts">Select a post to view details 😉</div>
      </div>
    );
  }

  const { name, title, store, subject, body, timestamp, _id, comments } = postWithComments;
  const curTimestamp = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value, timestamp: new Date() });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const partialUrl = `${mallName}/posts/${_id}/comments`;
    const data = await fetchComments(newComment, partialUrl);
    if (data) {
      const updatedComments = [...postWithComments.comments, newComment];
      setPostWithComments({ ...postWithComments, comments: updatedComments });
      setNewComment({ name: '', body: '' });
    }
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="forum-grid-detail">
      <div className="post-detail-content">
        <div className="post-info">
          <h3>{title}</h3>
          <span className="post-detail-meta">Subject: {subject} | tagged store: {store}</span>
          <p>{body}</p>
          <span className="post-detail-meta">By {name} | {curTimestamp}</span>
        </div>
      </div>
      <div className="comments-container">
        <button onClick={handleToggleComments} className="toggle-comments-button">
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
        {showComments && (
          <div className="comments-section">
            <h4>Comments</h4>
            <div className="comments-list">
              {comments && comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <span className="comment-author">{comment.name}</span>
                    <p className="comment-body">{comment.body}</p>
                    <span className="comment-timestamp">
                      {new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))
              ) : (
                <div className="no-comments">No comments yet</div>
              )}
            </div>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={newComment.name}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="body"
                placeholder="Your Comment"
                value={newComment.body}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumGrid;
