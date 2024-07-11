import React, { useState } from 'react';
import './ForumSection.css';
import PostsReview from './PostsReview';
import ForumGrid from './ForumGrid';
import PostForm from './PostForm';

const ForumSection = () => {
  const [posts, setPosts] = useState([
    {
      author: 'Alice',
      timeAgo: '2 hours ago',
      title: 'Huge Sale This Weekend!',
      body: 'Don\'t miss out on the huge discounts at all stores.',
      category: 'Sales'
    },
    {
      author: 'Bob',
      timeAgo: '3 hours ago',
      title: 'Traffic Alert',
      body: 'Heavy traffic expected near the north entrance due to ongoing construction.',
      category: 'Traffic'
    },
    {
      author: 'Carol',
      timeAgo: '5 hours ago',
      title: 'Live Music Event',
      body: 'Join us for live music at the central plaza this Friday evening.',
      category: 'Events'
    }
  ]);

  const [newPost, setNewPost] = useState({ author: '', title: '', body: '', category: '' });
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostSubmit = (post) => {
    const newPostWithTime = { ...post, timeAgo: 'Just now' };
    setPosts([newPostWithTime, ...posts]);
    setNewPost({ author: '', title: '', body: '', category: '' });
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="forum-section">
      <h2>Mall Forum</h2>
      <div className="forum-grid">
        <PostsReview posts={posts} onPostClick={handlePostClick} selectedPost={selectedPost} />
        <ForumGrid selectedPost={selectedPost} />
      </div>
      <PostForm onPostSubmit={handlePostSubmit} />
    </div>
  );
};

export default ForumSection;
