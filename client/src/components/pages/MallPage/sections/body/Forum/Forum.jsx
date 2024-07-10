import React, { useState } from 'react';
import './ForumSection.css';

const ForumSection = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost('');
  };

  return (
    <div className="forum-section">
      <h2>Mall Forum</h2>
      <div className="chat">
        {posts.map((post, index) => (
          <div key={index} className="post">{post}</div>
        ))}
      </div>
      <form onSubmit={handlePostSubmit}>
        <textarea 
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default ForumSection;
