import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ onPostSubmit, mall }) => {
  const [newPost, setNewPost] = useState({ name: '', title: '', store: '', subject: '', body: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value, timestamp: new Date() });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onPostSubmit(newPost);
    setNewPost({ name: '', title: '', store: '', subject: '', body: '' });
  };

  return (
    <form className="post-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={newPost.name}
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
        name="subject"
        value={newPost.subject}
        onChange={handleInputChange}
        required
      >
        <option value="">Select a subject</option>
        <option value="Sales">Sales</option>
        <option value="Traffic">Traffic</option>
        <option value="Events">Events</option>
        <option value="Food">Food</option>
        <option value="Parking">Parking</option>
        <option value="Other">Other</option>
      </select>
      <select
        name="store"
        value={newPost.store}
        onChange={handleInputChange}
      >
        <option value="">Tag a store</option>
        {mall && mall.stores && mall.stores.map((store, index) => (
          <option key={index} value={store.name}>{store.name}</option>
        ))}
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
