import React from 'react';
import './PostsReview.css';
import PostCard from './PostCard';

const PostsReview = ({ posts, onPostClick, selectedPost }) => {
  return (
    <div className="posts-review">
      {posts.map((post, index) => (
        <PostCard 
          key={index} 
          post={post} 
          onClick={() => onPostClick(post)}
          isSelected={selectedPost && selectedPost.title === post.title}
        />
      ))}
    </div>
  );
};

export default PostsReview;
