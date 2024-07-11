import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ onPostSubmit }) => {
  const [newPost, setNewPost] = useState({ author: '', title: '', body: '', category: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onPostSubmit(newPost);
  };

  return (
    <form className="post-form" onSubmit={handleFormSubmit}>
      <input 
        type="text"
        name="author"
        value={newPost.author}
        onChange={handleInputChange}
        placeholder="Your name"
        required
      />
      <input 
        type="text"
        name="title"
        value={newPost.title}
        onChange={handleInputChange}
        placeholder="Post title"
        required
      />
      <select 
        name="category"
        value={newPost.category}
        onChange={handleInputChange}
        required
      >
        <option value="">Select category</option>
        <option value="Sales">Sales</option>
        <option value="Traffic">Traffic</option>
        <option value="Events">Events</option>
      </select>
      <textarea 
        name="body"
        value={newPost.body}
        onChange={handleInputChange}
        placeholder="Share your thoughts..."
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
