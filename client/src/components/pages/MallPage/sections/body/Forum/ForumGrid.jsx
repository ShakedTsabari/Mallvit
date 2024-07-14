import React, { useState, useEffect } from 'react';
import './ForumGrid.css';

const ForumGrid = ({ selectedPost, mallName }) => {
  const [newComment, setNewComment] = useState({ name: '', body: '' });
  const [postWithComments, setPostWithComments] = useState(selectedPost || {});
  const [showCommentForm, setShowCommentForm] = useState(false);
  const baseUrl = 'http://localhost:3000/malls/';

  useEffect(() => {
    if (selectedPost) {
      setPostWithComments(selectedPost);
    }
  }, [selectedPost]);

  if (!selectedPost) {
    return (
      <div className="forum-grid-detail">
        <div className="post-detail-placeholder">
          Select a post to view details
        </div>
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

    try {
      const url = `${baseUrl}${mallName}/posts/${_id}/comments`;
      console.log('Posting to URL:', url);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
      const data = await response.json();
      console.log('New Comment Submitted:', newComment); // For demonstration
      if (data) {
        const updatedComments = [...postWithComments.comments, newComment];
        setPostWithComments({ ...postWithComments, comments: updatedComments });
        setNewComment({ name: '', body: '' });
        setShowCommentForm(false); // Hide the form after submitting
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="forum-grid-detail">
      <div className="post-detail-content">
        <div className="post-info-left">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        <div className="post-info-right">
          <span className="post-detail-author">Name: {name}</span>
          <span className="post-detail-time">Time: {curTimestamp}</span>
          <span className="post-detail-subject">Subject: {subject}</span>
          <span className="post-detail-store">Store: {store}</span>
        </div>
      </div>
      <div className="comments-section">
        <h4>Comments</h4>
        <div className="comments-list">
          {comments && comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                <span className="comment-author">{comment.name}</span>
                <span className="comment-timestamp">{new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <p className="comment-body">{comment.body}</p>
              </div>
            ))
          ) : (
            <div className="no-comments">No comments yet</div>
          )}
        </div>
      </div>
      <div className="add-comment-container">
        {!showCommentForm && (
          <button onClick={() => setShowCommentForm(true)}>Add Comment</button>
        )}
        {showCommentForm && (
          <div className="comments-container">
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
              <button type="submit">Submit Comment</button>
              <button type="button" onClick={() => setShowCommentForm(false)}>Cancel</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumGrid;
